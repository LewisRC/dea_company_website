import { useEffect } from 'react'
import { useI18n } from '@/lib/i18n-context'

interface PageTitles {
  zh: string
  en: string
}

export function usePageTitle(titles: PageTitles) {
  const { language } = useI18n()
  
  useEffect(() => {
    const title = language === 'en' ? titles.en : titles.zh
    document.title = title
  }, [language, titles.en, titles.zh])
}
