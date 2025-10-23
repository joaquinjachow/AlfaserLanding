"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Languages, Menu, ChevronDown } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const config = useBrandConfig()

  const navItems = [
    { href: "/nosotros", label: t("nav.about") },
    { href: "/unidades-de-negocio", label: t("nav.business") },
    { href: "/marcas", label: t("nav.brands") },
    { href: "https://oechsle.osapp.com.ar/", label: t("nav.clients"), external: true },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Image width={150} height={40} src="/oechsle.svg" alt="Logo Oechsle" className="h-10 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center">
            <div className="flex items-center gap-2">
              {navItems.map((item, index) => {
                if (item.external) {
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 rounded-full hover:bg-white hover:shadow-sm group"
                      style={{ '--hover-color': config.brand.colors.primary } as React.CSSProperties}
                    >
                      {item.label}
                      <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" style={{ backgroundColor: config.brand.colors.primary }}></span>
                    </a>
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="relative px-6 py-3 text-sm font-medium text-gray-700 transition-all duration-200 rounded-full hover:bg-white hover:shadow-sm group"
                    style={{ '--hover-color': config.brand.colors.primary } as React.CSSProperties}
                  >
                    {item.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" style={{ backgroundColor: config.brand.colors.primary }}></span>
                  </Link>
                )
              })}
            </div>
          </nav>
          <div className="flex items-center gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="hidden md:flex items-center gap-2 text-gray-600 hover:bg-gray-50 rounded-full px-4 py-2"
                  style={{ '--hover-color': config.brand.colors.primary } as React.CSSProperties}
                >
                  <Languages className="h-4 w-4" />
                  <span className="text-sm font-medium">{language.toUpperCase()}</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-xl border-gray-200/50 shadow-lg">
                <DropdownMenuItem onClick={() => setLanguage("es")} className="rounded-lg cursor-pointer">
                  🇪🇸 Español
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("en")} className="rounded-lg cursor-pointer">
                  🇺🇸 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button
              asChild
              className="hidden lg:inline-flex items-center gap-2 bg-white border-2 font-semibold px-6 py-2.5 rounded-lg transition-all duration-200 hover:shadow-md"
              style={{ 
                borderColor: config.brand.colors.primary,
                color: config.brand.colors.primary
              }}
            >
              <a href="https://oechsle.osapp.com.ar/" target="_blank" rel="noopener noreferrer">
                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: config.brand.colors.primary }}></span>
                {t("buttons.appClients")}
              </a>
            </Button>
            <Button
              asChild
              className="hidden lg:inline-flex text-white font-semibold px-8 py-2.5 rounded-lg border-2 shadow-md hover:shadow-lg transition-all duration-200"
              style={{ 
                backgroundColor: config.brand.colors.primary,
                borderColor: config.brand.colors.primary
              }}
            >
              <Link href="/contacto">{t("buttons.contact")}</Link>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-gray-50">
                  <Menu className="h-6 w-6 text-gray-700" />
                  <span className="sr-only">Menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md">
                <div className="flex flex-col gap-6 mt-8">
                  <Link href="/" className="flex items-center gap-2 pb-6 border-b border-gray-200">
                    <Image width={120} height={32} src="/oechsle.svg" alt="Logo Oechsle" />
                  </Link>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => {
                      if (item.external) {
                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between px-4 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                            style={{ '--hover-color': config.brand.colors.primary } as React.CSSProperties}
                          >
                            {item.label}
                            <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                          </a>
                        )
                      }
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex items-center justify-between px-4 py-4 text-lg font-medium text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200 group"
                          style={{ '--hover-color': config.brand.colors.primary } as React.CSSProperties}
                        >
                          {item.label}
                          <ChevronDown className="h-4 w-4 rotate-[-90deg] group-hover:translate-x-1 transition-transform" />
                        </Link>
                      )
                    })}
                  </nav>
                  <div className="flex flex-col gap-3 pt-6 border-t border-gray-200">
                    <Button
                      asChild
                      className="w-full bg-white border-2 font-semibold py-3 rounded-lg transition-all duration-200"
                      style={{ 
                        borderColor: config.brand.colors.primary,
                        color: config.brand.colors.primary
                      }}
                    >
                      <a href="https://oechsle.osapp.com.ar/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: config.brand.colors.primary }}></span>
                        {t("buttons.appClients")}
                      </a>
                    </Button>
                    <Button
                      asChild
                      className="w-full text-white font-semibold py-3 rounded-lg border-2 shadow-md transition-all duration-200"
                      style={{ 
                        backgroundColor: config.brand.colors.primary,
                        borderColor: config.brand.colors.primary
                      }}
                    >
                      <Link href="/contacto">{t("buttons.contact")}</Link>
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-4 pt-4">
                    <button
                      onClick={() => setLanguage("es")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        language === "es" ? "text-white" : "text-gray-600 hover:bg-gray-50"
                      }`}
                      style={language === "es" ? { backgroundColor: config.brand.colors.primary } : {}}
                    >
                      🇪🇸 ES
                    </button>
                    <button
                      onClick={() => setLanguage("en")}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        language === "en" ? "text-white" : "text-gray-600 hover:bg-gray-50"
                      }`}
                      style={language === "en" ? { backgroundColor: config.brand.colors.primary } : {}}
                    >
                      🇺🇸 EN
                    </button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}