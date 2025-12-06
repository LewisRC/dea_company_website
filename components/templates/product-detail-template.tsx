"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { BackToTop } from "@/components/ui/back-to-top"
import { useI18n } from "@/lib/i18n-context"
import { getProductName, getCategoryName } from "@/config/product-names-i18n"
import Image from "next/image"
import Link from "next/link"
import { siteConfig } from "@/config/site-config"
import { ChevronLeft } from "lucide-react"

interface ProductParam {
  label: string;
  value: string;
}

interface ProductDetailProps {
  name: string;
  category: string;
  categoryLink: string;
  image: string;
  params: ProductParam[];
}

export function ProductDetailTemplate({ 
  name, 
  category, 
  categoryLink, 
  image, 
  params 
}: ProductDetailProps) {
  const { t, language } = useI18n()
  
  // 获取翻译后的名称和分类
  const translatedName = getProductName(name, language)
  const translatedCategory = getCategoryName(category, language)
  
  // 翻译参数值中的中文
  const translateValue = (value: string): string => {
    if (language === 'zh') return value
    
    return value
      // 尺寸和屏幕
      .replace(/英寸/g, ' inch')
      .replace(/寸/g, '"')
      .replace(/高清屏/g, ' HD Screen')
      .replace(/电容触摸屏/g, ' Capacitive Touchscreen')
      .replace(/触摸屏/g, ' Touchscreen')
      .replace(/健康一体机/g, ' Health All-in-One')
      
      // 处理器
      .replace(/高通八核64位/g, 'Qualcomm Octa-Core 64-bit')
      .replace(/intel四核/g, 'Intel Quad-Core')
      .replace(/RK3128四核/g, 'RK3128 Quad-Core')
      .replace(/四核/g, ' Quad-Core')
      .replace(/八核/g, ' Octa-Core')
      
      // 存储
      .replace(/可扩展/g, ' Expandable')
      .replace(/TF卡/g, ' TF Card')
      
      // 供电
      .replace(/支持PoE供电和独立供电/g, 'Supports PoE and Independent Power Supply')
      .replace(/二芯供电/g, 'Two-wire Power Supply')
      .replace(/适配器供电/g, 'Adapter Power Supply')
      .replace(/单独供电/g, 'Independent Power Supply')
      .replace(/可充锂电池/g, 'Rechargeable Lithium Battery')
      .replace(/220v供电NTP校时/g, '220V Power Supply with NTP Time Sync')
      .replace(/220V市电/g, '220V Mains Power')
      .replace(/220V交流电源/g, '220V AC Power')
      .replace(/AC 220V输入/g, 'AC 220V Input')
      .replace(/电池/g, 'Battery')
      
      // 传输和通讯
      .replace(/局域网传输/g, 'LAN Transmission')
      .replace(/网线和二芯线传输/g, 'Ethernet and Two-wire Transmission')
      .replace(/4G Cat.1通讯/g, '4G Cat.1 Communication')
      .replace(/Cat.1通讯/g, 'Cat.1 Communication')
      .replace(/USB通讯/g, 'USB Communication')
      .replace(/FM调频/g, 'FM Modulation')
      .replace(/FSK调频/g, 'FSK Modulation')
      .replace(/通讯/g, ' Communication')
      
      // 方式和类型
      .replace(/全双工录音/g, 'Full-duplex Recording')
      .replace(/双通道自动控制/g, 'Dual Channel Auto Control')
      .replace(/便携式手提\/背包设计/g, 'Portable Handheld/Backpack Design')
      .replace(/医生诊室门口壁挂式/g, 'Wall-mounted at Doctor Office Door')
      .replace(/落地式/g, 'Floor-standing')
      .replace(/桌面式/g, 'Desktop')
      .replace(/卧式/g, ' Horizontal')
      .replace(/立式/g, ' Vertical')
      .replace(/横/g, ' Horizontal')
      .replace(/竖/g, ' Vertical')
      
      // 显示
      .replace(/蓝色OLED/g, 'Blue OLED')
      
      // 气体
      .replace(/天然气（CH4）/g, 'Natural Gas (CH4)')
      
      // 支持
      .replace(/支持数万台客户端/g, 'Supports Tens of Thousands of Clients')
      .replace(/支持/g, 'Supported')
      .replace(/不支持/g, 'Not Supported')
      
      // 单位
      .replace(/小时/g, ' hours')
      .replace(/天/g, ' days')
      .replace(/米/g, ' meter')
      .replace(/毫瓦/g, ' mW')
      .replace(/次\/秒/g, ' times/sec')
      .replace(/路/g, ' channels')
      .replace(/转动/g, ' rotation')
      
      // 其他
      .replace(/单面/g, ' Single-sided')
      .replace(/双面/g, ' Double-sided')
      .replace(/无屏/g, ' No Screen')
      .replace(/基础版/g, ' Basic')
      .replace(/金属拉丝/g, ' Brushed Metal')
      .replace(/喷砂/g, ' Sandblasted')
      .replace(/可选/g, ' Optional')
  }
  
  return (
    <div className="relative min-h-screen">
      <Header />
      <main className="product-detail-page pt-[120px] pb-[80px]" style={{ backgroundColor: siteConfig.colors.backgroundLight }}>
        <div className="container">
          {/* 返回按钮 */}
          <div className="back-button mb-[30px] inline-block">
            <Link 
              href={categoryLink}
              className="flex items-center no-underline transition-colors duration-300 hover:text-[var(--primary-color)]"
              style={{ color: siteConfig.colors.foreground, fontSize: '16px' }}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              {t('productDetail.backToList')}
            </Link>
          </div>

          {/* 产品详情容器 */}
          <div className="product-detail-container bg-white rounded-[8px] p-[40px]" style={{ boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
            {/* 产品标题区域 */}
            <div className="product-title-section pb-[20px] mb-[40px]" style={{ borderBottom: `1px solid ${siteConfig.colors.border}` }}>
              <h1 className="text-[28px] mb-[10px]" style={{ color: siteConfig.colors.foreground, fontWeight: 600 }}>
                {translatedName}
              </h1>
              <div className="product-breadcrumb text-[14px]" style={{ color: siteConfig.colors.textSecondary }}>
                <Link href="/" className="no-underline transition-colors duration-300" style={{ color: siteConfig.colors.textSecondary }}>
                  {t('nav.home')}
                </Link>
                {' > '}
                <Link href={categoryLink} className="no-underline transition-colors duration-300" style={{ color: siteConfig.colors.textSecondary }}>
                  {translatedCategory}
                </Link>
                {' > '}
                <span>{translatedName}</span>
              </div>
            </div>

            {/* 产品内容区 */}
            <div className="product-content flex gap-[50px] mb-[50px] flex-wrap lg:flex-nowrap">
              {/* 产品图片区 */}
              <div className="product-image-section flex-1 bg-[#f9f9f9] rounded-[8px] p-[30px] flex items-center justify-center min-h-[400px]">
                <Image
                  src={image}
                  alt={translatedName}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="max-w-full"
                  style={{ 
                    width: 'auto',
                    height: 'auto',
                    maxHeight: '400px',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {/* 产品信息区 */}
              <div className="product-info-section flex-1">
                {/* 产品参数 */}
                <div className="product-params bg-[#f9f9f9] rounded-[8px] p-[30px]">
                  <h3 className="text-[18px] mb-[20px]" style={{ color: siteConfig.colors.foreground, fontWeight: 500 }}>
                    {t('productDetail.specifications')}
                  </h3>
                  <ul className="param-list list-none p-0 m-0">
                    {params.map((param, index) => (
                      <li 
                        key={index} 
                        className="param-item flex py-[12px]"
                        style={{ 
                          borderBottom: index === params.length - 1 ? 'none' : '1px solid #e0e0e0'
                        }}
                      >
                        <div className="param-label flex-[0_0_120px]" style={{ fontWeight: 500, color: siteConfig.colors.foreground }}>
                          {t(`productDetail.params.${param.label}`) !== `productDetail.params.${param.label}` ? t(`productDetail.params.${param.label}`) : param.label}
                        </div>
                        <div className="param-value flex-1" style={{ color: siteConfig.colors.textSecondary }}>
                          {translateValue(param.value)}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

