# 国际化(i18n)功能使用说明

## 🌍 功能介绍

网站现在支持中英文双语切换，用户可以通过点击 Header 右上角的「中文」/「EN」按钮切换语言。

## ✨ 功能特点

- ✅ 实时切换，无需刷新页面
- ✅ 语言设置保存在浏览器 localStorage
- ✅ 支持导航菜单、页面内容、按钮文本的多语言
- ✅ 易于扩展和维护

## 📁 项目结构

```
├── lib/
│   └── i18n-context.tsx        # 国际化 Context 和 Hook
├── locales/
│   ├── zh.json                 # 中文翻译
│   └── en.json                 # 英文翻译
├── app/
│   └── layout.tsx              # 引入 I18nProvider
├── components/
│   ├── layout/
│   │   ├── header.tsx          # Header 支持语言切换
│   │   └── footer.tsx          # Footer 支持多语言
│   ├── sections/
│   │   └── solutions-section.tsx  # 解决方案支持多语言
│   └── ui/
│       └── back-to-top.tsx     # 返回顶部支持多语言
└── config/
    └── site-config.ts          # 提供多语言导航配置
```

## 🚀 使用方法

### 1. 在组件中使用翻译

```tsx
"use client"

import { useI18n } from "@/lib/i18n-context"

export function MyComponent() {
  const { t, language, setLanguage } = useI18n()
  
  return (
    <div>
      <h1>{t('common.title')}</h1>
      <p>{t('about.description')}</p>
      
      {/* 当前语言: {language} */}
      
      {/* 切换语言 */}
      <button onClick={() => setLanguage('en')}>English</button>
      <button onClick={() => setLanguage('zh')}>中文</button>
    </div>
  )
}
```

### 2. 添加新的翻译键值

在 `locales/zh.json` 中添加：

```json
{
  "mySection": {
    "title": "我的标题",
    "description": "我的描述"
  }
}
```

在 `locales/en.json` 中添加：

```json
{
  "mySection": {
    "title": "My Title",
    "description": "My Description"
  }
}
```

在组件中使用：

```tsx
<h1>{t('mySection.title')}</h1>
<p>{t('mySection.description')}</p>
```

### 3. 支持嵌套的翻译键

翻译文件支持多层嵌套结构：

```json
{
  "pages": {
    "home": {
      "hero": {
        "title": "欢迎"
      }
    }
  }
}
```

使用时用点号分隔：

```tsx
{t('pages.home.hero.title')}
```

## 📝 翻译文件说明

### locales/zh.json (中文)

```json
{
  "common": {
    "search": "搜索",
    "learnMore": "了解更多",
    "contactUs": "联系我们",
    "backToTop": "返回顶部"
  },
  "nav": {
    "home": "首页",
    "products": "产品中心",
    "solutions": "解决方案",
    "news": "资讯中心",
    "recruitment": "人才招聘",
    "about": "关于我们"
  },
  // ... 更多翻译
}
```

### locales/en.json (英文)

```json
{
  "common": {
    "search": "Search",
    "learnMore": "Learn More",
    "contactUs": "Contact Us",
    "backToTop": "Back to Top"
  },
  "nav": {
    "home": "Home",
    "products": "Products",
    "solutions": "Solutions",
    "news": "News",
    "recruitment": "Careers",
    "about": "About"
  },
  // ... more translations
}
```

## 🎨 Header 语言切换按钮

Header 组件已经集成了语言切换功能：

```tsx
{/* Language Selector */}
<div className="hidden lg:flex items-center ml-[15px]">
  <button 
    onClick={() => setLanguage('zh')}
    className={language === 'zh' ? 'active' : ''}
  >
    中文
  </button>
  <span>|</span>
  <button 
    onClick={() => setLanguage('en')}
    className={language === 'en' ? 'active' : ''}
  >
    EN
  </button>
</div>
```

## 🔧 API 说明

### useI18n Hook

```tsx
const { t, language, setLanguage } = useI18n()
```

#### t(key: string): string
- 根据当前语言获取翻译文本
- 参数：翻译键（支持嵌套，用点号分隔）
- 返回：翻译后的文本

#### language: 'zh' | 'en'
- 当前选中的语言

#### setLanguage(lang: 'zh' | 'en'): void
- 切换语言
- 自动保存到 localStorage
- 自动更新 HTML lang 属性

## 🌐 多语言导航配置

使用 `getNavigationConfig()` 函数获取当前语言的导航配置：

```tsx
import { getNavigationConfig } from "@/config/site-config"

const navigation = getNavigationConfig(language)
```

## 💡 最佳实践

### 1. 所有用户可见文本都应该翻译

```tsx
// ❌ 不好
<button>提交</button>

// ✅ 好
<button>{t('common.submit')}</button>
```

### 2. 图片 alt 属性也要翻译

```tsx
<Image 
  src="/logo.png" 
  alt={t('common.siteName')}
/>
```

### 3. aria-label 等无障碍属性要翻译

```tsx
<button aria-label={t('common.search')}>
  <SearchIcon />
</button>
```

### 4. 使用语义化的键名

```tsx
// ❌ 不好
{t('text1')}
{t('btn2')}

// ✅ 好
{t('products.title')}
{t('common.learnMore')}
```

## 🔄 添加新语言

如果需要添加其他语言（如法语、德语等）：

1. 在 `locales/` 目录创建新的语言文件，如 `fr.json`
2. 复制 `zh.json` 的结构并翻译所有内容
3. 更新 `lib/i18n-context.tsx` 的类型定义：
   ```tsx
   type Language = 'zh' | 'en' | 'fr'
   ```
4. 在 Header 添加新的语言切换按钮
5. 更新 `getNavigationConfig()` 函数支持新语言

## 🐛 常见问题

### Q: 翻译没有显示，显示的是键名？

A: 检查以下几点：
1. 翻译键是否存在于两个语言文件中
2. 键名拼写是否正确（区分大小写）
3. 嵌套层级是否正确

### Q: 切换语言后部分内容没有更新？

A: 确保组件使用了 `"use client"` 指令，并且使用了 `useI18n()` Hook。

### Q: 页面刷新后语言重置了？

A: 检查浏览器是否禁用了 localStorage。i18n Context 会自动从 localStorage 读取保存的语言设置。

### Q: 如何设置默认语言？

A: 在 `lib/i18n-context.tsx` 中修改初始状态：
```tsx
const [language, setLanguageState] = useState<Language>('en') // 改为 'en' 设置英文为默认语言
```

## 📊 当前翻译覆盖

已翻译的模块：
- ✅ 导航菜单
- ✅ 产品列表
- ✅ 解决方案
- ✅ 页脚信息
- ✅ 通用按钮和链接
- ✅ 返回顶部

待翻译的页面：
- ⏳ 产品详情页面
- ⏳ 关于我们页面
- ⏳ 联系我们页面
- ⏳ 招聘页面

## 🚧 扩展翻译

要为其他页面添加翻译支持：

1. 在 `locales/zh.json` 和 `locales/en.json` 添加相应的翻译键值
2. 在页面组件中使用 `"use client"` 并导入 `useI18n`
3. 将硬编码的文本替换为 `t('key.name')`
4. 测试两种语言的显示效果

## 📚 参考文档

- [React Context API](https://react.dev/reference/react/useContext)
- [Next.js 国际化](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- [Web 国际化最佳实践](https://www.w3.org/International/questions/qa-i18n)

## 🎉 总结

通过 React Context + JSON 配置文件的方式，实现了简单高效的国际化方案。用户体验流畅，开发维护方便，易于扩展新语言。

