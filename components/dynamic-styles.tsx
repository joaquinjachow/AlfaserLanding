"use client"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export function DynamicStyles() {
  const config = useBrandConfig()

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
  const secondaryHsl = hexToHsl(config.brand.colors.secondary)

  const cssVariables = `
    :root {
      --primary: ${primaryHsl ? `${primaryHsl.h} ${primaryHsl.s}% ${primaryHsl.l}%` : '219 96% 32%'};
      --secondary: ${secondaryHsl ? `${secondaryHsl.h} ${secondaryHsl.s}% ${secondaryHsl.l}%` : '0 0% 100%'};
      --brand-primary: ${config.brand.colors.primary};
      --brand-secondary: ${config.brand.colors.secondary};
      --brand-accent: ${config.brand.colors.accent};
      --brand-text: ${config.brand.colors.text};
      --brand-text-light: ${config.brand.colors.textLight};
      --brand-background: ${config.brand.colors.background};
      --brand-background-light: ${config.brand.colors.backgroundLight};
      --brand-border: ${config.brand.colors.border};
      --brand-success: ${config.brand.colors.success};
      --brand-warning: ${config.brand.colors.warning};
      --brand-error: ${config.brand.colors.error};
    }
  `

  return (
    <style jsx global>
      {cssVariables}
    </style>
  )
}