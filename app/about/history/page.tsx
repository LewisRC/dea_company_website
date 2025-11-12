import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/layout/page-header"

export default function HistoryPage() {
  return (
    <main className="w-full">
      <Header />
      <PageHeader 
        title="发展历程" 
        subtitle="见证德视安的成长与发展"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {[
            { year: "2025", event: "持续创新，引领行业发展" },
            { year: "2020", event: "推出新一代智能家居系统" },
            { year: "2015", event: "进军智慧社区领域" },
            { year: "2010", event: "成为行业领先企业" },
            { year: "2005", event: "公司成立，开始楼宇对讲业务" },
          ].map((item, index) => (
            <div key={index} className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-3xl font-bold text-blue-600">{item.year}</span>
              </div>
              <div className="flex-1 border-l-4 border-blue-600 pl-8 pb-8">
                <p className="text-lg text-gray-700">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  )
}


