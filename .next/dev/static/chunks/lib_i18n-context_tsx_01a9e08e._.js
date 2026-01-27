(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/i18n-context.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "I18nProvider",
    ()=>I18nProvider,
    "useI18n",
    ()=>useI18n
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const I18nContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function I18nProvider({ children }) {
    _s();
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('zh');
    const [translations, setTranslations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // 加载翻译文件
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            const loadTranslations = {
                "I18nProvider.useEffect.loadTranslations": async ()=>{
                    try {
                        const module = await __turbopack_context__.f({
                            "@/locales/en.json": {
                                id: ()=>"[project]/locales/en.json (json, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/locales/en.json (json, async loader)")
                            },
                            "@/locales/zh.json": {
                                id: ()=>"[project]/locales/zh.json (json, async loader)",
                                module: ()=>__turbopack_context__.A("[project]/locales/zh.json (json, async loader)")
                            }
                        }).import(`@/locales/${language}.json`);
                        setTranslations(module.default);
                    } catch (error) {
                        console.error('Failed to load translations:', error);
                    }
                }
            }["I18nProvider.useEffect.loadTranslations"];
            loadTranslations();
        }
    }["I18nProvider.useEffect"], [
        language
    ]);
    // 从 localStorage 读取语言设置
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "I18nProvider.useEffect": ()=>{
            const savedLang = localStorage.getItem('preferredLanguage');
            if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
                setLanguageState(savedLang);
            }
        }
    }["I18nProvider.useEffect"], []);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
        localStorage.setItem('preferredLanguage', lang);
        // 更新 HTML lang 属性
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    };
    // 翻译函数 - 支持嵌套键名 (如 "nav.home")
    const t = (key)=>{
        const keys = key.split('.');
        let value = translations;
        for (const k of keys){
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key // 如果找不到翻译，返回键名
                ;
            }
        }
        return typeof value === 'string' ? value : key;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/lib/i18n-context.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(I18nProvider, "aVOhoz/9ewRBI5iMs69VAcC9L0Q=");
_c = I18nProvider;
function useI18n() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(I18nContext);
    if (context === undefined) {
        throw new Error('useI18n must be used within an I18nProvider');
    }
    return context;
}
_s1(useI18n, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "I18nProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=lib_i18n-context_tsx_01a9e08e._.js.map