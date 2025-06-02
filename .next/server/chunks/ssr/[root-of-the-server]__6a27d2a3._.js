module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/components/apis/Apis.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// const BasePath = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
const BasePath = process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT === "Production" ? "https://apimyagentx.com/agentx/" : "https://apimyagentx.com/agentxtest/";
console.log("Current environment is", process.env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT);
const Apis = {
    getCalenders: `${BasePath}api/calendar/calendars`,
    register: `${BasePath}api/user/register`,
    LogIn: `${BasePath}api/user/login`,
    defaultData: `${BasePath}api/data/loadDefaualtData`,
    buildAgent: `${BasePath}api/agent/buildAgent`,
    DelAgent: `${BasePath}api/agent/deleteAgent`,
    findPhoneNumber: `${BasePath}api/agent/findPhoneNumbers`,
    purchaseNumber: `${BasePath}api/agent/purchasePhone`,
    userAvailablePhoneNumber: `${BasePath}api/agent/listUsersAvailablePhoneNumbers`,
    reassignNumber: `${BasePath}api/agent/releasePhoneNumber`,
    asignPhoneNumber: `${BasePath}api/agent/assignPhoneNumber`,
    getVoices: "https://fine-tuner.ai/api/1.1/wf/v2_voice_agent_voices",
    addKyc: `${BasePath}api/agent/addKyc`,
    deleteKyc: `${BasePath}api/agent/deleteKyc`,
    updateKYC: `${BasePath}api/agent/updateKyc`,
    getKYCs: `${BasePath}api/agent/getKycs`,
    getPipelines: `${BasePath}api/pipeline/getPipelines`,
    getPipelineById: `${BasePath}api/pipeline/getPipeline`,
    getLeadsInStage: `${BasePath}api/leads/getLeadsInStage`,
    updatePipeline: `${BasePath}api/pipeline/updatePipeline`,
    createPipeLineCadence: `${BasePath}api/pipeline/createPipelineCadence`,
    getAgentCadence: `${BasePath}api/pipeline/getAgentCadence`,
    deletePipeline: `${BasePath}api/pipeline/deletePipeline`,
    updateAgent: `${BasePath}api/agent/updateAgent`,
    updateSubAgent: `${BasePath}api/agent/updateSubAgent`,
    createLead: `${BasePath}api/leads/addLeads`,
    getLeads: `${BasePath}api/leads/getLeads`,
    getSheets: `${BasePath}api/leads/getSheets`,
    getAgents: `${BasePath}api/agent/getAgents`,
    assignLeadToPipeLine: `${BasePath}api/pipeline/assignLeadsToPipeline`,
    uniqueColumns: `${BasePath}api/leads/getUniqueColumns`,
    CheckEmail: `${BasePath}api/user/checkEmailExists`,
    CheckPhone: `${BasePath}api/user/checkPhoneNumber`,
    getCallLogs: `${BasePath}api/leads/callLogs`,
    getCallsInBatch: `${BasePath}api/pipeline/getCallsInABatch`,
    getLeadsInBatch: `${BasePath}api/pipeline/leadsInBatch`,
    getSheduledCallLogs: `${BasePath}api/pipeline/getScheduledCalls`,
    getAdminSheduledCallLogs: `${BasePath}api/admin/getScheduledCallsAdmin`,
    getAgentCallLogs: `${BasePath}api/agent/getAgentCallActivity`,
    pauseAgent: `${BasePath}api/pipeline/pauseAgentCadence`,
    resumeCalls: `${BasePath}api/pipeline/resumeAgentCadence`,
    getUniqueColumns: `${BasePath}api/leads/getUniqueColumns`,
    addSmartList: `${BasePath}api/leads/addSmartList`,
    delSmartList: `${BasePath}api/leads/deleteList`,
    addCustomStage: `${BasePath}api/pipeline/createStage`,
    deleteStage: `${BasePath}api/pipeline/deletePipelineStage`,
    UpdateStage: `${BasePath}api/pipeline/updateStage`,
    addObjectionGuardrial: `${BasePath}api/agent/addObjectionGuardRail`,
    getObjectionGuardrial: `${BasePath}api/agent/getObjectionsAndGuardrails`,
    DelObjectGuard: `${BasePath}api/agent/deleteObjectionGuardRail`,
    reorderStages: `${BasePath}api/pipeline/reorderStages`,
    createPipeLine: `${BasePath}api/pipeline/createPipeline`,
    testAI: `${BasePath}api/agent/testAi`,
    addCalender: `${BasePath}api/calendar/createCalendar`,
    addLeadNote: `${BasePath}api/leads/addLeadNote`,
    getDashboardData: `${BasePath}api/agent/dashboard`,
    delLeadTag: `${BasePath}api/leads/deleteLeadTag`,
    createSetupIntent: `${BasePath}api/user/createSetupIntent`,
    getPaymentIntent: `${BasePath}api/user/getSetupIntent`,
    addCard: `${BasePath}api/user/addPaymentMethod`,
    subscribePlan: `${BasePath}api/user/subscribePlan`,
    purchaseSupportPlan: `${BasePath}api/user/purchaseSupportPlan`,
    getLeadDetails: `${BasePath}api/leads/leadDetail`,
    getStagesList: `${BasePath}api/pipeline/getPipeline`,
    updateLeadStageApi: `${BasePath}api/leads/updateLeadStage`,
    sendVerificationCode: `${BasePath}api/user/sendVerificationCode`,
    deleteLead: `${BasePath}api/leads/deleteLead`,
    getProfileData: `${BasePath}api/user/myProfile`,
    getCardsList: `${BasePath}api/user/getPaymentMethods`,
    makeDefaultCard: `${BasePath}api/user/setDefaultPaymentMethod`,
    getPaymentHistory: `${BasePath}api/user/getTransactionsHistory`,
    cancelPlan: `${BasePath}api/user/cancelPlan`,
    redeemPlan: `${BasePath}api/user/redeemAbortCancelReward`,
    getNotifications: `${BasePath}api/user/notifications`,
    updateAgentImg: `${BasePath}api/agent/updateAgentProfileImage`,
    myApiKeys: `${BasePath}api/user/apiKeys`,
    genrateApiKey: `${BasePath}api/user/generateApiKey`,
    getImportantCalls: `${BasePath}api/leads/importantCalls`,
    updateProfileApi: `${BasePath}api/user/updateProfile`,
    getTeam: `${BasePath}api/team/getTeamMembers`,
    inviteTeamMember: `${BasePath}api/team/inviteTeamMember`,
    deleteTeamMember: `${BasePath}api/team/deleteTeamMember`,
    AssignLeadToTeam: `${BasePath}api/team/assignLeadToTeam`,
    delNumber: `${BasePath}api/agent/deletePhoneNumber`,
    calcelPlanReason: `${BasePath}api/user/addCancelPlanReason`,
    sendFeedbback: `${BasePath}api/user/sendFeedback`,
    getAiNot: `${BasePath}/api/agent/sendTestAiNotification`,
    getUsers: `${BasePath}/api/admin/users`,
    addAffiliate: `${BasePath}api/admin/addAffiliate`,
    getAffiliate: `${BasePath}api/admin/getAffiliates`,
    deleteAffiliate: `${BasePath}api/admin/deleteAffiliate`,
    adminStats: `${BasePath}api/admin/adminStats`,
    getUsersForAffiliate: `${BasePath}api/admin/usersForAffiliate`,
    AddKnowledgebase: `${BasePath}api/kb/addKnowledgebase`,
    GetKnowledgebase: `${BasePath}api/kb/getKnowledgebase`,
    deleteKnowledgebase: `${BasePath}api/kb/deleteKnowledgebase`,
    AdminAnalytics: `${BasePath}api/admin/adminAnalytics`,
    adminCallLogs: `${BasePath}api/admin/callLogsAdmin`,
    addMinutes: `${BasePath}api/admin/addMinutesToUser`,
    adminUsersWithUniquePhoneNumbers: `${BasePath}api/admin/adminUsersWithUniquePhoneNumbers`,
    adminEngagements: `${BasePath}api/admin/adminEngagements`,
    getProfileFromId: `${BasePath}api/user/getProfileFromId`,
    getUsersWithUniqueNumbers: `${BasePath}api/admin/adminUsersWithUniquePhoneNumbers`,
    getUsersWithAgents: `${BasePath}api/admin/adminUsersWithAgents`,
    getUsersWithPipelines: `${BasePath}api/admin/adminUsersWithPipelines`,
    getUsersWithLeads: `${BasePath}api/admin/adminUsersWithLeads`,
    getUsersWithTeams: `${BasePath}api/admin/adminUsersWithTeams`,
    getUsersWithCalenders: `${BasePath}api/admin/adminUsersWithCalendars`,
    deleteProfile: `${BasePath}api/user/deleteProfile`,
    deleteCalendar: `${BasePath}api/calendar/deleteCalendar`,
    getVerificationCodes: `${BasePath}api/admin/getVerificationCodes`,
    getAgentDetails: `${BasePath}api/agent/getAgentDetails`,
    setVoicemaeil: `${BasePath}api/agent/setVoicemail`,
    updateVoicemail: `${BasePath}api/agent/updateVoicemail`,
    enrichLead: `${BasePath}api/leads/enrichLead`,
    chechAffiliateUniqueUrl: `${BasePath}api/admin/checkAffiliateUrl`,
    getPayouts: `${BasePath}api/admin/getAffiliatePayouts`,
    addPayouts: `${BasePath}api/admin/payAffiliate`,
    connectAgencyAccount: `${BasePath}api/agency/connectAgency`,
    getPlansForAgency: `${BasePath}api/agency/getPlanListForAgency`,
    pauseProfile: `${BasePath}api/user/pauseProfile`,
    addMonthlyPlan: `${BasePath}api/agency/createAgencyPlan`,
    getMonthlyPlan: `${BasePath}api/agency/getAgencyPlansList`,
    addXBarOptions: `${BasePath}api/agency/createAgencyXbarPlan`,
    getXBarOptions: `${BasePath}api/agency/getAgencyXbarPlansList`,
    CreateAgencySubAccount: `${BasePath}api/agency/createSubAccount`,
    getAgencySubAccount: `${BasePath}api/agency/getSubAccounts`,
    getSubAccountPlans: `${BasePath}api/agency/getPlansForSubaccount`,
    subAgencyAndSubAccountPlans: `${BasePath}api/agency/subscribeAgencyPlan`,
    addComment: `${BasePath}api/leads/addCommentOnTranscript`,
    createOnboardingLink: `${BasePath}api/agency/createConnectLink`,
    setUpAgencyTwilioKey: `${BasePath}api/agency/addSynthflowTwilio`,
    addUpSellPhone: `${BasePath}api/user/setPhoneNumberPrice`,
    getCallTranscript: `${BasePath}api/leads/getCallTranscript`
};
const __TURBOPACK__default__export__ = Apis;
}}),
"[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "SnackbarTypes": (()=>SnackbarTypes),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
var SnackbarTypes = /*#__PURE__*/ function(SnackbarTypes) {
    SnackbarTypes["Error"] = "Error";
    SnackbarTypes["Warning"] = "Warning";
    SnackbarTypes["Success"] = "Success";
    return SnackbarTypes;
}({});
const DefaultMessage = null;
const AgentSelectSnackMessage = ({ title = null, message = DefaultMessage, type = "Error", time = 4000, isVisible, hide })=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isVisible) {
            const timer = setTimeout(()=>{
                hide();
            }, time);
            return ()=>clearTimeout(timer);
        }
    }, [
        isVisible,
        time,
        hide
    ]);
    const GetIcon = ()=>{
        switch(type){
            case "Success":
                return "/svgIcons/successMsgIcon.svg";
            case "Warning":
            case "Error":
            default:
                return "/assets/salmanassets/danger_conflict.svg";
        }
    };
    if (!isVisible) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center w-full z-[99999]",
        style: {
            position: "absolute",
            left: "50%",
            translate: "-50%",
            top: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4 p-2 bg-white rounded-md shadow-md",
            style: {
                width: "fit-content"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 flex items-center justify-center bg-red-100 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: GetIcon(),
                            alt: "snackbar-icon"
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
                            lineNumber: 68,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
                        lineNumber: 67,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "fit-content"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: title || message
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `${!title ? "text-lg" : "text-sm"} text-gray-600`,
                            style: {
                                fontWeight: !title ? "600" : "500"
                            },
                            children: title && message
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = AgentSelectSnackMessage;
}}),
"[project]/components/animations/LoaderAnimation.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-ssr] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
;
;
;
const LoaderAnimation = ({ loaderModal = false, isOpen = false, title = "Your agent is building.." })=>{
    const styles = {
        headingStyle: {
            fontSize: 16,
            fontWeight: "600"
        },
        inputStyle: {
            fontSize: 15,
            fontWeight: "500",
            borderRadius: "7px"
        },
        errmsg: {
            fontSize: 12,
            fontWeight: "500",
            borderRadius: "7px"
        },
        modalsStyle: {
            height: "auto",
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            border: "none",
            outline: "none"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
            open: loaderModal || isOpen,
            closeAfterTransition: true,
            BackdropProps: {
                sx: {
                    backgroundColor: "#00000020"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "lg:w-4/12 sm:w-7/12 w-8/12 rounded-3xl bg-white",
                sx: styles.modalsStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row justify-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        style: {
                            backgroundColor: "transparent",
                            padding: 20,
                            borderRadius: "13px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-start mt-12 justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/agentXOrb.gif",
                                    style: {
                                        height: "142px",
                                        width: "152px"
                                    },
                                    height: 142,
                                    width: 152,
                                    alt: "Loading"
                                }, void 0, false, {
                                    fileName: "[project]/components/animations/LoaderAnimation.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/animations/LoaderAnimation.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mt-8",
                                style: {
                                    fontWeight: "600",
                                    fontSize: 16
                                },
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/components/animations/LoaderAnimation.tsx",
                                lineNumber: 75,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/animations/LoaderAnimation.tsx",
                        lineNumber: 57,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/animations/LoaderAnimation.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/animations/LoaderAnimation.tsx",
                lineNumber: 52,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/animations/LoaderAnimation.tsx",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/animations/LoaderAnimation.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LoaderAnimation;
}}),
"[project]/app/utilities/CookieHelper.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// For client side
__turbopack_context__.s({
    "COOKIE_KEYS": (()=>COOKIE_KEYS),
    "getUserCookie": (()=>getUserCookie),
    "parseUserFromServerCookie": (()=>parseUserFromServerCookie),
    "removeUserCookie": (()=>removeUserCookie),
    "setUserCookie": (()=>setUserCookie)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-ssr] (ecmascript)");
// For server side
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/cookie/dist/index.js [app-ssr] (ecmascript)");
;
;
const COOKIE_KEYS = {
    USER: "User"
};
function setUserCookie(user, expiresInMinutes = 120) {
    const expireTime = new Date(new Date().getTime() + expiresInMinutes * 60 * 1000);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].set(COOKIE_KEYS.USER, JSON.stringify(user), {
        expires: expireTime
    });
}
function getUserCookie() {
    const user = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(COOKIE_KEYS.USER);
    return user ? JSON.parse(user) : null;
}
function removeUserCookie() {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].remove(COOKIE_KEYS.USER);
}
function parseUserFromServerCookie(cookieHeader) {
    if (!cookieHeader) return null;
    const cookies = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$cookie$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parse"])(cookieHeader);
    return cookies[COOKIE_KEYS.USER] ? JSON.parse(cookies[COOKIE_KEYS.USER]) : null;
}
}}),
"[externals]/util [external] (util, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}}),
"[externals]/stream [external] (stream, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[externals]/http [external] (http, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}}),
"[externals]/https [external] (https, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}}),
"[externals]/url [external] (url, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}}),
"[externals]/fs [external] (fs, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}}),
"[externals]/crypto [external] (crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}}),
"[externals]/assert [external] (assert, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}}),
"[externals]/tty [external] (tty, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}}),
"[externals]/zlib [external] (zlib, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}}),
"[externals]/events [external] (events, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}}),
"[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
;
const SendVerificationCode = async (phone, login = true, verifyApiResponse)=>{
    try {
        const ApiData = {
            login,
            phone
        };
        const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sendVerificationCode;
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        const response = result.data;
        verifyApiResponse = response; // though this is not used externally
        return response;
    } catch (error) {
        return {
            status: false,
            message: error.message,
            error,
            data: null
        };
    }
};
const __TURBOPACK__default__export__ = SendVerificationCode;
}}),
"[project]/components/auth/LoginComponent.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-ssr] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-ssr] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-ssr] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-ssr] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$LoaderAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/LoaderAnimation.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utilities$2f$CookieHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/utilities/CookieHelper.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@phosphor-icons/react/dist/csr/ArrowRight.es.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-ssr] (ecmascript)");
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
const styles = {
    errmsg: {
        fontSize: 12,
        fontWeight: "500",
        borderRadius: "7px"
    },
    verifyPopup: {
        height: "auto",
        backgroundColor: "white",
        // p: 2,
        // mx: "auto",
        // my: "50vh",
        marginTop: '50vh',
        marginBottom: '50vh',
        marginRight: 'auto',
        marginLeft: 'auto',
        transform: "translateY(-50%)",
        borderRadius: 2,
        border: "none",
        outline: "none"
    }
};
const LoginComponent = ({ length = 6, onComplete })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [redirect, setRedirect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("us");
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loginLoader, setLoginLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(Array(length).fill(""));
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [snackMessage, setSnackMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [msgType, setMsgType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackbarTypes"].Error);
    const [loaderTitle, setLoaderTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("Launching your account...");
    const [InnerWidth, setInnerWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const userPhoneNumberRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])("");
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setRedirect(searchParams.get("redirect"));
    }, [
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        userPhoneNumberRef.current = userPhoneNumber;
    }, [
        userPhoneNumber
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    const handlePhoneNumberChange = (phone)=>{
        setUserPhoneNumber(phone);
        validatePhoneNumber(phone);
        setCheckPhoneResponse(null);
        if (!phone) {
            setErrorMessage("");
            setCheckPhoneResponse(null);
        }
    };
    const validatePhoneNumber = (phoneNumber)=>{
        const parsedNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])(`+${phoneNumber}`);
        if (!parsedNumber || !parsedNumber.isValid()) {
            setErrorMessage("Invalid");
        } else {
            setErrorMessage("");
            if (timerRef.current) clearTimeout(timerRef.current);
            timerRef.current = setTimeout(()=>checkPhoneNumber(phoneNumber), 300);
        }
    };
    const checkPhoneNumber = async (value)=>{
        try {
            setPhoneNumberLoader(true);
            const response = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].CheckPhone, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    phone: value
                })
            });
            const result = await response.json();
            console.log('result', result);
            setCheckPhoneResponse(result);
        } catch (error) {
            console.error("Error checking phone number", error);
        } finally{
            setPhoneNumberLoader(false);
        }
    };
    const handleVerifyPopup = async ()=>{
        try {
            setShowVerifyPopup(true);
            setSendcodeLoader(true);
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(userPhoneNumber, true);
            setIsVisible(true);
            if (response.status) {
                setMsgType(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackbarTypes"].Success);
                setSnackMessage("Code sent");
            } else {
                setMsgType(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackbarTypes"].Error);
                setSnackMessage(response.message || "Verification failed");
            }
        } catch (error) {
            setMsgType(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackbarTypes"].Error);
            setSnackMessage("Login failed");
        } finally{
            setSendcodeLoader(false);
            setTimeout(()=>verifyInputRef.current[0]?.focus(), 100);
        }
    };
    const handleVerifyInputChange = (e, index)=>{
        const { value } = e.target;
        if (!/[0-9]/.test(value) && value !== "") return;
        const newValues = [
            ...VerifyCode
        ];
        newValues[index] = value;
        setVerifyCode(newValues);
        if (value && index < length - 1) verifyInputRef.current[index + 1]?.focus();
        if (newValues.every((num)=>num !== "") && onComplete) onComplete(newValues.join(""));
    };
    const handleBackspace = (e, index)=>{
        if (e.key === "Backspace") {
            if (VerifyCode[index] === "" && index > 0) verifyInputRef.current[index - 1]?.focus();
            const newValues = [
                ...VerifyCode
            ];
            newValues[index] = "";
            setVerifyCode(newValues);
        }
    };
    const handlePaste = (e)=>{
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text").slice(0, length);
        const newValues = pastedText.split("").map((char)=>/[0-9]/.test(char) ? char : "");
        setVerifyCode(newValues);
        newValues.forEach((char, index)=>{
            if (verifyInputRef.current[index]) {
                verifyInputRef.current[index].value = char;
                if (index === newValues.length - 1) verifyInputRef.current[index]?.focus();
            }
        });
        if (newValues.every((num)=>num !== "") && onComplete) onComplete(newValues.join(""));
    };
    const handleLogin = async ()=>{
        try {
            setLoginLoader(true);
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: "include",
                body: JSON.stringify({
                    phone: userPhoneNumber,
                    verificationCode: VerifyCode.join(""),
                    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
                })
            });
            const data = await response.json();
            if (response.ok && data.status) {
                localStorage.setItem("User", JSON.stringify(data.data));
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$utilities$2f$CookieHelper$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setUserCookie"])(data.data.user);
                if (data.data.user.waitlist) router.push("/onboarding/WaitList");
                else if (redirect) router.push(redirect);
                else {
                    const user = data.data.user;
                    if (user.userType === "admin") router.push("/admin");
                    else if (user.userRole === "AgencySubAccount") router.push("/subaccountInvite");
                    else if (user.userRole === "Agency") {
                        if (!user.canAcceptPaymentsAgencyccount) router.push("/agency/verify");
                        else router.push("/agency/dashboard");
                    } else {
                        router.push("/dashboard/leads");
                    }
                }
            } else {
                setMsgType(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackbarTypes"].Error);
                setSnackMessage(data.message || "Login failed");
            }
        } catch (error) {
            console.error("Error during login:", error);
            setMsgType(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SnackbarTypes"].Error);
            setSnackMessage("An unexpected error occurred.");
        } finally{
            setLoginLoader(false);
            setIsVisible(true);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row w-full justify-center h-[100svh]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-11/12 flex flex-col items-center h-[95svh] ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full gap-3 h-[10%] flex flex-row items-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            className: "",
                            src: "/assets/agentX.png",
                            style: {
                                height: "29px",
                                width: "122px"
                            },
                            height: 29,
                            width: 122,
                            alt: "*"
                        }, void 0, false, {
                            fileName: "[project]/components/auth/LoginComponent.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/auth/LoginComponent.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full  h-[80%] flex flex-row items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col w-full items-center gap-4 pb-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/signinAvatar.png",
                                            height: 100,
                                            width: 260,
                                            alt: "avtr"
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/agentXOrb.gif",
                                            height: 69,
                                            width: 69,
                                            alt: "gif"
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 288,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center justify-center gap-2 w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-row items-center gap-2 border rounded-lg w-[50%] sm:w-4/12 justify-between pe-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-[90%]",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    // className="outline-none bg-transparent focus:ring-0"
                                                    country: "us",
                                                    onlyCountries: [
                                                        "us"
                                                    ],
                                                    disableDropdown: true,
                                                    countryCodeEditable: false,
                                                    disableCountryCode: false,
                                                    value: userPhoneNumber,
                                                    onChange: handlePhoneNumberChange,
                                                    placeholder: locationLoader ? "Loading location ..." : "Enter Phone Number",
                                                    disabled: loading,
                                                    onKeyDown: (e)=>{
                                                        if (e.key === "Enter" && userPhoneNumber && !errorMessage) {
                                                            if (checkPhoneResponse?.status === false) {
                                                                handleVerifyPopup();
                                                            }
                                                        // setShowVerifyPopup(true)
                                                        }
                                                    },
                                                    // style={{
                                                    //   borderRadius: "7px",
                                                    //   outline: "none", // Ensure no outline on wrapper
                                                    //   boxShadow: "none", // Remove any shadow
                                                    // }}
                                                    inputStyle: {
                                                        width: "100%",
                                                        borderWidth: "0px",
                                                        backgroundColor: "transparent",
                                                        paddingLeft: "60px",
                                                        paddingTop: "12px",
                                                        paddingBottom: "12px",
                                                        height: "50px",
                                                        outline: "none",
                                                        boxShadow: "none"
                                                    },
                                                    buttonStyle: {
                                                        border: "none",
                                                        backgroundColor: "transparent",
                                                        outline: "none"
                                                    },
                                                    dropdownStyle: {
                                                        maxHeight: "150px",
                                                        overflowY: "auto"
                                                    },
                                                    defaultMask: locationLoader ? "Loading..." : undefined
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                                    lineNumber: 295,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                                lineNumber: 294,
                                                columnNumber: 17
                                            }, this),
                                            loginLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                                    lineNumber: 352,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-black bg-transparent border border-[#000000] rounded-full",
                                                style: {
                                                    fontSize: 16,
                                                    fontWeight: "600"
                                                },
                                                onClick: ()=>{
                                                    console.log("Get code btn clicked");
                                                    if (checkPhoneResponse?.status === false) {
                                                        handleVerifyPopup();
                                                    }
                                                // setShowVerifyPopup(true)
                                                // handleVerifyPopup();
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$phosphor$2d$icons$2f$react$2f$dist$2f$csr$2f$ArrowRight$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ArrowRightIcon"], {
                                                    size: 20,
                                                    weight: "bold"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                                    lineNumber: 367,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                                lineNumber: 355,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/auth/LoginComponent.tsx",
                                        lineNumber: 293,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 292,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center w-full justify-center mt-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `text-center ${styles.errmsg}`,
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 377,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-center ${styles.errmsg}`,
                                                children: "Checking"
                                            }, void 0, false, {
                                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                                lineNumber: 383,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `text-center ${styles.errmsg}`,
                                                style: {
                                                    color: checkPhoneResponse?.status === false ? "green" : "red",
                                                    height: "20px"
                                                },
                                                children: checkPhoneResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-center",
                                                    children: checkPhoneResponse?.status === true ? "User not found" : ""
                                                }, void 0, false, {
                                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                                    lineNumber: 398,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                                lineNumber: 387,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 381,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/LoginComponent.tsx",
                                        lineNumber: 375,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 374,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row items-center justify-center gap-1 mt-[40px]",
                                    style: {
                                        fontWeight: "500",
                                        fontSize: 15
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div" //onClick={() => setShowVerifyPopup(true)}
                                        , {
                                            children: `Don't have an account?`
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            className: "",
                                            href: "/onboarding",
                                            // onClick={() => {
                                            //   router.push("/onboarding");
                                            // }}
                                            style: {
                                                fontWeight: "bold",
                                                fontSize: 15,
                                                color: '#7902DF'
                                            },
                                            children: "Sign Up"
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 419,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/auth/LoginComponent.tsx",
                            lineNumber: 280,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/auth/LoginComponent.tsx",
                        lineNumber: 279,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 h-[10%] flex flex-row items-end justify-end w-full gap-2 overflow-auto flex-shrink-0 hidden sm:flex",
                        style: {
                            fontWeight: "500",
                            fontSize: 11.6
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0",
                                children: "Copyrights @ 2025 MyAgentX. All Rights Reserved."
                            }, void 0, false, {
                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                lineNumber: 437,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-shrink-0 outline-none",
                                onClick: ()=>{
                                    if ("TURBOPACK compile-time falsy", 0) {
                                        "TURBOPACK unreachable";
                                    }
                                },
                                children: "| Terms & Conditions"
                            }, void 0, false, {
                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                lineNumber: 440,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "flex-shrink-0 outline-none",
                                onClick: ()=>{
                                    if ("TURBOPACK compile-time falsy", 0) {
                                        "TURBOPACK unreachable";
                                    }
                                },
                                children: "| Privacy Policy"
                            }, void 0, false, {
                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/auth/LoginComponent.tsx",
                        lineNumber: 433,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[10%]  w-full flex flex-col items-center justify-center sm:hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 flex flex-row items-center justify-end gap-2 overflow-auto flex-shrink-0",
                                style: {
                                    fontWeight: "500",
                                    fontSize: 11.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex-shrink-0 outline-none",
                                        onClick: ()=>{
                                            if ("TURBOPACK compile-time falsy", 0) {
                                                "TURBOPACK unreachable";
                                            }
                                        },
                                        children: "Terms & Conditions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/LoginComponent.tsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "flex-shrink-0 outline-none",
                                        onClick: ()=>{
                                            if ("TURBOPACK compile-time falsy", 0) {
                                                "TURBOPACK unreachable";
                                            }
                                        },
                                        children: "| Privacy Policy"
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/LoginComponent.tsx",
                                        lineNumber: 486,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-shrink-0 text-center",
                                style: {
                                    fontWeight: "500",
                                    fontSize: 11.6
                                },
                                children: "Copyrights @ 2025 MyAgentX. All Rights Reserved."
                            }, void 0, false, {
                                fileName: "[project]/components/auth/LoginComponent.tsx",
                                lineNumber: 500,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/auth/LoginComponent.tsx",
                        lineNumber: 468,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/auth/LoginComponent.tsx",
                lineNumber: 267,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                open: showVerifyPopup,
                // onClose={() => setAddKYCQuestion(false)}
                closeAfterTransition: true,
                BackdropProps: {
                    timeout: 1000,
                    sx: {
                        backgroundColor: "#00000020",
                        // //backdropFilter: "blur(20px)",
                        padding: 0,
                        margin: 0
                    }
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                    className: "lg:w-6/12 sm:w-6/12 w-6/12",
                    sx: styles.verifyPopup,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-row justify-center w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "sm:w-7/12 w-full",
                            style: {
                                backgroundColor: "#ffffff",
                                padding: 20,
                                borderRadius: "13px"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            setShowVerifyPopup(false);
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: "/assets/crossIcon.png",
                                            height: 40,
                                            width: 40,
                                            alt: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 539,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/LoginComponent.tsx",
                                        lineNumber: 534,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 533,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        fontSize: 26,
                                        fontWeight: "700"
                                    },
                                    children: "Verify phone number"
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    style: {
                                        ...styles.inputStyle,
                                        color: "#00000060"
                                    },
                                    children: [
                                        "Enter code that was sent to number ending with *",
                                        userPhoneNumber.slice(-4),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-ful flex flex-row items-center gap-2 overflow-auto",
                                    style: {
                                        display: "flex",
                                        gap: "8px"
                                    },
                                    children: Array.from({
                                        length
                                    }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            className: " focus:outline-none focus:ring-0",
                                            ref: (el)=>{
                                                verifyInputRef.current[index] = el;
                                            },
                                            type: "tel",
                                            inputMode: "numeric",
                                            // type="tel"
                                            maxLength: 1,
                                            value: VerifyCode[index],
                                            onChange: (e)=>handleVerifyInputChange(e, index),
                                            onKeyDown: (e)=>handleBackspace(e, index),
                                            onKeyUp: (e)=>{
                                                // Check if the Enter key is pressed and all inputs are filled
                                                if (e.key === "Enter" && VerifyCode.every((value)=>value.trim() !== "")) {
                                                    handleLogin();
                                                }
                                            },
                                            onPaste: handlePaste,
                                            placeholder: "-",
                                            style: {
                                                width: InnerWidth < 540 ? "40px" : "40px",
                                                height: InnerWidth < 540 ? "40px" : "40px",
                                                textAlign: "center",
                                                fontSize: InnerWidth < 540 ? 15 : 20,
                                                border: "1px solid #ccc",
                                                borderRadius: "5px"
                                            }
                                        }, index, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 568,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 563,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 flex flex-row items-center gap-1",
                                    style: styles.inputStyle,
                                    children: [
                                        `Didn't receive code?`,
                                        sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 607,
                                            columnNumber: 19
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "outline-none border-none text-purple",
                                            onClick: handleVerifyPopup,
                                            children: "Resend"
                                        }, void 0, false, {
                                            fileName: "[project]/components/auth/LoginComponent.tsx",
                                            lineNumber: 609,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 601,
                                    columnNumber: 15
                                }, this),
                                loginLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex fex-row items-center justify-center mt-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$LoaderAnimation$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        loaderModal: loginLoader,
                                        title: loaderTitle
                                    }, void 0, false, {
                                        fileName: "[project]/components/auth/LoginComponent.tsx",
                                        lineNumber: 619,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 618,
                                    columnNumber: 17
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                    style: {
                                        height: "50px"
                                    },
                                    onClick: handleLogin,
                                    children: "Continue"
                                }, void 0, false, {
                                    fileName: "[project]/components/auth/LoginComponent.tsx",
                                    lineNumber: 625,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/auth/LoginComponent.tsx",
                            lineNumber: 525,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/auth/LoginComponent.tsx",
                        lineNumber: 524,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/auth/LoginComponent.tsx",
                    lineNumber: 523,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/auth/LoginComponent.tsx",
                lineNumber: 509,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                message: snackMessage,
                type: msgType,
                isVisible: isVisible,
                hide: ()=>{
                    setIsVisible(false);
                    setSnackMessage("");
                    setMsgType(null);
                }
            }, void 0, false, {
                fileName: "[project]/components/auth/LoginComponent.tsx",
                lineNumber: 637,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/auth/LoginComponent.tsx",
        lineNumber: 254,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = LoginComponent;
}}),
"[project]/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$LoginComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/auth/LoginComponent.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
const Page = ({ length = 6, onComplete })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$auth$2f$LoginComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            onComplete: onComplete,
            length: length
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Page;
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__6a27d2a3._.js.map