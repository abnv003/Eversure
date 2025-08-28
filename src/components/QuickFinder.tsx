// import { createPortal } from "react-dom"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { X } from "lucide-react"
// import { products } from "../data/ProductsData"

// export default function QuickFinder({ onClose }: { onClose: () => void }) {
//   const navigate = useNavigate()
//   const [selectedCategory, setSelectedCategory] = useState("Infusion-Transfusion")
//   const categories = Array.from(new Set(products.map((p) => p.category)))
//   const filteredProducts = products.filter((product) => product.category === selectedCategory)

//   const modal = (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
//       <div className="w-full h-full md:w-[90%] md:h-[90%] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative p-4 md:p-24" style={{backgroundColor: '#309ed9'}}>
//         {/* Sidebar */}
//         <div 
//           className="w-full md:w-80 p-6 overflow-y-auto mb-4 md:mb-0" 
//           style={{
//             backgroundColor: '#309ed9',
//             scrollbarWidth: 'thin',
//             scrollbarColor: '#fbbf24 transparent'
//           }}
//         >
//           <div className="absolute top-4 right-4">
//             <button
//               onClick={onClose}
//               className="text-white hover:bg-white/20 p-2 rounded-full"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <div className="mt-12 space-y-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`w-full text-left px-4 py-3 text-white transition-colors ${
//                   selectedCategory === category
//                     ? "bg-yellow-400 text-black font-medium"
//                     : 'hover:bg-opacity-80'
//                 }`}
//               >
//                 {category.replace(/-/g, " ")}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div 
//           className="flex-1 p-6 overflow-y-auto"
//           style={{
//             scrollbarWidth: 'thin',
//             scrollbarColor: '#fbbf24 transparent'
//           }}
//         >
//           {filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   onClick={() => {
//                     navigate(`/products/${product.category}/${product.id}`)
//                     onClose()
//                   }}
//                   className="border border-white/30 p-4 text-white hover:bg-white/10 transition-colors cursor-pointer"
//                 >
//                   <h3 className="text-sm font-semibold text-center">
//                     {product.product_name}
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-white text-sm pt-6">
//               No products found for this category.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   )

//   return createPortal(modal, document.body)
// }


// import { createPortal } from "react-dom"
// import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import { X } from "lucide-react"
// import { products } from "../data/ProductsData"

// // Mock useNavigate for demo
// // const useNavigate = () => (path: string) => console.log('Navigate to:', path)

// export default function QuickFinder({ onClose }: { onClose: () => void }) {
//   const navigate = useNavigate()
//   const [selectedCategory, setSelectedCategory] = useState("Infusion-Transfusion")
//   const categories = Array.from(new Set(products.map((p) => p.category)))
//   const filteredProducts = products.filter((product) => product.category === selectedCategory)

//   const modal = (
//     <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
//       <div className="w-full h-full md:w-[90%] md:h-[90%] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative p-4 md:p-24" style={{backgroundColor: '#309ed9'}}>
//         {/* Sidebar */}
//         <div 
//           className="w-full md:w-80 p-6 overflow-y-auto mb-4 md:mb-0" 
//           style={{
//             backgroundColor: '#309ed9',
//             scrollbarWidth: 'thin',
//             scrollbarColor: '#fbbf24 transparent'
//           }}
//         >
//           <div className="absolute top-4 right-4">
//             <button
//               onClick={onClose}
//               className="text-white hover:bg-white/20 p-2 rounded-full"
//             >
//               <X size={24} />
//             </button>
//           </div>
//           <div className="mt-12 space-y-2">
//             {categories.map((category) => (
//               <button
//                 key={category}
//                 onClick={() => setSelectedCategory(category)}
//                 className={`w-full text-left px-4 py-3 text-white transition-colors ${
//                   selectedCategory === category
//                     ? "bg-yellow-400 text-black font-medium"
//                     : 'hover:bg-white/20'
//                 }`}
//               >
//                 {category.replace(/-/g, " ")}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Main Content */}
//         <div 
//           className="flex-1 p-6 overflow-y-auto"
//           style={{
//             scrollbarWidth: 'thin',
//             scrollbarColor: '#fbbf24 transparent'
//           }}
//         >
//           {filteredProducts.length > 0 ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product.id}
//                   onClick={() => {
//                     navigate(`/products/${product.category}/${product.id}`)
//                     onClose()
//                   }}
//                   className="bg-white/10 border border-white/20 p-6 text-white hover:bg-white/20 transition-colors cursor-pointer rounded-lg"
//                 >
//                   <h3 className="text-base font-medium text-center text-white">
//                     {product.product_name}
//                   </h3>
//                 </div>
//               ))}
//             </div>
//           ) : (
//             <p className="text-white text-sm pt-6">
//               No products found for this category.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   )

//   return createPortal(modal, document.body)
// }



import { createPortal } from "react-dom"
import { useState } from "react"
import { X } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { products } from "../data/ProductsData"


// Mock useNavigate for demo
// const useNavigate = () => (path: string) => console.log('Navigate to:', path)

export default function QuickFinder({ onClose }) {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("Infusion-Transfusion")
  const categories = Array.from(new Set(products.map((p) => p.category)))
  const filteredProducts = products.filter((product) => product.category === selectedCategory)

  const modal = (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] flex items-center justify-center p-4">
      <div className="w-full h-full md:w-[90%] md:h-[90%] rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative p-4 md:p-24 bg-slate-800">
        {/* Sidebar */}
        <div 
          className="w-full md:w-80 p-6 overflow-y-auto mb-4 md:mb-0 bg-slate-900" 
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#f59e0b transparent'
          }}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-gray-300 hover:bg-gray-700 p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <div className="mt-12">
            <div className="grid grid-cols-1 gap-4">
              {categories.map((category) => (
                <div
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`border border-gray-600 p-4 text-gray-300 hover:bg-gray-700 transition-colors cursor-pointer ${
                    selectedCategory === category
                      ? "bg-amber-600 text-white font-medium border-amber-600"
                      : ''
                  }`}
                >
                  <h3 className="text-sm font-semibold text-center">
                    {category.replace(/-/g, " ")}
                  </h3>
                  </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div 
          className="flex-1 p-6 overflow-y-auto bg-slate-800"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#f59e0b transparent'
          }}
        >
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    navigate(`/products/${product.category}/${product.id}`)
                    onClose()
                  }}
                  className="border border-gray-600 p-4 text-gray-300 hover:bg-gray-700 transition-colors cursor-pointer"
                >
                  <h3 className="text-sm font-semibold text-center">
                    {product.product_name}
                  </h3>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300 text-sm pt-6">
              No products found for this category.
            </p>
          )}
        </div>
      </div>
    </div>
  )

  return modal
}