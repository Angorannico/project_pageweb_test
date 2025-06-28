'use client'

import { useCart } from '../../context/CartContext'
import { CartItem } from '../../components/cart/CartItem'
import { CartSummary } from '../../components/cart/CartSummary'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'

export default function CarritoPage() {
  const { items, itemCount } = useCart()

  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb 
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Carrito', href: '/carrito' }
            ]} 
          />

          <div className="mt-8 text-center py-16">
            <div className="text-gray-400 mb-4">
              <ShoppingCart className="mx-auto h-16 w-16" />
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-text-muted mb-8">
              Agrega algunos productos para comenzar tu compra
            </p>
            <Link
              href="/tienda"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-ceramic-blue hover:bg-hover-blue text-pure-white rounded-lg transition-all duration-300"
            >
              Ir a la Tienda
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Carrito', href: '/carrito' }
          ]} 
        />

        <div className="mt-8">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-8">
            Carrito de Compras
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
