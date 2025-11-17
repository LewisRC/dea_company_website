"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [hoveredDropdownItem, setHoveredDropdownItem] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("zh")
  const [activeSection, setActiveSection] = useState("")

  // 滚动处理
  useEffect(() => {
    const handleScroll = () => {
      // Header 滚动效果
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      // 导航高亮
      const sections = document.querySelectorAll('section[id]')
      let current = ""
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 100
        const sectionHeight = section.clientHeight
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || ""
        }
      })
      
      setActiveSection(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 语言切换
  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLanguage') || 'zh'
    setCurrentLanguage(savedLang)
  }, [])

  const handleLanguageChange = (lang: string) => {
    setCurrentLanguage(lang)
    localStorage.setItem('preferredLanguage', lang)
  }

  // 平滑滚动
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      
      const targetId = href.substring(1)
      if (!targetId) return

      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        const headerOffset = 80
        const elementPosition = targetElement.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })

        // 关闭移动端菜单
        setIsMenuOpen(false)
        setOpenMobileMenu(null)
        
        // 添加滚动动画
        setTimeout(() => {
          targetElement.classList.add('scroll-animation')
        }, 100)
      }
    }
  }

  // 响应式处理
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
        setOpenMobileMenu(null)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 移动端菜单切换
  const toggleMobileMenu = (label: string) => {
    setOpenMobileMenu(openMobileMenu === label ? null : label)
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
      style={{ backgroundColor: '#051b33' }}
    >
      <div className="container mx-auto px-5">
        <div className="flex items-center h-[78px] relative">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0" style={{ marginLeft: '-40px', marginRight: 'auto' }}>
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image 
                src="/images/logo2-1.png" 
                alt="德视安" 
                width={224}
                height={56}
                className="object-contain align-middle"
                style={{
                  maxHeight: '56px',
                  maxWidth: '224px',
                  width: 'auto',
                  height: 'auto'
                }}
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center" style={{ margin: '0 20px' }}>
            <ul className="flex items-center gap-[15px] m-0 p-0 list-none whitespace-nowrap flex-nowrap">
              {siteConfig.navigation.map((item) => {
                const isActive = item.href && (
                  item.href === '/' && activeSection === '' ||
                  item.href === `#${activeSection}`
                )
                
                return (
                  <li 
                    key={item.label} 
                    className="relative"
                    onMouseEnter={() => setHoveredMenu(item.label)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={(e) => handleSmoothScroll(e, item.href!)}
                        className={`flex items-center px-[15px] py-[10px] text-white text-[14px] font-medium no-underline transition-colors duration-300 relative ${
                          isActive ? 'text-[#0066cc]' : 'hover:text-[#0066cc]'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <span 
                            className="absolute left-[15px] bottom-0 h-[2px] bg-[#0066cc]"
                            style={{ width: 'calc(100% - 30px)' }}
                          />
                        )}
                      </Link>
                    ) : (
                      <button
                        className="flex items-center px-[15px] py-[10px] text-white text-[14px] font-medium transition-colors duration-300 relative hover:text-[#0066cc] bg-transparent border-none cursor-pointer"
                      >
                        {item.label}
                        {item.children && (
                          <svg 
                            className="ml-[5px] w-3 h-3 transition-transform duration-300"
                            style={{ transform: hoveredMenu === item.label ? 'rotate(180deg)' : 'rotate(0deg)' }}
                            fill="currentColor" 
                            viewBox="0 0 20 20"
                          >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
                          </svg>
                        )}
                      </button>
                    )}

                    {/* Dropdown Menu */}
                    {item.children && hoveredMenu === item.label && (
                      <div 
                        className="absolute left-0 top-full pt-2 min-w-[250px] z-[1001]"
                        style={{
                          opacity: 1,
                          visibility: 'visible',
                          transform: 'translateY(0)',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <div 
                          className="bg-white rounded shadow-lg border border-[#e0e0e0] py-0 px-0"
                          style={{
                            maxHeight: '400px',
                            overflowY: 'auto'
                          }}
                        >
                          {item.children.map((group, groupIndex) => (
                            <div key={groupIndex}>
                              {group.title && (
                                <div className="px-5 py-2 text-xs font-semibold text-gray-500 uppercase">
                                  {group.title}
                                </div>
                              )}
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  onClick={(e) => handleSmoothScroll(e, subItem.href)}
                                  className="block px-5 py-3 text-[14px] text-black no-underline font-normal transition-all duration-300 border-b border-[#e0e0e0] last:border-b-0 hover:text-[#0066cc] relative"
                                  style={{
                                    paddingLeft: '20px',
                                    transform: hoveredDropdownItem === subItem.href ? 'translateY(2px)' : 'translateY(0)'
                                  }}
                                  onMouseEnter={() => setHoveredDropdownItem(subItem.href)}
                                  onMouseLeave={() => setHoveredDropdownItem(null)}
                                >
                                  {subItem.label}
                                  {hoveredDropdownItem === subItem.href && (
                                    <span 
                                      className="absolute left-0 top-0 bottom-0 w-[4px] h-full bg-[#0066cc] z-[1]"
                                    />
                                  )}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>

          {/* Search Button */}
          <div className="hidden lg:block mr-[15px]">
            <button 
              className="p-2.5 bg-transparent border-none cursor-pointer text-white transition-all duration-300 hover:text-[#0066cc]"
              style={{ fontSize: '16px', transform: 'scale(1.2)' }}
              aria-label="搜索"
              onClick={() => alert('搜索功能将在这里实现')}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center ml-[15px]">
            <button 
              onClick={() => handleLanguageChange('zh')}
              className={`inline-block bg-transparent border-none cursor-pointer no-underline text-[14px] font-medium transition-colors duration-300 hover:text-[#0066cc] ${
                currentLanguage === 'zh' ? 'text-[#0066cc]' : 'text-white'
              }`}
              style={{ padding: '5px 4px' }}
            >
              中文
            </button>
            <span className="text-white text-[14px]" style={{ margin: '0 2px' }}>|</span>
            <button 
              onClick={() => handleLanguageChange('en')}
              className={`inline-block bg-transparent border-none cursor-pointer no-underline text-[14px] font-medium transition-colors duration-300 hover:text-[#0066cc] ${
                currentLanguage === 'en' ? 'text-[#0066cc]' : 'text-white'
              }`}
              style={{ padding: '5px 4px' }}
            >
              EN
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`lg:hidden p-2.5 bg-transparent border-none outline-none cursor-pointer z-[1002] ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="菜单"
          >
            <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-[25px] h-[3px] my-[5px] mx-auto bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed left-0 top-[78px] w-4/5 h-screen bg-white shadow-sm z-100 overflow-y-auto pt-5">
            <nav>
              <ul className="flex flex-col w-full m-0 p-0 list-none">
                {siteConfig.navigation.map((item) => (
                  <li key={item.label} className="m-0 border-b border-[#e0e0e0]">
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleSmoothScroll(e, item.href!)
                          setIsMenuOpen(false)
                        }}
                        className="block py-4 px-0 text-black no-underline text-center"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <>
                        <button
                          className="w-full py-4 px-0 text-black bg-transparent border-none cursor-pointer text-center"
                          onClick={() => toggleMobileMenu(item.label)}
                        >
                          {item.label}
                        </button>
                        {openMobileMenu === item.label && item.children && (
                          <div className="block w-full min-w-full p-0 m-0 bg-white border border-[#e0e0e0] shadow-sm">
                            {item.children.map((group, groupIndex) => (
                              <div key={groupIndex}>
                                {group.title && (
                                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">
                                    {group.title}
                                  </div>
                                )}
                                {group.items.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    onClick={(e) => {
                                      handleSmoothScroll(e, subItem.href)
                                      setIsMenuOpen(false)
                                      setOpenMobileMenu(null)
                                    }}
                                    className="block px-4 py-3 text-[14px] text-black no-underline border-b border-[#e0e0e0] hover:text-[#ff6b35] hover:bg-[#f5f5f5] relative"
                                  >
                                    {subItem.label}
                                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-black text-xs font-bold">{'>'}</span>
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>

      {/* 滚动动画样式 */}
      <style jsx global>{`
        .scroll-animation {
          animation: pulse 0.5s ease;
        }
        
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); }
        }
      `}</style>
    </header>
  )
}

