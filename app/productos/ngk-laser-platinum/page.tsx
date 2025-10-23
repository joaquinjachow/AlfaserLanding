"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function NGKLaserPlatinumPage() {
  const config = useBrandConfig()
  
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="container">
          <Button asChild variant="ghost" style={{ color: config.brand.colors.primary }}>
            <Link href="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
      <section className="py-16 md:py-24 text-white" style={{ background: `linear-gradient(to right, ${config.brand.colors.primary}, ${config.brand.colors.primary}CC)` }}>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold text-white/90">NGK</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">Laser Platinum PZFR6F</h1>
              <p className="text-xl text-white/90 mb-8">
                Bujías de platino con tecnología láser para un encendido más eficiente y mayor durabilidad. 
                Ideal para motores modernos de alta performance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white font-semibold px-8 py-3"
                  style={{ '--hover-text-color': config.brand.colors.primary } as React.CSSProperties}
                >
                  <Link href="/contacto">Consultar precio</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-2 border-white bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-3"
                >
                  <a href="https://wa.me/5493515574449" target="_blank" rel="noopener noreferrer">
                    Contactar por WhatsApp
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=NGK+Platinum+PZFR6F"
                  alt="NGK Laser Platinum PZFR6F"
                  width={300}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: config.brand.colors.primary }}>Especificaciones Técnicas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4" style={{ color: config.brand.colors.primary }}>Información del Producto</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Modelo:</span>
                    <span className="font-medium">PZFR6F</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span className="font-medium">Bujía de platino</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Grado térmico:</span>
                    <span className="font-medium">6</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Rosca:</span>
                    <span className="font-medium">14 mm</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4" style={{ color: config.brand.colors.primary }}>Características</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">Material electrodo:</span>
                    <span className="font-medium">Platino láser</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Gap:</span>
                    <span className="font-medium">1.1 mm</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Vida útil:</span>
                    <span className="font-medium">100,000 km</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: config.brand.colors.primary }}>Beneficios Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Tecnología láser",
                  description: "Electrodo de platino soldado con láser para máxima precisión y durabilidad."
                },
                {
                  title: "Encendido eficiente",
                  description: "Mejora el arranque en frío y proporciona una combustión más completa."
                },
                {
                  title: "Larga duración",
                  description: "Hasta 100,000 km de vida útil, reduciendo la frecuencia de cambios."
                },
                {
                  title: "Ahorro de combustible",
                  description: "Optimiza la combustión, resultando en mejor economía de combustible."
                }
              ].map((beneficio, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: config.brand.colors.primary }}>{beneficio.title}</h3>
                    <p className="text-gray-600">{beneficio.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8" style={{ color: config.brand.colors.primary }}>Motores Compatibles</h2>
            <p className="text-lg text-gray-600 mb-12">
              Diseñada específicamente para motores modernos de alta eficiencia
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3" style={{ color: config.brand.colors.primary }}>Motores Turbo</h3>
                <p className="text-gray-600">Ideal para motores turboalimentados</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3" style={{ color: config.brand.colors.primary }}>Inyección Directa</h3>
                <p className="text-gray-600">Optimizada para sistemas GDI</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3" style={{ color: config.brand.colors.primary }}>Alta Performance</h3>
                <p className="text-gray-600">Motores deportivos y de alto rendimiento</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-24 text-white" style={{ backgroundColor: config.brand.colors.primary }}>
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">¿Interesado en este producto?</h2>
            <p className="text-xl text-white/90 mb-8">
              Contactanos para obtener más información, precios y disponibilidad
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="outline"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white font-semibold px-8 py-3"
                style={{ '--hover-text-color': config.brand.colors.primary } as React.CSSProperties}
              >
                <Link href="/contacto">
                  <Mail className="h-4 w-4 mr-2" />
                  Enviar consulta
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white bg-transparent text-white hover:bg-white/10 font-semibold px-8 py-3"
              >
                <a href="https://wa.me/5493515574449" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}