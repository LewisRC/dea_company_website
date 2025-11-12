"use client"

interface PageHeaderProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function PageHeader({ title, subtitle, backgroundImage }: PageHeaderProps) {
  return (
    <div 
      className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-800"
      style={backgroundImage ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {/* 遮罩层 */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* 内容 */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-gray-200">{subtitle}</p>
        )}
      </div>
    </div>
  )
}


