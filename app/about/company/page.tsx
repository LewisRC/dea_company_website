import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/layout/page-header"

export default function CompanyPage() {
  return (
    <main className="w-full">
      <Header />
      <PageHeader 
        title="公司简介" 
        subtitle="德视安 - 楼宇对讲、智能家居领导者"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">关于德视安</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              德视安专注于楼宇对讲、智慧社区建设和物联网解决方案领域，为全球数千家房地产开发商、物业公司和集成商提供专业的产品和服务。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              公司致力于打造安全、便捷、智能的现代生活空间，通过持续的技术创新和优质的服务，成为行业领先的智能化解决方案提供商。
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">企业愿景</h2>
            <p className="text-gray-700 leading-relaxed">
              成为全球领先的智慧社区解决方案提供商，用科技创造美好生活。
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6">核心价值观</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">创新</h3>
                <p className="text-gray-700">持续技术创新，引领行业发展</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">品质</h3>
                <p className="text-gray-700">追求卓越品质，超越客户期望</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">服务</h3>
                <p className="text-gray-700">以客户为中心，提供优质服务</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3">责任</h3>
                <p className="text-gray-700">承担社会责任，创造社会价值</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <Footer />
    </main>
  )
}


