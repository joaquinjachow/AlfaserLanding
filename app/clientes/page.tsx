"use client"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { PenToolIcon as Tools, Store, Truck, Globe, Users, Shield } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function ClientesPage() {
  const { t } = useLanguage()
  const clientTypes = [ 
    {
      icon: Tools,
      title: t("clients.clientTypes.mechanicalWorkshops"),
      description: t("clients.clientTypes.mechanicalWorkshopsDesc"),
    },
    {
      icon: Store,
      title: t("clients.clientTypes.industrialHardware"),
      description: t("clients.clientTypes.industrialHardwareDesc"),
    },
    {
      icon: Truck,
      title: t("clients.clientTypes.oilChangeCenter"),
      description: t("clients.clientTypes.oilChangeCenterDesc"),
    },
    {
      icon: Globe,
      title: t("clients.clientTypes.internationalDistributors"),
      description: t("clients.clientTypes.internationalDistributorsDesc"),
    },
    {
      icon: Users,
      title: t("clients.clientTypes.constructionCompanies"),
      description: t("clients.clientTypes.constructionCompaniesDesc"),
    },
    {
      icon: Shield,
      title: t("clients.clientTypes.manufacturingIndustries"),
      description: t("clients.clientTypes.manufacturingIndustriesDesc"),
    },
    {
      icon: Truck,
      title: t("clients.clientTypes.logisticsCompanies"),
      description: t("clients.clientTypes.logisticsCompaniesDesc"),
    },
    {
      icon: Store,
      title: t("clients.clientTypes.retailStores"),
      description: t("clients.clientTypes.retailStoresDesc"),
    },
    {
      icon: Tools,
      title: t("clients.clientTypes.repairShops"),
      description: t("clients.clientTypes.repairShopsDesc"),
    },
    {
      icon: Globe,
      title: t("clients.clientTypes.agriculturalCompanies"),
      description: t("clients.clientTypes.agriculturalCompaniesDesc"),
    },
    {
      icon: Shield,
      title: t("clients.clientTypes.educationalInstitutions"),
      description: t("clients.clientTypes.educationalInstitutionsDesc"),
    },
    {
      icon: Users,
      title: t("clients.clientTypes.publicServices"),
      description: t("clients.clientTypes.publicServicesDesc"),
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{t("clients.title")}</h1>
            <p className="text-xl text-white/90">
              {t("clients.subtitle")}
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary text-center">{t("clients.sectorsTitle")}</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            {t("clients.sectorsSubtitle")}
          </p>
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {clientTypes.map((client, index) => {
                const IconComponent = client.icon
                return (
                  <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow">
                      <div className="bg-primary/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{client.title}</h3>
                      <p className="text-gray-600">{client.description}</p>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2" />
              <CarouselNext className="relative ml-2" />
            </div>
          </Carousel>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary">{t("clients.marketTitle")}</h2>
            <p className="text-lg text-gray-700 mb-12">
              {t("clients.marketSubtitle")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5,000+</div>
                <div className="text-gray-600">{t("clients.activeClients")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15</div>
                <div className="text-gray-600">{t("clients.countriesCoverage")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">12</div>
                <div className="text-gray-600">{t("clients.industrialSectors")}</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-gray-600">{t("clients.clientSatisfaction")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary text-center">{t("clients.geographicTitle")}</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12">
            {t("clients.geographicSubtitle")}
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-primary">{t("clients.regions.northTitle")}</h3>
                  <p className="text-gray-600 mb-2">
                    {t("clients.regions.northDesc")}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="h-4 w-4" />
                    <span>{t("clients.regions.northCenters")}</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-primary">{t("clients.regions.andeanTitle")}</h3>
                  <p className="text-gray-600 mb-2">
                    {t("clients.regions.andeanDesc")}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="h-4 w-4" />
                    <span>{t("clients.regions.andeanCenters")}</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-primary">{t("clients.regions.southernTitle")}</h3>
                  <p className="text-gray-600 mb-2">
                    {t("clients.regions.southernDesc")}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="h-4 w-4" />
                    <span>{t("clients.regions.southernCenters")}</span>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-primary">{t("clients.regions.brazilTitle")}</h3>
                  <p className="text-gray-600 mb-2">
                    {t("clients.regions.brazilDesc")}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Globe className="h-4 w-4" />
                    <span>{t("clients.regions.brazilCenters")}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-xl overflow-hidden border border-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <Globe className="h-24 w-24 text-primary mx-auto mb-4" />
                  <p className="text-lg font-medium text-primary">Mapa de América Latina</p>
                  <p className="text-sm text-gray-600">15 países de cobertura</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-12">{t("clients.testimonialsTitle")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-white/90 mb-4 italic">
                  {t("clients.testimonials.carlos")}
                </p>
                <div className="font-medium">Carlos Mendoza</div>
                <div className="text-white/70 text-sm">{t("clients.testimonials.carlosTitle")}</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-white/90 mb-4 italic">
                  {t("clients.testimonials.ana")}
                </p>
                <div className="font-medium">Ana Rodriguez</div>
                <div className="text-white/70 text-sm">{t("clients.testimonials.anaTitle")}</div>
              </div>
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm">
                <p className="text-white/90 mb-4 italic">
                  {t("clients.testimonials.miguel")}
                </p>
                <div className="font-medium">Miguel Santos</div>
                <div className="text-white/70 text-sm">{t("clients.testimonials.miguelTitle")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}