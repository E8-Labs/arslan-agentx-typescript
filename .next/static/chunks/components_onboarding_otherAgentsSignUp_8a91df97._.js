(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utilities/validateEmail'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../apis/Apis'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const InsuranceAgentSignUp = ({ handleInsuranceBack })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userFarm, setUserFarm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userBrokage, setUserBrokage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill(""));
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const length = 6;
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        message: ""
    });
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
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
        verifyPopup: {
            height: "auto",
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            border: "none",
            outline: "none"
        }
    };
    const checkEmail = async (email)=>{
        setEmailLoader(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(Apis.CheckEmail, {
                email
            });
            if (response?.data) {
                setEmailCheckResponse({
                    status: response.data.status,
                    message: response.data.message
                });
            }
        } catch (error) {
            console.error("Error checking email:", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const handlePhoneNumberChange = (value)=>{
        setUserPhoneNumber(value);
    };
    const handleVerifyPopup = ()=>{
        setShowVerifyPopup(true);
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InsuranceAgentSignUp.useEffect": ()=>{
            if (userFarm.trim() !== "" && userBrokage.trim() !== "") {
                setShouldContinue(false);
            } else {
                setShouldContinue(true);
            }
        }
    }["InsuranceAgentSignUp.useEffect"], [
        userFarm,
        userBrokage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row w-full justify-center h-[100svh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center px-4 h-[90%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                    style: {
                        textAlign: "center"
                    },
                    children: "Your Contact Information"
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                    lineNumber: 124,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                    style: {
                        scrollbarWidth: "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            children: "What's your full name"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Name",
                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userName,
                            onChange: (e)=>{
                                const input = e.target.value;
                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                setUserName(formattedName);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center w-full justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your email address"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                    lineNumber: 151,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 154,
                                            columnNumber: 17
                                        }, this) : emailCheckResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: emailCheckResponse.status ? "green" : "red"
                                            },
                                            children: emailCheckResponse.message.charAt(0).toUpperCase() + emailCheckResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 157,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red"
                                            },
                                            children: validEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userEmail,
                            type: "text",
                            placeholder: "Email address",
                            onChange: (e)=>{
                                const value = e.target.value;
                                setUserEmail(value);
                                if (timerRef.current) clearTimeout(timerRef.current);
                                setEmailCheckResponse(null);
                                if (!value) {
                                    setValidEmail("");
                                    return;
                                }
                                if (!validateEmail(value)) {
                                    setValidEmail("Invalid");
                                } else {
                                    timerRef.current = setTimeout(()=>{
                                        checkEmail(value);
                                    }, 300);
                                }
                            },
                            onFocus: (e)=>e.target.setAttribute("autocomplete", "off")
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 171,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center justify-between w-full mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your phone number"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                    lineNumber: 202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple",
                                            style: {
                                                ...styles.errmsg,
                                                height: "20px"
                                            },
                                            children: "Getting location ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, this),
                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red",
                                                height: "20px"
                                            },
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 210,
                                            columnNumber: 17
                                        }, this) : phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black",
                                                height: "20px"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 220,
                                            columnNumber: 17
                                        }, this) : checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: checkPhoneResponse.status ? "green" : "red",
                                                height: "20px"
                                            },
                                            children: checkPhoneResponse.message.charAt(0).toUpperCase() + checkPhoneResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 230,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                            lineNumber: 240,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "8px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border outline-none bg-white",
                                country: "us",
                                onlyCountries: [
                                    "us"
                                ],
                                disableDropdown: true,
                                countryCodeEditable: false,
                                value: userPhoneNumber,
                                onChange: handlePhoneNumberChange,
                                placeholder: locationLoader ? "Loading location ..." : "Enter Phone Number",
                                inputStyle: {
                                    width: "100%",
                                    borderWidth: "0px",
                                    backgroundColor: "transparent",
                                    paddingLeft: "60px",
                                    paddingTop: "20px",
                                    paddingBottom: "20px"
                                },
                                buttonStyle: {
                                    border: "none",
                                    backgroundColor: "transparent"
                                },
                                dropdownStyle: {
                                    maxHeight: "150px",
                                    overflowY: "auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                lineNumber: 246,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 245,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Market Territory (Farm/Focus Area)"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 275,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "City, Zip, County, etc.",
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userFarm,
                            onChange: (e)=>setUserFarm(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 278,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Brokerage or Agency Name"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 287,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Brokerage Name",
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userBrokage,
                            onChange: (e)=>setUserBrokage(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                            open: showVerifyPopup,
                            closeAfterTransition: true,
                            BackdropProps: {
                                timeout: 1000,
                                sx: {
                                    backgroundColor: "#00000020"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "lg:w-8/12 sm:w-full w-8/12",
                                sx: styles.verifyPopup,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row justify-center w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:w-7/12 w-full",
                                        style: {
                                            backgroundColor: "#ffffff",
                                            padding: 20,
                                            borderRadius: "13px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleClose,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/crossIcon.png",
                                                        height: 40,
                                                        width: 40,
                                                        alt: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                        lineNumber: 318,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                    lineNumber: 317,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                lineNumber: 316,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 26,
                                                    fontWeight: "700"
                                                },
                                                children: "Verify phone number"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                lineNumber: 326,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
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
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                lineNumber: 329,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
                                                style: {
                                                    display: "flex",
                                                    gap: "8px"
                                                },
                                                children: Array.from({
                                                    length
                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            verifyInputRef.current[index] = el;
                                                        },
                                                        type: "tel",
                                                        inputMode: "numeric",
                                                        maxLength: 1,
                                                        value: VerifyCode[index],
                                                        onChange: (e)=>{
                                                            const value = e.target.value;
                                                            if (!/[0-9]/.test(value) && value !== "") return;
                                                            const newValues = [
                                                                ...VerifyCode
                                                            ];
                                                            newValues[index] = value;
                                                            setVerifyCode(newValues);
                                                        },
                                                        placeholder: "-",
                                                        style: {
                                                            width: "40px",
                                                            height: "40px",
                                                            textAlign: "center",
                                                            fontSize: "20px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px"
                                                        },
                                                        className: "focus:outline-none focus:ring-0"
                                                    }, index, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                        lineNumber: 339,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                lineNumber: 337,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 flex flex-row items-center gap-2",
                                                style: styles.inputStyle,
                                                children: [
                                                    "Didn't receive code?",
                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "outline-none border-none text-purple",
                                                        onClick: handleVerifyPopup,
                                                        children: "Resend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                        lineNumber: 375,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center mt-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                    size: 35
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                    lineNumber: 386,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                lineNumber: 385,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                style: {
                                                    height: "50px"
                                                },
                                                onClick: ()=>{
                                                    console.log("Verifying code...");
                                                    setShowVerifyPopup(false);
                                                },
                                                children: "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                                lineNumber: 389,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                        lineNumber: 308,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                lineNumber: 306,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: response.message,
                            isVisible: isVisible,
                            setIsVisible: setIsVisible,
                            success: response.status
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 416,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleInsuranceBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                            lineNumber: 420,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
                    lineNumber: 415,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
            lineNumber: 123,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/InsuranceAgentSignUp.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
};
_s(InsuranceAgentSignUp, "JLL/DECqYBE4aeuvsQC1Tmko7h0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InsuranceAgentSignUp;
const __TURBOPACK__default__export__ = InsuranceAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "InsuranceAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Body.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-client] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/apisServices/ApiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/UserUtility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/cookies.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// import VerificationCodeInput from '../test/VerificationCodeInput';
const SalesDevAgent = ({ handleContinue, handleSalesAgentBack, length = 6, onComplete, handleWaitList, setCongratsPopup })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const [emailErr, setEmailCheckResponse] = useState(false);
    const [customerService, setCustomerService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [company, setCompany] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userTransaction, setUserTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //phone number input variable
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //verify code input fields
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(length).fill(""));
    //check email availability
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errMessage, setErrMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //check phone number availability
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    //getlocation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesDevAgent.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["SalesDevAgent.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesDevAgent.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["SalesDevAgent.useEffect"], []);
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesDevAgent.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && customerService && company && emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || !customerService || !company || !userTransaction || checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["SalesDevAgent.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        customerService,
        company,
        userTransaction,
        checkPhoneResponse,
        emailCheckResponse
    ]);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SalesDevAgent.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["SalesDevAgent.useEffect"], [
        showVerifyPopup
    ]);
    // Handle phone number change and validation
    const handlePhoneNumberChange = (phone)=>{
        setUserPhoneNumber(phone);
        validatePhoneNumber(phone);
        if (!phone) {
            setErrorMessage("");
        }
    };
    // Function to validate phone number
    const validatePhoneNumber = (phoneNumber)=>{
        // const parsedNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
        // parsePhoneNumberFromString(`+${phone}`, countryCode?.toUpperCase())
        const parsedNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])(`+${phoneNumber}`, countryCode?.toUpperCase());
        // if (parsedNumber && parsedNumber.isValid() && parsedNumber.country === countryCode?.toUpperCase()) {
        if (!parsedNumber || !parsedNumber.isValid()) {
            setErrorMessage("Invalid");
        } else {
            setErrorMessage("");
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            // setCheckPhoneResponse(null);
            // //console.log;
            timerRef.current = setTimeout(()=>{
                checkPhoneNumber(phoneNumber);
            // //console.log;
            }, 300);
        }
    };
    //email validation function
    const validateEmail = (email)=>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // Check if email contains consecutive dots, which are invalid
        if (/\.\./.test(email)) {
            return false;
        }
        // Check the general pattern for a valid email
        return emailPattern.test(email);
    };
    //code for verify number popup
    const handleVerifyPopup = async ()=>{
        try {
            setSendcodeLoader(true);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userPhoneNumber, true);
            setResponse(response);
            setIsVisible(true);
        // //console.log;
        } catch (error) {
        // console.error("Error occured", error);
        } finally{
            setSendcodeLoader(false);
        }
        setShowVerifyPopup(true);
        setTimeout(()=>{
            if (verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }, 100); // Adjust the delay as needed, 0 should be enough
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    //code for handling verify code changes
    const handleVerifyInputChange = (e, index)=>{
        const { value } = e.target;
        if (!/[0-9]/.test(value) && value !== "") return; // Allow only numeric input
        const newValues = [
            ...VerifyCode
        ];
        newValues[index] = value;
        setVerifyCode(newValues);
        // Move focus to the next field if a number is entered
        if (value && index < length - 1) {
            verifyInputRef.current[index + 1].focus();
        }
        // Trigger onComplete callback if all fields are filled
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join("")); // Convert array to a single string here
        }
    };
    const handleBackspace = (e, index)=>{
        if (e.key === "Backspace") {
            if (VerifyCode[index] === "" && index > 0) {
                verifyInputRef.current[index - 1].focus();
            }
            const newValues = [
                ...VerifyCode
            ];
            newValues[index] = "";
            setVerifyCode(newValues);
        }
    };
    const handlePaste = (e)=>{
        const pastedText = e.clipboardData.getData("text").slice(0, length);
        const newValues = pastedText.split("").map((char)=>/[0-9]/.test(char) ? char : "");
        setVerifyCode(newValues);
        // Set each input's value and move focus to the last filled input
        newValues.forEach((char, index)=>{
            verifyInputRef.current[index].value = char;
            if (index === newValues.length - 1) {
                verifyInputRef.current[index].focus();
            }
        });
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join(""));
        }
    };
    //code for number verification
    const handleVerifyCode = ()=>{
        // //console.log);
        setPhoneVerifiedSuccessSnack(true);
        handleRegister();
    };
    //code for registering user
    const handleRegister = async ()=>{
        try {
            setRegisterLoader(true);
            let agentTitle = userData.userTypeTitle;
            // //console.log;
            const formData = new FormData();
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register;
            let campainee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCampaigneeNameIfAvailable"])(window);
            if (campainee) {
                formData.append("campaignee", campainee);
            }
            // const formData = new FormData();
            formData.append("name", userName);
            formData.append("email", userEmail);
            formData.append("phone", userPhoneNumber);
            // formData.append("farm", customerService);
            // formData.append("brokerage", company);
            // formData.append("averageTransactionPerYear", userTransaction);
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("userType", agentTitle);
            formData.append("areaOfService", customerService);
            formData.append("company", company);
            formData.append("login", false);
            formData.append("verificationCode", VerifyCode.join(""));
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            //console.log;
            // return
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                setResponse(response.data);
                setIsVisible(true);
                //console.log;
                // //console.log;
                if (response.data.status === true) {
                    localStorage.setItem("User", JSON.stringify(response.data.data));
                    //console.log;
                    try {
                        if (typeof document !== "undefined") {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(response.data.data.user, document);
                        }
                    } catch (error) {
                    //console.log;
                    }
                    //console.log;
                    let screenWidth = 1000;
                    if ("TURBOPACK compile-time truthy", 1) {
                        screenWidth = window.innerWidth; // Get current screen width
                    }
                    const SM_SCREEN_SIZE = 640; // Tailwind's sm breakpoint is typically 640px
                    //console.log;
                    if (screenWidth <= SM_SCREEN_SIZE) {
                        setCongratsPopup(true);
                    //console.log;
                    } else {
                        //console.log;
                        // handleContinue();
                        router.push("/createagent");
                    // setCongratsPopup(true);
                    }
                }
            }
        } catch (error) {
        // console.error("Error occured in register api is: ", error);
        } finally{
            setRegisterLoader(false);
        }
    };
    //code to check email and phone
    const checkEmail = async (value)=>{
        try {
            setValidEmail("");
            setEmailLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail;
            const ApiData = {
                email: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setEmailCheckResponse(response.data);
                } else {
                    setEmailCheckResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check email api is :", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const checkPhoneNumber = async (value)=>{
        try {
            setPhoneNumberLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckPhone;
            const ApiData = {
                phone: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setCheckPhoneResponse(response.data);
                } else {
                    setCheckPhoneResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check phone api is :", error);
        } finally{
            setPhoneNumberLoader(false);
        }
    };
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
        verifyPopup: {
            height: "auto",
            bgcolor: "transparent",
            // p: 2,
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            borderRadius: 2,
            border: "none",
            outline: "none"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl mx-2 w-full md:w-10/12 max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                lineNumber: 456,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                            lineNumber: 455,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: "Your Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            children: `What's your full name`
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 470,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userName,
                                            onChange: (e)=>{
                                                const input = e.target.value;
                                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                                // const words = input.split(' ');
                                                // const formattedName =
                                                //   words.length > 1
                                                //     ? words[0].toLowerCase() + ' ' + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                                //     : words[0].toLowerCase();
                                                setUserName(formattedName);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 471,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                    lineNumber: 494,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "black"
                                                            },
                                                            children: "Checking ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                            lineNumber: 499,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 505,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 520,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                            lineNumber: 503,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                            lineNumber: 524,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                    lineNumber: 497,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 493,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Email address",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userEmail,
                                            onChange: (e)=>{
                                                let value = e.target.value;
                                                setUserEmail(value);
                                                // if (value) {
                                                //   const timer = setTimeout(() => {
                                                //     checkEmail(value);
                                                //    // //console.log
                                                //   }, 1000);
                                                //   return (() => clearTimeout(timer));
                                                // } else {
                                                //   setEmailCheckResponse(null);
                                                // }
                                                if (timerRef.current) {
                                                    clearTimeout(timerRef.current);
                                                }
                                                setEmailCheckResponse(null);
                                                if (!value) {
                                                    // //console.log;
                                                    setValidEmail("");
                                                    return;
                                                }
                                                if (!validateEmail(value)) {
                                                    // //console.log;
                                                    setValidEmail("Invalid");
                                                } else {
                                                    // //console.log;
                                                    if (value) {
                                                        // Set a new timeout
                                                        timerRef.current = setTimeout(()=>{
                                                            checkEmail(value);
                                                        }, 300);
                                                    } else {
                                                        // Reset the response if input is cleared
                                                        setEmailCheckResponse(null);
                                                        setValidEmail("");
                                                    }
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 530,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                    lineNumber: 581,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple",
                                                            style: {
                                                                ...styles.errmsg,
                                                                height: "20px"
                                                            },
                                                            children: "Getting location ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                            lineNumber: 587,
                                                            columnNumber: 21
                                                        }, this),
                                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: errorMessage && "red",
                                                                height: "20px"
                                                            },
                                                            children: errorMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                            lineNumber: 595,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: "black",
                                                                    height: "20px"
                                                                },
                                                                children: "Checking ..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 607,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        ...styles.errmsg,
                                                                        color: checkPhoneResponse.status === true ? "green" : "red",
                                                                        height: "20px"
                                                                    },
                                                                    children: checkPhoneResponse.message.slice(0, 1).toUpperCase() + checkPhoneResponse.message.slice(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                    lineNumber: 619,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                    lineNumber: 635,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 617,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                            lineNumber: 605,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                    lineNumber: 585,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 580,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "border outline-none bg-white",
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
                                                style: {
                                                    borderRadius: "7px"
                                                },
                                                inputStyle: {
                                                    width: "100%",
                                                    borderWidth: "0px",
                                                    backgroundColor: "transparent",
                                                    paddingLeft: "60px",
                                                    paddingTop: "20px",
                                                    paddingBottom: "20px"
                                                },
                                                buttonStyle: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                },
                                                dropdownStyle: {
                                                    maxHeight: "150px",
                                                    overflowY: "auto"
                                                },
                                                defaultMask: loading ? "Loading..." : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                lineNumber: 645,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 644,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily operate or serve customers"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Specific cities, counties, or regions",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: customerService,
                                            onChange: (e)=>{
                                                setCustomerService(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 686,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Company"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 696,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Company",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: company,
                                            onChange: (e)=>{
                                                setCompany(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 699,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                                            open: showVerifyPopup,
                                            // onClose={() => setAddKYCQuestion(false)}
                                            closeAfterTransition: true,
                                            BackdropProps: {
                                                timeout: 1000,
                                                sx: {
                                                    backgroundColor: "#00000020"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "lg:w-8/12 sm:w-full w-8/12",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:w-7/12 w-full",
                                                        style: {
                                                            backgroundColor: "#ffffff",
                                                            padding: 20,
                                                            borderRadius: "13px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-row justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleClose,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/crossIcon.png",
                                                                        height: 40,
                                                                        width: 40,
                                                                        alt: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                        lineNumber: 771,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                    lineNumber: 770,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 769,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 779,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
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
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 787,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
                                                                style: {
                                                                    display: "flex",
                                                                    gap: "8px"
                                                                },
                                                                children: Array.from({
                                                                    length
                                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                                        // type="text"
                                                                        type: "tel",
                                                                        inputMode: "numeric",
                                                                        maxLength: "1",
                                                                        value: VerifyCode[index],
                                                                        onChange: (e)=>handleVerifyInputChange(e, index),
                                                                        onKeyDown: (e)=>handleBackspace(e, index),
                                                                        onKeyUp: (e)=>{
                                                                            // Check if the Enter key is pressed and all inputs are filled
                                                                            if (e.key === "Enter" && VerifyCode.every((value)=>value.trim() !== "")) {
                                                                                handleVerifyCode();
                                                                            }
                                                                        },
                                                                        onPaste: handlePaste,
                                                                        placeholder: "-",
                                                                        style: {
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            textAlign: "center",
                                                                            fontSize: "20px",
                                                                            border: "1px solid #ccc",
                                                                            borderRadius: "5px"
                                                                        },
                                                                        className: " focus:outline-none focus:ring-0"
                                                                    }, index, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                        lineNumber: 800,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 795,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 flex flex-row items-center gap-2",
                                                                style: styles.inputStyle,
                                                                children: [
                                                                    `Didn't receive code?`,
                                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                        lineNumber: 839,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                        lineNumber: 841,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 833,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                    lineNumber: 851,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 850,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                                lineNumber: 854,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                        lineNumber: 761,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                    lineNumber: 760,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                                lineNumber: 756,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            message: response.message,
                                            isVisible: isVisible,
                                            setIsVisible: (visible)=>{
                                                setIsVisible(visible);
                                            },
                                            success: response.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                            lineNumber: 867,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                    lineNumber: 466,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                    lineNumber: 453,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                                lineNumber: 881,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                            lineNumber: 880,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSalesAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                            lineNumber: 884,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
                    lineNumber: 879,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
            lineNumber: 452,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/SalesDevAgent.js",
        lineNumber: 448,
        columnNumber: 5
    }, this);
};
_s(SalesDevAgent, "aNZGlw0/2yFUMp9umcPwFhE5ATs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SalesDevAgent;
const __TURBOPACK__default__export__ = SalesDevAgent;
var _c;
__turbopack_context__.k.register(_c, "SalesDevAgent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utilities/validateEmail'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const SolarRepAgentSignUp = ({ handleSolarAgentBack })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [market, setMarket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [installationVolume, setInstallationVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [primaryClientType, setPrimaryClientType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill(""));
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const length = 6;
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        message: ""
    });
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const primaryClientTypes = [
        {
            title: "Residential"
        },
        {
            title: "Commercial"
        },
        {
            title: "Industrial"
        },
        {
            title: "Other"
        }
    ];
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
        verifyPopup: {
            height: "auto",
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            border: "none",
            outline: "none"
        }
    };
    const checkEmail = async (email)=>{
        setEmailLoader(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail, {
                email
            });
            if (response?.data) {
                setEmailCheckResponse({
                    status: response.data.status,
                    message: response.data.message
                });
            }
        } catch (error) {
            console.error("Error checking email:", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const handlePhoneNumberChange = (value)=>{
        setUserPhoneNumber(value);
    };
    const handleSelectClientType = (item)=>{
        if (primaryClientType.includes(item.title)) {
            setPrimaryClientType(primaryClientType.filter((t)=>t !== item.title));
        } else {
            setPrimaryClientType([
                ...primaryClientType,
                item.title
            ]);
        }
    };
    const handleVerifyPopup = ()=>{
        setShowVerifyPopup(true);
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SolarRepAgentSignUp.useEffect": ()=>{
            if (market.trim() !== "" && companyName.trim() !== "" && installationVolume.trim() !== "" && primaryClientType.length > 0) {
                setShouldContinue(false);
            } else {
                setShouldContinue(true);
            }
        }
    }["SolarRepAgentSignUp.useEffect"], [
        market,
        companyName,
        installationVolume,
        primaryClientType
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row w-full justify-center h-[100svh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center px-4 h-[90%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                    style: {
                        textAlign: "center"
                    },
                    children: "Your Contact Information"
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                    style: {
                        scrollbarWidth: "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            children: "What's your full name"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Name",
                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userName,
                            onChange: (e)=>{
                                const input = e.target.value;
                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                setUserName(formattedName);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center w-full justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your email address"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 178,
                                            columnNumber: 17
                                        }, this) : emailCheckResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: emailCheckResponse.status ? "green" : "red"
                                            },
                                            children: emailCheckResponse.message.charAt(0).toUpperCase() + emailCheckResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 181,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red"
                                            },
                                            children: validEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 191,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userEmail,
                            type: "text",
                            placeholder: "Email address",
                            onChange: (e)=>{
                                const value = e.target.value;
                                setUserEmail(value);
                                if (timerRef.current) clearTimeout(timerRef.current);
                                setEmailCheckResponse(null);
                                if (!value) {
                                    setValidEmail("");
                                    return;
                                }
                                if (!validateEmail(value)) {
                                    setValidEmail("Invalid");
                                } else {
                                    timerRef.current = setTimeout(()=>{
                                        checkEmail(value);
                                    }, 300);
                                }
                            },
                            onFocus: (e)=>e.target.setAttribute("autocomplete", "off")
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center justify-between w-full mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your phone number"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                    lineNumber: 226,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple",
                                            style: {
                                                ...styles.errmsg,
                                                height: "20px"
                                            },
                                            children: "Getting location ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 229,
                                            columnNumber: 17
                                        }, this),
                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red",
                                                height: "20px"
                                            },
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 234,
                                            columnNumber: 17
                                        }, this) : phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black",
                                                height: "20px"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this) : checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: checkPhoneResponse.status ? "green" : "red",
                                                height: "20px"
                                            },
                                            children: checkPhoneResponse.message.charAt(0).toUpperCase() + checkPhoneResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "8px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border outline-none bg-white",
                                country: "us",
                                onlyCountries: [
                                    "us"
                                ],
                                disableDropdown: true,
                                countryCodeEditable: false,
                                value: userPhoneNumber,
                                onChange: handlePhoneNumberChange,
                                placeholder: locationLoader ? "Loading location ..." : "Enter Phone Number",
                                inputStyle: {
                                    width: "100%",
                                    borderWidth: "0px",
                                    backgroundColor: "transparent",
                                    paddingLeft: "60px",
                                    paddingTop: "20px",
                                    paddingBottom: "20px"
                                },
                                buttonStyle: {
                                    border: "none",
                                    backgroundColor: "transparent"
                                },
                                dropdownStyle: {
                                    maxHeight: "150px",
                                    overflowY: "auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                lineNumber: 270,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Market Territory (City / State)"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 299,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "City / State",
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: market,
                            onChange: (e)=>setMarket(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 302,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Company Name"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Company Name",
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: companyName,
                            onChange: (e)=>setCompanyName(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Installation Volume (Monthly / Yearly)"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Installation Volume",
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: installationVolume,
                            onChange: (e)=>setInstallationVolume(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Primary Client Types"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 335,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4",
                            style: {
                                marginTop: "8px"
                            },
                            children: primaryClientTypes.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectClientType(item),
                                        className: "border border-[#00000010] rounded px-4 h-[70px] outline-none focus:outline-none focus:ring-0 w-auto",
                                        style: {
                                            ...styles.inputStyle,
                                            borderRadius: "30px",
                                            whiteSpace: "nowrap",
                                            border: primaryClientType.includes(item.title) ? "2px solid #7902DF" : "",
                                            backgroundColor: primaryClientType.includes(item.title) ? "#402FFF20" : ""
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                        lineNumber: 341,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                    lineNumber: 340,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 338,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                            open: showVerifyPopup,
                            closeAfterTransition: true,
                            BackdropProps: {
                                timeout: 1000,
                                sx: {
                                    backgroundColor: "#00000020"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "lg:w-8/12 sm:w-full w-8/12",
                                sx: styles.verifyPopup,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row justify-center w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:w-7/12 w-full",
                                        style: {
                                            backgroundColor: "#ffffff",
                                            padding: 20,
                                            borderRadius: "13px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleClose,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/crossIcon.png",
                                                        height: 40,
                                                        width: 40,
                                                        alt: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                        lineNumber: 378,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                    lineNumber: 377,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                lineNumber: 376,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 26,
                                                    fontWeight: "700"
                                                },
                                                children: "Verify phone number"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                lineNumber: 386,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
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
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                lineNumber: 389,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
                                                style: {
                                                    display: "flex",
                                                    gap: "8px"
                                                },
                                                children: Array.from({
                                                    length
                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                        type: "tel",
                                                        inputMode: "numeric",
                                                        maxLength: 1,
                                                        value: VerifyCode[index],
                                                        onChange: (e)=>{
                                                            const value = e.target.value;
                                                            if (!/[0-9]/.test(value) && value !== "") return;
                                                            const newValues = [
                                                                ...VerifyCode
                                                            ];
                                                            newValues[index] = value;
                                                            setVerifyCode(newValues);
                                                        },
                                                        placeholder: "-",
                                                        style: {
                                                            width: "40px",
                                                            height: "40px",
                                                            textAlign: "center",
                                                            fontSize: "20px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px"
                                                        },
                                                        className: "focus:outline-none focus:ring-0"
                                                    }, index, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                lineNumber: 397,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 flex flex-row items-center gap-2",
                                                style: styles.inputStyle,
                                                children: [
                                                    "Didn't receive code?",
                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "outline-none border-none text-purple",
                                                        onClick: handleVerifyPopup,
                                                        children: "Resend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                        lineNumber: 435,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                lineNumber: 427,
                                                columnNumber: 19
                                            }, this),
                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center mt-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                    size: 35
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                    lineNumber: 446,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                lineNumber: 445,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                style: {
                                                    height: "50px"
                                                },
                                                onClick: ()=>{
                                                    console.log("Verifying code...");
                                                    setShowVerifyPopup(false);
                                                },
                                                children: "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                                lineNumber: 449,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                        lineNumber: 368,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                    lineNumber: 367,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 358,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: response.message,
                            isVisible: isVisible,
                            setIsVisible: setIsVisible,
                            success: response.status
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                    lineNumber: 152,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                                lineNumber: 477,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 476,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                            lineNumber: 480,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
                    lineNumber: 475,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx",
        lineNumber: 146,
        columnNumber: 5
    }, this);
};
_s(SolarRepAgentSignUp, "YlseNLJNCS/+CJqeO2ARnN5dKLM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SolarRepAgentSignUp;
const __TURBOPACK__default__export__ = SolarRepAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "SolarRepAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utilities/validateEmail'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const MarketerAgentSignUp = ({ handleMarketerAgentBack })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [servicesOffered, setServicesOffered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill(""));
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const length = 6;
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        message: ""
    });
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const servicesOptions = [
        {
            title: "Social Media Marketing"
        },
        {
            title: "SEO / SEM"
        },
        {
            title: "Email Marketing"
        },
        {
            title: "Content Creation"
        },
        {
            title: "Paid Ads"
        },
        {
            title: "Other"
        }
    ];
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
        verifyPopup: {
            height: "auto",
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            border: "none",
            outline: "none"
        }
    };
    const checkEmail = async (email)=>{
        setEmailLoader(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail, {
                email
            });
            if (response?.data) {
                setEmailCheckResponse({
                    status: response.data.status,
                    message: response.data.message
                });
            }
        } catch (error) {
            console.error("Error checking email:", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const handlePhoneNumberChange = (value)=>{
        setUserPhoneNumber(value);
    };
    const handleSelectService = (item)=>{
        if (servicesOffered.includes(item.title)) {
            setServicesOffered(servicesOffered.filter((t)=>t !== item.title));
        } else {
            setServicesOffered([
                ...servicesOffered,
                item.title
            ]);
        }
    };
    const handleVerifyPopup = ()=>{
        setShowVerifyPopup(true);
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MarketerAgentSignUp.useEffect": ()=>{
            if (companyName.trim() !== "" && servicesOffered.length > 0) {
                setShouldContinue(false);
            } else {
                setShouldContinue(true);
            }
        }
    }["MarketerAgentSignUp.useEffect"], [
        companyName,
        servicesOffered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row w-full justify-center h-[100svh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center px-4 h-[90%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                    style: {
                        textAlign: "center"
                    },
                    children: "Your Contact Information"
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                    style: {
                        scrollbarWidth: "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            children: "What's your full name"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Name",
                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userName,
                            onChange: (e)=>{
                                const input = e.target.value;
                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                setUserName(formattedName);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center w-full justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your email address"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 171,
                                            columnNumber: 17
                                        }, this) : emailCheckResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: emailCheckResponse.status ? "green" : "red"
                                            },
                                            children: emailCheckResponse.message.charAt(0).toUpperCase() + emailCheckResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 174,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red"
                                            },
                                            children: validEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 184,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                    lineNumber: 169,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 167,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userEmail,
                            type: "text",
                            placeholder: "Email address",
                            onChange: (e)=>{
                                const value = e.target.value;
                                setUserEmail(value);
                                if (timerRef.current) clearTimeout(timerRef.current);
                                setEmailCheckResponse(null);
                                if (!value) {
                                    setValidEmail("");
                                    return;
                                }
                                if (!validateEmail(value)) {
                                    setValidEmail("Invalid");
                                } else {
                                    timerRef.current = setTimeout(()=>{
                                        checkEmail(value);
                                    }, 300);
                                }
                            },
                            onFocus: (e)=>e.target.setAttribute("autocomplete", "off")
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 188,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center justify-between w-full mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your phone number"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                    lineNumber: 219,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple",
                                            style: {
                                                ...styles.errmsg,
                                                height: "20px"
                                            },
                                            children: "Getting location ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this),
                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red",
                                                height: "20px"
                                            },
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 227,
                                            columnNumber: 17
                                        }, this) : phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black",
                                                height: "20px"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 237,
                                            columnNumber: 17
                                        }, this) : checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: checkPhoneResponse.status ? "green" : "red",
                                                height: "20px"
                                            },
                                            children: checkPhoneResponse.message.charAt(0).toUpperCase() + checkPhoneResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 247,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                            lineNumber: 257,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                    lineNumber: 220,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 218,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "8px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border outline-none bg-white",
                                country: "us",
                                onlyCountries: [
                                    "us"
                                ],
                                disableDropdown: true,
                                countryCodeEditable: false,
                                value: userPhoneNumber,
                                onChange: handlePhoneNumberChange,
                                placeholder: locationLoader ? "Loading location ..." : "Enter Phone Number",
                                inputStyle: {
                                    width: "100%",
                                    borderWidth: "0px",
                                    backgroundColor: "transparent",
                                    paddingLeft: "60px",
                                    paddingTop: "20px",
                                    paddingBottom: "20px"
                                },
                                buttonStyle: {
                                    border: "none",
                                    backgroundColor: "transparent"
                                },
                                dropdownStyle: {
                                    maxHeight: "150px",
                                    overflowY: "auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Company Name"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Company Name",
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: companyName,
                            onChange: (e)=>setCompanyName(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 295,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Services You Offer"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 304,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4",
                            style: {
                                marginTop: "8px"
                            },
                            children: servicesOptions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectService(item),
                                        className: "border border-[#00000010] rounded px-4 h-[70px] outline-none focus:outline-none focus:ring-0 w-auto",
                                        style: {
                                            ...styles.inputStyle,
                                            borderRadius: "30px",
                                            whiteSpace: "nowrap",
                                            border: servicesOffered.includes(item.title) ? "2px solid #7902DF" : "",
                                            backgroundColor: servicesOffered.includes(item.title) ? "#402FFF20" : ""
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                        lineNumber: 310,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                    lineNumber: 309,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                            open: showVerifyPopup,
                            closeAfterTransition: true,
                            BackdropProps: {
                                timeout: 1000,
                                sx: {
                                    backgroundColor: "#00000020"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "lg:w-8/12 sm:w-full w-8/12",
                                sx: styles.verifyPopup,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row justify-center w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:w-7/12 w-full",
                                        style: {
                                            backgroundColor: "#ffffff",
                                            padding: 20,
                                            borderRadius: "13px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleClose,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/crossIcon.png",
                                                        height: 40,
                                                        width: 40,
                                                        alt: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                        lineNumber: 348,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                    lineNumber: 347,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                lineNumber: 346,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 26,
                                                    fontWeight: "700"
                                                },
                                                children: "Verify phone number"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                lineNumber: 356,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
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
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                lineNumber: 359,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
                                                style: {
                                                    display: "flex",
                                                    gap: "8px"
                                                },
                                                children: Array.from({
                                                    length
                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                        type: "tel",
                                                        inputMode: "numeric",
                                                        maxLength: 1,
                                                        value: VerifyCode[index],
                                                        onChange: (e)=>{
                                                            const value = e.target.value;
                                                            if (!/[0-9]/.test(value) && value !== "") return;
                                                            const newValues = [
                                                                ...VerifyCode
                                                            ];
                                                            newValues[index] = value;
                                                            setVerifyCode(newValues);
                                                        },
                                                        placeholder: "-",
                                                        style: {
                                                            width: "40px",
                                                            height: "40px",
                                                            textAlign: "center",
                                                            fontSize: "20px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px"
                                                        },
                                                        className: "focus:outline-none focus:ring-0"
                                                    }, index, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                        lineNumber: 369,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                lineNumber: 367,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 flex flex-row items-center gap-2",
                                                style: styles.inputStyle,
                                                children: [
                                                    "Didn't receive code?",
                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                        lineNumber: 403,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "outline-none border-none text-purple",
                                                        onClick: handleVerifyPopup,
                                                        children: "Resend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                        lineNumber: 405,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                lineNumber: 397,
                                                columnNumber: 19
                                            }, this),
                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center mt-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                    size: 35
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                    lineNumber: 416,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                lineNumber: 415,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                style: {
                                                    height: "50px"
                                                },
                                                onClick: ()=>{
                                                    console.log("Verifying code...");
                                                    setShowVerifyPopup(false);
                                                },
                                                children: "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                                lineNumber: 419,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                    lineNumber: 337,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                lineNumber: 336,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 328,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: response.message,
                            isVisible: isVisible,
                            setIsVisible: setIsVisible,
                            success: response.status
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 436,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                    lineNumber: 145,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                                lineNumber: 447,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleMarketerAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                            lineNumber: 450,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
                    lineNumber: 445,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/MarketerAgentSignUp.tsx",
        lineNumber: 139,
        columnNumber: 5
    }, this);
};
_s(MarketerAgentSignUp, "IV/7YA6sqQL3Wr9aNeCHZoyjtII=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MarketerAgentSignUp;
const __TURBOPACK__default__export__ = MarketerAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "MarketerAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Body.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-client] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/apisServices/ApiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/UserUtility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// import VerificationCodeInput from '../test/VerificationCodeInput';
const WebOwnersAgentSignUp = ({ handleContinue, handleWebsiteAgentBack, length = 6, onComplete, handleWaitList })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const [emailErr, setEmailCheckResponse] = useState(false);
    const [userFarm, setUserFarm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userBrokage, setUserBrokage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userTransaction, setUserTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //phone number input variable
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //verify code input fields
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(length).fill(""));
    //check email availability
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errMessage, setErrMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //check phone number availability
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    //web url
    const [websiteUrl, setWebsiteUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [urlError, setUrlError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [urlErrorMessage, setUrlErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //get location
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebOwnersAgentSignUp.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["WebOwnersAgentSignUp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebOwnersAgentSignUp.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["WebOwnersAgentSignUp.useEffect"], []);
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebOwnersAgentSignUp.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && websiteUrl && emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || !websiteUrl || checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["WebOwnersAgentSignUp.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        websiteUrl,
        checkPhoneResponse,
        emailCheckResponse
    ]);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebOwnersAgentSignUp.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["WebOwnersAgentSignUp.useEffect"], [
        showVerifyPopup
    ]);
    // Handle phone number change and validation
    const handlePhoneNumberChange = (phone)=>{
        setUserPhoneNumber(phone);
        validatePhoneNumber(phone);
        if (!phone) {
            setErrorMessage("");
        }
    };
    // Function to validate phone number
    const validatePhoneNumber = (phoneNumber)=>{
        // const parsedNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
        // parsePhoneNumberFromString(`+${phone}`, countryCode?.toUpperCase())
        const parsedNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])(`+${phoneNumber}`, countryCode?.toUpperCase());
        // if (parsedNumber && parsedNumber.isValid() && parsedNumber.country === countryCode?.toUpperCase()) {
        if (!parsedNumber || !parsedNumber.isValid()) {
            setErrorMessage("Invalid");
        } else {
            setErrorMessage("");
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            // setCheckPhoneResponse(null);
            // //console.log;
            timerRef.current = setTimeout(()=>{
                checkPhoneNumber(phoneNumber);
            // //console.log;
            }, 300);
        }
    };
    //email validation function
    const validateEmail = (email)=>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // Check if email contains consecutive dots, which are invalid
        if (/\.\./.test(email)) {
            return false;
        }
        // Check the general pattern for a valid email
        return emailPattern.test(email);
    };
    //code for verify number popup
    const handleVerifyPopup = async ()=>{
        try {
            setSendcodeLoader(true);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userPhoneNumber, true);
            setResponse(response);
            setIsVisible(true);
        // //console.log;
        } catch (error) {
        // console.error("Error occured", error);
        } finally{
            setSendcodeLoader(false);
        }
        setShowVerifyPopup(true);
        setTimeout(()=>{
            if (verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }, 100); // Adjust the delay as needed, 0 should be enough
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    //code for url validation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebOwnersAgentSignUp.useEffect": ()=>{
            let timer = setTimeout({
                "WebOwnersAgentSignUp.useEffect.timer": ()=>{
                    //console.log);
                    if (websiteUrl) {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidUrl"])(websiteUrl)) {
                            setUrlError(true);
                            setErrMessage("");
                        //console.log;
                        } else {
                            setUrlErrorMessage("Invalid");
                            setUrlError(false);
                        }
                    }
                }
            }["WebOwnersAgentSignUp.useEffect.timer"], 300);
            return ({
                "WebOwnersAgentSignUp.useEffect": ()=>clearTimeout(timer)
            })["WebOwnersAgentSignUp.useEffect"];
        }
    }["WebOwnersAgentSignUp.useEffect"], [
        websiteUrl
    ]);
    //code for handling verify code changes
    const handleVerifyInputChange = (e, index)=>{
        const { value } = e.target;
        if (!/[0-9]/.test(value) && value !== "") return; // Allow only numeric input
        const newValues = [
            ...VerifyCode
        ];
        newValues[index] = value;
        setVerifyCode(newValues);
        // Move focus to the next field if a number is entered
        if (value && index < length - 1) {
            verifyInputRef.current[index + 1].focus();
        }
        // Trigger onComplete callback if all fields are filled
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join("")); // Convert array to a single string here
        }
    };
    const handleBackspace = (e, index)=>{
        if (e.key === "Backspace") {
            if (VerifyCode[index] === "" && index > 0) {
                verifyInputRef.current[index - 1].focus();
            }
            const newValues = [
                ...VerifyCode
            ];
            newValues[index] = "";
            setVerifyCode(newValues);
        }
    };
    const handlePaste = (e)=>{
        const pastedText = e.clipboardData.getData("text").slice(0, length);
        const newValues = pastedText.split("").map((char)=>/[0-9]/.test(char) ? char : "");
        setVerifyCode(newValues);
        // Set each input's value and move focus to the last filled input
        newValues.forEach((char, index)=>{
            verifyInputRef.current[index].value = char;
            if (index === newValues.length - 1) {
                verifyInputRef.current[index].focus();
            }
        });
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join(""));
        }
    };
    //code for number verification
    const handleVerifyCode = ()=>{
        // //console.log);
        setPhoneVerifiedSuccessSnack(true);
        handleRegister();
    };
    //code for registering user
    const handleRegister = async ()=>{
        try {
            setRegisterLoader(true);
            let agentTitle = userData.userTypeTitle;
            const formData = new FormData();
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register;
            let campainee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCampaigneeNameIfAvailable"])(window);
            if (campainee) {
                formData.append("campaignee", campainee);
            }
            // const formData = new FormData();
            formData.append("name", userName);
            formData.append("email", userEmail);
            formData.append("phone", userPhoneNumber);
            // formData.append("farm", userFarm);
            // formData.append("brokerage", userBrokage);
            // formData.append("averageTransactionPerYear", userTransaction);
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("userType", agentTitle);
            formData.append("website", websiteUrl);
            formData.append("login", false);
            formData.append("verificationCode", VerifyCode.join(""));
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            // return
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                setResponse(response.data);
                setIsVisible(true);
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
                    // localStorage.setItem("User", JSON.stringify(response.data.data));
                    //set cokie on locastorage to run middle ware
                    // document.cookie = `User=${encodeURIComponent(
                    //   JSON.stringify(response.data.data)
                    // )}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                    //check for document undefined issue
                    // if (typeof document !== "undefined") {
                    //     document.cookie = `User=${encodeURIComponent(
                    //         JSON.stringify(response.data.data)
                    //     )}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                    // }
                    handleWaitList();
                }
            }
        } catch (error) {
        // console.error("Error occured in register api is: ", error);
        } finally{
            setRegisterLoader(false);
        }
    };
    //code to check email and phone
    const checkEmail = async (value)=>{
        try {
            setValidEmail("");
            setEmailLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail;
            const ApiData = {
                email: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setEmailCheckResponse(response.data);
                } else {
                    setEmailCheckResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check email api is :", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const checkPhoneNumber = async (value)=>{
        try {
            setPhoneNumberLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckPhone;
            const ApiData = {
                phone: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setCheckPhoneResponse(response.data);
                } else {
                    setCheckPhoneResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check phone api is :", error);
        } finally{
            setPhoneNumberLoader(false);
        }
    };
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
        verifyPopup: {
            height: "auto",
            bgcolor: "transparent",
            // p: 2,
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            borderRadius: 2,
            border: "none",
            outline: "none"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl mx-2 w-full md:w-10/12 max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[82vh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                lineNumber: 460,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                            lineNumber: 459,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: "Your Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                    lineNumber: 464,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-full md:w-8/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            children: `What's your full name`
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 474,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userName,
                                            onChange: (e)=>{
                                                const input = e.target.value;
                                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                                // const words = input.split(' ');
                                                // const formattedName =
                                                //   words.length > 1
                                                //     ? words[0].toLowerCase() + ' ' + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                                //     : words[0].toLowerCase();
                                                setUserName(formattedName);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 475,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                    lineNumber: 498,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "black"
                                                            },
                                                            children: "Checking ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                            lineNumber: 503,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 509,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 524,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                            lineNumber: 507,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                            lineNumber: 528,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                    lineNumber: 501,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 497,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Email address",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userEmail,
                                            onChange: (e)=>{
                                                let value = e.target.value;
                                                setUserEmail(value);
                                                // if (value) {
                                                //   const timer = setTimeout(() => {
                                                //     checkEmail(value);
                                                //    // //console.log
                                                //   }, 1000);
                                                //   return (() => clearTimeout(timer));
                                                // } else {
                                                //   setEmailCheckResponse(null);
                                                // }
                                                if (timerRef.current) {
                                                    clearTimeout(timerRef.current);
                                                }
                                                setEmailCheckResponse(null);
                                                if (!value) {
                                                    // //console.log;
                                                    setValidEmail("");
                                                    return;
                                                }
                                                if (!validateEmail(value)) {
                                                    // //console.log;
                                                    setValidEmail("Invalid");
                                                } else {
                                                    // //console.log;
                                                    if (value) {
                                                        // Set a new timeout
                                                        timerRef.current = setTimeout(()=>{
                                                            checkEmail(value);
                                                        }, 300);
                                                    } else {
                                                        // Reset the response if input is cleared
                                                        setEmailCheckResponse(null);
                                                        setValidEmail("");
                                                    }
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 534,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                    lineNumber: 585,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple",
                                                            style: {
                                                                ...styles.errmsg,
                                                                height: "20px"
                                                            },
                                                            children: "Getting location ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                            lineNumber: 591,
                                                            columnNumber: 21
                                                        }, this),
                                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: errorMessage && "red",
                                                                height: "20px"
                                                            },
                                                            children: errorMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                            lineNumber: 599,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: "black",
                                                                    height: "20px"
                                                                },
                                                                children: "Checking ..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 611,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        ...styles.errmsg,
                                                                        color: checkPhoneResponse.status === true ? "green" : "red",
                                                                        height: "20px"
                                                                    },
                                                                    children: checkPhoneResponse.message.slice(0, 1).toUpperCase() + checkPhoneResponse.message.slice(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                    lineNumber: 623,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                    lineNumber: 639,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 621,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                            lineNumber: 609,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                    lineNumber: 589,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "border outline-none bg-white",
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
                                                style: {
                                                    borderRadius: "7px"
                                                },
                                                inputStyle: {
                                                    width: "100%",
                                                    borderWidth: "0px",
                                                    backgroundColor: "transparent",
                                                    paddingLeft: "60px",
                                                    paddingTop: "20px",
                                                    paddingBottom: "20px"
                                                },
                                                buttonStyle: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                },
                                                dropdownStyle: {
                                                    maxHeight: "150px",
                                                    overflowY: "auto"
                                                },
                                                defaultMask: loading ? "Loading..." : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                lineNumber: 649,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 648,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Website (URL)"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 687,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: urlErrorMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    ...styles.errmsg,
                                                    color: "red",
                                                    textAlign: "right"
                                                },
                                                children: urlErrorMessage
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                lineNumber: 692,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 690,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "URL",
                                            className: "border border-[#00000010] rounded p-3 outline-none mb-2 focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: websiteUrl,
                                            onChange: (e)=>{
                                                setWebsiteUrl(e.target.value);
                                                setUrlError(false);
                                                setUrlErrorMessage("");
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                                            open: showVerifyPopup,
                                            // onClose={() => setAddKYCQuestion(false)}
                                            closeAfterTransition: true,
                                            BackdropProps: {
                                                timeout: 1000,
                                                sx: {
                                                    backgroundColor: "#00000020"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "lg:w-8/12 sm:w-full w-8/12",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:w-7/12 w-full",
                                                        style: {
                                                            backgroundColor: "#ffffff",
                                                            padding: 20,
                                                            borderRadius: "13px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-row justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleClose,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/crossIcon.png",
                                                                        height: 40,
                                                                        width: 40,
                                                                        alt: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                        lineNumber: 743,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                    lineNumber: 742,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 741,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 751,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
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
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 759,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
                                                                style: {
                                                                    display: "flex",
                                                                    gap: "8px"
                                                                },
                                                                children: Array.from({
                                                                    length
                                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                                        // type="text"
                                                                        type: "tel",
                                                                        inputMode: "numeric",
                                                                        maxLength: "1",
                                                                        value: VerifyCode[index],
                                                                        onChange: (e)=>handleVerifyInputChange(e, index),
                                                                        onKeyDown: (e)=>handleBackspace(e, index),
                                                                        onKeyUp: (e)=>{
                                                                            // Check if the Enter key is pressed and all inputs are filled
                                                                            if (e.key === "Enter" && VerifyCode.every((value)=>value.trim() !== "")) {
                                                                                handleVerifyCode();
                                                                            }
                                                                        },
                                                                        onPaste: handlePaste,
                                                                        placeholder: "-",
                                                                        style: {
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            textAlign: "center",
                                                                            fontSize: "20px",
                                                                            border: "1px solid #ccc",
                                                                            borderRadius: "5px"
                                                                        },
                                                                        className: " focus:outline-none focus:ring-0"
                                                                    }, index, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                        lineNumber: 772,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 767,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 flex flex-row items-center gap-2",
                                                                style: styles.inputStyle,
                                                                children: [
                                                                    `Didn't receive code?`,
                                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                        lineNumber: 811,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                        lineNumber: 813,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 805,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                    lineNumber: 823,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 822,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                                lineNumber: 826,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                        lineNumber: 733,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                    lineNumber: 732,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                                lineNumber: 728,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 716,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            message: response.message,
                                            isVisible: isVisible,
                                            setIsVisible: (visible)=>{
                                                setIsVisible(visible);
                                            },
                                            success: response.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                            lineNumber: 839,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                    lineNumber: 470,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                            lineNumber: 463,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                    lineNumber: 457,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                                lineNumber: 853,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                            lineNumber: 852,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleWebsiteAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                            lineNumber: 856,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
                    lineNumber: 851,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
            lineNumber: 456,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/WebOwnersAgentSignUp.js",
        lineNumber: 452,
        columnNumber: 5
    }, this);
};
_s(WebOwnersAgentSignUp, "9Dr5Bfrs+jT99U8+gIpExRSS44I=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = WebOwnersAgentSignUp;
const __TURBOPACK__default__export__ = WebOwnersAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "WebOwnersAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Body.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-client] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/apisServices/ApiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/UserUtility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// import VerificationCodeInput from '../test/VerificationCodeInput';
const RecruiterAgentSignUp = ({ handleContinue, handleRecruiterAgentBack, length = 6, onComplete, handleWaitList })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const [emailErr, setEmailCheckResponse] = useState(false);
    const [userFarm, setUserFarm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userBrokage, setUserBrokage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userTransaction, setUserTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //phone number input variable
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //verify code input fields
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(length).fill(""));
    //check email availability
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errMessage, setErrMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //check phone number availability
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    //code for servie customers
    const [ServiceCustomer, setServiceCustomer] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //get location
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterAgentSignUp.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["RecruiterAgentSignUp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterAgentSignUp.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["RecruiterAgentSignUp.useEffect"], []);
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterAgentSignUp.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && ServiceCustomer && emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || !ServiceCustomer || checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["RecruiterAgentSignUp.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        checkPhoneResponse,
        emailCheckResponse,
        ServiceCustomer
    ]);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RecruiterAgentSignUp.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["RecruiterAgentSignUp.useEffect"], [
        showVerifyPopup
    ]);
    // Handle phone number change and validation
    const handlePhoneNumberChange = (phone)=>{
        setUserPhoneNumber(phone);
        validatePhoneNumber(phone);
        if (!phone) {
            setErrorMessage("");
        }
    };
    // Function to validate phone number
    const validatePhoneNumber = (phoneNumber)=>{
        // const parsedNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
        // parsePhoneNumberFromString(`+${phone}`, countryCode?.toUpperCase())
        const parsedNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])(`+${phoneNumber}`, countryCode?.toUpperCase());
        // if (parsedNumber && parsedNumber.isValid() && parsedNumber.country === countryCode?.toUpperCase()) {
        if (!parsedNumber || !parsedNumber.isValid()) {
            setErrorMessage("Invalid");
        } else {
            setErrorMessage("");
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            // setCheckPhoneResponse(null);
            // //console.log;
            timerRef.current = setTimeout(()=>{
                checkPhoneNumber(phoneNumber);
            // //console.log;
            }, 300);
        }
    };
    //email validation function
    const validateEmail = (email)=>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // Check if email contains consecutive dots, which are invalid
        if (/\.\./.test(email)) {
            return false;
        }
        // Check the general pattern for a valid email
        return emailPattern.test(email);
    };
    //code for verify number popup
    const handleVerifyPopup = async ()=>{
        try {
            setSendcodeLoader(true);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userPhoneNumber, true);
            setResponse(response);
            setIsVisible(true);
        // //console.log;
        } catch (error) {
        // console.error("Error occured", error);
        } finally{
            setSendcodeLoader(false);
        }
        setShowVerifyPopup(true);
        setTimeout(()=>{
            if (verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }, 100); // Adjust the delay as needed, 0 should be enough
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    //code for handling verify code changes
    const handleVerifyInputChange = (e, index)=>{
        const { value } = e.target;
        if (!/[0-9]/.test(value) && value !== "") return; // Allow only numeric input
        const newValues = [
            ...VerifyCode
        ];
        newValues[index] = value;
        setVerifyCode(newValues);
        // Move focus to the next field if a number is entered
        if (value && index < length - 1) {
            verifyInputRef.current[index + 1].focus();
        }
        // Trigger onComplete callback if all fields are filled
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join("")); // Convert array to a single string here
        }
    };
    const handleBackspace = (e, index)=>{
        if (e.key === "Backspace") {
            if (VerifyCode[index] === "" && index > 0) {
                verifyInputRef.current[index - 1].focus();
            }
            const newValues = [
                ...VerifyCode
            ];
            newValues[index] = "";
            setVerifyCode(newValues);
        }
    };
    const handlePaste = (e)=>{
        const pastedText = e.clipboardData.getData("text").slice(0, length);
        const newValues = pastedText.split("").map((char)=>/[0-9]/.test(char) ? char : "");
        setVerifyCode(newValues);
        // Set each input's value and move focus to the last filled input
        newValues.forEach((char, index)=>{
            verifyInputRef.current[index].value = char;
            if (index === newValues.length - 1) {
                verifyInputRef.current[index].focus();
            }
        });
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join(""));
        }
    };
    //code for number verification
    const handleVerifyCode = ()=>{
        // //console.log);
        setPhoneVerifiedSuccessSnack(true);
        // handleWaitList();
        handleRegister();
    };
    //code for registering user
    const handleRegister = async ()=>{
        try {
            setRegisterLoader(true);
            let agentTitle = userData.userTypeTitle;
            const formData = new FormData();
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register;
            let campainee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCampaigneeNameIfAvailable"])(window);
            if (campainee) {
                formData.append("campaignee", campainee);
            }
            // const formData = new FormData();
            formData.append("name", userName);
            formData.append("email", userEmail);
            formData.append("phone", userPhoneNumber);
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("userType", agentTitle);
            formData.append("areaOfService", ServiceCustomer);
            formData.append("login", false);
            formData.append("verificationCode", VerifyCode.join(""));
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            // return
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                setResponse(response.data);
                setIsVisible(true);
                // //console.log;
                if (response.data.status === true) {
                    localStorage.setItem("User", JSON.stringify(response.data.data));
                    if (typeof document !== "undefined") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(response.data.data.user, document);
                    }
                    let screenWidth = 1000;
                    if ("TURBOPACK compile-time truthy", 1) {
                        screenWidth = window.innerWidth; // Get current screen width
                    }
                    const SM_SCREEN_SIZE = 640; // Tailwind's sm breakpoint is typically 640px
                    if (screenWidth <= SM_SCREEN_SIZE) {
                        setCongratsPopup(true);
                    // //console.log;
                    } else {
                        // //console.log;
                        // handleContinue();
                        router.push("/createagent");
                    // setCongratsPopup(true);
                    }
                }
            }
        } catch (error) {
        // console.error("Error occured in register api is: ", error);
        } finally{
            setRegisterLoader(false);
        }
    };
    //code to check email and phone
    const checkEmail = async (value)=>{
        try {
            setValidEmail("");
            setEmailLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail;
            const ApiData = {
                email: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setEmailCheckResponse(response.data);
                } else {
                    setEmailCheckResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check email api is :", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const checkPhoneNumber = async (value)=>{
        try {
            setPhoneNumberLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckPhone;
            const ApiData = {
                phone: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setCheckPhoneResponse(response.data);
                } else {
                    setCheckPhoneResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check phone api is :", error);
        } finally{
            setPhoneNumberLoader(false);
        }
    };
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
        verifyPopup: {
            height: "auto",
            bgcolor: "transparent",
            // p: 2,
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            borderRadius: 2,
            border: "none",
            outline: "none"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl mx-2 w-full md:w-10/12 max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: "Your Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                    lineNumber: 447,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-full md:w-8/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            children: `What's your full name`
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userName,
                                            onChange: (e)=>{
                                                const input = e.target.value;
                                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                                // const words = input.split(' ');
                                                // const formattedName =
                                                //   words.length > 1
                                                //     ? words[0].toLowerCase() + ' ' + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                                //     : words[0].toLowerCase();
                                                setUserName(formattedName);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 458,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                    lineNumber: 481,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "black"
                                                            },
                                                            children: "Checking ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                            lineNumber: 486,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 492,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 507,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                            lineNumber: 490,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                            lineNumber: 511,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                    lineNumber: 484,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 480,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Email address",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userEmail,
                                            onChange: (e)=>{
                                                let value = e.target.value;
                                                setUserEmail(value);
                                                // if (value) {
                                                //   const timer = setTimeout(() => {
                                                //     checkEmail(value);
                                                //    // //console.log
                                                //   }, 1000);
                                                //   return (() => clearTimeout(timer));
                                                // } else {
                                                //   setEmailCheckResponse(null);
                                                // }
                                                if (timerRef.current) {
                                                    clearTimeout(timerRef.current);
                                                }
                                                setEmailCheckResponse(null);
                                                if (!value) {
                                                    // //console.log;
                                                    setValidEmail("");
                                                    return;
                                                }
                                                if (!validateEmail(value)) {
                                                    // //console.log;
                                                    setValidEmail("Invalid");
                                                } else {
                                                    // //console.log;
                                                    if (value) {
                                                        // Set a new timeout
                                                        timerRef.current = setTimeout(()=>{
                                                            checkEmail(value);
                                                        }, 300);
                                                    } else {
                                                        // Reset the response if input is cleared
                                                        setEmailCheckResponse(null);
                                                        setValidEmail("");
                                                    }
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 517,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                    lineNumber: 568,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple",
                                                            style: {
                                                                ...styles.errmsg,
                                                                height: "20px"
                                                            },
                                                            children: "Getting location ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                            lineNumber: 574,
                                                            columnNumber: 21
                                                        }, this),
                                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: errorMessage && "red",
                                                                height: "20px"
                                                            },
                                                            children: errorMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                            lineNumber: 582,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: "black",
                                                                    height: "20px"
                                                                },
                                                                children: "Checking ..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 594,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        ...styles.errmsg,
                                                                        color: checkPhoneResponse.status === true ? "green" : "red",
                                                                        height: "20px"
                                                                    },
                                                                    children: checkPhoneResponse.message.slice(0, 1).toUpperCase() + checkPhoneResponse.message.slice(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                    lineNumber: 606,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                    lineNumber: 622,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 604,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                            lineNumber: 592,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                    lineNumber: 572,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 567,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "border outline-none bg-white",
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
                                                style: {
                                                    borderRadius: "7px"
                                                },
                                                inputStyle: {
                                                    width: "100%",
                                                    borderWidth: "0px",
                                                    backgroundColor: "transparent",
                                                    paddingLeft: "60px",
                                                    paddingTop: "20px",
                                                    paddingBottom: "20px"
                                                },
                                                buttonStyle: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                },
                                                dropdownStyle: {
                                                    maxHeight: "150px",
                                                    overflowY: "auto"
                                                },
                                                defaultMask: loading ? "Loading..." : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                lineNumber: 632,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 631,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily operate or serve customers"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 670,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Specific cities, counties, or regions",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: ServiceCustomer,
                                            onChange: (e)=>{
                                                setServiceCustomer(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 673,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                                            open: showVerifyPopup,
                                            // onClose={() => setAddKYCQuestion(false)}
                                            closeAfterTransition: true,
                                            BackdropProps: {
                                                timeout: 1000,
                                                sx: {
                                                    backgroundColor: "#00000020"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "lg:w-8/12 sm:w-full w-8/12",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:w-7/12 w-full",
                                                        style: {
                                                            backgroundColor: "#ffffff",
                                                            padding: 20,
                                                            borderRadius: "13px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-row justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleClose,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/crossIcon.png",
                                                                        height: 40,
                                                                        width: 40,
                                                                        alt: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                        lineNumber: 710,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                    lineNumber: 709,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 708,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 718,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
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
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 726,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
                                                                style: {
                                                                    display: "flex",
                                                                    gap: "8px"
                                                                },
                                                                children: Array.from({
                                                                    length
                                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                                        // type="text"
                                                                        type: "tel",
                                                                        inputMode: "numeric",
                                                                        maxLength: "1",
                                                                        value: VerifyCode[index],
                                                                        onChange: (e)=>handleVerifyInputChange(e, index),
                                                                        onKeyDown: (e)=>handleBackspace(e, index),
                                                                        onKeyUp: (e)=>{
                                                                            // Check if the Enter key is pressed and all inputs are filled
                                                                            if (e.key === "Enter" && VerifyCode.every((value)=>value.trim() !== "")) {
                                                                                handleVerifyCode();
                                                                            }
                                                                        },
                                                                        onPaste: handlePaste,
                                                                        placeholder: "-",
                                                                        style: {
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            textAlign: "center",
                                                                            fontSize: "20px",
                                                                            border: "1px solid #ccc",
                                                                            borderRadius: "5px"
                                                                        },
                                                                        className: " focus:outline-none focus:ring-0"
                                                                    }, index, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                        lineNumber: 739,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 734,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 flex flex-row items-center gap-2",
                                                                style: styles.inputStyle,
                                                                children: [
                                                                    `Didn't receive code?`,
                                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                        lineNumber: 778,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                        lineNumber: 780,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 772,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                    lineNumber: 790,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 789,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                                lineNumber: 793,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                        lineNumber: 700,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                    lineNumber: 699,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                                lineNumber: 695,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 683,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            message: response.message,
                                            isVisible: isVisible,
                                            setIsVisible: (visible)=>{
                                                setIsVisible(visible);
                                            },
                                            success: response.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                            lineNumber: 806,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                    lineNumber: 453,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                    lineNumber: 440,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                                lineNumber: 820,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                            lineNumber: 819,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleRecruiterAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                            lineNumber: 823,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
                    lineNumber: 818,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
            lineNumber: 439,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/RecruiterAgentSignUp.js",
        lineNumber: 435,
        columnNumber: 5
    }, this);
};
_s(RecruiterAgentSignUp, "T5O0BvVbKxOnfT6B3o7SC5YevH0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = RecruiterAgentSignUp;
const __TURBOPACK__default__export__ = RecruiterAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "RecruiterAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@/utilities/validateEmail'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
const TaxAgentSignUp = ({ handleTaxAgentBack })=>{
    _s();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [servicesOffered, setServicesOffered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(6).fill(""));
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const length = 6;
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        status: false,
        message: ""
    });
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const servicesOptions = [
        {
            title: "Individual Tax Preparation"
        },
        {
            title: "Business Tax Preparation"
        },
        {
            title: "Tax Planning & Consulting"
        },
        {
            title: "Bookkeeping & Accounting"
        },
        {
            title: "Payroll Services"
        },
        {
            title: "Other"
        }
    ];
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
        verifyPopup: {
            height: "auto",
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            border: "none",
            outline: "none"
        }
    };
    const checkEmail = async (email)=>{
        setEmailLoader(true);
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail, {
                email
            });
            if (response?.data) {
                setEmailCheckResponse({
                    status: response.data.status,
                    message: response.data.message
                });
            }
        } catch (error) {
            console.error("Error checking email:", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const handlePhoneNumberChange = (value)=>{
        setUserPhoneNumber(value);
    // Optionally: add debounce + phone validation logic here
    };
    const handleSelectService = (item)=>{
        if (servicesOffered.includes(item.title)) {
            setServicesOffered(servicesOffered.filter((t)=>t !== item.title));
        } else {
            setServicesOffered([
                ...servicesOffered,
                item.title
            ]);
        }
    };
    const handleVerifyPopup = ()=>{
        setShowVerifyPopup(true);
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TaxAgentSignUp.useEffect": ()=>{
            if (servicesOffered.length > 0) {
                setShouldContinue(false);
            } else {
                setShouldContinue(true);
            }
        }
    }["TaxAgentSignUp.useEffect"], [
        servicesOffered
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row w-full justify-center h-[100svh]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full flex flex-col items-center px-4 h-[90%]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                    style: {
                        textAlign: "center"
                    },
                    children: "Your Contact Information"
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                    style: {
                        scrollbarWidth: "none"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            children: "What's your full name"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 146,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Name",
                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userName,
                            onChange: (e)=>{
                                const input = e.target.value;
                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                setUserName(formattedName);
                            }
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center w-full justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your email address"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 167,
                                            columnNumber: 17
                                        }, this) : emailCheckResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: emailCheckResponse.status ? "green" : "red"
                                            },
                                            children: emailCheckResponse.message.charAt(0).toUpperCase() + emailCheckResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 170,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red"
                                            },
                                            children: validEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 180,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 163,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: userEmail,
                            type: "text",
                            placeholder: "Email address",
                            onChange: (e)=>{
                                const value = e.target.value;
                                setUserEmail(value);
                                if (timerRef.current) clearTimeout(timerRef.current);
                                setEmailCheckResponse(null);
                                if (!value) {
                                    setValidEmail("");
                                    return;
                                }
                                if (!validateEmail(value)) {
                                    setValidEmail("Invalid");
                                } else {
                                    timerRef.current = setTimeout(()=>{
                                        checkEmail(value);
                                    }, 300);
                                }
                            },
                            onFocus: (e)=>e.target.setAttribute("autocomplete", "off")
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 184,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center justify-between w-full mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your phone number"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-purple",
                                            style: {
                                                ...styles.errmsg,
                                                height: "20px"
                                            },
                                            children: "Getting location ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this),
                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red",
                                                height: "20px"
                                            },
                                            children: errorMessage
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 223,
                                            columnNumber: 17
                                        }, this) : phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black",
                                                height: "20px"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 233,
                                            columnNumber: 17
                                        }, this) : checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: checkPhoneResponse.status ? "green" : "red",
                                                height: "20px"
                                            },
                                            children: checkPhoneResponse.message.charAt(0).toUpperCase() + checkPhoneResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                    lineNumber: 216,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 214,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                marginTop: "8px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                className: "border outline-none bg-white",
                                country: "us",
                                onlyCountries: [
                                    "us"
                                ],
                                disableDropdown: true,
                                countryCodeEditable: false,
                                value: userPhoneNumber,
                                onChange: handlePhoneNumberChange,
                                placeholder: locationLoader ? "Loading location ..." : "Enter Phone Number",
                                inputStyle: {
                                    width: "100%",
                                    borderWidth: "0px",
                                    backgroundColor: "transparent",
                                    paddingLeft: "60px",
                                    paddingTop: "20px",
                                    paddingBottom: "20px"
                                },
                                buttonStyle: {
                                    border: "none",
                                    backgroundColor: "transparent"
                                },
                                dropdownStyle: {
                                    maxHeight: "150px",
                                    overflowY: "auto"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                lineNumber: 259,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 258,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Name of the company you work with, if any."
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 288,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            placeholder: "Company Name",
                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                            style: {
                                ...styles.inputStyle,
                                marginTop: "8px"
                            },
                            value: companyName,
                            onChange: (e)=>setCompanyName(e.target.value)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 291,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Services You Offer"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 300,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4",
                            style: {
                                marginTop: "8px"
                            },
                            children: servicesOptions.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>handleSelectService(item),
                                        className: "border border-[#00000010] rounded px-4 h-[70px] outline-none focus:outline-none focus:ring-0 w-auto",
                                        style: {
                                            ...styles.inputStyle,
                                            borderRadius: "30px",
                                            whiteSpace: "nowrap",
                                            border: servicesOffered.includes(item.title) ? "2px solid #7902DF" : "",
                                            backgroundColor: servicesOffered.includes(item.title) ? "#402FFF20" : ""
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                        lineNumber: 306,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                    lineNumber: 305,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 303,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                            open: showVerifyPopup,
                            closeAfterTransition: true,
                            BackdropProps: {
                                timeout: 1000,
                                sx: {
                                    backgroundColor: "#00000020"
                                }
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                className: "lg:w-8/12 sm:w-full w-8/12",
                                sx: styles.verifyPopup,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-row justify-center w-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sm:w-7/12 w-full",
                                        style: {
                                            backgroundColor: "#ffffff",
                                            padding: 20,
                                            borderRadius: "13px"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row justify-end",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleClose,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: "/assets/crossIcon.png",
                                                        height: 40,
                                                        width: 40,
                                                        alt: "Close"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                        lineNumber: 343,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                    lineNumber: 342,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                lineNumber: 341,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 26,
                                                    fontWeight: "700"
                                                },
                                                children: "Verify phone number"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                lineNumber: 351,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
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
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                lineNumber: 354,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8",
                                                style: {
                                                    display: "flex",
                                                    gap: "8px"
                                                },
                                                children: Array.from({
                                                    length
                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                        ref: (el)=>{
                                                            verifyInputRef.current[index] = el;
                                                        },
                                                        type: "tel",
                                                        inputMode: "numeric",
                                                        maxLength: 1,
                                                        value: VerifyCode[index],
                                                        onChange: (e)=>{
                                                            const value = e.target.value;
                                                            if (!/[0-9]/.test(value) && value !== "") return;
                                                            const newValues = [
                                                                ...VerifyCode
                                                            ];
                                                            newValues[index] = value;
                                                            setVerifyCode(newValues);
                                                        },
                                                        placeholder: "-",
                                                        style: {
                                                            width: "40px",
                                                            height: "40px",
                                                            textAlign: "center",
                                                            fontSize: "20px",
                                                            border: "1px solid #ccc",
                                                            borderRadius: "5px"
                                                        },
                                                        className: "focus:outline-none focus:ring-0"
                                                    }, index, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                lineNumber: 362,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-8 flex flex-row items-center gap-2",
                                                style: styles.inputStyle,
                                                children: [
                                                    "Didn't receive code?",
                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                        size: 17
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                        lineNumber: 398,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "outline-none border-none text-purple",
                                                        onClick: handleVerifyPopup,
                                                        children: "Resend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                        lineNumber: 400,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                lineNumber: 392,
                                                columnNumber: 19
                                            }, this),
                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center mt-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                    size: 35
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                    lineNumber: 411,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                lineNumber: 410,
                                                columnNumber: 21
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                style: {
                                                    height: "50px"
                                                },
                                                onClick: ()=>{
                                                    // Example: handle verification submit
                                                    console.log("Verifying code...");
                                                    setShowVerifyPopup(false);
                                                },
                                                children: "Continue"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                                lineNumber: 414,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                        lineNumber: 333,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                lineNumber: 331,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            message: response.message,
                            isVisible: isVisible,
                            setIsVisible: setIsVisible,
                            success: response.status
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 432,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 442,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleTaxAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                            lineNumber: 446,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
            lineNumber: 136,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/TaxAgentSignUp.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
};
_s(TaxAgentSignUp, "iQgsMqkZ6a/gA5WBl2E/dpBqa2M=");
_c = TaxAgentSignUp;
const __TURBOPACK__default__export__ = TaxAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "TaxAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Body.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-client] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/apisServices/ApiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/UserUtility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/cookies.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// import VerificationCodeInput from '../test/VerificationCodeInput';
const MedSpaAgentSignUp = ({ handleContinue, handleWaitList, handleSolarAgentBack, length = 6, onComplete })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const [emailErr, setEmailCheckResponse] = useState(false);
    const [userFarm, setUserFarm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userBrokage, setUserBrokage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userTransaction, setUserTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //phone number input variable
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //verify code input fields
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(length).fill(""));
    //check email availability
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errMessage, setErrMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //check phone number availability
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    //code to select the client type
    const [customerService, setCustomerService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [installationVolume, setInstallationVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectSize, setProjectSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ClientType, setClientType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //array for the primary client types
    const primaryClientTypes = [
        {
            id: 1,
            title: "Individuals (B2)"
        },
        {
            id: 2,
            title: "Businesses & Corporations (B2B)"
        },
        {
            id: 3,
            title: "Government & Public Sector"
        }
    ];
    const ConsultationFormat = [
        {
            id: 1,
            title: "In-Person Consultations"
        },
        {
            id: 2,
            title: "Virtual Consultations"
        },
        {
            id: 3,
            title: "Virtual Consultationsr"
        }
    ];
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedSpaAgentSignUp.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["MedSpaAgentSignUp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedSpaAgentSignUp.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && customerService && companyName && installationVolume && // projectSize &&
            // ClientType &&
            emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || !userFarm || !userBrokage || !userTransaction || customerService || companyName || installationVolume || // projectSize ||
            // ClientType ||
            // userTransaction ||
            checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["MedSpaAgentSignUp.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        checkPhoneResponse,
        emailCheckResponse,
        customerService,
        companyName,
        installationVolume,
        projectSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedSpaAgentSignUp.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["MedSpaAgentSignUp.useEffect"], []);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedSpaAgentSignUp.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["MedSpaAgentSignUp.useEffect"], [
        showVerifyPopup
    ]);
    // Handle phone number change and validation
    const handlePhoneNumberChange = (phone)=>{
        setUserPhoneNumber(phone);
        validatePhoneNumber(phone);
        if (!phone) {
            setErrorMessage("");
        }
    };
    ///function to select client type
    const handleSelectClientType = (item)=>{
        // //console.log;
        setClientType(item.title);
    };
    // Function to validate phone number
    const validatePhoneNumber = (phoneNumber)=>{
        // const parsedNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
        // parsePhoneNumberFromString(`+${phone}`, countryCode?.toUpperCase())
        const parsedNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])(`+${phoneNumber}`, countryCode?.toUpperCase());
        // if (parsedNumber && parsedNumber.isValid() && parsedNumber.country === countryCode?.toUpperCase()) {
        if (!parsedNumber || !parsedNumber.isValid()) {
            setErrorMessage("Invalid");
        } else {
            setErrorMessage("");
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            // setCheckPhoneResponse(null);
            // //console.log;
            timerRef.current = setTimeout(()=>{
                checkPhoneNumber(phoneNumber);
            // //console.log;
            }, 300);
        }
    };
    //email validation function
    const validateEmail = (email)=>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // Check if email contains consecutive dots, which are invalid
        if (/\.\./.test(email)) {
            return false;
        }
        // Check the general pattern for a valid email
        return emailPattern.test(email);
    };
    //code for verify number popup
    const handleVerifyPopup = async ()=>{
        try {
            setSendcodeLoader(true);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userPhoneNumber, true);
            setResponse(response);
            setIsVisible(true);
        // //console.log;
        } catch (error) {
        // console.error("Error occured", error);
        } finally{
            setSendcodeLoader(false);
        }
        setShowVerifyPopup(true);
        setTimeout(()=>{
            if (verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }, 100); // Adjust the delay as needed, 0 should be enough
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    //code for handling verify code changes
    const handleVerifyInputChange = (e, index)=>{
        const { value } = e.target;
        if (!/[0-9]/.test(value) && value !== "") return; // Allow only numeric input
        const newValues = [
            ...VerifyCode
        ];
        newValues[index] = value;
        setVerifyCode(newValues);
        // Move focus to the next field if a number is entered
        if (value && index < length - 1) {
            verifyInputRef.current[index + 1].focus();
        }
        // Trigger onComplete callback if all fields are filled
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join("")); // Convert array to a single string here
        }
    };
    const handleBackspace = (e, index)=>{
        if (e.key === "Backspace") {
            if (VerifyCode[index] === "" && index > 0) {
                verifyInputRef.current[index - 1].focus();
            }
            const newValues = [
                ...VerifyCode
            ];
            newValues[index] = "";
            setVerifyCode(newValues);
        }
    };
    const handlePaste = (e)=>{
        const pastedText = e.clipboardData.getData("text").slice(0, length);
        const newValues = pastedText.split("").map((char)=>/[0-9]/.test(char) ? char : "");
        setVerifyCode(newValues);
        // Set each input's value and move focus to the last filled input
        newValues.forEach((char, index)=>{
            verifyInputRef.current[index].value = char;
            if (index === newValues.length - 1) {
                verifyInputRef.current[index].focus();
            }
        });
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join(""));
        }
    };
    //code for number verification
    const handleVerifyCode = ()=>{
        // //console.log);
        setPhoneVerifiedSuccessSnack(true);
        handleRegister();
    };
    //code for registering user
    const handleRegister = async ()=>{
        try {
            setRegisterLoader(true);
            let agentTitle = userData.userTypeTitle;
            let clienttype = null;
            const formData = new FormData();
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register;
            let campainee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCampaigneeNameIfAvailable"])(window);
            if (campainee) {
                formData.append("campaignee", campainee);
            }
            // const formData = new FormData();
            formData.append("name", userName);
            formData.append("email", userEmail);
            formData.append("phone", userPhoneNumber);
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("userType", agentTitle);
            formData.append("territory", customerService);
            formData.append("firmOrCompanyAffiliation", companyName);
            formData.append("averageMonthlyClients", installationVolume);
            // formData.append("projectsPerYear", projectSize);
            // formData.append("primaryClientType", clienttype);
            formData.append("login", false);
            formData.append("verificationCode", VerifyCode.join(""));
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            // return
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                setResponse(response.data);
                setIsVisible(true);
                // //console.log;
                if (response.data.status === true) {
                    localStorage.setItem("User", JSON.stringify(response.data.data));
                    if (typeof document !== "undefined") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(response.data.data.user, document);
                    }
                    let screenWidth = 1000;
                    if ("TURBOPACK compile-time truthy", 1) {
                        screenWidth = window.innerWidth; // Get current screen width
                    }
                    const SM_SCREEN_SIZE = 640; // Tailwind's sm breakpoint is typically 640px
                    if (screenWidth <= SM_SCREEN_SIZE) {
                        setCongratsPopup(true);
                    // //console.log;
                    } else {
                        // //console.log;
                        // handleContinue();
                        router.push("/createagent");
                    // setCongratsPopup(true);
                    }
                }
            }
        } catch (error) {
        // console.error("Error occured in register api is: ", error);
        } finally{
            setRegisterLoader(false);
        }
    };
    //code to check email and phone
    const checkEmail = async (value)=>{
        try {
            setValidEmail("");
            setEmailLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail;
            const ApiData = {
                email: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setEmailCheckResponse(response.data);
                } else {
                    setEmailCheckResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check email api is :", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const checkPhoneNumber = async (value)=>{
        try {
            setPhoneNumberLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckPhone;
            const ApiData = {
                phone: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setCheckPhoneResponse(response.data);
                } else {
                    setCheckPhoneResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check phone api is :", error);
        } finally{
            setPhoneNumberLoader(false);
        }
    };
    const styles = {
        headingStyle: {
            fontSize: 16,
            fontWeight: "600"
        },
        inputStyle: {
            fontSize: 13,
            fontWeight: "500",
            borderRadius: "7px"
        },
        errmsg: {
            fontSize: 12,
            fontWeight: "500",
            borderRadius: "7px"
        },
        verifyPopup: {
            height: "auto",
            bgcolor: "transparent",
            // p: 2,
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            borderRadius: 2,
            border: "none",
            outline: "none"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl mx-2 w-full md:w-10/12 max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                lineNumber: 504,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                            lineNumber: 503,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: "Your Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                    lineNumber: 508,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            children: `What's your full name`
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 518,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userName,
                                            onChange: (e)=>{
                                                const input = e.target.value;
                                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                                // const words = input.split(' ');
                                                // const formattedName =
                                                //   words.length > 1
                                                //     ? words[0].toLowerCase() + ' ' + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                                //     : words[0].toLowerCase();
                                                setUserName(formattedName);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 519,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                    lineNumber: 542,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "black"
                                                            },
                                                            children: "Checking ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                            lineNumber: 547,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 553,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 568,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                            lineNumber: 551,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                            lineNumber: 572,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                    lineNumber: 545,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 541,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Email address",
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userEmail,
                                            onChange: (e)=>{
                                                let value = e.target.value;
                                                setUserEmail(value);
                                                // if (value) {
                                                //   const timer = setTimeout(() => {
                                                //     checkEmail(value);
                                                //    // //console.log
                                                //   }, 1000);
                                                //   return (() => clearTimeout(timer));
                                                // } else {
                                                //   setEmailCheckResponse(null);
                                                // }
                                                if (timerRef.current) {
                                                    clearTimeout(timerRef.current);
                                                }
                                                setEmailCheckResponse(null);
                                                if (!value) {
                                                    // //console.log;
                                                    setValidEmail("");
                                                    return;
                                                }
                                                if (!validateEmail(value)) {
                                                    // //console.log;
                                                    setValidEmail("Invalid");
                                                } else {
                                                    // //console.log;
                                                    if (value) {
                                                        // Set a new timeout
                                                        timerRef.current = setTimeout(()=>{
                                                            checkEmail(value);
                                                        }, 300);
                                                    } else {
                                                        // Reset the response if input is cleared
                                                        setEmailCheckResponse(null);
                                                        setValidEmail("");
                                                    }
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 578,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                    lineNumber: 632,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple",
                                                            style: {
                                                                ...styles.errmsg,
                                                                height: "20px"
                                                            },
                                                            children: "Getting location ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                            lineNumber: 638,
                                                            columnNumber: 21
                                                        }, this),
                                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: errorMessage && "red",
                                                                height: "20px"
                                                            },
                                                            children: errorMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                            lineNumber: 646,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: "black",
                                                                    height: "20px"
                                                                },
                                                                children: "Checking ..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 658,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        ...styles.errmsg,
                                                                        color: checkPhoneResponse.status === true ? "green" : "red",
                                                                        height: "20px"
                                                                    },
                                                                    children: checkPhoneResponse.message.slice(0, 1).toUpperCase() + checkPhoneResponse.message.slice(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                    lineNumber: 670,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                    lineNumber: 686,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 668,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                            lineNumber: 656,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                    lineNumber: 636,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 631,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "border outline-none bg-white",
                                                value: userPhoneNumber,
                                                onChange: handlePhoneNumberChange,
                                                placeholder: locationLoader ? "Loading location ..." : "Enter Phone Number",
                                                disabled: loading,
                                                style: {
                                                    borderRadius: "7px"
                                                },
                                                inputStyle: {
                                                    width: "100%",
                                                    borderWidth: "0px",
                                                    backgroundColor: "transparent",
                                                    paddingLeft: "60px",
                                                    paddingTop: "20px",
                                                    paddingBottom: "20px"
                                                },
                                                buttonStyle: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                },
                                                dropdownStyle: {
                                                    maxHeight: "150px",
                                                    overflowY: "auto"
                                                },
                                                defaultMask: loading ? "Loading..." : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                lineNumber: 696,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 695,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily operate?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 730,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Specific cities, counties, or regions",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: customerService,
                                            onChange: (e)=>{
                                                setCustomerService(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 733,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Name of the med spa or practice you work with, if any."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 743,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: companyName,
                                            onChange: (e)=>{
                                                setCompanyName(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 746,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "How many clients do you typically see per month?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 756,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Type here",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: installationVolume,
                                            onChange: (e)=>{
                                                setInstallationVolume(e.target.value);
                                            },
                                            type: "number"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 759,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                                            open: showVerifyPopup,
                                            // onClose={() => setAddKYCQuestion(false)}
                                            closeAfterTransition: true,
                                            BackdropProps: {
                                                timeout: 1000,
                                                sx: {
                                                    backgroundColor: "#00000020"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "lg:w-8/12 sm:w-full w-8/12",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:w-7/12 w-full",
                                                        style: {
                                                            backgroundColor: "#ffffff",
                                                            padding: 20,
                                                            borderRadius: "13px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-row justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleClose,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/crossIcon.png",
                                                                        height: 40,
                                                                        width: 40,
                                                                        alt: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                        lineNumber: 797,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                    lineNumber: 796,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 795,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 805,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
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
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 813,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
                                                                style: {
                                                                    display: "flex",
                                                                    gap: "8px"
                                                                },
                                                                children: Array.from({
                                                                    length
                                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                                        // type="text"
                                                                        type: "tel",
                                                                        inputMode: "numeric",
                                                                        maxLength: "1",
                                                                        value: VerifyCode[index],
                                                                        onChange: (e)=>handleVerifyInputChange(e, index),
                                                                        onKeyDown: (e)=>handleBackspace(e, index),
                                                                        onKeyUp: (e)=>{
                                                                            // Check if the Enter key is pressed and all inputs are filled
                                                                            if (e.key === "Enter" && VerifyCode.every((value)=>value.trim() !== "")) {
                                                                                handleVerifyCode();
                                                                            }
                                                                        },
                                                                        onPaste: handlePaste,
                                                                        placeholder: "-",
                                                                        style: {
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            textAlign: "center",
                                                                            fontSize: "20px",
                                                                            border: "1px solid #ccc",
                                                                            borderRadius: "5px"
                                                                        },
                                                                        className: " focus:outline-none focus:ring-0"
                                                                    }, index, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                        lineNumber: 826,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 821,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 flex flex-row items-center gap-2",
                                                                style: styles.inputStyle,
                                                                children: [
                                                                    `Didn't receive code?`,
                                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                        lineNumber: 865,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                        lineNumber: 867,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 859,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                    lineNumber: 877,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 876,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                                lineNumber: 880,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                        lineNumber: 787,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                    lineNumber: 786,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                                lineNumber: 782,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            message: response.message,
                                            isVisible: isVisible,
                                            setIsVisible: (visible)=>{
                                                setIsVisible(visible);
                                            },
                                            success: response.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                            lineNumber: 893,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                    lineNumber: 514,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                            lineNumber: 507,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                    lineNumber: 501,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                                lineNumber: 907,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                            lineNumber: 906,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                            lineNumber: 910,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
                    lineNumber: 905,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
            lineNumber: 500,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/MedSpaAgentSignUp.js",
        lineNumber: 496,
        columnNumber: 5
    }, this);
};
_s(MedSpaAgentSignUp, "sKmJR3GvWvTiqbqZQSjmYAe48/0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MedSpaAgentSignUp;
const __TURBOPACK__default__export__ = MedSpaAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "MedSpaAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Body.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-client] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/apisServices/ApiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/UserUtility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/cookies.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// import VerificationCodeInput from '../test/VerificationCodeInput';
const LawAgentSignUp = ({ handleContinue, handleWaitList, handleSolarAgentBack, length = 6, onComplete })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const [emailErr, setEmailCheckResponse] = useState(false);
    const [userFarm, setUserFarm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userBrokage, setUserBrokage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userTransaction, setUserTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //phone number input variable
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //verify code input fields
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(length).fill(""));
    //check email availability
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errMessage, setErrMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //check phone number availability
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    //code to select the client type
    const [customerService, setCustomerService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [installationVolume, setInstallationVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectSize, setProjectSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ClientType, setClientType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [consultation, setConsultation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //array for the primary client types
    const primaryClientTypes = [
        {
            id: 1,
            title: "Individuals (B2)"
        },
        {
            id: 2,
            title: "Businesses & Corporations (B2B)"
        },
        {
            id: 3,
            title: "Government & Public Sector"
        }
    ];
    const ConsultationFormat = [
        {
            id: 1,
            title: "In-Person Consultations"
        },
        {
            id: 2,
            title: "Virtual Consultations"
        },
        {
            id: 3,
            title: "Virtual Consultationsr"
        }
    ];
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LawAgentSignUp.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["LawAgentSignUp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LawAgentSignUp.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && customerService && companyName && installationVolume && // projectSize &&
            ClientType && emailCheckResponse?.status === true && checkPhoneResponse?.status === true && consultation) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || !userFarm || !userBrokage || !userTransaction || customerService || companyName || installationVolume || ClientType || // userTransaction ||
            checkPhoneResponse?.status === false || emailCheckResponse?.status === false || consultation) {
                setShouldContinue(true);
            }
        }
    }["LawAgentSignUp.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        checkPhoneResponse,
        emailCheckResponse,
        customerService,
        companyName,
        installationVolume,
        projectSize,
        ClientType,
        consultation
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LawAgentSignUp.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["LawAgentSignUp.useEffect"], []);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LawAgentSignUp.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["LawAgentSignUp.useEffect"], [
        showVerifyPopup
    ]);
    // Handle phone number change and validation
    const handlePhoneNumberChange = (phone)=>{
        setUserPhoneNumber(phone);
        validatePhoneNumber(phone);
        if (!phone) {
            setErrorMessage("");
        }
    };
    ///function to select client type
    const handleSelectClientType = (item)=>{
        // //console.log;
        setClientType(item.title);
    };
    const handleConsultationFormat = (item)=>{
        setConsultation(item.title);
    };
    // Function to validate phone number
    const validatePhoneNumber = (phoneNumber)=>{
        // const parsedNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
        // parsePhoneNumberFromString(`+${phone}`, countryCode?.toUpperCase())
        const parsedNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])(`+${phoneNumber}`, countryCode?.toUpperCase());
        // if (parsedNumber && parsedNumber.isValid() && parsedNumber.country === countryCode?.toUpperCase()) {
        if (!parsedNumber || !parsedNumber.isValid()) {
            setErrorMessage("Invalid");
        } else {
            setErrorMessage("");
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            // setCheckPhoneResponse(null);
            // //console.log;
            timerRef.current = setTimeout(()=>{
                checkPhoneNumber(phoneNumber);
            // //console.log;
            }, 300);
        }
    };
    //email validation function
    const validateEmail = (email)=>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // Check if email contains consecutive dots, which are invalid
        if (/\.\./.test(email)) {
            return false;
        }
        // Check the general pattern for a valid email
        return emailPattern.test(email);
    };
    //code for verify number popup
    const handleVerifyPopup = async ()=>{
        try {
            setSendcodeLoader(true);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userPhoneNumber, true);
            setResponse(response);
            setIsVisible(true);
        // //console.log;
        } catch (error) {
        // console.error("Error occured", error);
        } finally{
            setSendcodeLoader(false);
        }
        setShowVerifyPopup(true);
        setTimeout(()=>{
            if (verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }, 100); // Adjust the delay as needed, 0 should be enough
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    //code for handling verify code changes
    const handleVerifyInputChange = (e, index)=>{
        const { value } = e.target;
        if (!/[0-9]/.test(value) && value !== "") return; // Allow only numeric input
        const newValues = [
            ...VerifyCode
        ];
        newValues[index] = value;
        setVerifyCode(newValues);
        // Move focus to the next field if a number is entered
        if (value && index < length - 1) {
            verifyInputRef.current[index + 1].focus();
        }
        // Trigger onComplete callback if all fields are filled
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join("")); // Convert array to a single string here
        }
    };
    const handleBackspace = (e, index)=>{
        if (e.key === "Backspace") {
            if (VerifyCode[index] === "" && index > 0) {
                verifyInputRef.current[index - 1].focus();
            }
            const newValues = [
                ...VerifyCode
            ];
            newValues[index] = "";
            setVerifyCode(newValues);
        }
    };
    const handlePaste = (e)=>{
        const pastedText = e.clipboardData.getData("text").slice(0, length);
        const newValues = pastedText.split("").map((char)=>/[0-9]/.test(char) ? char : "");
        setVerifyCode(newValues);
        // Set each input's value and move focus to the last filled input
        newValues.forEach((char, index)=>{
            verifyInputRef.current[index].value = char;
            if (index === newValues.length - 1) {
                verifyInputRef.current[index].focus();
            }
        });
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join(""));
        }
    };
    //code for number verification
    const handleVerifyCode = ()=>{
        // //console.log);
        setPhoneVerifiedSuccessSnack(true);
        handleRegister();
    };
    //code for registering user
    const handleRegister = async ()=>{
        try {
            setRegisterLoader(true);
            let agentTitle = userData.userTypeTitle;
            const formData = new FormData();
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register;
            let campainee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCampaigneeNameIfAvailable"])(window);
            if (campainee) {
                formData.append("campaignee", campainee);
            }
            // const formData = new FormData();
            formData.append("name", userName);
            formData.append("email", userEmail);
            formData.append("phone", userPhoneNumber);
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("userType", agentTitle);
            formData.append("territory", customerService);
            formData.append("firmOrCompanyAffiliation", companyName);
            formData.append("caseVolume", installationVolume);
            // formData.append("projectsPerYear", projectSize);
            formData.append("clientType", ClientType);
            formData.append("consultationFormat", consultation);
            formData.append("login", false);
            formData.append("verificationCode", VerifyCode.join(""));
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            // return
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                setResponse(response.data);
                setIsVisible(true);
                // //console.log;
                if (response.data.status === true) {
                    localStorage.setItem("User", JSON.stringify(response.data.data));
                    if (typeof document !== "undefined") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(response.data.data.user, document);
                    }
                    let screenWidth = 1000;
                    if ("TURBOPACK compile-time truthy", 1) {
                        screenWidth = window.innerWidth; // Get current screen width
                    }
                    const SM_SCREEN_SIZE = 640; // Tailwind's sm breakpoint is typically 640px
                    if (screenWidth <= SM_SCREEN_SIZE) {
                        setCongratsPopup(true);
                    // //console.log;
                    } else {
                        // //console.log;
                        // handleContinue();
                        router.push("/createagent");
                    // setCongratsPopup(true);
                    }
                }
            }
        } catch (error) {
        // console.error("Error occured in register api is: ", error);
        } finally{
            setRegisterLoader(false);
        }
    };
    //code to check email and phone
    const checkEmail = async (value)=>{
        try {
            setValidEmail("");
            setEmailLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail;
            const ApiData = {
                email: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setEmailCheckResponse(response.data);
                } else {
                    setEmailCheckResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check email api is :", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const checkPhoneNumber = async (value)=>{
        try {
            setPhoneNumberLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckPhone;
            const ApiData = {
                phone: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setCheckPhoneResponse(response.data);
                } else {
                    setCheckPhoneResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check phone api is :", error);
        } finally{
            setPhoneNumberLoader(false);
        }
    };
    const styles = {
        headingStyle: {
            fontSize: 16,
            fontWeight: "600"
        },
        inputStyle: {
            fontSize: 13,
            fontWeight: "500",
            borderRadius: "7px"
        },
        errmsg: {
            fontSize: 12,
            fontWeight: "500",
            borderRadius: "7px"
        },
        verifyPopup: {
            height: "auto",
            bgcolor: "transparent",
            // p: 2,
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            borderRadius: 2,
            border: "none",
            outline: "none"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl mx-2 w-full md:w-10/12 max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                lineNumber: 511,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: "Your Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                    lineNumber: 515,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            children: `What's your full name`
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 525,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userName,
                                            onChange: (e)=>{
                                                const input = e.target.value;
                                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                                // const words = input.split(' ');
                                                // const formattedName =
                                                //   words.length > 1
                                                //     ? words[0].toLowerCase() + ' ' + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                                //     : words[0].toLowerCase();
                                                setUserName(formattedName);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 526,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                    lineNumber: 549,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "black"
                                                            },
                                                            children: "Checking ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 560,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 575,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                            lineNumber: 558,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                            lineNumber: 579,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                    lineNumber: 552,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 548,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            placeholder: "Email address",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userEmail,
                                            onChange: (e)=>{
                                                let value = e.target.value;
                                                setUserEmail(value);
                                                // if (value) {
                                                //   const timer = setTimeout(() => {
                                                //     checkEmail(value);
                                                //    // //console.log
                                                //   }, 1000);
                                                //   return (() => clearTimeout(timer));
                                                // } else {
                                                //   setEmailCheckResponse(null);
                                                // }
                                                if (timerRef.current) {
                                                    clearTimeout(timerRef.current);
                                                }
                                                setEmailCheckResponse(null);
                                                if (!value) {
                                                    // //console.log;
                                                    setValidEmail("");
                                                    return;
                                                }
                                                if (!validateEmail(value)) {
                                                    // //console.log;
                                                    setValidEmail("Invalid");
                                                } else {
                                                    // //console.log;
                                                    if (value) {
                                                        // Set a new timeout
                                                        timerRef.current = setTimeout(()=>{
                                                            checkEmail(value);
                                                        }, 300);
                                                    } else {
                                                        // Reset the response if input is cleared
                                                        setEmailCheckResponse(null);
                                                        setValidEmail("");
                                                    }
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 585,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                    lineNumber: 639,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple",
                                                            style: {
                                                                ...styles.errmsg,
                                                                height: "20px"
                                                            },
                                                            children: "Getting location ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                            lineNumber: 645,
                                                            columnNumber: 21
                                                        }, this),
                                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: errorMessage && "red",
                                                                height: "20px"
                                                            },
                                                            children: errorMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                            lineNumber: 653,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: "black",
                                                                    height: "20px"
                                                                },
                                                                children: "Checking ..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 665,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        ...styles.errmsg,
                                                                        color: checkPhoneResponse.status === true ? "green" : "red",
                                                                        height: "20px"
                                                                    },
                                                                    children: checkPhoneResponse.message.slice(0, 1).toUpperCase() + checkPhoneResponse.message.slice(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                    lineNumber: 677,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                    lineNumber: 693,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 675,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                            lineNumber: 663,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                    lineNumber: 643,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 638,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "border outline-none bg-white",
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
                                                style: {
                                                    borderRadius: "7px"
                                                },
                                                inputStyle: {
                                                    width: "100%",
                                                    borderWidth: "0px",
                                                    backgroundColor: "transparent",
                                                    paddingLeft: "60px",
                                                    paddingTop: "20px",
                                                    paddingBottom: "20px"
                                                },
                                                buttonStyle: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                },
                                                dropdownStyle: {
                                                    maxHeight: "150px",
                                                    overflowY: "auto"
                                                },
                                                defaultMask: loading ? "Loading..." : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                lineNumber: 703,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 702,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily practice law?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Specific cities, counties, or regions",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: customerService,
                                            onChange: (e)=>{
                                                setCustomerService(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 744,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Name of the firm or legal practice you work with, if any."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: companyName,
                                            onChange: (e)=>{
                                                setCompanyName(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 757,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "How many cases do you handle annually or monthly?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 767,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            placeholder: "Type here",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: installationVolume,
                                            onChange: (e)=>{
                                                setInstallationVolume(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Client Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 781,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-full flex-wrap flex-row items-center gap-2",
                                            style: {
                                                marginTop: "8px",
                                                flexWrap: "wrap"
                                            },
                                            children: primaryClientTypes.map((item, index)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            handleSelectClientType(item);
                                                        },
                                                        className: "border border-[#00000010] rounded px-4 py-4 outline-none focus:outline-none focus:ring-0",
                                                        style: {
                                                            ...styles.inputStyle,
                                                            borderRadius: "30px",
                                                            paddingInline: index === 2 && "40px",
                                                            border: ClientType === item.title ? "2px solid #7902DF" : "",
                                                            backgroundColor: ClientType === item.title ? "#402FFF20" : ""
                                                        },
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                        lineNumber: 792,
                                                        columnNumber: 23
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                    lineNumber: 791,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 785,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Consultation Format"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 816,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-full flex-wrap flex-row items-center gap-2",
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: ConsultationFormat.map((item, index)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            handleConsultationFormat(item);
                                                        },
                                                        className: "border border-[#00000010] rounded px-4 py-4 outline-none focus:outline-none focus:ring-0",
                                                        style: {
                                                            ...styles.inputStyle,
                                                            borderRadius: "30px",
                                                            paddingInline: index === 2 && "40px",
                                                            border: consultation === item.title ? "2px solid #7902DF" : "",
                                                            backgroundColor: consultation === item.title ? "#402FFF20" : ""
                                                        },
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                        lineNumber: 827,
                                                        columnNumber: 23
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                    lineNumber: 826,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 820,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                                            open: showVerifyPopup,
                                            // onClose={() => setAddKYCQuestion(false)}
                                            closeAfterTransition: true,
                                            BackdropProps: {
                                                timeout: 1000,
                                                sx: {
                                                    backgroundColor: "#00000020"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "lg:w-8/12 sm:w-full w-8/12",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:w-7/12 w-full",
                                                        style: {
                                                            backgroundColor: "#ffffff",
                                                            padding: 20,
                                                            borderRadius: "13px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-row justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleClose,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/crossIcon.png",
                                                                        height: 40,
                                                                        width: 40,
                                                                        alt: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                        lineNumber: 877,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                    lineNumber: 876,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 875,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 885,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
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
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 893,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
                                                                style: {
                                                                    display: "flex",
                                                                    gap: "8px"
                                                                },
                                                                children: Array.from({
                                                                    length
                                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                                        // type="text"
                                                                        type: "tel",
                                                                        inputMode: "numeric",
                                                                        maxLength: "1",
                                                                        value: VerifyCode[index],
                                                                        onChange: (e)=>handleVerifyInputChange(e, index),
                                                                        onKeyDown: (e)=>handleBackspace(e, index),
                                                                        onKeyUp: (e)=>{
                                                                            // Check if the Enter key is pressed and all inputs are filled
                                                                            if (e.key === "Enter" && VerifyCode.every((value)=>value.trim() !== "")) {
                                                                                handleVerifyCode();
                                                                            }
                                                                        },
                                                                        onPaste: handlePaste,
                                                                        placeholder: "-",
                                                                        style: {
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            textAlign: "center",
                                                                            fontSize: "20px",
                                                                            border: "1px solid #ccc",
                                                                            borderRadius: "5px"
                                                                        },
                                                                        className: " focus:outline-none focus:ring-0"
                                                                    }, index, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                        lineNumber: 906,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 901,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 flex flex-row items-center gap-2",
                                                                style: styles.inputStyle,
                                                                children: [
                                                                    `Didn't receive code?`,
                                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                        lineNumber: 945,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                        lineNumber: 947,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 939,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                    lineNumber: 957,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 956,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                                lineNumber: 960,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                        lineNumber: 867,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                    lineNumber: 866,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                                lineNumber: 862,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 850,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            message: response.message,
                                            isVisible: isVisible,
                                            setIsVisible: (visible)=>{
                                                setIsVisible(visible);
                                            },
                                            success: response.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                            lineNumber: 973,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                    lineNumber: 521,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                            lineNumber: 514,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                    lineNumber: 508,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                                lineNumber: 987,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                            lineNumber: 986,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                            lineNumber: 990,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
                    lineNumber: 985,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
            lineNumber: 507,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/LawAgentSignUp.js",
        lineNumber: 503,
        columnNumber: 5
    }, this);
};
_s(LawAgentSignUp, "Oyyj9GmLRb3Oent+L3l7bS/NtEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LawAgentSignUp;
const __TURBOPACK__default__export__ = LawAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "LawAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Body$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Body.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-phone-input-2/lib/lib.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__ = __turbopack_context__.i("[project]/node_modules/libphonenumber-js/min/exports/parsePhoneNumber.js [app-client] (ecmascript) <export parsePhoneNumber as parsePhoneNumberFromString>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript) <export default as Box>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Modal/Modal.js [app-client] (ecmascript) <export default as Modal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/apisServices/ApiService.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/UserUtility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/cookies.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
// import VerificationCodeInput from '../test/VerificationCodeInput';
const LoanOfficerSignUp = ({ handleContinue, handleWaitList, handleSolarAgentBack, length = 6, onComplete })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [registerLoader, setRegisterLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // const [emailErr, setEmailCheckResponse] = useState(false);
    const [userFarm, setUserFarm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userBrokage, setUserBrokage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userTransaction, setUserTransaction] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //phone number input variable
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [countryCode, setCountryCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errorMessage, setErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [phoneVerifiedSuccessSnack, setPhoneVerifiedSuccessSnack] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //verify code input fields
    const [VerifyCode, setVerifyCode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(Array(length).fill(""));
    //check email availability
    const [emailLoader, setEmailLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [emailCheckResponse, setEmailCheckResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [validEmail, setValidEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [errMessage, setErrMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //check phone number availability
    const [phoneNumberLoader, setPhoneNumberLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [checkPhoneResponse, setCheckPhoneResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [locationLoader, setLocationLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    //code to select the client type
    const [customerService, setCustomerService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [installationVolume, setInstallationVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectSize, setProjectSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ClientType, setClientType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [otherType, setOtherType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //array for the primary client types
    const primaryClientTypes = [
        {
            id: 1,
            title: "First-Time Homebuyers"
        },
        {
            id: 2,
            title: "Investors & Property Developers"
        },
        {
            id: 3,
            title: "Veterans & Active Military"
        },
        {
            id: 3,
            title: "Luxury Homebuyers"
        },
        {
            id: 5,
            title: "Self-Employed & Entrepreneurs"
        },
        {
            id: 6,
            title: "Other (type here)"
        }
    ];
    const ConsultationFormat = [
        {
            id: 1,
            title: "In-Person Consultations"
        },
        {
            id: 2,
            title: "Virtual Consultations"
        },
        {
            id: 3,
            title: "Virtual Consultationsr"
        }
    ];
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanOfficerSignUp.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["LoanOfficerSignUp.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanOfficerSignUp.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && customerService && companyName && ClientType && emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || customerService || companyName || installationVolume || // projectSize ||
            ClientType || checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["LoanOfficerSignUp.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        checkPhoneResponse,
        emailCheckResponse,
        customerService,
        companyName,
        ClientType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanOfficerSignUp.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["LoanOfficerSignUp.useEffect"], []);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanOfficerSignUp.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["LoanOfficerSignUp.useEffect"], [
        showVerifyPopup
    ]);
    // Handle phone number change and validation
    const handlePhoneNumberChange = (phone)=>{
        setUserPhoneNumber(phone);
        validatePhoneNumber(phone);
        if (!phone) {
            setErrorMessage("");
        }
    };
    ///function to select client type
    const handleSelectClientType = (item)=>{
        // //console.log;
        setClientType(item.title);
    };
    // Function to validate phone number
    const validatePhoneNumber = (phoneNumber)=>{
        // const parsedNumber = parsePhoneNumberFromString(`+${phoneNumber}`);
        // parsePhoneNumberFromString(`+${phone}`, countryCode?.toUpperCase())
        const parsedNumber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$libphonenumber$2d$js$2f$min$2f$exports$2f$parsePhoneNumber$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__parsePhoneNumber__as__parsePhoneNumberFromString$3e$__["parsePhoneNumberFromString"])(`+${phoneNumber}`, countryCode?.toUpperCase());
        // if (parsedNumber && parsedNumber.isValid() && parsedNumber.country === countryCode?.toUpperCase()) {
        if (!parsedNumber || !parsedNumber.isValid()) {
            setErrorMessage("Invalid");
        } else {
            setErrorMessage("");
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
            // setCheckPhoneResponse(null);
            // //console.log;
            timerRef.current = setTimeout(()=>{
                checkPhoneNumber(phoneNumber);
            // //console.log;
            }, 300);
        }
    };
    //email validation function
    const validateEmail = (email)=>{
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        // Check if email contains consecutive dots, which are invalid
        if (/\.\./.test(email)) {
            return false;
        }
        // Check the general pattern for a valid email
        return emailPattern.test(email);
    };
    //code for verify number popup
    const handleVerifyPopup = async ()=>{
        try {
            setSendcodeLoader(true);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userPhoneNumber, true);
            setResponse(response);
            setIsVisible(true);
        // //console.log;
        } catch (error) {
        // console.error("Error occured", error);
        } finally{
            setSendcodeLoader(false);
        }
        setShowVerifyPopup(true);
        setTimeout(()=>{
            if (verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }, 100); // Adjust the delay as needed, 0 should be enough
    };
    const handleClose = ()=>{
        setShowVerifyPopup(false);
    };
    //code for handling verify code changes
    const handleVerifyInputChange = (e, index)=>{
        const { value } = e.target;
        if (!/[0-9]/.test(value) && value !== "") return; // Allow only numeric input
        const newValues = [
            ...VerifyCode
        ];
        newValues[index] = value;
        setVerifyCode(newValues);
        // Move focus to the next field if a number is entered
        if (value && index < length - 1) {
            verifyInputRef.current[index + 1].focus();
        }
        // Trigger onComplete callback if all fields are filled
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join("")); // Convert array to a single string here
        }
    };
    const handleBackspace = (e, index)=>{
        if (e.key === "Backspace") {
            if (VerifyCode[index] === "" && index > 0) {
                verifyInputRef.current[index - 1].focus();
            }
            const newValues = [
                ...VerifyCode
            ];
            newValues[index] = "";
            setVerifyCode(newValues);
        }
    };
    const handlePaste = (e)=>{
        const pastedText = e.clipboardData.getData("text").slice(0, length);
        const newValues = pastedText.split("").map((char)=>/[0-9]/.test(char) ? char : "");
        setVerifyCode(newValues);
        // Set each input's value and move focus to the last filled input
        newValues.forEach((char, index)=>{
            verifyInputRef.current[index].value = char;
            if (index === newValues.length - 1) {
                verifyInputRef.current[index].focus();
            }
        });
        if (newValues.every((num)=>num !== "") && onComplete) {
            onComplete(newValues.join(""));
        }
    };
    //code for number verification
    const handleVerifyCode = ()=>{
        // //console.log);
        setPhoneVerifiedSuccessSnack(true);
        handleRegister();
    };
    //code for registering user
    const handleRegister = async ()=>{
        try {
            setRegisterLoader(true);
            let agentTitle = userData.userTypeTitle;
            const formData = new FormData();
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register;
            let campainee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCampaigneeNameIfAvailable"])(window);
            if (campainee) {
                formData.append("campaignee", campainee);
            }
            // const formData = new FormData();
            formData.append("name", userName);
            formData.append("email", userEmail);
            formData.append("phone", userPhoneNumber);
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("userType", agentTitle);
            formData.append("territory", customerService);
            formData.append("firmOrCompanyAffiliation", companyName);
            formData.append("clientType", ClientType);
            formData.append("login", false);
            formData.append("verificationCode", VerifyCode.join(""));
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            // return
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                setResponse(response.data);
                setIsVisible(true);
                // //console.log;
                if (response.data.status === true) {
                    localStorage.setItem("User", JSON.stringify(response.data.data));
                    if (typeof document !== "undefined") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(response.data.data.user, document);
                    }
                    let screenWidth = 1000;
                    if ("TURBOPACK compile-time truthy", 1) {
                        screenWidth = window.innerWidth; // Get current screen width
                    }
                    const SM_SCREEN_SIZE = 640; // Tailwind's sm breakpoint is typically 640px
                    if (screenWidth <= SM_SCREEN_SIZE) {
                        setCongratsPopup(true);
                    // //console.log;
                    } else {
                        // //console.log;
                        // handleContinue();
                        router.push("/createagent");
                    // setCongratsPopup(true);
                    }
                }
            }
        } catch (error) {
        // console.error("Error occured in register api is: ", error);
        } finally{
            setRegisterLoader(false);
        }
    };
    //code to check email and phone
    const checkEmail = async (value)=>{
        try {
            setValidEmail("");
            setEmailLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckEmail;
            const ApiData = {
                email: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setEmailCheckResponse(response.data);
                } else {
                    setEmailCheckResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check email api is :", error);
        } finally{
            setEmailLoader(false);
        }
    };
    const checkPhoneNumber = async (value)=>{
        try {
            setPhoneNumberLoader(true);
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].CheckPhone;
            const ApiData = {
                phone: value
            };
            // //console.log;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                // //console.log;
                if (response.data.status === true) {
                    // //console.log;
                    setCheckPhoneResponse(response.data);
                } else {
                    setCheckPhoneResponse(response.data);
                }
            }
        } catch (error) {
        // console.error("Error occured in check phone api is :", error);
        } finally{
            setPhoneNumberLoader(false);
        }
    };
    const styles = {
        headingStyle: {
            fontSize: 16,
            fontWeight: "600"
        },
        inputStyle: {
            fontSize: 13,
            fontWeight: "500",
            borderRadius: "7px"
        },
        errmsg: {
            fontSize: 12,
            fontWeight: "500",
            borderRadius: "7px"
        },
        verifyPopup: {
            height: "auto",
            bgcolor: "transparent",
            // p: 2,
            mx: "auto",
            my: "50vh",
            transform: "translateY(-55%)",
            borderRadius: 2,
            border: "none",
            outline: "none"
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-2xl mx-2 w-full md:w-10/12 max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                lineNumber: 507,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                            lineNumber: 506,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: "Your Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                    lineNumber: 511,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            children: `What's your full name`
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userName,
                                            onChange: (e)=>{
                                                const input = e.target.value;
                                                const formattedName = input.split(" ").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
                                                // const words = input.split(' ');
                                                // const formattedName =
                                                //   words.length > 1
                                                //     ? words[0].toLowerCase() + ' ' + words.slice(1).map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
                                                //     : words[0].toLowerCase();
                                                setUserName(formattedName);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                    lineNumber: 545,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        emailLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "black"
                                                            },
                                                            children: "Checking ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 550,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 556,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 571,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 554,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 575,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                    lineNumber: 548,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 544,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Email address",
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: userEmail,
                                            onChange: (e)=>{
                                                let value = e.target.value;
                                                setUserEmail(value);
                                                // if (value) {
                                                //   const timer = setTimeout(() => {
                                                //     checkEmail(value);
                                                //    // //console.log
                                                //   }, 1000);
                                                //   return (() => clearTimeout(timer));
                                                // } else {
                                                //   setEmailCheckResponse(null);
                                                // }
                                                if (timerRef.current) {
                                                    clearTimeout(timerRef.current);
                                                }
                                                setEmailCheckResponse(null);
                                                if (!value) {
                                                    // //console.log;
                                                    setValidEmail("");
                                                    return;
                                                }
                                                if (!validateEmail(value)) {
                                                    // //console.log;
                                                    setValidEmail("Invalid");
                                                } else {
                                                    // //console.log;
                                                    if (value) {
                                                        // Set a new timeout
                                                        timerRef.current = setTimeout(()=>{
                                                            checkEmail(value);
                                                        }, 300);
                                                    } else {
                                                        // Reset the response if input is cleared
                                                        setEmailCheckResponse(null);
                                                        setValidEmail("");
                                                    }
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 581,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                    lineNumber: 635,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        locationLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-purple",
                                                            style: {
                                                                ...styles.errmsg,
                                                                height: "20px"
                                                            },
                                                            children: "Getting location ..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 641,
                                                            columnNumber: 21
                                                        }, this),
                                                        errorMessage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: errorMessage && "red",
                                                                height: "20px"
                                                            },
                                                            children: errorMessage
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 649,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: "black",
                                                                    height: "20px"
                                                                },
                                                                children: "Checking ..."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 661,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    style: {
                                                                        ...styles.errmsg,
                                                                        color: checkPhoneResponse.status === true ? "green" : "red",
                                                                        height: "20px"
                                                                    },
                                                                    children: checkPhoneResponse.message.slice(0, 1).toUpperCase() + checkPhoneResponse.message.slice(1)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                    lineNumber: 673,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                    lineNumber: 689,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 671,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 659,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                    lineNumber: 639,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 634,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "border outline-none bg-white",
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
                                                style: {
                                                    borderRadius: "7px"
                                                },
                                                inputStyle: {
                                                    width: "100%",
                                                    borderWidth: "0px",
                                                    backgroundColor: "transparent",
                                                    paddingLeft: "60px",
                                                    paddingTop: "20px",
                                                    paddingBottom: "20px"
                                                },
                                                buttonStyle: {
                                                    border: "none",
                                                    backgroundColor: "transparent"
                                                },
                                                dropdownStyle: {
                                                    maxHeight: "150px",
                                                    overflowY: "auto"
                                                },
                                                defaultMask: loading ? "Loading..." : undefined
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                lineNumber: 699,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily serve clients?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 737,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Specific cities, counties, or regions",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: customerService,
                                            onChange: (e)=>{
                                                setCustomerService(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 740,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Name of the mortgage lender, bank, or brokerage you work with, if any."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 750,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Name",
                                            className: "border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                            style: {
                                                ...styles.inputStyle,
                                                marginTop: "8px"
                                            },
                                            value: companyName,
                                            onChange: (e)=>{
                                                setCompanyName(e.target.value);
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Client Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 764,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-full flex-wrap flex-row items-center gap-2",
                                            style: {
                                                marginTop: "8px",
                                                flexWrap: "wrap"
                                            },
                                            children: primaryClientTypes.map((item, index)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                handleSelectClientType(item);
                                                            },
                                                            className: "border border-[#00000010] rounded px-4 py-4 outline-none focus:outline-none focus:ring-0",
                                                            style: {
                                                                ...styles.inputStyle,
                                                                borderRadius: "30px",
                                                                paddingInline: index === 2 && "40px",
                                                                border: ClientType === item.title ? "2px solid #7902DF" : "",
                                                                backgroundColor: ClientType === item.title ? "#402FFF20" : ""
                                                            },
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 775,
                                                            columnNumber: 23
                                                        }, this),
                                                        ClientType === "Other (type here)" && item.id === 6 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            placeholder: "Type here",
                                                            className: " w-full border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                                                            style: {
                                                                ...styles.inputStyle,
                                                                marginTop: "8px"
                                                            },
                                                            value: otherType,
                                                            onChange: (e)=>{
                                                                setOtherType(e.target.value);
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                            lineNumber: 795,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                    lineNumber: 774,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 768,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                                            open: showVerifyPopup,
                                            // onClose={() => setAddKYCQuestion(false)}
                                            closeAfterTransition: true,
                                            BackdropProps: {
                                                timeout: 1000,
                                                sx: {
                                                    backgroundColor: "#00000020"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "lg:w-8/12 sm:w-full w-8/12",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:w-7/12 w-full",
                                                        style: {
                                                            backgroundColor: "#ffffff",
                                                            padding: 20,
                                                            borderRadius: "13px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-row justify-end",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleClose,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/crossIcon.png",
                                                                        height: 40,
                                                                        width: 40,
                                                                        alt: "*"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                        lineNumber: 837,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                    lineNumber: 836,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 835,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 845,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
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
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 853,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
                                                                style: {
                                                                    display: "flex",
                                                                    gap: "8px"
                                                                },
                                                                children: Array.from({
                                                                    length
                                                                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: (el)=>verifyInputRef.current[index] = el,
                                                                        // type="text"
                                                                        type: "tel",
                                                                        inputMode: "numeric",
                                                                        maxLength: "1",
                                                                        value: VerifyCode[index],
                                                                        onChange: (e)=>handleVerifyInputChange(e, index),
                                                                        onKeyDown: (e)=>handleBackspace(e, index),
                                                                        onKeyUp: (e)=>{
                                                                            // Check if the Enter key is pressed and all inputs are filled
                                                                            if (e.key === "Enter" && VerifyCode.every((value)=>value.trim() !== "")) {
                                                                                handleVerifyCode();
                                                                            }
                                                                        },
                                                                        onPaste: handlePaste,
                                                                        placeholder: "-",
                                                                        style: {
                                                                            width: "40px",
                                                                            height: "40px",
                                                                            textAlign: "center",
                                                                            fontSize: "20px",
                                                                            border: "1px solid #ccc",
                                                                            borderRadius: "5px"
                                                                        },
                                                                        className: " focus:outline-none focus:ring-0"
                                                                    }, index, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                        lineNumber: 866,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 861,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8 flex flex-row items-center gap-2",
                                                                style: styles.inputStyle,
                                                                children: [
                                                                    `Didn't receive code?`,
                                                                    sendcodeLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                        size: 17
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                        lineNumber: 905,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                        lineNumber: 907,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 899,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                    lineNumber: 917,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 916,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                                lineNumber: 920,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                        lineNumber: 827,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                    lineNumber: 826,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                                lineNumber: 822,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 810,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            message: response.message,
                                            isVisible: isVisible,
                                            setIsVisible: (visible)=>{
                                                setIsVisible(visible);
                                            },
                                            success: response.status
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                            lineNumber: 933,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                    lineNumber: 517,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                            lineNumber: 510,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                    lineNumber: 504,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                                lineNumber: 947,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                            lineNumber: 946,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                            lineNumber: 950,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
                    lineNumber: 945,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
            lineNumber: 503,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/otherAgentsSignUp/LoanOfficerSignUp.js",
        lineNumber: 499,
        columnNumber: 5
    }, this);
};
_s(LoanOfficerSignUp, "FmiwD9Zd3QXqKWerFRT5NgiFJHQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoanOfficerSignUp;
const __TURBOPACK__default__export__ = LoanOfficerSignUp;
var _c;
__turbopack_context__.k.register(_c, "LoanOfficerSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_onboarding_otherAgentsSignUp_8a91df97._.js.map