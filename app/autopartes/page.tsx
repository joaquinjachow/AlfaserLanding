"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Search, Star, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

export default function AutopartesPage() {
  const { t } = useLanguage()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedBrand, setSelectedBrand] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("name")

  const products = [
    {
      id: 1,
      name: "Filtro de Aceite Premium",
      brand: "Fram",
      category: "Filtros",
      price: 25.99,
      originalPrice: 29.99,
      image: "/placeholder.svg?height=200&width=200&text=Filtro+Fram",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      isNew: false,
      isOnSale: true,
      description: "Filtro de aceite de alta calidad para motores de automóviles",
    },
    {
      id: 2,
      name: "Aceite Motor Castrol GTX 5W-30",
      brand: "Castrol",
      category: "Lubricantes",
      price: 45.5,
      originalPrice: null,
      image: "/placeholder.svg?height=200&width=200&text=Castrol+GTX",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      isNew: true,
      isOnSale: false,
      description: "Aceite sintético premium para máxima protección del motor",
    },
    {
      id: 3,
      name: "Bujías NGK Laser Platinum",
      brand: "NGK",
      category: "Sistema Eléctrico",
      price: 18.75,
      originalPrice: 22.0,
      image: "/placeholder.svg?height=200&width=200&text=NGK+Bujias",
      rating: 4.7,
      reviews: 156,
      inStock: true,
      isNew: false,
      isOnSale: true,
      description: "Bujías de platino para encendido eficiente y duradero",
    },
    {
      id: 4,
      name: "Pastillas de Freno Bosch",
      brand: "Bosch",
      category: "Frenos",
      price: 65.0,
      originalPrice: null,
      image: "/placeholder.svg?height=200&width=200&text=Bosch+Frenos",
      rating: 4.6,
      reviews: 78,
      inStock: false,
      isNew: false,
      isOnSale: false,
      description: "Pastillas de freno cerámicas de alto rendimiento",
    },
    {
      id: 5,
      name: "Batería Optima RedTop",
      brand: "Optima",
      category: "Baterías",
      price: 189.99,
      originalPrice: 210.0,
      image: "/placeholder.svg?height=200&width=200&text=Optima+Bateria",
      rating: 4.9,
      reviews: 203,
      inStock: true,
      isNew: true,
      isOnSale: true,
      description: "Batería de arranque de alto rendimiento con tecnología AGM",
    },
    {
      id: 6,
      name: "Amortiguadores Monroe",
      brand: "Monroe",
      category: "Suspensión",
      price: 95.5,
      originalPrice: null,
      image: "/placeholder.svg?height=200&width=200&text=Monroe+Shock",
      rating: 4.5,
      reviews: 67,
      inStock: true,
      isNew: false,
      isOnSale: false,
      description: "Amortiguadores hidráulicos para máximo confort y control",
    },
  ]

  const brands = ["Fram", "Castrol", "NGK", "Bosch", "Optima", "Monroe"]
  const categories = ["Filtros", "Lubricantes", "Sistema Eléctrico", "Frenos", "Baterías", "Suspensión"]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesBrand && matchesCategory
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price
      case "price-high":
        return b.price - a.price
      case "rating":
        return b.rating - a.rating
      case "name":
      default:
        return a.name.localeCompare(b.name)
    }
  })

  return (
    <div className="flex min-h-screen flex-col">
      <section className="py-12 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">{t("products.autopartes.title")}</h1>
          <p className="text-xl text-white/90">{t("products.autopartes.subtitle")}</p>
        </div>
      </section>
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder={t("products.searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-4 items-center">
              <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t("products.brand")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("products.allBrands")}</SelectItem>
                  {brands.map((brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder={t("products.category")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t("products.allCategories")}</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder={t("products.sortBy")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">{t("products.nameAZ")}</SelectItem>
                  <SelectItem value="price-low">{t("products.priceLowHigh")}</SelectItem>
                  <SelectItem value="price-high">{t("products.priceHighLow")}</SelectItem>
                  <SelectItem value="rating">{t("products.topRated")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="mt-4 text-gray-600">
            {t("products.showing")} {sortedProducts.length} {t("products.of")} {products.length} {t("products.productsText")}
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sortedProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <CardHeader className="p-0 relative">
                  <div className="relative h-48 bg-white">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex flex-col gap-1">
                      {product.isNew && <Badge className="bg-green-500 hover:bg-green-500">{t("products.newBadge")}</Badge>}
                      {product.isOnSale && <Badge className="bg-red-500 hover:bg-red-500">{t("products.offerBadge")}</Badge>}
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant={product.inStock ? "secondary" : "destructive"}>
                        {product.inStock ? t("products.inStock") : t("products.outOfStock")}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                      <Button size="sm" variant="secondary">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" disabled={!product.inStock}>
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs">
                      {product.brand}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                </CardFooter>
              </Card>
            ))}
          </div>
          {sortedProducts.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-500 text-lg mb-4">
                {t("products.noResults")}
              </div>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedBrand("all")
                  setSelectedCategory("all")
                }}
              >
                {t("buttons.clearFilters")}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}