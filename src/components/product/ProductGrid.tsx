import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCard } from './ProductCard'
import { Product } from '../../lib/types'

interface SearchParams {
  categoria?: string
  precio_min?: string
  precio_max?: string
  ordenar?: string
  pagina?: string
}

interface ProductGridProps {
  searchParams: SearchParams
}

export async function ProductGrid({ searchParams }: ProductGridProps) {
  try {
    // Construir parámetros de consulta para WooCommerce
    const queryParams: Record<string, string> = {
      per_page: '12',
      page: searchParams.pagina || '1',
    }

    // Filtro por categoría
    if (searchParams.categoria) {
      queryParams.category = searchParams.categoria
    }

    // Filtro por precio
    if (searchParams.precio_min) {
      queryParams.min_price = searchParams.precio_min
    }
    if (searchParams.precio_max) {
      queryParams.max_price = searchParams.precio_max
    }

    // Ordenamiento
    if (searchParams.ordenar) {
      switch (searchParams.ordenar) {
        case 'precio_asc':
          queryParams.orderby = 'price'
          queryParams.order = 'asc'
          break
        case 'precio_desc':
          queryParams.orderby = 'price'
          queryParams.order = 'desc'
          break
        case 'nombre':
          queryParams.orderby = 'title'
          queryParams.order = 'asc'
          break
        case 'fecha':
          queryParams.orderby = 'date'
          queryParams.order = 'desc'
          break
        default:
          queryParams.orderby = 'menu_order'
      }
    }

    const products = await wooCommerce.getProducts(queryParams) as Product[]

    if (!products || products.length === 0) {
      return (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m13-8V4a1 1 0 00-1-1H7a1 1 0 00-1 1v1m8 0V4.5" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-secondary-800 mb-2">
            No se encontraron productos
          </h3>
          <p className="text-secondary-600">
            Intenta ajustar los filtros de búsqueda
          </p>
        </div>
      )
    }

    return (
      <div className="space-y-6">
        {/* Results Header */}
        <div className="flex justify-between items-center">
          <p className="text-secondary-600">
            Mostrando {products.length} productos
          </p>
          
          {/* Sort Dropdown - Mobile */}
          <div className="block md:hidden">
            <SortDropdown />
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Pagination */}
        <ProductPagination 
          currentPage={parseInt(searchParams.pagina || '1')}
          totalProducts={products.length}
        />
      </div>
    )
  } catch (error) {
    console.error('Error fetching products:', error)
    return (
      <div className="text-center py-12">
        <div className="text-red-400 mb-4">
          <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-secondary-800 mb-2">
          Error al cargar productos
        </h3>
        <p className="text-secondary-600">
          Por favor, intenta nuevamente más tarde
        </p>
      </div>
    )
  }
}

function SortDropdown() {
  return (
    <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent">
      <option value="">Ordenar por</option>
      <option value="precio_asc">Precio: Menor a Mayor</option>
      <option value="precio_desc">Precio: Mayor a Menor</option>
      <option value="nombre">Nombre A-Z</option>
      <option value="fecha">Más Recientes</option>
    </select>
  )
}

function ProductPagination({ currentPage, totalProducts }: { currentPage: number, totalProducts: number }) {
  const totalPages = Math.ceil(totalProducts / 12)
  
  if (totalPages <= 1) return null

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <a
          href={`?pagina=${currentPage - 1}`}
          className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Anterior
        </a>
      )}
      
      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        const page = i + 1
        return (
          <a
            key={page}
            href={`?pagina=${page}`}
            className={`px-3 py-2 border rounded-lg transition-colors ${
              page === currentPage
                ? 'bg-primary-500 text-white border-primary-500'
                : 'border-gray-300 hover:bg-gray-50'
            }`}
          >
            {page}
          </a>
        )
      })}
      
      {currentPage < totalPages && (
        <a
          href={`?pagina=${currentPage + 1}`}
          className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Siguiente
        </a>
      )}
    </div>
  )
}
