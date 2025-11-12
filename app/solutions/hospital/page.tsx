import { DetailPage } from "@/components/layout/detail-page"

export default function HospitalSolutionPage() {
  return (
    <DetailPage
      title="智慧医院解决方案"
      subtitle="为医疗行业提供全方位智能化解决方案"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">方案概述</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            德视安智慧医院解决方案致力于满足医护人员、患者及医院管理层的多方需求，通过物联网、大数据、人工智能等先进技术，
            打造智能、高效、人性化的医疗环境。
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">核心功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "智慧病房", desc: "智能化病房管理，提升患者体验" },
              { title: "智慧门诊", desc: "优化门诊流程，提高就医效率" },
              { title: "医护对讲", desc: "实时通讯系统，快速响应需求" },
              { title: "访客管理", desc: "智能化访客登记与管理" },
              { title: "设备监控", desc: "医疗设备实时监控与预警" },
              { title: "数据分析", desc: "大数据分析，辅助医疗决策" },
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-blue-600">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">应用场景</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>综合医院、专科医院的智能化改造</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>新建医疗机构的智慧系统部署</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>医养结合机构的智能化建设</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </DetailPage>
  )
}


