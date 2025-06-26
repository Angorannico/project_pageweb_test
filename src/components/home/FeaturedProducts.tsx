import Link from 'next/link'
import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCard } from '../product/ProductCard'
import { Product } from '../../lib/types'
import { Button } from '../ui/Button'
import { ArrowRight } from 'lucide-react'

export async function FeaturedProducts() {
  try {
    const products = await wooCommerce.getProducts({ 
      featured: 'true', 
      per_page: '8' 
    }) as Product[]

    if (!products || products.length === 0) {
      return (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary-800 mb-4">
              Productos Destacados
            </h2>
            <p className="text-secondary-600">No hay productos destacados disponibles en este momento.</p>
          </div>
        </section>
      )
    }

    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary-800 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
              Descubre nuestra selección de cerámicas más populares entre profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link href="/tienda">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error fetching featured products:', error)
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary-800 mb-4">
            Productos Destacados
          </h2>
          <p className="text-secondary-600">Error al cargar productos destacados. Intenta nuevamente más tarde.</p>
        </div>
      </section>
    )
  }
}
