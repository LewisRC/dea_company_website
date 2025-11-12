import { DetailPage } from "@/components/layout/detail-page"
import Image from "next/image"

export default function DigitalIntercomPage() {
  return (
    <DetailPage
      title="数字医护对讲系统"
      subtitle="先进的数字化医护通讯解决方案"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-3xl font-bold mb-6">产品概述</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            德视安数字医护对讲系统采用先进的数字信号处理技术，为医院提供高清、稳定、智能的通讯解决方案。
            系统支持病房呼叫、医护对讲、紧急呼救等多种功能，有效提升医疗服务质量和工作效率。
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">产品特点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "高清通话", 
                desc: "数字信号处理，通话清晰无杂音",
                icon: "🎤"
              },
              { 
                title: "快速响应", 
                desc: "一键呼叫，医护人员即时响应",
                icon: "⚡"
              },
              { 
                title: "智能管理", 
                desc: "可视化管理平台，实时监控系统状态",
                icon: "📊"
              },
              { 
                title: "扩展灵活", 
                desc: "模块化设计，支持多种扩展功能",
                icon: "🔧"
              },
              { 
                title: "稳定可靠", 
                desc: "工业级品质，7×24小时稳定运行",
                icon: "✅"
              },
              { 
                title: "易于安装", 
                desc: "标准化接口，安装维护简单便捷",
                icon: "🛠️"
              },
            ].map((item, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-lg hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">主要功能</h2>
          <div className="bg-blue-50 p-8 rounded-lg">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span>病房呼叫：患者一键呼叫护士站</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span>双向对讲：病房与护士站实时语音通话</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span>紧急呼救：卫生间紧急呼叫按钮</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span>信息显示：病房门口显示屏显示呼叫状态</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span>数据统计：记录呼叫次数、响应时间等数据</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-3 text-xl">•</span>
                <span>多级管理：支持护士站、医生办公室等多级管理</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">应用场景</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "综合医院",
              "专科医院",
              "社区医院",
              "康复中心",
              "养老院",
              "体检中心",
            ].map((scene, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
                <p className="text-lg font-semibold">{scene}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">技术参数</h2>
          <div className="max-w-2xl mx-auto">
            <table className="w-full">
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 font-semibold">通讯方式</td>
                  <td className="py-3 text-gray-700">数字信号传输</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">传输距离</td>
                  <td className="py-3 text-gray-700">最远可达1000米</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">工作电压</td>
                  <td className="py-3 text-gray-700">DC 24V</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">工作温度</td>
                  <td className="py-3 text-gray-700">-10℃ ~ 50℃</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold">显示屏</td>
                  <td className="py-3 text-gray-700">高清LED显示</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </DetailPage>
  )
}


