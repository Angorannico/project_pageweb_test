import Link from 'next/link'
import Image from 'next/image'
import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCategory } from '../../lib/types'

export async function CategorySection() {
  try {
    const categories = await wooCommerce.getCategories() as ProductCategory[]
    
    // Filtrar categorías principales (sin parent)
    const mainCategories = categories.filter(cat => !cat.parent).slice(0, 6)

    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary-800 mb-4">
              Explora por Categorías
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas para tu proyecto
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mainCategories.map((category) => (
              <Link
                key={category.id}
                href={`/tienda?categoria=${category.id}`}
                className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                  {/* Iconos por categoría */}
                  {getCategoryIcon(category.name)}
                </div>
                <h3 className="font-semibold text-secondary-800 group-hover:text-primary-500 transition-colors">
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error fetching categories:', error)
    return null
  }
}

function getCategoryIcon(categoryName: string) {
  const iconClass = "h-8 w-8 text-primary-500"
  
  if (categoryName.toLowerCase().includes('piso')) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  }
  
  if (categoryName.toLowerCase().includes('azulejo')) {
    return (
      <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    )
  }
  
  // Icono por defecto
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  )
}
