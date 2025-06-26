'use client'

import { useState } from 'react'
import { Product } from '../../lib/types'

interface ProductTabsProps {
  product: Product
}

export function ProductTabs({ product }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description')

  const tabs = [
    { id: 'description', label: 'Descripción' },
    { id: 'specifications', label: 'Especificaciones' },
    { id: 'reviews', label: 'Reseñas' },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Tab Navigation */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8 px-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-secondary-500 hover:text-secondary-700 hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === 'description' && (
          <div className="prose max-w-none">
            {product.description ? (
              <div dangerouslySetInnerHTML={{ __html: product.description }} />
            ) : (
              <p className="text-secondary-600">No hay descripción disponible.</p>
            )}
          </div>
        )}

        {activeTab === 'specifications' && (
          <div className="space-y-4">
            <h3 className="font-semibold text-secondary-800 mb-4">
              Especificaciones Técnicas
            </h3>
            
            {product.attributes.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.attributes.map((attribute) => (
                  <div key={attribute.id} className="border-b border-gray-100 pb-2">
                    <dt className="font-medium text-secondary-700">
                      {attribute.name}
                    </dt>
                    <dd className="text-secondary-600">
                      {attribute.options.join(', ')}
                    </dd>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-secondary-600">
                No hay especificaciones disponibles.
              </p>
            )}

            {/* Additional specs */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.sku && (
                <div className="border-b border-gray-100 pb-2">
                  <dt className="font-medium text-secondary-700">SKU</dt>
                  <dd className="text-secondary-600">{product.sku}</dd>
                </div>
              )}
              <div className="border-b border-gray-100 pb-2">
                <dt className="font-medium text-secondary-700">Estado</dt>
                <dd className="text-secondary-600">
                  {product.stock_status === 'instock' ? 'En stock' : 'Agotado'}
                </dd>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div className="text-center py-8">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-3.582 8-8 8a8.959 8.959 0 01-4.906-1.476L3 21l2.476-5.094A8.959 8.959 0 013 12c0-4.418 3.582-8 8-8s8 3.582 8 8z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-secondary-800 mb-2">
              Próximamente
            </h3>
            <p className="text-secondary-600">
              El sistema de reseñas estará disponible pronto.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
