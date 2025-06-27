import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCard } from './ProductCard'
import { Product } from '../../lib/types'

interface SearchParams {
  categoria?: string
  precio_min?: string
  precio_max?: string
  ordenar?: string
  pagina?: string
  buscar?: string // NUEVO PARÁMETRO
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

    // NUEVO: Filtro por búsqueda
    if (searchParams.buscar) {
      queryParams.search = searchParams.buscar
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-dark-gray mb-2">
            {searchParams.buscar ? 
              `No se encontraron productos para "${searchParams.buscar}"` : 
              'No se encontraron productos'
            }
          </h3>
          <p className="text-gray-600">
            {searchParams.buscar ? 
              'Intenta con otros términos de búsqueda' : 
              'Intenta ajustar los filtros de búsqueda'
            }
          </p>
        </div>
      )
    }

    return (
      <div className="space-y-6">
        {/* Results Header ACTUALIZADO */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-gray-600">
              {searchParams.buscar ? (
                <>
                  Mostrando {products.length} resultados para{' '}
                  <span className="font-semibold text-ceramic-blue">"{searchParams.buscar}"</span>
                </>
              ) : (
                `Mostrando ${products.length} productos`
              )}
            </p>
          </div>
          
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
          searchParams={searchParams}
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
        <h3 className="text-lg font-medium text-dark-gray mb-2">
          Error al cargar productos
        </h3>
        <p className="text-gray-600">
          Por favor, intenta nuevamente más tarde
        </p>
      </div>
    )
  }
}

// Componentes auxiliares sin cambios...
function SortDropdown() {
  return (
    <select className="border border-light-gray rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-ceramic-blue focus:border-transparent">
      <option value="">Ordenar por</option>
      <option value="precio_asc">Precio: Menor a Mayor</option>
      <option value="precio_desc">Precio: Mayor a Menor</option>
      <option value="nombre">Nombre A-Z</option>
      <option value="fecha">Más Recientes</option>
    </select>
  )
}

function ProductPagination({ 
  currentPage, 
  totalProducts, 
  searchParams 
}: { 
  currentPage: number
  totalProducts: number
  searchParams: SearchParams
}) {
  const totalPages = Math.ceil(totalProducts / 12)
  
  if (totalPages <= 1) return null

  // Construir URL con parámetros existentes
  const buildPageUrl = (page: number) => {
    const params = new URLSearchParams()
    if (searchParams.buscar) params.set('buscar', searchParams.buscar)
    if (searchParams.categoria) params.set('categoria', searchParams.categoria)
    if (searchParams.precio_min) params.set('precio_min', searchParams.precio_min)
    if (searchParams.precio_max) params.set('precio_max', searchParams.precio_max)
    if (searchParams.ordenar) params.set('ordenar', searchParams.ordenar)
    params.set('pagina', page.toString())
    return `?${params.toString()}`
  }

  return (
    <div className="flex justify-center items-center space-x-2 mt-8">
      {currentPage > 1 && (
        <a
          href={buildPageUrl(currentPage - 1)}
          className="px-3 py-2 border border-light-gray rounded-lg hover:bg-gray-50 transition-colors"
        >
          Anterior
        </a>
      )}
      
      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
        const page = i + 1
        return (
          <a
            key={page}
            href={buildPageUrl(page)}
            className={`px-3 py-2 border rounded-lg transition-colors ${
              page === currentPage
                ? 'bg-ceramic-blue text-white border-ceramic-blue'
                : 'border-light-gray hover:bg-gray-50'
            }`}
          >
            {page}
          </a>
        )
      })}
      
      {currentPage < totalPages && (
        <a
          href={buildPageUrl(currentPage + 1)}
          className="px-3 py-2 border border-light-gray rounded-lg hover:bg-gray-50 transition-colors"
        >
          Siguiente
        </a>
      )}
    </div>
  )
}
