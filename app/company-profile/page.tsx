import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "公司简介 - 德视安",
  description: "成都德视安科技有限公司是领先的楼宇对讲、智能家居及医护对讲等智能设备的研发设计、生产制造和销售企业。",
}

export default function CompanyProfilePage() {
  return (
    <>
      <Header />
      <main className="w-full pt-20">
        <section className="py-20 bg-[#f9f9f9]">
          <div className="container mx-auto px-5">
            <div className="text-center mb-15">
              <h1 className="text-4xl font-semibold text-[#333333] mb-5">
                公司简介
              </h1>
              <p className="text-base text-[#666666] max-w-3xl mx-auto leading-relaxed mb-10">
                成都德视安科技有限公司
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">公司概况</h2>
                <p className="text-[#666666] leading-relaxed mb-4">
                  成都德视安科技有限公司是一家专注于楼宇对讲、智能家居、医护对讲等智能设备的研发设计、生产制造和销售的高新技术企业。
                  公司秉承"科技创新、品质为先、服务至上"的经营理念，致力于为客户提供高品质的产品和优质的服务。
                </p>
                <p className="text-[#666666] leading-relaxed">
                  公司拥有一支经验丰富的研发团队和完善的生产制造体系，产品广泛应用于住宅小区、医院、养老机构、酒店、办公楼等各类场所。
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">核心优势</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">技术创新</h3>
                    <p className="text-[#666666]">持续投入研发，掌握核心技术，产品性能行业领先</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">品质保证</h3>
                    <p className="text-[#666666]">严格的质量管理体系，确保每一件产品都符合高标准</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">专业服务</h3>
                    <p className="text-[#666666]">完善的售前、售中、售后服务体系，让客户无后顾之忧</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-[#0066cc] mb-2">行业经验</h3>
                    <p className="text-[#666666]">多年行业深耕，丰富的项目经验，值得信赖的合作伙伴</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h2 className="text-2xl font-semibold text-[#333333] mb-4">企业荣誉</h2>
                <ul className="space-y-2 text-[#666666]">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>国家高新技术企业</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>ISO9001质量管理体系认证</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>多项国家专利技术</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-[#0066cc] rounded-full mt-2 mr-3"></span>
                    <span>行业优秀供应商</span>
                  </li>
                </ul>
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

