import { Suspense } from 'react'
import { ProductGrid } from '../../components/product/ProductGrid'
import { ProductFilters } from '../../components/product/ProductFilters'
import { Breadcrumb } from '../../components/ui/Breadcrumb'

interface SearchParams {
  categoria?: string
  precio_min?: string
  precio_max?: string
  ordenar?: string
  pagina?: string
  buscar?: string
}

interface TiendaPageProps {
  searchParams: SearchParams  // En Next.js 14 NO es Promise
}

export default function TiendaPage({ searchParams }: TiendaPageProps) {
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Tienda', href: '/tienda' }
          ]} 
        />

        <div className="mt-8">
          <div className="mb-8">
            <h1 className="text-3xl font-display font-bold text-text-primary mb-2">
              Catálogo de Productos
            </h1>
            <p className="text-text-secondary">
              Encuentra las mejores cerámicas para tu proyecto de construcción
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <Suspense fallback={<FiltersSkeleton />}>
                <ProductFilters searchParams={Promise.resolve(searchParams)} />
              </Suspense>
            </div>

            <div className="lg:col-span-3">
              <Suspense fallback={<ProductGridSkeleton />}>
                <ProductGrid searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FiltersSkeleton() {
  return (
    <div className="bg-pure-white rounded-lg border border-border-light p-6">
      <div className="animate-pulse space-y-4">
        <div className="h-6 bg-secondary-200 rounded w-1/2"></div>
        <div className="space-y-2">
          <div className="h-4 bg-secondary-200 rounded"></div>
          <div className="h-4 bg-secondary-200 rounded"></div>
          <div className="h-4 bg-secondary-200 rounded"></div>
        </div>
        <div className="h-10 bg-secondary-200 rounded"></div>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 9 }).map((_, i) => (
        <div key={i} className="bg-pure-white rounded-lg p-4 animate-pulse">
          <div className="aspect-square bg-secondary-200 rounded-lg mb-4" />
          <div className="h-4 bg-secondary-200 rounded mb-2" />
          <div className="h-4 bg-secondary-200 rounded w-2/3 mb-4" />
          <div className="h-8 bg-secondary-200 rounded" />
        </div>
      ))}
    </div>
  )
}
