import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CarouselSection } from "@/components/sections/carousel-section"
import { ProductsSection } from "@/components/sections/products-section"
import { AboutSection } from "@/components/sections/about-section"

export default function Home() {
  return (
    <main className="w-full pt-20">
      <Header />
      <CarouselSection />
      <ProductsSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
