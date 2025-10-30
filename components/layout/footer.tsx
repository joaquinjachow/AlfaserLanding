"use client"
import Link from "next/link"
import { Linkedin, Instagram, MapPin, Phone, Mail } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function Footer() {
  const { t } = useLanguage()
  const config = useBrandConfig()
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold text-white">{config.brand.shortName}</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t("brand.description")}
            </p>
            <div className="flex space-x-4">
              <a 
                href={config.social.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href={config.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t("footer.quickLinks")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link href="/unidades-de-negocio" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t("footer.businessUnits")}
                </Link>
              </li>
              <li>
                <Link href="/marcas" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t("footer.brands")}
                </Link>
              </li>
              <li>
                <a href="https://www.alfaser.com.ar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t("footer.clients")}
                </a>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">{t("footer.contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">
                  {config.contact.address}
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{config.contact.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gray-400 flex-shrink-0" />
                <Link href={`mailto:${config.contact.email}`} className="text-gray-400 hover:text-white transition-colors text-sm">
                  {config.contact.email}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {config.brand.name} {t("footer.rightsReserved")}
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              {t("footer.privacyPolicy")}
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm">
              {t("footer.termsOfService")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}