(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/components/onboarding/Congrats.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const Congrats = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full items-center justify-center py-10 gap-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                src: "/assets/congrats.png",
                height: 140,
                width: 140,
                alt: "Congratulations"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/Congrats.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-2xl font-semibold",
                children: "Congratulations!"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/Congrats.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center text-gray-500",
                children: "Your setup is complete. You can now start using the platform and explore all its features."
            }, void 0, false, {
                fileName: "[project]/components/onboarding/Congrats.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/Congrats.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
};
_c = Congrats;
const __TURBOPACK__default__export__ = Congrats;
var _c;
__turbopack_context__.k.register(_c, "Congrats");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/UserType.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const UserType = ({ userType, selected, onSelect })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onSelect,
        className: `w-full p-4 border rounded-lg text-left ${selected ? "border-purple bg-purple/10" : "border-gray-300"} hover:border-purple transition`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-lg font-medium",
            children: userType
        }, void 0, false, {
            fileName: "[project]/components/onboarding/UserType.tsx",
            lineNumber: 17,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/UserType.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = UserType;
const __TURBOPACK__default__export__ = UserType;
var _c;
__turbopack_context__.k.register(_c, "UserType");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/Header.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const Header = ({ showBack = false, onBackClick })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row items-center justify-between w-full px-4 py-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center gap-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/agentX.png",
                    alt: "AgentX Logo",
                    height: 30,
                    width: 120
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/Header.tsx",
                    lineNumber: 14,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/onboarding/Header.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            showBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: onBackClick,
                className: "text-purple border border-purple rounded px-4 py-1 hover:bg-purple hover:text-white transition-colors duration-200",
                children: "Back"
            }, void 0, false, {
                fileName: "[project]/components/onboarding/Header.tsx",
                lineNumber: 24,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/Header.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
};
_c = Header;
const __TURBOPACK__default__export__ = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/Box/Box.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/LinearProgress/LinearProgress.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const ProgressBar = ({ value })=>{
    _s();
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProgressBar.useEffect": ()=>{
            setProgress(value);
        }
    }["ProgressBar.useEffect"], [
        value
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$Box$2f$Box$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            sx: {
                width: "100%"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$LinearProgress$2f$LinearProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                variant: "determinate",
                value: progress,
                sx: {
                    "& .MuiLinearProgress-bar": {
                        backgroundColor: "#7902DF"
                    },
                    backgroundColor: "#7902DF35"
                }
            }, void 0, false, {
                fileName: "[project]/components/onboarding/ProgressBar.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/onboarding/ProgressBar.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/ProgressBar.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
};
_s(ProgressBar, "ZVQpwjU6Dz5R8VBOzPsnxGRmMVo=");
_c = ProgressBar;
const __TURBOPACK__default__export__ = ProgressBar;
var _c;
__turbopack_context__.k.register(_c, "ProgressBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$LoaderAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/animations/LoaderAnimation.tsx [app-client] (ecmascript)");
;
;
;
const Footer = ({ handleContinue, handleBack, donotShowBack = false, registerLoader = false, shouldContinue = false, addCalendarLoader = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 flex flex-row justify-between items-center pt-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: !donotShowBack && handleBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "text-purple",
                        style: {
                            fontWeight: "700",
                            fontSize: "16"
                        },
                        onClick: handleBack,
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/Footer.tsx",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/Footer.tsx",
                    lineNumber: 26,
                    columnNumber: 9
                }, this),
                registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$animations$2f$LoaderAnimation$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    loaderModal: registerLoader
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/Footer.tsx",
                    lineNumber: 40,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: addCalendarLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                        size: 35
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/Footer.tsx",
                        lineNumber: 44,
                        columnNumber: 15
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: shouldContinue,
                        className: "rounded-lg text-white bg-purple",
                        style: {
                            fontWeight: "700",
                            fontSize: "16px",
                            backgroundColor: shouldContinue ? "#00000020" : "#7902DF",
                            color: shouldContinue ? "#000000" : "#ffffff",
                            height: "40px",
                            width: "100px"
                        },
                        onClick: handleContinue,
                        children: "Continue"
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/Footer.tsx",
                        lineNumber: 46,
                        columnNumber: 15
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/Footer.tsx",
                    lineNumber: 42,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/Footer.tsx",
            lineNumber: 24,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/Footer.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/UserService.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$AgentServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/AgentServices.js [app-client] (ecmascript)");
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
const UserService = ({ handleContinue, handleBack })=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [serviceId, setServiceId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [servicesData, setServicesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [value, setValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserService.useEffect": ()=>{
            const selectedServiceID = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (selectedServiceID) {
                const serviceIds = JSON.parse(selectedServiceID);
                setServiceId(serviceIds.serviceID);
            }
        }
    }["UserService.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserService.useEffect": ()=>{
            getDefaultData();
        }
    }["UserService.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "UserService.useEffect": ()=>{
            if (serviceId.length > 0) {
                setShouldContinue(false);
            } else {
                setShouldContinue(true);
            }
        }
    }["UserService.useEffect"], [
        serviceId
    ]);
    const getDefaultData = async ()=>{
        try {
            const selectedServiceID = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            let AgentTypeTitle = null;
            if (selectedServiceID) {
                const serviceIds = JSON.parse(selectedServiceID);
                AgentTypeTitle = serviceIds.userTypeTitle;
            }
            const servicesLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$AgentServices$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetServicesForUser"])(AgentTypeTitle);
            setServicesData(servicesLocal);
            const ApiPath = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultData}?type=${AgentTypeTitle}`;
            const response = await axios.get(ApiPath, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            if (response) {
                setServicesData(response.data.data.agentServices);
            }
        } catch (error) {
        // console.error("Error in getDefaultData:", error);
        } finally{
            setLoader(false);
        }
    };
    const handleserviceId = (id)=>{
        setServiceId((prevIds)=>{
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId)=>prevId !== id);
            } else {
                return [
                    ...prevIds,
                    id
                ];
            }
        });
        setValue(30);
    };
    const handleNext = ()=>{
        const data = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
        if (data) {
            const details = JSON.parse(data);
            details.serviceID = serviceId;
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails, JSON.stringify(details));
            if (serviceId && serviceId.length > 0) {
                handleContinue();
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-none flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white sm:rounded-2xl flex flex-col justify-between w-full sm:mx-2 md:w-10/12 h-[100%] sm:h-[90%] py-4",
            style: {
                scrollbarWidth: "none"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[90svh] sm:h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/UserService.tsx",
                                lineNumber: 116,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/UserService.tsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-10/12 sm:w-full md:w-11/12 md:text-4xl text-lg font-[650] sm:font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: "What would you like AgentX to help you with?"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/UserService.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                loader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-row justify-center items-center h-screen",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                        size: 35
                                    }, void 0, false, {
                                        fileName: "[project]/components/onboarding/UserService.tsx",
                                        lineNumber: 129,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/UserService.tsx",
                                    lineNumber: 128,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 pb-2 sm:mt-8 w-full md:w-10/12 lg:w-7/12 gap-4 flex flex-col sm:max-h-[90%] max-h-[100%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
                                    children: servicesData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                handleserviceId(item.id);
                                            },
                                            className: "border-none outline-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border bg-white flex flex-row items-center w-full rounded-2xl pt-3",
                                                style: {
                                                    border: serviceId.includes(item.id) ? "2px solid #7902DF" : "",
                                                    scrollbarWidth: "none",
                                                    backgroundColor: serviceId.includes(item.id) ? "#402FFF05" : ""
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row items-start px-4 w-full py-2 gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 sm:hidden",
                                                            children: serviceId.includes(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/assets/charmTick.png",
                                                                alt: "*",
                                                                height: 24,
                                                                width: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/UserService.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/assets/charmUnMark.png",
                                                                alt: "*",
                                                                height: 24,
                                                                width: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/UserService.tsx",
                                                                lineNumber: 165,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/UserService.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 sm:flex hidden",
                                                            children: serviceId.includes(item.id) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/assets/charmTick.png",
                                                                alt: "*",
                                                                height: 24,
                                                                width: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/UserService.tsx",
                                                                lineNumber: 176,
                                                                columnNumber: 29
                                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: "/assets/charmUnMark.png",
                                                                alt: "*",
                                                                height: 24,
                                                                width: 24
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/UserService.tsx",
                                                                lineNumber: 183,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/UserService.tsx",
                                                            lineNumber: 174,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-start w-[100%] md:w-[90%]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    style: {
                                                                        fontWeight: "700",
                                                                        fontSize: 20,
                                                                        textAlign: "start"
                                                                    },
                                                                    children: item.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/UserService.tsx",
                                                                    lineNumber: 193,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2",
                                                                    style: {
                                                                        textAlign: "start"
                                                                    },
                                                                    children: item.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/UserService.tsx",
                                                                    lineNumber: 203,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/onboarding/UserService.tsx",
                                                            lineNumber: 192,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/UserService.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/UserService.tsx",
                                                lineNumber: 143,
                                                columnNumber: 21
                                            }, this)
                                        }, item.id, false, {
                                            fileName: "[project]/components/onboarding/UserService.tsx",
                                            lineNumber: 136,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/UserService.tsx",
                                    lineNumber: 132,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/UserService.tsx",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/UserService.tsx",
                    lineNumber: 114,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-6 h-[10%] flex flex-col justify-end",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 33
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/UserService.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/UserService.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                height: "35px"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                handleContinue: handleNext,
                                handleBack: handleBack,
                                shouldContinue: shouldContinue
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/UserService.tsx",
                                lineNumber: 222,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/UserService.tsx",
                            lineNumber: 221,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/UserService.tsx",
                    lineNumber: 216,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/UserService.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/UserService.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
};
_s(UserService, "RSd9cSTcJmVDY2UIY0G9jPCfZtI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserService;
const __TURBOPACK__default__export__ = UserService;
var _c;
__turbopack_context__.k.register(_c, "UserService");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/FocusArea.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/ProgressBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Header.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/onboarding/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__ = __turbopack_context__.i("[project]/node_modules/@mui/material/esm/CircularProgress/CircularProgress.js [app-client] (ecmascript) <export default as CircularProgress>");
var __TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/constants/Constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$AreaOfFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/utilities/AreaOfFocus.js [app-client] (ecmascript)");
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
const FocusArea = ({ handleContinue, handleBack })=>{
    _s();
    const othersFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [focusArea, setFocusArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [focusAreaTitle, setFocusAreaTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loader, setLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [focusData, setFocusData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [shouldContinue, setShouldContinue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [otherType, setOtherType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [checkOthersFocusArea, setCheckOthersFocusArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showOtherInput, setShowOtherInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FocusArea.useEffect": ()=>{
            const focusData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (focusData) {
                const FocusAreaDetails = JSON.parse(focusData);
                setFocusArea(FocusAreaDetails.focusAreaId || []);
                setFocusAreaTitle(FocusAreaDetails.areaFocusTitle || "");
                if (FocusAreaDetails.userTypeTitle !== "RealEstateAgent") {
                    setShowOtherInput(true);
                }
            }
        }
    }["FocusArea.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FocusArea.useEffect": ()=>{
            getDefaultData();
        }
    }["FocusArea.useEffect"], []);
    const getDefaultData = async ()=>{
        try {
            const selectedServiceID = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            let AgentTypeTitle = null;
            if (selectedServiceID) {
                const serviceIds = JSON.parse(selectedServiceID);
                AgentTypeTitle = serviceIds.userTypeTitle;
            }
            const focusData = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
            if (focusData) {
                const FocusAreaDetails = JSON.parse(focusData);
                if (FocusAreaDetails.userTypeTitle !== "RecruiterAgent") {
                    const servicesLocal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$utilities$2f$AreaOfFocus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GetAreasOfFocusForUser"])(AgentTypeTitle);
                    setFocusData(servicesLocal);
                }
                const ApiPath = `${__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].defaultData}?type=${AgentTypeTitle}`;
                const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(ApiPath, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                if (response) {
                    if (FocusAreaDetails.userTypeTitle === "RecruiterAgent") {
                        setFocusData(response?.data?.data?.userIndustry || []);
                    } else {
                        setFocusData(response?.data?.data?.areaOfFocus || []);
                    }
                }
            }
        } catch (error) {
            console.error("Error in getDefaultData:", error);
        } finally{
            setLoader(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FocusArea.useEffect": ()=>{
            if (focusArea.length > 0 || otherType.length > 0) {
                setShouldContinue(false);
            } else {
                setShouldContinue(true);
            }
        }
    }["FocusArea.useEffect"], [
        focusArea,
        otherType
    ]);
    const handleNext = ()=>{
        const data = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
        if (data) {
            const LocalDetails = JSON.parse(data);
            let details = LocalDetails;
            if (Array.isArray(focusArea)) {
                details.focusAreaId = otherType.trim() ? [
                    ...focusArea,
                    otherType
                ] : [
                    ...focusArea
                ];
            } else {
                details.focusAreaId = otherType.trim() ? [
                    otherType
                ] : [];
            }
            localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails, JSON.stringify(details));
            handleContinue();
        }
    };
    const handlefocusArea = (id)=>{
        setFocusArea((prevIds)=>{
            if (prevIds.includes(id)) {
                return prevIds.filter((prevId)=>prevId !== id);
            } else {
                return [
                    ...prevIds,
                    id
                ];
            }
        });
    };
    const handleSelectOthersField = ()=>{
        if (checkOthersFocusArea) {
            if (othersFocus.current) {
                othersFocus.current.blur();
            }
            setOtherType("");
        } else {
            othersFocus.current?.focus();
        }
        setCheckOthersFocusArea(!checkOthersFocusArea);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            width: "100%"
        },
        className: "overflow-y-hidden flex flex-row justify-center items-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white sm:rounded-2xl flex flex-col justify-between w-full sm:mx-2 md:w-10/12 sm:h-[90%] py-4",
            style: {
                scrollbarWidth: "none"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[90svh] sm:h-[82svh]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-[10%]",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Header$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                lineNumber: 171,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/FocusArea.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center px-4 w-full h-[90%]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 w-9/12 sm:w-11/12 md:text-4xl text-lg font-[600]",
                                    style: {
                                        textAlign: "center"
                                    },
                                    children: focusAreaTitle || ""
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                    lineNumber: 175,
                                    columnNumber: 13
                                }, this),
                                loader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-full flex flex-row items-center justify-center h-screen",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                        size: 35
                                    }, void 0, false, {
                                        fileName: "[project]/components/onboarding/FocusArea.tsx",
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 sm:mt-8 pb-2 md:10/12 w-full lg:w-7/12 gap-4 flex flex-col sm:max-h-[90%] max-h-[100%] overflow-auto scrollbar scrollbar-track-transparent scrollbar-thin scrollbar-thumb-purple",
                                    children: [
                                        focusData.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handlefocusArea(item.id),
                                                className: "border-none outline-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "border bg-white flex flex-row items-start pt-3 w-full rounded-2xl",
                                                    style: {
                                                        border: focusArea.includes(item.id) ? "2px solid #7902DF" : "",
                                                        scrollbarWidth: "none",
                                                        backgroundColor: focusArea.includes(item.id) ? "#402FFF05" : ""
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full flex flex-row items-start px-4 py-2 gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 sm:hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: focusArea.includes(item.id) ? "/assets/charmTick.png" : "/assets/charmUnMark.png",
                                                                    alt: "*",
                                                                    height: 24,
                                                                    width: 24
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "mt-2 sm:flex hidden",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    src: focusArea.includes(item.id) ? "/assets/charmTick.png" : "/assets/charmUnMark.png",
                                                                    alt: "*",
                                                                    height: 32,
                                                                    width: 32
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                    lineNumber: 223,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                lineNumber: 222,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-start w-[100%] md:w-[90%]",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            fontWeight: "700",
                                                                            fontSize: 20
                                                                        },
                                                                        children: item.title
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                        lineNumber: 236,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    item.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "mt-2",
                                                                        children: item.description
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                        lineNumber: 245,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                lineNumber: 235,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this)
                                            }, item.id, false, {
                                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)),
                                        showOtherInput && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "border-none outline-none",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "border bg-white flex flex-row items-start pt-3 w-full rounded-2xl",
                                                style: {
                                                    border: checkOthersFocusArea ? "2px solid #7902DF" : "",
                                                    scrollbarWidth: "none",
                                                    backgroundColor: checkOthersFocusArea ? "#402FFF05" : ""
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-full flex flex-row items-start justify-between px-4 py-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-start w-[100%] md:w-[90%]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleSelectOthersField,
                                                                    style: {
                                                                        fontWeight: "700",
                                                                        fontSize: 20,
                                                                        width: "100%",
                                                                        textAlign: "start",
                                                                        outline: "none"
                                                                    },
                                                                    children: "Other (Type in)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                    lineNumber: 267,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-2",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                        ref: othersFocus,
                                                                        className: "outline-none border-none focus:ring-0 w-full",
                                                                        style: {
                                                                            fontWeight: "500",
                                                                            fontSize: 15,
                                                                            color: "#151515"
                                                                        },
                                                                        placeholder: "Type here...",
                                                                        value: otherType,
                                                                        onChange: (e)=>{
                                                                            const value = e.target.value;
                                                                            setOtherType(value);
                                                                            if (value) {
                                                                                setCheckOthersFocusArea(true);
                                                                            }
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                        lineNumber: 280,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                    lineNumber: 279,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                            lineNumber: 266,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: handleSelectOthersField,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                src: checkOthersFocusArea ? "/assets/charmTick.png" : "/assets/charmUnMark.png",
                                                                alt: "*",
                                                                height: 36,
                                                                width: 36
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                                lineNumber: 301,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                            lineNumber: 300,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                    lineNumber: 265,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                                lineNumber: 255,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/FocusArea.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                                    lineNumber: 187,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/FocusArea.tsx",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                    lineNumber: 169,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 60
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/FocusArea.tsx",
                                lineNumber: 323,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/FocusArea.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: ()=>{
                                const windowWidth = ("TURBOPACK compile-time truthy", 1) ? window.innerWidth : ("TURBOPACK unreachable", undefined);
                                if (windowWidth < 640) {
                                    const data = localStorage.getItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails);
                                    if (data) {
                                        const LocalDetails = JSON.parse(data);
                                        let details = LocalDetails;
                                        if (Array.isArray(focusArea)) {
                                            details.focusAreaId = otherType.trim() ? [
                                                ...focusArea,
                                                otherType
                                            ] : [
                                                ...focusArea
                                            ];
                                        } else {
                                            details.focusAreaId = otherType.trim() ? [
                                                otherType
                                            ] : [];
                                        }
                                        localStorage.setItem(__TURBOPACK__imported__module__$5b$project$5d2f$constants$2f$Constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PersistanceKeys"].RegisterDetails, JSON.stringify(details));
                                    }
                                    handleContinue();
                                } else {
                                    handleNext();
                                }
                            },
                            handleBack: handleBack,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/FocusArea.tsx",
                            lineNumber: 326,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/FocusArea.tsx",
                    lineNumber: 321,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/FocusArea.tsx",
            lineNumber: 165,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/FocusArea.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
};
_s(FocusArea, "Cb0gvZvivqq1ZEFj7scgrKk1EaU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = FocusArea;
const __TURBOPACK__default__export__ = FocusArea;
var _c;
__turbopack_context__.k.register(_c, "FocusArea");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/SignUpForm.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
const SignUpForm = ({ currentStep, totalSteps, onNext, onBack })=>{
    const handleNextClick = ()=>{
        onNext();
    };
    const handleBackClick = ()=>{
        if (onBack) onBack();
    };
    const progressPercentage = currentStep / totalSteps * 100;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full h-full items-center justify-center p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-between w-full mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/agentX.png",
                        alt: "AgentX Logo",
                        height: 40,
                        width: 140
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/SignUpForm.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-gray-500 text-sm",
                        children: [
                            "Step ",
                            currentStep,
                            " of ",
                            totalSteps
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/onboarding/SignUpForm.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/onboarding/SignUpForm.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full bg-gray-200 rounded-full h-2 mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-purple h-2 rounded-full transition-all duration-300",
                    style: {
                        width: `${progressPercentage}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/onboarding/SignUpForm.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/onboarding/SignUpForm.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center w-full flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold mb-2",
                        children: [
                            "This is a placeholder for step ",
                            currentStep
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/onboarding/SignUpForm.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 mb-6",
                        children: "Customize this section with your form fields."
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/SignUpForm.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/onboarding/SignUpForm.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row items-center justify-between w-full mt-6",
                children: [
                    onBack && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleBackClick,
                        className: "text-purple border border-purple rounded px-6 py-2 hover:bg-purple hover:text-white transition-colors duration-200",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/SignUpForm.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleNextClick,
                        className: "bg-purple text-white rounded px-6 py-2 hover:bg-purple-dark transition-colors duration-200 ml-auto",
                        children: "Next"
                    }, void 0, false, {
                        fileName: "[project]/components/onboarding/SignUpForm.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/onboarding/SignUpForm.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/onboarding/SignUpForm.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_c = SignUpForm;
const __TURBOPACK__default__export__ = SignUpForm;
var _c;
__turbopack_context__.k.register(_c, "SignUpForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/dashboard/leads/AgentSelectSnackMessage.tsx [app-client] (ecmascript)");
;
;
const SnackMessages = ({ message, isVisible, setIsVisible, success = true })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            isVisible: isVisible,
            hide: ()=>setIsVisible(false),
            message: message,
            type: success ? __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackbarTypes"].Success : __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$dashboard$2f$leads$2f$AgentSelectSnackMessage$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SnackbarTypes"].Error
        }, void 0, false, {
            fileName: "[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx",
            lineNumber: 20,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/services/AuthVerification/SnackMessages.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
};
_c = SnackMessages;
const __TURBOPACK__default__export__ = SnackMessages;
var _c;
__turbopack_context__.k.register(_c, "SnackMessages");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/services/AuthVerification/AuthService.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
const SendVerificationCode = async (phone, login = true, verifyApiResponse)=>{
    try {
        const ApiData = {
            login,
            phone
        };
        const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].sendVerificationCode;
        const result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
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
_c = SendVerificationCode;
const __TURBOPACK__default__export__ = SendVerificationCode;
var _c;
__turbopack_context__.k.register(_c, "SendVerificationCode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/services/apisServices/ApiService.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "AssignTeamMember": (()=>AssignTeamMember),
    "checkPhoneNumber": (()=>checkPhoneNumber),
    "getLocalLocation": (()=>getLocalLocation),
    "getLocation": (()=>getLocation),
    "getTeamsList": (()=>getTeamsList)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/apis/Apis.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
;
const AssignTeamMember = async (leadId, teamMemberUserId)=>{
    try {
        // //console.log
        let AuthToken = null;
        const localData = localStorage.getItem("User");
        // //console.log
        if (localData) {
            const Data = JSON.parse(localData);
            //// //console.log;
            AuthToken = Data.token;
        // return Data.token
        }
        // //console.log
        const ApiData = {
            // leadId: selectedLeadsDetails.id,
            // teamMemberUserId: item?.id
            leadId: leadId,
            teamMemberUserId: teamMemberUserId
        };
        // //console.log;
        const ApiPath = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].AssignLeadToTeam;
        // //console.log
        // return
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(ApiPath, ApiData, {
            headers: {
                Authorization: "Bearer " + AuthToken,
                "Content-Type": "application/json"
            }
        });
        if (response) {
            return response;
        }
    } catch (error) {
    // console.error("Error occured in assign lead to teammeber api is", error);
    } finally{
    // //console.log;
    }
};
_c = AssignTeamMember;
const checkPhoneNumber = async (value)=>{
    try {
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
            return response;
        }
    } catch (error) {
    // console.error("Error occured in check phone api is :", error);
    } finally{}
};
const getLocation = ()=>{
    // setLocationLoader(true);
    // Check if geolocation is available in the browser
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position)=>{
            const { latitude, longitude } = position.coords;
            localStorage.setItem("CompleteLocation", JSON.stringify(position));
            try {
                // //console.log
                // Fetch country code based on latitude and longitude
                const response = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`);
                // //console.log
                const data = await response.json();
                // //console.log
                // Set the country code if the API returns it
                const locationData = {
                    location: data.countryCode.toLowerCase()
                };
                // //console.log
                if (data && data.countryCode) {
                    localStorage.setItem("userLocation", JSON.stringify(locationData));
                    // //console.log
                    getLocalLocation();
                // //console.log
                } else {
                // console.error("Unable to fetch country code.");
                }
            } catch (error) {
            // console.error("Error fetching geolocation data:", error);
            } finally{}
        }, (error)=>{
        // console.error("Geolocation error:", error.message);
        });
    } else {
    // console.error("Geolocation is not supported by this browser.");
    }
};
const getLocalLocation = ()=>{
    // //console.log
    const loc = localStorage.getItem("userLocation");
    // //console.log
    if (loc) {
        const L = JSON.parse(loc);
        if (L) {
        // //console.log
        }
        return L?.location;
    } else if (!loc) {
        return "us";
    }
};
const getTeamsList = async ()=>{
    try {
        const data = localStorage.getItem("User");
        if (data) {
            let u = JSON.parse(data);
            let path = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$apis$2f$Apis$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].getTeam;
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(path, {
                headers: {
                    Authorization: "Bearer " + u.token
                }
            });
            if (response) {
                if (response.data.status === true) {
                    // //console.log;
                    return response.data;
                } else {
                // //console.log;
                // return response.data.data
                }
            }
        }
    } catch (error) {
    // console.error("Error occured in api is", error);
    } finally{
    // //console.log;
    }
};
var _c;
__turbopack_context__.k.register(_c, "AssignTeamMember");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/Body.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Body = ({ children })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col w-full h-full justify-center items-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full sm:w-10/12 md:w-8/12 lg:w-7/12 xl:w-6/12 flex flex-col bg-white sm:rounded-xl rounded-none h-full py-6 sm:py-10 px-6 sm:px-10",
            children: children
        }, void 0, false, {
            fileName: "[project]/components/onboarding/Body.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/Body.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
};
_c = Body;
const __TURBOPACK__default__export__ = Body;
var _c;
__turbopack_context__.k.register(_c, "Body");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/components/onboarding/DebtCollectorAgentSignUp.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
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
(()=>{
    const e = new Error("Cannot find module '@/components/onboarding/SnackMessages'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
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
const DebtCollectorAgentSignUp = ({ handleSolarAgentBack })=>{
    _s();
    const [userName, setUserName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userEmail, setUserEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [userPhoneNumber, setUserPhoneNumber] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [customerService, setCustomerService] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [companyName, setCompanyName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [installationVolume, setInstallationVolume] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [ClientType, setClientType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
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
            title: "Consumer Debts"
        },
        {
            title: "Commercial Debts"
        },
        {
            title: "Medical Debts"
        },
        {
            title: "Utility Debts"
        },
        {
            title: "Government Debts"
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
    const handleSelectClientType = (item)=>{
        if (ClientType.includes(item.title)) {
            setClientType(ClientType.filter((t)=>t !== item.title));
        } else {
            setClientType([
                ...ClientType,
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
                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                    lineNumber: 132,
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
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 141,
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
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 142,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center w-full justify-between mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your email address"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                    lineNumber: 159,
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
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 162,
                                            columnNumber: 17
                                        }, this) : emailCheckResponse && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: emailCheckResponse.status ? "green" : "red"
                                            },
                                            children: emailCheckResponse.message.charAt(0).toUpperCase() + emailCheckResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "red"
                                            },
                                            children: validEmail
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 158,
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
                            id: "random-est-fld",
                            autoComplete: "off",
                            name: "random-est-fld-xyz",
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
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-row items-center justify-between w-full mt-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: styles.headingStyle,
                                    children: "What's your phone number"
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                    lineNumber: 214,
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
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 217,
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
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, this) : phoneNumberLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: "black",
                                                height: "20px"
                                            },
                                            children: "Checking ..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 232,
                                            columnNumber: 17
                                        }, this) : checkPhoneResponse ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                ...styles.errmsg,
                                                color: checkPhoneResponse.status ? "green" : "red",
                                                height: "20px"
                                            },
                                            children: checkPhoneResponse.message.charAt(0).toUpperCase() + checkPhoneResponse.message.slice(1)
                                        }, void 0, false, {
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
                                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                            lineNumber: 252,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                    lineNumber: 215,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 213,
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
                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                lineNumber: 258,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 257,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Name of the company or collection agency you work with, if any."
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 287,
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
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: styles.headingStyle,
                            className: "mt-6",
                            children: "Typical Collection Strategy"
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 299,
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
                                            border: ClientType.includes(item.title) ? "2px solid #7902DF" : "",
                                            backgroundColor: ClientType.includes(item.title) ? "#402FFF20" : ""
                                        },
                                        children: item.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                        lineNumber: 305,
                                        columnNumber: 17
                                    }, this)
                                }, index, false, {
                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                    lineNumber: 304,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 302,
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
                                                        fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                        lineNumber: 342,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                    lineNumber: 341,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                lineNumber: 340,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 26,
                                                    fontWeight: "700"
                                                },
                                                children: "Verify phone number"
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                lineNumber: 350,
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
                                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                lineNumber: 353,
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
                                                        fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                lineNumber: 361,
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
                                                        fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                        lineNumber: 397,
                                                        columnNumber: 23
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        className: "outline-none border-none text-purple",
                                                        onClick: handleVerifyPopup,
                                                        children: "Resend"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                        lineNumber: 399,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                lineNumber: 391,
                                                columnNumber: 19
                                            }, this),
                                            registerLoader ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-row items-center justify-center mt-8",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$material$2f$esm$2f$CircularProgress$2f$CircularProgress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CircularProgress$3e$__["CircularProgress"], {
                                                    size: 35
                                                }, void 0, false, {
                                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                    lineNumber: 410,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                lineNumber: 409,
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
                                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                                lineNumber: 413,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                        lineNumber: 332,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                    lineNumber: 331,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 322,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SnackMessages, {
                            message: response.message,
                            isVisible: isVisible,
                            setIsVisible: setIsVisible,
                            success: response.status
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 431,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-[10%]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$ProgressBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                value: 80
                            }, void 0, false, {
                                fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                                lineNumber: 442,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 441,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$onboarding$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            handleContinue: handleVerifyPopup,
                            handleBack: handleSolarAgentBack,
                            registerLoader: registerLoader,
                            shouldContinue: shouldContinue
                        }, void 0, false, {
                            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                            lineNumber: 445,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
                    lineNumber: 440,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/onboarding/DebtCollectorAgentSignUp.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
};
_s(DebtCollectorAgentSignUp, "2he3BUxHRcF7XtAPzgRzLi+neRQ=");
_c = DebtCollectorAgentSignUp;
const __TURBOPACK__default__export__ = DebtCollectorAgentSignUp;
var _c;
__turbopack_context__.k.register(_c, "DebtCollectorAgentSignUp");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=components_onboarding_5e0283e3._.js.map