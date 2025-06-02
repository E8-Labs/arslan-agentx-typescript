(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function RealEstateOtherDetails({ inputsFields, userBrokage, userFarm, userTransaction, handleVerifyPopup, setUserFarm, setUserBrokage, setUserTransaction }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: `What’s your market territory`
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Your territory",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: userFarm,
                onChange: (e)=>{
                    setUserFarm(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Your brokerage"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[1] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Brokerage",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: userBrokage,
                onChange: (e)=>{
                    setUserBrokage(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[2]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "How many homes did you sell last year"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[2] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Type here",
                type: "number",
                className: "border border-[#00000010] w-full rounded p-3 outline-none mb-2 focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: userTransaction,
                onChange: (e)=>{
                    setUserTransaction(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        handleVerifyPopup();
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = RealEstateOtherDetails;
const __TURBOPACK__default__export__ = RealEstateOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "RealEstateOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function SolarRepOtherDetails({ service, setService, companyName, setCompanyName, installationVolume, setInstallationVolume, projectSize, handleSelectClientType, setProjectSize, ClientType, inputsFields }) {
    const primaryClientTypes = [
        {
            id: 1,
            title: "Residential clients"
        },
        {
            id: 2,
            title: "Commercial clients"
        },
        {
            id: 3,
            title: "Both"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Where do you primarily operate or serve customers"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Your territory",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: service,
                onChange: (e)=>{
                    setService(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Company"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[1] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Brokerage",
                className: "border w-full border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: companyName,
                onChange: (e)=>{
                    setCompanyName(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[2]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Installation Volume per Year"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                ref: (el)=>inputsFields.current[2] = el,
                placeholder: "Type here",
                className: "border w-full border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: installationVolume,
                onChange: (e)=>{
                    setInstallationVolume(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[3]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Average Project Size (kW)"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Type here",
                className: "w-full border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                ref: (el)=>inputsFields.current[3] = el,
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: projectSize,
                onChange: (e)=>{
                    setProjectSize(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[4]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 108,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Primary Client Type"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 124,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col w-full items-start gap-4",
                style: {
                    marginTop: "8px"
                },
                children: primaryClientTypes.map((item, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                handleSelectClientType(item);
                            },
                            className: "border border-[#00000010] text-start rounded px-4 rounded py-1 outline-none focus:outline-none focus:ring-0 w-full",
                            style: {
                                ...styles.inputStyle,
                                // borderRadius: "30px",
                                paddingInline: index === 2 && "40px",
                                border: ClientType === item.title ? "2px solid #7902DF" : "",
                                backgroundColor: ClientType === item.title ? "#402FFF20" : ""
                            },
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                            lineNumber: 135,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                        lineNumber: 134,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
                lineNumber: 128,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c = SolarRepOtherDetails;
const __TURBOPACK__default__export__ = SolarRepOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "SolarRepOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/SolerDevRepOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function SalesDevRepOtherDetails({ inputsFields, service, setService, companyName, setCompanyName, handleVerifyPopup }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Where do you primarily operate or serve customers"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SolerDevRepOtherDetails.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Your territory",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: service,
                onChange: (e)=>{
                    setService(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SolerDevRepOtherDetails.js",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Company"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SolerDevRepOtherDetails.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[1] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Brokerage",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: companyName,
                onChange: (e)=>{
                    setCompanyName(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        handleVerifyPopup();
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/SolerDevRepOtherDetails.js",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/SolerDevRepOtherDetails.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = SalesDevRepOtherDetails;
const __TURBOPACK__default__export__ = SalesDevRepOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "SalesDevRepOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/InsuranceOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function InsuranceOtherDetails({ inputsFields, userFarm, setUserFarm, userBrokage, setUserBrokage, handleVerifyPopup }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: `Market Territory `
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/InsuranceOtherDetails.js",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Your territory",
                className: "w-full border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: userFarm,
                onChange: (e)=>{
                    setUserFarm(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/InsuranceOtherDetails.js",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Agency or Brokerage Name"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/InsuranceOtherDetails.js",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[1] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Brokerage",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: userBrokage,
                onChange: (e)=>{
                    setUserBrokage(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        handleVerifyPopup();
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/InsuranceOtherDetails.js",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/InsuranceOtherDetails.js",
        lineNumber: 13,
        columnNumber: 9
    }, this);
}
_c = InsuranceOtherDetails;
const __TURBOPACK__default__export__ = InsuranceOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "InsuranceOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/MarketerOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function MarketerOtherDetails({ inputsFields, service, setService, companyName, setCompanyName, handleVerifyPopup }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Where do you primarily operate or serve customers"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MarketerOtherDetails.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Your territory",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: service,
                onChange: (e)=>{
                    setService(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MarketerOtherDetails.js",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Company"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MarketerOtherDetails.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[1] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Brokerage",
                className: "border border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: companyName,
                onChange: (e)=>{
                    setCompanyName(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        handleVerifyPopup();
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MarketerOtherDetails.js",
                lineNumber: 39,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/MarketerOtherDetails.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = MarketerOtherDetails;
const __TURBOPACK__default__export__ = MarketerOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "MarketerOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/RecuiterOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function RecuiterOtherDetails({ inputsFields, service, setService, handleVerifyPopup }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                style: styles.headingStyle,
                children: "Where do you primarily operate or serve customers"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RecuiterOtherDetails.js",
                lineNumber: 11,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Your territory",
                className: "w-full border border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: service,
                onChange: (e)=>{
                    setService(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        handleVerifyPopup(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/RecuiterOtherDetails.js",
                lineNumber: 14,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/RecuiterOtherDetails.js",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
_c = RecuiterOtherDetails;
const __TURBOPACK__default__export__ = RecuiterOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "RecuiterOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function DebtCollectorOtherDetails({ inputsFields, service, setService, companyName, setCompanyName, installationVolume, setInstallationVolume, collectionStretigy, handleSelectCollectionStretigy }) {
    const primaryClientTypes = [
        {
            id: 1,
            title: "Soft Collections"
        },
        {
            id: 2,
            title: "Hard Collections"
        },
        {
            id: 3,
            title: "Hybrid Approach"
        },
        {
            id: 4,
            title: "Other"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Where do you primarily collect debts?"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Secific cities,contries or regions",
                className: "border w-full border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: service,
                onChange: (e)=>{
                    setService(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Name of the company or collection agency you work with, if any."
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Name",
                className: "border w-full border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: companyName,
                onChange: (e)=>{
                    setCompanyName(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 61,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "What is the typical balance size of debts you recover?"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 81,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                ref: (el)=>inputsFields.current[0] = el,
                autoComplete: "off",
                autoCorrect: "off",
                spellCheck: "false",
                enterKeyHint: "done",
                placeholder: "Eg,< $1000, $1000-$5000, $5000-$10000, $10000-$50000",
                className: "border w-full border-[#00000010] w-full rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: installationVolume,
                onChange: (e)=>{
                    setInstallationVolume(e.target.value);
                },
                onKeyDown: (e)=>{
                    if (e.key === "Enter" || e.key === "Done") {
                        inputsFields.current[1]?.focus(); // Move to the second input
                    }
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 84,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Typical Collection Strategy"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 105,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-wrap flex-row items-center gap-4",
                style: {
                    marginTop: "8px"
                },
                children: primaryClientTypes.map((item, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                handleSelectCollectionStretigy(item);
                            },
                            className: "border text-start border-[#00000010] rounded px-4 h-[70px] outline-none focus:outline-none focus:ring-0 w-full",
                            style: {
                                ...styles.inputStyle,
                                borderRadius: "30px",
                                border: collectionStretigy === item.title ? "2px solid #7902DF" : "",
                                backgroundColor: collectionStretigy === item.title ? "#7902DF20" : ""
                            },
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                            lineNumber: 116,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                        lineNumber: 115,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
                lineNumber: 109,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_c = DebtCollectorOtherDetails;
const __TURBOPACK__default__export__ = DebtCollectorOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "DebtCollectorOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/WebsiteAgentOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function WebsiteAgentOtherDetails({ websiteUrl, setWebsiteUrl, urlErrorMessage, setUrlErrorMessage }) {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebsiteAgentOtherDetails.useEffect": ()=>{
            let timer = setTimeout({
                "WebsiteAgentOtherDetails.useEffect.timer": ()=>{
                    //console.log);
                    if (websiteUrl) {
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isValidUrl"])(websiteUrl)) {
                            setUrlErrorMessage("");
                        //console.log;
                        } else {
                            setUrlErrorMessage("Invalid");
                        }
                    }
                }
            }["WebsiteAgentOtherDetails.useEffect.timer"], 300);
            return ({
                "WebsiteAgentOtherDetails.useEffect": ()=>clearTimeout(timer)
            })["WebsiteAgentOtherDetails.useEffect"];
        }
    }["WebsiteAgentOtherDetails.useEffect"], [
        websiteUrl
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Website (URL)"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/WebsiteAgentOtherDetails.js",
                lineNumber: 31,
                columnNumber: 13
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
                    fileName: "[project]/components/onboarding/mobileUI/WebsiteAgentOtherDetails.js",
                    lineNumber: 36,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/WebsiteAgentOtherDetails.js",
                lineNumber: 34,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "URL",
                className: "border w-full border-[#00000010] rounded p-3 outline-none mb-2 focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: websiteUrl,
                onChange: (e)=>{
                    setWebsiteUrl(e.target.value);
                    setUrlErrorMessage("");
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/WebsiteAgentOtherDetails.js",
                lineNumber: 48,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/WebsiteAgentOtherDetails.js",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(WebsiteAgentOtherDetails, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = WebsiteAgentOtherDetails;
const __TURBOPACK__default__export__ = WebsiteAgentOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "WebsiteAgentOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function MedSpaAgentOtherDetails({ customerService, setCustomerService, companyName, setCompanyName, installationVolume, setInstallationVolume }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Where do you primarily operate?"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Specific cities, counties, or regions",
                className: "border w-full border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: customerService,
                onChange: (e)=>{
                    setCustomerService(e.target.value);
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js",
                lineNumber: 16,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Name of the med spa or practice you work with, if any."
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Name",
                className: "borde w-full border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: companyName,
                onChange: (e)=>{
                    setCompanyName(e.target.value);
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js",
                lineNumber: 29,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "How many clients do you typically see per month?"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Type here",
                className: "border w-full border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
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
                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js",
        lineNumber: 12,
        columnNumber: 9
    }, this);
}
_c = MedSpaAgentOtherDetails;
const __TURBOPACK__default__export__ = MedSpaAgentOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "MedSpaAgentOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function LawAgentOtherDetails({ customerService, setCustomerService, companyName, setCompanyName, installationVolume, setInstallationVolume, ClientType, handleSelectClientType, consultation, handleConsultationFormat }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Where do you primarily practice law?"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 46,
                columnNumber: 13
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
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Name of the firm or legal practice you work with, if any."
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 59,
                columnNumber: 13
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
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "How many cases do you handle annually or monthly?"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 72,
                columnNumber: 13
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
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 75,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Client Type"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 86,
                columnNumber: 13
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
                            fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                            lineNumber: 97,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                        lineNumber: 96,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Consultation Format"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 121,
                columnNumber: 13
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
                            fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                            lineNumber: 132,
                            columnNumber: 29
                        }, this)
                    }, index, false, {
                        fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                        lineNumber: 131,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
                lineNumber: 125,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_c = LawAgentOtherDetails;
const __TURBOPACK__default__export__ = LawAgentOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "LawAgentOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
function LoanOfficerOtherDetails({ customerService, setCustomerService, companyName, setCompanyName, ClientType, otherType, setOtherType, handleSelectClientType }) {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Where do you primarily serve clients?"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Specific cities, counties, or regions",
                className: "border w-full border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: customerService,
                onChange: (e)=>{
                    setCustomerService(e.target.value);
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                lineNumber: 47,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Name of the mortgage lender, bank, or brokerage you work with, if any."
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                lineNumber: 58,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                placeholder: "Name",
                className: " border w-full border-[#00000010] rounded p-3 outline-none focus:outline-none focus:ring-0",
                style: {
                    ...styles.inputStyle,
                    marginTop: "8px"
                },
                value: companyName,
                onChange: (e)=>{
                    setCompanyName(e.target.value);
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                lineNumber: 62,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: styles.headingStyle,
                className: "mt-6",
                children: "Client Type"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-full flex-col items-center gap-2",
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
                                className: "border border-[#00000010] w-full rounded px-4 py-4 outline-none focus:outline-none focus:ring-0 text-start",
                                style: {
                                    ...styles.inputStyle,
                                    borderRadius: "30px",
                                    border: ClientType === item.title ? "2px solid #7902DF" : "",
                                    backgroundColor: ClientType === item.title ? "#402FFF20" : ""
                                },
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                                lineNumber: 83,
                                columnNumber: 29
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
                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                                lineNumber: 103,
                                columnNumber: 33
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                        lineNumber: 82,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
_c = LoanOfficerOtherDetails;
const __TURBOPACK__default__export__ = LoanOfficerOtherDetails;
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
var _c;
__turbopack_context__.k.register(_c, "LoanOfficerOtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/OtherDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
(()=>{
    const e = new Error("Cannot find module '@/components/test/VerificationCodeInput'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/cookies.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/UserUtility.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/UserTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$RealEstateOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/RealEstateOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$otherAgentsSignUp$2f$SolarRepAgentSignUp$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/otherAgentsSignUp/SolarRepAgentSignUp.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$SalesRepOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/SalesRepOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$SolerDevRepOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/SolerDevRepOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$InsuranceOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/InsuranceOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$MarketerOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/MarketerOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$RecuiterOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/RecuiterOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$DebtCollectorOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/DebtCollectorOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$WebsiteAgentOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/WebsiteAgentOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$MedSpaAgentOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/MedSpaAgentOtherDetails.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'draft-js/lib/DefaultDraftBlockRenderMap'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$LawAgentOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/LawAgentOtherDetails.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$LoanOfficerOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/mobileUI/LoanOfficerOtherDetails.js [app-client] (ecmascript)");
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
const OtherDetails = ({ handleContinue, handleBack, length = 6, onComplete, userDetails })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let inputsFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
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
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    //congrats popup for small size screens
    const [congratsPopup, setCongratsPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    //code for other agents variables
    //for sales dev rep
    const [service, setService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //for solar dev
    const [installationVolume, setInstallationVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [projectSize, setProjectSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ClientType, setClientType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [collectionStretigy, setCollectionStretigy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    //for webURL
    const [websiteUrl, setWebsiteUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [urlErrorMessage, setUrlErrorMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [territory, setTerritory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [firmOrCompanyAffiliation, setFirmOrCompanyAffiliation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [averageMonthlyClients, setAverageMonthlyClients] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [consultation, setConsultation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [caseVolume, setCaseVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    //array for the primary client types
    const primaryClientTypes = [
        {
            id: 1,
            title: "Residential clients"
        },
        {
            id: 2,
            title: "Commercial clients"
        },
        {
            id: 3,
            title: "Both"
        }
    ];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OtherDetails.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["OtherDetails.useEffect"], []);
    //focus 1st field automaticallly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OtherDetails.useEffect": ()=>{
            // Focus the first input field on component load
            const registerationDetails = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            inputsFields.current[0]?.focus();
            if (registerationDetails) {
                const registerationData = JSON.parse(registerationDetails);
                // //console.log;
                setUserData(registerationData);
            } else {
            // alert("Add details to continue");
            }
        }
    }["OtherDetails.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OtherDetails.useEffect": ()=>{
        //console.log
        //console.log
        //console.log
        //console.log
        }
    }["OtherDetails.useEffect"], [
        service,
        companyName,
        installationVolume,
        collectionStretigy
    ]);
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OtherDetails.useEffect": ()=>{
            if (userData?.userTypeTitle === "SalesDevRep" || userData?.userTypeTitle === "MarketerAgent") {
                if (service && companyName) {
                    setShouldContinue(false);
                } else {
                    setShouldContinue(true);
                }
            } else if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RealEstateAgent) {
                console.log("Real Estate Agent Fields:", {
                    userFarm,
                    userBrokage,
                    userTransaction
                });
                if (userFarm && userBrokage && userTransaction) {
                    setShouldContinue(false);
                } else if (!userFarm || !userBrokage || !userTransaction) {
                    setShouldContinue(true);
                }
            } else if (userData?.userTypeTitle === "SolarRep") {
                if (service && companyName && installationVolume && projectSize && ClientType) {
                    setShouldContinue(false);
                } else {
                    setShouldContinue(true);
                }
            } else if (userData?.userTypeTitle === "InsuranceAgent") {
                if (userFarm && userBrokage) {
                    setShouldContinue(false);
                } else {
                    setShouldContinue(true);
                }
            } else if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].DebtCollectorAgent) {
                if (service && companyName && installationVolume && collectionStretigy) {
                    setShouldContinue(false);
                } else {
                    setShouldContinue(true);
                }
            } else if (userData?.userTypeTitle === "WebsiteAgent") {
                if (websiteUrl) {
                    setShouldContinue(false);
                } else {
                    setShouldContinue(true);
                }
            } else if (userData?.userTypeTitle === "RecruiterAgent" || userData?.userTypeTitle === "TaxAgent") {
                if (service) {
                    setShouldContinue(false);
                } else {
                    setShouldContinue(true);
                }
            } else if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].MedSpaAgent) {
                if (territory && firmOrCompanyAffiliation && averageMonthlyClients) {
                    setShouldContinue(false);
                } else if (!territory || !firmOrCompanyAffiliation || !averageMonthlyClients) {
                    {
                        setShouldContinue(true);
                    }
                }
            } else if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].LawAgent) {
                if (territory && firmOrCompanyAffiliation && caseVolume && consultation && ClientType) {
                    setShouldContinue(false);
                } else if (!territory || !firmOrCompanyAffiliation || !caseVolume || !consultation || !ClientType) {
                    {
                        setShouldContinue(true);
                    }
                }
            } else if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].LoanOfficerAgent) {
                if (territory && firmOrCompanyAffiliation && ClientType) {
                    setShouldContinue(false);
                } else if (!territory || !firmOrCompanyAffiliation || !ClientType) {
                    {
                        setShouldContinue(true);
                    }
                }
            } else {
                if (userFarm && userBrokage && userTransaction) {
                    setShouldContinue(false);
                } else {
                    setShouldContinue(true);
                }
            }
        }
    }["OtherDetails.useEffect"], [
        userFarm,
        userBrokage,
        userTransaction,
        checkPhoneResponse,
        emailCheckResponse,
        service,
        companyName,
        projectSize,
        collectionStretigy,
        installationVolume,
        ClientType,
        territory,
        firmOrCompanyAffiliation,
        averageMonthlyClients,
        caseVolume,
        consultation
    ]);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "OtherDetails.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["OtherDetails.useEffect"], [
        showVerifyPopup
    ]);
    //select client type function
    const handleSelectClientType = (item)=>{
        // //console.log;
        setClientType(item.title);
    };
    const handleSelectCollectionStretigy = (item)=>{
        // //console.log;
        setCollectionStretigy(item.title);
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
    //code for verify number popup
    const handleVerifyPopup = async ()=>{
        // let response = await SendVerificationCode(userPhoneNumber, true);
        try {
            setShowVerifyPopup(true);
            setTimeout(()=>{
                if (verifyInputRef.current[0]) {
                    verifyInputRef.current[0].focus();
                }
            }, 100);
            setSendcodeLoader(true);
            let response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(userDetails.phone, true);
            setResponse(response);
            setIsVisible(true);
        // //console.log;
        } catch (error) {
        // console.error("Error occured", error);
        } finally{
            setSendcodeLoader(false);
        }
    // setResponse(response)
    // setIsVisible(true)
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
            formData.append("name", userDetails.name);
            formData.append("email", userDetails.email);
            formData.append("phone", userDetails.phone);
            if (userFarm) {
                formData.append("farm", userFarm);
            }
            if (userBrokage) {
                formData.append("brokerage", userBrokage);
            }
            if (userTransaction) {
                formData.append("averageTransactionPerYear", userTransaction);
            }
            if (service) {
                formData.append("areaOfService", service);
            }
            if (companyName) {
                formData.append("company", companyName);
            }
            if (installationVolume) {
                formData.append("projectsPerYear", installationVolume);
            }
            if (projectSize) {
                formData.append("projectSizekw", projectSize);
            }
            if (websiteUrl) {
                formData.append("website", websiteUrl);
            }
            if (collectionStretigy) {
                formData.append("collectionStrategy", collectionStretigy);
            }
            if (ClientType) {
                formData.append("clientType", ClientType);
            }
            if (territory) {
                formData.append("territory", territory);
            }
            if (firmOrCompanyAffiliation) {
                formData.append("firmOrCompanyAffiliation", firmOrCompanyAffiliation);
            }
            if (averageMonthlyClients) {
                formData.append("averageMonthlyClients", averageMonthlyClients);
            }
            if (caseVolume) {
                formData.append("caseVolume", caseVolume);
            }
            if (consultation) {
                formData.append("consultationFormat", consultation);
            }
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("userType", agentTitle);
            formData.append("login", false);
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            formData.append("verificationCode", VerifyCode.join(""));
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            // return;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                // //console.log;
                let result = response.data;
                setResponse(result);
                setIsVisible(true);
                if (response.data.status === true) {
                    // //console.log;
                    localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
                    localStorage.setItem("User", JSON.stringify(response.data.data));
                    //set cokie on locastorage to run middle ware
                    // document.cookie = `User=${encodeURIComponent(
                    //   JSON.stringify(response.data.data)
                    // )}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                    //check for document undefined issue
                    if (typeof document !== "undefined") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(response.data.data.user, document);
                    }
                    // handleContinue();
                    const screenWidth = window.innerWidth; // Get current screen width
                    const SM_SCREEN_SIZE = 640; // Tailwind's sm breakpoint is typically 640px
                    if (screenWidth <= SM_SCREEN_SIZE) {
                        setShowVerifyPopup(false);
                        setCongratsPopup(true);
                    // //console.log;
                    } else {
                        // //console.log;
                        handleContinue();
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
    const handleConsultationFormat = (item)=>{
        setConsultation(item.title);
    };
    const getOtherAgentDetailsComponent = ()=>{
        //console.log;
        if (userData?.userTypeTitle) {
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RealEstateAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$RealEstateOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    userBrokage: userBrokage,
                    userFarm: userFarm,
                    userTransaction: userTransaction,
                    setUserBrokage: setUserBrokage,
                    setUserFarm: setUserFarm,
                    setUserTransaction: setUserTransaction,
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 624,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].SalesDevRep) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$SolerDevRepOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    service: service,
                    companyName: companyName,
                    setService: setService,
                    setCompanyName: setCompanyName,
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 639,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].SolarRep) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$SalesRepOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    installationVolume: installationVolume,
                    projectSize: projectSize,
                    ClientType: ClientType,
                    setInstallationVolume: setInstallationVolume,
                    setProjectSize: setProjectSize,
                    companyName: companyName,
                    setCompanyName: setCompanyName,
                    service: service,
                    setService: setService,
                    setClientType: setClientType,
                    handleSelectClientType: (item)=>handleSelectClientType(item),
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 651,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].InsuranceAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$InsuranceOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    userBrokage: userBrokage,
                    userFarm: userFarm,
                    setUserBrokage: setUserBrokage,
                    setUserFarm: setUserFarm,
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 672,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].MarketerAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$MarketerOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    service: service,
                    companyName: companyName,
                    setService: setService,
                    setCompanyName: setCompanyName,
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 685,
                    columnNumber: 11
                }, this);
            }
            // tax and recruiter agent have same UI
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].RecruiterAgent || userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].TaxAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$RecuiterOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    service: service,
                    setService: setService,
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 702,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].DebtCollectorAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$DebtCollectorOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    service: service,
                    setService: setService,
                    companyName: companyName,
                    setCompanyName: setCompanyName,
                    installationVolume: installationVolume,
                    setInstallationVolume: setInstallationVolume,
                    handleVerifyPopup: handleVerifyPopup,
                    collectionStretigy: collectionStretigy,
                    handleSelectCollectionStretigy: handleSelectCollectionStretigy
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 713,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].WebsiteAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$WebsiteAgentOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    websiteUrl: websiteUrl,
                    setWebsiteUrl: setWebsiteUrl,
                    urlErrorMessage: urlErrorMessage,
                    setUrlErrorMessage: setUrlErrorMessage,
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 730,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].MedSpaAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$MedSpaAgentOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    customerService: territory,
                    setCustomerService: setTerritory,
                    companyName: firmOrCompanyAffiliation,
                    setCompanyName: setFirmOrCompanyAffiliation,
                    installationVolume: averageMonthlyClients,
                    setInstallationVolume: setAverageMonthlyClients,
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 742,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].LawAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$LawAgentOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    customerService: territory,
                    setCustomerService: setTerritory,
                    companyName: firmOrCompanyAffiliation,
                    setCompanyName: setFirmOrCompanyAffiliation,
                    installationVolume: caseVolume,
                    setInstallationVolume: setCaseVolume,
                    handleVerifyPopup: handleVerifyPopup,
                    consultation: consultation,
                    handleConsultationFormat: handleConsultationFormat,
                    ClientType: ClientType,
                    handleSelectClientType: handleSelectClientType
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 757,
                    columnNumber: 11
                }, this);
            }
            if (userData?.userTypeTitle === __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$UserTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UserTypes"].LoanOfficerAgent) {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$mobileUI$2f$LoanOfficerOtherDetails$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    inputsFields: inputsFields,
                    customerService: territory,
                    setCustomerService: setTerritory,
                    companyName: firmOrCompanyAffiliation,
                    setCompanyName: setFirmOrCompanyAffiliation,
                    ClientType: ClientType,
                    handleSelectClientType: (item)=>handleSelectClientType(item),
                    handleVerifyPopup: handleVerifyPopup
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 776,
                    columnNumber: 11
                }, this);
            }
        // else {
        //   return (
        //     <RealEstateOtherDetails
        //       inputsFields={inputsFields}
        //       userBrokage={userBrokage}
        //       userFarm={userFarm}
        //       userTransaction={userTransaction}
        //       setUserBrokage={setUserBrokage}
        //       setUserFarm={setUserFarm}
        //       setUserTransaction={setUserTransaction}
        //       handleVerifyPopup={handleVerifyPopup}
        //     />
        //   )
        // }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white sm:rounded-2xl sm:mx-2 w-full md:w-10/12 h-[100%] sm:max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[90svh] sm:h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                lineNumber: 818,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                            lineNumber: 817,
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
                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                    lineNumber: 822,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[90%] sm:max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        getOtherAgentDetailsComponent(),
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
                                                className: "lg:w-8/12 sm:w-full sm:w-10/12 w-full",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sm:w-7/12 w-full mx-2",
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                        lineNumber: 867,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                    lineNumber: 866,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 865,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 875,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-8",
                                                                style: {
                                                                    ...styles.inputStyle,
                                                                    color: "#00000060"
                                                                },
                                                                children: [
                                                                    "Enter code that was sent to number ending with ***",
                                                                    userDetails?.phone.slice(-4),
                                                                    "."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 883,
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
                                                                        autoComplete: "off",
                                                                        autoCorrect: "off",
                                                                        spellCheck: "false",
                                                                        enterKeyHint: "done",
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                        lineNumber: 896,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 891,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                        lineNumber: 939,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                        lineNumber: 941,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 933,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                    lineNumber: 951,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 950,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 954,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                        lineNumber: 857,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                    lineNumber: 856,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                lineNumber: 852,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                            lineNumber: 840,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Modal$2f$Modal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Modal$3e$__["Modal"], {
                                            open: congratsPopup,
                                            // onClose={() => setAddKYCQuestion(false)}
                                            closeAfterTransition: true,
                                            BackdropProps: {
                                                timeout: 1000,
                                                sx: {
                                                    backgroundColor: "#00000020"
                                                }
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Box$3e$__["Box"], {
                                                className: "w-full",
                                                sx: styles.verifyPopup,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-center w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full mx-4",
                                                        style: {
                                                            backgroundColor: "#ffffff",
                                                            padding: 20,
                                                            borderRadius: "13px"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-row justify-end"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 990,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-full mt-2 flex flex-row justify-center",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "",
                                                                    src: "/agentXOrb.gif",
                                                                    style: {
                                                                        height: "100px",
                                                                        width: "110px",
                                                                        resize: "contain"
                                                                    },
                                                                    height: 102,
                                                                    width: 102,
                                                                    alt: "*"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                    lineNumber: 1002,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 1001,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700",
                                                                    textAlign: "center",
                                                                    marginTop: 20
                                                                },
                                                                children: "Congrats!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 1016,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 15,
                                                                    fontWeight: "600",
                                                                    textAlign: "center",
                                                                    marginTop: 50,
                                                                    color: "#00000070"
                                                                },
                                                                children: "Your account is created!"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 1027,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                    lineNumber: 1053,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 1052,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px",
                                                                    fontSize: 15,
                                                                    fontWeight: "700"
                                                                },
                                                                onClick: ()=>{
                                                                    router.push("/createagent");
                                                                },
                                                                children: "Get Started"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                                lineNumber: 1056,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                        lineNumber: 982,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                    lineNumber: 981,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                                lineNumber: 980,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                            lineNumber: 968,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                    lineNumber: 828,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                            lineNumber: 821,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 815,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                                lineNumber: 1082,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                            lineNumber: 1081,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                            lineNumber: 1085,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
                    lineNumber: 1080,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
            lineNumber: 814,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/mobileUI/OtherDetails.js",
        lineNumber: 810,
        columnNumber: 5
    }, this);
};
_s(OtherDetails, "KrMztccuANSRH2c3kHRi/BiCE8E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = OtherDetails;
const __TURBOPACK__default__export__ = OtherDetails;
var _c;
__turbopack_context__.k.register(_c, "OtherDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/BasicDetails.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
(()=>{
    const e = new Error("Cannot find module '@/components/test/VerificationCodeInput'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$AuthService$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$AuthVerification$2f$SnackMessages$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/cookies.js [app-client] (ecmascript)");
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
;
;
const BasicDetails = ({ handleContinue, handleBack, length = 6, onComplete, handleDetails, userDetails })=>{
    _s();
    const verifyInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let inputsFields = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const phoneInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [showVerifyPopup, setShowVerifyPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let [response, setResponse] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
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
    const [sendcodeLoader, setSendcodeLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
    //congrats popup for small size screens
    const [congratsPopup, setCongratsPopup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BasicDetails.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["BasicDetails.useEffect"], []);
    //focus 1st field automaticallly
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BasicDetails.useEffect": ()=>{
            // Focus the first input field on component load
            inputsFields.current[0]?.focus();
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            if (!userDetails.phone) {
                setCountryCode(loc);
            }
            if (userDetails) {
                setUserName(userDetails.name);
                setUserEmail(userDetails.email);
                setUserPhoneNumber(userDetails.phone);
            }
        }
    }["BasicDetails.useEffect"], []);
    // Function to get the user's location and set the country code
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BasicDetails.useEffect": ()=>{
            handleDetails(userName, userEmail, userPhoneNumber);
            if (userName && userEmail && userPhoneNumber && emailCheckResponse?.status === true && !errorMessage && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || emailCheckResponse?.status === false || errorMessage || checkPhoneResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["BasicDetails.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        userFarm,
        userBrokage,
        userTransaction,
        checkPhoneResponse,
        emailCheckResponse,
        errorMessage
    ]);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BasicDetails.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["BasicDetails.useEffect"], [
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
        // let response = await SendVerificationCode(userPhoneNumber, true);
        handleContinue();
        return;
        "TURBOPACK unreachable";
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
            const formData = new FormData();
            const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].register;
            let campainee = null;
            if ("TURBOPACK compile-time truthy", 1) {
                campainee = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$UserUtility$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetCampaigneeNameIfAvailable"])(window);
            }
            if (campainee) {
                formData.append("campaignee", campainee);
            }
            formData.append("name", userName);
            formData.append("email", userEmail);
            formData.append("phone", userPhoneNumber);
            formData.append("farm", userFarm);
            formData.append("brokerage", userBrokage);
            formData.append("averageTransactionPerYear", userTransaction);
            formData.append("agentService", JSON.stringify(userData.serviceID));
            formData.append("areaOfFocus", JSON.stringify(userData.focusAreaId));
            formData.append("login", false);
            formData.append("timeZone", Intl.DateTimeFormat().resolvedOptions().timeZone);
            formData.append("verificationCode", VerifyCode.join(""));
            // //console.log;
            for (let [key, value] of formData.entries()){
            // //console.log;
            }
            // return;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, formData);
            if (response) {
                // //console.log;
                let result = response.data;
                setResponse(result);
                setIsVisible(true);
                if (response.data.status === true) {
                    // //console.log;
                    localStorage.removeItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
                    localStorage.setItem("User", JSON.stringify(response.data.data));
                    //set cokie on locastorage to run middle ware
                    // document.cookie = `User=${encodeURIComponent(
                    //   JSON.stringify(response.data.data)
                    // )}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
                    //check for document undefined issue
                    if (typeof document !== "undefined") {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$cookies$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCookie"])(response.data.data.user, document);
                    }
                    // handleContinue();
                    const screenWidth = 1000;
                    if ("TURBOPACK compile-time truthy", 1) {
                        screenWidth = window.innerWidth; // Get current screen width
                    }
                    const SM_SCREEN_SIZE = 640; // Tailwind's sm breakpoint is typically 640px
                    if (screenWidth <= SM_SCREEN_SIZE) {
                        setCongratsPopup(true);
                    // //console.log;
                    } else {
                        // //console.log;
                        handleContinue();
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
        className: "overflow-y-hidden flex flex-col justify-center items-center h-[100svh] ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col bg-white sm:rounded-2xl sm:mx-2 w-full md:w-10/12 h-[90%] sm:max-h-[90%] py-4 overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[90svh] sm:h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                lineNumber: 474,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                            lineNumber: 473,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%] ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    onClick: handleContinue,
                                    children: "Your Contact Information"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                    lineNumber: 478,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-8 w-full md:w-10/12 lg:w-6/12 flex flex-col max-h-[90%] sm:max-h-[85%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple px-2",
                                    style: {
                                        scrollbarWidth: "none"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            children: `What's your full name`
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                            lineNumber: 489,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            enterKeyHint: "done",
                                            placeholder: "Name",
                                            className: "border border-[#00000010] p-3 outline-none focus:outline-none focus:ring-0",
                                            ref: (el)=>inputsFields.current[0] = el,
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
                                            },
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter" || e.key === "Done") {
                                                    inputsFields.current[1]?.focus(); // Move to the second input
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                            lineNumber: 490,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                    lineNumber: 523,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                            lineNumber: 528,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                                lineNumber: 534,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                                lineNumber: 549,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                            lineNumber: 532,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                            lineNumber: 553,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                    lineNumber: 526,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                            lineNumber: 522,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            ref: (el)=>inputsFields.current[1] = el,
                                            autoComplete: "off",
                                            autoCorrect: "off",
                                            spellCheck: "false",
                                            enterKeyHint: "done",
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
                                            },
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter") {
                                                    // Focus on PhoneInput field when Enter is pressed
                                                    // if (phoneInputRef.current) {
                                                    //   const inputElement = phoneInputRef.current.querySelector("input"); // Native input element
                                                    //   if (inputElement) {
                                                    //     inputElement.focus();
                                                    //   }
                                                    // }
                                                    const timer = setTimeout(()=>{
                                                        // Scroll into view before focusing
                                                        phoneInputRef.current.scrollIntoView({
                                                            behavior: "smooth",
                                                            block: "center"
                                                        });
                                                        phoneInputRef.current.focus({
                                                            preventScroll: true
                                                        });
                                                    // //console.log;
                                                    }, 200); // Slight delay to ensure component is rendered
                                                    return ()=>clearTimeout(timer);
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                            lineNumber: 559,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                    lineNumber: 637,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                            lineNumber: 643,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                            lineNumber: 651,
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
                                                                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                                lineNumber: 663,
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
                                                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                                    lineNumber: 675,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                                    lineNumber: 691,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                                lineNumber: 673,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                            lineNumber: 661,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                    lineNumber: 641,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                            lineNumber: 636,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$phone$2d$input$2d$2$2f$lib$2f$lib$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                // ref={phoneInputRef}
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
                                                inputProps: {
                                                    ref: phoneInputRef
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
                                                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                                lineNumber: 701,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                            lineNumber: 700,
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
                                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                            lineNumber: 752,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                                    lineNumber: 485,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                            lineNumber: 477,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                    lineNumber: 471,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                lineNumber: 470,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[10%] w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            value: 70
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                            lineNumber: 766,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                        lineNumber: 765,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        handleContinue: handleVerifyPopup,
                        handleBack: handleBack,
                        registerLoader: registerLoader,
                        shouldContinue: shouldContinue
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                        lineNumber: 769,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
                lineNumber: 764,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/mobileUI/BasicDetails.js",
        lineNumber: 466,
        columnNumber: 5
    }, this);
};
_s(BasicDetails, "y700UD0ueVw0CQdKzXhUUVntQU4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = BasicDetails;
const __TURBOPACK__default__export__ = BasicDetails;
var _c;
__turbopack_context__.k.register(_c, "BasicDetails");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const MedSpaAgentSignUpMobile = ({ handleContinue, handleWaitList, handleSolarAgentBack, length = 6, onComplete })=>{
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
        "MedSpaAgentSignUpMobile.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["MedSpaAgentSignUpMobile.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedSpaAgentSignUpMobile.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && customerService && companyName && installationVolume && // projectSize &&
            ClientType && emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || !userFarm || !userBrokage || !userTransaction || customerService || companyName || installationVolume || // projectSize ||
            ClientType || userTransaction || checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["MedSpaAgentSignUpMobile.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        checkPhoneResponse,
        emailCheckResponse,
        customerService,
        companyName,
        installationVolume,
        projectSize,
        ClientType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedSpaAgentSignUpMobile.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["MedSpaAgentSignUpMobile.useEffect"], []);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MedSpaAgentSignUpMobile.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["MedSpaAgentSignUpMobile.useEffect"], [
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
            if (ClientType === "Residential clients") {
                clienttype = "residential";
            } else if (ClientType === "Commercial clients") {
                clienttype = "commercial";
            } else if (ClientType === "Both") {
                clienttype = "both";
            }
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
                        handleContinue();
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
                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                lineNumber: 510,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                            lineNumber: 509,
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
                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                    lineNumber: 514,
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
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 524,
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
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 525,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                    lineNumber: 548,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                            lineNumber: 553,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 559,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 574,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                            lineNumber: 557,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                            lineNumber: 578,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                    lineNumber: 551,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 547,
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
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 584,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
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
                                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
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
                                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
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
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
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
                                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                    lineNumber: 673,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                    lineNumber: 689,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 671,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                            lineNumber: 659,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                    lineNumber: 639,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
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
                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                lineNumber: 699,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 698,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily operate?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 738,
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
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 741,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Name of the med spa or practice you work with, if any."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 751,
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
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 754,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "How many clients do you typically see per month?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 764,
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
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 767,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                        lineNumber: 804,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                    lineNumber: 803,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 802,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 812,
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
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 820,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                        lineNumber: 833,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 828,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                        lineNumber: 872,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                        lineNumber: 874,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 866,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                    lineNumber: 884,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 883,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                                lineNumber: 887,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                        lineNumber: 794,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                    lineNumber: 793,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                                lineNumber: 789,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 777,
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
                                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                            lineNumber: 900,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                    lineNumber: 520,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                            lineNumber: 513,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                    lineNumber: 507,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                                lineNumber: 914,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                            lineNumber: 913,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                            lineNumber: 917,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
                    lineNumber: 912,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
            lineNumber: 506,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/mobileUI/MedSpaAgentSignUpMobile.js",
        lineNumber: 502,
        columnNumber: 5
    }, this);
};
_s(MedSpaAgentSignUpMobile, "sKmJR3GvWvTiqbqZQSjmYAe48/0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = MedSpaAgentSignUpMobile;
const __TURBOPACK__default__export__ = MedSpaAgentSignUpMobile;
var _c;
__turbopack_context__.k.register(_c, "MedSpaAgentSignUpMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const LoanOfficeSugnUpMobile = ({ handleContinue, handleWaitList, handleSolarAgentBack, length = 6, onComplete })=>{
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
        "LoanOfficeSugnUpMobile.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["LoanOfficeSugnUpMobile.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanOfficeSugnUpMobile.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && customerService && companyName && ClientType && emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || customerService || companyName || installationVolume || // projectSize ||
            ClientType || checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["LoanOfficeSugnUpMobile.useEffect"], [
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
        "LoanOfficeSugnUpMobile.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["LoanOfficeSugnUpMobile.useEffect"], []);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoanOfficeSugnUpMobile.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["LoanOfficeSugnUpMobile.useEffect"], [
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
            formData.append("companyAffiliation", companyName);
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
                        handleContinue();
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
                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                lineNumber: 506,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                            lineNumber: 505,
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
                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                    lineNumber: 510,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 520,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 521,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                    lineNumber: 544,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 549,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 555,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 570,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 553,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 574,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                    lineNumber: 547,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 543,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 580,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                    lineNumber: 631,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 637,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 645,
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
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 657,
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
                                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                    lineNumber: 669,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                    lineNumber: 685,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 667,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 655,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                    lineNumber: 635,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 630,
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
                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                lineNumber: 695,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 694,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily serve clients?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 733,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 736,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Name of the mortgage lender, bank, or brokerage you work with, if any."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 746,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 750,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Client Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 760,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-full flex-wrap flex-row items-center gap-2",
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: primaryClientTypes.map((item, index)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>{
                                                                handleSelectClientType(item);
                                                            },
                                                            className: "border border-[#00000010] rounded px-4 h-[74px] w-full outline-none focus:outline-none focus:ring-0",
                                                            style: {
                                                                ...styles.inputStyle,
                                                                borderRadius: "30px",
                                                                paddingInline: index === 2 && "40px",
                                                                border: ClientType === item.title ? "2px solid #7902DF" : "",
                                                                backgroundColor: ClientType === item.title ? "#402FFF20" : ""
                                                            },
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 771,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                            lineNumber: 791,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                    lineNumber: 770,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 764,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                        lineNumber: 833,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                    lineNumber: 832,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 831,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 841,
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
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 849,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                        lineNumber: 862,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 857,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                        lineNumber: 901,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                        lineNumber: 903,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 895,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                    lineNumber: 913,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 912,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                                lineNumber: 916,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                        lineNumber: 823,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                    lineNumber: 822,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                                lineNumber: 818,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 806,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                            lineNumber: 929,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                    lineNumber: 516,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                            lineNumber: 509,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                    lineNumber: 503,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                                lineNumber: 943,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                            lineNumber: 942,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                            lineNumber: 946,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
                    lineNumber: 941,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
            lineNumber: 502,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/mobileUI/LoanOfficerSignUpMobile.js",
        lineNumber: 498,
        columnNumber: 5
    }, this);
};
_s(LoanOfficeSugnUpMobile, "FmiwD9Zd3QXqKWerFRT5NgiFJHQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoanOfficeSugnUpMobile;
const __TURBOPACK__default__export__ = LoanOfficeSugnUpMobile;
var _c;
__turbopack_context__.k.register(_c, "LoanOfficeSugnUpMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const LawAgentSignUpMobile = ({ handleContinue, handleWaitList, handleSolarAgentBack, length = 6, onComplete })=>{
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
        "LawAgentSignUpMobile.useEffect": ()=>{
            let loc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$services$2f$apisServices$2f$ApiService$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLocalLocation"])();
            setCountryCode(loc);
        }
    }["LawAgentSignUpMobile.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LawAgentSignUpMobile.useEffect": ()=>{
            if (userName && userEmail && userPhoneNumber && customerService && companyName && installationVolume && // projectSize &&
            ClientType && emailCheckResponse?.status === true && checkPhoneResponse?.status === true) {
                setShouldContinue(false);
            } else if (!userName || !userEmail || !userPhoneNumber || !userFarm || !userBrokage || !userTransaction || customerService || companyName || installationVolume || // projectSize ||
            ClientType || userTransaction || checkPhoneResponse?.status === false || emailCheckResponse?.status === false) {
                setShouldContinue(true);
            }
        }
    }["LawAgentSignUpMobile.useEffect"], [
        userName,
        userEmail,
        userPhoneNumber,
        checkPhoneResponse,
        emailCheckResponse,
        customerService,
        companyName,
        installationVolume,
        projectSize,
        ClientType
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LawAgentSignUpMobile.useEffect": ()=>{
            let storedData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (storedData) {
                let data = JSON.parse(storedData);
                setUserData(data);
            }
        }
    }["LawAgentSignUpMobile.useEffect"], []);
    //code to focus the verify code input field
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LawAgentSignUpMobile.useEffect": ()=>{
            if (showVerifyPopup && verifyInputRef.current[0]) {
                verifyInputRef.current[0].focus();
            }
        }
    }["LawAgentSignUpMobile.useEffect"], [
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
            let clienttype = null;
            if (ClientType === "Individuals (B2)") {
                clienttype = "Individuals";
            } else if (ClientType === "Businesses & Corporations (B2B)") {
                clienttype = "Businesses&Corporations";
            } else if (ClientType === "Government & Public Sector") {
                clienttype = "Government&PublicSector";
            }
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
                        handleContinue();
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
                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                lineNumber: 516,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                            lineNumber: 515,
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
                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                    lineNumber: 520,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 530,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 531,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center w-full justify-between mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your email address`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                    lineNumber: 554,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                            lineNumber: 559,
                                                            columnNumber: 21
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: emailCheckResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    ...styles.errmsg,
                                                                    color: emailCheckResponse.status === true ? "green" : "red"
                                                                },
                                                                children: emailCheckResponse.message.slice(0, 1).toUpperCase() + emailCheckResponse.message.slice(1)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 565,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 580,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                            lineNumber: 563,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                ...styles.errmsg,
                                                                color: "red"
                                                            },
                                                            children: validEmail
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                            lineNumber: 584,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                    lineNumber: 557,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 553,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-row items-center justify-between w-full mt-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    style: styles.headingStyle,
                                                    children: `What's your phone number`
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                    lineNumber: 641,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                            lineNumber: 647,
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
                                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                            lineNumber: 655,
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
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 667,
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
                                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                    lineNumber: 679,
                                                                    columnNumber: 29
                                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                    lineNumber: 695,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 677,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                            lineNumber: 665,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                    lineNumber: 645,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 640,
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
                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                lineNumber: 705,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 704,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Where do you primarily practice law?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 744,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 747,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Name of the firm or legal practice you work with, if any."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 757,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 760,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "How many cases do you handle annually or monthly?"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 770,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            placeholder: "Type here",
                                            type: "number",
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
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 773,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Client Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 784,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex w-full flex-wrap flex-row items-center gap-2",
                                            style: {
                                                marginTop: "8px"
                                            },
                                            children: primaryClientTypes.map((item, index)=>{
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            handleSelectClientType(item);
                                                        },
                                                        className: "border border-[#00000010] rounded px-4 h-[74px] w-full outline-none focus:outline-none focus:ring-0",
                                                        style: {
                                                            ...styles.inputStyle,
                                                            borderRadius: "30px",
                                                            paddingInline: index === 2 && "40px",
                                                            border: ClientType === item.title ? "2px solid #7902DF" : "",
                                                            backgroundColor: ClientType === item.title ? "#402FFF20" : ""
                                                        },
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                        lineNumber: 795,
                                                        columnNumber: 23
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                    lineNumber: 794,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 788,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: styles.headingStyle,
                                            className: "mt-6",
                                            children: "Consultation Format"
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 819,
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
                                                        className: "border w-full h-[74px] border-[#00000010] rounded px-4 outline-none focus:outline-none focus:ring-0",
                                                        style: {
                                                            ...styles.inputStyle,
                                                            borderRadius: "30px",
                                                            paddingInline: index === 2 && "40px",
                                                            border: ClientType === item.title ? "2px solid #7902DF" : "",
                                                            backgroundColor: ClientType === item.title ? "#402FFF20" : ""
                                                        },
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                        lineNumber: 830,
                                                        columnNumber: 23
                                                    }, this)
                                                }, index, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                    lineNumber: 829,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 823,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                        lineNumber: 881,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                    lineNumber: 880,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 879,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                style: {
                                                                    fontSize: 26,
                                                                    fontWeight: "700"
                                                                },
                                                                children: "Verify phone number"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 889,
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
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 897,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                        lineNumber: 910,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 905,
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
                                                                        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                        lineNumber: 949,
                                                                        columnNumber: 27
                                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                        className: "outline-none border-none text-purple",
                                                                        onClick: handleVerifyPopup,
                                                                        children: "Resend"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                        lineNumber: 951,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 943,
                                                                columnNumber: 23
                                                            }, this),
                                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex fex-row items-center justify-center mt-8",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                                    size: 35
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                    lineNumber: 961,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 960,
                                                                columnNumber: 25
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "text-white bg-purple outline-none rounded-xl w-full mt-8",
                                                                style: {
                                                                    height: "50px"
                                                                },
                                                                onClick: handleVerifyCode,
                                                                children: "Continue"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                                lineNumber: 964,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                        lineNumber: 871,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                    lineNumber: 870,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                                lineNumber: 866,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 854,
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
                                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                            lineNumber: 977,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                    lineNumber: 526,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                            lineNumber: 519,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                    lineNumber: 513,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                                lineNumber: 991,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                            lineNumber: 990,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                            lineNumber: 994,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
                    lineNumber: 989,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
            lineNumber: 512,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/mobileUI/LawAgentSignUpMobile.js",
        lineNumber: 508,
        columnNumber: 5
    }, this);
};
_s(LawAgentSignUpMobile, "Oyyj9GmLRb3Oent+L3l7bS/NtEU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LawAgentSignUpMobile;
const __TURBOPACK__default__export__ = LawAgentSignUpMobile;
var _c;
__turbopack_context__.k.register(_c, "LawAgentSignUpMobile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_onboarding_mobileUI_3c537b49._.js.map