'use client'

import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { CheckoutForm } from '../../components/checkout/CheckoutForm'
import { OrderSummary } from '../../components/checkout/OrderSummary'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { redirect } from 'next/navigation'

export default function CheckoutPage() {
  const { items, itemCount, total } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  // AGREGADO: Verificar si el carrito está vacío
  if (itemCount === 0) {
    return (
      <div className="min-h-screen bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb 
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Carrito', href: '/carrito' },
              { label: 'Checkout', href: '/checkout' }
            ]} 
          />

          <div className="mt-8 text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5-6m0 0h15M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Tu carrito está vacío
            </h2>
            <p className="text-text-muted mb-8">
              Agrega algunos productos antes de proceder al checkout
            </p>
            <a
              href="/tienda"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold bg-ceramic-blue hover:bg-hover-blue text-pure-white rounded-lg transition-all duration-300"
            >
              Ir a la Tienda
            </a>
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
            { label: 'Carrito', href: '/carrito' },
            { label: 'Checkout', href: '/checkout' }
          ]} 
        />

        <div className="mt-8">
          <h1 className="text-3xl font-display font-bold text-text-primary mb-8">
            Finalizar Compra
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <CheckoutForm 
                isProcessing={isProcessing} 
                setIsProcessing={setIsProcessing} 
              />
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <OrderSummary items={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
