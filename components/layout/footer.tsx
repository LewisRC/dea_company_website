import { siteConfig } from "@/config/site-config"

export function Footer() {
  const { companyInfo, copyright } = siteConfig.footer

  return (
    <footer 
      className="relative overflow-hidden text-white pt-12 pb-5"
      style={{ backgroundColor: '#051b33' }}
    >
      {/* Top Border Gradient */}
      <div 
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{
          background: 'linear-gradient(90deg, #0066cc, #00a8e8)'
        }}
      />

      <div className="container mx-auto px-5">
        {/* Footer Info */}
        <div className="mb-10">
          <h4 className="text-white text-xl mb-5 pb-2.5 font-semibold relative">
            联系我们
            <span 
              className="absolute bottom-0 left-0 w-[50px] h-[3px]"
              style={{ backgroundColor: '#0066cc' }}
            />
          </h4>
          <div className="space-y-4">
            <p className="mb-4 flex items-start text-sm leading-relaxed">
              <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#0066cc' }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
              </svg>
              {companyInfo.productionCenter}
            </p>
            <p className="mb-4 flex items-start text-sm leading-relaxed">
              <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#0066cc' }} fill="currentColor" viewBox="0  0 20 20">
                <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
              </svg>
              {companyInfo.salesCenter}
            </p>
            <p className="mb-4 flex items-start text-sm leading-relaxed">
              <svg className="w-4 h-4 mr-3 mt-0.5 flex-shrink-0" style={{ color: '#0066cc' }} fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              {companyInfo.phoneLabel}：{companyInfo.phone}
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom - 分隔线贯穿整个宽度 */}
      <div 
        className="w-full mt-10 pt-5 min-h-[80px] flex items-center justify-center"
        style={{ borderTop: '1px solid rgba(255, 255, 255, 0.2)' }}
      >
        <div className="text-center text-[13px] text-gray-400">
          <p className="m-0">{copyright}</p>
        </div>
      </div>
    </footer>
  )
}
