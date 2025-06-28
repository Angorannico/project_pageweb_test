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
    if (product.stock_status !== 'instock') return
    
    setIsLoading(true)
    try {
      addItem(product, 1)
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const mainImage = product.images[0]
  const isOnSale = product.on_sale && product.sale_price
  const isInStock = product.stock_status === 'instock'
  
  const getProductBadge = () => {
    if (!isInStock) {
      return { text: 'AGOTADO', color: 'bg-gray-500' }
    }

    const hasLiquidacionTag = product.tags?.some(tag => 
      tag.name.toLowerCase().includes('liquidacion') || 
      tag.name.toLowerCase().includes('liquidación')
    )

    const hasOfertaTag = product.tags?.some(tag => 
      tag.name.toLowerCase().includes('oferta') || 
      tag.name.toLowerCase().includes('descuento')
    )

    if (hasLiquidacionTag) {
      return { text: 'LIQUIDACIÓN', color: 'bg-red-500' }
    }
    
    if (hasOfertaTag || isOnSale) {
      return { text: 'OFERTA', color: 'bg-yellow-500' }
    }

    return null
  }

  const badge = getProductBadge()

  return (
    <div className={`group rounded-lg shadow-sm border overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full ${
      !isInStock 
        ? 'bg-gray-100 border-gray-300 opacity-75'
        : 'bg-pure-white border-border-light hover:border-ceramic-blue'
    }`}>
      
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        {mainImage && !imageError ? (
          <Image
            src={mainImage.src}
            alt={mainImage.alt || product.name}
            fill
            className={`object-cover transition-transform duration-300 ${
              !isInStock 
                ? 'grayscale group-hover:grayscale'
                : 'group-hover:scale-105'
            }`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-gray-400 text-sm">Sin imagen</span>
          </div>
        )}

        {/* Badge */}
        {badge && (
          <div className={`absolute top-3 left-3 ${badge.color} text-pure-white px-2 py-1 text-xs font-bold rounded shadow-sm`}>
            {badge.text}
          </div>
        )}

        {/* Quick Actions */}
        {isInStock && (
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex space-x-2">
              <Link
                href={`/productos/${product.slug}`}
                className="bg-pure-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
              >
                <Eye className="h-4 w-4 text-text-primary" />
              </Link>
              <button className="bg-pure-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors">
                <Heart className="h-4 w-4 text-text-primary" />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CAMBIADO: Product Info con flex-1 para ocupar espacio disponible */}
      <div className="p-4 flex flex-col flex-1">
        {/* Category */}
        {product.categories.length > 0 && (
          <p className={`text-xs font-bold mb-2 uppercase tracking-wider px-2 py-1 rounded-full inline-block w-fit ${
            !isInStock 
              ? 'text-gray-500 bg-gray-200' 
              : 'text-pure-white bg-ceramic-blue bg-opacity-10'
          }`}>
            {product.categories[0].name}
          </p>
        )}

        {/* Product Name */}
        <h3 className={`font-bold mb-2 line-clamp-2 transition-colors duration-300 text-base leading-tight ${
          !isInStock 
            ? 'text-gray-500' 
            : 'text-text-primary group-hover:text-ceramic-blue'
        }`}>
          <Link href={`/productos/${product.slug}`}>
            {product.name}
          </Link>
        </h3>

        {/* Short Description */}
        {product.short_description && (
          <p className={`text-sm mb-3 line-clamp-2 leading-relaxed ${
            !isInStock ? 'text-gray-400' : 'text-text-muted'
          }`}>
            {product.short_description.replace(/<[^>]*>/g, '')}
          </p>
        )}

        {/* AGREGADO: Spacer para empujar precio y botón hacia abajo */}
        <div className="flex-1"></div>

        {/* Price */}
        <div className="flex items-center space-x-2 mb-4">
          {isOnSale ? (
            <>
              <span className={`text-lg font-bold ${
                !isInStock ? 'text-gray-500' : 'text-soft-terracotta'
              }`}>
                {formatPrice(product.sale_price)}
              </span>
              <span className="text-sm text-gray-500 line-through">
                {formatPrice(product.regular_price)}
              </span>
            </>
          ) : (
            <span className={`text-lg font-bold ${
              !isInStock ? 'text-gray-500' : 'text-text-primary'
            }`}>
              {formatPrice(product.price)}
            </span>
          )}
        </div>

        {/* CAMBIADO: Botón siempre al final */}
        <div className="mt-auto">
          <Button
            onClick={handleAddToCart}
            disabled={!isInStock || isLoading}
            loading={isLoading}
            className="w-full"
            size="sm"
            variant={isInStock ? "primary" : "secondary"}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {!isInStock ? 'Agotado' : 'Agregar al Carrito'}
          </Button>
        </div>
      </div>
    </div>
  )
}
