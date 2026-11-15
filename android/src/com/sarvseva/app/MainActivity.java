package com.sarvseva.app;

import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowInsets;
import android.webkit.GeolocationPermissions;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends Activity {
    private static final String APP_BACKGROUND = "#06222c";
    private static final int MIN_TOP_DP = 36;
    private static final int MAX_TOP_DP = 64;
    private static final int LOCATION_REQUEST = 4711;

    private WebView webView;
    private AssetServer server;
    private GeolocationPermissions.Callback locationCallback;
    private String locationOrigin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Window window = getWindow();
        window.setBackgroundDrawable(new ColorDrawable(Color.parseColor(APP_BACKGROUND)));

        if (Build.VERSION.SDK_INT >= 30) {
            // Android 15 (API 35) forces edge-to-edge, and even older releases do
            // it once the bars are transparent, so the app handles the insets and
            // keeps the page out from under the status bar, notch and gesture bar.
            window.setDecorFitsSystemWindows(false);
        } else {
            window.setStatusBarColor(Color.parseColor(APP_BACKGROUND));
            window.setNavigationBarColor(Color.parseColor(APP_BACKGROUND));
        }
        // Dark chrome, so the system icons stay light on the teal background.
        window.getDecorView().setSystemUiVisibility(
                window.getDecorView().getSystemUiVisibility() & ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR);

        try {
            server = new AssetServer(getAssets(), "www");
            server.start();
        } catch (Exception e) {
            throw new RuntimeException("Could not start the local asset server", e);
        }

        webView = new WebView(this);
        webView.setBackgroundColor(Color.parseColor(APP_BACKGROUND));
        WebSettings settings = webView.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        // The hospital finder asks the page for a location; the page keeps the
        // coordinates, so nothing is stored or sent anywhere by the app itself.
        settings.setGeolocationEnabled(true);
        settings.setAllowFileAccess(false);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(false);
        webView.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                // The page is served by the in-process loopback server; everything
                // else (tel:, sms:, mailto:, https) belongs to another app.
                String url = request.getUrl().toString();
                if (url.startsWith("http://127.0.0.1:")) {
                    return false;
                }
                try {
                    startActivity(new Intent(Intent.ACTION_VIEW, Uri.parse(url)));
                } catch (ActivityNotFoundException e) {
                    // No dialler installed; the page already tells the user to
                    // type the number and offers a copy action.
                }
                return true;
            }
        });
        // Reserve room before the first insets arrive, in case the callback is
        // late or never fires on a particular ROM.
        webView.setWebChromeClient(new WebChromeClient() {
            @Override
            public void onGeolocationPermissionsShowPrompt(String origin, GeolocationPermissions.Callback callback) {
                locationCallback = callback;
                locationOrigin = origin;
                if (hasLocationPermission()) {
                    callback.invoke(origin, true, false);
                    clearLocationRequest();
                    return;
                }
                requestPermissions(new String[]{
                        Manifest.permission.ACCESS_FINE_LOCATION,
                        Manifest.permission.ACCESS_COARSE_LOCATION
                }, LOCATION_REQUEST);
            }
        });

        webView.setPadding(0, dip(MIN_TOP_DP), 0, 0);

        applySystemBarInsets(webView);

        setContentView(webView);
        android.util.Log.i("SarvSeva", "serving on port " + server.getPort());
        webView.loadUrl("http://127.0.0.1:" + server.getPort() + "/index.html");
    }

    /** Pads the page away from the status bar, display cutout and navigation bar. */
    private void applySystemBarInsets(final View view) {
        if (Build.VERSION.SDK_INT < 30) {
            return;
        }
        final int minTop = dip(MIN_TOP_DP);
        final int maxTop = dip(MAX_TOP_DP);
        view.setOnApplyWindowInsetsListener(new View.OnApplyWindowInsetsListener() {
            @Override
            public WindowInsets onApplyWindowInsets(View v, WindowInsets insets) {
                android.graphics.Insets bars = insets.getInsets(
                        WindowInsets.Type.systemBars() | WindowInsets.Type.displayCutout());
                // Follow the reported inset, fall back to the status bar height when
                // it reports nothing, and keep the result inside a sane band so the
                // header never floats halfway down the screen.
                int top = Math.max(bars.top, systemDimension("status_bar_height", 0));
                if (top <= 0) {
                    top = minTop;
                }
                top = Math.max(minTop, Math.min(top, maxTop));
                v.setPadding(bars.left, top, bars.right, bars.bottom);
                return insets;
            }
        });
    }

    private boolean hasLocationPermission() {
        return checkSelfPermission(Manifest.permission.ACCESS_FINE_LOCATION) == PackageManager.PERMISSION_GRANTED
                || checkSelfPermission(Manifest.permission.ACCESS_COARSE_LOCATION) == PackageManager.PERMISSION_GRANTED;
    }

    private void clearLocationRequest() {
        locationCallback = null;
        locationOrigin = null;
    }

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults);
        if (requestCode != LOCATION_REQUEST) {
            return;
        }
        boolean granted = false;
        for (int result : grantResults) {
            if (result == PackageManager.PERMISSION_GRANTED) {
                granted = true;
                break;
            }
        }
        if (locationCallback != null && locationOrigin != null) {
            // Denying is a normal answer: the page falls back to typing an area
            // and points people at 108.
            locationCallback.invoke(locationOrigin, granted, false);
        }
        clearLocationRequest();
    }

    @Override
    public void onBackPressed() {
        if (webView != null && webView.canGoBack()) {
            webView.goBack();
        } else {
            super.onBackPressed();
        }
    }

    @Override
    protected void onDestroy() {
        if (server != null) {
            server.stop();
        }
        super.onDestroy();
    }

    private int dip(int dp) {
        return Math.round(dp * getResources().getDisplayMetrics().density);
    }

    private int systemDimension(String name, int fallbackDp) {
        int id = getResources().getIdentifier(name, "dimen", "android");
        if (id > 0) {
            return getResources().getDimensionPixelSize(id);
        }
        return Math.round(fallbackDp * getResources().getDisplayMetrics().density);
    }
}
