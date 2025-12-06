# 待翻译页面清单

## ✅ 已完成翻译的模块

- [x] Header 导航菜单
- [x] Footer 页脚信息
- [x] 首页 Solutions Section
- [x] 所有产品页面（10个产品页面）
  - [x] 数字医护对讲系统
  - [x] 二线制医护对讲系统
  - [x] 无线呼叫系统
  - [x] 无线输液呼叫系统
  - [x] ICU探视对讲系统
  - [x] 数字时钟系统
  - [x] 排队叫号系统
  - [x] 信息发布系统
  - [x] 智慧康养系统
  - [x] 智能照明系统
- [x] 通用组件（返回顶部、查看详情按钮等）

## 📝 待翻译的页面

### 1. 解决方案详情页 (高优先级)

#### 智慧医院 (`app/smart-hospital/page.tsx`)
- [ ] 页面标题和副标题
- [ ] 解决方案概述
- [ ] 核心功能（8个功能模块）
- [ ] 解决方案优势（6个优势点）
- [ ] 应用场景（4个场景）
- [ ] 联系我们部分

#### 智慧康养 (`app/smart-healthcare/page.tsx`)
- [ ] 页面标题和副标题
- [ ] 解决方案概述
- [ ] 核心功能
- [ ] 解决方案优势（6个优势点）
- [ ] 应用场景（4个场景）
- [ ] 联系我们部分

#### 智能照明 (`app/smart-lighting/page.tsx`)
- [ ] 页面标题和副标题
- [ ] 解决方案概述
- [ ] 核心功能
- [ ] 解决方案优势
- [ ] 应用场景
- [ ] 联系我们部分

### 2. 关于我们页面 (中优先级)

#### 公司简介 (`app/company-profile/page.tsx`)
- [ ] 页面标题
- [ ] 公司概况
- [ ] 核心优势（4个优势）
- [ ] 企业荣誉（4项荣誉）

#### 联系我们 (`app/contact-us/page.tsx`)
- [ ] 页面标题
- [ ] 联系方式
- [ ] 地址信息
- [ ] 联系表单

### 3. 招聘页面 (中优先级)

#### 招聘职位 (`app/recruitment/page.tsx`)
- [ ] 页面标题
- [ ] 职位列表
- [ ] 职位描述

#### 人才理念 (`app/talent-philosophy/page.tsx`)
- [ ] 页面标题
- [ ] 理念内容

### 4. 资讯中心 (低优先级)

#### 成功案例 (`app/info-center/page.tsx`)
- [ ] 页面标题
- [ ] 案例列表
- [ ] 案例详情

---

## 🔧 如何添加翻译

### 步骤 1: 更新翻译文件

在 `locales/zh.json` 和 `locales/en.json` 中添加翻译键值。

**示例：**

```json
// locales/zh.json
{
  "myPage": {
    "title": "我的页面标题",
    "description": "页面描述"
  }
}

// locales/en.json
{
  "myPage": {
    "title": "My Page Title",
    "description": "Page description"
  }
}
```

### 步骤 2: 更新页面组件

在页面组件中使用 `useI18n` Hook。

**示例：**

```tsx
"use client"

import { useI18n } from "@/lib/i18n-context"

export default function MyPage() {
  const { t } = useI18n()
  
  return (
    <div>
      <h1>{t('myPage.title')}</h1>
      <p>{t('myPage.description')}</p>
    </div>
  )
}
```

### 步骤 3: 对于服务端组件

如果页面使用了 `Metadata`（服务端组件），需要将其改为客户端组件：

**之前：**
```tsx
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "我的页面",
}

export default function MyPage() {
  return <div>内容</div>
}
```

**之后：**
```tsx
"use client"

import { useI18n } from "@/lib/i18n-context"
import { useEffect } from "react"

export default function MyPage() {
  const { t } = useI18n()
  
  // 动态更新页面标题
  useEffect(() => {
    document.title = t('myPage.title') + " - 德视安"
  }, [t])
  
  return <div>内容</div>
}
```

---

## 📋 翻译指南

### 命名规范

翻译键使用驼峰命名法，按模块组织：

```json
{
  "moduleName": {
    "sectionTitle": "标题",
    "sectionDescription": "描述",
    "button": "按钮文本"
  }
}
```

### 翻译原则

1. **准确性** - 确保翻译准确传达原文含义
2. **专业性** - 使用行业术语的标准翻译
3. **一致性** - 相同的术语在不同页面使用相同翻译
4. **简洁性** - 英文翻译尽量简洁明了

### 常用术语对照表

| 中文 | 英文 |
|------|------|
| 楼宇对讲 | Building Intercom |
| 智能家居 | Smart Home |
| 医护对讲 | Medical Intercom |
| 智慧医院 | Smart Hospital |
| 智慧康养 | Smart Healthcare / Smart Aging Care |
| 解决方案 | Solution |
| 产品中心 | Products |
| 关于我们 | About |
| 联系我们 | Contact Us |
| 成功案例 | Success Cases |
| 人才招聘 | Careers |
| 了解更多 | Learn More |
| 查看详情 | View Details |

---

## 🎯 推荐翻译顺序

基于用户访问频率和重要性：

1. **第一优先级**：解决方案页面（smart-hospital, smart-healthcare, smart-lighting）
2. **第二优先级**：公司简介和联系我们
3. **第三优先级**：招聘页面
4. **第四优先级**：资讯中心

---

## 💡 快速翻译工具

可以使用以下工具辅助翻译：

1. **Google Translate** - 快速获取基础翻译
2. **DeepL** - 更准确的上下文翻译
3. **行业词汇表** - 确保术语统一

翻译后建议由专业人员审核，确保质量。

---

## 🔄 进度跟踪

更新此文件标记完成的页面，使用以下格式：

```markdown
- [x] 已完成的页面
- [ ] 待完成的页面
```

---

## 📞 需要帮助？

如果在翻译过程中遇到问题，可以：

1. 查看已完成页面的翻译示例
2. 参考 `I18N_README.md` 了解国际化系统
3. 检查 `components/templates/product-page-template.tsx` 了解模板使用方法

