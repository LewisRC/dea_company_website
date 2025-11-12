import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { PageHeader } from "@/components/layout/page-header"
import { ReactNode } from "react"

interface DetailPageProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  children: ReactNode
}

export function DetailPage({ title, subtitle, backgroundImage, children }: DetailPageProps) {
  return (
    <main className="w-full">
      <Header />
      <PageHeader 
        title={title} 
        subtitle={subtitle}
        backgroundImage={backgroundImage}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {children}
      </div>
      
      <Footer />
    </main>
  )
}


