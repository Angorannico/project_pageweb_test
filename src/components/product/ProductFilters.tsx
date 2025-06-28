import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCategory } from '../../lib/types'

interface SearchParams {
  categoria?: string
  precio_min?: string
  precio_max?: string
  ordenar?: string
  buscar?: string
}

interface ProductFiltersProps {
  searchParams: Promise<SearchParams>
}

export async function ProductFilters({ searchParams }: ProductFiltersProps) {
  try {
    const resolvedSearchParams = await searchParams
    const categories = await wooCommerce.getCategories() as ProductCategory[]

    return (
      <div className="bg-pure-white rounded-lg border border-border-light p-6 sticky top-8">
        <h2 className="text-lg font-display font-bold text-text-primary mb-6">
          Filtros
        </h2>

        <form method="GET" action="/tienda" className="space-y-6">
          {/* Categories Filter */}
          <div>
            <h3 className="font-semibold text-text-secondary mb-3">Categorías</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="categoria"
                  value=""
                  defaultChecked={!resolvedSearchParams.categoria}
                  className="text-ceramic-blue focus:ring-ceramic-blue"
                />
                <span className="ml-2 text-sm text-text-muted">Todas</span>
              </label>
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    name="categoria"
                    value={category.id.toString()}
                    defaultChecked={resolvedSearchParams.categoria === category.id.toString()}
                    className="text-ceramic-blue focus:ring-ceramic-blue"
                  />
                  <span className="ml-2 text-sm text-text-muted">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold text-text-secondary mb-3">Precio</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-text-muted mb-1">
                  Precio mínimo
                </label>
                <input
                  type="number"
                  name="precio_min"
                  defaultValue={resolvedSearchParams.precio_min}
                  placeholder="0"
                  className="w-full border border-border-light rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-ceramic-blue focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-text-muted mb-1">
                  Precio máximo
                </label>
                <input
                  type="number"
                  name="precio_max"
                  defaultValue={resolvedSearchParams.precio_max}
                  placeholder="1000000"
                  className="w-full border border-border-light rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-ceramic-blue focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Sort Filter */}
          <div>
            <h3 className="font-semibold text-text-secondary mb-3">Ordenar por</h3>
            <select
              name="ordenar"
              defaultValue={resolvedSearchParams.ordenar}
              className="w-full border border-border-light rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-ceramic-blue focus:border-transparent"
            >
              <option value="">Relevancia</option>
              <option value="precio_asc">Precio: Menor a Mayor</option>
              <option value="precio_desc">Precio: Mayor a Menor</option>
              <option value="nombre">Nombre A-Z</option>
              <option value="fecha">Más Recientes</option>
            </select>
          </div>

          {/* RESTAURADO: Mantener búsqueda actual */}
          {resolvedSearchParams.buscar && (
            <input type="hidden" name="buscar" value={resolvedSearchParams.buscar} />
          )}

          {/* Apply Filters Button */}
          <button
            type="submit"
            className="w-full bg-ceramic-blue hover:bg-hover-blue text-pure-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-out hover:transform hover:-translate-y-0.5 hover:shadow-lg"
          >
            Aplicar Filtros
          </button>

          {/* RESTAURADO: Clear Filters Button */}
          <a
            href="/tienda"
            className="block text-center text-sm text-text-muted hover:text-ceramic-blue transition-colors duration-300 py-2 px-4 border border-border-light rounded-lg hover:bg-secondary-50"
          >
            Limpiar filtros
          </a>
        </form>
      </div>
    )
  } catch (error) {
    console.error('Error fetching categories:', error)
    return (
      <div className="bg-pure-white rounded-lg border border-border-light p-6">
        <p className="text-text-muted text-sm">Error al cargar filtros</p>
      </div>
    )
  }
}
