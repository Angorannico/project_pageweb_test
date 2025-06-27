import Link from 'next/link'
import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCategory } from '../../lib/types'

export async function CategorySection() {
  try {
    const categories = await wooCommerce.getCategories() as ProductCategory[]
    
    const mainCategories = categories.filter(cat => !cat.parent || cat.parent === 0).slice(0, 6)

    if (!mainCategories || mainCategories.length === 0) {
      return null
    }

    return (
      
      <section className="py-16 bg-gradient-categories relative overflow-hidden">
        {/* CORREGIDO: Fondo más vivo y dinámico */}
        {/* AGREGADO: Elementos decorativos de fondo */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-ceramic-blue bg-opacity-10 rounded-full animate-float" />
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-soft-terracotta bg-opacity-10 rounded-full animate-bounce-subtle" />
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-logo-brown bg-opacity-5 rounded-full" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Explora por Categorías
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Encuentra exactamente lo que necesitas para tu proyecto
            </p>
          </div>

          {/* CORREGIDO: Grid centrado y responsive mejorado */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl ">
              {mainCategories.map((category) => (
                <Link
                  key={category.id}
                  href={`/tienda?categoria=${category.id}`}
                  className="group bg-pure-white rounded-xl p-6 text-center hover:shadow-ceramic-lg transition-all duration-300 border border-border-light hover:border-ceramic-blue hover:transform hover:-translate-y-2 hover:bg-gradient-to-br hover:from-pure-white hover:to-primary-50"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-soft-terracotta to-pure-white bg-opacity-10 rounded-full flex items-center justify-center group-hover:bg-opacity-20 transition-all duration-300 group-hover:scale-110">
                    {getCategoryIcon(category.name)}
                  </div>
                  <h3 className="font-bold text-text-primary group-hover:text-ceramic-blue transition-colors duration-300 text-sm">
                    {category.name}
                  </h3>
                </Link>
              ))}
            </div>
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
  const iconClass = "h-8 w-8 text-ceramic-blue group-hover:text-primary-700 transition-colors duration-300 text-pure-white"
  
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
  
  return (
    <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  )
}

