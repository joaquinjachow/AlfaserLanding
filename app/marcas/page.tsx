"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { useRouter } from "next/navigation"
import { useBrandConfig } from "@/hooks/useBrandConfig"

export default function MarcasPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const config = useBrandConfig()
  const [filtroActivo, setFiltroActivo] = useState("todos")
  const handleFiltroClick = (filtroId: string) => {
    if (filtroId === "ferreteria") {
      router.push("/ferreteria")
    } else if (filtroId === "automotor") {
      router.push("/autopartes")
    } else {
      setFiltroActivo(filtroId)
    }
  }
  const marcasExternas = config.brands.external
  const marcasPropias = config.brands.own

  const filtros = [
    { id: "todos", label: t("brands.filters.all") },
    { id: "ferreteria", label: t("brands.filters.hardware") },
    { id: "automotor", label: t("brands.filters.automotive") },
    { id: "marcas propias", label: t("brands.filters.own") },
  ]

  const mostrarMarcasExternas = filtroActivo === "todos" || filtroActivo === "distribuimos" || filtroActivo === "ferreteria" || filtroActivo === "automotor"
  const mostrarMarcasPropias = filtroActivo === "todos" || filtroActivo === "marcas propias"

  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">{t("brands.title")}</h1>
            <p className="text-xl text-white/90">
              {t("brands.subtitle")}
            </p>
          </div>
        </div>
      </section>
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4">
            {filtros.map((filtro) => (
              <Button
                key={filtro.id}
                variant={filtroActivo === filtro.id ? "default" : "outline"}
                className={`px-6 py-2 ${
                  filtroActivo === filtro.id
                    ? "text-white"
                    : "border-2"
                }`}
                style={{
                  backgroundColor: filtroActivo === filtro.id ? config.brand.colors.primary : 'transparent',
                  borderColor: config.brand.colors.primary,
                  color: filtroActivo === filtro.id ? config.brand.colors.secondary : config.brand.colors.primary
                }}
                onClick={() => handleFiltroClick(filtro.id)}
              >
                {filtro.label}
              </Button>
            ))}
          </div>
        </div>
      </section>
      {mostrarMarcasPropias && (
        <section className="py-16 md:py-24 bg-gray-200">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary text-center">
              {t("brands.ownBrandsTitle")}
            </h2>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-600">
                {t("brands.ownBrandsDescription")}
              </p>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-12 max-w-4xl mx-auto">
              {marcasPropias.map((marca, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl shadow-lg border-2 border-primary/20 flex-1 max-w-md hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center">
                    <div className="bg-white p-6 rounded-lg mb-6 shadow-sm">
                      <Image
                        src={marca.logo}
                        alt={`Logo de ${marca.name}`}
                        width={200}
                        height={100}
                        className="h-16 w-auto object-contain mx-auto"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{marca.name}</h3>
                    <p className="text-gray-600">{t(`brands.own.${marca.name.toLowerCase()}`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {mostrarMarcasExternas && (
        <section className="py-16 md:py-24 bg-gray-100">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-primary text-center">
              {t("brands.distributedTitle")}
            </h2>
            <div className="max-w-4xl mx-auto text-center mb-12">
              <p className="text-lg text-gray-600">
                {t("brands.distributedDescription")}
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
              {marcasExternas.map((marca, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-28 flex items-center justify-center hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <Image
                    src={marca.logo}
                    alt={`Logo de ${marca.name}`}
                    width={120}
                    height={60}
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}