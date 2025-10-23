"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { useBrandConfig } from "@/hooks/useBrandConfig"
import { useEffect } from "react"

export default function DynamicTitle() {
  const { language } = useLanguage()
  const config = useBrandConfig()

  useEffect(() => {
    document.title = language === 'en' ? (config.seo.titleEn || config.seo.title) : config.seo.title
  }, [config, language])
  return null
}