'use client'

import { useCart } from '../../context/CartContext'
import { Button } from '../ui/Button'
import { formatPrice } from '../../lib/utils'
import { ShoppingCart, ArrowRight } from 'lucide-react'

export function CartSummary() {
  const { subtotal, tax, shipping, total, itemCount } = useCart()

  const handleCheckout = () => {
    window.location.href = '/checkout'
  }

  const handleContinueShopping = () => {
    window.location.href = '/tienda'
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
      <h2 className="text-xl font-display font-bold text-secondary-800 mb-6">
        Resumen del Pedido
      </h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-secondary-600">Subtotal ({itemCount} productos)</span>
          <span className="font-semibold">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-secondary-600">IVA (19%)</span>
          <span className="font-semibold">{formatPrice(tax)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-secondary-600">Envío</span>
          <span className="font-semibold">
            {shipping === 0 ? (
              <span className="text-green-600">Gratis</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>

        {shipping === 0 && subtotal > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-3">
            <p className="text-sm text-green-700">
              🎉 ¡Felicidades! Tienes envío gratis
            </p>
          </div>
        )}

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-secondary-800">Total</span>
            <span className="text-2xl font-bold text-secondary-800">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <Button 
          onClick={handleCheckout}
          className="w-full" 
          size="lg"
        >
          Proceder al Checkout
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>

        <Button 
          variant="outline" 
          onClick={handleContinueShopping}
          className="w-full"
        >
          <ShoppingCart className="mr-2 h-4 w-4" />
          Continuar Comprando
        </Button>
      </div>

      {/* Trust Indicators */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-2 text-sm text-secondary-600">
          <div className="flex items-center space-x-2">
            <span>🔒</span>
            <span>Compra 100% segura</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🚚</span>
            <span>Envío gratis en compras &gt;$200k</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>↩️</span>
            <span>30 días para devoluciones</span>
          </div>
        </div>
      </div>
    </div>
  )
}

