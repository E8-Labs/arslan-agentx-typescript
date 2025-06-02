(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/animations/LoaderAnimation.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
            open: loaderModal || isOpen,
            closeAfterTransition: true,
            BackdropProps: {
                sx: {
                    backgroundColor: "#00000020"
                }
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                className: "lg:w-4/12 sm:w-7/12 w-8/12 rounded-3xl bg-white",
                sx: styles.modalsStyle,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-row justify-center w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        style: {
                            backgroundColor: "transparent",
                            padding: 20,
                            borderRadius: "13px"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-row items-start mt-12 justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
_c = LoaderAnimation;
const __TURBOPACK__default__export__ = LoaderAnimation;
var _c;
__turbopack_context__.k.register(_c, "LoaderAnimation");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/apis/Apis.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// const BasePath = process.env.NEXT_PUBLIC_REACT_APP_BASE_URL;
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const BasePath = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT === "Production" ? "https://apimyagentx.com/agentx/" : "https://apimyagentx.com/agentxtest/";
console.log("Current environment is", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_REACT_APP_ENVIRONMENT);
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "SnackbarTypes": (()=>SnackbarTypes),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
var SnackbarTypes = /*#__PURE__*/ function(SnackbarTypes) {
    SnackbarTypes["Error"] = "Error";
    SnackbarTypes["Warning"] = "Warning";
    SnackbarTypes["Success"] = "Success";
    return SnackbarTypes;
}({});
const DefaultMessage = null;
const AgentSelectSnackMessage = ({ title = null, message = DefaultMessage, type = "Error", time = 4000, isVisible, hide })=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AgentSelectSnackMessage.useEffect": ()=>{
            if (isVisible) {
                const timer = setTimeout({
                    "AgentSelectSnackMessage.useEffect.timer": ()=>{
                        hide();
                    }
                }["AgentSelectSnackMessage.useEffect.timer"], time);
                return ({
                    "AgentSelectSnackMessage.useEffect": ()=>clearTimeout(timer)
                })["AgentSelectSnackMessage.useEffect"];
            }
        }
    }["AgentSelectSnackMessage.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center w-full z-[99999]",
        style: {
            position: "absolute",
            left: "50%",
            translate: "-50%",
            top: 10
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center space-x-4 p-2 bg-white rounded-md shadow-md",
            style: {
                width: "fit-content"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-shrink-0",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 flex items-center justify-center bg-red-100 rounded-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        width: "fit-content"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-semibold text-gray-900",
                            children: title || message
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(AgentSelectSnackMessage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AgentSelectSnackMessage;
const __TURBOPACK__default__export__ = AgentSelectSnackMessage;
var _c;
__turbopack_context__.k.register(_c, "AgentSelectSnackMessage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/general/BackgroundVideo.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BackgroundVideo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
function BackgroundVideo({ showImageOnly = false, imageUrl = "/assets/background.png" }) {
    _s();
    const [isVideoSupported, setIsVideoSupported] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundVideo.useEffect": ()=>{
            const checkVideoAutoplaySupport = {
                "BackgroundVideo.useEffect.checkVideoAutoplaySupport": async ()=>{
                    const video = document.createElement("video");
                    video.src = "/banerVideo.mp4";
                    video.muted = true;
                    video.playsInline = true;
                    try {
                        await video.play();
                        video.remove();
                        setIsVideoSupported(true);
                    } catch  {
                        video.remove();
                        setIsVideoSupported(false);
                    }
                }
            }["BackgroundVideo.useEffect.checkVideoAutoplaySupport"];
            checkVideoAutoplaySupport();
        }
    }["BackgroundVideo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-screen overflow-hidden",
        children: !showImageOnly && isVideoSupported ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
            autoPlay: true,
            muted: true,
            loop: true,
            playsInline: true,
            className: "absolute inset-0 w-full h-full object-cover",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("source", {
                src: "/banerVideo.mp4",
                type: "video/mp4"
            }, void 0, false, {
                fileName: "[project]/components/general/BackgroundVideo.tsx",
                lineNumber: 44,
                columnNumber: 11
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/general/BackgroundVideo.tsx",
            lineNumber: 37,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0 w-full h-full bg-cover bg-center",
            style: {
                backgroundImage: `url('${imageUrl}')`
            }
        }, void 0, false, {
            fileName: "[project]/components/general/BackgroundVideo.tsx",
            lineNumber: 47,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/general/BackgroundVideo.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
_s(BackgroundVideo, "JA6Er/cDkgAsXkNRsETov4/RK5g=");
_c = BackgroundVideo;
var _c;
__turbopack_context__.k.register(_c, "BackgroundVideo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/ErrorBoundary.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError() {
        return {
            hasError: true
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Caught an error:", error, errorInfo);
    // You can send this error to an external logging service (e.g., Sentry, LogRocket)
    }
    render() {
        if (this.state.hasError) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-[100svh] w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold",
                    children: "Something went wrong."
                }, void 0, false, {
                    fileName: "[project]/components/ErrorBoundary.tsx",
                    lineNumber: 31,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ErrorBoundary.tsx",
                lineNumber: 30,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_d0025d0e._.js.map