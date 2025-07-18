// QuickFinder.tsx (use React Portal)
import { createPortal } from "react-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { X } from "lucide-react"
import { products } from "../data/ProductsData"

export default function QuickFinder({ onClose }: { onClose: () => void }) {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("infusion-transfusion-therapy")
  const categories = Array.from(new Set(products.map((p) => p.category)))
  const filteredProducts = products.filter((product) => product.category === selectedCategory)

  const modal = (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center">
      <div className="bg-teal-600 w-[90%] h-[90%] rounded-xl overflow-hidden shadow-2xl flex relative p-24">
        {/* Sidebar */}
        <div className="w-80 bg-teal-600 p-6 overflow-y-auto">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-12 space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-left px-4 py-3 text-white transition-colors ${
                  selectedCategory === category
                    ? "bg-yellow-500 text-black font-medium"
                    : "hover:bg-teal-500"
                }`}
              >
                {category.replace(/-/g, " ")}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-3 gap-4 pt-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate(`/products/${product.category}/${product.id}`)
                    onClose()
                  }}
                  className="border border-white/30 p-4 text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <h3 className="text-sm font-semibold text-center">
                    {product.product_name}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-white text-sm pt-6">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  )

  return createPortal(modal, document.body)
}
