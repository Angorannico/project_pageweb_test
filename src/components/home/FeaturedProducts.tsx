import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCard } from '../product/ProductCard'
import { Product } from '../../lib/types'
import { ArrowRight } from 'lucide-react'

// Datos mock para fallback
const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Azulejo Cerámico Blanco 30x30',
    slug: 'azulejo-ceramico-blanco-30x30',
    permalink: '',
    description: 'Azulejo cerámico de alta calidad',
    short_description: 'Perfecto para baños y cocinas',
    sku: 'AZ-001',
    price: '25000',
    regular_price: '25000',
    sale_price: '',
    on_sale: false,
    stock_status: 'instock',
    stock_quantity: 100,
    images: [
      {
        id: 1,
        src: '/placeholder-product.jpg',
        name: 'Azulejo Blanco',
        alt: 'Azulejo Cerámico Blanco'
      }
    ],
    categories: [
      { id: 1, name: 'Azulejos', slug: 'azulejos' }
    ],
    attributes: [],
    variations: [],
    meta_data: []
  }
];

export async function FeaturedProducts() {
  try {
    const products = await wooCommerce.getProducts({ 
      featured: 'true', 
      per_page: '8' 
    }) as Product[]

    const productsToShow = products && products.length > 0 ? products : mockProducts;

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
            {productsToShow.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/tienda"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500 rounded-lg"
            >
              Ver Todos los Productos
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
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
          <p className="text-secondary-600">Error al cargar productos destacados</p>
        </div>
      </section>
    )
  }
}

