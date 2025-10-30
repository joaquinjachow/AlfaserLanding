"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MessageCircle, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function ContactoPage() {
  const { t } = useLanguage()
  const config = useBrandConfig()

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="flex-1">
        <section className="text-white py-16" style={{ backgroundColor: config.brand.colors.primary }}>
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4">{t("contact.title")}</h1>
              <p className="text-xl text-white/90">
                {t("contact.subtitle")}
              </p>
            </div> 
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="space-y-8 border-b md:border-b-0 md:border-r border-gray-200 pb-12 md:pb-0 md:pr-12">
                <div className="flex items-start gap-4">
                  <MessageCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h2 className="font-semibold text-lg mb-1" style={{ color: config.brand.colors.primary }}>{t("contact.whatsapp")}</h2>
                    <Button
                      asChild
                      className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 mb-2"
                    >
                      <a href={`https://wa.me/${config.contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        {t("buttons.chatWithUs")}
                      </a>
                    </Button>
                    <div className="text-gray-600 text-sm mb-1">+{config.contact.whatsapp}</div>
                  </div>
                </div>
                <div className="h-px bg-gray-200 my-2 md:hidden" />
                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h2 className="font-semibold text-lg mb-1" style={{ color: config.brand.colors.primary }}>{t("contact.phone")}</h2>
                    <div className="text-gray-600 font-medium text-lg">{config.contact.phone}</div>
                  </div>
                </div>
                <div className="h-px bg-gray-200 my-2 md:hidden" />
                <div className="flex items-start gap-4">
                  <Mail className="h-6 w-6 text-yellow-600 mt-1" />
                  <div>
                    <h2 className="font-semibold text-lg mb-1" style={{ color: config.brand.colors.primary }}>{t("contact.email")}</h2>
                    <a
                      href={`https://mail.google.com/mail/?view=cm&fs=1&to=${config.contact.email}&su=Consulta desde la web de ${config.brand.name}&body=Hola, me contacto desde la página web de ${config.brand.name} para consultar sobre:`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition-colors"
                    >
                      {t("buttons.sendEmail")}
                    </a>
                    <div className="text-gray-600 text-sm mb-1">{config.contact.email}</div>
                    <div className="text-gray-500 text-xs">{t("buttons.clickToSendEmail")}</div>
                  </div>
                </div>
                <div className="h-px bg-gray-200 my-2 md:hidden" />
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21c-4.418 0-8-4.03-8-9 0-4.97 3.582-9 8-9s8 4.03 8 9c0 4.97-3.582 9-8 9zm0-11a2 2 0 110 4 2 2 0 010-4z" /></svg>
                    <div>
                      <h2 className="font-semibold text-lg mb-1" style={{ color: config.brand.colors.primary }}>{t("buttons.whereToFindUs")}</h2>
                    </div>
                  </div>
                  <div className="w-full">
                    <iframe
                      src={config.contact.mapEmbed}
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-lg shadow-md w-full h-64"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6" style={{ color: config.brand.colors.primary }}>{t("contact.formTitle")}</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.name")} *</label>
                      <Input required placeholder={t("contact.namePlaceholder")} className="border-gray-300" style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.company")} *</label>
                      <Input required placeholder={t("contact.companyPlaceholder")} className="border-gray-300" style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.emailField")} *</label>
                      <Input required type="email" placeholder={t("contact.emailPlaceholder")} className="border-gray-300" style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.phoneField")} *</label>
                      <Input required placeholder={t("contact.phonePlaceholder")} className="border-gray-300" style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties} />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.province")} *</label>
                      <select
                        required
                        className="block w-full rounded-md border border-gray-300 bg-gray-100 py-2 px-3 text-gray-900 shadow-sm focus:outline-none focus:ring-2 transition-colors duration-200"
                        style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties}
                      >
                        <option value="">{t("contact.provincePlaceholder")}</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">Santiago del Estero</option>
                        <option value="Tierra del Fuego">Tierra del Fuego</option>
                        <option value="Tucumán">Tucumán</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">{t("contact.city")} *</label>
                      <Input required placeholder={t("contact.cityPlaceholder")} className="border-gray-300" style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t("contact.subject")} *</label>
                    <Input required placeholder={t("contact.subjectPlaceholder")} className="border-gray-300" style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties} />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">{t("contact.message")} *</label>
                    <Textarea required placeholder={t("contact.messagePlaceholder")} className="min-h-[120px] border-gray-300" style={{ '--focus-border-color': config.brand.colors.primary, '--focus-ring-color': config.brand.colors.primary } as React.CSSProperties} />
                  </div>
                  <Button type="submit" className="w-full text-white font-semibold py-3" style={{ backgroundColor: config.brand.colors.primary }}>
                    {t("buttons.sendMessage")}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}