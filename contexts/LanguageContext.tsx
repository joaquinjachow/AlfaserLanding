"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import translationsEs from "@/config/translations-es.json"
import translationsEn from "@/config/translations-en.json"

type Language = "es" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

function getNestedTranslation(obj: any, path: string): string {
  const keys = path.split('.')
  let current = obj
  for (const key of keys) {
    if (current && current[key] !== undefined) {
      current = current[key]
    } else {
      return path
    }
  }
  return typeof current === 'string' ? current : path
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es")
  const translations = {
    es: translationsEs,
    en: translationsEn
  }
  const t = (key: string): string => {
    const translation = getNestedTranslation(translations[language], key)
    return translation
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}