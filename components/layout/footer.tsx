"use client"

import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/config/site-config"

export function Footer() {
  const { footer } = siteConfig

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Links Sections */}
          {footer.links.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h4 className="font-semibold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href} 
                      className="text-gray-400 hover:text-white transition-colors text-sm block"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold mb-4 text-white">联系我们</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <div>
                <p className="mb-1">地址：</p>
                <p>{footer.companyInfo.address}</p>
              </div>
              <p>邮编：{footer.companyInfo.zipCode}</p>
              <p>电话：{footer.companyInfo.phone}</p>
            </div>
            <div className="mt-6">
              <div className="text-2xl font-bold text-white mb-1">
                {footer.companyInfo.phone}
              </div>
              <div className="text-xs text-gray-400">
                {footer.companyInfo.phoneLabel}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <Link 
                href="https://beian.miit.gov.cn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                <p>{footer.copyright}</p>
                <p>{footer.icp}</p>
              </Link>
            </div>

            {/* Social QR Codes */}
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-400">社交关注：</div>
              {footer.social.map((social) => (
                <div key={social.name} className="relative group">
                  <button className="flex items-center gap-2 px-3 py-2 bg-gray-800 rounded-md hover:bg-gray-700 transition-colors">
                    <span className="text-sm">{social.name}</span>
                  </button>
                  {/* QR Code Popup */}
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white p-3 rounded-lg shadow-xl">
                      <Image
                        src={social.qrCode}
                        alt={`${social.name}二维码`}
                        width={120}
                        height={120}
                        className="rounded"
                      />
                      <p className="text-center text-xs text-gray-900 mt-2">
                        扫码关注
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
