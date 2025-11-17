#!/bin/bash

# 定义产品页面数据
declare -A pages=(
    ["two-wire-medical-intercom.html"]="二线制医护对讲系统|德视安二线制医护对讲系统，经济实用的医院病房通讯解决方案。|two-wire-medical"
    ["wireless-call-system.html"]="无线呼叫系统|德视安无线呼叫系统，安装简便，灵活部署的呼叫解决方案。|wireless-call"
    ["wireless-infusion-call.html"]="无线输液呼叫系统|德视安无线输液呼叫系统，专为输液场所设计的智能呼叫系统。|wireless-infusion-call"
    ["icu-visit-intercom.html"]="ICU探视对讲系统|德视安ICU探视对讲系统，为ICU病房提供专业的探视通讯解决方案。|icu-visit"
    ["digital-clock-system.html"]="数字时钟系统|德视安数字时钟系统，医院全院时钟同步解决方案。|digital-clock"
    ["queuing-system.html"]="排队叫号系统|德视安排队叫号系统，优化就医流程，提升医院服务效率。|queuing"
    ["info-display-system.html"]="信息发布系统|德视安信息发布系统，多媒体信息展示和传播平台。|info-display"
    ["smart-aging-system.html"]="智慧康养系统|德视安智慧康养系统，专业的养老机构智能化解决方案。|smart-aging"
    ["smart-lighting-system.html"]="智能照明系统|德视安智能照明系统，基于KNX标准的智能照明控制系统。|smart-lighting"
)

# 为每个页面创建 page.tsx
for page in "${!pages[@]}"; do
    IFS='|' read -r title desc folder <<< "${pages[$page]}"
    
    cat > "app/$page/page.tsx" << EOPAGE
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "$title - 德视安",
  description: "$desc",
}

export default function Page() {
  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <section className="py-20 bg-[#f9f9f9]">
          <div className="container mx-auto px-5">
            <div className="text-center mb-15">
              <h1 className="text-4xl font-semibold text-[#333333] mb-5">
                $title
              </h1>
              <p className="text-base text-[#666666] max-w-3xl mx-auto leading-relaxed mb-10">
                $desc
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <p className="text-[#666666] leading-relaxed">
                  产品详情页面正在建设中，敬请期待...
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
EOPAGE
done

echo "✓ 所有产品页面创建完成"
