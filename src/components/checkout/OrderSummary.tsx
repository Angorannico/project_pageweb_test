import Image from 'next/image'
import { CartItem } from '../../lib/types'
import { formatPrice } from '../../lib/utils'
import { useCart } from '../../context/CartContext'

interface OrderSummaryProps {
  items: CartItem[]
}

export function OrderSummary({ items }: OrderSummaryProps) {
  const { subtotal, tax, shipping, total, itemCount } = useCart()

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-8">
      <h2 className="text-xl font-display font-bold text-secondary-800 mb-6">
        Resumen del Pedido
      </h2>

      {/* Order Items */}
      <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
        {items.map((item) => {
          const mainImage = item.product.images[0]
          const itemTotal = parseFloat(item.product.price) * item.quantity

          return (
            <div key={item.id} className="flex items-center space-x-3">
              <div className="relative w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                {mainImage ? (
                  <Image
                    src={mainImage.src}
                    alt={mainImage.alt || item.product.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                    Sin imagen
                  </div>
                )}
                <div className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {item.quantity}
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-secondary-800 truncate">
                  {item.product.name}
                </h4>
                <p className="text-sm text-secondary-600">
                  {formatPrice(item.product.price)} × {item.quantity}
                </p>
              </div>
              
              <div className="text-right">
                <p className="font-semibold text-secondary-800">
                  {formatPrice(itemTotal)}
                </p>
              </div>
            </div>
          )
        })}
      </div>

      {/* Order Totals */}
      <div className="space-y-3 border-t border-gray-200 pt-6">
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

        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold text-secondary-800">Total</span>
            <span className="text-2xl font-bold text-secondary-800">
              {formatPrice(total)}
            </span>
          </div>
        </div>
      </div>

      {/* Security Badges */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="space-y-2 text-sm text-secondary-600">
          <div className="flex items-center space-x-2">
            <span>🔒</span>
            <span>Pago 100% seguro</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>🛡️</span>
            <span>Protección SSL</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>↩️</span>
            <span>Garantía de devolución</span>
          </div>
        </div>
      </div>
    </div>
  )
}
