import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import DynamicTitle from "@/components/layout/dynamic-title"
import WhatsAppButton from "@/components/layout/whatsapp-button"
import { LanguageProvider } from "@/contexts/LanguageContext"
import { DynamicStyles } from "@/components/dynamic-styles"
import brandConfig from "@/config/brand-config.json"

export const metadata: Metadata = {
  title: brandConfig.seo.title,
  description: brandConfig.seo.description,
  keywords: brandConfig.seo.keywords,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <DynamicStyles />
          <DynamicTitle />
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}