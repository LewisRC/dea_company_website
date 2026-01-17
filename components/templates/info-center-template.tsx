"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { siteConfig } from "@/config/site-config"
import { useI18n } from "@/lib/i18n-context"
import { useState } from "react"
import Image from "next/image"

// 案例数据类型
interface CaseItem {
  id: number;
  title: string;
  location: string;
  system: string;
  category: string;
  image: string;
}

// 案例数据
const caseData: CaseItem[] = [
  // 智慧医院案例 - 红色字体部分（第一页显示）
  {
    id: 1,
    title: "巴中市中医院",
    location: "四川.巴中",
    system: "医护对讲、信息发布",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 2,
    title: "中国人民解放军902医院",
    location: "安徽.蚌埠",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 3,
    title: "张北县妇幼保健院",
    location: "河北.张家口张北",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  {
    id: 4,
    title: "凉州妇女儿童医院",
    location: "四川.凉山西昌",
    system: "医护对讲、探视对讲、手术对讲、排队叫号",
    category: "hospital",
    image: "/images/info-center/yiyuan/case4.jpg"
  },
  {
    id: 5,
    title: "绵竹县中医院",
    location: "四川.德阳绵竹",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case5.jpg"
  },
  {
    id: 6,
    title: "阿里人民医院",
    location: "西藏.阿里",
    system: "医护对讲、排队叫号、地图导航、信息发布",
    category: "hospital",
    image: "/images/info-center/yiyuan/case6.jpg"
  },
  // 智慧医院案例 - 第二页显示（按照用户提供的表格内容更新）
  {
    id: 7,
    title: "尼玛县人民医院",
    location: "西藏.那曲尼玛",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 8,
    title: "长沙盈康肿瘤医院",
    location: "湖南.长沙",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 9,
    title: "天山王方舱医院",
    location: "四川.凉山西昌",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  {
    id: 10,
    title: "芒康县精神病福利院",
    location: "西藏.昌都芒康",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case4.jpg"
  },
  {
    id: 11,
    title: "卡孜乡卫生院",
    location: "西藏.日客则南木林",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case5.jpg"
  },
  {
    id: 12,
    title: "昌都病房医院",
    location: "西藏.昌都",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case6.jpg"
  },
  {
    id: 13,
    title: "中江县中医院",
    location: "四川.德阳中江",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case1.jpg"
  },
  {
    id: 14,
    title: "雅安中医院",
    location: "四川.雅安",
    system: "探视对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case2.jpg"
  },
  {
    id: 15,
    title: "乐至县中医院",
    location: "四川.资阳乐至",
    system: "医护对讲",
    category: "hospital",
    image: "/images/info-center/yiyuan/case3.jpg"
  },
  // 智慧康养案例
  {
    id: 16,
    title: "成都泰康蜀园养老社区",
    location: "四川·成都",
    system: "智慧养老系统",
    category: "elderly",
    image: "/images/info-center/kangyang/case7.jpg"
  },
  {
    id: 17,
    title: "四川寿星园养老服务中心",
    location: "四川·成都",
    system: "智能呼叫系统",
    category: "elderly",
    image: "/images/info-center/kangyang/case8.jpg"
  },
  {
    id: 18,
    title: "成都万科幸福家养老中心",
    location: "四川·成都",
    system: "智慧康养系统",
    category: "elderly",
    image: "/images/info-center/kangyang/case9.jpg"
  },
  {
    id: 19,
    title: "四川和熹会养老中心",
    location: "四川·成都",
    system: "智能数字对讲系统",
    category: "elderly",
    image: "/images/info-center/kangyang/case10.jpg"
  },
  // 智慧建筑案例
  {
    id: 20,
    title: "成都天府国际机场",
    location: "四川·成都",
    system: "信息发布",
    category: "building",
    image: "/images/info-center/jianzhu/case13.jpg"
  },
  {
    id: 21,
    title: "成都环球中心",
    location: "四川·成都",
    system: "智能对讲系统",
    category: "building",
    image: "/images/info-center/jianzhu/case14.jpg"
  },
  {
    id: 22,
    title: "成都银泰中心",
    location: "四川·成都",
    system: "信息发布",
    category: "building",
    image: "/images/info-center/jianzhu/case15.jpg"
  },
  // 智慧社区案例
  {
    id: 23,
    title: "成都高新区天府二街社区",
    location: "四川·成都",
    system: "数字对讲",
    category: "community",
    image: "/images/info-center/shequ/case19.jpg"
  },
  {
    id: 24,
    title: "成都市锦江区东光街道",
    location: "四川·成都",
    system: "智慧社区",
    category: "community",
    image: "/images/info-center/shequ/case20.jpg"
  }
]

export function InfoCenterPageTemplate() {
  const { t, language } = useI18n()
  const [activeFilter, setActiveFilter] = useState<string>("hospital")
  // 为每个标签单独跟踪分页状态
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({
    hospital: 1,
    elderly: 1,
    building: 1,
    community: 1
  })
  
  // 根据当前筛选条件获取案例
  const getFilteredCases = () => {
    if (activeFilter === "all") {
      return caseData
    } else {
      return caseData.filter(item => item.category === activeFilter)
    }
  }
  
  // 获取当前页面的案例
  const getCurrentPageCases = () => {
    const cases = getFilteredCases()
    const currentPage = currentPages[activeFilter] || 1
    if (currentPage === 1) {
      return cases.slice(0, 6)
    } else {
      return cases.slice(6)
    }
  }
  
  // 筛选案例
  const handleFilter = (category: string) => {
    setActiveFilter(category)
    // 确保切换分类时，如果该分类没有分页状态，则设置为1
    if (!currentPages[category]) {
      setCurrentPages(prev => ({ ...prev, [category]: 1 }))
    }
  }
  
  // 切换页面
  const handlePageChange = (page: number) => {
    setCurrentPages(prev => ({
      ...prev,
      [activeFilter]: page
    }))
  }

  return (
      <div className="relative min-h-screen">
        <Header />
        <main className="w-full">
          {/* 自定义样式 */}
          <style jsx global>{`
            /* 案例卡片悬停效果 */
            .case-card:hover {
              transform: translateY(-15px) scale(1.02);
              box-shadow: 0 15px 40px rgba(0, 0, 0, 0.12);
            }
            
            .case-card::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 6px;
              background: linear-gradient(90deg, #0066cc, #00a8e8);
              opacity: 0;
              transition: opacity 0.3s ease;
            }
            
            .case-card:hover::before {
              opacity: 1;
            }
            
            .case-card:hover .case-image img {
              transform: scale(1.15) rotate(2deg);
            }
            
            .case-card:hover .case-system {
              color: #0066cc !important;
              font-weight: 600 !important;
            }
          `}</style>
          
          {/* 页面头部 */}
          <section className="cases-hero" style={{
          background: "linear-gradient(135deg, #051b33 0%, #004a99 100%)",
          color: "white",
          padding: "80px 0",
          textAlign: "center",
          marginTop: "78px"
        }}>
          <div className="container">
            <h1 style={{
              fontSize: "3rem",
              fontWeight: "bold",
              color: "white",
              marginBottom: "20px"
            }}>
              经典成功案例
            </h1>
            <p style={{
              fontSize: "1.25rem",
              color: "rgba(255, 255, 255, 0.9)",
              maxWidth: "800px",
              margin: "0 auto"
            }}>
              探索德视安科技在智慧医院、智慧康养、智慧建筑、智慧社区等多领域的标杆项目，从医疗养老到商业住宅，全方位见证我们的专业实力
            </p>
          </div>
        </section>

        {/* 案例筛选和展示 */}
        <section className="cases-section" style={{
          padding: "60px 0",
          backgroundColor: "white"
        }}>
          <div className="container">
            {/* 筛选按钮 */}
            <div style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              justifyContent: "center",
              marginBottom: "40px"
            }}>
              <button
                onClick={() => handleFilter("hospital")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: activeFilter === "hospital" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "hospital" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                智慧医院
              </button>
              <button
                onClick={() => handleFilter("elderly")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: activeFilter === "elderly" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "elderly" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                智慧康养
              </button>
              <button
                onClick={() => handleFilter("building")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: activeFilter === "building" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "building" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                智慧建筑
              </button>
              <button
                onClick={() => handleFilter("community")}
                style={{
                  padding: "10px 20px",
                  borderRadius: "25px",
                  border: "none",
                  backgroundColor: activeFilter === "community" ? siteConfig.colors.primary : "white",
                  color: activeFilter === "community" ? "white" : siteConfig.colors.foreground,
                  fontSize: "1rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease"
                }}
              >
                智慧社区
              </button>
            </div>

            {/* 案例列表 */}
            <div style={{
              maxWidth: "1200px",
              margin: "0 auto"
            }}>
              {getFilteredCases().length > 0 ? (
                <>
                  {/* 第一页样式 - 带图片和悬停效果 */}
                  {currentPages[activeFilter] === 1 && (
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "60px",
                      marginTop: "80px",
                      marginBottom: "60px"
                    }}>
                      {getCurrentPageCases().map((caseItem) => (
                        <div
                          key={caseItem.id}
                          className="case-card"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            position: "relative",
                            border: "none"
                          }}
                        >
                          <div className="case-image" style={{ height: "240px", overflow: "hidden", position: "relative" }}>
                            <Image 
                              src={caseItem.image} 
                              alt={caseItem.title} 
                              width={400} 
                              height={240} 
                              className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                              style={{ transition: "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)" }}
                            />
                          </div>
                          <div className="case-content" style={{ padding: "15px 25px" }}>
                            <h3 style={{ 
                              fontSize: "1rem",
                              color: "#051b33",
                              marginBottom: "6px",
                              fontWeight: 700,
                              lineHeight: "1.4"
                            }}>{caseItem.title}</h3>
                            <p style={{ 
                              color: "#555",
                              lineHeight: "1.5",
                              marginBottom: "8px",
                              fontSize: "0.8rem"
                            }}>{caseItem.location}</p>
                            <p className="case-system" style={{ 
                              color: "#555",
                              opacity: 1,
                              fontSize: "0.8rem"
                            }}>{caseItem.system}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 第二页样式 - 与第一页保持一致 */}
                  {currentPages[activeFilter] === 2 && (
                    <div style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: "60px",
                      marginTop: "80px",
                      marginBottom: "60px"
                    }}>
                      {getCurrentPageCases().map((caseItem) => (
                        <div
                          key={caseItem.id}
                          className="case-card"
                          style={{
                            backgroundColor: "white",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.05)",
                            transition: "all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            position: "relative",
                            border: "none",
                            padding: "25px"
                          }}
                        >
                          <h3 style={{ 
                            fontSize: "1rem",
                            color: "#051b33",
                            marginBottom: "6px",
                            fontWeight: 700,
                            lineHeight: "1.4"
                          }}>{caseItem.title}</h3>
                          <p style={{ 
                            color: "#555",
                            lineHeight: "1.5",
                            marginBottom: "8px",
                            fontSize: "0.8rem"
                          }}>{caseItem.location}</p>
                          <p className="case-system" style={{ 
                            color: "#555",
                            opacity: 1,
                            fontSize: "0.8rem"
                          }}>{caseItem.system}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* 分页导航 */}
                  {getFilteredCases().length > 6 && (
                    <div style={{
                      textAlign: "center",
                      margin: "40px 0"
                    }}>
                      <button
                        onClick={() => handlePageChange(1)}
                        style={{
                          padding: "10px 20px",
                          margin: "0 10px",
                          borderRadius: "8px",
                          border: "none",
                          backgroundColor: currentPages[activeFilter] === 1 ? "#0066cc" : "white",
                          color: currentPages[activeFilter] === 1 ? "white" : "#0066cc",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                      >
                        第1页
                      </button>
                      <button
                        onClick={() => handlePageChange(2)}
                        style={{
                          padding: "10px 20px",
                          margin: "0 10px",
                          borderRadius: "8px",
                          border: "none",
                          backgroundColor: currentPages[activeFilter] === 2 ? "#0066cc" : "white",
                          color: currentPages[activeFilter] === 2 ? "white" : "#0066cc",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                      >
                        第2页
                      </button>
                    </div>
                  )}
                </>
              ) : (
                <div style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "60px 20px",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "8px"
                }}>
                  <p style={{
                    fontSize: "1.2rem",
                    color: siteConfig.colors.textSecondary
                  }}>
                    没有找到匹配的案例
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

