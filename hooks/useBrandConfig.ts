import { useState, useEffect } from 'react'
import brandConfig from '@/config/brand-config.json'

export interface BrandConfig {
  brand: {
    name: string
    shortName: string
    description: string
    logo: string
    favicon: string
    colors: {
      primary: string
      secondary: string
      accent: string
      text: string
      textLight: string
      background: string
      backgroundLight: string
      border: string
      success: string
      warning: string
      error: string
    }
  }
  contact: {
    phone: string
    email: string
    whatsapp: string
    address: string
    mapEmbed: string
  }
  social: {
    facebook: string
    instagram: string
    linkedin: string
  }
  seo: {
    title: string
    titleEn?: string
    description: string
    descriptionEn?: string
    keywords: string
    keywordsEn?: string
  }
  hero: {
    backgroundImage: string
    experienceYears: string
  }
  businessUnits: {
    autopartes: {
      route: string
    }
    motopartes: {
      route: string
    }
    ferreteria: {
      route: string
    }
  }
  brands: {
    external: Array<{
      name: string
      logo: string
      category: string
    }>
    own: Array<{
      name: string
      logo: string
    }>
  }
  products: {
    featured: Array<{
      brand: string
      name: string
      category: string
      description: string
      descriptionEn?: string
      image: string
      price: string
      isNew: boolean
      route: string
    }>
  }
  about: {
    history: {
      images: Array<{
        src: string
        alt: string
      }>
    }
  }
}

export function useBrandConfig(): BrandConfig {
  const [config, setConfig] = useState<BrandConfig>(brandConfig as BrandConfig)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      import('@/config/brand-config.json').then((module) => {
        setConfig(module.default as BrandConfig)
      })
    }
  }, [])
  return config
}