'use client'

import { useState } from 'react'
import { Product } from '../../lib/types'
import { Button } from '../ui/Button'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../lib/utils'
import { ShoppingCart, Heart, Share2, Truck, Shield, Award } from 'lucide-react'

interface ProductInfoProps {
  product: Product
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  const isOnSale = product.on_sale && product.sale_price
  const isInStock = product.stock_status === 'instock'
  const stockQuantity = product.stock_quantity

  const handleAddToCart = async () => {
    setIsLoading(true)
    try {
      addItem(product, quantity)
      // Aquí podrías agregar una notificación de éxito
    } catch (error) {
      console.error('Error adding to cart:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 1 && (!stockQuantity || newQuantity <= stockQuantity)) {
      setQuantity(newQuantity)
    }
  }

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <div>
        <h1 className="text-3xl font-display font-bold text-secondary-800 mb-2">
          {product.name}
        </h1>
        {product.sku && (
          <p className="text-sm text-secondary-500">SKU: {product.sku}</p>
        )}
      </div>

      {/* Price */}
      <div className="flex items-center space-x-4">
        {isOnSale ? (
          <>
            <span className="text-3xl font-bold text-accent-500">
              {formatPrice(product.sale_price)}
            </span>
            <span className="text-xl text-gray-500 line-through">
              {formatPrice(product.regular_price)}
            </span>
            <span className="bg-accent-100 text-accent-700 px-2 py-1 rounded text-sm font-semibold">
              -{Math.round(((parseFloat(product.regular_price) - parseFloat(product.sale_price)) / parseFloat(product.regular_price)) * 100)}%
            </span>
          </>
        ) : (
          <span className="text-3xl font-bold text-secondary-800">
            {formatPrice(product.price)}
          </span>
        )}
      </div>

      {/* Stock Status */}
      <div className="flex items-center space-x-2">
        <div className={`w-3 h-3 rounded-full ${isInStock ? 'bg-green-500' : 'bg-red-500'}`} />
        <span className={`font-medium ${isInStock ? 'text-green-700' : 'text-red-700'}`}>
          {isInStock ? 'En stock' : 'Agotado'}
          {stockQuantity && isInStock && (
            <span className="text-secondary-500 ml-1">
              ({stockQuantity} disponibles)
            </span>
          )}
        </span>
      </div>

      {/* Short Description */}
      {product.short_description && (
        <div 
          className="text-secondary-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: product.short_description }}
        />
      )}

      {/* Quantity and Add to Cart */}
      {isInStock && (
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <label className="font-medium text-secondary-700">Cantidad:</label>
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button
                onClick={() => handleQuantityChange(quantity - 1)}
                className="px-3 py-2 hover:bg-gray-50 transition-colors"
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                className="w-16 text-center py-2 border-0 focus:ring-0"
                min="1"
                max={stockQuantity || undefined}
              />
              <button
                onClick={() => handleQuantityChange(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-50 transition-colors"
                disabled={stockQuantity ? quantity >= stockQuantity : false}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button
              onClick={handleAddToCart}
              loading={isLoading}
              className="flex-1"
              size="lg"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              Agregar al Carrito
            </Button>
            <Button variant="outline" size="lg">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg">
              <Share2 className="h-5 w-5" />
            </Button>
          </div>
        </div>
      )}

      {/* Product Features */}
      <div className="border-t border-gray-200 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <Truck className="h-6 w-6 text-primary-500" />
            <div>
              <div className="font-medium text-secondary-800">Envío Gratis</div>
              <div className="text-sm text-secondary-600">En compras mayor a $200k</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Shield className="h-6 w-6 text-primary-500" />
            <div>
              <div className="font-medium text-secondary-800">Garantía</div>
              <div className="text-sm text-secondary-600">5 años</div>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Award className="h-6 w-6 text-primary-500" />
            <div>
              <div className="font-medium text-secondary-800">Calidad</div>
              <div className="text-sm text-secondary-600">Certificada</div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      {product.categories.length > 0 && (
        <div className="border-t border-gray-200 pt-6">
          <div className="flex items-center space-x-2">
            <span className="font-medium text-secondary-700">Categorías:</span>
            <div className="flex flex-wrap gap-2">
              {product.categories.map((category) => (
                <span
                  key={category.id}
                  className="bg-gray-100 text-secondary-600 px-2 py-1 rounded text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {category.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
