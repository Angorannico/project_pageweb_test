import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCard } from '../product/ProductCard'
import { Product, ProductTag } from '../../lib/types' // AGREGADO: ProductTag
import { ArrowRight } from 'lucide-react'

export async function FeaturedProducts() {
  try {
    // CORREGIDO: Tipado específico en lugar de any
    const tags = await wooCommerce.getProductTags() as ProductTag[]
    
    const destacadoTag = tags.find(tag => 
      tag.name.toLowerCase().includes('destacado') || 
      tag.slug.includes('destacado')
    )

    if (!destacadoTag) {
      console.log('No se encontró la etiqueta "Destacado"')
      return (
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Productos Destacados
            </h2>
            <p className="text-text-secondary">
              No hay productos destacados disponibles. 
              <br />
              <small className="text-text-muted">
                Asegúrate de tener productos con la etiqueta &quot;Destacado&quot; en WooCommerce.
              </small>
            </p>
          </div>
        </section>
      )
    }

    const products = await wooCommerce.getProducts({ 
      tag: destacadoTag.id.toString(),
      per_page: '8',
      status: 'publish',
      stock_status: 'instock'
    }) as Product[]

    if (!products || products.length === 0) {
      return (
        <section className="py-16 bg-pure-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Productos Destacados
            </h2>
            <p className="text-text-secondary">
              No hay productos con la etiqueta &quot;Destacado&quot; disponibles.
              <br />
              <small className="text-text-muted">
                Etiqueta encontrada: &quot;{destacadoTag.name}&quot; (ID: {destacadoTag.id})
              </small>
            </p>
          </div>
        </section>
      )
    }

    return (
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Descubre nuestra selección de cerámicas más populares entre profesionales
            </p>
            <small className="text-text-muted block mt-2">
              Mostrando {products.length} productos con etiqueta &quot;{destacadoTag.name}&quot;
            </small>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/tienda"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-soft-terracotta hover:bg-accent-600 text-pure-white rounded-lg transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:shadow-terracotta-lg border border-soft-terracotta hover:border-accent-600 group"
            >
              Ver Todos los Productos
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error fetching featured products:', error)
    
    return (
      <section className="py-16 bg-pure-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-4">
            Productos Destacados
          </h2>
          <p className="text-text-secondary">
            Error al cargar productos destacados. 
            <br />
            <small className="text-text-muted">
              Verifica la conexión con WooCommerce: {error instanceof Error ? error.message : 'Error desconocido'}
            </small>
          </p>
        </div>
      </section>
    )
  }
}
