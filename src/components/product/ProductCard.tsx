'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Product } from '../../lib/types'
import { Button } from '../ui/Button'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'
import { ShoppingCart, Eye, Heart } from 'lucide-react'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      addItem(product, 1)
      // Aquí podrías agregar una notificación de éxito
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const mainImage = product.images[0]
  const isOnSale = product.on_sale && product.sale_price
  const isInStock = product.stock_status === 'instock'

  return (
    <div className="group bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {mainImage && !imageError ? (
          <Image
            src={mainImage.src}
            alt={mainImage.alt || product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">Sin imagen</span>
          </div>
        )}

        {/* Sale Badge */}
        {isOnSale && (
          <div className="absolute top-3 left-3 bg-accent-400 text-white px-2 py-1 text-xs font-semibold rounded">
            OFERTA
          </div>
        )}

        {/* Stock Badge */}
        {!isInStock && (
          <div className="absolute top-3 right-3 bg-red-500 text-white px-2 py-1 text-xs font-semibold rounded">
            AGOTADO
          </div>
        )}

        {/* Quick Actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <Link
              href={`/productos/${product.slug}`}
              className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            >
              <Eye className="h-4 w-4 text-gray-600" />
            </Link>
            <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
              <Heart className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category */}
        {product.categories.length > 0 && (
          <p className="text-xs text-primary-500 font-medium mb-1">
            {product.categories[0].name}
          </p>
        )}

        {/* Product Name */}
        <h3 className="font-semibold text-secondary-800 mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors">
          <Link href={`/productos/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-3">
          {isOnSale ? (
            <>
              <span className="text-lg font-bold text-accent-500">
                {formatPrice(product.sale_price)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.regular_price)}
              </span>
            </>
          ) : (
            <span className="text-lg font-bold text-secondary-800">
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!isInStock || isLoading}
          loading={isLoading}
          className="w-full"
          size="sm"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          {!isInStock ? 'Agotado' : 'Agregar al Carrito'}
        </Button>
      </div>
    </div>
  )
}
