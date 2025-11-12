"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"
import { Search, Globe, Menu, X, ChevronDown } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="hover:opacity-80 transition-opacity">
              <Image 
                src={siteConfig.logo} 
                alt={siteConfig.siteName} 
                width={120} 
                height={36}
                className="h-9 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {siteConfig.navigation.map((item) => (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(item.label)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    className="px-4 py-2 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors flex items-center gap-1"
                  >
                    {item.label}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </button>
                )}

                {/* Dropdown Menu */}
                {item.children && hoveredMenu === item.label && (
                  <div className="absolute left-0 top-full pt-2 min-w-[220px] z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-4 px-3">
                      {item.children.map((group, groupIndex) => (
                        <div key={groupIndex} className={groupIndex > 0 ? "mt-4 pt-4 border-t border-gray-100" : ""}>
                          {group.title && (
                            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                              {group.title}
                            </div>
                          )}
                          <div className="space-y-1">
                            {group.items.map((subItem) => (
                              <Link
                                key={subItem.href}
                                href={subItem.href}
                                className="block px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary rounded-md transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Search Button */}
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-md transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-2 text-[15px] text-gray-400">
              <Globe className="w-4 h-4" />
              <span className="font-medium hover:text-white transition-colors">中文</span>
              <span className="text-gray-600">|</span>
              <a href="https://www.dnake-global.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                EN
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-800 mt-2">
            <nav className="py-4 space-y-2">
              {siteConfig.navigation.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-400 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
                        onClick={() => setOpenMobileMenu(openMobileMenu === item.label ? null : item.label)}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-5 h-5 transition-transform ${
                            openMobileMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openMobileMenu === item.label && item.children && (
                        <div className="mt-2 ml-4 space-y-2">
                          {item.children.map((group, groupIndex) => (
                            <div key={groupIndex} className="space-y-1">
                              {group.title && (
                                <div className="px-4 py-1.5 text-xs font-semibold text-gray-500 uppercase">
                                  {group.title}
                                </div>
                              )}
                              {group.items.map((subItem) => (
                                <Link
                                  key={subItem.href}
                                  href={subItem.href}
                                  className="block px-4 py-2.5 text-[15px] text-gray-400 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="px-4 pt-4 border-t border-gray-800 space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 text-[15px] text-gray-400 hover:text-white bg-gray-800 rounded-md transition-colors">
                <Search className="w-5 h-5" />
                搜索
              </button>
              <div className="flex items-center justify-center gap-2 text-[15px] text-gray-400">
                <Globe className="w-5 h-5" />
                <span className="font-medium hover:text-white transition-colors">中文</span>
                <span className="text-gray-600">|</span>
                <a href="https://www.dnake-global.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  EN
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
