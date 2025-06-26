import { wooCommerce } from '../../lib/api/woocommerce'
import { ProductCategory } from '../../lib/types'

interface SearchParams {
  categoria?: string
  precio_min?: string
  precio_max?: string
  ordenar?: string
}

interface ProductFiltersProps {
  searchParams: SearchParams
}

export async function ProductFilters({ searchParams }: ProductFiltersProps) {
  try {
    const categories = await wooCommerce.getCategories() as ProductCategory[]

    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
        <h2 className="text-lg font-display font-bold text-secondary-800 mb-6">
          Filtros
        </h2>

        <div className="space-y-6">
          {/* Categories Filter */}
          <div>
            <h3 className="font-semibold text-secondary-700 mb-3">Categorías</h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="categoria"
                  value=""
                  defaultChecked={!searchParams.categoria}
                  className="text-primary-500 focus:ring-primary-500"
                />
                <span className="ml-2 text-sm text-secondary-600">Todas</span>
              </label>
              {categories.map((category) => (
                <label key={category.id} className="flex items-center">
                  <input
                    type="radio"
                    name="categoria"
                    value={category.id.toString()}
                    defaultChecked={searchParams.categoria === category.id.toString()}
                    className="text-primary-500 focus:ring-primary-500"
                  />
                  <span className="ml-2 text-sm text-secondary-600">
                    {category.name}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="font-semibold text-secondary-700 mb-3">Precio</h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm text-secondary-600 mb-1">
                  Precio mínimo
                </label>
                <input
                  type="number"
                  name="precio_min"
                  defaultValue={searchParams.precio_min}
                  placeholder="0"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm text-secondary-600 mb-1">
                  Precio máximo
                </label>
                <input
                  type="number"
                  name="precio_max"
                  defaultValue={searchParams.precio_max}
                  placeholder="1000000"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          {/* Sort Filter */}
          <div>
            <h3 className="font-semibold text-secondary-700 mb-3">Ordenar por</h3>
            <select
              name="ordenar"
              defaultValue={searchParams.ordenar}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              <option value="">Relevancia</option>
              <option value="precio_asc">Precio: Menor a Mayor</option>
              <option value="precio_desc">Precio: Mayor a Menor</option>
              <option value="nombre">Nombre A-Z</option>
              <option value="fecha">Más Recientes</option>
            </select>
          </div>

          {/* Apply Filters Button */}
          <button
            type="submit"
            className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Aplicar Filtros
          </button>

          {/* Clear Filters */}
          <a
            href="/tienda"
            className="block text-center text-sm text-secondary-500 hover:text-primary-500 transition-colors"
          >
            Limpiar filtros
          </a>
        </div>
      </div>
    )
  } catch (error) {
    console.error('Error fetching categories:', error)
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <p className="text-secondary-600 text-sm">Error al cargar filtros</p>
      </div>
    )
  }
}
