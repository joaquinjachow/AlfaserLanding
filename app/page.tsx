"use client"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function HomePage() {
  const { t, language } = useLanguage()
  const config = useBrandConfig()
  
  const ultimosLanzamientos = config.products.featured.map(product => ({
    marca: product.brand,
    nombre: product.name,
    categoria: t(`home.categories.${product.category}`),
    descripcion: language === 'en' ? (product.descriptionEn || product.description) : product.description,
    imagen: product.image,
    precio: product.price,
    nuevo: product.isNew,
    ruta: product.route
  }))

  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={config.hero.backgroundImage}
            alt={`Instalaciones de ${config.brand.name} - Centro de Distribución Industrial`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="absolute top-6 md:top-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-white/95 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-lg border border-white/20">
            <div className="flex items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1 md:gap-2">
                <div className={`w-2 h-2 rounded-full animate-pulse`} style={{ backgroundColor: config.brand.colors.primary }}></div>
                <span className="font-bold text-base md:text-lg" style={{ color: config.brand.colors.primary }}>{config.hero.experienceYears}</span>
              </div>
              <span className="text-gray-700 font-medium text-sm md:text-base">{t("hero.experienceText")}</span>
            </div>
          </div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                {t("hero.title")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  asChild
                  size="lg"
                  className="text-white font-semibold px-8 py-3 shadow-lg border-2 hover:shadow-xl transition-all duration-200"
                  style={{ 
                    backgroundColor: config.brand.colors.primary,
                    borderColor: config.brand.colors.primary
                  }}
                >
                  <Link href="/contacto">{t("buttons.contact")}</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white font-semibold px-8 py-3 transition-all duration-200"
                  style={{ 
                    '--hover-text-color': config.brand.colors.primary
                  } as React.CSSProperties}
                >
                  <Link href="/nosotros">{t("buttons.learnMore")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: config.brand.colors.primary }}>{t("home.brandsTitle")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.brandsSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center mb-10">
            {config.brands.external.map((brand, idx) => (
              <div
                key={brand.name}
                className="bg-white/80 rounded-xl shadow-sm border border-gray-100 flex items-center justify-center h-20 transition-transform duration-300 hover:scale-105 hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${idx * 60}ms` }}
              >
                <Image
                  src={brand.logo}
                  alt={`Logo de ${brand.name}`}
                  width={100}
                  height={50}
                  className="object-contain max-h-12 w-auto"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              variant="outline"
              className="border-2 font-semibold px-8 py-3"
              style={{ 
                borderColor: config.brand.colors.primary,
                color: config.brand.colors.primary
              }}
            >
              <Link href="/marcas">{t("buttons.viewAllBrands")}</Link>
            </Button>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4" style={{ color: config.brand.colors.primary }}>{t("home.latestTitle")}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("home.latestSubtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ultimosLanzamientos.map((producto, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48">
                  <Image
                    src={producto.imagen || "/placeholder.svg"}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {producto.nuevo && (
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-500 text-white">{t("home.newBadge")}</Badge>
                  )}
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-gray-700">
                      {producto.categoria}
                    </Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-semibold" style={{ color: config.brand.colors.primary }}>{producto.marca}</span>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{producto.nombre}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{producto.descripcion}</p>
                  <div className="flex items-center justify-end">
                    <Link href={producto.ruta}>
                      <button className="flex items-center gap-2 font-medium hover:gap-3 transition-all text-sm" style={{ color: config.brand.colors.primary }}>
                        {t("home.viewDetails")} <ArrowRight className="h-4 w-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="border-2 font-semibold px-8 py-3"
              style={{ 
                borderColor: config.brand.colors.primary,
                color: config.brand.colors.primary
              }}
            >
              <a href="https://oechsle.osapp.com.ar/" target="_blank" rel="noopener noreferrer">{t("buttons.viewAllProducts")}</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}