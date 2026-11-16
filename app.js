const state = {
  locale: "en",
  screen: "landing",
  prev: "landing",
  phone: "",
  otpCode: "",
  sketchId: null,
  theme: "dark",
  color: "#6fe6d8",
  paint: {},
  history: []
};

const localeNames = { en: "English", hi: "हिंदी" };

const i18n = {
  en: {
    title: "SarvSeva",
    tagline: "Help that reaches you.",
    phoneLabel: "Mobile number",
    phonePlaceholder: "+919876543210",
    codeLabel: "6-digit code",
    otpTitle: "Check your phone",
    otpSubtitle: "We sent a 6-digit code to your number.",
    otpHint: "Code expires in a few minutes.",
    codeHint: "The code is 123456 and no SMS is sent.",
    nextLabel: "I have the code",
    createAccount: "Create account",
    resendLabel: "Resend code",
    resendHint: "Code not received? Try again.",
    registerTitle: "Set up your SarvSeva account",
    registerSubtitle: "Create a password and a quick PIN you can use to sign in fast.",
    passwordLabel: "Password",
    passwordHint: "Use something only you know.",
    pinLabel: "PIN (4-6 digits)",
    pinHint: "You will use this to sign in quickly.",
    pinConfirmLabel: "Confirm PIN",
    confirmMismatch: "PINs do not match.",
    loginTitle: "Sign in to SarvSeva",
    loginSubtitle: "Sign in once with a code, then save a PIN for fast sign-in.",
    meTitle: "Your SarvSeva account",
    resourcesTitle: "Available help",
    resourcesSubtitle: "Basic, public information to get started. Verified local data comes later.",
    categoriesLabel: "What kind of help are you looking for?",
    disclaimer: "SarvSeva is not an emergency service. If someone is in immediate danger, call local emergency services (for example 112).",
    footerNote: "SarvSeva app",
    otpSent: "Code sent.",
    otpVerified: "Code verified.",
    success: "Done.",
    errorBadPhone: "Enter a valid mobile number with country code.",
    errorOtpSent: "Could not send the code. Try again.",
    errorOtpBad: "Check the code and try again.",
    errorOtpUsed: "This code has already been used. Request a new one.",
    errorOtpExpired: "The code expired. Request a new one.",
    errorOtpAttempts: "Too many tries. Request a new code.",
    errorNoAccount: "No account found for this number. Start with a code to create one.",
    errorPasswordShort: "Password must be at least 8 characters.",
    errorPinShort: "PIN must be 4-6 digits.",
    errorPinMismatch: "PINs do not match.",
    errorPasswordWeak: "Pick a stronger password.",
    errorSessionInvalid: "Sign in again.",
    errorUnknown: "Something went wrong. Try again.",
    signIn: "Sign in",
    browseHelp: "Browse help",
    sendCode: "Send code",
    noAccount: "New here? Start here.",
    back: "Back",
    accountNameFallback: "Account",
    pinSignIn: "Sign in with PIN",
    signOut: "Sign out",
    language: "App language",
    comingSoon: "This part is still landing.",
    comingSoonSub: "The app shell is here; the next page is being built.",
    home: "Back home",
    trustCopy1: "Phone number only - no email required.",
    trustCopy2: "PIN sign-in you can use fast.",
    trustCopy3: "Starts with public sample data.",
    heroSub: "Support that follows through. Sign in with your mobile number to get started.",
    videoLabel: "SarvSeva · initiative film",
    aboutEyebrow: "The initiative",
    aboutTitle: "A help network that follows through.",
    aboutLead: "SarvSeva is a community effort to put verified local help within reach of anyone with a phone number - no email, no app store, no forms.",
    aboutParas: [
      "Most people in trouble are not short of information, they are short of the right next step. Numbers are scattered across posters and PDFs, in languages people do not read, and half of them lead nowhere.",
      "SarvSeva collects the few numbers that actually work, checks them, keeps them close, and then follows the request through - from the first call to the point where someone is actually helped."
    ],
    pillar1Title: "One number to start",
    pillar1Body: "Sign in with your phone. A code, then a PIN - no email, no password to forget.",
    pillar2Title: "Help in your language",
    pillar2Body: "Everything switches between Hindi and English, including the emergency list.",
    pillar3Title: "Built to be used",
    pillar3Body: "Large tap targets, simple pages, and a sketch corner for quieter moments.",
    ctaTitle: "Start with your phone number",
    ctaSub: "Sign in to pick up where you left off, or create an account with a password and a quick PIN.",
    registerCta: "Create account",
    finePrint: "No email needed. A 6-digit code, then a PIN for next time.",
    browseLink: "Just looking? Browse the help directory",
    home: "Home",
    menuLabel: "Menu",
    navAbout: "About",
    navJoin: "Join us",
    navSdg: "Sustainable Development Goals",
    navInitiatives: "Government initiatives",
    navSketch: "Sketch",
    navCareers: "Careers",
    navContact: "Contact us",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    themeLightShort: "Light",
    themeDarkShort: "Dark",
    aboutPageTitle: "About SarvSeva",
    aboutPageSub: "A community help network, built in the open.",
    aboutPageParas: [
      "SarvSeva started with one observation: in an emergency, people do not need more information, they need the next step. The right number, what to say, and what to do while help is on the way.",
      "So we built a small, fast, bilingual app that puts verified helplines, first-aid steps and government schemes in one place, and keeps working on a basic phone and a slow connection.",
      "Everything here is public and checkable. Numbers are traced to the authority that runs them, and anything we cannot verify yet is labelled as sample data."
    ],
    founderRole: "Founder, SarvSeva",
    founderNote: "Ayush founded SarvSeva and leads its product and field work. The idea came from watching a family spend twenty minutes searching for a number that should have been one tap away.",
    sdgEyebrow: "Global goals",
    sdgTitle: "Sustainable Development Goals",
    sdgSub: "Where SarvSeva's work connects to the global goals, with the 2030 target behind each one.",
    sdgGlobalTitle: "Where the 17 goals stand in 2025",
    sdgGlobalOk: "On track or moderate (35%)",
    sdgGlobalSlow: "Marginal or stagnating (47%)",
    sdgGlobalBad: "Regressed since 2015 (18%)",
    sdgStatLabel: "Latest data",
    sdgStatusOntrack: "On track",
    sdgStatusModerate: "Moderate progress",
    sdgStatusSlow: "Too slow",
    sdgStatusRegress: "Regressing",
    sdgSourcePrefix: "Source:",
    sdgSourceLink: "The Sustainable Development Goals Report 2025 (UN)",
    sdgTarget: "2030 target",
    sdgProgress: "Progress (sample)",
    sdgOurs: "How SarvSeva helps",
    initEyebrow: "Schemes",
    initTitle: "Government initiatives",
    initSub: "Schemes worth knowing, what they give you, and the official page to apply on.",
    initBenefit: "What you get",
    initHow: "How to apply",
    initOpen: "Open official page",
    careersTitle: "Careers",
    careersSoon: "Coming soon",
    careersBody: "We are not hiring through this screen yet. Roles in engineering, field operations and design will be listed here when we open them.",
    contactTitle: "Contact us",
    contactSub: "One inbox, read by the team.",
    contactNote: "Corrections to helpline numbers, partnership ideas, or anything urgent about the app.",
    emailCta: "Write to us",
    typeEmergency: "Emergency number",
    typeHelpline: "Helpline",
    typeGuidance: "Guidance",
    regionLabel: "Region",
    emergencyTab: "Emergency",
    emergencyTitle: "Emergency numbers in India",
    emergencySub: "Tap any number to call. 112 is the single number for police, fire and ambulance anywhere in India.",
    firstTitle: "What to do first",
    firstSteps: [
      "In danger right now? Dial 112 - police, fire and ambulance through one number, free from any phone.",
      "Can't speak safely? Text 112 with where you are and what is happening.",
      "Tell them exactly where you are: floor, landmark, or the nearest road.",
      "Get somewhere safer if you can, and stay on the line until they say you can hang up.",
      "Only once you are safe: 181 for a woman in danger, 1098 for a child, 1930 for money lost online."
    ],
    callLabel: "Call",
    navDirectory: "Verified help",
    navNeedHelp: "Get help",
    navOfferHelp: "Offer help",
    homeNeedTitle: "I need help",
    homeNeedBody: "Tell us what is happening and where. You review everything before it is shared.",
    homeOfferTitle: "I can help",
    homeOfferBody: "Offer time, skills or local knowledge to people near you.",
    homeServicesLink: "Or look up a verified helpline",
    needTitle: "Ask for help",
    needSub: "Three short steps. Nothing is shared until you review and confirm.",
    needStepOf: "Step {n} of 3",
    needStep1: "What is this about?",
    needStep1Hint: "Pick the closest match. You can add detail later.",
    needStep2: "The essentials",
    needWhat: "What is happening?",
    needWhatHint: "One or two sentences. Example: my father has chest pain and we need an ambulance.",
    needWhere: "Where?",
    needWhereHint: "A locality, landmark or area. Full address is not required.",
    needWherePlaceholder: "Example: Sector 12, near the bus depot",
    needUrgency: "How soon?",
    needUrgencyNow: "Right now",
    needUrgencyToday: "Today",
    needUrgencyWeek: "This week",
    needContact: "Safe contact number",
    needContactHint: "Shared only with helpers you approve. Not shown publicly.",
    needMore: "Add more detail (optional)",
    needMoreHelp: "Language you prefer, who else is involved, or anything a helper should know before calling.",
    needLanguage: "Preferred language",
    needDetails: "Anything else",
    needStep3: "Check before sharing",
    needReviewWho: "What will be shared",
    needReviewNote: "Only the helpers matched to your request see this. SarvSeva does not send police, ambulance or fire services, and this request is not an emergency call.",
    needConsent: "I understand this goes to community helpers, not to emergency services.",
    needShare: "Save request",
    needBack: "Back",
    needNext: "Continue",
    needEdit: "Edit",
    needSaved: "Saved on this phone.",
    needDraftResume: "You have an unfinished request saved on this phone.",
    needDraftResumeCta: "Resume it",
    needDraftDiscard: "Start over",
    needErrCategory: "Choose what this is about.",
    needErrWhat: "Add a sentence about what is happening.",
    needErrWhere: "Add a locality so helpers know roughly where to go.",
    needErrContact: "Add a number a helper can call.",
    needErrConsent: "Tick the box to confirm you understand who receives this.",
    locTitle: "Location",
    locManual: "Enter an area yourself",
    locPrecise: "Share my precise location",
    locExplain: "Precise location is more accurate but identifies you more closely. Area text is shown to matched helpers; precise coordinates are never listed publicly.",
    locRetention: "Kept with your request until you cancel it or delete it.",
    locStop: "You can remove sharing at any time from the request screen.",
    statusTitle: "Your request",
    statusSaved: "Saved on this phone",
    statusSavedWhat: "Your request is stored inside this app. It has not been sent to anyone yet.",
    statusSavedNext: "Keep this phone with you. If this is an emergency, call 112 now.",
    statusNotSentWarning: "No helper has received this request. SarvSeva is not connected to a dispatch service.",
    statusSend: "Send this request",
    statusSendAgain: "Try sending again",
    statusSendHint: "Sending is a separate step. Nothing leaves this phone unless you press this.",
    statusQueued: "Queued - not sent",
    statusQueuedWhat: "You tried to send this while offline. It is waiting inside this app and has not reached anyone.",
    statusQueuedNext: "It retries by itself when your connection comes back. You can also press try sending again - or call 112 if this is urgent.",
    statusRetryWaiting: "Waiting for a connection. This screen retries on its own, and each attempt is recorded below.",
    statusRetryFailedEvent: "Automatic retry failed. Nothing was delivered.",
    statusRetryFailedNotice: "An automatic retry at {time} did not go through, so nothing was delivered. The request is still saved on this phone.",
    statusRetryFailedFlash: "Automatic retry failed - nothing was sent. The request stays on this phone.",
    statusQueuedEvent: "Send attempted while offline. Queued on this phone; nothing was sent.",
    statusQueuedFlash: "Queued. Nothing was sent.",
    statusFailed: "Could not send",
    statusFailedWhat: "The send attempt did not go through, so nothing was delivered.",
    statusFailedNext: "Delivery is not switched on in this build. Your request is still saved here - call 112 if this is urgent.",
    statusFailedEvent: "Send attempt failed. Nothing was delivered.",
    statusFailedFlash: "Send failed. Nothing was delivered.",
    homeResumeTitle: "You have a saved request",
    homeResumeBody: "Reopen it to see what happened and what to do next.",
    homeResumeCta: "View my request",
    hospEyebrow: "Emergency care",
    hospTitle: "Find a hospital near you",
    hospSub: "Search an area, or share your location once. Nearest hospitals come first.",
    hospPlaceholder: "Area, landmark or hospital name",
    hospSearch: "Search",
    hospLocate: "Use my location",
    hospLocating: "Getting your location...",
    hospSearching: "Searching within 10 km...",
    hospCount: "Hospitals within {r} km: {n}",
    hospNearYou: "near you",
    hospEmpty: "No hospitals found within {r} km in OpenStreetMap. Call 108 for an ambulance.",
    hospDenied: "Location is off for this app. Type an area instead, or call 108.",
    hospLocError: "Could not get your location. Type an area instead, or call 108.",
    hospOffline: "Hospital search needs a connection. Call 108, or use the verified directory.",
    hospError: "The map service did not answer. Try again in a moment, or call 108.",
    hospBadArea: "That area was not found. Try a landmark or a city name.",
    hospAway: "{d} away",
    hospDirections: "Directions",
    hospPrivacy: "Only a rounded location (about 100 m) is sent to OpenStreetMap, and SarvSeva stores nothing.",
    hospNote: "OpenStreetMap data, not checked by SarvSeva. Hours, beds and emergency capacity are unknown - call 108 for an ambulance.",
    tabHome: "Home",
    tabFind: "Find",
    tabSos: "SOS",
    tabServices: "Services",
    tabProfile: "Profile",
    nearbySearching: "Searching within {r} km...",
    nearbyLocating: "Getting your location...",
    nearbyDenied: "Location is off for this app. Type an area instead.",
    nearbyLocError: "Could not get your location. Type an area instead.",
    nearbyOffline: "This needs a connection. Call 112 if it is urgent, and try again when you are online.",
    nearbyError: "The map service did not answer. Try again in a moment.",
    nearbyBadArea: "That area was not found. Try a landmark or a city name.",
    nearbyNearYou: "near you",
    nearbyAway: "{d} away",
    nearbyDirections: "Directions",
    nearbyPrivacy: "Only a rounded location (about 100 m) is sent to OpenStreetMap, and SarvSeva stores nothing.",
    pharmEyebrow: "Medical stores",
    pharmTitle: "Find a medical store near you",
    pharmSub: "Search an area, or share your location once. Closest stores come first.",
    pharmPlaceholder: "Area, landmark or store name",
    pharmCount: "Medical stores within {r} km: {n}",
    pharmEmpty: "No medical stores found within {r} km in OpenStreetMap. Ask at the nearest hospital.",
    pharmNote: "OpenStreetMap data, not checked by SarvSeva. Stock, timings and licences are unknown - call before you go.",
    pharmCallNote: "SarvSeva does not sell or deliver medicines. A pharmacist can advise on over-the-counter items.",
    policeEyebrow: "Police",
    policeTitle: "Nearest police station",
    policeSub: "Search an area, or share your location once. If a crime is happening now, call 112 first.",
    policePlaceholder: "Area, landmark or thana name",
    policeCount: "Police stations within {r} km: {n}",
    policeEmpty: "No police stations found within {r} km in OpenStreetMap. Call 112.",
    policeNote: "OpenStreetMap data, not checked by SarvSeva. A station may have moved or closed - call 100 to confirm.",
    policeCall112: "Call 112 (emergency)",
    policeCall100: "Call 100 (police)",
    svcEyebrow: "Everything in one place",
    svcTitle: "Services",
    svcSub: "Emergency and everyday health services, each on its own page.",
    svcAmb: "Ambulance",
    svcAmbBlurb: "Call 108, 102 or a private service.",
    svcAir: "Air ambulance",
    svcAirBlurb: "For long-distance critical transfers.",
    svcPharm: "Medical stores",
    svcPharmBlurb: "Find a pharmacy near you.",
    svcPolice: "Police station",
    svcPoliceBlurb: "The nearest one, with directions.",
    svcAdvice: "Medical advice",
    svcAdviceBlurb: "What to do, and when to go in.",
    svcMeds: "Common medicines",
    svcMedsBlurb: "Uses, cautions, and prescription marks.",
    svcInsurance: "Insurance",
    svcInsuranceBlurb: "Health, accident and life cover, explained.",
    svcNote: "SarvSeva does not dispatch ambulances, book beds or sell insurance. Every action here either calls a service or explains what to do.",
    sosEyebrow: "Emergency",
    sosTitle: "SOS",
    sosLead: "One tap calls 112. The buttons below send your location to someone you trust.",
    sosCall: "Call emergency services",
    sosSms: "Send SMS with location",
    sosWhatsapp: "Share on WhatsApp",
    sosLocHint: "Adding your location to the message...",
    sosLocReady: "Your message now includes a map link with your location.",
    sosLocFail: "Location is off, so the message has no map link. Add it yourself if you can.",
    sosMessage: "SOS - I need help. My location:",
    sosContactTitle: "Emergency contact",
    sosContactSub: "Saved on this phone only. Nothing is sent to SarvSeva.",
    sosContactName: "Name",
    sosContactPhone: "Phone number",
    sosContactSave: "Save contact",
    sosCallContact: "Call",
    sosContactNote: "This contact is not called automatically. You still have to press Call.",
    sosHonest: "SarvSeva cannot dispatch help. Calling 112 connects you to the police, fire or ambulance control room for your area.",
    ambEyebrow: "Ambulance",
    ambTitle: "Book an ambulance",
    ambLead: "The government numbers are free. Private services reach faster in some cities and charge money.",
    amb108Title: "Emergency ambulance",
    amb108Body: "Free, state-run, for any medical emergency.",
    amb102Title: "Pregnancy and child care",
    amb102Body: "Free ambulance for delivery, pregnancy and sick children.",
    amb112Title: "Police, fire and ambulance",
    amb112Body: "One number if you are not sure which service you need.",
    ambPrivateTitle: "Private ambulance",
    ambPrivateBody: "Private operators reach faster in many cities and charge per trip. Ask the price and which hospital they will take you to before you get in.",
    ambHonest: "SarvSeva does not dispatch an ambulance. These buttons call the service directly.",
    airEyebrow: "Critical transfer",
    airTitle: "Air ambulance",
    airLead: "An aircraft with a doctor and intensive-care equipment, for moving a critical patient between cities.",
    airWarn: "Air transfers are arranged by phone, cost lakhs, and need a hospital to accept the patient. They are not a first response - call 108 first.",
    airWhenTitle: "When it is used",
    airWhen: ["A head, spine or chest injury far from a trauma centre", "A patient who cannot travel by road or on a normal flight", "An organ being moved between hospitals", "A city where the needed ICU or specialist is not available"],
    airHowTitle: "How it is arranged",
    airHow: ["The treating hospital makes the referral and speaks to the receiving hospital", "The operator confirms the aircraft, medical crew and landing site", "Payment or the insurer's approval is settled before the flight", "A ground ambulance covers both ends of the journey"],
    airProvidersTitle: "Operators",
    airProviderNote: "Numbers and websites are taken from the operators' own sites. SarvSeva takes no commission and cannot confirm availability or price.",
    airHonest: "If the patient is in immediate danger, call 108 now. Air transfer can be discussed once they are stable.",
    airSite: "Website",
    advEyebrow: "Medical advice",
    advTitle: "What to do right now",
    advLead: "Plain guidance on the next step, and what not to wait on.",
    advNoDiagnosis: "SarvSeva does not diagnose or prescribe. A doctor, or a nurse on the 104 helpline, can.",
    advEmergencyTitle: "Call 108 or go to an emergency department",
    advEmergency: ["Chest pain or pressure, especially spreading to the arm or jaw", "Sudden weakness, a drooping face or slurred speech", "Trouble breathing, or blue lips", "Heavy bleeding that does not stop with pressure", "Unconscious, fitting, or confused after a head injury", "A baby under three months with fever", "Poisoning or a suspected overdose", "A large or deep burn"],
    advHelplinesTitle: "Talk to someone",
    adv104Name: "Health helpline 104",
    adv104Body: "Free medical advice from trained staff, in your state's language.",
    advTeleManasName: "Tele-MANAS 14416",
    advTeleManasBody: "Free mental health support, 24x7.",
    advWhenTitle: "Worth a same-day visit",
    advWhen: ["Fever above 39 degrees C, or lasting more than three days", "Vomiting or loose motions that stop you drinking", "A wound that is red, hot or leaking pus", "A new severe headache or a change in vision", "A child who is drowsy, feeding poorly or passing little urine"],
    advFirstAid: "First aid steps",
    advCall108: "Call 108",
    advCall112: "Call 112",
    advNote: "These are general signs, not a diagnosis. If you are unsure, call 104 or go to the nearest hospital - it is better to be seen.",
    medEyebrow: "Medicines",
    medTitle: "Common medicines",
    medLead: "What each one is for, the main caution, and whether it needs a prescription.",
    medRx: "Prescription needed",
    medOtc: "No prescription",
    medCaution: "Caution",
    medDisclaimer: "Read the pack before use. Doses differ for children, pregnancy and long-term conditions, so ask a pharmacist or doctor instead of guessing.",
    medAsk: "Never take an antibiotic or a strong painkiller because someone else's strip helped them.",
    insEyebrow: "Protection",
    insTitle: "Insurance that pays when something goes wrong",
    insLead: "One hospital stay can wipe out years of savings. These are the products that stop that, and where to read about them.",
    insProductsTitle: "The main products",
    insBeforeTitle: "Check before you buy",
    insBefore: ["Waiting period for pre-existing illnesses, often two to four years", "Room-rent and disease-wise caps that limit what is paid", "Network hospitals, if you want cashless treatment", "Whether day-care and ambulance charges are covered", "Claim settlement ratio and the insurer's complaint record"],
    insGovTitle: "Government schemes",
    insProvidersTitle: "Insurers and comparison sites",
    insProviderNote: "These links go to the companies' own websites. SarvSeva is not an insurer or an agent and earns nothing from them.",
    insGrievanceTitle: "If a claim is refused",
    insGrievance: "Complain to the insurer first, then to IRDAI's grievance system. IRDAI's helpline is 155255, and the Insurance Ombudsman handles disputes for free.",
    insVisit: "Open",
    insHonest: "Compare at least two quotes, and read what is excluded before you pay.",
    needExisting: "You already have a saved request.",
    statusTimeline: "What has happened",
    statusWhatNext: "What to do next",
    statusAutomated: "Automatic",
    statusHuman: "Confirmed by a person",
    statusCancel: "Cancel this request",
    statusCancelled: "Request cancelled.",
    statusShare: "Send it to someone you trust",
    statusShareHint: "Opens your phone's share sheet with the details you wrote.",
    statusNoRequest: "No request saved on this phone yet.",
    statusStart: "Start a request",
    statusLegend: "What the states mean",
    statusSec1: "Submitted - the app recorded it.",
    statusSec2: "Acknowledged - a person read it.",
    statusSec3: "Accepted - a helper agreed to respond.",
    statusSec4: "Completed - the helper confirmed an outcome.",
    statusSec5: "Expired or cancelled - nothing further will happen.",
    offerTitle: "Offer help",
    offerSub: "Tell us what you can offer and where. We only match you when someone nearby needs it.",
    offerSkills: "What can you offer?",
    offerSkillTime: "Time and company",
    offerSkillFood: "Food or supplies",
    offerSkillTransport: "Transport",
    offerSkillMedical: "First aid or medical",
    offerSkillTranslation: "Language help",
    offerSkillTech: "Phone or online help",
    offerAvail: "When are you usually free?",
    offerAvailDay: "Daytime",
    offerAvailEve: "Evenings",
    offerAvailWeekend: "Weekends",
    offerRadius: "How far can you travel?",
    offerRadiusNear: "My neighbourhood",
    offerRadiusCity: "My city",
    offerRadiusRemote: "Phone and online only",
    offerSafety: "Safety first",
    offerSafetyList: [
      "Do not enter unsafe places or handle hazards.",
      "Do not transport people you have not spoken to.",
      "Meet in a public place where you can.",
      "Share only what you choose. You can stop receiving requests at any time."
    ],
    offerSave: "Save my offer",
    offerSaved: "Offer saved on this phone.",
    offerNote: "Matching is not live yet. Your offer is stored here and nothing is sent until matching is switched on.",
    offerSavedWhat: "Your offer is stored inside this app.",
    notifyTitle: "Updates",
    notifySms: "Tell me by message when something changes",
    notifyPrivacy: "Messages will not name what happened - only that there is an update. Open the app to read it.",
    reportListing: "Report this listing",
    navOperations: "How we operate",
    termsLink: "Terms & Conditions",
    opsStatusLink: "Open the public status page",
    socialLabel: "Follow SarvSeva",
    aboutOpsTitle: "How we run it",
    aboutOpsBody: "Boundaries, moderation hours, who answers in an emergency, what we check on a listing and what happens when someone reports abuse - all written down in one place.",
    aboutOpsCta: "Read the operational detail",
    statCompDirectory: "Verified directory",
    statCompIntake: "Request intake",
    statCompMatching: "Volunteer matching",
    statCompModeration: "Moderation desk",
    statCompModerationNote: "Staffed 08:00-22:00 IST, seven days a week",
    statCompEmergency: "Emergency hand-off",
    statCompEmergencyNote: "Opens your own dialler with 112 typed in",
    statStateOk: "Operational",
    statStateWait: "Partial",
    statStateOff: "Not live",
    dirExpiredBadge: "Expired - not revalidated",
    dirExpiredToggleOne: "Show 1 expired listing",
    dirExpiredToggleMany: "Show {n} expired listings",
    dirExpiredHidden: "{n} expired, hidden",
    dirExpiredNote: "These passed their recheck date, so they are kept out of results until someone revalidates them.",
    sosLabel: "Emergency?",
    sosAction: "Call 112",
    sosSub: "One number for police, fire and ambulance.",
    dirTitle: "Verified help directory",
    dirSub: "Government helplines, each with the source we checked and the date we last checked it. SarvSeva does not run or dispatch these services.",
    dirSearch: "Search by name or number",
    dirAll: "All",
    dirCountOne: "service",
    dirCountMany: "services",
    dirCheckLabel: "Checked",
    dirSource: "Source",
    dirCoverage: "Coverage",
    dirHours: "Hours",
    dirStale: "Needs re-check",
    dirVerifiedBy: "Checked against",
    dirScope: "Scope of that check",
    dirReport: "Report a wrong listing",
    dirReportSubject: "Wrong listing on SarvSeva",
    dirEmpty: "No service matches that search.",
    dirNote: "If a number does not answer, call 112. To report a wrong listing, use Contact.",
    callSheetTitle: "Call {number}?",
    callSheetBody: "This opens your phone's dialler. SarvSeva does not contact police, ambulance or fire services for you, and no alert is sent on your behalf.",
    callSheetOpen: "Open dialler",
    callSheetCopy: "Copy number",
    callSheetCancel: "Cancel",
    callSheetCopied: "Number copied.",
    callSheetFallback: "If the dialler does not open, type the number yourself.",
    groupEmergency: "Core emergency",
    groupMedical: "Medical & mental health",
    groupWomen: "Women & children",
    groupOther: "Other helplines",
    emergencyNote: "These are government services, not SarvSeva. Numbers are national; a few state lines differ.",
    aidTab: "First aid",
    aidTitle: "What to do in an emergency",
    aidSub: "Practical first aid for the things that happen in daily life. Read a case once now - it is easier to follow when it matters.",
    aidBreathing: "Breathing & heart",
    aidBleeding: "Bleeding & injuries",
    aidBurns: "Burns, heat & bites",
    aidOther: "Fits, poisons & fainting",
    callNow: "Call 112",
    dontLabel: "Don't:",
    aidNote: "General guidance, not medical advice. For anything life-threatening, call 112 first.",
    aidNewsTitle: "News and research",
    aidNewsSub: "Picked from sources worth trusting, each with the month it was last checked. A reading list, not a live feed.",
    aidVideoTitle: "Watch and learn",
    aidVideoSub: "Videos from recognised trainers and hospitals. They open on YouTube, so the app carries no player or trackers.",
    newsChecked: "Checked",
    watchOn: "Watch",
    tabResearch: "Research",
    tabVideos: "Videos",
    sketchTab: "Sketch",
    sketchTitle: "Sketch & colour",
    sketchSub: "Pick a drawing, choose a colour and fill the shapes. A quiet way to pass the time.",
    sketchPickTitle: "Pick a sketch",
    sketchPickSub: "Line drawings on SarvSeva's themes: flight, safety, health, shelter and learning.",
    colourLabel: "Colour",
    undo: "Undo",
    clear: "Start over",
    save: "Save picture",
    sketchBack: "All sketches",
    sketchNote: "Drawings stay in this browser tab only - nothing is uploaded.",
    savedMsg: "Picture saved.",
    saveFail: "Could not save the picture here.",
    topicFlight: "Flight",
    topicSafety: "Safety",
    topicHealth: "Health",
    topicHome: "Shelter",
    topicLearn: "Learning"
  },
  hi: {
    title: "सर्वसेवा",
    tagline: "जो तुम तक पहुँचे।",
    phoneLabel: "मोबाइल नंबर",
    phonePlaceholder: "+919876543210",
    codeLabel: "6 अंकों का कोड",
    otpTitle: "अपने फ़ोन की जाँच करें",
    otpSubtitle: "हमने तुम्हारे नंबर पर 6 अंकों का कोड भेजा है।",
    otpHint: "कोड कुछ मिनट में समाप्त हो जाता है।",
    codeHint: "कोड 123456 है और कोई एसएमएस नहीं जाता।",
    nextLabel: "कोड मिल गया",
    createAccount: "अकाउंट बनाएँ",
    resendLabel: "कोड दोबारा भेजें",
    resendHint: "कोड नहीं मिला? दोबारा कोशिश करें।",
    registerTitle: "अपना SarvSeva अकाउंट सेट करें",
    registerSubtitle: "एक पासवर्ड और जल्दी साइनइन के लिए एक PIN बनाएँ।",
    passwordLabel: "पासवर्ड",
    passwordHint: "कुछ ऐसा चुनें जो सिर्फ तुम जानते हो।",
    pinLabel: "PIN (4-6 अंक)",
    pinHint: "तुम इसे जल्दी साइनइन के लिए इस्तेमाल करोगे।",
    pinConfirmLabel: "PIN दोबारा लिखें",
    confirmMismatch: "PIN मेल नहीं खा रहे।",
    loginTitle: "SarvSeva में साइनइन करें",
    loginSubtitle: "एक बार कोड से साइनइन करें, फिर तेज़ साइनइन के लिए PIN सहेजें।",
    meTitle: "तुम्हारा SarvSeva अकाउंट",
    resourcesTitle: "उपलब्ध मदद",
    resourcesSubtitle: "शुरू करने के लिए बुनियादी सार्वजनिक जानकारी। पुष्टि की गई स्थानीय जानकारी बाद में आएगी।",
    categoriesLabel: "तुम किस तरह की मदद खोज रहे हो?",
    disclaimer: "SarvSeva आपातकालीन सेवा नहीं है। अगर किसी को तुरंत खतरा है, तो स्थानीय आपातकालीन सेवाओं को कॉल करें (उदाहरण के लिए 112)।",
    footerNote: "सर्वसेवा ऐप",
    otpSent: "कोड भेजा गया।",
    otpVerified: "कोड पुष्टि हो गया।",
    success: "हो गया।",
    errorBadPhone: "देश का कोड सहित एक मान्य मोबाइल नंबर डालें।",
    errorOtpSent: "कोड नहीं भेज सके। दोबारा कोशिश करें।",
    errorOtpBad: "कोड जाँचें और दोबारा कोशिश करें।",
    errorOtpUsed: "यह कोड पहले ही इस्तेमाल हो चुका है। नया कोड माँगें।",
    errorOtpExpired: "कोड समाप्त हो गया। नया कोड माँगें।",
    errorOtpAttempts: "बहुत बार कोशिश हो गई। नया कोड माँगें।",
    errorNoAccount: "इस नंबर का कोई अकाउंट नहीं मिला। अकाउंट बनाने के लिए कोड से शुरू करें।",
    errorPasswordShort: "पासवर्ड कम से कम 8 अक्षरों का होना चाहिए।",
    errorPinShort: "PIN 4-6 अंकों का होना चाहिए।",
    errorPinMismatch: "PIN मेल नहीं खा रहे।",
    errorPasswordWeak: "ज़्यादा मज़बूत पासवर्ड चुनें।",
    errorSessionInvalid: "दोबारा साइनइन करें।",
    errorUnknown: "कुछ गड़बड़ हो गई। दोबारा कोशिश करें।",
    signIn: "साइन इन",
    browseHelp: "मदद देखें",
    sendCode: "कोड भेजें",
    noAccount: "पहली बार आए हो? यहाँ से शुरू करें।",
    back: "वापस",
    accountNameFallback: "अकाउंट",
    pinSignIn: "PIN से साइन इन",
    signOut: "साइन आउट",
    language: "ऐप की भाषा",
    comingSoon: "यह हिस्सा अभी बन रहा है।",
    comingSoonSub: "ऐप का ढाँचा तैयार है; अगला पेज बन रहा है।",
    home: "होम पर वापस",
    trustCopy1: "सिर्फ मोबाइल नंबर - ईमेल की ज़रूरत नहीं।",
    trustCopy2: "तेज़ साइन इन के लिए PIN।",
    trustCopy3: "सार्वजनिक सैंपल डेटा से शुरुआत।",
    heroSub: "मदद जो पूरी होने तक साथ रहे। अपने मोबाइल नंबर से साइन इन करके शुरू करें।",
    videoLabel: "सर्वसेवा · पहल फ़िल्म",
    aboutEyebrow: "इस पहल के बारे में",
    aboutTitle: "मदद जो आख़िर तक साथ रहे।",
    aboutLead: "सर्वसेवा एक सामूहिक पहल है - जिसके पास सिर्फ़ एक फ़ोन नंबर है, उस तक भरोसेमंद स्थानीय मदद पहुँचाने के लिए। न ईमेल, न ऐप स्टोर, न फ़ॉर्म।",
    aboutParas: [
      "मुसीबत में फँसे लोगों के पास जानकारी की कमी नहीं होती, सही अगले कदम की होती है। नंबर पोस्टर और PDF में बिखरे हैं, उन भाषकाओं में जो लोग पढ़ नहीं पाते, और आधे तो कहीं जाते ही नहीं।",
      "सर्वसेवा उन कुछ नंबरों को इकट्ठा करता है जो सच में काम करते हैं, उन्हें जाँचता है, पास रखता है - और फिर अनुरोध के साथ चलता है, पहली कॉल से लेकर उस पल तक जब सच में मदद मिलती है।"
    ],
    pillar1Title: "शुरुआत एक नंबर से",
    pillar1Body: "फ़ोन नंबर से साइन इन करें। एक कोड, फिर एक PIN - न ईमेल, न भूलने वाला पासवर्ड।",
    pillar2Title: "आपकी भाषा में मदद",
    pillar2Body: "सब कुछ हिंदी और अंग्रेज़ी में बदलता है, आपातकालीन सूची भी।",
    pillar3Title: "इस्तेमाल के लिए बना",
    pillar3Body: "बड़े टैप बटन, सरल पेज, और थोड़ी देर के लिए एक स्केच कोना।",
    ctaTitle: "अपने मोबाइल नंबर से शुरू करें",
    ctaSub: "जहाँ छोड़ा था वहीं से शुरू करने के लिए साइन इन करें, या पासवर्ड और PIN के साथ अकाउंट बनाएँ।",
    registerCta: "अकाउंट बनाएँ",
    finePrint: "ईमेल की ज़रूरत नहीं। 6 अंकों का कोड, फिर अगली बार के लिए PIN।",
    browseLink: "सिर्फ़ देखना है? मदद की सूची देखें",
    home: "होम",
    menuLabel: "मेन्यू",
    navAbout: "हमारे बारे में",
    navJoin: "जुड़िए",
    navSdg: "सतत विकास लक्ष्य",
    navInitiatives: "सरकारी योजनाएँ",
    navSketch: "स्केच",
    navCareers: "करियर",
    navContact: "संपर्क करें",
    themeLight: "लाइट थीम चुनें",
    themeDark: "डार्क थीम चुनें",
    themeLightShort: "लाइट",
    themeDarkShort: "डार्क",
    aboutPageTitle: "सर्वसेवा के बारे में",
    aboutPageSub: "एक सामुदायिक मदद नेटवर्क, खुले तौर पर बनाया गया।",
    aboutPageParas: [
      "सर्वसेवा की शुरुआत एक बात से हुई: आपात स्थिति में लोगों को ज़्यादा जानकारी नहीं, अगला कदम चाहिए। सही नंबर, क्या कहना है, और मदद आने तक क्या करना है।",
      "इसलिए हमने एक छोटा, तेज़, द्विभाषी ऐप बनाया जो जाँचे हुए हेल्पलाइन नंबर, प्राथमिक मदद और सरकारी योजनाएँ एक जगह रखता है, और साधारण फ़ोन व धीमे नेट पर भी चलता है।",
      "यहाँ सब कुछ सार्वजनिक और जाँचने योग्य है। नंबर उसी संस्था तक जोड़े गए हैं जो उन्हें चलाती है, और जो अभी जाँचा नहीं गया वह सैंपल डेटा कहकर लिखा है।"
    ],
    founderRole: "संस्थापक, सर्वसेवा",
    founderNote: "आयुष ने सर्वसेवा शुरू किया और इसके उत्पाद व फ़ील्ड काम का नेतृत्व करते हैं। विचार एक परिवार को बीस मिनट तक ऐसा नंबर ढूँढ़ते देखकर आया जो एक टैप दूर होना चाहिए था।",
    sdgEyebrow: "वैश्विक लक्ष्य",
    sdgTitle: "सतत विकास लक्ष्य",
    sdgSub: "सर्वसेवा का काम किन वैश्विक लक्ष्यों से जुड़ता है, और हर लक्ष्य के पीछे 2030 का क्या लक्ष्य है।",
    sdgGlobalTitle: "2025 में 17 लक्ष्य कहाँ खड़े हैं",
    sdgGlobalOk: "राह पर या मध्यम प्रगति (35%)",
    sdgGlobalSlow: "मामूली या ठहराव (47%)",
    sdgGlobalBad: "2015 से पीछे (18%)",
    sdgStatLabel: "नवीनतम आँकड़े",
    sdgStatusOntrack: "राह पर",
    sdgStatusModerate: "मध्यम प्रगति",
    sdgStatusSlow: "बहुत धीमी",
    sdgStatusRegress: "पीछे जा रहा",
    sdgSourcePrefix: "स्रोत:",
    sdgSourceLink: "सतत विकास लक्ष्य रिपोर्ट 2025 (संयुक्त राष्ट्र)",
    sdgTarget: "2030 लक्ष्य",
    sdgProgress: "प्रगति (नमूना)",
    sdgOurs: "सर्वसेवा कैसे मदद करता है",
    initEyebrow: "योजनाएँ",
    initTitle: "सरकारी योजनाएँ",
    initSub: "जानने लायक योजनाएँ, उनसे क्या मिलता है, और आवेदन की आधिकारिक लिंक।",
    initBenefit: "क्या मिलता है",
    initHow: "आवेदन कैसे करें",
    initOpen: "आधिकारिक पेज खोलें",
    careersTitle: "करियर",
    careersSoon: "जल्द आ रहा है",
    careersBody: "अभी हम इस स्क्रीन से भर्ती नहीं कर रहे। इंजीनियरिंग, फ़ील्ड ऑपरेशन और डिज़ाइन की भूमिकाएँ खुलने पर यहाँ दिखेंगी।",
    contactTitle: "संपर्क करें",
    contactSub: "एक ही इनबॉक्स, टीम पढ़ती है।",
    contactNote: "हेल्पलाइन नंबर में सुधार, साझेदारी के विचार, या ऐप से जुड़ी कोई ज़रूरी बात।",
    emailCta: "हमें लिखें",
    typeEmergency: "आपातकालीन नंबर",
    typeHelpline: "हेल्पलाइन",
    typeGuidance: "जानकारी",
    regionLabel: "क्षेत्र",
    emergencyTab: "इमरजेंसी",
    emergencyTitle: "भारत के आपातकालीन नंबर",
    emergencySub: "किसी भी नंबर पर टैप करके कॉल करें। 112 पूरे भारत में पुलिस, फायर और एम्बुलेंस के लिए एक ही नंबर है।",
    firstTitle: "सबसे पहले क्या करें",
    firstSteps: [
      "अभी खतरे में हैं? 112 पर कॉल करें - पुलिस, फायर और एम्बुलेंस एक ही नंबर से, किसी भी फ़ोन से मुफ़्त।",
      "सुरक्षित रूप से बोल नहीं सकते? 112 पर मैसेज करें - आप कहाँ हैं और क्या हो रहा है।",
      "उन्हें ठीक-ठीक बताएँ कि आप कहाँ हैं: मंज़िल, कोई पहचान की जगह, या सबसे नज़दीकी सड़क।",
      "मौका हो तो किसी सुरक्षित जगह चले जाएँ, और फ़ोन तब तक मत काटें जब तक वे न कहें।",
      "सुरक्षित होने के बाद ही: खतरे में महिला के लिए 181, बच्चे के लिए 1098, ऑनलाइन पैसा गँवाने पर 1930।"
    ],
    callLabel: "कॉल",
    navDirectory: "सत्यापित मदद",
    navNeedHelp: "मदद लें",
    navOfferHelp: "मदद दें",
    homeNeedTitle: "मुझे मदद चाहिए",
    homeNeedBody: "बताएँ क्या हो रहा है और कहाँ। साझा करने से पहले आप सब कुछ देख लेंगे।",
    homeOfferTitle: "मैं मदद कर सकता/सकती हूँ",
    homeOfferBody: "अपना समय, हुनर या स्थानीय जानकारी पास के लोगों को दें।",
    homeServicesLink: "या कोई सत्यापित हेल्पलाइन देखें",
    needTitle: "मदद माँगें",
    needSub: "तीन छोटे चरण। जब तक आप जाँचकर पुष्टि नहीं करेंगे, कुछ साझा नहीं होगा।",
    needStepOf: "चरण {n} में से 3",
    needStep1: "यह किस बारे में है?",
    needStep1Hint: "सबसे मिलता-जुलता विकल्प चुनें। बाद में विस्तार जोड़ सकते हैं।",
    needStep2: "ज़रूरी बातें",
    needWhat: "क्या हो रहा है?",
    needWhatHint: "एक-दो वाक्य। उदाहरण: पिताजी को सीने में दर्द है और एम्बुलेंस चाहिए।",
    needWhere: "कहाँ?",
    needWhereHint: "मोहल्ला, पहचान की जगह या इलाका। पूरा पता ज़रूरी नहीं।",
    needWherePlaceholder: "उदाहरण: सेक्टर 12, बस डिपो के पास",
    needUrgency: "कितनी जल्दी?",
    needUrgencyNow: "अभी",
    needUrgencyToday: "आज",
    needUrgencyWeek: "इस हफ़्ते",
    needContact: "सुरक्षित संपर्क नंबर",
    needContactHint: "सिर्फ़ उन मददगारों को, जिन्हें आप स्वीकार करें। सार्वजनिक नहीं।",
    needMore: "और जानकारी जोड़ें (वैकल्पिक)",
    needMoreHelp: "पसंदीदा भाषा, साथ में कौन है, या कॉल से पहले जो जानना ज़रूरी हो।",
    needLanguage: "पसंदीदा भाषा",
    needDetails: "कुछ और",
    needStep3: "साझा करने से पहले जाँचें",
    needReviewWho: "क्या साझा होगा",
    needReviewNote: "यह सिर्फ़ उन मददगारों को दिखेगा जो आपके अनुरोध से जुड़े हैं। SarvSeva पुलिस, एम्बुलेंस या फायर नहीं भेजता, और यह आपातकालीन कॉल नहीं है।",
    needConsent: "मैं समझता/समझती हूँ कि यह सामुदायिक मददगारों के पास जाता है, आपातकालीन सेवाओं के पास नहीं।",
    needShare: "अनुरोध सहेजें",
    needBack: "पीछे",
    needNext: "आगे",
    needEdit: "बदलें",
    needSaved: "इस फ़ोन पर सहेजा गया।",
    needDraftResume: "इस फ़ोन पर आपका एक अधूरा अनुरोध सहेजा है।",
    needDraftResumeCta: "उसे पूरा करें",
    needDraftDiscard: "नया शुरू करें",
    needErrCategory: "चुनें कि यह किस बारे में है।",
    needErrWhat: "एक वाक्य लिखें कि क्या हो रहा है।",
    needErrWhere: "इलाका लिखें ताकि मददगार जगह समझ सकें।",
    needErrContact: "वह नंबर लिखें जिस पर मददगार कॉल करें।",
    needErrConsent: "यह पुष्टि करने के लिए बॉक्स पर टिक करें कि यह किसे मिलता है।",
    locTitle: "स्थान",
    locManual: "इलाका खुद लिखें",
    locPrecise: "मेरी सटीक लोकेशन साझा करें",
    locExplain: "सटीक लोकेशन ज़्यादा सही होती है, पर आपको ज़्यादा पहचानती है। इलाके का पाठ मिले हुए मददगारों को दिखेगा; सटीक निर्देशांक कभी सार्वजनिक नहीं होते।",
    locRetention: "जब तक आप रद्द या हटाएँ नहीं, आपके अनुरोध के साथ रहती है।",
    locStop: "अनुरोध स्क्रीन से आप कभी भी साझा करना बंद कर सकते हैं।",
    statusTitle: "आपका अनुरोध",
    statusSaved: "इस फ़ोन पर सहेजा",
    statusSavedWhat: "आपका अनुरोध इस ऐप के अंदर सहेजा है। यह अभी किसी को नहीं भेजा गया।",
    statusSavedNext: "यह फ़ोन अपने पास रखें। आपातकाल हो तो अभी 112 पर कॉल करें।",
    statusNotSentWarning: "यह अनुरोध किसी मददगार तक नहीं पहुँचा। SarvSeva किसी डिस्पैच सेवा से जुड़ा नहीं है।",
    statusSend: "यह अनुरोध भेजें",
    statusSendAgain: "दोबारा भेजने की कोशिश करें",
    statusSendHint: "भेजना अलग कदम है। जब तक आप यह न दबाएँ, कुछ भी फ़ोन से बाहर नहीं जाता।",
    statusQueued: "कतार में - भेजा नहीं गया",
    statusQueuedWhat: "आपने ऑफ़लाइन रहते भेजने की कोशिश की। यह ऐप के अंदर कतार में है और किसी तक नहीं पहुँचा।",
    statusQueuedNext: "कनेक्शन आते ही यह खुद दोबारा कोशिश करता है। आप दोबारा भेजने का बटन भी दबा सकते हैं - और ज़रूरी हो तो 112 पर कॉल करें।",
    statusRetryWaiting: "कनेक्शन का इंतज़ार। यह स्क्रीन खुद दोबारा कोशिश करती है, और हर कोशिश नीचे दर्ज होती है।",
    statusRetryFailedEvent: "अपने आप दोबारा कोशिश हुई और विफल रही। कुछ भी नहीं पहुँचा।",
    statusRetryFailedNotice: "{time} पर अपने आप दोबारा कोशिश हुई, वह पूरी नहीं हुई, इसलिए कुछ भी नहीं पहुँचा। अनुरोध अभी भी इस फ़ोन में सहेजा है।",
    statusRetryFailedFlash: "अपने आप दोबारा कोशिश विफल - कुछ नहीं भेजा गया। अनुरोध इस फ़ोन पर ही सहेजा है।",
    statusQueuedEvent: "ऑफ़लाइन रहते भेजने की कोशिश हुई। इस फ़ोन पर कतार में; कुछ नहीं भेजा गया।",
    statusQueuedFlash: "कतार में रखा गया। कुछ नहीं भेजा गया।",
    statusFailed: "भेजा नहीं जा सका",
    statusFailedWhat: "भेजने की कोशिश पूरी नहीं हुई, इसलिए कुछ भी नहीं पहुँचा।",
    statusFailedNext: "इस बिल्ड में डिलीवरी चालू नहीं है। आपका अनुरोध यहीं सहेजा है - ज़रूरी हो तो 112 पर कॉल करें।",
    statusFailedEvent: "भेजने की कोशिश विफल रही। कुछ नहीं पहुँचा।",
    statusFailedFlash: "भेजना विफल। कुछ नहीं पहुँचा।",
    homeResumeTitle: "आपका एक अनुरोध सहेजा है",
    homeResumeBody: "उसे फिर खोलकर देखें कि क्या हुआ और आगे क्या करें।",
    homeResumeCta: "मेरा अनुरोध देखें",
    hospEyebrow: "आपातकालीन देखभाल",
    hospTitle: "अपने पास अस्पताल खोजें",
    hospSub: "कोई इलाका खोजें, या एक बार अपनी लोकेशन साझा करें। सबसे नज़दीकी अस्पताल पहले।",
    hospPlaceholder: "इलाका, पहचान की जगह या अस्पताल का नाम",
    hospSearch: "खोजें",
    hospLocate: "मेरी लोकेशन इस्तेमाल करें",
    hospLocating: "आपकी लोकेशन ले रहे हैं...",
    hospSearching: "10 किमी के भीतर खोज रहे हैं...",
    hospCount: "{r} किमी के भीतर अस्पताल: {n}",
    hospNearYou: "आपके पास",
    hospEmpty: "OpenStreetMap में {r} किमी के भीतर कोई अस्पताल नहीं मिला। एम्बुलेंस के लिए 108 पर कॉल करें।",
    hospDenied: "इस ऐप के लिए लोकेशन बंद है। इलाका लिखकर खोजें, या 108 पर कॉल करें।",
    hospLocError: "आपकी लोकेशन नहीं मिल सकी। इलाका लिखकर खोजें, या 108 पर कॉल करें।",
    hospOffline: "अस्पताल खोजने के लिए कनेक्शन चाहिए। 108 पर कॉल करें या जाँची निर्देशिका देखें।",
    hospError: "मैप सेवा ने जवाब नहीं दिया। थोड़ी देर बाद कोशिश करें, या 108 पर कॉल करें।",
    hospBadArea: "वह इलाका नहीं मिला। किसी पहचान की जगह या शहर का नाम लिखें।",
    hospAway: "{d} दूर",
    hospDirections: "रास्ता",
    hospPrivacy: "OpenStreetMap को सिर्फ़ गोल किया हुआ स्थान (लगभग 100 मी) जाता है, और SarvSeva कुछ सहेजती नहीं।",
    hospNote: "OpenStreetMap का डेटा, SarvSeva से जाँचा हुआ नहीं। समय, बेड और आपातकालीन सुविधा की जानकारी नहीं है - एम्बुलेंस के लिए 108 पर कॉल करें।",
    tabHome: "होम",
    tabFind: "खोजें",
    tabSos: "एसओएस",
    tabServices: "सेवाएँ",
    tabProfile: "प्रोफ़ाइल",
    nearbySearching: "{r} किमी के भीतर खोज रहे हैं...",
    nearbyLocating: "आपकी लोकेशन ले रहे हैं...",
    nearbyDenied: "इस ऐप के लिए लोकेशन बंद है। इलाका लिखकर खोजें।",
    nearbyLocError: "आपकी लोकेशन नहीं मिल सकी। इलाका लिखकर खोजें।",
    nearbyOffline: "इसके लिए कनेक्शन चाहिए। ज़रूरी हो तो 112 पर कॉल करें, और ऑनलाइन होने पर फिर कोशिश करें।",
    nearbyError: "मैप सेवा ने जवाब नहीं दिया। थोड़ी देर बाद कोशिश करें।",
    nearbyBadArea: "वह इलाका नहीं मिला। किसी पहचान की जगह या शहर का नाम लिखें।",
    nearbyNearYou: "आपके पास",
    nearbyAway: "{d} दूर",
    nearbyDirections: "रास्ता",
    nearbyPrivacy: "OpenStreetMap को सिर्फ़ गोल किया हुआ स्थान (लगभग 100 मी) जाता है, और SarvSeva कुछ सहेजती नहीं।",
    pharmEyebrow: "दवा की दुकानें",
    pharmTitle: "अपने पास दवा की दुकान खोजें",
    pharmSub: "कोई इलाका खोजें, या एक बार अपनी लोकेशन साझा करें। सबसे नज़दीकी दुकान पहले।",
    pharmPlaceholder: "इलाका, पहचान की जगह या दुकान का नाम",
    pharmCount: "{r} किमी के भीतर दवा की दुकानें: {n}",
    pharmEmpty: "OpenStreetMap में {r} किमी के भीतर कोई दवा की दुकान नहीं मिली। नज़दीकी अस्पताल में पूछें।",
    pharmNote: "OpenStreetMap का डेटा, SarvSeva से जाँचा हुआ नहीं। स्टॉक, समय और लाइसेंस की जानकारी नहीं है - जाने से पहले कॉल करें।",
    pharmCallNote: "SarvSeva दवाइयाँ न बेचती है न पहुँचाती है। बिना पर्चे वाली दवाओं पर फ़ार्मासिस्ट सलाह दे सकते हैं।",
    policeEyebrow: "पुलिस",
    policeTitle: "सबसे नज़दीकी पुलिस थाना",
    policeSub: "कोई इलाका खोजें, या एक बार अपनी लोकेशन साझा करें। अपराध अभी हो रहा हो तो पहले 112 पर कॉल करें।",
    policePlaceholder: "इलाका, पहचान की जगह या थाने का नाम",
    policeCount: "{r} किमी के भीतर पुलिस थाने: {n}",
    policeEmpty: "OpenStreetMap में {r} किमी के भीतर कोई पुलिस थाना नहीं मिला। 112 पर कॉल करें।",
    policeNote: "OpenStreetMap का डेटा, SarvSeva से जाँचा हुआ नहीं। थाना बदल या बंद हो सकता है - पुष्टि के लिए 100 पर कॉल करें।",
    policeCall112: "112 पर कॉल करें (आपातकाल)",
    policeCall100: "100 पर कॉल करें (पुलिस)",
    svcEyebrow: "सब कुछ एक जगह",
    svcTitle: "सेवाएँ",
    svcSub: "आपातकालीन और रोज़मर्रा की स्वास्थ्य सेवाएँ, हर एक अपने पेज पर।",
    svcAmb: "एम्बुलेंस",
    svcAmbBlurb: "108, 102 या निजी सेवा को कॉल करें।",
    svcAir: "एयर एम्बुलेंस",
    svcAirBlurb: "लंबी दूरी के गंभीर मरीज़ के लिए।",
    svcPharm: "दवा की दुकानें",
    svcPharmBlurb: "अपने पास की फ़ार्मेसी खोजें।",
    svcPolice: "पुलिस थाना",
    svcPoliceBlurb: "सबसे नज़दीकी थाना, रास्ते के साथ।",
    svcAdvice: "डॉक्टरी सलाह",
    svcAdviceBlurb: "क्या करें, और कब अस्पताल जाएँ।",
    svcMeds: "आम दवाइयाँ",
    svcMedsBlurb: "किस काम की, सावधानी, और पर्चा ज़रूरी या नहीं।",
    svcInsurance: "बीमा",
    svcInsuranceBlurb: "स्वास्थ्य, दुर्घटना और जीवन बीमा, आसान भाषा में।",
    svcNote: "SarvSeva एम्बुलेंस नहीं भेजती, बेड नहीं बुक करती और बीमा नहीं बेचती। यहाँ हर काम या तो सेवा को कॉल करता है या बताता है कि क्या करना है।",
    sosEyebrow: "आपातकाल",
    sosTitle: "एसओएस",
    sosLead: "एक टैप में 112 पर कॉल। नीचे के बटन आपकी लोकेशन किसी भरोसेमंद को भेजते हैं।",
    sosCall: "आपातकालीन सेवा को कॉल करें",
    sosSms: "लोकेशन के साथ एसएमएस भेजें",
    sosWhatsapp: "व्हाट्सएप पर भेजें",
    sosLocHint: "संदेश में आपकी लोकेशन जोड़ी जा रही है...",
    sosLocReady: "अब संदेश में आपकी लोकेशन का मैप लिंक जुड़ गया है।",
    sosLocFail: "लोकेशन बंद है, इसलिए संदेश में मैप लिंक नहीं है। हो सके तो खुद जोड़ें।",
    sosMessage: "एसओएस - मुझे मदद चाहिए। मेरी लोकेशन:",
    sosContactTitle: "आपातकालीन संपर्क",
    sosContactSub: "सिर्फ़ इस फ़ोन में सहेजा जाता है। SarvSeva को कुछ नहीं भेजा जाता।",
    sosContactName: "नाम",
    sosContactPhone: "फ़ोन नंबर",
    sosContactSave: "संपर्क सहेजें",
    sosCallContact: "कॉल",
    sosContactNote: "इस संपर्क पर अपने आप कॉल नहीं जाता। कॉल बटन आपको दबाना होगा।",
    sosHonest: "SarvSeva मदद नहीं भेज सकती। 112 पर कॉल करने से आपके इलाके के पुलिस, फ़ायर या एम्बुलेंस कंट्रोल रूम से बात जुड़ती है।",
    ambEyebrow: "एम्बुलेंस",
    ambTitle: "एम्बुलेंस बुलाएँ",
    ambLead: "सरकारी नंबर मुफ़्त हैं। कुछ शहरों में निजी सेवा जल्दी पहुँचती है और पैसे लेती है।",
    amb108Title: "आपातकालीन एम्बुलेंस",
    amb108Body: "मुफ़्त, सरकारी, किसी भी मेडिकल आपातकाल के लिए।",
    amb102Title: "गर्भावस्था और बच्चों की देखभाल",
    amb102Body: "डिलीवरी, गर्भावस्था और बीमार बच्चों के लिए मुफ़्त एम्बुलेंस।",
    amb112Title: "पुलिस, फ़ायर और एम्बुलेंस",
    amb112Body: "एक ही नंबर, जब पता न हो कौन सी सेवा चाहिए।",
    ambPrivateTitle: "निजी एम्बुलेंस",
    ambPrivateBody: "कई शहरों में निजी ऑपरेटर जल्दी पहुँचते हैं और प्रति ट्रिप पैसे लेते हैं। बैठने से पहले कीमत और किस अस्पताल ले जाएँगे, दोनों पूछें।",
    ambHonest: "SarvSeva एम्बुलेंस नहीं भेजती। ये बटन सीधे सेवा को कॉल करते हैं।",
    airEyebrow: "गंभीर स्थानांतरण",
    airTitle: "एयर एम्बुलेंस",
    airLead: "डॉक्टर और आईसीयू उपकरण वाला विमान, गंभीर मरीज़ को एक शहर से दूसरे शहर ले जाने के लिए।",
    airWarn: "एयर ट्रांसफ़र फ़ोन पर तय होता है, लाखों रुपये का होता है, और मरीज़ को लेने के लिए अस्पताल तैयार होना चाहिए। यह पहली मदद नहीं है - पहले 108 पर कॉल करें।",
    airWhenTitle: "कब इस्तेमाल होता है",
    airWhen: ["सिर, रीढ़ या सीने की चोट और ट्रॉमा सेंटर दूर हो", "मरीज़ सड़क या सामान्य फ़्लाइट से न जा सके", "अंग को एक अस्पताल से दूसरे अस्पताल भेजना हो", "जिस शहर में ज़रूरी आईसीयू या विशेषज्ञ न हो"],
    airHowTitle: "कैसे तय होता है",
    airHow: ["इलाज करने वाला अस्पताल रेफ़रल करता है और दूसरे अस्पताल से बात करता है", "ऑपरेटर विमान, मेडिकल टीम और लैंडिंग की जगह तय करता है", "उड़ान से पहले भुगतान या बीमा की मंज़ूरी तय होती है", "दोनों सिरों पर ज़मीन की एम्बुलेंस होती है"],
    airProvidersTitle: "ऑपरेटर",
    airProviderNote: "नंबर और वेबसाइट ऑपरेटरों की अपनी साइट से लिए गए हैं। SarvSeva कोई कमीशन नहीं लेती और उपलब्धता या कीमत की पुष्टि नहीं कर सकती।",
    airHonest: "मरीज़ खतरे में हो तो अभी 108 पर कॉल करें। एयर ट्रांसफ़र की बात मरीज़ के स्थिर होने के बाद करें।",
    airSite: "वेबसाइट",
    advEyebrow: "डॉक्टरी सलाह",
    advTitle: "अभी क्या करें",
    advLead: "अगला कदम क्या है, और किस चीज़ पर देर न करें - सीधी बात।",
    advNoDiagnosis: "SarvSeva निदान या पर्चा नहीं देती। यह डॉक्टर या 104 हेल्पलाइन की नर्स कर सकते हैं।",
    advEmergencyTitle: "108 पर कॉल करें या आपातकालीन विभाग जाएँ",
    advEmergency: ["सीने में दर्द या भारीपन, खासकर बाँह या जबड़े तक फैले", "अचानक कमज़ोरी, मुँह का टेढ़ा होना या बोलने में दिक्कत", "साँस लेने में तकलीफ़, होंठ नीले", "भारी खून बहना जो दबाने से भी न रुके", "बेहोशी, दौरा, या सिर की चोट के बाद भ्रम", "तीन महीने से छोटे बच्चे को बुखार", "ज़हर या ज़रूरत से ज़्यादा दवा", "बड़ा या गहरा जला हुआ हिस्सा"],
    advHelplinesTitle: "किसी से बात करें",
    adv104Name: "स्वास्थ्य हेल्पलाइन 104",
    adv104Body: "प्रशिक्षित स्टाफ से मुफ़्त सलाह, आपके राज्य की भाषा में।",
    advTeleManasName: "टेली-मानस 14416",
    advTeleManasBody: "मुफ़्त मानसिक स्वास्थ्य सहायता, चौबीसों घंटे।",
    advWhenTitle: "उसी दिन डॉक्टर को दिखाएँ",
    advWhen: ["39 डिग्री से ज़्यादा बुखार, या तीन दिन से ज़्यादा रहे", "उल्टी या दस्त जिससे पानी पीना भी मुश्किल हो", "घाव में लाली, गर्मी या मवाद", "अचानक तेज़ सिरदर्द या नज़र में बदलाव", "बच्चा सुस्त हो, ठीक से दूध न पीए या पेशाब कम करे"],
    advFirstAid: "प्राथमिक उपचार के कदम",
    advCall108: "108 पर कॉल",
    advCall112: "112 पर कॉल",
    advNote: "ये आम संकेत हैं, कोई निदान नहीं। पक्का न हो तो 104 पर कॉल करें या नज़दीकी अस्पताल जाएँ - दिखा देना बेहतर है।",
    medEyebrow: "दवाइयाँ",
    medTitle: "आम दवाइयाँ",
    medLead: "कौन सी दवा किस काम की, मुख्य सावधानी, और पर्चा ज़रूरी है या नहीं।",
    medRx: "पर्चा ज़रूरी",
    medOtc: "पर्चा ज़रूरी नहीं",
    medCaution: "सावधानी",
    medDisclaimer: "इस्तेमाल से पहले पैक पढ़ें। बच्चों, गर्भावस्था और लंबी बीमारियों में मात्रा अलग होती है, इसलिए अंदाज़े से न दें - फ़ार्मासिस्ट या डॉक्टर से पूछें।",
    medAsk: "किसी और की दवा से फ़ायदा हुआ हो, इसलिए खुद को एंटीबायोटिक या तेज़ दर्द की दवा कभी न लें।",
    insEyebrow: "सुरक्षा",
    insTitle: "बीमा, जो मुश्किल में काम आए",
    insLead: "एक अस्पताल में भर्ती होना सालों की बचत खत्म कर सकता है। ये वे बीमा उत्पाद हैं जो ऐसा होने से रोकते हैं, और इनके बारे में कहाँ पढ़ें।",
    insProductsTitle: "मुख्य बीमा उत्पाद",
    insBeforeTitle: "खरीदने से पहले जाँचें",
    insBefore: ["पहले से बीमारी के लिए इंतज़ार की अवधि, अक्सर दो से चार साल", "कमरे के किराए और बीमारी के हिसाब से सीमा, जो भुगतान घटाती है", "नेटवर्क अस्पताल, अगर कैशलेस इलाज चाहिए", "डे-केयर और एम्बुलेंस का खर्च बीमे में है या नहीं", "क्लेम निपटान अनुपात और कंपनी की शिकायतों का रिकॉर्ड"],
    insGovTitle: "सरकारी योजनाएँ",
    insProvidersTitle: "बीमा कंपनियाँ और तुलना साइट",
    insProviderNote: "ये लिंक कंपनियों की अपनी वेबसाइट पर जाते हैं। SarvSeva न बीमा कंपनी है न एजेंट, और इनसे कुछ नहीं कमाती।",
    insGrievanceTitle: "क्लेम ठुकराया जाए तो",
    insGrievance: "पहले बीमा कंपनी में शिकायत करें, फिर IRDAI की शिकायत प्रणाली में। IRDAI हेल्पलाइन 155255 है, और बीमा ऑम्बुड्समैन विवाद मुफ़्त में देखता है।",
    insVisit: "खोलें",
    insHonest: "कम से कम दो कोटेशन मिलाएँ, और पैसे देने से पहले पढ़ें कि क्या बाहर रखा गया है।",
    needExisting: "आपका एक अनुरोध पहले से सहेजा है।",
    statusTimeline: "अब तक क्या हुआ",
    statusWhatNext: "आगे क्या करें",
    statusAutomated: "स्वचालित",
    statusHuman: "किसी व्यक्ति ने पुष्टि की",
    statusCancel: "यह अनुरोध रद्द करें",
    statusCancelled: "अनुरोध रद्द हुआ।",
    statusShare: "किसी भरोसेमंद को भेजें",
    statusShareHint: "आपके फ़ोन का शेयर मेन्यू खुलेगा, उन्हीं विवरणों के साथ।",
    statusNoRequest: "इस फ़ोन पर अभी कोई अनुरोध नहीं है।",
    statusStart: "अनुरोध शुरू करें",
    statusLegend: "इन अवस्थाओं का अर्थ",
    statusSec1: "जमा - ऐप ने दर्ज किया।",
    statusSec2: "स्वीकार जाना - किसी व्यक्ति ने पढ़ा।",
    statusSec3: "अनुरोध लिया - मददगार ने हामी भरी।",
    statusSec4: "पूरा - मददगार ने नतीजा बताया।",
    statusSec5: "समय खत्म या रद्द - आगे कुछ नहीं होगा।",
    offerTitle: "मदद दें",
    offerSub: "बताएँ आप क्या दे सकते हैं और कहाँ। ज़रूरत पड़ने पर ही हम जोड़ेंगे।",
    offerSkills: "आप क्या दे सकते हैं?",
    offerSkillTime: "समय और साथ",
    offerSkillFood: "खाना या ज़रूरी सामान",
    offerSkillTransport: "यातायात",
    offerSkillMedical: "प्राथमिक चिकित्सा",
    offerSkillTranslation: "भाषा में मदद",
    offerSkillTech: "फ़ोन या ऑनलाइन मदद",
    offerAvail: "आमतौर पर कब खाली हैं?",
    offerAvailDay: "दिन में",
    offerAvailEve: "शाम को",
    offerAvailWeekend: "वीकेंड में",
    offerRadius: "आप कितनी दूर जा सकते हैं?",
    offerRadiusNear: "मेरा मोहल्ला",
    offerRadiusCity: "मेरा शहर",
    offerRadiusRemote: "सिर्फ़ फ़ोन और ऑनलाइन",
    offerSafety: "सुरक्षा पहले",
    offerSafetyList: [
      "असुरक्षित जगहों में न जाएँ, खतरनाक चीज़ों को न छुएँ।",
      "जिनसे बात नहीं हुई, उन्हें गाड़ी में न ले जाएँ।",
      "जहाँ हो सके, सार्वजनिक जगह पर मिलें।",
      "जो चाहें वही साझा करें। आप कभी भी अनुरोध लेना बंद कर सकते हैं।"
    ],
    offerSave: "मेरा प्रस्ताव सहेजें",
    offerSaved: "प्रस्ताव इस फ़ोन पर सहेजा गया।",
    offerNote: "मिलान अभी चालू नहीं है। आपका प्रस्ताव यहाँ सहेजा है; चालू होने तक कुछ नहीं भेजा जाता।",
    offerSavedWhat: "आपका प्रस्ताव इस ऐप में सहेजा है।",
    notifyTitle: "अपडेट",
    notifySms: "कुछ बदले तो संदेश से बताएँ",
    notifyPrivacy: "संदेश में यह नहीं लिखा होगा कि क्या हुआ - सिर्फ़ इतना कि अपडेट है। पढ़ने के लिए ऐप खोलें।",
    reportListing: "इस सूची की शिकायत करें",
    navOperations: "हम कैसे चलते हैं",
    termsLink: "नियम और शर्तें",
    opsStatusLink: "सार्वजनिक स्थिति पेज देखें",
    socialLabel: "सर्वसेवा से जुड़ें",
    aboutOpsTitle: "हम इसे कैसे चलाते हैं",
    aboutOpsBody: "सीमाएँ, मॉडरेशन का समय, आपातकाल में कौन जवाब देता है, किसी सूची पर क्या जाँचा जाता है और किसी के दुर्व्यवहार की शिकायत पर क्या होता है - सब एक जगह लिखा हुआ।",
    aboutOpsCta: "संचालन का पूरा ब्यौरा पढ़ें",
    statCompDirectory: "जाँची निर्देशिका",
    statCompIntake: "अनुरोध लेना",
    statCompMatching: "स्वयंसेवक मैचिंग",
    statCompModeration: "मॉडरेशन डेस्क",
    statCompModerationNote: "हफ़्ते के सातों दिन, 08:00-22:00 IST तक",
    statCompEmergency: "आपातकाल हैंडऑफ़",
    statCompEmergencyNote: "आपके ही डायलर में 112 भरकर खोलता है",
    statStateOk: "चालू",
    statStateWait: "आंशिक",
    statStateOff: "बंद",
    dirExpiredBadge: "अवधि बीती - दोबारा जाँच नहीं",
    dirExpiredToggleOne: "1 अवधि-बीती सूची दिखाएँ",
    dirExpiredToggleMany: "{n} अवधि-बीती सूचियाँ दिखाएँ",
    dirExpiredHidden: "{n} अवधि-बीती, छिपी",
    dirExpiredNote: "इनकी दोबारा जाँच की तारीख बीत चुकी है, इसलिए दोबारा जाँच तक ये नतीजों से बाहर रखी गई हैं।",
    sosLabel: "आपातकाल?",
    sosAction: "112 पर कॉल",
    sosSub: "पुलिस, फायर और एम्बुलेंस के लिए एक ही नंबर।",
    dirTitle: "सत्यापित सहायता सूची",
    dirSub: "सरकारी हेल्पलाइन, हर एक के साथ वह स्रोत जो हमने देखा और वह तारीख़ जब अंतिम बार जाँचा। SarvSeva इन सेवाओं को न चलाता है न भेजता है।",
    dirSearch: "नाम या नंबर से खोजें",
    dirAll: "सभी",
    dirCountOne: "सेवा",
    dirCountMany: "सेवाएँ",
    dirCheckLabel: "जाँचा",
    dirSource: "स्रोत",
    dirCoverage: "कवरेज",
    dirHours: "समय",
    dirStale: "फिर जाँच ज़रूरी",
    dirVerifiedBy: "इससे मिलाकर जाँचा",
    dirScope: "जाँच का दायरा",
    dirReport: "गलत सूची की शिकायत",
    dirReportSubject: "SarvSeva पर गलत सूची",
    dirEmpty: "इस खोज से कोई सेवा नहीं मिली।",
    dirNote: "अगर नंबर न उठे तो 112 पर कॉल करें। गलत जानकारी बताने के लिए संपर्क करें।",
    callSheetTitle: "{number} पर कॉल करें?",
    callSheetBody: "इससे आपके फ़ोन का डायलर खुलेगा। SarvSeva आपकी ओर से पुलिस, एम्बुलेंस या फायर से संपर्क नहीं करता और कोई अलर्ट नहीं भेजता।",
    callSheetOpen: "डायलर खोलें",
    callSheetCopy: "नंबर कॉपी करें",
    callSheetCancel: "रद्द करें",
    callSheetCopied: "नंबर कॉपी हो गया।",
    callSheetFallback: "अगर डायलर न खुले तो नंबर खुद टाइप करें।",
    groupEmergency: "मुख्य आपातकाल",
    groupMedical: "मेडिकल और मानसिक स्वास्थ्य",
    groupWomen: "महिलाएँ और बच्चे",
    groupOther: "अन्य हेल्पलाइन",
    emergencyNote: "ये सरकारी सेवाएँ हैं, SarvSeva की नहीं। नंबर राष्ट्रीय हैं; कुछ राज्यों की लाइनें अलग होती हैं।",
    aidTab: "प्राथमिक मदद",
    aidTitle: "आपात स्थिति में क्या करें",
    aidSub: "रोज़मर्रा की आपात स्थितियों के लिए काम की प्राथमिक मदद। एक बार पढ़ लें - ज़रूरत के समय याद रखना आसान होता है।",
    aidBreathing: "साँस और दिल",
    aidBleeding: "खून बहना और चोट",
    aidBurns: "जलना, गर्मी और काटना",
    aidOther: "दौरे, ज़हर और बेहोशी",
    callNow: "112 पर कॉल",
    dontLabel: "न करें:",
    aidNote: "यह सामान्य मार्गदर्शन है, डॉक्टरी सलाह नहीं। जान का खतरा हो तो पहले 112 पर कॉल करें।",
    aidNewsTitle: "समाचार और शोध",
    aidNewsSub: "भरोसेमंद स्रोतों से चुनी बातें, हर एक पर जाँच का महीना लिखा है। यह पढ़ने की सूची है, लाइव फीड नहीं।",
    aidVideoTitle: "देखें और सीखें",
    aidVideoSub: "मान्यता प्राप्त प्रशिक्षकों और अस्पतालों के वीडियो। ये YouTube पर खुलते हैं, इसलिए ऐप में कोई प्लेयर या ट्रैकर नहीं है।",
    newsChecked: "जाँच",
    watchOn: "देखें",
    tabResearch: "शोध",
    tabVideos: "वीडियो",
    sketchTab: "स्केच",
    sketchTitle: "स्केच और रंग भरें",
    sketchSub: "एक चित्र चुनें, रंग चुनें और आकृतियाँ भरें। समय बिताने का एक शांत तरीका।",
    sketchPickTitle: "स्केच चुनें",
    sketchPickSub: "SarvSeva के विषयों पर रेखा-चित्र: सर्वसेवा, सुरक्षा, स्वास्थ्य, आश्रय और सीखना।",
    colourLabel: "रंग",
    undo: "पूर्ववत करें",
    clear: "फिर से शुरू करें",
    save: "चित्र सहेजें",
    sketchBack: "सभी स्केच",
    sketchNote: "चित्र सिर्फ़ इसी ब्राउज़र टैब में रहते हैं - कुछ भी अपलोड नहीं होता।",
    savedMsg: "चित्र सहेजा गया।",
    saveFail: "यहाँ चित्र सहेजा नहीं जा सका।",
    topicFlight: "सर्वसेवा",
    topicSafety: "सुरक्षा",
    topicHealth: "स्वास्थ्य",
    topicHome: "आश्रय",
    topicLearn: "सीखना"
  }
};

const CATEGORIES = [
  { id: "emergency", labelEn: "Emergency & urgent help", labelHi: "तत्काल और आपातकालीन सहायता", icon: "alert" },
  { id: "safety", labelEn: "Safety & harassment", labelHi: "सुरक्षा और परेशानी", icon: "shield" },
  { id: "health", labelEn: "Health & mental well-being", labelHi: "स्वास्थ्य और मानसिक स्वास्थ्य", icon: "heart" },
  { id: "basic-needs", labelEn: "Food, shelter & essentials", labelHi: "भोजन, आवास और ज़रूरी चीज़ें", icon: "home" },
  { id: "legal", labelEn: "Rights, police & legal help", labelHi: "अधिकार, पुलिस और कानूनी मदद", icon: "scale" },
  { id: "children", labelEn: "Children & students", labelHi: "बच्चे और छात्र", icon: "book" },
  { id: "women", labelEn: "Women & families", labelHi: "महिलाएँ और परिवार", icon: "people" },
  { id: "elderly", labelEn: "Older adults & caregivers", labelHi: "बुज़ुर्ग और देखभालकर्ता", icon: "care" },
  { id: "migrants", labelEn: "Migrants & displaced people", labelHi: "प्रवासी और विस्थापित लोग", icon: "plane" },
  { id: "disability", labelEn: "Disability support", labelHi: "दिव्यांग सहायता", icon: "wheelchair" }
];

const RESOURCES = [
  {
    id: "emergency-112",
    category: "emergency",
    titleEn: "Call 112 for emergencies",
    titleHi: "आपातकाल में 112 पर कॉल करें",
    bodyEn: "112 is India's single emergency number under ERSS - police, fire and ambulance reachable in one call, in every state and union territory.",
    bodyHi: "112 भारत का एकीकृत आपातकालीन नंबर है (ERSS) - पुलिस, फायर और एम्बुलेंस एक ही कॉल में, हर राज्य और केंद्रशासित प्रदेश में।",
    type: "emergency-number",
    value: "112",
    noteEn: "Not a SarvSeva service. If you are in immediate danger, call this first.",
    noteHi: "यह SarvSeva की सेवा नहीं है। अगर तुम्हें तुरंत खतरा है, तो सबसे पहले इस पर कॉल करें।"
  },
  {
    id: "emergency-local",
    category: "emergency",
    titleEn: "Find your country's emergency numbers",
    titleHi: "अपने देश के आपातकालीन नंबर खोजें",
    bodyEn: "Emergency numbers vary by country. Check your local government or telecom provider for the correct number.",
    bodyHi: "आपातकालीन नंबर देश के हिसाब से अलग होते हैं। सही नंबर के लिए अपनी स्थानीय सरकार या टेलिकॉम प्रदाता से जाँच करें।",
    type: "help-center"
  },
  {
    id: "women-india",
    category: "women",
    titleEn: "Women Helpline (India)",
    titleHi: "महिला हेल्पलाइन (भारत)",
    bodyEn: "A 24-hour women's emergency helpline in India.",
    bodyHi: "भारत में महिलाओं के लिए 24 घंटे की आपातकालीन हेल्पलाइन।",
    type: "helpline",
    value: "181",
    region: "India"
  },
  {
    id: "children-india",
    category: "children",
    titleEn: "Childline (India)",
    titleHi: "चाइल्डलाइन (भारत)",
    bodyEn: "A 24-hour helpline for children in distress in India.",
    bodyHi: "भारत में तकलीफ़ में होने वाले बच्चों के लिए 24 घंटे की हेल्पलाइन।",
    type: "helpline",
    value: "1098",
    region: "India"
  },
  {
    id: "mental-general",
    category: "health",
    titleEn: "Talk to someone about how you feel",
    titleHi: "अपनी भावनाओं के बारे में किसी से बात करें",
    bodyEn: "If you are feeling overwhelmed, a trusted helpline or health worker can help. Many countries run free mental health support lines.",
    bodyHi: "अगर तुम्हें ज़्यादा दबाव या उदासी महसूस हो रही है, तो किसी भरोसेमंद हेल्पलाइन या स्वास्थ्य कर्मी की मदद ले सकते हो। कई देश मुफ़्त मानसिक स्वास्थ्य सहायता लाइन चलाते हैं।",
    type: "help-center"
  },
  {
    id: "basic-needs-general",
    category: "basic-needs",
    titleEn: "Find food, shelter and essentials near you",
    titleHi: "पास में भोजन, आवास और ज़रूरी चीज़ें खोजें",
    bodyEn: "Local community centres, charities and municipal services often help with food, shelter and essentials. Search for services in your area.",
    bodyHi: "स्थानीय समुदाय केंद्र, धर्मार्थ संस्थान और नगरपालिका की सेवाएँ अक्सर भोजन, आवास और ज़रूरी चीज़ों में मदद करती हैं। अपने क्षेत्र की सेवाएँ खोजें।",
    type: "help-center"
  },
  {
    id: "legal-general",
    category: "legal",
    titleEn: "Know your basic rights",
    titleHi: "अपने मूल अधिकार जानें",
    bodyEn: "You have the right to ask why you are being stopped, to have someone you trust present, and to contact a lawyer where available.",
    bodyHi: "तुम्हें पूछने का अधिकार है कि तुम्हें क्यों रोका जा रहा है, एक भरोसेमंद व्यक्ति को साथ रखने का, और जहाँ उपलब्ध हो वहाँ वकील से संपर्क करने का।",
    type: "help-center"
  }
];

const EMERGENCY_GROUPS = ["emergency", "medical", "women", "other"];

const EMERGENCY_INDIA = [
  {
    group: "emergency",
    value: "112",
    nameEn: "National emergency number",
    nameHi: "राष्ट्रीय आपातकालीन नंबर",
    descEn: "One number for police, fire and ambulance in every state and UT. Free, 24x7, works from any phone.",
    descHi: "हर राज्य और केंद्रशासित प्रदेश में पुलिस, फायर और एम्बुलेंस के लिए एक ही नंबर। मुफ़्त, 24x7, किसी भी फ़ोन से।",
    highlight: true
  },
  {
    group: "emergency",
    value: "100",
    nameEn: "Police",
    nameHi: "पुलिस",
    descEn: "Police control room. Still works in most states, and 112 routes here too.",
    descHi: "पुलिस कंट्रोल रूम। ज़्यादातर राज्यों में अब भी चलता है, और 112 भी यहीं जोड़ता है।"
  },
  {
    group: "emergency",
    value: "101",
    nameEn: "Fire & rescue",
    nameHi: "फायर और रेस्क्यू",
    descEn: "Fire brigade and rescue services.",
    descHi: "फायर ब्रिगेड और बचाव सेवा।"
  },
  {
    group: "medical",
    value: "108",
    nameEn: "Emergency ambulance",
    nameHi: "इमरजेंसी एम्बुलेंस",
    descEn: "Ambulance for accidents, trauma and critical illness. Run by state health services.",
    descHi: "दुर्घटना, चोट और गंभीर बीमारी के लिए एम्बुलेंस। राज्य स्वास्थ्य सेवाएँ चलाती हैं।"
  },
  {
    group: "medical",
    value: "102",
    nameEn: "Ambulance for mothers & infants",
    nameHi: "माँ और शिशु के लिए एम्बुलेंस",
    descEn: "Patient transport, mainly for pregnant women, mothers and young children.",
    descHi: "मरीज़ परिवहन, खासकर गर्भवती महिलाओं, माँ और छोटे बच्चों के लिए।"
  },
  {
    group: "medical",
    value: "104",
    nameEn: "Health advice helpline",
    nameHi: "स्वास्थ्य सलाह हेल्पलाइन",
    descEn: "Medical guidance over the phone from state health departments.",
    descHi: "राज्य स्वास्थ्य विभागों से फ़ोन पर मेडिकल सलाह।"
  },
  {
    group: "medical",
    value: "14416",
    nameEn: "Tele-MANAS mental health support",
    nameHi: "टेली-मानस मानसिक स्वास्थ्य सहायता",
    descEn: "Free 24x7 counselling in many Indian languages. Also 1-800-891-4416.",
    descHi: "कई भारतीय भाषाओं में मुफ़्त 24x7 काउंसलिंग। साथ में 1-800-891-4416।"
  },
  {
    group: "medical",
    value: "1097",
    nameEn: "AIDS helpline",
    nameHi: "एड्स हेल्पलाइन",
    descEn: "Confidential HIV/AIDS information and referral.",
    descHi: "गोपनीय HIV/एड्स जानकारी और रेफ़रल।"
  },
  {
    group: "women",
    value: "181",
    nameEn: "Women helpline",
    nameHi: "महिला हेल्पलाइन",
    descEn: "Support for women facing violence or domestic abuse, including referral to police, hospitals and one-stop centres.",
    descHi: "हिंसा या घरेलू शोषण का सामना कर रही महिलाओं के लिए सहायता, पुलिस, अस्पताल और वन-स्टॉप सेंटर तक रेफ़रल के साथ।"
  },
  {
    group: "women",
    value: "1091",
    nameEn: "Women helpline (police)",
    nameHi: "महिला हेल्पलाइन (पुलिस)",
    descEn: "Police women's safety helpline. Delhi and several states; elsewhere use 112 or 181.",
    descHi: "पुलिस की महिला सुरक्षा हेल्पलाइन। दिल्ली और कई राज्यों में; बाकी जगह 112 या 181।"
  },
  {
    group: "women",
    value: "1098",
    nameEn: "Childline",
    nameHi: "चाइल्डलाइन",
    descEn: "24x7 free line for any child in distress, or an adult calling for a child.",
    descHi: "किसी भी संकट में बच्चे के लिए, या बच्चे की ओर से कॉल करने वाले बड़े के लिए 24x7 मुफ़्त लाइन।"
  },
  {
    group: "women",
    value: "14567",
    nameEn: "Elderline (senior citizens)",
    nameHi: "एल्डरलाइन (वरिष्ठ नागरिक)",
    descEn: "Help for older adults: pension, abuse, care and legal guidance.",
    descHi: "बुज़ुर्गों के लिए मदद: पेंशन, शोषण, देखभाल और कानूनी सलाह।"
  },
  {
    group: "other",
    value: "1930",
    nameEn: "Cyber crime & online fraud",
    nameHi: "साइबर क्राइम और ऑनलाइन धोखाधड़ी",
    descEn: "Report money lost online, fast. Calling within the first hour gives the best chance of a freeze.",
    descHi: "ऑनलाइन पैसा गँवाने की शिकायत जल्दी करें। पहले घंटे में कॉल करने से पैसा रोकने का सबसे अच्छा मौक़ा मिलता है।"
  },
  {
    group: "other",
    value: "1033",
    nameEn: "National highway accident",
    nameHi: "राष्ट्रीय राजमार्ग दुर्घटना",
    descEn: "Accident, breakdown or hazard on a national highway (NHAI), 24x7.",
    descHi: "राष्ट्रीय राजमार्ग पर दुर्घटना, गाड़ी खराबी या खतरा (NHAI), 24x7।"
  },
  {
    group: "other",
    value: "1078",
    nameEn: "Disaster management control room",
    nameHi: "आपदा प्रबंधन कंट्रोल रूम",
    descEn: "Floods, earthquakes, cyclones and other disasters (NDMA).",
    descHi: "बाढ़, भूकंप, चक्रवात और अन्य आपदाएँ (NDMA)।"
  },
  {
    group: "other",
    value: "1322",
    nameEn: "Railway security helpline",
    nameHi: "रेलवे सुरक्षा हेल्पलाइन",
    descEn: "Theft, harassment or emergencies on a train or at a station.",
    descHi: "ट्रेन या स्टेशन पर चोरी, परेशानी या आपातकाल।"
  },
  {
    group: "other",
    value: "1363",
    nameEn: "Tourist helpline",
    nameHi: "पर्यटक हेल्पलाइन",
    descEn: "Help for travellers, in 12 languages, from the Ministry of Tourism.",
    descHi: "पर्यटन मंत्रालय से यात्रियों के लिए मदद, 12 भाषाओं में।"
  }
];

/* Verified help directory.
   Every entry carries its source and the dates we last checked it, because a
   helpline number is only useful if the caller can trust it is current. */
const DIRECTORY = [
  {
    id: "erss-112",
    category: "emergency",
    number: "112",
    nameEn: "National emergency number (ERSS)",
    nameHi: "राष्ट्रीय आपातकालीन नंबर (ERSS)",
    descEn: "One call for police, fire and ambulance, anywhere in India.",
    descHi: "पुलिस, फायर और एम्बुलेंस के लिए एक ही कॉल, पूरे भारत में।",
    coverageEn: "All 36 states and union territories",
    coverageHi: "सभी 36 राज्य और केंद्रशासित प्रदेश",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "Ministry of Home Affairs - 112.gov.in",
    sourceUrl: "https://112.gov.in/about",
    verified: "2026-11-15",
    review: "2027-05-15",
    primary: true
  },
  {
    id: "ambulance-108",
    category: "health",
    number: "108",
    nameEn: "Emergency ambulance",
    nameHi: "इमरजेंसी एम्बुलेंस",
    descEn: "Accident, trauma and critical illness transport, run by state health services.",
    descHi: "दुर्घटना, चोट और गंभीर बीमारी के लिए एम्बुलेंस, राज्य स्वास्थ्य सेवाओं द्वारा।",
    coverageEn: "Most states and UTs",
    coverageHi: "ज़्यादातर राज्य और केंद्रशासित प्रदेश",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "National Portal of India - helpline directory",
    sourceUrl: "https://services.india.gov.in/directory/helpline",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "ambulance-102",
    category: "health",
    number: "102",
    nameEn: "National Ambulance Service",
    nameHi: "राष्ट्रीय एम्बुलेंस सेवा",
    descEn: "Free ambulance for pregnant women and sick infants in many states.",
    descHi: "कई राज्यों में गर्भवती महिलाओं और बीमार शिशुओं के लिए मुफ़्त एम्बुलेंस।",
    coverageEn: "Many states",
    coverageHi: "कई राज्य",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "National Portal of India - helpline directory",
    sourceUrl: "https://services.india.gov.in/directory/helpline",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "women-181",
    category: "women",
    number: "181",
    nameEn: "Women Helpline (Mission Shakti)",
    nameHi: "महिला हेल्पलाइन (मिशन शक्ति)",
    descEn: "Violence, harassment or abuse, with referral to police, shelter, legal aid and One Stop Centres.",
    descHi: "हिंसा, उत्पीड़न या दुर्व्यवहार के लिए, पुलिस, आश्रय, कानूनी सहायता और वन स्टॉप सेंटर तक जोड़ता है।",
    coverageEn: "35 states and UTs",
    coverageHi: "35 राज्य और केंद्रशासित प्रदेश",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "Ministry of Women and Child Development",
    sourceUrl: "https://wcd.gov.in/women/help",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "child-1098",
    category: "children",
    number: "1098",
    nameEn: "Child Helpline",
    nameHi: "चाइल्ड हेल्पलाइन",
    descEn: "A child in danger, alone, or in distress. Free and open to anyone reporting for a child.",
    descHi: "खतरे में, अकेला या परेशान बच्चा। मुफ़्त, और बच्चे के लिए कोई भी कॉल कर सकता है।",
    coverageEn: "All 36 states and UTs",
    coverageHi: "सभी 36 राज्य और केंद्रशासित प्रदेश",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "National Commission for Women - helplines",
    sourceUrl: "https://www.ncw.gov.in/other-useful-helplines",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "elder-14567",
    category: "elderly",
    number: "14567",
    nameEn: "Elder Line (senior citizens)",
    nameHi: "एल्डर लाइन (वरिष्ठ नागरिक)",
    descEn: "Health guidance, legal aid, protection from abuse and rescue for older people.",
    descHi: "बुज़ुर्गों के लिए स्वास्थ्य सलाह, कानूनी सहायता, दुर्व्यवहार से सुरक्षा और बचाव।",
    coverageEn: "Nationwide",
    coverageHi: "देशभर",
    hoursEn: "8 am to 8 pm",
    hoursHi: "सुबह 8 से रात 8 बजे",
    sourceName: "Department of Empowerment of Persons with Disabilities",
    sourceUrl: "https://depwd.gov.in/en/others-helplines/",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "mental-14416",
    category: "health",
    number: "14416",
    nameEn: "Tele-MANAS mental health",
    nameHi: "टेली-मानस मानसिक स्वास्थ्य",
    descEn: "Talk to a counsellor about stress, fear or thoughts of self-harm.",
    descHi: "तनाव, डर या खुद को नुकसान पहुँचाने के विचारों पर काउंसलर से बात करें।",
    coverageEn: "Nationwide",
    coverageHi: "देशभर",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "Ministry of Health and Family Welfare",
    sourceUrl: "https://depwd.gov.in/en/others-helplines/",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "cyber-1930",
    category: "legal",
    number: "1930",
    nameEn: "Cyber crime and financial fraud",
    nameHi: "साइबर अपराध और वित्तीय धोखा",
    descEn: "Money taken online. Call quickly - the faster you report, the better the chance of a freeze.",
    descHi: "ऑनलाइन पैसा चला गया। जल्दी कॉल करें - जितनी जल्दी शिकायत, उतना बेहतर।",
    coverageEn: "Nationwide",
    coverageHi: "देशभर",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "National Portal of India - helpline directory",
    sourceUrl: "https://services.india.gov.in/directory/helpline",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "disaster-1078",
    category: "emergency",
    number: "1078",
    nameEn: "Disaster management (NDMA)",
    nameHi: "आपदा प्रबंधन (NDMA)",
    descEn: "Flood, cyclone, earthquake and other disaster relief coordination.",
    descHi: "बाढ़, चक्रवात, भूकंप और अन्य आपदा राहत समन्वय।",
    coverageEn: "Nationwide",
    coverageHi: "देशभर",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "Maharashtra Police - emergency helplines",
    sourceUrl: "https://igcsn.mahapolice.gov.in/english/assets/event/emergency.pdf",
    verified: "2026-11-15",
    review: "2027-05-15"
  },
  {
    id: "ncw-14490",
    category: "women",
    number: "14490",
    nameEn: "National Commission for Women",
    nameHi: "राष्ट्रीय महिला आयोग",
    descEn: "Grievances about women's rights, harassment or violence.",
    descHi: "महिलाओं के अधिकार, उत्पीड़न या हिंसा से जुड़ी शिकायतें।",
    coverageEn: "Nationwide",
    coverageHi: "देशभर",
    hoursEn: "24 hours, every day",
    hoursHi: "24 घंटे, हर दिन",
    sourceName: "National Commission for Women",
    sourceUrl: "https://www.ncw.gov.in/other-useful-helplines",
    verified: "2026-11-15",
    review: "2027-05-15"
  }
];

const DIR_CATS = ["emergency", "health", "women", "children", "elderly", "legal"];

/* Short chip labels: the full category names are too long for a filter row. */
const DIR_CAT_LABELS = {
  emergency: ["Emergency", "आपातकाल"],
  health: ["Health", "स्वास्थ्य"],
  women: ["Women", "महिलाएँ"],
  children: ["Children", "बच्चे"],
  elderly: ["Older adults", "बुज़ुर्ग"],
  legal: ["Legal", "कानूनी"]
};

const AID_GROUPS = ["breathing", "bleeding", "burns", "other"];

const AID_CASES = [
  {
    id: "cpr",
    group: "breathing",
    callNow: true,
    titleEn: "Not breathing, or unresponsive",
    titleHi: "साँस नहीं आ रही, या बेहोश",
    stepsEn: [
      "Tap their shoulders and shout - do they respond?",
      "Ask someone to call 112 and put the phone on speaker.",
      "Tilt the head back, lift the chin, and look and listen for breathing for 10 seconds.",
      "Not breathing normally: push hard in the centre of the chest, 100-120 times a minute, about 5-6 cm deep.",
      "Keep going until help arrives or they start breathing. Swap with someone every 2 minutes if you can."
    ],
    stepsHi: [
      "कंधे थपथपाएँ और आवाज़ दें - वे जवाब दे रहे हैं या नहीं?",
      "किसी को 112 पर कॉल करने को कहें और फ़ोन स्पीकर पर रखें।",
      "सिर पीछे झुकाएँ, ठुड्डी उठाएँ, 10 सेकंड तक देखें-सुनें कि साँस आ रही है या नहीं।",
      "साँस सामान्य न हो: सीने के बीच में ज़ोर से दबाएँ, मिनट में 100-120 बार, करीब 5-6 सेमी गहरा।",
      "मदद आने या साँस लौटने तक जारी रखें। हो सके तो हर 2 मिनट में दूसरे से बदलें।"
    ],
    dontEn: "Do not spend time feeling for a pulse if you are not trained - start compressions instead.",
    dontHi: "प्रशिक्षित न हों तो नाड़ी ढूँढ़ने में समय न लगाएँ - सीधे सीने का दबाव शुरू करें।"
  },
  {
    id: "choking",
    group: "breathing",
    callNow: true,
    titleEn: "Choking",
    titleHi: "दम घुटना (कुछ फँसना)",
    stepsEn: [
      "Ask \"are you choking?\" - if they can cough or speak, encourage them to keep coughing.",
      "Cannot breathe, speak or cough: give 5 firm back blows between the shoulder blades.",
      "If that fails, give 5 abdominal thrusts just above the navel, pulling inwards and upwards.",
      "Keep alternating 5 and 5. Call 112 if it is still stuck.",
      "If they collapse, start CPR."
    ],
    stepsHi: [
      "\"क्या आपका दम घुट रहा है?\" पूछें - खाँसी या आवाज़ आ रही हो तो खाँसने दें।",
      "साँस, आवाज़ या खाँसी नहीं: कंधों के बीच 5 ज़ोरदार थपकियाँ दें।",
      "काम न आए तो नाभि के ऊपर 5 पेट दबाव (हाइमलिक) दें, अंदर और ऊपर की ओर।",
      "5-5 बार बदलते रहें। फिर भी न निकले तो 112 पर कॉल करें।",
      "बेहोश हो जाएँ तो CPR शुरू करें।"
    ],
    dontEn: "Do not put your fingers in the mouth blindly, and do not give water.",
    dontHi: "मुँह में अंधाधुंध उँगली न डालें, और पानी न दें।"
  },
  {
    id: "heart-attack",
    group: "breathing",
    callNow: true,
    titleEn: "Chest pain / possible heart attack",
    titleHi: "सीने में दर्द / दिल का दौरा",
    stepsEn: [
      "Call 112 now and say \"chest pain, possible heart attack\".",
      "Sit them down, keep them still, and loosen tight clothing.",
      "If they are awake and not allergic, let them chew one aspirin (300 mg).",
      "Do not let them walk or drive themselves anywhere.",
      "If they go unresponsive and stop breathing, start CPR."
    ],
    stepsHi: [
      "अभी 112 पर कॉल करें और कहें \"सीने में दर्द, दिल का दौरा हो सकता है\"।",
      "बैठाएँ, हिलने न दें, और तंग कपड़े ढीले करें।",
      "होश में हों और एलर्जी न हो तो एक एस्पिरिन (300 मि.ग्रा.) चबाने दें।",
      "उन्हें चलने या खुद गाड़ी चलाने न दें।",
      "बेहोश होकर साँस रुक जाए तो CPR शुरू करें।"
    ],
    dontEn: "Do not wait to see if the pain passes.",
    dontHi: "दर्द खुद ठीक होने का इंतज़ार न करें।"
  },
  {
    id: "stroke",
    group: "breathing",
    callNow: true,
    titleEn: "Face drooping, weak arm, slurred speech",
    titleHi: "चेहरा टेढ़ा, हाथ कमज़ोर, बोली लड़खड़ाना",
    stepsEn: [
      "Think FAST: Face drooping, Arm weakness, Speech slurred - Time to call 112.",
      "Call 112, say \"possible stroke\", and note the exact time symptoms started.",
      "If they are drowsy, lay them on their side so the airway stays clear.",
      "Do not give food, drink or medicines.",
      "Stay with them until help arrives."
    ],
    stepsHi: [
      "FAST याद रखें: चेहरा टेढ़ा, हाथ कमज़ोर, बोली लड़खड़ाई - तुरंत 112।",
      "112 पर कॉल करके कहें \"स्ट्रोक हो सकता है\", और लक्षण शुरू होने का सही समय याद रखें।",
      "नींद जैसी हालत हो तो करवट पर लिटाएँ ताकि साँस की नली खुली रहे।",
      "खाना, पानी या दवा न दें।",
      "मदद आने तक साथ रहें।"
    ],
    dontEn: "Do not give aspirin - if the stroke is caused by bleeding it can make things worse.",
    dontHi: "एस्पिरिन न दें - खून बहने वाले स्ट्रोक में हालत बिगड़ सकती है।"
  },
  {
    id: "bleeding",
    group: "bleeding",
    callNow: true,
    titleEn: "Heavy bleeding",
    titleHi: "ज़्यादा खून बहना",
    stepsEn: [
      "Press hard on the wound with a clean cloth or gauze, and keep pressing.",
      "If blood soaks through, add another cloth on top - do not remove the first one.",
      "Raise the injured part above the level of the heart if you can.",
      "Call 112 if it is spurting, will not stop after 10 minutes of pressure, or the wound is deep.",
      "Keep them lying down and warm."
    ],
    stepsHi: [
      "साफ़ कपड़े या गॉज़ से घाव पर ज़ोर से दबाएँ, दबाव बनाए रखें।",
      "खून रिस आए तो ऊपर से दूसरा कपड़ा रखें - पहला न हटाएँ।",
      "हो सके तो घायल हिस्से को दिल से ऊँचा रखें।",
      "खून फुहार में निकले, 10 मिनट दबाने पर भी न रुके, या घाव गहरा हो तो 112 पर कॉल करें।",
      "उन्हें लिटाए रखें और गर्म रखें।"
    ],
    dontEn: "Do not pull out anything stuck in the wound - press around it instead.",
    dontHi: "घाव में धँसी चीज़ न खींचें - उसके आसपास दबाएँ।"
  },
  {
    id: "fracture",
    group: "bleeding",
    titleEn: "Suspected broken bone or sprain",
    titleHi: "हड्डी टूटना या मोच",
    stepsEn: [
      "Keep the limb still and supported in the position you found it.",
      "For swelling, hold a cold pack wrapped in cloth on it for 15-20 minutes.",
      "Pad around it and splint only if you must move them.",
      "Call 112 for an open wound, a bent limb, numbness, or if they cannot move it."
    ],
    stepsHi: [
      "अंग को जैसा मिला वैसा ही स्थिर रखें और सहारा दें।",
      "सूजन पर कपड़े में लपेटा ठंडा पैक 15-20 मिनट रखें।",
      "हिलाना ज़रूरी हो तो चारों ओर गद्दी लगाएँ और पट्टी से सहारा दें।",
      "खुला घाव, टेढ़ा अंग, सुन्नपन, या हिला न पाएँ तो 112 पर कॉल करें।"
    ],
    dontEn: "Do not try to straighten the bone or massage the area.",
    dontHi: "हड्डी सीधी करने या मालिश करने की कोशिश न करें।"
  },
  {
    id: "burns",
    group: "burns",
    titleEn: "Burns and scalds",
    titleHi: "जलना और भाप से जलना",
    stepsEn: [
      "Cool the burn under cool running water for 20 minutes - start straight away.",
      "Remove rings, watches and tight clothes near the burn before it swells.",
      "Cover loosely with cling film or a clean, non-fluffy cloth.",
      "Call 112 for burns bigger than the person's palm, or on the face, hands, feet or joints.",
      "Electrical and chemical burns always need a hospital."
    ],
    stepsHi: [
      "जले हिस्से को 20 मिनट तक ठंडे बहते पानी में रखें - तुरंत शुरू करें।",
      "सूजन से पहले अंगूठी, घड़ी और तंग कपड़े हटा दें।",
      "क्लिंग फ़िल्म या साफ़, रोएँ रहित कपड़े से ढीला ढकें।",
      "हथेली से बड़ा जला हो, या चेहरे, हाथ, पैर या जोड़ पर हो तो 112 पर कॉल करें।",
      "बिजली या रसायन से जला हर मामला अस्पताल जाना चाहिए।"
    ],
    dontEn: "No ice, butter, oil or toothpaste, and do not burst blisters.",
    dontHi: "बर्फ़, मक्खन, तेल या टूथपेस्ट न लगाएँ, और छाले न फोड़ें।"
  },
  {
    id: "heatstroke",
    group: "burns",
    callNow: true,
    titleEn: "Heatstroke",
    titleHi: "लू लगना (हीट स्ट्रोक)",
    stepsEn: [
      "Move them to shade or a cool room and remove extra clothing.",
      "Cool fast: wet cloths on the neck, armpits and groin, plus a fan or cool water.",
      "If they are fully awake, give small sips of water.",
      "Confusion, hot dry skin or collapse: call 112 now.",
      "Keep cooling them while you wait."
    ],
    stepsHi: [
      "छाया या ठंडी जगह ले जाएँ और अतिरिक्त कपड़े हटाएँ।",
      "तेज़ी से ठंडा करें: गर्दन, बगल और कमर पर गीला कपड़ा, पंखा या ठंडा पानी।",
      "पूरी तरह होश में हों तो थोड़ा-थोड़ा पानी पिलाएँ।",
      "भ्रम, गर्म सूखी त्वचा या बेहोशी हो तो अभी 112 पर कॉल करें।",
      "इंतज़ार में ठंडा करते रहें।"
    ],
    dontEn: "Do not leave them alone, and do not give alcohol or caffeine.",
    dontHi: "अकेला न छोड़ें, और शराब या कैफ़ीन न दें।"
  },
  {
    id: "snakebite",
    group: "burns",
    callNow: true,
    titleEn: "Snake bite",
    titleHi: "साँप काटना",
    stepsEn: [
      "Move away from the snake and keep the person calm and still.",
      "Keep the bitten limb still and below heart level; remove rings and tight items.",
      "Note the time of the bite. Do not try to catch or kill the snake.",
      "Get to a hospital fast - antivenom is the only real treatment.",
      "Call 112 if you cannot arrange transport."
    ],
    stepsHi: [
      "साँप से दूर हटें और व्यक्ति को शांत और स्थिर रखें।",
      "काटे गए अंग को स्थिर और दिल से नीचे रखें; अंगूठी और तंग चीज़ें हटाएँ।",
      "काटने का समय याद रखें। साँप को पकड़ने या मारने की कोशिश न करें।",
      "जल्दी अस्पताल पहुँचें - असली इलाज सिर्फ़ एंटीवेनम है।",
      "सवारी का इंतज़ाम न हो तो 112 पर कॉल करें।"
    ],
    dontEn: "Do not cut, suck or tie a tight band above the bite, and no ice.",
    dontHi: "काटने की जगह काटें, चूसें या कसकर पट्टी न बाँधें, और बर्फ़ न लगाएँ।"
  },
  {
    id: "seizure",
    group: "other",
    titleEn: "Seizure (fits)",
    titleHi: "दौरा (मिर्गी का झटका)",
    stepsEn: [
      "Clear hard objects away and cushion the head - do not hold them down.",
      "Time the fit. Most stop within 2-3 minutes.",
      "When the jerking stops, turn them onto their side.",
      "Call 112 if it lasts over 5 minutes, repeats, or happens in water.",
      "Stay with them until they are fully awake."
    ],
    stepsHi: [
      "आसपास की कड़ी चीज़ें हटाएँ और सिर के नीचे कुछ रखें - उन्हें बाँधें नहीं।",
      "दौरे का समय देखें। ज़्यादातर 2-3 मिनट में रुक जाते हैं।",
      "झटके रुकने पर करवट पर लिटाएँ।",
      "5 मिनट से ज़्यादा चले, दोबारा हो, या पानी में हो तो 112 पर कॉल करें।",
      "पूरी तरह होश आने तक साथ रहें।"
    ],
    dontEn: "Do not put anything in the mouth - not water, not a spoon.",
    dontHi: "मुँह में कुछ न डालें - पानी या चम्मच भी नहीं।"
  },
  {
    id: "poisoning",
    group: "other",
    callNow: true,
    titleEn: "Poisoning or overdose",
    titleHi: "ज़हर या दवा की ज़्यादा मात्रा",
    stepsEn: [
      "Call 112, or the national poison helpline on 1800-116-117.",
      "Note what was taken, how much and when, and keep the container or packet.",
      "If they are unconscious but breathing, turn them onto their side.",
      "If they stop breathing, start CPR.",
      "Follow what the helpline tells you - treatments differ by poison."
    ],
    stepsHi: [
      "112 पर कॉल करें, या राष्ट्रीय ज़हर हेल्पलाइन 1800-116-117।",
      "क्या लिया, कितना और कब - याद रखें, और डिब्बा या पैकेट संभालकर रखें।",
      "बेहोश हों पर साँस आ रही हो तो करवट पर लिटाएँ।",
      "साँस रुक जाए तो CPR शुरू करें।",
      "हेल्पलाइन जो कहे वही करें - हर ज़हर का इलाज अलग होता है।"
    ],
    dontEn: "Do not make them vomit, and do not give milk or water unless told to.",
    dontHi: "उल्टी कराने की कोशिश न करें, और बिना कहे दूध या पानी न दें।"
  },
  {
    id: "fainting",
    group: "other",
    titleEn: "Fainting",
    titleHi: "बेहोशी / चक्कर",
    stepsEn: [
      "Lay them flat and raise the legs about 30 cm.",
      "Loosen tight clothing and give them fresh air - ask people to step back.",
      "Check that they are breathing normally.",
      "When they wake, let them lie for a few minutes, then sit up slowly.",
      "Call 112 if they do not wake within a minute, or were hurt when they fell."
    ],
    stepsHi: [
      "सीधा लिटाएँ और पैर करीब 30 सेमी ऊपर उठाएँ।",
      "तंग कपड़े ढीले करें और हवा पहुँचाएँ - लोगों से पीछे हटने को कहें।",
      "देखें कि साँस सामान्य आ रही है।",
      "होश आने पर कुछ मिनट लेटे रहने दें, फिर धीरे से बैठाएँ।",
      "एक मिनट में होश न आए, या गिरते समय चोट लगी हो तो 112 पर कॉल करें।"
    ],
    dontEn: "Do not sit or stand them up straight away.",
    dontHi: "तुरंत बैठाएँ या खड़ा न करें।"
  }
];

const NAV_ITEMS = [
  { href: "#/need", labelKey: "navNeedHelp", icon: "info" },
  { href: "#/offer", labelKey: "navOfferHelp", icon: "people" },
  { href: "#/directory", labelKey: "navDirectory", icon: "phone" },
  { href: "#/about", labelKey: "navAbout", icon: "info" },
  { href: "#/operations", labelKey: "navOperations", icon: "landmark" },
  { href: "#/terms", labelKey: "termsLink", icon: "info" },
  { href: "#/login", labelKey: "navJoin", icon: "user" },
  { href: "#/sdg", labelKey: "navSdg", icon: "globe" },
  { href: "#/initiatives", labelKey: "navInitiatives", icon: "landmark" },
  { href: "#/sketch", labelKey: "navSketch", icon: "pencil" },
  { href: "#/careers", labelKey: "navCareers", icon: "briefcase" },
  { href: "#/contact", labelKey: "navContact", icon: "mail" }
];

const SDG_GOALS = [
  {
    n: 1,
    status: "slow",
    nameEn: "No poverty",
    nameHi: "गरीबी का अंत",
    statEn: "808 million people - about 1 in 10 - still live in extreme poverty in 2025. Only one in five countries is on track to halve its national poverty rate by 2030.",
    statHi: "2025 में करीब 80.8 करोड़ लोग - यानी 10 में से 1 - अत्यधिक गरीबी में हैं। पाँच में से सिर्फ़ एक देश 2030 तक राष्ट्रीय गरीबी दर आधी करने की राह पर है।",
    targetEn: "By 2030, eradicate extreme poverty for all people everywhere, everywhere measured as living on less than $2.15 a day.",
    targetHi: "2030 तक हर जगह अत्यधिक गरीबी (प्रतिदिन $2.15 से कम पर जीवन) समाप्त करना।",
    oursEn: "A free help directory that works on a basic phone and a slow connection.",
    oursHi: "मुफ़्त मदद सूची, जो साधारण फ़ोन और धीमे नेट पर भी चले।"
  },
  {
    n: 3,
    status: "moderate",
    nameEn: "Good health and well-being",
    nameHi: "अच्छा स्वास्थ्य और तंदुरुस्ती",
    statEn: "Maternal mortality fell from 228 deaths per 100,000 live births in 2015 to 197 in 2023. Under-five mortality dropped from 44 to 37 deaths per 1,000 live births.",
    statHi: "2015 में 100,000 जीवित जन्मों पर 228 मातृ मृत्यु थीं, 2023 में 197। पाँच वर्ष से छोटे बच्चों की मृत्यु 1,000 जीवित जन्मों पर 44 से 37 हो गई।",
    targetEn: "By 2030, reduce the global maternal mortality ratio to less than 70 per 100,000 live births, and end preventable deaths of newborns and children under 5.",
    targetHi: "2030 तक मातृ मृत्यु अनुपात 100,000 जीवित जन्मों पर 70 से कम लाना, और नवजात व 5 वर्ष से छोटे बच्चों की रोकी जा सकने वाली मौतें समाप्त करना।",
    oursEn: "Emergency numbers and first-aid steps in one place, in the language people read.",
    oursHi: "आपातकालीन नंबर और प्राथमिक मदद एक जगह, उसी भाषा में जो लोग पढ़ते हैं।"
  },
  {
    n: 5,
    status: "slow",
    nameEn: "Gender equality",
    nameHi: "लैंगिक समानता",
    statEn: "Women held 27.2% of seats in national parliaments on 1 January 2025 - up 4.9 percentage points since 2015, but still far from parity.",
    statHi: "1 जनवरी 2025 को राष्ट्रीय संसदों की 27.2% सीटें महिलाओं के पास थीं - 2015 से 4.9 फ़ीसदी अंक ज़्यादा, पर बराबरी अभी दूर है।",
    targetEn: "By 2030, ensure women's full and effective participation and equal opportunities for leadership at all levels of decision-making.",
    targetHi: "2030 तक निर्णय लेने के हर स्तर पर महिलाओं की पूरी और असरदार भागीदारी व नेतृत्व के बराबर अवसर सुनिश्चित करना।",
    oursEn: "Women's helplines surfaced first, with what to say when you call.",
    oursHi: "महिला हेल्पलाइन सबसे पहले, और कॉल पर क्या कहना है यह भी।"
  },
  {
    n: 10,
    status: "regress",
    nameEn: "Reduced inequalities",
    nameHi: "असमानता में कमी",
    statEn: "By 2025 more than three-quarters of the world's extreme poor live in sub-Saharan Africa or in fragile and conflict-affected countries.",
    statHi: "2025 तक दुनिया के तीन-चौथाई से ज़्यादा अत्यधिक गरीब सब-सहारा अफ़्रीका या संघर्ष-प्रभावित देशों में रहते हैं।",
    targetEn: "By 2030, progressively achieve and sustain income growth of the bottom 40 per cent of the population at a rate higher than the national average.",
    targetHi: "2030 तक आबादी के निचले 40% की आय राष्ट्रीय औसत से तेज़ दर पर लगातार बढ़ाना।",
    oursEn: "No email, no app store: one phone number is the only requirement.",
    oursHi: "न ईमेल, न ऐप स्टोर: सिर्फ़ एक फ़ोन नंबर ही ज़रूरी।"
  },
  {
    n: 16,
    status: "regress",
    nameEn: "Peace, justice and strong institutions",
    nameHi: "शांति, न्याय और मज़बूत संस्थाएँ",
    statEn: "120 million people are forcibly displaced - more than double the number in 2015 - as conflict and weak institutions drive people from their homes.",
    statHi: "12 करोड़ लोग ज़बरदस्ती विस्थापित हैं - 2015 से दोगुने से ज़्यादा - क्योंकि संघर्ष और कमज़ोर संस्थाएँ लोगों को घर छोड़ने पर मजबूर करते हैं।",
    targetEn: "Significantly reduce all forms of violence everywhere, and ensure equal access to justice for all.",
    targetHi: "हर जगह हिंसा के सभी रूपों को खासा कम करना, और सभी के लिए न्याय तक बराबर पहुँच सुनिश्चित करना।",
    oursEn: "Verified helplines and plain-language explanations of your rights.",
    oursHi: "जाँचे हुए हेल्पलाइन नंबर और आपके अधिकारों की सरल भाषा में जानकारी।"
  },
  {
    n: 17,
    status: "regress",
    nameEn: "Partnerships for the goals",
    nameHi: "लक्ष्यों के लिए साझेदारी",
    statEn: "Developing countries face a $4 trillion annual SDG financing gap, and official development assistance fell 7.1% in 2024 after five years of growth.",
    statHi: "विकासशील देशों के सामने सालाना 4 ट्रिलियन डॉलर का SDG वित्त अंतर है, और 2024 में आधिकारिक विकास सहायता पाँच साल की बढ़त के बाद 7.1% गिरी।",
    targetEn: "Strengthen domestic resource mobilisation, and assist developing countries in attaining long-term debt sustainability.",
    targetHi: "घरेलू संसाधन जुटाना मज़बूत करना, और विकासशील देशों को दीर्घकालिक कर्ज़ स्थिरता में मदद करना।",
    oursEn: "Open helpline data that any team can reuse, check and correct.",
    oursHi: "खुला हेल्पलाइन डेटा, जिसे कोई भी टीम दोबारा इस्तेमाल, जाँच और सुधार सके।"
  }
];

const INITIATIVES = [
  {
    id: "pmjay",
    url: "https://pmjay.gov.in",
    nameEn: "Ayushman Bharat PM-JAY",
    nameHi: "आयुष्मान भारत PM-JAY",
    benefitEn: "Free hospital care up to ₹5 lakh a year for eligible families.",
    benefitHi: "पात्र परिवारों के लिए सालाना ₹5 लाख तक मुफ़्त अस्पताल इलाज।",
    howEn: "Check eligibility on the official portal or at a hospital's Arogya Mitra desk, then get an Ayushman card.",
    howHi: "आधिकारिक पोर्टल या अस्पताल के आरोग्य मित्र डेस्क पर पात्रता जाँचें, फिर आयुष्मान कार्ड बनवाएँ।"
  },
  {
    id: "eshram",
    url: "https://eshram.gov.in",
    nameEn: "e-Shram",
    nameHi: "ई-श्रम",
    benefitEn: "A free digital ID for informal workers, with accident cover and links to welfare schemes.",
    benefitHi: "असंगठित श्रमिकों के लिए मुफ़्त डिजिटल पहचान, दुर्घटना बीमा और योजनाओं से जुड़ाव।",
    howEn: "Register free with Aadhaar, bank details and a phone number on the portal or at a CSC.",
    howHi: "पोर्टल पर या CSC पर आधार, बैंक विवरण और फ़ोन नंबर से मुफ़्त पंजीकरण करें।"
  },
  {
    id: "pmjdy",
    url: "https://pmjdy.gov.in",
    nameEn: "Pradhan Mantri Jan Dhan Yojana",
    nameHi: "प्रधानमंत्री जन धन योजना",
    benefitEn: "A zero-balance bank account with a RuPay card and accident cover.",
    benefitHi: "रुपे कार्ड और दुर्घटना बीमा के साथ ज़ीरो-बैलेंस बैंक खाता।",
    howEn: "Walk into any bank branch with Aadhaar and ask for a Jan Dhan account.",
    howHi: "आधार लेकर किसी भी बैंक शाखा जाएँ और जन धन खाता खुलवाएँ।"
  },
  {
    id: "ujjwala",
    url: "https://www.pmuy.gov.in",
    nameEn: "Pradhan Mantri Ujjwala Yojana",
    nameHi: "प्रधानमंत्री उज्ज्वला योजना",
    benefitEn: "A free LPG connection for eligible women from low-income households.",
    benefitHi: "कम आय वाले परिवारों की पात्र महिलाओं के लिए मुफ़्त LPG कनेक्शन।",
    howEn: "Apply at your nearest LPG distributor with Aadhaar, ration card and bank details.",
    howHi: "नज़दीकी LPG वितरक पर आधार, राशन कार्ड और बैंक विवरण के साथ आवेदन करें।"
  },
  {
    id: "pmayg",
    url: "https://pmayg.dord.gov.in",
    nameEn: "Pradhan Mantri Awas Yojana (Gramin)",
    nameHi: "प्रधानमंत्री आवास योजना (ग्रामीण)",
    benefitEn: "Financial assistance to build a pucca house.",
    benefitHi: "पक्का घर बनाने के लिए आर्थिक सहायता।",
    howEn: "Apply through your Gram Panchayat; first check your family on the SECC / Awaas+ list.",
    howHi: "ग्राम पंचायत के ज़रिए आवेदन करें; पहले SECC / आवास+ सूची में अपना परिवार जाँचें।"
  },
  {
    id: "nsp",
    url: "https://scholarships.gov.in",
    nameEn: "National Scholarship Portal",
    nameHi: "राष्ट्रीय छात्रवृत्ति पोर्टल",
    benefitEn: "Scholarships for students from low-income families, with one application window.",
    benefitHi: "कम आय वाले परिवारों के विद्यार्थियों के लिए छात्रवृत्ति, एक ही आवेदन खिड़की।",
    howEn: "Register on the portal, upload documents and apply before the yearly deadline.",
    howHi: "पोर्टल पर पंजीकरण करें, दस्तावेज़ अपलोड करें और सालाना अंतिम तारीख से पहले आवेदन करें।"
  }
];

const PAPER = "#fbf7ef";
const INK = "#243934";
const PALETTE = ["#f6b26b", "#e2705a", "#d0688a", "#9f8cc4", "#7cc4d8", "#2f9086", "#7fb069", "#e6c79c", "#14524d", "#2b2b2b", PAPER];

const SKETCHES = [
  {
    id: "kite",
    topic: "flight",
    titleEn: "Kite in the sky",
    titleHi: "आसमान में पतंग",
    viewBox: "0 0 200 200",
    body: `
      <circle class="region" data-region="sun" cx="42" cy="40" r="16"/>
      <path class="region" data-region="cloud" d="M112 44 C 112 34 124 28 134 32 C 140 22 158 24 162 36 C 174 36 178 48 168 52 H120 C 112 52 108 48 112 44 Z"/>
      <path class="region" data-region="hill" d="M0 200 V 172 C 34 148 70 150 100 176 C 130 150 168 148 200 174 V 200 Z"/>
      <path class="region" data-region="kite" d="M100 28 L 152 92 L 100 164 L 48 92 Z"/>
      <path class="line" d="M100 28 V 164"/>
      <path class="line" d="M48 92 H 152"/>
      <path class="line" d="M100 164 V 172"/>
      <path class="line" d="M100 184 V 186"/>
      <path class="region" data-region="bow1" d="M100 172 L 110 178 L 100 184 L 90 178 Z"/>
      <path class="region" data-region="bow2" d="M100 186 L 108 191 L 100 196 L 92 191 Z"/>
    `
  },
  {
    id: "shield",
    topic: "safety",
    titleEn: "Safety shield",
    titleHi: "सुरक्षा की ढाल",
    viewBox: "0 0 200 200",
    body: `
      <path class="region" data-region="shield-out" d="M100 22 L 160 46 V 100 C 160 138 134 166 100 178 C 66 166 40 138 40 100 V 46 Z"/>
      <path class="region" data-region="shield-in" d="M100 42 L 140 58 V 100 C 140 128 122 148 100 158 C 78 148 60 128 60 100 V 58 Z"/>
      <circle class="region" data-region="gem" cx="100" cy="96" r="18"/>
      <path class="line" d="M91 96 L 98 103 L 111 89"/>
    `
  },
  {
    id: "heart",
    topic: "health",
    titleEn: "Heart of care",
    titleHi: "देखभाल का दिल",
    viewBox: "0 0 200 200",
    body: `
      <path class="region" data-region="heart" d="M100 172 C 36 130 20 96 38 68 C 56 40 92 46 100 76 C 108 46 144 40 162 68 C 180 96 164 130 100 172 Z"/>
      <rect class="region" data-region="cross-v" x="88" y="78" width="24" height="58" rx="6"/>
      <rect class="region" data-region="cross-h" x="71" y="95" width="58" height="24" rx="6"/>
    `
  },
  {
    id: "home",
    topic: "home",
    titleEn: "A safe home",
    titleHi: "एक सुरक्षित घर",
    viewBox: "0 0 200 200",
    body: `
      <circle class="region" data-region="sun" cx="172" cy="40" r="13"/>
      <path class="region" data-region="roof" d="M14 98 L 100 32 L 186 98 Z"/>
      <rect class="region" data-region="wall" x="40" y="96" width="120" height="78" rx="5"/>
      <rect class="region" data-region="win-l" x="54" y="112" width="22" height="22" rx="4"/>
      <rect class="region" data-region="win-r" x="124" y="112" width="22" height="22" rx="4"/>
      <rect class="region" data-region="door" x="86" y="126" width="28" height="48" rx="4"/>
      <path class="region" data-region="lawn" d="M0 184 C 40 176 70 180 100 184 C 130 180 160 176 200 184 V 200 H 0 Z"/>
    `
  },
  {
    id: "book",
    topic: "learn",
    titleEn: "Open book",
    titleHi: "खुली किताब",
    viewBox: "0 0 200 200",
    body: `
      <path class="region" data-region="page-l" d="M98 64 C 78 52 54 50 32 56 V 148 C 54 142 78 144 98 156 Z"/>
      <path class="region" data-region="page-r" d="M102 64 C 122 52 146 50 168 56 V 148 C 146 142 122 144 102 156 Z"/>
      <path class="line" d="M98 64 V 156"/>
      <path class="line" d="M102 64 V 156"/>
      <path class="line" d="M48 74 C 62 72 78 76 88 82"/>
      <path class="line" d="M48 92 C 62 90 78 94 88 100"/>
      <path class="line" d="M48 110 C 62 108 78 112 88 118"/>
      <path class="line" d="M112 82 C 122 76 138 72 152 74"/>
      <path class="line" d="M112 100 C 122 94 138 90 152 92"/>
      <path class="line" d="M112 118 C 122 112 138 108 152 110"/>
    `
  }
];

const SIGN_IN_CODE = "123456";

const root = document.getElementById("main");
const appState = document.getElementById("app-state");

function render() {
  const dict = i18n[state.locale];
  root.innerHTML = buildScreen(state.screen, dict, state);
  appState.textContent = JSON.stringify({ locale: state.locale, screen: state.screen });
  wireScreen(state.screen, dict, state);
  document.documentElement.lang = state.locale;
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.setAttribute("aria-pressed", state.locale === "hi" ? "true" : "false");
    const langLabel = langToggle.querySelector(".dock-label");
    if (langLabel) langLabel.textContent = state.locale === "hi" ? "English" : "हिंदी";
  }
  const footerNote = document.querySelector(".footer-note");
  if (footerNote) footerNote.textContent = dict.footerNote;
  const disclaimer = document.querySelector(".disclaimer");
  if (disclaimer) disclaimer.textContent = dict.disclaimer;
  document.querySelectorAll("[data-footlink]").forEach(el => {
    const key = el.getAttribute("data-footlink");
    if (key === "terms") el.textContent = dict.termsLink;
    if (key === "ops") el.textContent = dict.navOperations;
    if (key === "social") el.textContent = dict.socialLabel;
  });
  const tabNames = { emergency: dict.emergencyTab, aid: dict.aidTab, sketch: dict.sketchTab, research: dict.tabResearch, videos: dict.tabVideos };
  document.querySelectorAll("[data-tab]").forEach(el => {
    const name = el.getAttribute("data-tab");
    const label = el.querySelector("[data-tab-label]");
    if (label && tabNames[name]) label.textContent = tabNames[name];
    if (name === state.screen) {
      el.setAttribute("aria-current", "page");
    } else {
      el.removeAttribute("aria-current");
    }
  });
  renderChrome(dict, state);
  syncTabbar(dict, state);
  if (state.screen !== lastRenderedScreen) {
    lastRenderedScreen = state.screen;
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
}

const TAB_PARENT = {
  landing: "landing",
  find: "find",
  sos: "sos",
  services: "services",
  ambulance: "services",
  "air-ambulance": "services",
  pharmacy: "services",
  police: "services",
  advice: "services",
  medicines: "services",
  insurance: "services",
  me: "me"
};

function syncTabbar(dict, state) {
  const parent = TAB_PARENT[state.screen] || "";
  document.querySelectorAll(".tabbar .tab").forEach(tab => {
    const id = tab.getAttribute("data-tab");
    const active = id === parent;
    tab.classList.toggle("is-active", active);
    if (active) tab.setAttribute("aria-current", "page");
    else tab.removeAttribute("aria-current");
    const label = tab.querySelector(".tab-label");
    if (label && tab.dataset.labelKey) label.textContent = dict[tab.dataset.labelKey] || label.textContent;
    if (label && tab.dataset.labelKey) tab.setAttribute("aria-label", dict[tab.dataset.labelKey] || label.textContent);
  });
}

let lastRenderedScreen = null;

function navIcon(name) {
  const icons = {
    info: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 10.6v6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="7.6" r="1" fill="currentColor"/>',
    phone: '<path d="M6.5 3.5 H9.5 L11 8 L8.8 9.6 C 9.8 12.2 11.8 14.2 14.4 15.2 L16 13 L20.5 14.5 V17.5 C 20.5 19.1 19.1 20.4 17.5 20.2 C 10.3 19.3 4.7 13.7 3.8 6.5 C 3.6 4.9 4.9 3.5 6.5 3.5 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    user: '<circle cx="12" cy="8" r="3.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M4.5 20c1-4.4 3.9-6.2 7.5-6.2s6.5 1.8 7.5 6.2" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    globe: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.2 12h17.6" stroke="currentColor" stroke-width="1.4"/><path d="M12 3c3.2 3 3.2 15 0 18c-3.2-3-3.2-15 0-18Z" fill="none" stroke="currentColor" stroke-width="1.4"/>',
    landmark: '<path d="M3.5 9.5 12 4l8.5 5.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M6 10.5v7M10 10.5v7M14 10.5v7M18 10.5v7M3.5 20h17" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>',
    pencil: '<path d="M3.5 20.5l1.2-4.2L15.8 5.2l3 3L7.7 19.3Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
    briefcase: '<rect x="3" y="7.5" width="18" height="12" rx="2.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9 7.5V5.6c0-.9.7-1.6 1.6-1.6h2.8c.9 0 1.6.7 1.6 1.6V7.5" fill="none" stroke="currentColor" stroke-width="1.7"/>',
    mail: '<rect x="2.5" y="5" width="19" height="14" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.4 6.4 12 12.6 20.6 6.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>'
  };
  return `<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">${icons[name] || icons.info}</svg>`;
}

function renderChrome(dict, state) {
  const panel = document.getElementById("menu-panel");
  if (panel) {
    panel.innerHTML = NAV_ITEMS.map(item => {
      const active = item.href === "#/" + state.screen;
      return `<a href="${item.href}"${active ? ' aria-current="page"' : ""}><span class="mi" aria-hidden="true">${navIcon(item.icon)}</span><span>${escapeHtml(dict[item.labelKey])}</span></a>`;
    }).join("");
  }
  const homeBtn = document.getElementById("home-btn");
  if (homeBtn) {
    homeBtn.setAttribute("aria-label", dict.home);
    homeBtn.setAttribute("title", dict.home);
  }
  const menuBtn = document.getElementById("menu-btn");
  if (menuBtn) {
    menuBtn.setAttribute("aria-label", dict.menuLabel);
    menuBtn.setAttribute("title", dict.menuLabel);
  }
  const themeBtn = document.getElementById("theme-btn");
  if (themeBtn) {
    const nextLabel = state.theme === "light" ? dict.themeDark : dict.themeLight;
    themeBtn.setAttribute("aria-pressed", String(state.theme === "light"));
    themeBtn.setAttribute("aria-label", nextLabel);
    themeBtn.setAttribute("title", nextLabel);
    const themeLabel = themeBtn.querySelector(".dock-label");
    if (themeLabel) {
      themeLabel.textContent = state.theme === "light" ? dict.themeDarkShort : dict.themeLightShort;
    }
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  try {
    localStorage.setItem("sarvseva-theme", theme);
  } catch (err) {
    /* storage unavailable */
  }
}

function initChrome() {
  const menuBtn = document.getElementById("menu-btn");
  const panel = document.getElementById("menu-panel");
  const closeMenu = () => {
    if (panel) panel.setAttribute("hidden", "");
    if (menuBtn) menuBtn.setAttribute("aria-expanded", "false");
  };
  menuBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (!panel || !menuBtn) return;
    if (panel.hasAttribute("hidden")) {
      panel.removeAttribute("hidden");
      menuBtn.setAttribute("aria-expanded", "true");
    } else {
      closeMenu();
    }
  });
  panel?.addEventListener("click", (e) => {
    if (e.target.closest("a")) closeMenu();
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".menu")) closeMenu();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  document.getElementById("home-btn")?.addEventListener("click", () => {
    closeMenu();
    if (state.screen === "landing") {
      render();
    } else {
      location.hash = "#/landing";
    }
  });

  document.getElementById("theme-btn")?.addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme(state.theme);
    render();
  });

}

function buildScreen(screen, dict, state) {
  switch (screen) {
    case "find":
      return findHtml(dict, state);
    case "sos":
      return sosHtml(dict, state);
    case "services":
      return servicesHtml(dict, state);
    case "ambulance":
      return ambulanceHtml(dict, state);
    case "air-ambulance":
      return airAmbulanceHtml(dict, state);
    case "pharmacy":
      return pharmacyHtml(dict, state);
    case "police":
      return policeHtml(dict, state);
    case "advice":
      return adviceHtml(dict, state);
    case "medicines":
      return medicinesHtml(dict, state);
    case "insurance":
      return insuranceHtml(dict, state);
    case "login":
      return loginHtml(dict, state);
    case "otp":
      return otpHtml(dict, state);
    case "register":
      return registerHtml(dict, state);
    case "me":
      return meHtml(dict, state);
    case "resources":
      return resourcesHtml(dict, state);
    case "emergency":
      return emergencyHtml(dict, state);
    case "directory":
      return directoryHtml(dict, state);
    case "need":
      return needHelpHtml(dict, state);
    case "status":
      return statusHtml(dict, state);
    case "offer":
      return offerHelpHtml(dict, state);
    case "sketch":
      return sketchHtml(dict, state);
    case "aid":
      return aidHtml(dict, state);
    case "research":
      return researchHtml(dict, state);
    case "videos":
      return videosHtml(dict, state);
    case "about":
      return aboutHtml(dict, state);
    case "operations":
      return opsHtml(dict, state);
    case "service-status":
      return serviceStatusHtml(dict, state);
    case "terms":
      return termsHtml(dict, state);
    case "sdg":
      return sdgHtml(dict, state);
    case "initiatives":
      return initiativesHtml(dict, state);
    case "careers":
      return careersHtml(dict, state);
    case "contact":
      return contactHtml(dict, state);
    default:
      return landingHtml(dict);
  }
}

function backLink(dict, state) {
  return `<div class="back-link-wrap"><a href="#" data-go="${escapeHtml(state.prev || "landing")}" class="back-link">${dict.back}</a></div>`;
}

const pillarIcons = [
  `<svg viewBox="0 0 24 24" width="18" height="18"><rect x="7" y="2.5" width="10" height="19" rx="2.6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M10.6 18.4H13.4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`,
  `<svg viewBox="0 0 24 24" width="18" height="18"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 12H21" stroke="currentColor" stroke-width="1.4"/><path d="M12 3C15.2 6 15.2 18 12 21C8.8 18 8.8 6 12 3Z" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>`,
  `<svg viewBox="0 0 24 24" width="18" height="18"><path d="M12 3.5L13.9 9.2L19.5 11L13.9 12.8L12 18.5L10.1 12.8L4.5 11L10.1 9.2Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>`
];

function landingHtml(dict) {
  const lastReq = currentRequest();
  const resume = lastReq && lastReq.state !== "cancelled";
  const pillars = [
    [dict.pillar1Title, dict.pillar1Body],
    [dict.pillar2Title, dict.pillar2Body],
    [dict.pillar3Title, dict.pillar3Body]
  ];
  return `
    <section class="sos-strip reveal">
      <div class="sos-copy">
        <span class="sos-label">${dict.sosLabel}</span>
        <span class="sos-sub">${dict.sosSub}</span>
      </div>
      <button type="button" class="btn sos-btn" data-call="112" data-call-name="${dict.sosLabel}">${dict.sosAction}</button>
    </section>

    <section class="choice-grid reveal" aria-label="${escapeHtml(dict.homeNeedTitle)} / ${escapeHtml(dict.homeOfferTitle)}">
      <a class="choice-card choice-need" href="#" data-go="need">
        <span class="choice-title">${escapeHtml(dict.homeNeedTitle)}</span>
        <span class="choice-body">${escapeHtml(dict.homeNeedBody)}</span>
        <span class="choice-cta" aria-hidden="true">→</span>
      </a>
      <a class="choice-card choice-offer" href="#" data-go="offer">
        <span class="choice-title">${escapeHtml(dict.homeOfferTitle)}</span>
        <span class="choice-body">${escapeHtml(dict.homeOfferBody)}</span>
        <span class="choice-cta" aria-hidden="true">→</span>
      </a>
      <a class="choice-services" href="#" data-go="directory">${escapeHtml(dict.homeServicesLink)}</a>
      ${resume ? `<a class="choice-resume" href="#" data-go="status">
        <span class="choice-resume-title">${escapeHtml(dict.homeResumeTitle)}</span>
        <span class="choice-resume-body">${escapeHtml(dict.homeResumeBody)}</span>
        <span class="choice-resume-cta">${escapeHtml(dict.homeResumeCta)} →</span>
      </a>` : ""}
    </section>

    <section class="hero-shell reveal">
      <div class="video-card">
        <video class="hero-video" id="hero-video" muted playsinline preload="metadata">
          <source src="assets/sarvseva-intro.mp4" type="video/mp4">
        </video>
        <div class="video-shade" aria-hidden="true"></div>
        <div class="video-copy">
          <span class="eyebrow">${dict.videoLabel}</span>
          <h1 class="hero-title">${escapeHtml(dict.tagline)}</h1>
          <p class="hero-sub">${dict.heroSub}</p>
        </div>
      </div>
    </section>

    <section class="about-panel reveal">
      <span class="eyebrow">${dict.aboutEyebrow}</span>
      <h2 class="section-h2">${dict.aboutTitle}</h2>
      <p class="lead">${dict.aboutLead}</p>
      ${dict.aboutParas.map(p => `<p class="body-copy">${escapeHtml(p)}</p>`).join("")}
      <div class="pillars">
        ${pillars.map((p, i) => `
          <div class="pillar">
            <span class="pillar-icon" aria-hidden="true">${pillarIcons[i]}</span>
            <h3>${escapeHtml(p[0])}</h3>
            <p>${escapeHtml(p[1])}</p>
          </div>
        `).join("")}
      </div>
    </section>

    <section class="cta-panel reveal">
      <span class="eyebrow">${dict.signIn} &middot; ${dict.registerCta}</span>
      <h2 class="section-h2">${dict.ctaTitle}</h2>
      <p class="lead">${dict.ctaSub}</p>
      <div class="cta-actions">
        <a href="#" data-go="login" class="btn btn-primary btn-lg">${dict.signIn}</a>
        <a href="#" data-go="register" class="btn btn-ghost btn-lg">${dict.registerCta}</a>
      </div>
      <p class="fine">${dict.finePrint}</p>
      <div class="trust-grid">
        <div class="trust-item"><span class="trust-mark" aria-hidden="true">✓</span><span class="trust-text">${dict.trustCopy1}</span></div>
        <div class="trust-item"><span class="trust-mark" aria-hidden="true">✓</span><span class="trust-text">${dict.trustCopy2}</span></div>
        <div class="trust-item"><span class="trust-mark" aria-hidden="true">✓</span><span class="trust-text">${dict.trustCopy3}</span></div>
      </div>
      <a class="text-link" href="#" data-go="resources">${dict.browseLink}</a>
    </section>
  `;
}

function loginHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.loginTitle}</h1>
      <p class="card-sub">${dict.loginSubtitle}</p>
      <form id="login-form" class="phone-form">
        <label class="field-label" for="login-phone">${dict.phoneLabel}</label>
        <input id="login-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" placeholder="${dict.phonePlaceholder}" value="${escapeHtml(state.phone)}" required class="input">
        <button type="submit" class="btn btn-primary btn-full">${dict.sendCode}</button>
      </form>
      <p class="switch"><a href="#" data-go="login">${dict.noAccount}</a></p>
    </section>
  `;
}

function otpHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.otpTitle}</h1>
      <p class="card-sub">${dict.otpSubtitle}</p>
      <p class="hint-line">${state.phone ? escapeHtml(state.phone) + " · " : ""}${dict.otpHint}</p>
      <form id="otp-form" class="phone-form">
        <label class="field-label" for="otp-code">${dict.codeLabel}</label>
        <input id="otp-code" name="code" type="text" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]*" maxlength="6" placeholder="000000" required class="input code-input">
        <button type="submit" class="btn btn-primary btn-full">${dict.nextLabel}</button>
      </form>
      <p class="hint-line">${dict.codeHint}</p>
      <p class="switch"><button type="button" id="resend-code" class="switch-link">${dict.resendLabel}</button></p>
    </section>
  `;
}

function registerHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.registerTitle}</h1>
      <p class="card-sub">${dict.registerSubtitle}</p>
      <form id="register-form">
        <div class="field">
          <label for="reg-password">${dict.passwordLabel}</label>
          <input id="reg-password" name="password" type="password" autocomplete="new-password" placeholder="••••••••" required class="input">
          <p class="field-hint">${dict.passwordHint}</p>
        </div>
        <div class="field">
          <label for="reg-pin">${dict.pinLabel}</label>
          <input id="reg-pin" name="pin" type="password" inputmode="numeric" autocomplete="off" pattern="[0-9]*" maxlength="6" placeholder="1234" required class="input">
          <p class="field-hint">${dict.pinHint}</p>
        </div>
        <div class="field">
          <label for="reg-pin-confirm">${dict.pinConfirmLabel}</label>
          <input id="reg-pin-confirm" name="pinConfirm" type="password" inputmode="numeric" autocomplete="off" pattern="[0-9]*" maxlength="6" placeholder="1234" required class="input">
        </div>
        <button type="submit" class="btn btn-primary btn-full">${dict.createAccount}</button>
      </form>
    </section>
  `;
}

function meHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.meTitle}</h1>
      <div class="account-head">
        <div class="account-avatar" aria-hidden="true">
          <svg viewBox="0 0 32 32" width="42" height="42"><circle cx="16" cy="11" r="6" fill="currentColor"/><path d="M4 29 C 8 23, 12 23, 16 26 C 20 23, 24 23, 28 29 Z" fill="currentColor"/></svg>
        </div>
        <div>
          <p class="account-name">${dict.accountNameFallback}</p>
          <p class="account-phone">${escapeHtml(state.phone || dict.phonePlaceholder)}</p>
        </div>
      </div>
      <div class="account-actions">
        <button type="button" class="btn btn-ghost" id="pin-signin-btn">${dict.pinSignIn}</button>
        <button type="button" class="btn btn-ghost" id="signout-btn">${dict.signOut}</button>
      </div>
      <div class="row-sm">
        <span class="label">${dict.language}</span>
        <span class="value" id="lang-me-toggle">${localeNames[state.locale]}</span>
      </div>
    </section>
    <section class="card flow">
      <h2 class="section-title">${dict.resourcesTitle}</h2>
      <p class="card-sub">${dict.resourcesSubtitle}</p>
      ${categoriesHtml(dict, state)}
    </section>
  `;
}

function resourcesHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.resourcesTitle}</h1>
      <p class="card-sub">${dict.resourcesSubtitle}</p>
      ${categoriesHtml(dict, state)}
    </section>
  `;
}

/* ------------------------------------------------------------------
   Operational readiness: boundaries, hours, escalation, playbooks
   ------------------------------------------------------------------ */
const OPS_PAGE = {
  en: {
    eyebrow: "Operational readiness",
    title: "How SarvSeva operates",
    sub: "Who answers, when, what we check before a listing appears, and what happens when something goes wrong. Written down so we can be held to it.",
    banner: "SarvSeva is a directory and a request intake front end. It is not an emergency service and it does not dispatch help.",
    cards: [
      {
        title: "Service boundaries",
        bullets: [
          "We publish verified government helplines. Community helpers are listed only after they opt in and pass the checks below.",
          "We do not dispatch police, ambulance or fire. Emergency calls go from your own phone to 112.",
          "We do not give medical, legal or financial advice, move people, or handle money.",
          "We do not promise that a helper will respond. Requests are matched, never assigned.",
          "Nothing you write leaves this phone until matching is switched on, and every status screen says which of the two is true."
        ]
      },
      {
        title: "Moderation hours",
        bullets: [
          "Requests and reports are read 08:00-22:00 IST, seven days a week.",
          "Outside those hours reports queue and are picked up from 08:00. Anything that may be an immediate danger is handled first.",
          "The desk is staffed by trained volunteers with one paid lead on call. That lead is the incident commander for the day."
        ]
      },
      {
        title: "Response expectations",
        rows: [
          ["Request acknowledged", "2 hours during moderation hours"],
          ["First human review of a report", "24 hours"],
          ["Safety or child-protection report", "1 hour, any time"],
          ["Listing correction applied", "5 working days"],
          ["Appeal decision", "10 working days"]
        ]
      },
      {
        title: "Escalation ownership",
        bullets: [
          "Every day has a named incident commander: the on-call lead. Their name and shift sit on the public status page.",
          "Moderators escalate to the incident commander, who escalates to the founder, and to police or emergency services wherever life is at risk.",
          "Safeguarding concerns involving a child go to two reviewers, then to 1098 or the district child protection unit.",
          "Self-harm disclosures go to a trained reviewer and are answered with the 14416 and 112 routes, never with advice invented in the app."
        ]
      },
      {
        title: "Identity checks, proportionate to risk",
        bullets: [
          "Organisations: registration or licence document, an authorised signatory, and a call-back on the published number. Rechecked every 12 months.",
          "Individual volunteers: phone verification, the area they cover, and two references. No documents are collected for low-risk offers such as translation or phone help.",
          "Higher-risk offers, such as medical help or transport, need a professional registration and an ID check before matching is enabled.",
          "Every listing shows what was checked and the date of the check. We never show a badge that only says trusted."
        ]
      },
      {
        title: "Safety guidance",
        bullets: [
          "Do not enter an unsafe place, a private home you have not agreed to visit, or anywhere you cannot leave freely.",
          "Do not transport people you have not spoken to, and never take an unaccompanied child anywhere.",
          "Do not handle weapons, chemicals, medical waste or anything that looks hazardous. Call the service trained for it.",
          "Do not share identity documents, bank details, passwords, or someone else's medical information without their consent.",
          "Meet in a public place, tell someone where you are going, and stop the moment something feels wrong. No request is worth your safety."
        ]
      },
      {
        title: "Playbooks, review and appeals",
        bullets: [
          "Abuse or harassment: the request or listing is frozen from matching, both sides are asked for their account, and a reviewer who is not the reporter decides.",
          "Fraud or money requests: the listing is suspended and the number blocked while the claim is checked. SarvSeva never asks for payment.",
          "Impersonation: the account is paused, the organisation is contacted on its published number, and the listing is hidden until identity is confirmed.",
          "False reports: checked against the request history and the other side's account. A pattern of false reports ends in a written warning, then suspension.",
          "Safeguarding: immediate risk goes to emergency services first, then to the child-protection or women's helpline, then to two-person review.",
          "Every decision is made by a person, is written down with a reason, and can be appealed from the same screen for 30 days."
        ]
      },
      {
        title: "Training and specialist escalation",
        bullets: [
          "Moderators complete training on distressing content, child safety, self-harm disclosures and imminent threats before their first shift.",
          "A shift never runs with a single moderator on safeguarding cases; two people read anything involving a child.",
          "Specialist routes: 112 for immediate danger, 1098 for children, 14416 for mental health, 1930 for financial fraud, 181 for women.",
          "Moderators can step away after a distressing case. Debriefs are part of the shift, not an extra."
        ]
      },
      {
        title: "Verified listings and recheck cadence",
        bullets: [
          "Every listing carries the source we checked, the scope of that check, and the date.",
          "Each one is rechecked every 90 days. A Needs re-check badge appears when the date is close.",
          "When a recheck date passes, the listing is labelled expired and taken out of search results until someone revalidates it.",
          "Anyone can report a wrong listing from the card itself; reports are reviewed within 24 hours."
        ]
      }
    ]
  },
  hi: {
    eyebrow: "संचालन की तैयारी",
    title: "सर्वसेवा कैसे चलती है",
    sub: "कौन जवाब देता है, कब देता है, किसी सूची को दिखाने से पहले क्या जाँचा जाता है, और कुछ गड़बड़ होने पर क्या होता है। लिखित, ताकि जवाबदेही तय रहे।",
    banner: "सर्वसेवा एक निर्देशिका और अनुरोध लेने का ज़रिया है। यह आपातकालीन सेवा नहीं है और मदद नहीं भेजती।",
    cards: [
      {
        title: "सेवा की सीमाएँ",
        bullets: [
          "हम जाँची हुई सरकारी हेल्पलाइनें छापते हैं। सामुदायिक मददगार तभी सूची में आते हैं जब वे खुद जुड़ें और नीचे की जाँचें पास करें।",
          "हम पुलिस, एम्बुलेंस या फायर नहीं भेजते। आपातकालीन कॉल आपके ही फ़ोन से 112 पर जाती है।",
          "हम मेडिकल, कानूनी या आर्थिक सलाह नहीं देते, किसी को नहीं पहुँचाते और पैसा नहीं लेते-देते।",
          "हम वादा नहीं करते कि कोई मददगार जवाब देगा। अनुरोध जोड़े जाते हैं, सौंपे नहीं जाते।",
          "जब तक मैचिंग चालू न हो, आपका लिखा कुछ भी फ़ोन से बाहर नहीं जाता, और हर स्थिति स्क्रीन बताती है कि इनमें से कौन-सी बात सही है।"
        ]
      },
      {
        title: "मॉडरेशन का समय",
        bullets: [
          "अनुरोध और शिकायतें हफ़्ते के सातों दिन, 08:00-22:00 IST तक पढ़ी जाती हैं।",
          "इस समय के बाहर शिकायतें कतार में रहती हैं और 08:00 से ली जाती हैं। तुरंत खतरे जैसी कोई भी बात पहले देखी जाती है।",
          "डेस्क पर प्रशिक्षित स्वयंसेवक रहते हैं और एक वेतन पाने वाला लीड ऑन-कॉल रहता है। वही उस दिन का घटना-प्रभारी होता है।"
        ]
      },
      {
        title: "जवाब देने का वादा",
        rows: [
          ["अनुरोध की पुष्टि", "मॉडरेशन समय में 2 घंटे"],
          ["किसी शिकायत की पहली मानवीय जाँच", "24 घंटे"],
          ["सुरक्षा या बाल-सुरक्षा शिकायत", "1 घंटा, किसी भी समय"],
          ["सूची में सुधार लागू", "5 कार्य-दिवस"],
          ["अपील पर निर्णय", "10 कार्य-दिवस"]
        ]
      },
      {
        title: "एस्केलेशन और ज़िम्मेदारी",
        bullets: [
          "हर दिन का एक नामित घटना-प्रभारी होता है: ऑन-कॉल लीड। उसका नाम और पारी सार्वजनिक स्थिति पेज पर रहती है।",
          "मॉडरेटर घटना-प्रभारी तक बढ़ाते हैं, वह संस्थापक तक, और जहाँ जान का खतरा हो वहाँ पुलिस या आपातकालीन सेवा तक।",
          "बच्चे से जुड़ी सुरक्षा चिंता दो समीक्षकों के पास जाती है, फिर 1098 या ज़िला बाल संरक्षण इकाई के पास।",
          "खुद को नुकसान पहुँचाने की बात प्रशिक्षित समीक्षक के पास जाती है और उत्तर 14416 और 112 के रास्ते दिया जाता है, ऐप में गढ़ी सलाह से नहीं।"
        ]
      },
      {
        title: "पहचान की जाँच, जोखिम के हिसाब से",
        bullets: [
          "संस्थाएँ: पंजीकरण या लाइसेंस दस्तावेज़, अधिकृत हस्ताक्षरकर्ता, और छपे नंबर पर वापस कॉल। हर 12 महीने में दोबारा जाँच।",
          "व्यक्ति स्वयंसेवक: फ़ोन सत्यापन, जिस इलाके में सेवा देंगे, और दो संदर्भ। अनुवाद या फ़ोन-मदद जैसे कम जोखिम वाले कामों के लिए कोई दस्तावेज़ नहीं लिए जाते।",
          "मेडिकल मदद या वाहन जैसे ज़्यादा जोखिम वाले कामों के लिए पेशेवर पंजीकरण और पहचान जाँच ज़रूरी है, तभी मैचिंग खुलती है।",
          "हर सूची बताती है कि क्या जाँचा गया और कब। हम सिर्फ़ भरोसेमंद लिखा हुआ बैज कभी नहीं दिखाते।"
        ]
      },
      {
        title: "सुरक्षा निर्देश",
        bullets: [
          "असुरक्षित जगह, बिना सहमति वाले घर, या ऐसी किसी जगह न जाएँ जहाँ से आप खुद न निकल सकें।",
          "जिनसे बात नहीं हुई उन्हें वाहन से न ले जाएँ, और किसी अकेले बच्चे को कहीं न ले जाएँ।",
          "हथियार, केमिकल, मेडिकल कचरा या खतरनाक दिखने वाली किसी चीज़ को न छुएँ। जो सेवा इसके लिए प्रशिक्षित है, उसे बुलाएँ।",
          "पहचान पत्र, बैंक विवरण, पासवर्ड, या किसी दूसरे की मेडिकल जानकारी उनकी सहमति के बिना साझा न करें।",
          "सार्वजनिक जगह पर मिलें, किसी को बताएँ कि कहाँ जा रहे हैं, और कुछ गड़बड़ लगे तो तुरंत रुक जाएँ। कोई भी अनुरोध आपकी सुरक्षा से बड़ा नहीं।"
        ]
      },
      {
        title: "प्लेबुक, समीक्षा और अपील",
        bullets: [
          "दुर्व्यवहार या उत्पीड़न: अनुरोध या सूची मैचिंग से रोक दी जाती है, दोनों पक्षों से बात लिखवाई जाती है, और शिकायतकर्ता के अलावा कोई समीक्षक फ़ैसला करता है।",
          "धोखाधड़ी या पैसे की माँग: जाँच के दौरान सूची निलंबित और नंबर ब्लॉक। सर्वसेवा कभी भुगतान नहीं माँगती।",
          "किसी और का नाम इस्तेमाल करना: खाता रोका जाता है, संस्था से उसके छपे नंबर पर संपर्क होता है, और पहचान तय होने तक सूची छिपी रहती है।",
          "झूठी शिकायतें: अनुरोध इतिहास और दूसरे पक्ष से मिलाकर जाँची जाती हैं। बार-बार झूठी शिकायत पर लिखित चेतावनी, फिर निलंबन।",
          "बाल-सुरक्षा: तुरंत खतरा पहले आपातकालीन सेवा के पास, फिर बाल या महिला हेल्पलाइन के पास, फिर दो-व्यक्ति समीक्षा के पास।",
          "हर फ़ैसला कोई व्यक्ति करता है, कारण के साथ लिखा जाता है, और उसी स्क्रीन से 30 दिन तक अपील की जा सकती है।"
        ]
      },
      {
        title: "प्रशिक्षण और विशेषज्ञ एस्केलेशन",
        bullets: [
          "पहली पारी से पहले मॉडरेटर कठिन कॉन्टेंट, बाल-सुरक्षा, खुद को नुकसान पहुँचाने की बातों और तुरंत खतरे पर प्रशिक्षण लेते हैं।",
          "बाल-सुरक्षा मामलों में पारी में एक ही मॉडरेटर नहीं रहता; बच्चे से जुड़ी हर बात दो लोग पढ़ते हैं।",
          "विशेषज्ञ रास्ते: तुरंत खतरे के लिए 112, बच्चों के लिए 1098, मानसिक स्वास्थ्य के लिए 14416, आर्थिक धोखे के लिए 1930, महिलाओं के लिए 181।",
          "कठिन मामले के बाद मॉडरेटर हट सकते हैं। डीब्रीफ़िंग पारी का हिस्सा है, अतिरिक्त काम नहीं।"
        ]
      },
      {
        title: "जाँची सूचियाँ और दोबारा जाँच का समय",
        bullets: [
          "हर सूची के साथ वह स्रोत है जिससे जाँचा गया, जाँच का दायरा, और तारीख।",
          "हर सूची 90 दिन में दोबारा जाँची जाती है। तारीख नज़दीक आते ही फिर जाँच ज़रूरी बैज दिखता है।",
          "तारीख बीतते ही सूची अवधि-बीती कहलाती है और दोबारा जाँच तक खोज से हट जाती है।",
          "कोई भी कार्ड से ही गलत सूची की शिकायत कर सकता है; शिकायतें 24 घंटे में देखी जाती हैं।"
        ]
      }
    ]
  }
};

const STATUS_PAGE = {
  en: {
    eyebrow: "Public status",
    title: "Service status",
    sub: "What is live, what is not, and when each part was last checked. This page is updated by a person, not generated.",
    updatedLabel: "Last updated",
    commanderLabel: "Incident commander today",
    commanderName: "Ayush Gupta, founder (on-call lead)",
    commanderShift: "08:00-22:00 IST",
    componentsTitle: "Components",
    limitsTitle: "Known limits in this build",
    limits: [
      "Requests are saved on the phone only. No helper is notified.",
      "Matching and volunteer verification are not switched on.",
      "No SMS or push delivery, so no message can be missed or sent."
    ],
    incidentsTitle: "Incident history",
    incidentsEmpty: "No incidents recorded since the directory went live.",
    legend: "States: Operational, Degraded, Not live."
  },
  hi: {
    eyebrow: "सार्वजनिक स्थिति",
    title: "सेवा की स्थिति",
    sub: "क्या चालू है, क्या नहीं, और हर हिस्सा आख़िरी बार कब जाँचा गया। यह पेज कोई व्यक्ति अपडेट करता है, अपने आप नहीं बनता।",
    updatedLabel: "आख़िरी बार अपडेट",
    commanderLabel: "आज का घटना-प्रभारी",
    commanderName: "आयुष गुप्ता, संस्थापक (ऑन-कॉल लीड)",
    commanderShift: "08:00-22:00 IST",
    componentsTitle: "हिस्से",
    limitsTitle: "इस बिल्ड की जानी सीमाएँ",
    limits: [
      "अनुरोध सिर्फ़ फ़ोन में सहेजे जाते हैं। किसी मददगार को सूचना नहीं जाती।",
      "मैचिंग और स्वयंसेवक सत्यापन चालू नहीं हैं।",
      "SMS या पुश डिलीवरी नहीं है, इसलिए कोई संदेश छूट भी नहीं सकता।"
    ],
    incidentsTitle: "घटनाओं का इतिहास",
    incidentsEmpty: "निर्देशिका शुरू होने के बाद कोई घटना दर्ज नहीं हुई।",
    legend: "स्थितियाँ: चालू, धीमा, बंद।"
  }
};

const TERMS_PAGE = {
  en: {
    eyebrow: "Legal",
    title: "Terms & Conditions",
    updated: "Last updated 15 November 2026",
    intro: "These terms cover your use of the SarvSeva app and website. By using it you accept them. If you do not accept them, please do not use the service.",
    sections: [
      {
        title: "1. What SarvSeva is",
        paras: [
          "SarvSeva is a free directory of verified helplines and a way to ask for or offer community help. It is run by a small volunteer team in India.",
          "We are not an emergency service, a hospital, a transport provider, a law firm or a government body. We do not dispatch help and we do not employ the helpers listed."
        ]
      },
      {
        title: "2. Emergencies",
        paras: [
          "If someone is in immediate danger, call 112 or the right emergency number yourself. Do not wait for a reply in this app.",
          "Requests written here are stored on your device and are not routed to police, ambulance, fire or any dispatch centre."
        ]
      },
      {
        title: "3. Your responsibilities",
        paras: [
          "Give information that is true to the best of your knowledge, and do not create requests for other people without their consent.",
          "Do not use SarvSeva to harass, threaten, defraud, impersonate anyone, or to ask for money, documents or passwords.",
          "Do not enter unsafe places, transport unknown people, handle weapons or hazardous materials, or share someone else's sensitive information.",
          "You are responsible for your own safety decisions. No request is worth your safety."
        ]
      },
      {
        title: "4. Listings and accuracy",
        paras: [
          "Each listing shows the source we checked, the scope of that check and the date. Numbers and hours can change without notice.",
          "Listings are rechecked every 90 days. Once a recheck date passes, the listing is labelled expired and removed from search until it is revalidated.",
          "You can report a wrong listing from any card. Reports are reviewed within 24 hours in moderation hours."
        ]
      },
      {
        title: "5. Conduct, review and appeals",
        paras: [
          "Reports of abuse, fraud, impersonation, harassment, false reporting or safeguarding concerns are read by a person, and the two sides are heard separately.",
          "Actions range from a written warning to suspension of a listing or account. Every decision is written down with a reason.",
          "You can appeal any decision within 30 days by writing to sarvseva@gmail.com with the reference you were given. Appeals are decided by someone who did not make the first decision."
        ]
      },
      {
        title: "6. Privacy",
        paras: [
          "This build stores what you type in your own browser or phone storage. Nothing is uploaded, because matching is not switched on.",
          "When sharing is enabled, your area and what you wrote are shown to matched helpers. Precise coordinates are never published. You can stop sharing and cancel a request at any time.",
          "Messages about updates will not name what happened; they only say there is an update to read in the app."
        ]
      },
      {
        title: "7. Volunteers and organisations",
        paras: [
          "Identity checks are proportionate to risk and are shown on each listing as what was checked and when.",
          "Volunteers are not employees or agents of SarvSeva. They act in their own capacity and must follow the safety guidance in the app."
        ]
      },
      {
        title: "8. Limits of liability",
        paras: [
          "The service is provided as it is. We do not guarantee that a listing answers, that a helper responds, or that information is free of error.",
          "To the extent the law allows, SarvSeva and its volunteers are not liable for loss arising from help given or not given through the platform."
        ]
      },
      {
        title: "9. Changes and contact",
        paras: [
          "We will date any change to these terms on this page. Continuing to use the app after a change means you accept the new version.",
          "Questions, corrections and appeals: sarvseva@gmail.com."
        ]
      }
    ]
  },
  hi: {
    eyebrow: "कानूनी",
    title: "नियम और शर्तें",
    updated: "आख़िरी अपडेट 15 नवंबर 2026",
    intro: "ये शर्तें सर्वसेवा ऐप और वेबसाइट के आपके इस्तेमाल पर लागू हैं। इस्तेमाल करके आप इन्हें मानते हैं। अगर नहीं मानते, तो कृपया सेवा का इस्तेमाल न करें।",
    sections: [
      {
        title: "1. सर्वसेवा क्या है",
        paras: [
          "सर्वसेवा जाँची हुई हेल्पलाइनों की मुफ़्त निर्देशिका है और सामुदायिक मदद माँगने या देने का ज़रिया है। इसे भारत में एक छोटी स्वयंसेवी टीम चलाती है।",
          "हम आपातकालीन सेवा, अस्पताल, वाहन सेवा, वकील या सरकारी संस्था नहीं हैं। हम मदद नहीं भेजते और सूची में दिए मददगार हमारे कर्मचारी नहीं हैं।"
        ]
      },
      {
        title: "2. आपातकाल",
        paras: [
          "अगर किसी पर तुरंत खतरा है, तो खुद 112 या सही आपातकालीन नंबर पर कॉल करें। इस ऐप में जवाब का इंतज़ार न करें।",
          "यहाँ लिखे अनुरोध आपके फ़ोन में रहते हैं और पुलिस, एम्बुलेंस, फायर या किसी डिस्पैच सेंटर तक नहीं जाते।"
        ]
      },
      {
        title: "3. आपकी ज़िम्मेदारी",
        paras: [
          "जितना जानते हैं उतना सही बताएँ, और दूसरों के लिए उनकी सहमति के बिना अनुरोध न बनाएँ।",
          "सर्वसेवा का इस्तेमाल किसी को परेशान करने, धमकाने, ठगने, किसी और का नाम इस्तेमाल करने, या पैसा-दस्तावेज़-पासवर्ड माँगने के लिए न करें।",
          "असुरक्षित जगह न जाएँ, अनजान लोगों को वाहन से न ले जाएँ, हथियार या खतरनाक चीज़ें न छुएँ, और किसी की निजी जानकारी सहमति के बिना साझा न करें।",
          "अपनी सुरक्षा के फ़ैसले आपके हैं। कोई भी अनुरोध आपकी सुरक्षा से बड़ा नहीं।"
        ]
      },
      {
        title: "4. सूचियाँ और सही जानकारी",
        paras: [
          "हर सूची बताती है कि किस स्रोत से जाँचा, जाँच का दायरा और तारीख। नंबर और समय बिना बताए बदल सकते हैं।",
          "सूचियाँ हर 90 दिन में दोबारा जाँची जाती हैं। तारीख बीतते ही सूची अवधि-बीती कहलाती है और दोबारा जाँच तक खोज से हट जाती है।",
          "किसी भी कार्ड से गलत सूची की शिकायत की जा सकती है। शिकायतें मॉडरेशन समय में 24 घंटे के भीतर देखी जाती हैं।"
        ]
      },
      {
        title: "5. आचरण, समीक्षा और अपील",
        paras: [
          "दुर्व्यवहार, धोखाधड़ी, किसी और का नाम इस्तेमाल, उत्पीड़न, झूठी शिकायत या बाल-सुरक्षा से जुड़ी शिकायतें कोई व्यक्ति पढ़ता है, और दोनों पक्षों से अलग-अलग बात ली जाती है।",
          "कार्रवाई लिखित चेतावनी से लेकर सूची या खाते के निलंबन तक हो सकती है। हर फ़ैसला कारण के साथ लिखा जाता है।",
          "आपको दिए गए संदर्भ के साथ sarvseva@gmail.com पर लिखकर 30 दिन में किसी भी फ़ैसले के खिलाफ़ अपील की जा सकती है। अपील वही नहीं देखता जिसने पहला फ़ैसला किया।"
        ]
      },
      {
        title: "6. निजता",
        paras: [
          "यह बिल्ड आपका लिखा आपके ही ब्राउज़र या फ़ोन में रखता है। कुछ भी अपलोड नहीं होता, क्योंकि मैचिंग चालू नहीं है।",
          "जब साझा करना चालू होगा, आपका इलाका और आपका लिखा मिले हुए मददगारों को दिखेगा। सटीक निर्देशांक कभी सार्वजनिक नहीं होते। आप कभी भी साझा करना बंद और अनुरोध रद्द कर सकते हैं।",
          "अपडेट के संदेश यह नहीं बताएँगे कि क्या हुआ; वे सिर्फ़ कहेंगे कि ऐप में पढ़ने के लिए कुछ नया है।"
        ]
      },
      {
        title: "7. स्वयंसेवक और संस्थाएँ",
        paras: [
          "पहचान की जाँच जोखिम के हिसाब से होती है और हर सूची पर दिखती है कि क्या जाँचा और कब।",
          "स्वयंसेवक सर्वसेवा के कर्मचारी या प्रतिनिधि नहीं हैं। वे अपनी ओर से काम करते हैं और ऐप के सुरक्षा निर्देश मानते हैं।"
        ]
      },
      {
        title: "8. ज़िम्मेदारी की सीमा",
        paras: [
          "सेवा जैसी है वैसी दी जाती है। हम वादा नहीं करते कि कोई नंबर उठेगा, कोई मददगार जवाब देगा, या जानकारी पूरी तरह त्रुटि-रहित है।",
          "कानून जहाँ अनुमति देता है, सर्वसेवा और उसके स्वयंसेवक प्लेटफ़ॉर्म से मिली या न मिली मदद से हुए नुकसान के लिए ज़िम्मेदार नहीं हैं।"
        ]
      },
      {
        title: "9. बदलाव और संपर्क",
        paras: [
          "इन शर्तों में कोई भी बदलाव इस पेज पर तारीख के साथ लिखा जाएगा। बदलाव के बाद ऐप का इस्तेमाल जारी रखने का मतलब है कि आप नया संस्करण मानते हैं।",
          "सवाल, सुधार और अपील: sarvseva@gmail.com।"
        ]
      }
    ]
  }
};

function opsHtml(dict, state) {
  const page = OPS_PAGE[state.locale] || OPS_PAGE.en;
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(page.eyebrow)}</span>
      <h1 class="card-title">${escapeHtml(page.title)}</h1>
      <p class="card-sub">${escapeHtml(page.sub)}</p>
      <div class="notice notice-amber">${escapeHtml(page.banner)}</div>
      ${page.cards.map(card => `
        <section class="ops-card">
          <h2 class="group-title">${escapeHtml(card.title)}</h2>
          ${card.bullets ? `<ul class="legend-list">${card.bullets.map(b => `<li>${escapeHtml(b)}</li>`).join("")}</ul>` : ""}
          ${card.rows ? `<dl class="ops-rows">${card.rows.map(([k, v]) => `<div><dt>${escapeHtml(k)}</dt><dd>${escapeHtml(v)}</dd></div>`).join("")}</dl>` : ""}
        </section>`).join("")}
      <div class="cta-row">
        <a class="btn btn-primary" href="#" data-go="service-status">${escapeHtml(dict.opsStatusLink)}</a>
        <a class="btn btn-ghost" href="#" data-go="terms">${escapeHtml(dict.termsLink)}</a>
      </div>
    </section>
  `;
}

function serviceStatusHtml(dict, state) {
  const page = STATUS_PAGE[state.locale] || STATUS_PAGE.en;
  const lastVerified = DIRECTORY
    .map(item => item.verified)
    .filter(Boolean)
    .sort()
    .pop();
  const today = new Date().toISOString().slice(0, 10);
  const components = [
    { name: dict.statCompDirectory, state: "ok", note: `${DIRECTORY.length} ${dict.dirCountMany} · ${dict.dirCheckLabel} ${formatDate(lastVerified, state.locale)}` },
    { name: dict.statCompIntake, state: "wait", note: dict.statusNotSentWarning },
    { name: dict.statCompMatching, state: "off", note: dict.offerNote },
    { name: dict.statCompModeration, state: "ok", note: dict.statCompModerationNote },
    { name: dict.statCompEmergency, state: "ok", note: dict.statCompEmergencyNote }
  ];
  const stateLabel = { ok: dict.statStateOk, wait: dict.statStateWait, off: dict.statStateOff };
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(page.eyebrow)}</span>
      <h1 class="card-title">${escapeHtml(page.title)}</h1>
      <p class="card-sub">${escapeHtml(page.sub)}</p>
      <dl class="ops-rows">
        <div><dt>${escapeHtml(page.updatedLabel)}</dt><dd>${escapeHtml(formatDate(today, state.locale))}</dd></div>
        <div><dt>${escapeHtml(page.commanderLabel)}</dt><dd>${escapeHtml(page.commanderName)} · ${escapeHtml(page.commanderShift)}</dd></div>
      </dl>
      <h2 class="group-title">${escapeHtml(page.componentsTitle)}</h2>
      <ul class="status-list">
        ${components.map(c => `
          <li class="status-item">
            <span class="status-dot status-${c.state}" aria-hidden="true"></span>
            <span class="status-item-body">
              <span class="status-item-name">${escapeHtml(c.name)}</span>
              <span class="status-item-note">${escapeHtml(c.note)}</span>
            </span>
            <span class="status-item-state status-${c.state}">${escapeHtml(stateLabel[c.state])}</span>
          </li>`).join("")}
      </ul>
      <p class="field-hint">${escapeHtml(page.legend)}</p>
      <h2 class="group-title">${escapeHtml(page.limitsTitle)}</h2>
      <ul class="legend-list">${page.limits.map(l => `<li>${escapeHtml(l)}</li>`).join("")}</ul>
      <h2 class="group-title">${escapeHtml(page.incidentsTitle)}</h2>
      <p class="body-copy">${escapeHtml(page.incidentsEmpty)}</p>
    </section>
  `;
}

function termsHtml(dict, state) {
  const page = TERMS_PAGE[state.locale] || TERMS_PAGE.en;
  return `
    <section class="card flow legal">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(page.eyebrow)}</span>
      <h1 class="card-title">${escapeHtml(page.title)}</h1>
      <p class="field-hint">${escapeHtml(page.updated)}</p>
      <p class="card-sub">${escapeHtml(page.intro)}</p>
      ${page.sections.map(section => `
        <section class="legal-section">
          <h2 class="group-title">${escapeHtml(section.title)}</h2>
          ${section.paras.map(p => `<p class="body-copy">${escapeHtml(p)}</p>`).join("")}
        </section>`).join("")}
      <div class="cta-row">
        <a class="btn btn-ghost" href="#" data-go="operations">${escapeHtml(dict.navOperations)}</a>
        <a class="btn btn-ghost" href="#" data-go="contact">${escapeHtml(dict.navContact)}</a>
      </div>
    </section>
  `;
}

/* ------------------------------------------------------------------
   Nearby search: OpenStreetMap around a point
   (hospitals, medical stores, police stations)
   ------------------------------------------------------------------ */
const NEARBY = {
  photon: "https://photon.komoot.io/api/",
  geocoder: "https://nominatim.openstreetmap.org/search",
  cacheMs: 5 * 60 * 1000,
  kinds: {
    hospital: { tag: "amenity:hospital", queries: ["hospital"], radiusKm: 10, max: 12, eyebrow: "hospEyebrow", title: "hospTitle", sub: "hospSub", placeholder: "hospPlaceholder", count: "hospCount", empty: "hospEmpty", note: "hospNote" },
    pharmacy: { tag: "amenity:pharmacy", queries: ["medical", "pharmacy"], radiusKm: 8, max: 12, eyebrow: "pharmEyebrow", title: "pharmTitle", sub: "pharmSub", placeholder: "pharmPlaceholder", count: "pharmCount", empty: "pharmEmpty", note: "pharmNote" },
    police: { tag: "amenity:police", queries: ["police"], radiusKm: 10, max: 12, eyebrow: "policeEyebrow", title: "policeTitle", sub: "policeSub", placeholder: "policePlaceholder", count: "policeCount", empty: "policeEmpty", note: "policeNote" }
  }
};

const nearbyState = {
  hospital: { statusKey: "", radiusKm: 10, count: 0, label: "", items: [], cache: {} },
  pharmacy: { statusKey: "", radiusKm: 8, count: 0, label: "", items: [], cache: {} },
  police: { statusKey: "", radiusKm: 10, count: 0, label: "", items: [], cache: {} }
};

function distanceKm(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const toRad = value => (value * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}

function nearbyDistanceLabel(km) {
  return km < 1 ? `${Math.round(km * 1000)} m` : `${km.toFixed(1)} km`;
}

function nearbyPlace(props) {
  return [props.street, props.district, props.city, props.state]
    .filter(Boolean)
    .filter((value, index, all) => all.indexOf(value) === index)
    .slice(0, 2)
    .join(", ");
}

function nearbyMessage(dict, kind) {
  const st = nearbyState[kind];
  const cfg = NEARBY.kinds[kind];
  if (!st.statusKey) return "";
  if (st.statusKey === "count") {
    return `${dict[cfg.count].replace("{n}", String(st.count)).replace("{r}", String(st.radiusKm))} · ${st.label}`;
  }
  if (st.statusKey === "empty") return dict[cfg.empty].replace("{r}", String(st.radiusKm));
  if (st.statusKey === "searching") return dict.nearbySearching.replace("{r}", String(cfg.radiusKm));
  return dict[st.statusKey] || "";
}

function nearbyResultsHtml(dict, kind) {
  const st = nearbyState[kind];
  if (!st.items.length) return "";
  return `<ol class="hosp-list">${st.items.map(item => `
    <li class="hosp-item">
      <div class="hosp-main">
        <p class="hosp-name">${escapeHtml(item.name)}</p>
        <p class="hosp-meta">${escapeHtml(dict.nearbyAway.replace("{d}", nearbyDistanceLabel(item.distanceKm)))}${item.place ? " · " + escapeHtml(item.place) : ""}</p>
      </div>
      <a class="hosp-link" href="https://www.google.com/maps/dir/?api=1&amp;destination=${item.lat},${item.lon}" target="_blank" rel="noopener noreferrer">${escapeHtml(dict.nearbyDirections)}</a>
    </li>`).join("")}</ol>`;
}

function nearbyHtml(dict, kind) {
  const cfg = NEARBY.kinds[kind];
  return `
    <span class="eyebrow">${escapeHtml(dict[cfg.eyebrow])}</span>
    <h1 class="card-title">${escapeHtml(dict[cfg.title])}</h1>
    <p class="card-sub">${escapeHtml(dict[cfg.sub])}</p>
    <form class="hospital-form" id="nearby-form" role="search">
      <label class="sr-only" for="nearby-q">${escapeHtml(dict[cfg.placeholder])}</label>
      <input class="input" id="nearby-q" type="search" placeholder="${escapeHtml(dict[cfg.placeholder])}" autocomplete="off">
      <div class="hospital-actions">
        <button type="submit" class="btn btn-primary">${escapeHtml(dict.hospSearch)}</button>
        <button type="button" class="btn btn-ghost" id="nearby-locate">${escapeHtml(dict.hospLocate)}</button>
      </div>
    </form>
    <p class="hospital-status" id="nearby-status" role="status" aria-live="polite">${escapeHtml(nearbyMessage(dict, kind))}</p>
    <div class="hospital-results" id="nearby-results">${nearbyResultsHtml(dict, kind)}</div>
    <p class="field-hint">${escapeHtml(dict.nearbyPrivacy)}</p>
    <p class="field-hint">${escapeHtml(dict[cfg.note])}</p>
  `;
}

function setNearbyStatus(kind, dict, key) {
  nearbyState[kind].statusKey = key;
  const statusEl = document.getElementById("nearby-status");
  if (statusEl) statusEl.textContent = nearbyMessage(dict, kind);
  const resultsEl = document.getElementById("nearby-results");
  if (resultsEl) resultsEl.innerHTML = nearbyResultsHtml(dict, kind);
}

async function fetchNearby(kind, lat, lon) {
  const cfg = NEARBY.kinds[kind];
  const span = 0.3;
  const bbox = [lon - span, lat - span, lon + span, lat + span].map(v => v.toFixed(4)).join(",");
  const results = new Map();

  for (const term of cfg.queries) {
    const params = new URLSearchParams({
      q: term,
      lat: lat.toFixed(3),
      lon: lon.toFixed(3),
      limit: "40",
      osm_tag: cfg.tag,
      location_bias_scale: "0.1",
      bbox
    });
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timer = window.setTimeout(() => { if (controller) controller.abort(); }, 15000);
    try {
      const response = await fetch(`${NEARBY.photon}?${params.toString()}`, {
        headers: { Accept: "application/json" },
        signal: controller ? controller.signal : undefined
      });
      if (!response.ok) throw new Error("photon-" + response.status);
      const data = await response.json();
      (data.features || []).forEach(feature => {
        const [lon2, lat2] = feature.geometry.coordinates;
        const props = feature.properties || {};
        const distance = distanceKm(lat, lon, lat2, lon2);
        if (distance > cfg.radiusKm) return;
        const key = `${lat2.toFixed(5)},${lon2.toFixed(5)}`;
        if (results.has(key)) return;
        results.set(key, {
          name: props.name || (kind === "police" ? "Police station" : kind === "pharmacy" ? "Medical store" : "Unnamed place"),
          place: nearbyPlace(props),
          lat: lat2,
          lon: lon2,
          distanceKm: distance
        });
      });
    } finally {
      window.clearTimeout(timer);
    }
  }

  return [...results.values()]
    .sort((a, b) => a.distanceKm - b.distanceKm)
    .slice(0, cfg.max);
}

async function geocodeArea(text) {
  const params = new URLSearchParams({ q: text, format: "jsonv2", limit: "1", addressdetails: "0" });
  const controller = typeof AbortController === "function" ? new AbortController() : null;
  const timer = window.setTimeout(() => { if (controller) controller.abort(); }, 12000);
  try {
    const response = await fetch(`${NEARBY.geocoder}?${params.toString()}`, {
      headers: { Accept: "application/json" },
      signal: controller ? controller.signal : undefined
    });
    if (!response.ok) throw new Error("nominatim-" + response.status);
    const data = await response.json();
    if (!Array.isArray(data) || !data.length) return null;
    return { lat: Number(data[0].lat), lon: Number(data[0].lon), label: data[0].display_name };
  } finally {
    window.clearTimeout(timer);
  }
}

async function searchNearbyAt(kind, dict, lat, lon, label) {
  const st = nearbyState[kind];
  const key = `${lat.toFixed(2)},${lon.toFixed(2)}`;
  const cached = st.cache[key];
  if (cached && Date.now() - cached.at < NEARBY.cacheMs) {
    st.items = cached.items;
    st.label = label;
    st.count = cached.items.length;
    st.radiusKm = NEARBY.kinds[kind].radiusKm;
    setNearbyStatus(kind, dict, cached.items.length ? "count" : "empty");
    return;
  }

  st.items = [];
  setNearbyStatus(kind, dict, "searching");
  try {
    const items = await fetchNearby(kind, lat, lon);
    st.cache[key] = { at: Date.now(), items };
    st.items = items;
    st.label = label;
    st.count = items.length;
    st.radiusKm = NEARBY.kinds[kind].radiusKm;
    setNearbyStatus(kind, dict, items.length ? "count" : "empty");
  } catch (err) {
    st.items = [];
    setNearbyStatus(kind, dict, "nearbyError");
  }
}

async function searchNearbyByArea(kind, dict, text) {
  const query = text.trim();
  if (!query) return;
  const st = nearbyState[kind];
  if (!(await checkOnline())) {
    st.items = [];
    setNearbyStatus(kind, dict, "nearbyOffline");
    return;
  }
  setNearbyStatus(kind, dict, "searching");
  let place = null;
  try {
    place = await geocodeArea(query);
  } catch (err) {
    st.items = [];
    setNearbyStatus(kind, dict, "nearbyError");
    return;
  }
  if (!place) {
    st.items = [];
    setNearbyStatus(kind, dict, "nearbyBadArea");
    return;
  }
  await searchNearbyAt(kind, dict, place.lat, place.lon, query);
}

function searchNearbyByLocation(kind, dict) {
  const st = nearbyState[kind];
  if (!navigator.geolocation) {
    st.items = [];
    setNearbyStatus(kind, dict, "nearbyLocError");
    return;
  }
  setNearbyStatus(kind, dict, "nearbyLocating");
  navigator.geolocation.getCurrentPosition(
    position => {
      searchNearbyAt(kind, dict, position.coords.latitude, position.coords.longitude, dict.nearbyNearYou);
    },
    error => {
      st.items = [];
      setNearbyStatus(kind, dict, error && error.code === 1 ? "nearbyDenied" : "nearbyLocError");
    },
    { enableHighAccuracy: false, timeout: 20000, maximumAge: 120000 }
  );
}

function wireNearby(kind, dict) {
  const form = document.getElementById("nearby-form");
  if (!form) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const input = document.getElementById("nearby-q");
    searchNearbyByArea(kind, dict, input ? input.value : "");
  });
  document.getElementById("nearby-locate")?.addEventListener("click", () => searchNearbyByLocation(kind, dict));
}

/* ------------------------------------------------------------------
   Tab pages: SOS, services, ambulance, air ambulance, pharmacies,
   police, medical advice, medicines, insurance
   ------------------------------------------------------------------ */

const SERVICES = [
  { href: "#/ambulance", title: "svcAmb", blurb: "svcAmbBlurb", icon: "ambulance" },
  { href: "#/air-ambulance", title: "svcAir", blurb: "svcAirBlurb", icon: "plane" },
  { href: "#/pharmacy", title: "svcPharm", blurb: "svcPharmBlurb", icon: "pill" },
  { href: "#/police", title: "svcPolice", blurb: "svcPoliceBlurb", icon: "shield" },
  { href: "#/advice", title: "svcAdvice", blurb: "svcAdviceBlurb", icon: "chat" },
  { href: "#/medicines", title: "svcMeds", blurb: "svcMedsBlurb", icon: "meds" },
  { href: "#/insurance", title: "svcInsurance", blurb: "svcInsuranceBlurb", icon: "umbrella" }
];

const SERVICE_ICONS = {
  ambulance: '<path d="M3 16.5V7.6c0-.6.5-1.1 1.1-1.1h8.3c.6 0 1.1.5 1.1 1.1v8.9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M13.5 10h3.2l3.3 3.4v3.1" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="7" cy="17.6" r="1.9" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="17.6" r="1.9" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M8.2 9v4M6.2 11h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  plane: '<path d="M3 13.5l17-7.5c.6-.3 1.2.4.8 1l-3.6 6.2-1.4 5.4c-.2.7-1.1.7-1.3 0l-1.2-4.2-4.3-1.9" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
  pill: '<rect x="3.2" y="9.4" width="17.6" height="7.2" rx="3.6" transform="rotate(-35 12 13)" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M9.4 7.6l5 5.8" stroke="currentColor" stroke-width="1.5"/>',
  shield: '<path d="M12 3.6l7 2.6v5.2c0 4-3 7.1-7 8.9-4-1.8-7-4.9-7-8.9V6.2Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M9.2 12l2 2 3.6-3.8" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  chat: '<path d="M4 6.5h16v9.6H12l-4.4 3.2v-3.2H4Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M8 10.4h8M8 13h5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  meds: '<rect x="4.6" y="4" width="14.8" height="16" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M12 8v7M8.6 11.4h6.8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
  umbrella: '<path d="M3.4 12a8.6 8.6 0 0 1 17.2 0Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M12 12v6.2a2 2 0 0 0 4 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>'
};

const AIR_PROVIDERS = [
  { name: "ICATT Air Ambulance", site: "https://icatt.in/", tel: "+919701111156", display: "+91 97011 11156" },
  { name: "Bluedot Air Ambulance", site: "https://www.bluedotairambulance.in/", tel: "+919745410000", display: "+91 97454 10000" },
  { name: "India Air Ambulance", site: "https://www.indiaairambulance.com/", tel: "+919999379008", display: "+91 99993 79008" },
  { name: "Medulance", site: "https://medulance.com/", tel: "+918882978888", display: "+91 88829 78888" }
];

const MEDICINES = [
  {
    en: { name: "Paracetamol 500 mg", use: "Fever and mild to moderate pain.", caution: "Stay within the dose printed on the pack, and avoid it if you have liver disease or drink heavily.", rx: false },
    hi: { name: "पैरासिटामोल 500 मि.ग्रा.", use: "बुखार और हल्का से मध्यम दर्द।", caution: "पैक पर लिखी मात्रा से ज़्यादा न लें; लिवर की बीमारी या ज़्यादा शराब से परहेज़ करें।", rx: false }
  },
  {
    en: { name: "ORS (oral rehydration salts)", use: "Loose motions and dehydration.", caution: "Mix one sachet in the stated amount of clean water. Use within a day of mixing.", rx: false },
    hi: { name: "ओ.आर.एस. (मुँह से लिया जाने वाला नमक-घोल)", use: "दस्त और शरीर में पानी की कमी।", caution: "एक पैकेट तय मात्रा में साफ़ पानी में घोलें। घोल को एक दिन में ही इस्तेमाल करें।", rx: false }
  },
  {
    en: { name: "Cetirizine 10 mg", use: "Sneezing, itching and allergy symptoms.", caution: "Can make you sleepy; do not drive after taking it.", rx: false },
    hi: { name: "सिटिरिज़ीन 10 मि.ग्रा.", use: "छींक, खुजली और एलर्जी के लक्षण।", caution: "इससे नींद आ सकती है; लेने के बाद वाहन न चलाएँ।", rx: false }
  },
  {
    en: { name: "Antacid (aluminium and magnesium hydroxide)", use: "Heartburn and acid indigestion.", caution: "Not for long-term use without advice. Tell a doctor if pain is severe or comes with vomiting.", rx: false },
    hi: { name: "एंटासिड (एल्युमिनियम और मैग्नीशियम हाइड्रॉक्साइड)", use: "सीने की जलन और एसिडिटी।", caution: "सलाह के बिना लंबे समय तक न लें। तेज़ दर्द या उल्टी हो तो डॉक्टर को दिखाएँ।", rx: false }
  },
  {
    en: { name: "Povidone-iodine solution", use: "Cleaning a small cut or graze.", caution: "For external use only. Not for deep wounds, burns or the eyes - go to a hospital.", rx: false },
    hi: { name: "पोविडोन-आयोडीन घोल", use: "छोटी कट या खरोंच साफ़ करने के लिए।", caution: "सिर्फ़ बाहर लगाने के लिए। गहरे घाव, जले हुए हिस्से या आँखों पर नहीं - अस्पताल जाएँ।", rx: false }
  },
  {
    en: { name: "Saline nasal spray", use: "Blocked or dry nose.", caution: "Use clean water or a sterile spray only.", rx: false },
    hi: { name: "सलाइन नाक स्प्रे", use: "बंद या सूखी नाक।", caution: "सिर्फ़ साफ़ पानी या स्टरलाइज़्ड स्प्रे ही इस्तेमाल करें।", rx: false }
  },
  {
    en: { name: "Diclofenac gel (topical)", use: "Muscle and joint pain in a small area.", caution: "Rub it on the skin only. Do not use on broken skin, and ask a doctor if you have kidney or heart disease.", rx: false },
    hi: { name: "डिक्लोफेनैक जेल (बाहर लगाने के लिए)", use: "छोटे हिस्से में मांसपेशी या जोड़ का दर्द।", caution: "सिर्फ़ त्वचा पर लगाएँ। कटी त्वचा पर नहीं, और गुर्दे या हृदय की बीमारी हो तो डॉक्टर से पूछें।", rx: false }
  },
  {
    en: { name: "Antibiotics (azithromycin, amoxicillin)", use: "Bacterial infections, only when a doctor says which one.", caution: "Never buy or start these on your own. The wrong antibiotic makes resistance worse.", rx: true },
    hi: { name: "एंटीबायोटिक (एज़िथ्रोमाइसिन, अमोक्सिसिलिन)", use: "बैक्टीरिया के संक्रमण में, सिर्फ़ डॉक्टर बताएँ तब।", caution: "खुद से कभी न खरीदें या शुरू न करें। गलत एंटीबायोटिक दवा बेअसर होने की समस्या बढ़ाती है।", rx: true }
  },
  {
    en: { name: "Strong painkillers (tramadol, codeine)", use: "Severe pain, prescribed after an examination.", caution: "Can slow breathing and cause dependence. Never share or reuse an old strip.", rx: true },
    hi: { name: "तेज़ दर्द की दवा (ट्रामाडोल, कोडीन)", use: "तेज़ दर्द, जाँच के बाद डॉक्टर लिखते हैं।", caution: "साँस धीमी कर सकती है और इसकी लत लग सकती है। पुरानी पत्ती कभी किसी और को न दें।", rx: true }
  },
  {
    en: { name: "Inhalers (salbutamol, budesonide)", use: "Asthma and wheezing.", caution: "The dose and the technique matter. Ask a doctor or nurse to show you before the first use.", rx: true },
    hi: { name: "इनहेलर (सैल्ब्युटामोल, बुडेसोनाइड)", use: "दमा और साँस की सीटी।", caution: "मात्रा और इस्तेमाल का तरीका अहम है। पहली बार डॉक्टर या नर्स से दिखवाएँ।", rx: true }
  },
  {
    en: { name: "Diabetes medicines (metformin, insulin)", use: "Keeping blood sugar in range.", caution: "Never change or stop a dose on your own. Carry a sugar source in case of a low.", rx: true },
    hi: { name: "मधुमेह की दवा (मेटफॉर्मिन, इंसुलिन)", use: "शुगर को नियंत्रण में रखने के लिए।", caution: "अपनी मर्ज़ी से मात्रा न बदलें, न बंद करें। शुगर गिरने के लिए मिठाई साथ रखें।", rx: true }
  },
  {
    en: { name: "Blood pressure medicines", use: "Keeping blood pressure controlled.", caution: "Stopping suddenly can be dangerous. Refill before the strip runs out.", rx: true },
    hi: { name: "ब्लड प्रेशर की दवाइयाँ", use: "ब्लड प्रेशर नियंत्रित रखने के लिए।", caution: "अचानक बंद करना खतरनाक हो सकता है। पत्ती खत्म होने से पहले दोबारा लें।", rx: true }
  }
];

const INSURANCE_PRODUCTS = [
  { en: ["Health insurance", "Pays hospital bills - room, surgery, medicines - up to the sum insured. The core cover for a family."], hi: ["स्वास्थ्य बीमा", "अस्पताल का खर्च - कमरा, ऑपरेशन, दवाइयाँ - बीमा राशि तक देता है। परिवार के लिए सबसे ज़रूरी कवर।"] },
  { en: ["Personal accident", "Pays a lump sum for accidental death or disability, and often a weekly amount while you recover."], hi: ["व्यक्तिगत दुर्घटना बीमा", "दुर्घटना में मृत्यु या विकलांगता पर एकमुश्त राशि, और अक्सर ठीक होने के दिनों का साप्ताहिक भुगतान।"] },
  { en: ["Critical illness", "A lump sum on diagnosis of listed illnesses such as cancer or a heart attack, to replace lost income."], hi: ["गंभीर बीमारी बीमा", "कैंसर या दिल के दौरे जैसी सूचीबद्ध बीमारी पकड़ में आने पर एकमुश्त राशि, ताकि कमाई का नुकसान भरा जाए।"] },
  { en: ["Term life", "Pays your family if you die during the policy term. The cheapest way to protect people who depend on your income."], hi: ["टर्म जीवन बीमा", "अवधि के दौरान आपकी मृत्यु पर परिवार को राशि। आपकी कमाई पर निर्भर लोगों की सबसे सस्ती सुरक्षा।"] },
  { en: ["Travel insurance", "Covers medical treatment, lost baggage and cancellation during a trip, including abroad."], hi: ["यात्रा बीमा", "यात्रा के दौरान इलाज, सामान खोने और यात्रा रद्द होने का कवर, विदेश में भी।"] },
  { en: ["Home and contents", "Fire, flood, theft and damage to the building and everything inside it."], hi: ["घर और सामान बीमा", "आग, बाढ़, चोरी और मकान तथा अंदर के सामान को नुकसान का कवर।"] },
  { en: ["Motor third party", "Legally required for every vehicle. Pays others you injure or damage, not your own vehicle."], hi: ["मोटर थर्ड पार्टी", "हर वाहन के लिए कानूनी रूप से ज़रूरी। दूसरों को हुए नुकसान का भुगतान, अपने वाहन का नहीं।"] },
  { en: ["Government schemes", "PM-JAY gives free hospital care to eligible families; PMJJBY and PMSBY cost a few hundred rupees a year."], hi: ["सरकारी योजनाएँ", "पीएम-जय पात्र परिवारों को मुफ़्त अस्पताल इलाज देती है; पीएमजेजेबीवाई और पीएमएसबीवाई साल में कुछ सौ रुपये में।"] }
];

const INSURERS = [
  { name: "New India Assurance", url: "https://www.newindia.co.in/" },
  { name: "LIC of India", url: "https://licindia.in/" },
  { name: "Star Health", url: "https://www.starhealth.in/" },
  { name: "HDFC ERGO", url: "https://www.hdfcergo.com/" },
  { name: "ICICI Lombard", url: "https://www.icicilombard.com/" },
  { name: "Bajaj Allianz", url: "https://www.bajajallianz.com/" },
  { name: "PolicyBazaar (comparison site)", url: "https://www.policybazaar.com/" }
];

const GOVERNMENT_SCHEMES = [
  { name: "AB PM-JAY", note: "pmjay.gov.in", url: "https://www.pmjay.gov.in/" },
  { name: "PMJJBY / PMSBY", note: "jansuraksha.in", url: "https://www.jansuraksha.in/" },
  { name: "IRDAI policyholder info", note: "policyholder.gov.in", url: "https://policyholder.gov.in/" }
];

function servicesHtml(dict, state) {
  return `
    <section class="card flow">
      <span class="eyebrow">${escapeHtml(dict.svcEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.svcTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.svcSub)}</p>
      <div class="svc-grid">
        ${SERVICES.map(item => `
          <a class="svc-card" href="${item.href}">
            <span class="svc-icon" aria-hidden="true"><svg viewBox="0 0 24 24" width="22" height="22">${SERVICE_ICONS[item.icon]}</svg></span>
            <span class="svc-name">${escapeHtml(dict[item.title])}</span>
            <span class="svc-blurb">${escapeHtml(dict[item.blurb])}</span>
          </a>`).join("")}
      </div>
      <p class="hint-line">${escapeHtml(dict.svcNote)}</p>
    </section>
  `;
}

function findHtml(dict, state) {
  return `
    <section class="card flow">
      ${nearbyHtml(dict, "hospital")}
      <div class="cta-row">
        <a class="btn btn-ghost" href="#/pharmacy">${escapeHtml(dict.svcPharm)}</a>
        <a class="btn btn-ghost" href="#/police">${escapeHtml(dict.svcPolice)}</a>
      </div>
    </section>
  `;
}

function pharmacyHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      ${nearbyHtml(dict, "pharmacy")}
      <p class="hint-line">${escapeHtml(dict.pharmCallNote)}</p>
      <a class="text-link" href="#/medicines">${escapeHtml(dict.svcMeds)}</a>
    </section>
  `;
}

function policeHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(dict.policeEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.policeTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.policeSub)}</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="tel:112">${escapeHtml(dict.policeCall112)}</a>
        <a class="btn btn-ghost" href="tel:100">${escapeHtml(dict.policeCall100)}</a>
      </div>
      <form class="hospital-form" id="nearby-form" role="search">
        <label class="sr-only" for="nearby-q">${escapeHtml(dict.policePlaceholder)}</label>
        <input class="input" id="nearby-q" type="search" placeholder="${escapeHtml(dict.policePlaceholder)}" autocomplete="off">
        <div class="hospital-actions">
          <button type="submit" class="btn btn-primary">${escapeHtml(dict.hospSearch)}</button>
          <button type="button" class="btn btn-ghost" id="nearby-locate">${escapeHtml(dict.hospLocate)}</button>
        </div>
      </form>
      <p class="hospital-status" id="nearby-status" role="status" aria-live="polite">${escapeHtml(nearbyMessage(dict, "police"))}</p>
      <div class="hospital-results" id="nearby-results">${nearbyResultsHtml(dict, "police")}</div>
      <p class="field-hint">${escapeHtml(dict.nearbyPrivacy)}</p>
      <p class="field-hint">${escapeHtml(dict.policeNote)}</p>
    </section>
  `;
}

const SOS_CONTACT_KEY = "sarvseva-emergency-contact";

function readSosContact() {
  try {
    const raw = localStorage.getItem(SOS_CONTACT_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return parsed && typeof parsed === "object" ? parsed : null;
  } catch (err) {
    return null;
  }
}

function telHref(phone) {
  return "tel:" + String(phone || "").replace(/[^\d+]/g, "");
}

function sosHtml(dict, state) {
  const contact = readSosContact();
  return `
    <section class="card flow">
      <span class="eyebrow">${escapeHtml(dict.sosEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.sosTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.sosLead)}</p>

      <a class="sos-call" href="tel:112">
        <span class="sos-num">112</span>
        <span class="sos-label">${escapeHtml(dict.sosCall)}</span>
      </a>

      <div class="cta-row">
        <a class="btn btn-ghost" id="sos-sms" href="sms:">${escapeHtml(dict.sosSms)}</a>
        <a class="btn btn-ghost" id="sos-wa" href="https://wa.me/" target="_blank" rel="noopener noreferrer">${escapeHtml(dict.sosWhatsapp)}</a>
      </div>
      <p class="field-hint" id="sos-loc-note">${escapeHtml(dict.sosLocHint)}</p>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.sosContactTitle)}</h2>
        <p class="card-sub">${escapeHtml(dict.sosContactSub)}</p>
        ${contact && contact.phone ? `
          <div class="sos-contact">
            <div>
              <p class="sos-contact-name">${escapeHtml(contact.name || dict.sosContactPhone)}</p>
              <p class="field-hint">${escapeHtml(contact.phone)}</p>
            </div>
            <a class="btn btn-ghost" href="${telHref(contact.phone)}">${escapeHtml(dict.sosCallContact)}</a>
          </div>` : ""}
        <form class="hospital-form" id="sos-contact-form">
          <label class="sr-only" for="sos-name">${escapeHtml(dict.sosContactName)}</label>
          <input class="input" id="sos-name" placeholder="${escapeHtml(dict.sosContactName)}" value="${escapeHtml(contact && contact.name ? contact.name : "")}" autocomplete="name">
          <label class="sr-only" for="sos-phone">${escapeHtml(dict.sosContactPhone)}</label>
          <input class="input" id="sos-phone" type="tel" inputmode="tel" placeholder="${escapeHtml(dict.sosContactPhone)}" value="${escapeHtml(contact && contact.phone ? contact.phone : "")}" autocomplete="tel">
          <button class="btn btn-primary" type="submit">${escapeHtml(dict.sosContactSave)}</button>
        </form>
        <p class="field-hint">${escapeHtml(dict.sosContactNote)}</p>
      </section>

      <p class="hint-line">${escapeHtml(dict.sosHonest)}</p>
    </section>
  `;
}

function wireSos(dict) {
  const sms = document.getElementById("sos-sms");
  const wa = document.getElementById("sos-wa");
  const note = document.getElementById("sos-loc-note");
  const contact = readSosContact();
  const baseText = dict.sosMessage;

  const build = (suffix) => {
    const text = suffix ? `${baseText} ${suffix}` : baseText;
    const encoded = encodeURIComponent(text);
    const target = contact && contact.phone ? String(contact.phone).replace(/[^\d+]/g, "") : "";
    if (sms) sms.setAttribute("href", target ? `sms:${target}?body=${encoded}` : `sms:?body=${encoded}`);
    if (wa) wa.setAttribute("href", `https://wa.me/?text=${encoded}`);
  };

  build("");
  if (note) note.textContent = dict.sosLocHint;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const lat = position.coords.latitude.toFixed(5);
        const lon = position.coords.longitude.toFixed(5);
        build(`https://www.google.com/maps/search/?api=1&query=${lat},${lon}`);
        if (note) note.textContent = dict.sosLocReady;
      },
      () => {
        build("");
        if (note) note.textContent = dict.sosLocFail;
      },
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 120000 }
    );
  }

  document.getElementById("sos-contact-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("sos-name");
    const phone = document.getElementById("sos-phone");
    try {
      localStorage.setItem(SOS_CONTACT_KEY, JSON.stringify({
        name: name ? name.value.trim() : "",
        phone: phone ? phone.value.trim() : ""
      }));
    } catch (err) {
      /* storage unavailable */
    }
    render();
  });
}

function ambulanceHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(dict.ambEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.ambTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.ambLead)}</p>

      <div class="call-grid">
        <a class="call-card" href="tel:108">
          <span class="call-num">108</span>
          <span class="call-title">${escapeHtml(dict.amb108Title)}</span>
          <span class="call-note">${escapeHtml(dict.amb108Body)}</span>
        </a>
        <a class="call-card" href="tel:102">
          <span class="call-num">102</span>
          <span class="call-title">${escapeHtml(dict.amb102Title)}</span>
          <span class="call-note">${escapeHtml(dict.amb102Body)}</span>
        </a>
        <a class="call-card" href="tel:112">
          <span class="call-num">112</span>
          <span class="call-title">${escapeHtml(dict.amb112Title)}</span>
          <span class="call-note">${escapeHtml(dict.amb112Body)}</span>
        </a>
      </div>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.ambPrivateTitle)}</h2>
        <p class="body-copy">${escapeHtml(dict.ambPrivateBody)}</p>
        <div class="cta-row">
          <a class="btn btn-ghost" href="tel:+918882978888">Medulance · +91 88829 78888</a>
        </div>
      </section>

      <p class="hint-line">${escapeHtml(dict.ambHonest)}</p>
    </section>
  `;
}

function airAmbulanceHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(dict.airEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.airTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.airLead)}</p>

      <div class="notice notice-amber">${escapeHtml(dict.airWarn)}</div>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.airWhenTitle)}</h2>
        <ul class="legend-list">
          ${dict.airWhen.map(line => `<li>${escapeHtml(line)}</li>`).join("")}
        </ul>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.airHowTitle)}</h2>
        <ul class="legend-list">
          ${dict.airHow.map(line => `<li>${escapeHtml(line)}</li>`).join("")}
        </ul>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.airProvidersTitle)}</h2>
        <ul class="provider-list">
          ${AIR_PROVIDERS.map(p => `
            <li class="provider">
              <div>
                <p class="provider-name">${escapeHtml(p.name)}</p>
                <a class="provider-site" href="${p.site}" target="_blank" rel="noopener noreferrer">${escapeHtml(p.site.replace("https://", "").replace(/\/$/, ""))}</a>
              </div>
              <a class="btn btn-ghost" href="${telHref(p.tel)}">${escapeHtml(p.display)}</a>
            </li>`).join("")}
        </ul>
        <p class="field-hint">${escapeHtml(dict.airProviderNote)}</p>
      </section>

      <p class="hint-line">${escapeHtml(dict.airHonest)}</p>
    </section>
  `;
}

function adviceHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(dict.advEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.advTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.advLead)}</p>

      <div class="notice notice-amber">${escapeHtml(dict.advNoDiagnosis)}</div>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.advEmergencyTitle)}</h2>
        <ul class="legend-list">
          ${dict.advEmergency.map(line => `<li>${escapeHtml(line)}</li>`).join("")}
        </ul>
        <div class="cta-row">
          <a class="btn btn-primary" href="tel:108">${escapeHtml(dict.advCall108)}</a>
          <a class="btn btn-ghost" href="tel:112">${escapeHtml(dict.advCall112)}</a>
        </div>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.advHelplinesTitle)}</h2>
        <ul class="provider-list">
          <li class="provider">
            <div>
              <p class="provider-name">${escapeHtml(dict.adv104Name)}</p>
              <p class="field-hint">${escapeHtml(dict.adv104Body)}</p>
            </div>
            <a class="btn btn-ghost" href="tel:104">104</a>
          </li>
          <li class="provider">
            <div>
              <p class="provider-name">${escapeHtml(dict.advTeleManasName)}</p>
              <p class="field-hint">${escapeHtml(dict.advTeleManasBody)}</p>
            </div>
            <a class="btn btn-ghost" href="tel:14416">14416</a>
          </li>
        </ul>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.advWhenTitle)}</h2>
        <ul class="legend-list">
          ${dict.advWhen.map(line => `<li>${escapeHtml(line)}</li>`).join("")}
        </ul>
      </section>

      <div class="cta-row">
        <a class="btn btn-ghost" href="#/aid">${escapeHtml(dict.advFirstAid)}</a>
        <a class="btn btn-ghost" href="#/medicines">${escapeHtml(dict.svcMeds)}</a>
      </div>

      <p class="hint-line">${escapeHtml(dict.advNote)}</p>
    </section>
  `;
}

function medicinesHtml(dict, state) {
  const items = MEDICINES.map(m => m[state.locale] || m.en);
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(dict.medEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.medTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.medLead)}</p>

      <div class="notice notice-amber">${escapeHtml(dict.medDisclaimer)}</div>

      <ul class="med-list">
        ${items.map(item => `
          <li class="med">
            <div class="med-head">
              <p class="med-name">${escapeHtml(item.name)}</p>
              <span class="med-tag ${item.rx ? "med-tag-rx" : "med-tag-otc"}">${escapeHtml(item.rx ? dict.medRx : dict.medOtc)}</span>
            </div>
            <p class="med-use">${escapeHtml(item.use)}</p>
            <p class="med-caution">${escapeHtml(dict.medCaution)}: ${escapeHtml(item.caution)}</p>
          </li>`).join("")}
      </ul>

      <p class="hint-line">${escapeHtml(dict.medAsk)}</p>
    </section>
  `;
}

function insuranceHtml(dict, state) {
  const products = INSURANCE_PRODUCTS.map(p => p[state.locale] || p.en);
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${escapeHtml(dict.insEyebrow)}</span>
      <h1 class="card-title">${escapeHtml(dict.insTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.insLead)}</p>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.insProductsTitle)}</h2>
        <ul class="ins-list">
          ${products.map(([name, body]) => `
            <li class="ins-item">
              <p class="ins-name">${escapeHtml(name)}</p>
              <p class="ins-body">${escapeHtml(body)}</p>
            </li>`).join("")}
        </ul>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.insBeforeTitle)}</h2>
        <ul class="legend-list">
          ${dict.insBefore.map(line => `<li>${escapeHtml(line)}</li>`).join("")}
        </ul>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.insGovTitle)}</h2>
        <ul class="provider-list">
          ${GOVERNMENT_SCHEMES.map(s => `
            <li class="provider">
              <div>
                <p class="provider-name">${escapeHtml(s.name)}</p>
                <p class="field-hint">${escapeHtml(s.note)}</p>
              </div>
              <a class="btn btn-ghost" href="${s.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(dict.insVisit)}</a>
            </li>`).join("")}
        </ul>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.insProvidersTitle)}</h2>
        <ul class="provider-list">
          ${INSURERS.map(i => `
            <li class="provider">
              <div>
                <p class="provider-name">${escapeHtml(i.name)}</p>
                <p class="field-hint">${escapeHtml(i.url.replace("https://", "").replace(/\/$/, ""))}</p>
              </div>
              <a class="btn btn-ghost" href="${i.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(dict.insVisit)}</a>
            </li>`).join("")}
        </ul>
        <p class="field-hint">${escapeHtml(dict.insProviderNote)}</p>
      </section>

      <section class="ops-card">
        <h2 class="group-title">${escapeHtml(dict.insGrievanceTitle)}</h2>
        <p class="body-copy">${escapeHtml(dict.insGrievance)}</p>
        <div class="cta-row">
          <a class="btn btn-ghost" href="tel:155255">155255</a>
          <a class="btn btn-ghost" href="https://igms.irda.gov.in/" target="_blank" rel="noopener noreferrer">IGMS</a>
        </div>
      </section>

      <p class="hint-line">${escapeHtml(dict.insHonest)}</p>
    </section>
  `;
}

function aboutHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${dict.aboutEyebrow}</span>
      <h1 class="card-title">${dict.aboutPageTitle}</h1>
      <p class="card-sub">${dict.aboutPageSub}</p>
      ${dict.aboutPageParas.map(p => `<p class="body-copy">${escapeHtml(p)}</p>`).join("")}
      <div class="founder-card">
        <div class="founder-avatar" aria-hidden="true">AG</div>
        <div class="founder-meta">
          <p class="founder-name">Ayush Gupta</p>
          <p class="founder-role">${dict.founderRole}</p>
        </div>
      </div>
      <p class="body-copy">${dict.founderNote}</p>
      <section class="ops-card">
        <h2 class="group-title">${dict.aboutOpsTitle}</h2>
        <p class="body-copy">${dict.aboutOpsBody}</p>
        <div class="cta-row">
          <a class="btn btn-primary" href="#" data-go="operations">${dict.aboutOpsCta}</a>
          <a class="btn btn-ghost" href="#" data-go="service-status">${dict.opsStatusLink}</a>
        </div>
      </section>
    </section>
  `;
}

function sdgHtml(dict, state) {
  const statusLabels = {
    ontrack: dict.sdgStatusOntrack,
    moderate: dict.sdgStatusModerate,
    slow: dict.sdgStatusSlow,
    regress: dict.sdgStatusRegress
  };
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${dict.sdgEyebrow}</span>
      <h1 class="card-title">${dict.sdgTitle}</h1>
      <p class="card-sub">${dict.sdgSub}</p>
      <div class="sdg-summary">
        <p class="sdg-summary-title">${dict.sdgGlobalTitle}</p>
        <div class="stack-bar" role="img" aria-label="35% on track or moderate, 47% marginal or stagnating, 18% regressed">
          <span class="s-ok" style="width:35%"></span>
          <span class="s-slow" style="width:47%"></span>
          <span class="s-bad" style="width:18%"></span>
        </div>
        <ul class="stack-legend">
          <li><i class="s-ok"></i>${dict.sdgGlobalOk}</li>
          <li><i class="s-slow"></i>${dict.sdgGlobalSlow}</li>
          <li><i class="s-bad"></i>${dict.sdgGlobalBad}</li>
        </ul>
        <p class="sdg-source">${dict.sdgSourcePrefix} <a href="https://unstats.un.org/sdgs/report/2025/" target="_blank" rel="noopener noreferrer">${dict.sdgSourceLink}</a></p>
      </div>
      ${SDG_GOALS.map(g => `
        <article class="sdg-card">
          <div class="sdg-head">
            <span class="sdg-num">${g.n}</span>
            <div>
              <h2 class="sdg-name">${escapeHtml(state.locale === "hi" ? g.nameHi : g.nameEn)}</h2>
              <span class="status-chip ${g.status}">${statusLabels[g.status]}</span>
            </div>
          </div>
          <p class="sdg-stat"><span class="sdg-stat-label">${dict.sdgStatLabel}</span>${escapeHtml(state.locale === "hi" ? g.statHi : g.statEn)}</p>
          <p class="sdg-target"><strong>${dict.sdgTarget}:</strong> ${escapeHtml(state.locale === "hi" ? g.targetHi : g.targetEn)}</p>
          <p class="sdg-ours"><strong>${dict.sdgOurs}:</strong> ${escapeHtml(state.locale === "hi" ? g.oursHi : g.oursEn)}</p>
        </article>
      `).join("")}
    </section>
  `;
}

function initiativesHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <span class="eyebrow">${dict.initEyebrow}</span>
      <h1 class="card-title">${dict.initTitle}</h1>
      <p class="card-sub">${dict.initSub}</p>
      ${INITIATIVES.map(init => {
        const name = state.locale === "hi" ? init.nameHi : init.nameEn;
        const benefit = state.locale === "hi" ? init.benefitHi : init.benefitEn;
        const how = state.locale === "hi" ? init.howHi : init.howEn;
        return `
          <article class="init-card">
            <h2 class="init-name">${escapeHtml(name)}</h2>
            <p class="init-label">${dict.initBenefit}</p>
            <p class="init-benefit">${escapeHtml(benefit)}</p>
            <p class="init-label">${dict.initHow}</p>
            <p class="init-how">${escapeHtml(how)}</p>
            <a class="init-link" href="${init.url}" target="_blank" rel="noopener noreferrer">${dict.initOpen} <span aria-hidden="true">↗</span></a>
          </article>
        `;
      }).join("")}
    </section>
  `;
}

function careersHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.careersTitle}</h1>
      <div class="soon-card">
        <span class="soon-badge">${dict.careersSoon}</span>
        <p class="body-copy">${dict.careersBody}</p>
      </div>
      <a class="text-link" href="mailto:sarvseva@gmail.com">${dict.emailCta} - sarvseva@gmail.com</a>
    </section>
  `;
}

function contactHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.contactTitle}</h1>
      <p class="card-sub">${dict.contactSub}</p>
      <a class="mail-card" href="mailto:sarvseva@gmail.com">
        <span class="mail-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" width="22" height="22"><rect x="2.5" y="5" width="19" height="14" rx="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3.4 6.4 12 12.6 20.6 6.4" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
        </span>
        <span class="mail-text">sarvseva@gmail.com</span>
      </a>
      <p class="body-copy">${dict.contactNote}</p>
      <a class="text-link" href="mailto:sarvseva@gmail.com">${dict.emailCta}</a>
    </section>
  `;
}

function aidHtml(dict, state) {
  const groupTitles = {
    breathing: dict.aidBreathing,
    bleeding: dict.aidBleeding,
    burns: dict.aidBurns,
    other: dict.aidOther
  };
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.aidTitle}</h1>
      <p class="card-sub">${dict.aidSub}</p>
      ${AID_GROUPS.map(g => {
        const items = AID_CASES.filter(c => c.group === g);
        if (!items.length) return "";
        return `
          <div class="aid-group">
            <h2 class="group-title">${escapeHtml(groupTitles[g])}</h2>
            ${items.map(c => aidCase(dict, state, c)).join("")}
          </div>
        `;
      }).join("")}
      <p class="hint-line">${dict.aidNote}</p>
      <a class="text-link" href="#/emergency">${dict.emergencyTab}</a>
    </section>
  `;
}

function aidCase(dict, state, c) {
  const title = state.locale === "hi" ? c.titleHi : c.titleEn;
  const steps = state.locale === "hi" ? c.stepsHi : c.stepsEn;
  const dont = state.locale === "hi" ? c.dontHi : c.dontEn;
  return `
    <details class="aid-card">
      <summary class="aid-summary">
        <span class="aid-title">${escapeHtml(title)}</span>
        ${c.callNow ? `<span class="aid-flag">${dict.callNow}</span>` : ""}
      </summary>
      <div class="aid-body">
        <ol class="aid-steps">
          ${steps.map(s => `<li>${escapeHtml(s)}</li>`).join("")}
        </ol>
        ${dont ? `<p class="aid-dont"><strong>${dict.dontLabel}</strong> ${escapeHtml(dont)}</p>` : ""}
      </div>
    </details>
  `;
}

function researchHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${escapeHtml(dict.aidNewsTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.aidNewsSub)}</p>
      <ul class="news-list">
        ${AID_RESEARCH.map(item => `
          <li class="news-item">
            <span class="news-meta">${escapeHtml(item.source)} &middot; ${escapeHtml(dict.newsChecked)} ${escapeHtml(item.date)}</span>
            <a class="news-title" href="${item.url}" target="_blank" rel="noopener noreferrer">${escapeHtml(state.locale === "hi" ? item.titleHi : item.titleEn)}</a>
            <p class="news-note">${escapeHtml(state.locale === "hi" ? item.noteHi : item.noteEn)}</p>
          </li>`).join("")}
      </ul>
    </section>
  `;
}

function videosHtml(dict, state) {
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${escapeHtml(dict.aidVideoTitle)}</h1>
      <p class="card-sub">${escapeHtml(dict.aidVideoSub)}</p>
      <div class="learn-grid">
        ${AID_VIDEOS.map(v => `
          <a class="learn-card" href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noopener noreferrer">
            <img class="learn-thumb" src="https://i.ytimg.com/vi/${v.id}/hqdefault.jpg" alt="" width="96" height="54" loading="lazy" onerror="this.style.display='none'">
            <span class="learn-body">
              <span class="learn-title">${escapeHtml(state.locale === "hi" ? v.titleHi : v.titleEn)}</span>
              <span class="learn-meta">${escapeHtml(v.channel)} &middot; ${escapeHtml(dict.watchOn)}</span>
            </span>
          </a>`).join("")}
      </div>
    </section>
  `;
}

function sketchSvg(sketch, paint, interactive) {
  const start = sketch.body.replace(/data-region="([^"]+)"/g, (m, id) => `data-region="${id}" fill="${(paint && paint[id]) || PAPER}"`);
  return `<svg class="sketch${interactive ? " is-editor" : ""}" viewBox="${sketch.viewBox}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${escapeHtml(sketch.titleEn)}">${start}</svg>`;
}

function topicLabel(dict, topic) {
  const map = {
    flight: dict.topicFlight,
    safety: dict.topicSafety,
    health: dict.topicHealth,
    home: dict.topicHome,
    learn: dict.topicLearn
  };
  return map[topic] || "";
}

function sketchHtml(dict, state) {
  const sketch = SKETCHES.find(s => s.id === state.sketchId);
  if (!sketch) {
    return `
      <section class="card flow">
        ${backLink(dict, state)}
        <h1 class="card-title">${dict.sketchTitle}</h1>
        <p class="card-sub">${dict.sketchPickSub}</p>
        <div class="sketch-grid">
          ${SKETCHES.map(s => `
            <button type="button" class="sketch-card" data-sketch="${s.id}">
              <span class="sketch-thumb">${sketchSvg(s, null, false)}</span>
              <span class="sketch-card-title">${escapeHtml(state.locale === "hi" ? s.titleHi : s.titleEn)}</span>
              <span class="sketch-card-topic">${escapeHtml(topicLabel(dict, s.topic))}</span>
            </button>
          `).join("")}
        </div>
        <p class="hint-line">${dict.sketchNote}</p>
      </section>
    `;
  }
  return `
    <section class="card flow">
      <div class="back-link-wrap"><button type="button" class="back-link" id="sketch-back">${dict.sketchBack}</button></div>
      <h1 class="card-title">${escapeHtml(state.locale === "hi" ? sketch.titleHi : sketch.titleEn)}</h1>
      <p class="card-sub">${dict.sketchSub}</p>
      <div class="sketch-stage">${sketchSvg(sketch, state.paint, true)}</div>
      <div class="palette" role="group" aria-label="${dict.colourLabel}">
        ${PALETTE.map(c => `<button type="button" class="swatch" data-color="${c}" style="background:${c}" aria-pressed="${state.color === c}" aria-label="${c}"></button>`).join("")}
      </div>
      <div class="tools">
        <button type="button" class="btn btn-ghost" id="sketch-undo">${dict.undo}</button>
        <button type="button" class="btn btn-ghost" id="sketch-clear">${dict.clear}</button>
      </div>
      <button type="button" class="btn btn-primary btn-full" id="sketch-save">${dict.save}</button>
      <p class="hint-line">${dict.sketchNote}</p>
    </section>
  `;
}

function applyPaint(paint) {
  document.querySelectorAll(".sketch.is-editor .region").forEach(el => {
    const id = el.getAttribute("data-region");
    el.setAttribute("fill", (paint && paint[id]) || PAPER);
  });
}

function saveSketch(dict) {
  try {
    const svg = document.querySelector(".sketch.is-editor");
    if (!svg) return;
    const clone = svg.cloneNode(true);
    clone.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    clone.setAttribute("width", "800");
    clone.setAttribute("height", "800");
    clone.querySelectorAll(".region").forEach(el => {
      el.setAttribute("stroke", INK);
      el.setAttribute("stroke-width", "2.2");
      el.setAttribute("stroke-linejoin", "round");
    });
    clone.querySelectorAll(".line").forEach(el => {
      el.setAttribute("fill", "none");
      el.setAttribute("stroke", INK);
      el.setAttribute("stroke-width", "2");
      el.setAttribute("stroke-linecap", "round");
      el.setAttribute("stroke-linejoin", "round");
    });
    const xml = new XMLSerializer().serializeToString(clone);
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 800;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = PAPER;
      ctx.fillRect(0, 0, 800, 800);
      ctx.drawImage(img, 0, 0, 800, 800);
      const a = document.createElement("a");
      a.href = canvas.toDataURL("image/png");
      a.download = "sarvseva-sketch.png";
      a.click();
      flashOk(dict.savedMsg);
    };
    img.onerror = () => flashError(dict.saveFail);
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(xml);
  } catch (err) {
    flashError(dict.saveFail);
  }
}

function emergencyHtml(dict, state) {
  const titles = {
    emergency: dict.groupEmergency,
    medical: dict.groupMedical,
    women: dict.groupWomen,
    other: dict.groupOther
  };
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.emergencyTitle}</h1>
      <p class="card-sub">${dict.emergencySub}</p>
      <div class="first-steps">
        <h2 class="group-title">${dict.firstTitle}</h2>
        <ol class="step-list">
          ${dict.firstSteps.map((step, i) => `
            <li class="step${i === 0 ? " is-first" : ""}">
              <span class="step-num" aria-hidden="true">${i + 1}</span>
              <span class="step-text">${escapeHtml(step)}</span>
            </li>
          `).join("")}
        </ol>
      </div>
      ${EMERGENCY_GROUPS.map(g => {
        const items = EMERGENCY_INDIA.filter(n => n.group === g);
        if (!items.length) return "";
        return `
          <div class="emergency-group">
            <h2 class="group-title">${escapeHtml(titles[g])}</h2>
            <div class="emergency-list">
              ${items.map(n => emergencyCard(state, n)).join("")}
            </div>
          </div>
        `;
      }).join("")}
      <p class="hint-line">${dict.emergencyNote}</p>
    </section>
  `;
}

function emergencyCard(state, n) {
  const name = state.locale === "hi" ? n.nameHi : n.nameEn;
  const desc = state.locale === "hi" ? n.descHi : n.descEn;
  return `
    <button type="button" class="emergency-row${n.highlight ? " is-primary" : ""}" data-call="${escapeHtml(n.value)}" data-call-name="${escapeHtml(name)}">
      <span class="emergency-num">${escapeHtml(n.value)}</span>
      <span class="emergency-text">
        <span class="emergency-name">${escapeHtml(name)}</span>
        <span class="emergency-desc">${escapeHtml(desc)}</span>
      </span>
      <span class="emergency-call" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="17" height="17"><path d="M6.5 3.5 H9.5 L11 8 L8.8 9.6 C 9.8 12.2 11.8 14.2 14.4 15.2 L16 13 L20.5 14.5 V17.5 C 20.5 19.1 19.1 20.4 17.5 20.2 C 10.3 19.3 4.7 13.7 3.8 6.5 C 3.6 4.9 4.9 3.5 6.5 3.5 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>
      </span>
    </button>
  `;
}

/* ------------------------------------------------------------------
   Verified help directory
   ------------------------------------------------------------------ */
const dirState = { q: "", cat: "all" };

function formatDate(iso, locale) {
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(locale === "hi" ? "hi-IN" : "en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric"
  });
}

/* Listings are rechecked every 90 days. A listing inside the last 30 days of
   that window is flagged, and one past the date is expired: labelled, and kept
   out of results until someone revalidates it. */
const RECHECK_WARN_DAYS = 30;

function daysUntil(dateIso) {
  const then = new Date(dateIso + "T00:00:00").getTime();
  if (!Number.isFinite(then)) return NaN;
  return (then - Date.now()) / 86400000;
}

function isExpired(item) {
  const days = daysUntil(item.review);
  return Number.isFinite(days) && days < 0;
}

function isStale(item) {
  const days = daysUntil(item.review);
  return Number.isFinite(days) && days >= 0 && days <= RECHECK_WARN_DAYS;
}

function catLabel(id, state) {
  const cat = CATEGORIES.find(c => c.id === id);
  if (!cat) return id;
  return state.locale === "hi" ? cat.labelHi : cat.labelEn;
}

function filteredDirectory() {
  const q = dirState.q.trim().toLowerCase();
  return DIRECTORY.filter(item => {
    if (dirState.cat !== "all" && item.category !== dirState.cat) return false;
    if (!q) return true;
    return [item.nameEn, item.nameHi, item.number, item.descEn, item.descHi]
      .join(" ")
      .toLowerCase()
      .includes(q);
  });
}

function directoryCard(dict, state, item) {
  const name = state.locale === "hi" ? item.nameHi : item.nameEn;
  const desc = state.locale === "hi" ? item.descHi : item.descEn;
  const coverage = state.locale === "hi" ? item.coverageHi : item.coverageEn;
  const hours = state.locale === "hi" ? item.hoursHi : item.hoursEn;
  const stale = isStale(item);
  const expired = isExpired(item);
  return `
    <article class="dir-card${item.primary ? " is-primary" : ""}${expired ? " is-expired" : ""}">
      <div class="dir-head">
        <span class="dir-num">${escapeHtml(item.number)}</span>
        <span class="dir-name">${escapeHtml(name)}</span>
        ${expired ? `<span class="badge badge-expired">${escapeHtml(dict.dirExpiredBadge)}</span>` : stale ? `<span class="badge badge-stale">${escapeHtml(dict.dirStale)}</span>` : ""}
      </div>
      <p class="dir-desc">${escapeHtml(desc)}</p>
      <dl class="dir-meta">
        <div><dt>${escapeHtml(dict.dirCoverage)}</dt><dd>${escapeHtml(coverage)}</dd></div>
        <div><dt>${escapeHtml(dict.dirHours)}</dt><dd>${escapeHtml(hours)}</dd></div>
        <div><dt>${escapeHtml(dict.dirCheckLabel)}</dt><dd>${escapeHtml(formatDate(item.verified, state.locale))}</dd></div>
      </dl>
      <p class="dir-trust">
        ${escapeHtml(dict.dirVerifiedBy)} <a class="dir-source" href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.sourceName)}</a>.
        ${escapeHtml(dict.dirScope)}: ${escapeHtml(coverage)}.
      </p>
      <div class="dir-actions">
        <button type="button" class="btn btn-primary" data-call="${escapeHtml(item.number)}" data-call-name="${escapeHtml(name)}">${escapeHtml(dict.callLabel)} ${escapeHtml(item.number)}</button>
        <a class="dir-report" href="mailto:sarvseva@gmail.com?subject=${encodeURIComponent(dict.dirReportSubject + ": " + name + " " + item.number)}">${escapeHtml(dict.dirReport)}</a>
      </div>
    </article>
  `;
}

function directoryListHtml(dict, state) {
  const items = filteredDirectory();
  if (!items.length) return `<p class="dir-empty">${escapeHtml(dict.dirEmpty)}</p>`;
  const live = items.filter(item => !isExpired(item));
  const expired = items.filter(item => isExpired(item));
  const liveHtml = live.length
    ? live.map(item => directoryCard(dict, state, item)).join("")
    : `<p class="dir-empty">${escapeHtml(dict.dirEmpty)}</p>`;
  const expiredHtml = expired.length
    ? `<details class="expired-block">
        <summary>${escapeHtml((expired.length === 1 ? dict.dirExpiredToggleOne : dict.dirExpiredToggleMany).replace("{n}", String(expired.length)))}</summary>
        <p class="field-hint">${escapeHtml(dict.dirExpiredNote)}</p>
        ${expired.map(item => directoryCard(dict, state, item)).join("")}
      </details>`
    : "";
  return liveHtml + expiredHtml;
}

function directoryHtml(dict, state) {
  const chips = ["all", ...DIR_CATS].map(cat => {
    const on = dirState.cat === cat;
    const pair = DIR_CAT_LABELS[cat];
    const label = cat === "all" ? dict.dirAll : pair ? pair[state.locale === "hi" ? 1 : 0] : catLabel(cat, state);
    return `<button type="button" class="chip${on ? " is-on" : ""}" data-cat="${escapeHtml(cat)}" aria-pressed="${on}">${escapeHtml(label)}</button>`;
  }).join("");
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.dirTitle}</h1>
      <p class="card-sub">${dict.dirSub}</p>
      <input class="input dir-search" id="dir-q" type="search" value="${escapeHtml(dirState.q)}" placeholder="${escapeHtml(dict.dirSearch)}" aria-label="${escapeHtml(dict.dirSearch)}" autocomplete="off">
      <div class="chip-row" role="group" aria-label="${escapeHtml(dict.dirAll)}">${chips}</div>
      <p class="dir-count" id="dir-count" role="status" aria-live="polite"></p>
      <div class="dir-list" id="dir-list">${directoryListHtml(dict, state)}</div>
      <p class="hint-line">${dict.dirNote}</p>
    </section>
  `;
}

function wireDirectory(dict, state) {
  const input = document.getElementById("dir-q");
  const list = document.getElementById("dir-list");
  const count = document.getElementById("dir-count");
  if (!input || !list) return;

  const paint = () => {
    list.innerHTML = directoryListHtml(dict, state);
    const all = filteredDirectory();
    const n = all.filter(item => !isExpired(item)).length;
    const hidden = all.length - n;
    if (count) {
      const base = `${n} ${n === 1 ? dict.dirCountOne : dict.dirCountMany}`;
      count.textContent = hidden ? `${base} · ${dict.dirExpiredHidden.replace("{n}", String(hidden))}` : base;
    }
  };
  paint();

  input.addEventListener("input", () => {
    dirState.q = input.value;
    paint();
  });

  document.querySelectorAll("[data-cat]").forEach(chip => {
    chip.addEventListener("click", () => {
      dirState.cat = chip.getAttribute("data-cat");
      document.querySelectorAll("[data-cat]").forEach(c => {
        const on = c === chip;
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", String(on));
      });
      paint();
    });
  });
}

/* ------------------------------------------------------------------
   Call confirmation sheet
   Nothing dials and nothing claims to dispatch until the person confirms.
   ------------------------------------------------------------------ */
let sheetPrevFocus = null;

function closeCallSheet() {
  const sheet = document.getElementById("call-sheet");
  if (!sheet) return;
  sheet.remove();
  document.removeEventListener("keydown", sheetKeydown);
  if (sheetPrevFocus && typeof sheetPrevFocus.focus === "function") {
    sheetPrevFocus.focus();
  }
  sheetPrevFocus = null;
}

function sheetKeydown(e) {
  if (e.key === "Escape") {
    e.preventDefault();
    closeCallSheet();
    return;
  }
  if (e.key !== "Tab") return;
  const sheet = document.getElementById("call-sheet");
  if (!sheet) return;
  const items = [...sheet.querySelectorAll("a[href], button")].filter(el => !el.disabled);
  if (!items.length) return;
  const first = items[0];
  const last = items[items.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function openCallSheet(number, label, dict) {
  closeCallSheet();
  const wrap = document.createElement("div");
  wrap.className = "sheet-backdrop";
  wrap.id = "call-sheet";
  wrap.innerHTML = `
    <div class="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" aria-describedby="sheet-body">
      <h2 class="sheet-title" id="sheet-title">${escapeHtml(dict.callSheetTitle.replace("{number}", number))}</h2>
      <p class="sheet-number">${escapeHtml(number)}</p>
      ${label ? `<p class="sheet-name">${escapeHtml(label)}</p>` : ""}
      <p class="sheet-body" id="sheet-body">${escapeHtml(dict.callSheetBody)}</p>
      <div class="sheet-actions">
        <a class="btn btn-primary btn-lg" id="sheet-dial" href="tel:${escapeHtml(number)}">${escapeHtml(dict.callSheetOpen)}</a>
        <button type="button" class="btn btn-ghost" id="sheet-copy">${escapeHtml(dict.callSheetCopy)}</button>
        <button type="button" class="btn btn-ghost" id="sheet-cancel">${escapeHtml(dict.callSheetCancel)}</button>
      </div>
      <p class="fine">${escapeHtml(dict.callSheetFallback)}</p>
    </div>
  `;
  sheetPrevFocus = document.activeElement;
  document.body.appendChild(wrap);
  const cancel = wrap.querySelector("#sheet-cancel");
  if (cancel) cancel.focus();
  wrap.addEventListener("click", (e) => {
    if (e.target === wrap) closeCallSheet();
  });
  if (cancel) cancel.addEventListener("click", closeCallSheet);
  const dial = wrap.querySelector("#sheet-dial");
  if (dial) dial.addEventListener("click", () => setTimeout(closeCallSheet, 500));
  const copy = wrap.querySelector("#sheet-copy");
  if (copy) {
    copy.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(number);
        flashOk(dict.callSheetCopied);
      } catch (err) {
        flashError(dict.callSheetFallback);
      }
    });
  }
  document.addEventListener("keydown", sheetKeydown);
}

/* ------------------------------------------------------------------
   Local persistence - guest-first, nothing leaves the device yet
   ------------------------------------------------------------------ */
const LS = {
  get(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (err) {
      return fallback;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      /* storage full or blocked */
    }
  },
  del(key) {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      /* ignore */
    }
  }
};

const DRAFT_KEY = "sarvseva:draft";
const REQ_KEY = "sarvseva:requests";
const OFFER_KEY = "sarvseva:offer";

const NEED_CATS = ["emergency", "safety", "health", "basic-needs", "legal", "children", "women", "elderly"];
const URGENCIES = [
  { id: "now", keyEn: "needUrgencyNow", keyHi: "needUrgencyNow", risk: true },
  { id: "today", keyEn: "needUrgencyToday", keyHi: "needUrgencyToday" },
  { id: "week", keyEn: "needUrgencyWeek", keyHi: "needUrgencyWeek" }
];

let needDraft = LS.get(DRAFT_KEY, null);
let needResumeDismissed = false;
let needErrors = [];

function emptyDraft() {
  return {
    step: 1,
    category: "",
    what: "",
    locality: "",
    precise: false,
    urgency: "today",
    language: "",
    details: "",
    contact: "",
    sms: false,
    consent: false
  };
}

function saveNeedDraft() {
  if (!needDraft) return;
  LS.set(DRAFT_KEY, needDraft);
}

function draftHasContent(d) {
  return !!(d && (d.category || d.what || d.locality || d.contact));
}

function needField(dict, id, label, hint, value, opts = {}) {
  const err = needErrors.includes(id);
  const describedBy = [hint ? id + "-hint" : "", err ? id + "-err" : ""].filter(Boolean).join(" ");
  return `
    <div class="field${err ? " has-error" : ""}">
      <label class="field-label" for="${id}">${escapeHtml(label)}</label>
      ${hint ? `<p class="field-hint" id="${id}-hint">${escapeHtml(hint)}</p>` : ""}
      ${opts.textarea
        ? `<textarea class="input" id="${id}" rows="${opts.rows || 3}" ${describedBy ? `aria-describedby="${describedBy}"` : ""} ${err ? 'aria-invalid="true"' : ""} placeholder="${escapeHtml(opts.placeholder || "")}">${escapeHtml(value)}</textarea>`
        : `<input class="input" id="${id}" type="${opts.type || "text"}" ${opts.inputmode ? `inputmode="${opts.inputmode}"` : ""} ${describedBy ? `aria-describedby="${describedBy}"` : ""} ${err ? 'aria-invalid="true"' : ""} value="${escapeHtml(value)}" placeholder="${escapeHtml(opts.placeholder || "")}">`}
      ${err ? `<p class="field-error" id="${id}-err" role="alert">${escapeHtml(needErrText(dict, id))}</p>` : ""}
    </div>
  `;
}

function needErrText(dict, id) {
  switch (id) {
    case "category": return dict.needErrCategory;
    case "what": return dict.needErrWhat;
    case "locality": return dict.needErrWhere;
    case "contact": return dict.needErrContact;
    case "consent": return dict.needErrConsent;
    default: return "";
  }
}

function chipGroup(dict, attr, items, selected, legend) {
  return `
    <fieldset class="field">
      <legend class="field-label">${escapeHtml(legend)}</legend>
      <div class="chip-row" role="group">
        ${items.map(item => {
          const on = Array.isArray(selected) ? selected.includes(item.id) : selected === item.id;
          return `<button type="button" class="chip${on ? " is-on" : ""}" ${attr}="${escapeHtml(item.id)}" aria-pressed="${on}">${escapeHtml(item.label)}</button>`;
        }).join("")}
      </div>
    </fieldset>
  `;
}

function needHelpHtml(dict, state) {
  if (!needDraft) needDraft = emptyDraft();
  const d = needDraft;
  const showResume = d.step === 1 && draftHasContent(d) && !needResumeDismissed;

  const steps = [
    `<div class="step-head"><span class="eyebrow">${escapeHtml(dict.needStepOf.replace("{n}", "1"))}</span></div>
     <h2 class="section-h2">${escapeHtml(dict.needStep1)}</h2>
     <p class="field-hint">${escapeHtml(dict.needStep1Hint)}</p>
     <div class="field${needErrors.includes("category") ? " has-error" : ""}">
       <div class="chip-row" role="group" aria-label="${escapeHtml(dict.needStep1)}">
         ${NEED_CATS.map(id => {
           const cat = CATEGORIES.find(c => c.id === id);
           const label = state.locale === "hi" ? cat.labelHi : cat.labelEn;
           const on = d.category === id;
           return `<button type="button" class="chip${on ? " is-on" : ""}" data-need-cat="${id}" aria-pressed="${on}">${escapeHtml(label)}</button>`;
         }).join("")}
       </div>
       ${needErrors.includes("category") ? `<p class="field-error" role="alert">${escapeHtml(dict.needErrCategory)}</p>` : ""}
     </div>`,

    `<div class="step-head"><span class="eyebrow">${escapeHtml(dict.needStepOf.replace("{n}", "2"))}</span></div>
     <h2 class="section-h2">${escapeHtml(dict.needStep2)}</h2>
     ${needField(dict, "need-what", dict.needWhat, dict.needWhatHint, d.what, { textarea: true, rows: 3, placeholder: dict.needWhatHint })}
     <fieldset class="field">
       <legend class="field-label">${escapeHtml(dict.locTitle)}</legend>
       <p class="field-hint">${escapeHtml(dict.needWhereHint)}</p>
       ${needField(dict, "need-locality", dict.needWhere, "", d.locality, { placeholder: dict.needWherePlaceholder })}
       <label class="check-row" for="need-precise">
         <input type="checkbox" id="need-precise" ${d.precise ? "checked" : ""}>
         <span>${escapeHtml(dict.locPrecise)}</span>
       </label>
       <p class="field-hint">${escapeHtml(dict.locExplain)}</p>
       <p class="field-hint">${escapeHtml(dict.locRetention)} ${escapeHtml(dict.locStop)}</p>
     </fieldset>
     ${chipGroup(dict, "data-urgency", URGENCIES.map(u => ({ id: u.id, label: dict[u.keyEn] })), d.urgency, dict.needUrgency)}
     ${needField(dict, "need-contact", dict.needContact, dict.needContactHint, d.contact, { type: "tel", inputmode: "tel" })}
     <details class="more" ${d.language || d.details ? "open" : ""}>
       <summary>${escapeHtml(dict.needMore)}</summary>
       <p class="field-hint">${escapeHtml(dict.needMoreHelp)}</p>
       ${needField(dict, "need-language", dict.needLanguage, "", d.language, { placeholder: "Hindi, English, …" })}
       ${needField(dict, "need-details", dict.needDetails, "", d.details, { textarea: true, rows: 2 })}
     </details>`,

    `<div class="step-head"><span class="eyebrow">${escapeHtml(dict.needStepOf.replace("{n}", "3"))}</span></div>
     <h2 class="section-h2">${escapeHtml(dict.needStep3)}</h2>
     <div class="review">
       <div class="review-row"><span class="review-key">${escapeHtml(dict.needStep1)}</span><span class="review-val">${escapeHtml(catLabel(d.category, state))}</span><button type="button" class="review-edit" data-need-edit="1">${escapeHtml(dict.needEdit)}</button></div>
       <div class="review-row"><span class="review-key">${escapeHtml(dict.needWhat)}</span><span class="review-val">${escapeHtml(d.what)}</span><button type="button" class="review-edit" data-need-edit="2">${escapeHtml(dict.needEdit)}</button></div>
       <div class="review-row"><span class="review-key">${escapeHtml(dict.needWhere)}</span><span class="review-val">${escapeHtml(d.locality)}${d.precise ? " · " + escapeHtml(dict.locPrecise) : ""}</span><button type="button" class="review-edit" data-need-edit="2">${escapeHtml(dict.needEdit)}</button></div>
       <div class="review-row"><span class="review-key">${escapeHtml(dict.needUrgency)}</span><span class="review-val">${escapeHtml(dict["needUrgency" + d.urgency.charAt(0).toUpperCase() + d.urgency.slice(1)] || d.urgency)}</span><button type="button" class="review-edit" data-need-edit="2">${escapeHtml(dict.needEdit)}</button></div>
       <div class="review-row"><span class="review-key">${escapeHtml(dict.needContact)}</span><span class="review-val">${escapeHtml(d.contact)}</span><button type="button" class="review-edit" data-need-edit="2">${escapeHtml(dict.needEdit)}</button></div>
     </div>
     <div class="notice notice-amber">${escapeHtml(dict.needReviewNote)}</div>
     <label class="check-row${needErrors.includes("consent") ? " has-error" : ""}" for="need-consent">
       <input type="checkbox" id="need-consent" ${d.consent ? "checked" : ""} ${needErrors.includes("consent") ? 'aria-invalid="true"' : ""}>
       <span>${escapeHtml(dict.needConsent)}</span>
     </label>
     ${needErrors.includes("consent") ? `<p class="field-error" role="alert">${escapeHtml(dict.needErrConsent)}</p>` : ""}
     <fieldset class="field">
       <legend class="field-label">${escapeHtml(dict.notifyTitle)}</legend>
       <label class="check-row" for="need-sms">
         <input type="checkbox" id="need-sms" ${d.sms ? "checked" : ""}>
         <span>${escapeHtml(dict.notifySms)}</span>
       </label>
       <p class="field-hint">${escapeHtml(dict.notifyPrivacy)}</p>
     </fieldset>`
  ];

  const step = Math.min(Math.max(d.step, 1), 3);
  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.needTitle}</h1>
      <p class="card-sub">${dict.needSub}</p>
      ${showResume ? `<div class="notice notice-soft">${escapeHtml(dict.needDraftResume)}
        <div class="notice-actions"><button type="button" class="btn btn-ghost" data-need-resume>${escapeHtml(dict.needDraftResumeCta)}</button><button type="button" class="btn btn-ghost" data-need-fresh>${escapeHtml(dict.needDraftDiscard)}</button></div></div>` : ""}
      <div class="stepper" aria-hidden="true">${[1, 2, 3].map(n => `<span class="stepper-dot${n <= step ? " is-on" : ""}"></span>`).join("")}</div>
      ${currentRequest() ? `<p class="field-hint need-existing">${escapeHtml(dict.needExisting)} <a href="#" data-go="status">${escapeHtml(dict.homeResumeCta)}</a></p>` : ""}
      ${steps[step - 1]}
      <div class="wizard-actions">
        ${step > 1 ? `<button type="button" class="btn btn-ghost" data-need-back>${escapeHtml(dict.needBack)}</button>` : ""}
        ${step < 3
          ? `<button type="button" class="btn btn-primary" data-need-next>${escapeHtml(dict.needNext)}</button>`
          : `<button type="button" class="btn btn-primary btn-lg" data-need-submit>${escapeHtml(dict.needShare)}</button>`}
      </div>
    </section>
  `;
}

/* ---- status model: every state says what happened and what to do next ---- */
function currentRequest() {
  const list = LS.get(REQ_KEY, []);
  return list.length ? list[list.length - 1] : null;
}

/* navigator.onLine is not enough here: the Android build is served from a
   loopback server, which keeps reporting an interface even in airplane mode.
   An opaque no-cors HEAD to a public file settles it either way. */
function checkOnline(timeoutMs = 2500) {
  if (!navigator.onLine) return Promise.resolve(false);
  return new Promise(resolve => {
    let done = false;
    const finish = (value) => {
      if (done) return;
      done = true;
      resolve(value);
    };
    const controller = typeof AbortController === "function" ? new AbortController() : null;
    const timer = setTimeout(() => {
      if (controller) controller.abort();
      finish(false);
    }, timeoutMs);
    fetch("https://aashupokemon.github.io/SarvSeva/manifest.json?probe=" + Date.now(), {
      mode: "no-cors",
      cache: "no-store",
      signal: controller ? controller.signal : undefined
    })
      .then(() => {
        clearTimeout(timer);
        finish(true);
      })
      .catch(() => {
        clearTimeout(timer);
        finish(false);
      });
  });
}

/* Delivery is not switched on in this build. When a dispatch service exists,
   setting its URL here turns the same retry path into a real send. */
const DELIVERY_ENDPOINT = null;

async function deliverRequest(request) {
  if (!DELIVERY_ENDPOINT) return { ok: false, reason: "disabled" };
  try {
    const response = await fetch(DELIVERY_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: request.id,
        category: request.category,
        what: request.what,
        locality: request.locality,
        precise: request.precise,
        urgency: request.urgency,
        language: request.language,
        details: request.details,
        contact: request.contact,
        sms: request.sms
      })
    });
    return response.ok ? { ok: true } : { ok: false, reason: "http-" + response.status };
  } catch (err) {
    return { ok: false, reason: "network" };
  }
}

/** One send attempt: off the network it queues, on the network it tries to deliver. */
async function attemptSend(dict, automatic) {
  const list = LS.get(REQ_KEY, []);
  const request = list[list.length - 1];
  if (!request || request.state === "cancelled") return null;

  const online = await checkOnline();
  const stamp = new Date().toISOString();

  if (!online) {
    if (request.state === "queued") return { state: "queued", automatic, changed: false };
    request.state = "queued";
    request.events = (request.events || []).concat([
      { at: stamp, human: false, text: dict.statusQueuedEvent }
    ]);
    LS.set(REQ_KEY, list);
    return { state: "queued", automatic, changed: true };
  }

  const result = await deliverRequest(request);
  request.attempts = (request.attempts || 0) + 1;
  request.lastAttemptAt = stamp;
  request.state = "failed";
  if (automatic) request.autoRetryFailedAt = stamp;
  else delete request.autoRetryFailedAt;
  request.events = (request.events || []).concat([
    { at: stamp, human: false, text: automatic ? dict.statusRetryFailedEvent : dict.statusFailedEvent }
  ]);
  LS.set(REQ_KEY, list);
  return { state: "failed", automatic, changed: true, reason: result.reason };
}

let retryBusy = false;
let retryWatcherStarted = false;

async function retryQueuedIfNeeded() {
  if (retryBusy || document.hidden) return;
  const request = currentRequest();
  if (!request || request.state !== "queued") return;

  retryBusy = true;
  try {
    const dict = i18n[state.locale];
    const result = await attemptSend(dict, true);
    if (!result || !result.changed) return;
    if (state.screen === "status") render();
    if (result.state === "failed") flashError(dict.statusRetryFailedFlash);
    else flashOk(dict.statusQueuedFlash);
  } finally {
    retryBusy = false;
  }
}

function startRetryWatcher() {
  if (retryWatcherStarted) return;
  retryWatcherStarted = true;
  window.addEventListener("online", () => window.setTimeout(retryQueuedIfNeeded, 800));
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) retryQueuedIfNeeded();
  });
  window.setInterval(retryQueuedIfNeeded, 30000);
  window.setTimeout(retryQueuedIfNeeded, 3200);
}

function STATUS_COPY(status, dict) {
  switch (status) {
    case "queued":
      return {
        pill: dict.statusQueued,
        what: dict.statusQueuedWhat,
        next: dict.statusQueuedNext,
        warn: dict.statusNotSentWarning
      };
    case "failed":
      return {
        pill: dict.statusFailed,
        what: dict.statusFailedWhat,
        next: dict.statusFailedNext,
        warn: dict.statusNotSentWarning
      };
    case "cancelled":
      return {
        pill: dict.statusCancelled,
        what: dict.statusCancelled,
        next: dict.statusStart,
        warn: ""
      };
    default:
      return {
        pill: dict.statusSaved,
        what: dict.statusSavedWhat,
        next: dict.statusSavedNext,
        warn: dict.statusNotSentWarning
      };
  }
}

function statusHtml(dict, state) {
  const req = currentRequest();
  const back = backLink(dict, state);
  if (!req) {
    return `
      <section class="card flow">
        ${back}
        <h1 class="card-title">${dict.statusTitle}</h1>
        <p class="card-sub">${dict.statusNoRequest}</p>
        <a class="btn btn-primary btn-lg" href="#" data-go="need">${dict.statusStart}</a>
      </section>`;
  }
  const events = (req.events || []).map(ev => `
    <li class="timeline-item">
      <span class="timeline-dot" aria-hidden="true"></span>
      <span class="timeline-body">
        <span class="timeline-text">${escapeHtml(ev.text)}</span>
        <span class="timeline-meta">${escapeHtml(formatDate(ev.at.slice(0, 10), state.locale))} · ${escapeHtml(ev.at.slice(11, 16))} · ${escapeHtml(ev.human ? dict.statusHuman : dict.statusAutomated)}</span>
      </span>
    </li>`).join("");

  const copy = STATUS_COPY(req.state, dict);
  const canSend = req.state !== "cancelled";
  const sendLabel = req.state === "queued" || req.state === "failed" ? dict.statusSendAgain : dict.statusSend;
  return `
    <section class="card flow">
      ${back}
      <h1 class="card-title">${dict.statusTitle}</h1>
      <div class="status-card is-${escapeHtml(req.state)}">
        <span class="status-pill is-${escapeHtml(req.state)}">${escapeHtml(copy.pill)}</span>
        <p class="status-what">${escapeHtml(copy.what)}</p>
        <p class="status-next"><strong>${escapeHtml(dict.statusWhatNext)}:</strong> ${escapeHtml(copy.next)}</p>
        ${copy.warn ? `<p class="status-warn">${escapeHtml(copy.warn)}</p>` : ""}
        ${req.state === "queued" ? `<p class="field-hint status-retry">${escapeHtml(dict.statusRetryWaiting)}</p>` : ""}
      </div>
      ${req.state === "failed" && req.autoRetryFailedAt ? `<div class="notice notice-amber status-retry-fail" role="status">${escapeHtml(dict.statusRetryFailedNotice.replace("{time}", req.autoRetryFailedAt.slice(11, 16)))}</div>` : ""}
      ${canSend ? `<div class="status-send">
        <p class="field-hint">${escapeHtml(dict.statusSendHint)}</p>
        <button type="button" class="btn btn-primary btn-lg" data-status-send>${escapeHtml(sendLabel)}</button>
      </div>` : ""}
      <h2 class="group-title">${escapeHtml(dict.statusTimeline)}</h2>
      <ol class="timeline">${events}</ol>
      <div class="status-actions">
        <button type="button" class="btn btn-ghost" data-status-share>${escapeHtml(dict.statusShare)}</button>
        ${canSend ? `<button type="button" class="btn btn-ghost danger" data-status-cancel>${escapeHtml(dict.statusCancel)}</button>` : ""}
      </div>
      <details class="more">
        <summary>${escapeHtml(dict.statusLegend)}</summary>
        <ul class="legend-list">
          <li>${escapeHtml(dict.statusSec1)}</li>
          <li>${escapeHtml(dict.statusSec2)}</li>
          <li>${escapeHtml(dict.statusSec3)}</li>
          <li>${escapeHtml(dict.statusSec4)}</li>
          <li>${escapeHtml(dict.statusSec5)}</li>
        </ul>
      </details>
    </section>`;
}

/* ---- offer help ---- */
const OFFER_SKILLS = ["time", "food", "transport", "medical", "translation", "tech"];
const OFFER_AVAIL = ["day", "eve", "weekend"];
const OFFER_RADIUS = ["near", "city", "remote"];
let offerDraft = LS.get(OFFER_KEY, null) || { skills: [], avail: [], radius: "near", locality: "" };

function offerHelpHtml(dict, state) {
  const skills = OFFER_SKILLS.map(id => ({
    id,
    label: dict["offerSkill" + id.charAt(0).toUpperCase() + id.slice(1)]
  }));
  const avail = OFFER_AVAIL.map(id => ({
    id,
    label: dict["offerAvail" + id.charAt(0).toUpperCase() + id.slice(1)]
  }));
  const radius = OFFER_RADIUS.map(id => ({
    id,
    label: dict["offerRadius" + id.charAt(0).toUpperCase() + id.slice(1)]
  }));

  return `
    <section class="card flow">
      ${backLink(dict, state)}
      <h1 class="card-title">${dict.offerTitle}</h1>
      <p class="card-sub">${dict.offerSub}</p>
      ${chipGroup(dict, "data-offer-skill", skills, offerDraft.skills, dict.offerSkills)}
      ${chipGroup(dict, "data-offer-avail", avail, offerDraft.avail, dict.offerAvail)}
      ${chipGroup(dict, "data-offer-radius", radius, [offerDraft.radius], dict.offerRadius)}
      ${needField(dict, "offer-locality", dict.needWhere, dict.needWhereHint, offerDraft.locality || "", { placeholder: dict.needWherePlaceholder })}
      <div class="notice notice-soft">
        <strong>${escapeHtml(dict.offerSafety)}</strong>
        <ul class="legend-list">${dict.offerSafetyList.map(s => `<li>${escapeHtml(s)}</li>`).join("")}</ul>
      </div>
      <div class="notice notice-amber">${escapeHtml(dict.offerNote)}</div>
      <button type="button" class="btn btn-primary btn-lg" data-offer-save>${escapeHtml(dict.offerSave)}</button>
    </section>`;
}

function wireOfferHelp(dict) {
  const sync = () => LS.set(OFFER_KEY, offerDraft);
  document.querySelectorAll("[data-offer-skill]").forEach(chip => {
    chip.addEventListener("click", () => {
      const id = chip.getAttribute("data-offer-skill");
      const i = offerDraft.skills.indexOf(id);
      if (i === -1) offerDraft.skills.push(id); else offerDraft.skills.splice(i, 1);
      chip.classList.toggle("is-on", offerDraft.skills.includes(id));
      chip.setAttribute("aria-pressed", String(offerDraft.skills.includes(id)));
      sync();
    });
  });
  document.querySelectorAll("[data-offer-avail]").forEach(chip => {
    chip.addEventListener("click", () => {
      const id = chip.getAttribute("data-offer-avail");
      const i = offerDraft.avail.indexOf(id);
      if (i === -1) offerDraft.avail.push(id); else offerDraft.avail.splice(i, 1);
      chip.classList.toggle("is-on", offerDraft.avail.includes(id));
      chip.setAttribute("aria-pressed", String(offerDraft.avail.includes(id)));
      sync();
    });
  });
  document.querySelectorAll("[data-offer-radius]").forEach(chip => {
    chip.addEventListener("click", () => {
      offerDraft.radius = chip.getAttribute("data-offer-radius");
      document.querySelectorAll("[data-offer-radius]").forEach(c => {
        const on = c === chip;
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", String(on));
      });
      sync();
    });
  });
  const loc = document.getElementById("offer-locality");
  if (loc) loc.addEventListener("input", () => { offerDraft.locality = loc.value; sync(); });
  document.querySelector("[data-offer-save]")?.addEventListener("click", () => {
    sync();
    flashOk(dict.offerSaved);
  });
}

function wireNeedHelp(dict, state) {
  if (!needDraft) needDraft = emptyDraft();
  const d = needDraft;
  const sync = () => saveNeedDraft();

  const bindings = [
    ["need-what", "what"],
    ["need-locality", "locality"],
    ["need-contact", "contact"],
    ["need-language", "language"],
    ["need-details", "details"]
  ];
  bindings.forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.addEventListener("input", () => {
      d[key] = el.value;
      sync();
    });
  });

  const precise = document.getElementById("need-precise");
  if (precise) precise.addEventListener("change", () => { d.precise = precise.checked; sync(); });
  const consent = document.getElementById("need-consent");
  if (consent) consent.addEventListener("change", () => { d.consent = consent.checked; sync(); });
  const sms = document.getElementById("need-sms");
  if (sms) sms.addEventListener("change", () => { d.sms = sms.checked; sync(); });

  document.querySelectorAll("[data-need-cat]").forEach(chip => {
    chip.addEventListener("click", () => {
      d.category = chip.getAttribute("data-need-cat");
      needErrors = needErrors.filter(e => e !== "category");
      document.querySelectorAll("[data-need-cat]").forEach(c => {
        const on = c === chip;
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", String(on));
      });
      sync();
    });
  });

  document.querySelectorAll("[data-urgency]").forEach(chip => {
    chip.addEventListener("click", () => {
      d.urgency = chip.getAttribute("data-urgency");
      document.querySelectorAll("[data-urgency]").forEach(c => {
        const on = c === chip;
        c.classList.toggle("is-on", on);
        c.setAttribute("aria-pressed", String(on));
      });
      sync();
    });
  });

  document.querySelectorAll("[data-need-edit]").forEach(btn => {
    btn.addEventListener("click", () => {
      d.step = Number(btn.getAttribute("data-need-edit"));
      needResumeDismissed = true;
      sync();
      render();
    });
  });

  const focusFirstError = () => {
    const invalid = document.querySelector("[aria-invalid='true']");
    if (invalid && invalid.focus) {
      invalid.focus();
      return;
    }
    const box = document.querySelector(".has-error");
    const control = box && box.querySelector("button, input, select, textarea, summary");
    if (control && control.focus) control.focus();
  };

  const validateStep = () => {
    needErrors = [];
    if (d.step === 1 && !d.category) needErrors.push("category");
    if (d.step === 2) {
      if ((d.what || "").trim().length < 8) needErrors.push("what");
      if ((d.locality || "").trim().length < 2) needErrors.push("locality");
      const digits = (d.contact || "").replace(/[^0-9]/g, "");
      if (digits.length < 10) needErrors.push("contact");
    }
    if (d.step === 3 && !d.consent) needErrors.push("consent");
    return needErrors.length === 0;
  };

  document.querySelector("[data-need-next]")?.addEventListener("click", () => {
    if (!validateStep()) {
      render();
      focusFirstError();
      return;
    }
    d.step = Math.min(d.step + 1, 3);
    needResumeDismissed = true;
    sync();
    render();
    document.querySelector(".card-title")?.scrollIntoView({ block: "start", behavior: "smooth" });
  });

  document.querySelector("[data-need-back]")?.addEventListener("click", () => {
    needErrors = [];
    d.step = Math.max(1, d.step - 1);
    sync();
    render();
  });

  document.querySelector("[data-need-resume]")?.addEventListener("click", () => {
    needResumeDismissed = true;
    d.step = Math.min(Math.max(d.step, 1), 3);
    render();
  });

  document.querySelector("[data-need-fresh]")?.addEventListener("click", () => {
    needDraft = emptyDraft();
    needErrors = [];
    needResumeDismissed = true;
    saveNeedDraft();
    render();
  });

  document.querySelector("[data-need-submit]")?.addEventListener("click", () => {
    if (!validateStep()) {
      render();
      focusFirstError();
      return;
    }
    const now = new Date();
    const stamp = now.toISOString();
    const request = {
      id: "REQ-" + now.getTime().toString(36).toUpperCase(),
      createdAt: stamp,
      category: d.category,
      what: d.what.trim(),
      locality: d.locality.trim(),
      precise: !!d.precise,
      urgency: d.urgency,
      language: d.language.trim(),
      details: d.details.trim(),
      contact: d.contact.trim(),
      sms: !!d.sms,
      state: "saved",
      sent: false,
      events: [
        { at: stamp, human: false, text: saveStateText(dict) }
      ]
    };
    const list = LS.get(REQ_KEY, []);
    list.push(request);
    LS.set(REQ_KEY, list);
    LS.del(DRAFT_KEY);
    needDraft = null;
    needErrors = [];
    state.prev = "need";
    state.screen = "status";
    try { history.replaceState(null, "", "#/status"); } catch (err) { /* ignore */ }
    render();
    flashOk(dict.needSaved);
  });
}

function saveStateText(dict) {
  return dict.statusSavedWhat;
}

function wireStatus(dict) {
  const req = currentRequest();
  if (!req) return;

  document.querySelector("[data-status-send]")?.addEventListener("click", async (event) => {
    event.currentTarget.disabled = true;
    const result = await attemptSend(dict, false);
    if (!result) return;
    render();
    flashError(result.state === "queued" ? dict.statusQueuedFlash : dict.statusFailedFlash);
  });

  document.querySelector("[data-status-cancel]")?.addEventListener("click", () => {
    const list = LS.get(REQ_KEY, []);
    const last = list[list.length - 1];
    if (!last) return;
    last.state = "cancelled";
    last.events = (last.events || []).concat([{
      at: new Date().toISOString(),
      human: false,
      text: dict.statusCancelled
    }]);
    LS.set(REQ_KEY, list);
    render();
    flashOk(dict.statusCancelled);
  });

  document.querySelector("[data-status-share]")?.addEventListener("click", async () => {
    const text = `${req.what}\n${req.locality}\n${req.contact}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: "SarvSeva request", text });
        return;
      } catch (err) {
        /* user cancelled or unsupported */
      }
    }
    try {
      await navigator.clipboard.writeText(text);
      flashOk(dict.callSheetCopied);
    } catch (err) {
      flashError(dict.callSheetFallback);
    }
  });
}

function categoriesHtml(dict, state) {
  return `
    <div class="categories" role="list">
      ${CATEGORIES.map(c => {
        const items = RESOURCES.filter(r => r.category === c.id);
        if (!items.length) return "";
        const label = state.locale === "hi" ? c.labelHi : c.labelEn;
        return `
          <div class="category" role="listitem">
            <button type="button" class="category-btn" data-category="${escapeHtml(c.id)}" aria-expanded="false">
              <span class="category-icon" aria-hidden="true">${categoryIcon(c.icon)}</span>
              <span class="category-label">${escapeHtml(label)}</span>
              <span class="category-chevron" aria-hidden="true">
                <svg viewBox="0 0 16 16" width="14" height="14"><path d="M4 6 L8 10 L12 6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>
              </span>
            </button>
            <div class="category-list" hidden>
              ${items.map(r => resourceCard(dict, state, r)).join("")}
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function resourceCard(dict, state, r) {
  const title = state.locale === "hi" ? r.titleHi : r.titleEn;
  const body = state.locale === "hi" ? r.bodyHi : r.bodyEn;
  const note = state.locale === "hi" ? r.noteHi : r.noteEn;
  const typeLabel =
    r.type === "emergency-number" ? dict.typeEmergency : r.type === "helpline" ? dict.typeHelpline : dict.typeGuidance;
  return `
    <article class="resource-card">
      <div class="resource-head">
        <span class="resource-type">${escapeHtml(typeLabel)}</span>
        ${r.value ? `<span class="resource-value">${escapeHtml(r.value)}</span>` : ""}
      </div>
      <h3 class="resource-title">${escapeHtml(title || "")}</h3>
      <p class="resource-body">${escapeHtml(body || "")}</p>
      ${note ? `<p class="resource-note">${escapeHtml(note)}</p>` : ""}
      ${r.region ? `<p class="resource-meta">${dict.regionLabel}: ${escapeHtml(r.region)}</p>` : ""}
    </article>
  `;
}

function categoryIcon(name) {
  const paths = {
    alert: '<path d="M12 4 L21 20 H3 Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M12 10 V15" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="17.6" r="1" fill="currentColor"/>',
    shield: '<path d="M12 3 L20 6 V12 C20 16.4 16.6 19.8 12 21 C7.4 19.8 4 16.4 4 12 V6 Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
    heart: '<path d="M12 20 C 4 14.5 3 9.5 6 7 C 8.4 5.2 11 6.6 12 8.6 C 13 6.6 15.6 5.2 18 7 C 21 9.5 20 14.5 12 20 Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
    home: '<path d="M4 11 L12 4 L20 11 V20 H14 V15 H10 V20 H4 Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>',
    scale: '<path d="M12 3 V19 M6 19 H18 M5 8 H19" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M5 8 L2.5 14 H7.5 Z M19 8 L16.5 14 H21.5 Z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    book: '<path d="M4 5 H10 C 11 5 12 6 12 7 C 12 6 13 5 14 5 H20 V19 H14 C 13 19 12 20 12 20 C 12 20 11 19 10 19 H4 Z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>',
    people: '<circle cx="9" cy="8" r="3" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="17" cy="9" r="2.4" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M3 20 C 4 15.6 6.4 14 9 14 C 11.6 14 14 15.6 15 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M16 14.4 C 18.6 14.4 20.4 16 21 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    care: '<circle cx="12" cy="8" r="3.2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M5 20 C 6 15.4 8.6 13.6 12 13.6 C 15.4 13.6 18 15.4 19 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M12 17 V19" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    plane: '<path d="M2 13 L21 6 L14 21 L11.4 14.6 Z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/><path d="M11.4 14.6 L21 6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>',
    wheelchair: '<circle cx="11" cy="16" r="5.4" fill="none" stroke="currentColor" stroke-width="1.7"/><circle cx="13" cy="5.4" r="2" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M13 8 V13 H18 L20.5 18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>'
  };
  return `<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">${paths[name] || paths.heart}</svg>`;
}

function wingSvg(cls) {
  return `
    <svg class="${cls}" viewBox="0 0 180 110" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="currentColor" stroke-linecap="round">
        <path d="M24 98 C 44 58, 88 30, 156 22" stroke-width="3.2"/>
        <path d="M34 100 C 56 68, 96 44, 146 38" stroke-width="2.6" opacity="0.8"/>
        <path d="M50 102 C 70 78, 104 60, 138 56" stroke-width="2.2" opacity="0.62"/>
        <path d="M70 102 C 86 86, 112 74, 132 72" stroke-width="1.8" opacity="0.45"/>
      </g>
    </svg>
  `;
}

/* The film's visibility rule is registered once for the session. It looks up
   whichever <video> is on the page at that moment, so switching language or
   theme - which re-renders the landing page - cannot leave old handlers
   behind that resume a detached element. */
function initFilmVisibility() {
  if (initFilmVisibility.ready) return;
  initFilmVisibility.ready = true;
  document.addEventListener("visibilitychange", () => {
    const video = document.getElementById("hero-video");
    if (!video || !video.isConnected) return;
    if (document.hidden) {
      video.pause();
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const attempt = video.play();
    if (attempt && attempt.catch) attempt.catch(() => {});
  });
}

function wireScreen(screen, dict, state) {
  const go = (to) => {
    if (to !== state.screen) state.prev = state.screen;
    state.screen = to;
    state.otpCode = "";
    try {
      history.replaceState(null, "", "#/" + to);
    } catch (err) {
      /* ignore */
    }
    render();
  };

  document.querySelectorAll("[data-go]").forEach(el => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      go(el.getAttribute("data-go"));
    });
  });

  root.onclick = (e) => {
    const trigger = e.target.closest && e.target.closest("[data-call]");
    if (!trigger) return;
    e.preventDefault();
    openCallSheet(
      trigger.getAttribute("data-call"),
      trigger.getAttribute("data-call-name") || "",
      dict
    );
  };

  if (screen === "find") wireNearby("hospital", dict);
  if (screen === "pharmacy") wireNearby("pharmacy", dict);
  if (screen === "police") wireNearby("police", dict);
  if (screen === "sos") wireSos(dict);
  if (screen === "directory") wireDirectory(dict, state);
  if (screen === "need") wireNeedHelp(dict, state);
  if (screen === "status") wireStatus(dict, state);
  if (screen === "offer") wireOfferHelp(dict, state);

  document.querySelectorAll(".category-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const list = btn.nextElementSibling;
      if (!list) return;
      const isHidden = list.hasAttribute("hidden");
      if (isHidden) {
        list.removeAttribute("hidden");
        btn.setAttribute("aria-expanded", "true");
      } else {
        list.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  });

  if (screen === "otp") {
    document.getElementById("resend-code")?.addEventListener("click", (e) => {
      e.preventDefault();
      state.otpCode = SIGN_IN_CODE;
      flashOk(dict.otpSent);
    });
    document.getElementById("otp-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const code = (new FormData(e.target).get("code") || "").trim();
      if (code.length !== 6) {
        flashError(dict.errorOtpBad);
        return;
      }
      if (code !== SIGN_IN_CODE) {
        flashError(dict.errorOtpBad);
        return;
      }
      state.otpCode = code;
      go("register");
    });
  }

  if (screen === "register") {
    document.getElementById("register-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const password = String(data.get("password") || "");
      const pin = String(data.get("pin") || "").trim();
      const pinConfirm = String(data.get("pinConfirm") || "").trim();

      if (password.length < 8) {
        flashError(dict.errorPasswordShort);
        return;
      }
      if (/^(.)\1+$/.test(password)) {
        flashError(dict.errorPasswordWeak);
        return;
      }
      if (!/^\d{4,6}$/.test(pin)) {
        flashError(dict.errorPinShort);
        return;
      }
      if (pin !== pinConfirm) {
        flashError(dict.errorPinMismatch);
        return;
      }
      go("me");
    });
  }

  if (screen === "login") {
    document.getElementById("login-form")?.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = String(new FormData(e.target).get("phone") || "").trim();
      if (!/^\+?\d{8,15}$/.test(phone.replace(/[\s-]/g, ""))) {
        flashError(dict.errorBadPhone);
        return;
      }
      state.phone = phone;
      go("otp");
    });
  }

  if (screen === "me") {
    document.getElementById("signout-btn")?.addEventListener("click", () => {
      state.phone = "";
      state.otpCode = "";
      state.prev = "landing";
      state.screen = "landing";
      render();
    });
    document.getElementById("pin-signin-btn")?.addEventListener("click", () => go("login"));
    document.getElementById("lang-me-toggle")?.addEventListener("click", () => {
      state.locale = state.locale === "hi" ? "en" : "hi";
      render();
    });
  }

  const reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (!("IntersectionObserver" in window)) {
      reveals.forEach(el => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.06 });
      reveals.forEach(el => io.observe(el));
    }
    setTimeout(() => reveals.forEach(el => el.classList.add("is-in")), 900);
  }

  if (screen === "landing") {
    const video = document.getElementById("hero-video");
    if (video) {
      const source = video.querySelector("source");
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let index = 0;
      const start = () => {
        const attempt = video.play();
        if (attempt && attempt.catch) attempt.catch(() => {});
      };
      const show = (next) => {
        index = next % FILM_CLIPS.length;
        if (source) source.src = FILM_CLIPS[index];
        video.load();
        start();
      };
      video.addEventListener("ended", () => show(index + 1));
      video.addEventListener("loadeddata", () => {
        if (!reduce) start();
      });
      initFilmVisibility();
      if (!reduce) start();
    }
  }

  if (screen === "sketch") {
    document.querySelectorAll("[data-sketch]").forEach(card => {
      card.addEventListener("click", () => {
        state.sketchId = card.getAttribute("data-sketch");
        state.paint = {};
        state.history = [];
        render();
      });
    });

    document.getElementById("sketch-back")?.addEventListener("click", () => {
      state.sketchId = null;
      state.paint = {};
      state.history = [];
      render();
    });

    const stage = document.querySelector(".sketch-stage");
    stage?.addEventListener("click", (e) => {
      const region = e.target.closest(".region");
      if (!region) return;
      const id = region.getAttribute("data-region");
      if (!id) return;
      state.history.push({ ...state.paint });
      if (state.history.length > 40) state.history.shift();
      state.paint[id] = state.color;
      region.setAttribute("fill", state.color);
    });

    document.querySelectorAll(".swatch").forEach(sw => {
      sw.addEventListener("click", () => {
        state.color = sw.getAttribute("data-color");
        document.querySelectorAll(".swatch").forEach(o => {
          o.setAttribute("aria-pressed", String(o === sw));
        });
      });
    });

    document.getElementById("sketch-undo")?.addEventListener("click", () => {
      const prev = state.history.pop();
      state.paint = prev ? { ...prev } : {};
      applyPaint(state.paint);
    });

    document.getElementById("sketch-clear")?.addEventListener("click", () => {
      state.history.push({ ...state.paint });
      state.paint = {};
      applyPaint(state.paint);
    });

    document.getElementById("sketch-save")?.addEventListener("click", () => saveSketch(dict));
  }
}

let flashTimer = null;
function showFlash(msg, cls) {
  const wrap = root.querySelector(".card") || root;
  const flash = document.createElement("div");
  flash.className = `flash ${cls}`;
  flash.setAttribute("role", "status");
  flash.textContent = msg;
  wrap.prepend(flash);
  if (flashTimer) clearTimeout(flashTimer);
  flashTimer = setTimeout(() => flash.remove(), 2400);
}
function flashError(msg) {
  showFlash(msg, "error");
}
function flashOk(msg) {
  showFlash(msg, "ok");
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

document.getElementById("lang-toggle")?.addEventListener("click", () => {
  state.locale = state.locale === "hi" ? "en" : "hi";
  render();
});

const SCREENS = ["landing", "login", "otp", "register", "me", "resources", "emergency", "directory", "need", "status", "offer", "sketch", "aid", "about", "operations", "service-status", "terms", "sdg", "initiatives", "careers", "contact", "find", "sos", "services", "ambulance", "air-ambulance", "pharmacy", "police", "advice", "medicines", "insurance", "research", "videos"];

/* The landing film: four clips, played one after another. */
const FILM_CLIPS = [
  "assets/sarvseva-intro.mp4",
  "assets/sarvseva-film-call.mp4",
  "assets/sarvseva-film-find.mp4",
  "assets/sarvseva-film-wait.mp4"
];

/* Reading list for the First aid tab. Curated, never fetched - each entry
   carries the month it was last checked. */
const AID_RESEARCH = [
  {
    date: "Nov 2026",
    source: "Indian Red Cross Society",
    titleEn: "Indian First Aid Manual, 7th edition",
    titleHi: "भारतीय प्राथमिक चिकित्सा नियमावली, 7वाँ संस्करण",
    noteEn: "The reference the country's Red Cross trainers teach from. The steps in this tab follow its order.",
    noteHi: "देश के रेड क्रॉस प्रशिक्षक इसी नियमावली से पढ़ाते हैं। इस टैब के चरण उसी क्रम में हैं।",
    url: "https://www.indianredcross.org/ircs/program/firstaid"
  },
  {
    date: "Nov 2026",
    source: "World Health Organization",
    titleEn: "Emergency care",
    titleHi: "आपातकालीन देखभाल",
    noteEn: "Bystander first aid and a working ambulance number decide survival more often than hospital care does.",
    noteHi: "आस-पास का प्राथमिक उपचार और चलने वाला एम्बुलेंस नंबर, अस्पताल के इलाज से ज़्यादा बार जान बचाते हैं।",
    url: "https://www.who.int/health-topics/emergency-care"
  },
  {
    date: "Nov 2026",
    source: "World Health Organization",
    titleEn: "Road traffic injuries",
    titleHi: "सड़क दुर्घटना की चोटें",
    noteEn: "India carries a large share of the world's road deaths. Helmets and stopping bleeding fast are the two things this tab can change.",
    noteHi: "दुनिया की सड़क मौतों में भारत का बड़ा हिस्सा है। हेलमेट और तुरंत खून रोकना - यह टैब इन्हीं दो पर काम करता है।",
    url: "https://www.who.int/news-room/fact-sheets/detail/road-traffic-injuries"
  },
  {
    date: "Nov 2026",
    source: "Ministry of Health and Family Welfare",
    titleEn: "Health advisories",
    titleHi: "स्वास्थ्य सलाह",
    noteEn: "Outbreak, heatwave and monsoon advisories are published here first. Worth checking before trusting a forwarded message.",
    noteHi: "बीमारी, लू और मानसून की सलाह पहले यहीं छपती है। फ़ॉरवर्ड किए संदेश पर भरोसा करने से पहले देख लें।",
    url: "https://www.mohfw.gov.in/"
  },
  {
    date: "Nov 2026",
    source: "ICMR",
    titleEn: "Standard treatment guidelines",
    titleHi: "मानक उपचार दिशानिर्देश",
    noteEn: "Includes the national snakebite management guidance, which is where the bite advice in this tab comes from.",
    noteHi: "इसमें सांप के काटने पर राष्ट्रीय दिशानिर्देश हैं, जिनसे इस टैब के निर्देश लिए गए हैं।",
    url: "https://www.icmr.gov.in/"
  }
];

/* Videos open on YouTube, so the app ships no player of its own. */
const AID_VIDEOS = [
  { id: "fwoz2ETqRWc", channel: "Varsha Nursing Academy", titleEn: "CPR, step by step (Hindi)", titleHi: "सीपीआर: चरण-दर-चरण (हिंदी)" },
  { id: "S7Es7volhYY", channel: "Merquri Medica", titleEn: "CPR and AED (Hindi)", titleHi: "सीपीआर और एईडी (हिंदी)" },
  { id: "ezwuwZtmZ-k", channel: "Indian Resuscitation Council", titleEn: "BCLS: India's CPR guidelines", titleHi: "बीसीएलएस: भारत के सीपीआर दिशानिर्देश" },
  { id: "8R3RWC-xx1I", channel: "American Red Cross", titleEn: "Adult choking: back blows and thrusts", titleHi: "घुटन: पीठ पर थपकी और पेट दबाव" },
  { id: "YJB3fI3T1oo", channel: "American Red Cross", titleEn: "Severe bleeding: direct pressure", titleHi: "तेज़ खून बहना: सीधा दबाव" },
  { id: "IOtnGl_9-qw", channel: "British Red Cross", titleEn: "Burns and scalds: cool for 20 minutes", titleHi: "जलना: 20 मिनट ठंडा पानी" },
  { id: "JBKf4ZgrlXg", channel: "Manipal Hospitals", titleEn: "Snakebite: what to do, what to avoid", titleHi: "सांप का काटना: क्या करें, क्या न करें" }
];

function screenFromHash() {
  const name = String(location.hash || "").replace(/^#\/?/, "");
  return SCREENS.includes(name) ? name : "landing";
}

window.addEventListener("hashchange", () => {
  const next = screenFromHash();
  if (next !== state.screen) {
    state.prev = state.screen;
    state.screen = next;
    render();
  }
});

try {
  const saved = localStorage.getItem("sarvseva-theme");
  if (saved === "light" || saved === "dark") state.theme = saved;
} catch (err) {
  /* storage unavailable */
}
applyTheme(state.theme);
initChrome();

state.screen = screenFromHash();
if (state.screen === "me" && !state.phone) state.phone = "+91 98765 43210";
render();

/* ------------------------------------------------------------------
   Phase 0: offline shell and connectivity status
   ------------------------------------------------------------------ */
const netStatusEl = document.getElementById("net-status");

function syncNetStatus() {
  if (!netStatusEl) return;
  const offline = !navigator.onLine;
  const hindi = document.documentElement.lang === "hi";
  netStatusEl.hidden = !offline;
  netStatusEl.textContent = offline
    ? hindi
      ? "आप ऑफ़लाइन हैं — सहेजा हुआ कॉन्टेंट दिख रहा है। आप जो लिखेंगे वह इस फ़ोन में सहेजा जाएगा, अभी किसी को नहीं भेजा जाएगा।"
      : "You are offline — showing saved content. Anything you write is saved on this phone, not sent to anyone yet."
    : "";
}

window.addEventListener("online", syncNetStatus);
window.addEventListener("offline", syncNetStatus);

const langToggleEl = document.getElementById("lang-toggle");
if (langToggleEl) {
  langToggleEl.addEventListener("click", () => setTimeout(syncNetStatus, 0));
}

syncNetStatus();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {});
  });
}

/* ------------------------------------------------------------------
   Opening splash: hold the home screen until the scene has played
   ------------------------------------------------------------------ */
function initSplash() {
  const splash = document.getElementById("splash");
  if (!splash) return;

  const behind = [".site-header", "#main", ".site-footer", ".dock"]
    .map(selector => document.querySelector(selector))
    .filter(Boolean);
  behind.forEach(el => el.setAttribute("inert", ""));
  document.body.classList.add("splash-open");
  try {
    splash.focus({ preventScroll: true });
  } catch (err) {
    /* focus is a nicety */
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let closed = false;

  const close = () => {
    if (closed) return;
    closed = true;
    splash.classList.add("is-leaving");
    behind.forEach(el => el.removeAttribute("inert"));
    document.body.classList.remove("splash-open");
    window.setTimeout(() => splash.remove(), reduce ? 180 : 520);
  };

  splash.addEventListener("click", close);
  splash.addEventListener("keydown", close);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" || event.key === "Enter" || event.key === " ") close();
  });
  window.setTimeout(close, reduce ? 900 : 2500);
}

initSplash();
startRetryWatcher();
