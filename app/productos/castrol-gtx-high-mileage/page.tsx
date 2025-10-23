"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, CheckCircle, Phone, Mail } from "lucide-react"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function CastrolGTXPage() {
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
              <Badge className="bg-red-500 hover:bg-red-500 text-white mb-4">NUEVO</Badge>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg font-semibold text-white/90">Castrol</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-6">GTX High Mileage 20W-50</h1>
              <p className="text-xl text-white/90 mb-8">
                Aceite de motor especialmente formulado para vehículos con más de 120,000 km. 
                Protección superior contra fugas y reduce el consumo de aceite.
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
                  src="/placeholder.svg?height=400&width=300&text=Castrol+GTX+20W-50"
                  alt="Castrol GTX High Mileage 20W-50"
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
                    <span className="text-gray-600">Viscosidad:</span>
                    <span className="font-medium">20W-50</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Tipo:</span>
                    <span className="font-medium">Aceite convencional</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Aplicación:</span>
                    <span className="font-medium">Vehículos +120,000 km</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Presentación:</span>
                    <span className="font-medium">1L, 4L, 5L</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4" style={{ color: config.brand.colors.primary }}>Certificaciones</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between">
                    <span className="text-gray-600">API:</span>
                    <span className="font-medium">SN</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">ACEA:</span>
                    <span className="font-medium">A3/B3</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-600">Aprobaciones:</span>
                    <span className="font-medium">VW, Mercedes-Benz</span>
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
                  title: "Reduce el consumo de aceite",
                  description: "Fórmula especial que ayuda a reducir el consumo de aceite en motores de alto kilometraje."
                },
                {
                  title: "Protección contra fugas",
                  description: "Ayuda a prevenir y reducir las fugas de aceite en juntas y sellos envejecidos."
                },
                {
                  title: "Limpieza del motor",
                  description: "Remueve depósitos y mantiene el motor limpio para un mejor rendimiento."
                },
                {
                  title: "Protección antidesgaste",
                  description: "Brinda protección superior contra el desgaste en motores con alto kilometraje."
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
            <h2 className="text-3xl font-bold mb-8" style={{ color: config.brand.colors.primary }}>Aplicaciones Recomendadas</h2>
            <p className="text-lg text-gray-600 mb-12">
              Ideal para vehículos con más de 120,000 kilómetros que necesitan protección adicional
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3" style={{ color: config.brand.colors.primary }}>Autos</h3>
                <p className="text-gray-600">Sedanes, hatchbacks y SUVs con alto kilometraje</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3" style={{ color: config.brand.colors.primary }}>Camionetas</h3>
                <p className="text-gray-600">Pick-ups y vehículos comerciales livianos</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-3" style={{ color: config.brand.colors.primary }}>Motores Antiguos</h3>
                <p className="text-gray-600">Vehículos clásicos y de colección</p>
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