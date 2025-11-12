"use client"

import { siteConfig } from "@/config/site-config"

export function ProductsSection() {
  const { products, colors } = siteConfig

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">产品中心</h2>
          <p className="text-gray-600 text-lg">为企业提供专业的通信解决方案</p>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* 产品图片 */}
              <div
                className="w-full h-48 bg-gray-200 flex items-center justify-center"
                style={{
                  backgroundImage: `url('${product.image}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* 备用颜色 */}
                {!product.image && (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <span className="text-white text-4xl">📦</span>
                  </div>
                )}
              </div>

              {/* 产品信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                {/* 特性列表 */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* 查看详情按钮 */}
                <button
                  className="w-full py-2 rounded-lg font-medium text-white transition-colors"
                  style={{ backgroundColor: colors.primary }}
                >
                  了解详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
