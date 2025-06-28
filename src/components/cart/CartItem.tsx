'use client'

import Image from 'next/image'
import Link from 'next/link'
import { CartItem as CartItemType } from '../../lib/types'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'
import { Minus, Plus, Trash2 } from 'lucide-react'
import { Button } from '../ui/Button'

interface CartItemProps {
  item: CartItemType
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart()
  const { product, quantity } = item

  const mainImage = product.images[0]
  const itemTotal = parseFloat(product.price) * quantity

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(item.id)
    } else {
      updateQuantity(item.id, newQuantity)
    }
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="flex items-start space-x-4">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <Link href={`/productos/${product.slug}`}>
            <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden">
              {mainImage ? (
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt || product.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                  Sin imagen
                </div>
              )}
            </div>
          </Link>
        </div>

        {/* Product Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-semibold text-secondary-800 mb-1">
                <Link 
                  href={`/productos/${product.slug}`}
                  className="hover:text-primary-500 transition-colors"
                >
                  {product.name}
                </Link>
              </h3>
              {product.sku && (
                <p className="text-sm text-secondary-500 mb-2">SKU: {product.sku}</p>
              )}
              <p className="text-lg font-bold text-secondary-800">
                {formatPrice(product.price)}
              </p>
            </div>

            {/* Remove Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => removeItem(item.id)}
              className="text-red-500 border-red-500 hover:text-red-700 hover:bg-red-50"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium text-secondary-700">Cantidad:</span>
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className="px-2 py-1 hover:bg-gray-50 transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-3 py-1 text-center min-w-[3rem]">
                  {quantity}
                </span>
                <button
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className="px-2 py-1 hover:bg-gray-50 transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Item Total */}
            <div className="text-right">
              <p className="text-sm text-secondary-600">Subtotal</p>
              <p className="text-lg font-bold text-secondary-800">
                {formatPrice(itemTotal)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
