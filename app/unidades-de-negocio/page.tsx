"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function UnidadesDeNegocioPage() {
  const { t } = useLanguage()
  const config = useBrandConfig()
  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{t("business.title")}</h1>
            <p className="text-xl text-white/90">
              {t("business.subtitle")}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/autopartes2.jpg"
                  alt="Autopartes"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t("businessUnits.autopartes.title")}</h3>
              <p className="text-gray-600 mb-6 text-center">
                {t("businessUnits.autopartes.description")}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.autopartes.features.filters")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.autopartes.features.lubricants")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.autopartes.features.brakes")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.autopartes.features.batteries")}</span>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href={config.businessUnits.autopartes.route}>{t("business.viewProducts")}</Link>
              </Button>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/motopartes2.jpg"
                  alt="Motopartes"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t("businessUnits.motopartes.title")}</h3>
              <p className="text-gray-600 mb-6 text-center">
                {t("businessUnits.motopartes.description")}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.motopartes.features.engine")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.motopartes.features.transmission")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.motopartes.features.brakes")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.motopartes.features.accessories")}</span>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href={config.businessUnits.motopartes.route}>{t("business.viewProducts")}</Link>
              </Button>
            </div>
            <div className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="relative w-full h-48 mb-8 rounded-lg overflow-hidden">
                <Image
                  src="/ferreteria 2.jpeg"
                  alt="Ferretería"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-center">{t("businessUnits.ferreteria.title")}</h3>
              <p className="text-gray-600 mb-6 text-center">
                {t("businessUnits.ferreteria.description")}
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.ferreteria.features.tools")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.ferreteria.features.electric")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.ferreteria.features.supplies")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm text-gray-600">{t("business.ferreteria.features.safety")}</span>
                </div>
              </div>
              <Button asChild className="w-full">
                <Link href={config.businessUnits.ferreteria.route}>{t("business.viewProducts")}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">
              {t("business.expertsTitle")}
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              {t("business.expertsDescription")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{t("business.stats.experienceValue")}</div>
                <div className="text-gray-600">{t("business.stats.experience")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{t("business.stats.brandsValue")}</div>
                <div className="text-gray-600">{t("business.stats.brands")}</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{t("business.stats.countriesValue")}</div>
                <div className="text-gray-600">{t("business.stats.countries")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}