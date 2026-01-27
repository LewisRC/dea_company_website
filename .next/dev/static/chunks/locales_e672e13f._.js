(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/locales/en.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/locales_en_json_db1b9e45._.js",
  "static/chunks/locales_en_json_e5a77e75._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/locales/en.json (json)");
    });
});
}),
"[project]/locales/zh.json (json, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/locales_zh_json_f246257d._.js",
  "static/chunks/locales_zh_json_e5a77e75._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/locales/zh.json (json)");
    });
});
}),
]);