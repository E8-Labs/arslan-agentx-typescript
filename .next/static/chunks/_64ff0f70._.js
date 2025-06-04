(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/constants/Constants.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AgentLLmModels": (()=>AgentLLmModels),
    "Constants": (()=>Constants),
    "HowtoVideos": (()=>HowtoVideos),
    "PersistanceKeys": (()=>PersistanceKeys),
    "fromatMessageName": (()=>fromatMessageName),
    "isValidUrl": (()=>isValidUrl),
    "isValidYoutubeUrl": (()=>isValidYoutubeUrl)
});
const PersistanceKeys = {
    LocalStorageUser: "User",
    LocalSavedAgentDetails: "agentDetails",
    LocalStorageUserLocation: "userLocation",
    LocalStorageCompleteLocation: "CompleteLocation",
    LeadsInBatch: "LeadsInBatch",
    CallsInBatch: "CallsInBatch",
    LocalStorageCampaignee: "CampaigneeSaved",
    LocalStoragePipelines: "LocalStoragePipelines",
    RegisterDetails: "registerDetails",
    LocalStoredAgentsListMain: "localAgentDetails",
    LocalStorageSubPlan: "subPlan",
    LocalAllCalls: "LocalAllCalls",
    LocalScheduleCalls: "LocalScheduleCalls",
    LocalActiveCalls: "LocalActiveCalls",
    LocalVerificationCodes: "LocalVerificationCodes",
    LocalAffiliates: "LocalAffiliates",
    TestAiCredentials: "TestAiCredentials",
    GlobalSupportUrl: "https://api.leadconnectorhq.com/widget/bookings/yk4um7vhmtrv4uaxmqpr",
    GlobalConsultationUrl: "https://api.leadconnectorhq.com/widget/booking/F1DtpvAR8fNf3RJM1akZ",
    GlobalWebinarUrl: "https://api.leadconnectorhq.com/widget/bookings/yk4um7vhmtrv4uaxmqpr",
    ExternalCalendarLink: "https://api.leadconnectorhq.com/widget/bookings/agentx/enterprise-plan",
    SupportWebinarUrl: "https://api.leadconnectorhq.com/widget/bookings/noah-support-webinar"
};
const HowtoVideos = {
    Calendar: "https://www.blindcircle.com/agentxtest/uploads/howtos/2025-01-20_e98d0d1c-37ec-4989-8933-64a8c5df607f_howtos_Calendar",
    GettingStarted: "https://www.blindcircle.com/agentx/uploads/howtos/2025-01-20_3624c268-98ce-4a15-aeac-6f3bb7f67232_howtos_Getting_Started",
    KycQuestions: "https://www.blindcircle.com/agentx/uploads/howtos/2025-01-20_172645a9-7efe-4046-93f4-a227b2f4b56a_howtos_Kyc",
    Leads: "https://www.blindcircle.com/agentx/uploads/howtos/2025-01-20_64d906a8-b40a-421d-923b-cf1efb352d21_howtos_Leads",
    LetsTalkDigits: "https://www.blindcircle.com/agentx/uploads/howtos/2025-01-20_ddcecf9b-f489-43d3-bd7f-b0d13cf98644_howtos_LetsTalkDigits",
    Pipeline: "https://www.blindcircle.com/agentx/uploads/howtos/2025-01-20_497e2da3-8f32-44f2-b9ee-7231fa31e4cf_howtos_Pipeline",
    script: "https://www.blindcircle.com/agentx/uploads/howtos/2025-01-26_3ba0f5f5-3e15-4c6e-a9ce-1470fc0539b7_howtos_Leads"
};
const Constants = {
    GlobalPhoneNumber: "+16505403715"
};
const isValidUrl = (url)=>{
    const urlPattern = /^(https?:\/\/)?([\w-]+\.)+[a-zA-Z]{2,63}(\/[\w\-.\/?%&=]*)?$/;
    return urlPattern.test(url);
};
const isValidYoutubeUrl = (url)=>{
    const urlPattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})(.*)$/;
    return urlPattern.test(url);
};
const fromatMessageName = (name)=>{
    const formatedName = name?.slice(0, 1).toUpperCase() + name?.slice(1);
    return formatedName;
};
const AgentLLmModels = {
    Gpt4o: "gpt-4o",
    Gpt4oMini: "gpt-4-turbo",
    synthflow: "synthflow"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/constants/UserTypes.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "UserTypes": (()=>UserTypes)
});
const UserTypes = {
    RealEstateAgent: "RealEstateAgent",
    SolarRep: "SolarRep",
    SalesDevRep: "SalesDevRep",
    MarketerAgent: "MarketerAgent",
    WebsiteAgent: "WebsiteAgent",
    InsuranceAgent: "InsuranceAgent",
    RecruiterAgent: "RecruiterAgent",
    TaxAgent: "TaxAgent",
    DebtCollectorAgent: "DebtCollectorAgent",
    MedSpaAgent: "MedSpaAgent",
    LoanOfficerAgent: "LoanOfficerAgent",
    LawAgent: "LawAgent"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utilities/AgentServices.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AgentServices": (()=>AgentServices),
    "GetServicesForUser": (()=>GetServicesForUser)
});
const AgentServices = [
    {
        id: 1,
        title: "Qualify Buyer & Sellers",
        description: "Determine if the person is a qualified buyer/seller, if pre-qualified, or working with agent.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 2,
        title: "Follow up and Nurture",
        description: "Engage in conversation to build a dialogue with customers.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 3,
        title: "Property Search & Selection",
        description: "Provide access to properties matching the criteria and arrange property viewings.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 4,
        title: "Financing Assistant",
        description: "Assist in providing mortgage financing insights. Provide information on available financing options.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 5,
        title: "Market Analysis & Advice",
        description: "Offer insights into market trends and property values. Provide advice on the local property market.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 6,
        title: "Property Valuation & Pricing Strategy",
        description: "Conduct a Comparative Market Analysis (CMA) to determine the market value.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 7,
        title: "Customer Service",
        description: "Keep clients informed throughout the process. Address questions and concerns promptly.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 8,
        title: "Closing Assistance",
        description: "Ensure all necessary documents and steps are taken to a close the deal in a proper fashion.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 100,
        title: "Policy Qualification",
        description: "Determine if the client qualifies for specific insurance products and understands their current insurance needs.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 102,
        title: "Coverage Consultation",
        description: "Explain various coverage options, helping clients choose the best policies based on their needs.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 103,
        title: "Claims Assistance",
        description: "Guide clients through the claims process, ensuring they understand required documentation and timelines.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 104,
        title: "Renewal Reminders & Upselling",
        description: "Alert clients about policy renewals and discuss new coverage options or upgrades.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 105,
        title: "Risk Assessment & Prevention",
        description: "Offer advice on risk management and preventative measures, such as health screenings or safety upgrades.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 106,
        title: "Market Trends & Rates",
        description: "Provide insights on industry trends, rate changes, and factors influencing premiums.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 107,
        title: "Cross-Selling Opportunities",
        description: "Identify chances to offer additional policies, like bundling life, health, and property insurance.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 108,
        title: "Policy Support & Customer Service",
        description: "Assist with policy adjustments, answer questions, and address concerns promptly.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 201,
        title: "Lead Qualification",
        description: "Determine if potential clients meet basic criteria for solar installation, including property ownership, energy usage, and interest in renewable energy.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 202,
        title: "Financing Consultation",
        description: "Provide information on financing options, tax incentives, and grants available for solar energy installations.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 203,
        title: "Installation Guidance",
        description: "Explain the installation process, timelines, and expected outcomes.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 204,
        title: "Energy Savings Estimate",
        description: "Help clients understand potential savings on energy bills and return on investment over time.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 205,
        title: "Site Assessment Assistance",
        description: "Arrange preliminary assessments and surveys to check for solar viability at the client's property.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 206,
        title: "Post-Installation Support",
        description: "Offer support in monitoring and maintenance after installation.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 207,
        title: "Solar Panel Maintenance Education",
        description: "Educate clients on panel maintenance to ensure optimal energy generation.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 208,
        title: "Industry Insights & Trend",
        description: "Provide updates on the latest advancements in solar technology and renewable energy trends.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 301,
        title: "Lead Qualification",
        description: "Identify and qualify inbound and outbound leads based on ideal customer profiles.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 302,
        title: "Appointment Setting",
        description: "Assist in scheduling discovery or demo calls with interested leads for account executives.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 303,
        title: "Nurture Campaigns",
        description: "Engage in nurturing leads over time, keeping prospects warm until they're ready to engage further.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 304,
        title: "Pipeline Management",
        description: "Track and manage interactions with prospects to keep the pipeline organized and up-to-date.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 305,
        title: "Customer Pain Point Identification",
        description: "Help identify and log common pain points that prospects mention during interactions.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 306,
        title: "Objection Handling",
        description: "Provide guidance on handling common objections and effectively moving conversations forward.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 401,
        title: "Audience Segmentation and Targeting",
        description: "Identify and segment your ideal audience for precise targeting.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 402,
        title: "First to lead",
        description: "Quickly contact a lead in seconds to qualify and process them through your funnel.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 403,
        title: "Lead Scoring and Qualification",
        description: "Analyze and score leads based on engagement to prioritize high-quality prospects.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 404,
        title: "A/B Testing and Campaign Optimization",
        description: "Run A/B tests and receive insights on optimizing campaigns for better performance.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 405,
        title: "Customer Engagement Insights",
        description: "Track and analyze how customers engage with your campaigns to refine strategies.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 406,
        title: "Analytics and Reporting",
        description: "Provide in-depth reports on campaign performance to inform future strategy.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 407,
        title: "Cross-Channel Coordination",
        description: "Ensure coordinated messaging across different platforms (email, social media, SMS, calls.).",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 501,
        title: "Lead Generation and Qualification",
        description: "Convert website visitors into leads by engaging them and qualifying their interest in your products or services.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 502,
        title: "Product or Service Recommendations",
        description: "Help visitors find the right products or services based on their needs and preferences.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 503,
        title: "Customer Support and FAQs",
        description: "Provide instant answers to frequently asked questions and assist with troubleshooting or support inquiries.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 504,
        title: "Order Assistance",
        description: "Guide customers through the purchasing process, including order placements, tracking, and modifications.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 505,
        title: "Appointment or Demo Scheduling",
        description: "Allow customers to schedule appointments, consultations, or demos directly through the website.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 506,
        title: "Cross-Selling and Upselling",
        description: "Suggest related products or upgrades based on customer interest or purchase history.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 507,
        title: "Account Management",
        description: "Assist customers with account setup, login issues, and profile updates.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 508,
        title: "Customer Feedback Collection",
        description: "Gather feedback and reviews on customer experience or recent purchases.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 601,
        title: "Candidate Sourcing",
        description: "Identify and attract qualified candidates for open positions.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 602,
        title: "Resume Screening",
        description: "Assist in reviewing resumes to shortlist potential candidates.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 603,
        title: "Interview Coordination",
        description: "Schedule and manage interviews between candidates and hiring managers.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 604,
        title: "Job Description Creation",
        description: "Help craft effective job descriptions to attract the right talent.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 605,
        title: "Talent Pipeline Development",
        description: "Build and maintain a pool of potential candidates for future roles.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 606,
        title: "Employer Branding",
        description: "Enhance your company's reputation to attract top talent.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 607,
        title: "Onboarding Assistance",
        description: "Support new hires through the onboarding process.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 608,
        title: "Diversity Recruitment Strategies",
        description: "Develop strategies to attract a diverse workforce.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "RecruiterAgent"
    },
    {
        id: 701,
        title: "Tax Consultation",
        description: "Assist clients in understanding their tax obligations, credits, and deductions.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 702,
        title: "Tax Preparation",
        description: "Help clients gather necessary documentation and prepare their tax returns.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 703,
        title: "Tax Resolution Services",
        description: "Provide support for resolving tax issues, such as audits or unpaid taxes.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 704,
        title: "Business Tax Services",
        description: "Assist small businesses with payroll, sales tax, and quarterly filings.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 705,
        title: "Industry-Specific Tax Solutions",
        description: "Provide expertise tailored to specific industries (e.g., real estate, healthcare).",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 706,
        title: "Compliance Education",
        description: "Educate clients on maintaining compliance with changing tax laws and regulations.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 707,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 20:00:41",
        updatedAt: "2025-01-16 20:00:41",
        agentType: "RealEstateAgent",
        userId: 116.0
    },
    {
        id: 708,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 20:00:41",
        updatedAt: "2025-01-16 20:00:41",
        agentType: "RealEstateAgent",
        userId: 116.0
    },
    {
        id: 709,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 20:00:41",
        updatedAt: "2025-01-16 20:00:41",
        agentType: "RealEstateAgent",
        userId: 116.0
    },
    {
        id: 710,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 21:02:12",
        updatedAt: "2025-01-16 21:02:12",
        agentType: "RealEstateAgent",
        userId: 117.0
    },
    {
        id: 711,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 21:02:12",
        updatedAt: "2025-01-16 21:02:12",
        agentType: "RealEstateAgent",
        userId: 117.0
    },
    {
        id: 712,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 21:10:04",
        updatedAt: "2025-01-16 21:10:04",
        agentType: "RealEstateAgent",
        userId: 118.0
    },
    {
        id: 713,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 21:10:04",
        updatedAt: "2025-01-16 21:10:04",
        agentType: "RealEstateAgent",
        userId: 118.0
    },
    {
        id: 714,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 21:10:04",
        updatedAt: "2025-01-16 21:10:04",
        agentType: "RealEstateAgent",
        userId: 118.0
    },
    {
        id: 715,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 21:14:33",
        updatedAt: "2025-01-16 21:14:33",
        agentType: "RealEstateAgent",
        userId: 119.0
    },
    {
        id: 716,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 21:14:33",
        updatedAt: "2025-01-16 21:14:33",
        agentType: "RealEstateAgent",
        userId: 119.0
    },
    {
        id: 717,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:40:38",
        updatedAt: "2025-01-16 23:40:38",
        agentType: "RealEstateAgent",
        userId: 120.0
    },
    {
        id: 718,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:40:38",
        updatedAt: "2025-01-16 23:40:38",
        agentType: "RealEstateAgent",
        userId: 120.0
    },
    {
        id: 719,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:40:38",
        updatedAt: "2025-01-16 23:40:38",
        agentType: "RealEstateAgent",
        userId: 120.0
    },
    {
        id: 720,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:40:46",
        updatedAt: "2025-01-16 23:40:46",
        agentType: "RealEstateAgent",
        userId: 121.0
    },
    {
        id: 721,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:40:46",
        updatedAt: "2025-01-16 23:40:46",
        agentType: "RealEstateAgent",
        userId: 121.0
    },
    {
        id: 722,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:40:46",
        updatedAt: "2025-01-16 23:40:46",
        agentType: "RealEstateAgent",
        userId: 121.0
    },
    {
        id: 723,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:40:55",
        updatedAt: "2025-01-16 23:40:55",
        agentType: "RealEstateAgent",
        userId: 122.0
    },
    {
        id: 724,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:40:55",
        updatedAt: "2025-01-16 23:40:55",
        agentType: "RealEstateAgent",
        userId: 122.0
    },
    {
        id: 725,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:40:55",
        updatedAt: "2025-01-16 23:40:55",
        agentType: "RealEstateAgent",
        userId: 122.0
    },
    {
        id: 726,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 727,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 728,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 729,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 730,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 731,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 732,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 733,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 734,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 735,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 736,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 737,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 738,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 739,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:42:13",
        updatedAt: "2025-01-16 23:42:13",
        agentType: "RealEstateAgent",
        userId: 124.0
    },
    {
        id: 740,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:42:13",
        updatedAt: "2025-01-16 23:42:13",
        agentType: "RealEstateAgent",
        userId: 124.0
    },
    {
        id: 741,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:42:13",
        updatedAt: "2025-01-16 23:42:13",
        agentType: "RealEstateAgent",
        userId: 124.0
    },
    {
        id: 742,
        title: "Other",
        description: "[",
        createdAt: "2025-01-17 14:21:53",
        updatedAt: "2025-01-17 14:21:53",
        agentType: "RealEstateAgent",
        userId: 125.0
    },
    {
        id: 743,
        title: "Other",
        description: ",",
        createdAt: "2025-01-17 14:21:53",
        updatedAt: "2025-01-17 14:21:53",
        agentType: "RealEstateAgent",
        userId: 125.0
    },
    {
        id: 744,
        title: "Other",
        description: "]",
        createdAt: "2025-01-17 14:21:53",
        updatedAt: "2025-01-17 14:21:53",
        agentType: "RealEstateAgent",
        userId: 125.0
    },
    {
        id: 745,
        title: "Other",
        description: "[",
        createdAt: "2025-01-17 16:23:42",
        updatedAt: "2025-01-17 16:23:42",
        agentType: "RealEstateAgent",
        userId: 127.0
    },
    {
        id: 746,
        title: "Other",
        description: "]",
        createdAt: "2025-01-17 16:23:42",
        updatedAt: "2025-01-17 16:23:42",
        agentType: "RealEstateAgent",
        userId: 127.0
    },
    {
        id: 747,
        title: "Other",
        description: "[",
        createdAt: "2025-01-17 22:09:05",
        updatedAt: "2025-01-17 22:09:05",
        agentType: "RealEstateAgent",
        userId: 128.0
    },
    {
        id: 748,
        title: "Other",
        description: "]",
        createdAt: "2025-01-17 22:09:05",
        updatedAt: "2025-01-17 22:09:05",
        agentType: "RealEstateAgent",
        userId: 128.0
    },
    {
        id: 749,
        title: "Other",
        description: "[",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 750,
        title: "Other",
        description: ",",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 751,
        title: "Other",
        description: ",",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 752,
        title: "Other",
        description: ",",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 753,
        title: "Other",
        description: "]",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 754,
        title: "Other",
        description: "[",
        createdAt: "2025-01-18 17:27:14",
        updatedAt: "2025-01-18 17:27:14",
        agentType: "RealEstateAgent",
        userId: 130.0
    },
    {
        id: 755,
        title: "Other",
        description: "]",
        createdAt: "2025-01-18 17:27:14",
        updatedAt: "2025-01-18 17:27:14",
        agentType: "RealEstateAgent",
        userId: 130.0
    },
    {
        id: 756,
        title: "Other",
        description: "[",
        createdAt: "2025-01-19 10:03:36",
        updatedAt: "2025-01-19 10:03:36",
        agentType: "RealEstateAgent",
        userId: 131.0
    },
    {
        id: 757,
        title: "Other",
        description: "]",
        createdAt: "2025-01-19 10:03:36",
        updatedAt: "2025-01-19 10:03:36",
        agentType: "RealEstateAgent",
        userId: 131.0
    },
    {
        id: 758,
        title: "Other",
        description: "[",
        createdAt: "2025-01-19 13:56:22",
        updatedAt: "2025-01-19 13:56:22",
        agentType: "RealEstateAgent",
        userId: 132.0
    },
    {
        id: 759,
        title: "Other",
        description: "]",
        createdAt: "2025-01-19 13:56:22",
        updatedAt: "2025-01-19 13:56:22",
        agentType: "RealEstateAgent",
        userId: 132.0
    },
    {
        id: 760,
        title: "Other",
        description: "[",
        createdAt: "2025-01-19 14:41:16",
        updatedAt: "2025-01-19 14:41:16",
        agentType: "RealEstateAgent",
        userId: 133.0
    },
    {
        id: 761,
        title: "Other",
        description: "]",
        createdAt: "2025-01-19 14:41:16",
        updatedAt: "2025-01-19 14:41:16",
        agentType: "RealEstateAgent",
        userId: 133.0
    }
];
function GetServicesForUser(type) {
    let services = [];
    for (const service of AgentServices){
        if (service.agentType == type) {
            services.push(service);
        }
    }
    return services;
}
_c = GetServicesForUser;
var _c;
__turbopack_context__.k.register(_c, "GetServicesForUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utilities/AreaOfFocus.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AreaOfFocus": (()=>AreaOfFocus),
    "GetAreasOfFocusForUser": (()=>GetAreasOfFocusForUser)
});
const AreaOfFocus = [
    {
        id: 1,
        title: "Commercial real estate",
        description: "Dealing with offices, retail spaces, and industrial properties.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 2,
        title: "Residential real estate",
        description: "Buying and selling residential properties in my surrounding territory.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 3,
        title: "Investment Property",
        description: "Helping clients invest in income-generating properties.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 4,
        title: "Land broker",
        description: "Specializing in the sale of undeveloped land.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 5,
        title: "Sales associate",
        description: "Selling newly built homes for builders and developers.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 6,
        title: "Relocation consultant",
        description: "Assisting people with finding homes when they relocate.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 7,
        title: "Real estate management",
        description: "Managing properties, including leasing and maintenance.",
        createdAt: "2024-11-23 09:31:01",
        updatedAt: "2024-11-23 09:31:01",
        agentType: "RealEstateAgent"
    },
    {
        id: 401,
        title: "Personal Insurance",
        description: "Auto, home, or renters insurance",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 402,
        title: "Health & Medical Insurance",
        description: "Individual or group health coverage plans",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 403,
        title: "Life Insurance",
        description: "Term, whole, or universal life policies",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 404,
        title: "Commercial Insurance",
        description: "Business liability, workers' compensation, property coverage",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 405,
        title: "Disability Insurance",
        description: "Short-term and long-term disability coverage",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 406,
        title: "Retirement & Financial Planning",
        description: "Annuities, long-term savings, retirement policies",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 407,
        title: "Specialized Insurance",
        description: "High-value items, travel, event, or unique risk policies",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "InsuranceAgent"
    },
    {
        id: 501,
        title: "Residential Solar Installations",
        description: "Providing solar solutions for individual homeowners.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 502,
        title: "Commercial Solar Projects",
        description: "Installing solar systems for businesses, offices, or industrial properties.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 503,
        title: "Community Solar Projects",
        description: "Working with community solar gardens or shared solar projects.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 504,
        title: "Off-Grid Solar Solutions",
        description: "Offering independent, off-grid systems for remote or rural clients.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 505,
        title: "Solar Panel Leasing",
        description: "Providing leasing options for clients not ready to purchase.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 506,
        title: "Solar Battery Storage",
        description: "Focusing on solar-plus-storage systems.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SolarRep"
    },
    {
        id: 507,
        title: "Others (Type in)",
        description: "Type here...",
        createdAt: "2024-12-26 13:35:51",
        updatedAt: "2024-12-26 13:35:51",
        agentType: "SolarRep"
    },
    {
        id: 601,
        title: "Inbound Sales Development",
        description: "Responding to and qualifying inbound inquiries.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 602,
        title: "Outbound Prospecting",
        description: "Cold calling and cold outreach to generate interest.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 603,
        title: "SMB or Mid-Market Focus",
        description: "Primarily selling to small to mid-sized businesses.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 604,
        title: "Enterprise Sales Development",
        description: "Targeting large, complex organizations with long sales cycles.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 605,
        title: "Partnership Development",
        description: "Developing relationships with potential partners for co-marketing or reselling.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 606,
        title: "Vertical or Industry-Specific Sales",
        description: "Focusing on a specific industry, such as healthcare, finance, or technology.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "SalesDevRep"
    },
    {
        id: 701,
        title: "Content Marketing",
        description: "Creating valuable content to attract and engage audiences.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 702,
        title: "Email Marketing",
        description: "Managing email campaigns for lead nurturing and customer retention.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 703,
        title: "Social Media Marketing",
        description: "Leveraging social media channels for brand awareness and engagement.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 704,
        title: "Paid Advertising",
        description: "Running ads across channels like Google, Facebook, LinkedIn, etc.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 705,
        title: "Product Launches and Promotions",
        description: "Planning and executing product releases and promotions.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 706,
        title: "SEO and Organic Growth",
        description: "Driving traffic through organic search and content optimization.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 707,
        title: "Customer Retention and Loyalty",
        description: "Focusing on strategies to increase customer retention and loyalty.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 708,
        title: "Lead Generation and Conversion",
        description: "Designing campaigns to generate and convert leads.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "MarketerAgent"
    },
    {
        id: 801,
        title: "Sales Assistance",
        description: "Engage visitors with personalized product or service recommendations to guide them through the buying process.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 802,
        title: "Customer Service Support",
        description: "Answer FAQs, handle common support requests, and troubleshoot issues to improve customer satisfaction.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 803,
        title: "Lead Generation",
        description: "Capture lead information from visitors by qualifying their interest and scheduling follow-up actions if needed.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 804,
        title: "Engagement and Retention",
        description: "Keep visitors engaged by offering updates, special offers, or personalized content based on their interests.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 805,
        title: "Educational Support",
        description: "Provide helpful resources, tutorials, or product guides for users seeking more information or how-to content.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 806,
        title: "Feedback Collection",
        description: "Ask for feedback on customer experience, gather reviews, or identify areas for improvement.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "WebsiteAgent"
    },
    {
        id: 901,
        title: "Individual Tax Filers",
        description: "Focus on preparing personal income tax returns for individuals.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 902,
        title: "Small Businesses",
        description: "Work with businesses to prepare corporate tax filings and address related issues.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 903,
        title: "Self-Employed Professionals",
        description: "Provide services for freelancers, contractors, and gig workers.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 904,
        title: "Real Estate Investors",
        description: "Handle tax filings for property owners and real estate professionals.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 905,
        title: "High Net-Worth Individuals",
        description: "Offer specialized tax planning and preparation for wealthy clients.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 906,
        title: "Non-Profit Organizations",
        description: "Assist non-profits with tax-exempt filings and compliance.",
        createdAt: "2024-12-17 09:54:27",
        updatedAt: "2024-12-17 09:54:27",
        agentType: "TaxAgent"
    },
    {
        id: 907,
        title: "Other",
        description: "test",
        createdAt: "2025-01-11 17:37:53",
        updatedAt: "2025-01-11 17:37:53",
        agentType: "RealEstateAgent",
        userId: 88.0
    },
    {
        id: 908,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 20:00:41",
        updatedAt: "2025-01-16 20:00:41",
        agentType: "RealEstateAgent",
        userId: 116.0
    },
    {
        id: 909,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 20:00:41",
        updatedAt: "2025-01-16 20:00:41",
        agentType: "RealEstateAgent",
        userId: 116.0
    },
    {
        id: 910,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 20:00:41",
        updatedAt: "2025-01-16 20:00:41",
        agentType: "RealEstateAgent",
        userId: 116.0
    },
    {
        id: 911,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 21:02:12",
        updatedAt: "2025-01-16 21:02:12",
        agentType: "RealEstateAgent",
        userId: 117.0
    },
    {
        id: 912,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 21:02:12",
        updatedAt: "2025-01-16 21:02:12",
        agentType: "RealEstateAgent",
        userId: 117.0
    },
    {
        id: 913,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 21:10:04",
        updatedAt: "2025-01-16 21:10:04",
        agentType: "RealEstateAgent",
        userId: 118.0
    },
    {
        id: 914,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 21:10:04",
        updatedAt: "2025-01-16 21:10:04",
        agentType: "RealEstateAgent",
        userId: 118.0
    },
    {
        id: 915,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 21:10:04",
        updatedAt: "2025-01-16 21:10:04",
        agentType: "RealEstateAgent",
        userId: 118.0
    },
    {
        id: 916,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 21:14:33",
        updatedAt: "2025-01-16 21:14:33",
        agentType: "RealEstateAgent",
        userId: 119.0
    },
    {
        id: 917,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 21:14:33",
        updatedAt: "2025-01-16 21:14:33",
        agentType: "RealEstateAgent",
        userId: 119.0
    },
    {
        id: 918,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:40:38",
        updatedAt: "2025-01-16 23:40:38",
        agentType: "RealEstateAgent",
        userId: 120.0
    },
    {
        id: 919,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:40:38",
        updatedAt: "2025-01-16 23:40:38",
        agentType: "RealEstateAgent",
        userId: 120.0
    },
    {
        id: 920,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:40:38",
        updatedAt: "2025-01-16 23:40:38",
        agentType: "RealEstateAgent",
        userId: 120.0
    },
    {
        id: 921,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:40:46",
        updatedAt: "2025-01-16 23:40:46",
        agentType: "RealEstateAgent",
        userId: 121.0
    },
    {
        id: 922,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:40:46",
        updatedAt: "2025-01-16 23:40:46",
        agentType: "RealEstateAgent",
        userId: 121.0
    },
    {
        id: 923,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:40:55",
        updatedAt: "2025-01-16 23:40:55",
        agentType: "RealEstateAgent",
        userId: 122.0
    },
    {
        id: 924,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:40:55",
        updatedAt: "2025-01-16 23:40:55",
        agentType: "RealEstateAgent",
        userId: 122.0
    },
    {
        id: 925,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:40:55",
        updatedAt: "2025-01-16 23:40:55",
        agentType: "RealEstateAgent",
        userId: 122.0
    },
    {
        id: 926,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 927,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 928,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 929,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 930,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 931,
        title: "Other",
        description: "0",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 932,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:41:48",
        updatedAt: "2025-01-16 23:41:48",
        agentType: "RealEstateAgent",
        userId: 123.0
    },
    {
        id: 933,
        title: "Other",
        description: "[",
        createdAt: "2025-01-16 23:42:13",
        updatedAt: "2025-01-16 23:42:13",
        agentType: "RealEstateAgent",
        userId: 124.0
    },
    {
        id: 934,
        title: "Other",
        description: ",",
        createdAt: "2025-01-16 23:42:13",
        updatedAt: "2025-01-16 23:42:13",
        agentType: "RealEstateAgent",
        userId: 124.0
    },
    {
        id: 935,
        title: "Other",
        description: "]",
        createdAt: "2025-01-16 23:42:13",
        updatedAt: "2025-01-16 23:42:13",
        agentType: "RealEstateAgent",
        userId: 124.0
    },
    {
        id: 936,
        title: "Other",
        description: "[",
        createdAt: "2025-01-17 14:21:53",
        updatedAt: "2025-01-17 14:21:53",
        agentType: "RealEstateAgent",
        userId: 125.0
    },
    {
        id: 937,
        title: "Other",
        description: ",",
        createdAt: "2025-01-17 14:21:53",
        updatedAt: "2025-01-17 14:21:53",
        agentType: "RealEstateAgent",
        userId: 125.0
    },
    {
        id: 938,
        title: "Other",
        description: "]",
        createdAt: "2025-01-17 14:21:53",
        updatedAt: "2025-01-17 14:21:53",
        agentType: "RealEstateAgent",
        userId: 125.0
    },
    {
        id: 939,
        title: "Other",
        description: "[",
        createdAt: "2025-01-17 16:23:42",
        updatedAt: "2025-01-17 16:23:42",
        agentType: "RealEstateAgent",
        userId: 127.0
    },
    {
        id: 940,
        title: "Other",
        description: "]",
        createdAt: "2025-01-17 16:23:42",
        updatedAt: "2025-01-17 16:23:42",
        agentType: "RealEstateAgent",
        userId: 127.0
    },
    {
        id: 941,
        title: "Other",
        description: "[",
        createdAt: "2025-01-17 22:09:05",
        updatedAt: "2025-01-17 22:09:05",
        agentType: "RealEstateAgent",
        userId: 128.0
    },
    {
        id: 942,
        title: "Other",
        description: "]",
        createdAt: "2025-01-17 22:09:05",
        updatedAt: "2025-01-17 22:09:05",
        agentType: "RealEstateAgent",
        userId: 128.0
    },
    {
        id: 943,
        title: "Other",
        description: "[",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 944,
        title: "Other",
        description: ",",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 945,
        title: "Other",
        description: ",",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 946,
        title: "Other",
        description: "]",
        createdAt: "2025-01-18 01:16:59",
        updatedAt: "2025-01-18 01:16:59",
        agentType: "RealEstateAgent",
        userId: 129.0
    },
    {
        id: 947,
        title: "Other",
        description: "[",
        createdAt: "2025-01-18 17:27:14",
        updatedAt: "2025-01-18 17:27:14",
        agentType: "RealEstateAgent",
        userId: 130.0
    },
    {
        id: 948,
        title: "Other",
        description: "]",
        createdAt: "2025-01-18 17:27:14",
        updatedAt: "2025-01-18 17:27:14",
        agentType: "RealEstateAgent",
        userId: 130.0
    },
    {
        id: 949,
        title: "Other",
        description: "[",
        createdAt: "2025-01-19 10:03:36",
        updatedAt: "2025-01-19 10:03:36",
        agentType: "RealEstateAgent",
        userId: 131.0
    },
    {
        id: 950,
        title: "Other",
        description: "]",
        createdAt: "2025-01-19 10:03:36",
        updatedAt: "2025-01-19 10:03:36",
        agentType: "RealEstateAgent",
        userId: 131.0
    },
    {
        id: 951,
        title: "Other",
        description: "[",
        createdAt: "2025-01-19 13:56:22",
        updatedAt: "2025-01-19 13:56:22",
        agentType: "RealEstateAgent",
        userId: 132.0
    },
    {
        id: 952,
        title: "Other",
        description: "]",
        createdAt: "2025-01-19 13:56:22",
        updatedAt: "2025-01-19 13:56:22",
        agentType: "RealEstateAgent",
        userId: 132.0
    },
    {
        id: 953,
        title: "Other",
        description: "[",
        createdAt: "2025-01-19 14:41:16",
        updatedAt: "2025-01-19 14:41:16",
        agentType: "RealEstateAgent",
        userId: 133.0
    },
    {
        id: 954,
        title: "Other",
        description: "]",
        createdAt: "2025-01-19 14:41:16",
        updatedAt: "2025-01-19 14:41:16",
        agentType: "RealEstateAgent",
        userId: 133.0
    }
];
function GetAreasOfFocusForUser(type) {
    let services = [];
    for (const service of AreaOfFocus){
        if (service.agentType == type) {
            services.push(service);
        }
    }
    return services;
}
_c = GetAreasOfFocusForUser;
var _c;
__turbopack_context__.k.register(_c, "GetAreasOfFocusForUser");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utilities/UserUtility.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GetCampaigneeNameIfAvailable": (()=>GetCampaigneeNameIfAvailable),
    "getSupportUrlFor": (()=>getSupportUrlFor),
    "logout": (()=>logout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
;
function GetCampaigneeNameIfAvailable(window) {
    if (typeof window !== "undefined") {
        let name = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].LocalStorageCampaignee);
        return name;
    }
    return null;
}
_c = GetCampaigneeNameIfAvailable;
const getSupportUrlFor = (user)=>{
    if (user?.campaignee && user?.campaignee?.officeHoursUrl) {
        // //console.log;
        let campaigneeLink = user.campaignee.officeHoursUrl;
        return campaigneeLink;
    } else {
        return __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].GlobalSupportUrl;
        "TURBOPACK unreachable";
    }
};
function logout() {
    // localStorage.removeItem("User");
    // localStorage.removeItem("localAgentDetails");
    if (typeof document !== "undefined") {
        let userLocation = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].LocalStorageUserLocation);
        //console.log;
        localStorage.clear();
        //console.log;
        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].LocalStorageUserLocation, userLocation);
        document.cookie = "User=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
var _c;
__turbopack_context__.k.register(_c, "GetCampaigneeNameIfAvailable");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/utilities/cookies.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "setCookie": (()=>setCookie)
});
function setCookie(user, document, expiryDate = null) {
    if (typeof document === "undefined") {
        return;
    }
    if (expiryDate) {
        document.cookie = `User=${encodeURIComponent(user.id)}; path=/; expires=${expiryDate.toUTCString()}`;
    } else {
        document.cookie = `User=${encodeURIComponent(user.id)}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
    }
} // export function getCookie(user) {
 // }
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/onboarding/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Congrats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Congrats.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/UserType.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/UserService.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$FocusArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/FocusArea.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$SignUpForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/SignUpForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$InsuranceAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$SalesDevAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$SolarRepAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$MarketerAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$WebOwnersAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$RecruiterAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$TaxAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$DebtCollectorAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/DebtCollectorAgentSignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$MedSpaAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$LawAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$LoanOfficerSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$OtherDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/OtherDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/BasicDetails.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$general$2f$BackgroundVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/general/BackgroundVideo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/UserTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ErrorBoundary.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const Page = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [congratsPopup, setCongratsPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userType, setUserType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RealEstateAgent);
    const [index, setIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [userDetails, setUserDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: "",
        email: "",
        phone: ""
    });
    const [components, setComponents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$FocusArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$OtherDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ]);
    let windowSize = 1000;
    if ("TURBOPACK compile-time truthy", 1) {
        windowSize = window.innerWidth;
    }
    const handleDetails = (userName, userEmail, userPhoneNumber)=>{
        setUserDetails({
            name: userName,
            email: userEmail,
            phone: userPhoneNumber
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Page.useEffect": ()=>{
            let screenWidth = 1000;
            if ("TURBOPACK compile-time truthy", 1) {
                screenWidth = window.innerWidth;
            }
            if (screenWidth < 640) {
                let comps = getMobileComponent();
                if (userType) {
                    setComponents(comps.filter(Boolean));
                }
            } else {
                let comps = getComponentToRender();
                setComponents(comps.filter(Boolean));
            }
        }
    }["Page.useEffect"], [
        userType
    ]);
    function getComponentToRender() {
        const agentComponents = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RealEstateAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$SignUpForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].SalesDevRep]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$SalesDevAgent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].SolarRep]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$SolarRepAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].InsuranceAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$InsuranceAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].MarketerAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$MarketerAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].WebsiteAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$WebOwnersAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RecruiterAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$RecruiterAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].TaxAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$TaxAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].DebtCollectorAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$DebtCollectorAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].MedSpaAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$MedSpaAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].LawAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$LawAgentSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].LoanOfficerAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$LoanOfficerSignUp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        };
        const selectedComponent = agentComponents[userType] || __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$SignUpForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$FocusArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            selectedComponent
        ].filter(Boolean);
    }
    function getMobileComponent() {
        const agentComponents = {
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RealEstateAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].SalesDevRep]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].SolarRep]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].InsuranceAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].MarketerAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].WebsiteAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RecruiterAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].TaxAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            [__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].DebtCollectorAgent]: __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        };
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserType$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$UserService$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$FocusArea$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$BasicDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$OtherDetails$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
            __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Congrats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ].filter(Boolean);
    }
    const CurrentComp = components[index];
    const handleContinue = ()=>setIndex(index + 1);
    const handleBack = ()=>setIndex(index - 1);
    const handleWaitList = ()=>router.push("/onboarding/WaitList");
    const handleUserTypeChange = (userTypeValue)=>{
        setUserType(userTypeValue);
    };
    const backgroundImage = {
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "100svh",
        overflow: "none"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "overflow-hidden flex flex-row justify-center items-center h-[100svh]",
            children: [
                windowSize > 640 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        backgroundColor: "white",
                        zIndex: -1
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$general$2f$BackgroundVideo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 171,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 159,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CurrentComp, {
                    handleContinue: handleContinue,
                    handleBack: handleBack,
                    handleWaitList: handleWaitList,
                    handleDetails: handleDetails,
                    userDetails: userDetails,
                    setCongratsPopup: setCongratsPopup,
                    handleUserTypeChange: handleUserTypeChange
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 175,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                    open: congratsPopup,
                    closeAfterTransition: true,
                    BackdropProps: {
                        timeout: 1000,
                        sx: {
                            backgroundColor: "#00000020"
                        }
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Congrats$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 184,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/onboarding/page.tsx",
            lineNumber: 155,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/onboarding/page.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
};
_s(Page, "NFKP2CXPe1PNNlja83p9yZZGeZ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=_64ff0f70._.js.map