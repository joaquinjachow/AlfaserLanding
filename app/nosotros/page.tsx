"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function NosotrosPage() {
  const { t } = useLanguage()
  const config = useBrandConfig()
  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-16 md:py-24" style={{ backgroundColor: config.brand.colors.backgroundLight }}>
        <div className="container">
          <div className="grid md:grid-cols-1 gap-12 items-center mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-primary text-center md:text-left">
                {t("about.historyTitle")}
                <span className="block w-16 h-1 bg-primary mt-2 mx-auto md:mx-0 rounded-full" />
              </h2>
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{t("about.history.paragraphs.0")}</p>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md h-[200px] md:h-[260px] rounded-xl overflow-hidden shadow-lg bg-white">
                      <Image
                        src={config.about.history.images[0].src}
                        alt={config.about.history.images[0].alt}
                        width={400}
                        height={260}
                        className="w-full h-full object-cover object-top rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:flex-row-reverse">
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{t("about.history.paragraphs.1")}</p>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md h-[200px] md:h-[260px] rounded-xl overflow-hidden shadow-lg bg-white">
                      <Image
                        src={config.about.history.images[1].src}
                        alt={config.about.history.images[1].alt}
                        width={400}
                        height={260}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{t("about.history.paragraphs.2")}</p>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md h-[200px] md:h-[260px] rounded-xl overflow-hidden shadow-lg bg-white">
                      <Image
                        src={config.about.history.images[2].src}
                        alt={config.about.history.images[2].alt}
                        width={400}
                        height={260}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-6 md:flex-row-reverse">
                  <div className="flex-1">
                    <p className="text-lg text-gray-700">{t("about.history.paragraphs.3")}</p>
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-md h-[200px] md:h-[260px] rounded-xl overflow-hidden shadow-lg bg-white">
                      <Image
                        src={config.about.history.images[3].src}
                        alt={config.about.history.images[3].alt}
                        width={400}
                        height={260}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 md:gap-6 items-center justify-center">
              <div className="relative w-full h-[200px] md:h-[280px] rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <Image
                  src="/Historia-1.jpg"
                  alt="Historia de Oechsle - Imagen 1"
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
              <div className="relative w-full h-[200px] md:h-[280px] rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <Image
                  src="/Historia-2.jpg"
                  alt="Historia de Oechsle - Imagen 2"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative w-full h-[200px] md:h-[280px] rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <Image
                  src="/Foto-festejo.jpeg"
                  alt="Foto festejo"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <div className="relative w-full h-[200px] md:h-[280px] rounded-xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                <Image
                  src="/Mapa.png"
                  alt="Mapa"
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container">
          <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">{t("about.pillars.title")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">{t("about.pillars.mission.title")}</h3>
              <p className="text-white/90">
                {t("about.pillars.mission.text")}
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">{t("about.pillars.vision.title")}</h3>
              <p className="text-white/90">
                {t("about.pillars.vision.text")}
              </p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">{t("about.pillars.values.title")}</h3>
              <ul className="space-y-2 text-white/90">
                {t("about.pillars.values.list").split(',').map((value, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    <span>{value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}