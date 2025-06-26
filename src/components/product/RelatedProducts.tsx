import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCard } from './ProductCard'
import { Product, ProductCategory } from '../../lib/types'

interface RelatedProductsProps {
  productId: number
  categories: ProductCategory[]
}

export async function RelatedProducts({ productId, categories }: RelatedProductsProps) {
  try {
    // Obtener productos de las mismas categorías
    const categoryIds = categories.map(cat => cat.id.toString()).join(',')
    
    const products = await wooCommerce.getProducts({
      category: categoryIds,
      exclude: productId.toString(),
      per_page: '4',
      orderby: 'rand'
    }) as Product[]

    if (!products || products.length === 0) {
      return null
    }

    return (
      <section>
        <h2 className="text-2xl font-display font-bold text-secondary-800 mb-8">
          Productos Relacionados
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    )
  } catch (error) {
    console.error('Error fetching related products:', error)
    return null
  }
}
