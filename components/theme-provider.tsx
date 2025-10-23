"use client"
import { useBrandConfig } from "@/hooks/useBrandConfig"
import { useEffect, useState } from "react"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const config = useBrandConfig()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const root = document.documentElement
    const hexToHsl = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      if (!result) return null
      let r = parseInt(result[1], 16) / 255
      let g = parseInt(result[2], 16) / 255
      let b = parseInt(result[3], 16) / 255
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      let h = 0, s = 0, l = (max + min) / 2
      if (max !== min) {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break
          case g: h = (b - r) / d + 2; break
          case b: h = (r - g) / d + 4; break
        }
        h /= 6
      }
      return {
        h: Math.round(h * 360),
        s: Math.round(s * 100),
        l: Math.round(l * 100)
      }
    }
    const primaryHsl = hexToHsl(config.brand.colors.primary)
    if (primaryHsl) {
      root.style.setProperty('--primary', `${primaryHsl.h} ${primaryHsl.s}% ${primaryHsl.l}%`)
    }
    const secondaryHsl = hexToHsl(config.brand.colors.secondary)
    if (secondaryHsl) {
      root.style.setProperty('--secondary', `${secondaryHsl.h} ${secondaryHsl.s}% ${secondaryHsl.l}%`)
    }
    root.style.setProperty('--brand-primary', config.brand.colors.primary)
    root.style.setProperty('--brand-secondary', config.brand.colors.secondary)
    root.style.setProperty('--brand-accent', config.brand.colors.accent)
    root.style.setProperty('--brand-text', config.brand.colors.text)
    root.style.setProperty('--brand-text-light', config.brand.colors.textLight)
    root.style.setProperty('--brand-background', config.brand.colors.background)
    root.style.setProperty('--brand-background-light', config.brand.colors.backgroundLight)
    root.style.setProperty('--brand-border', config.brand.colors.border)
    root.style.setProperty('--brand-success', config.brand.colors.success)
    root.style.setProperty('--brand-warning', config.brand.colors.warning)
    root.style.setProperty('--brand-error', config.brand.colors.error)
  }, [config])

  if (!mounted) {
    return <>{children}</>
  }

  return <>{children}</>
}