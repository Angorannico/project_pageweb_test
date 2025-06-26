'use client'

import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { CheckoutForm } from '../../components/checkout/CheckoutForm'
import { OrderSummary } from '../../components/checkout/OrderSummary'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { redirect } from 'next/navigation'

export default function CheckoutPage() {
  const { items, itemCount } = useCart()
  const [isProcessing, setIsProcessing] = useState(false)

  // Redirect if cart is empty
  if (itemCount === 0) {
    redirect('/carrito')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Carrito', href: '/carrito' },
            { label: 'Checkout', href: '/checkout' }
          ]} 
        />

        <div className="mt-8">
          <h1 className="text-3xl font-display font-bold text-secondary-800 mb-8">
            Finalizar Compra
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Checkout Form */}
            <div>
              <CheckoutForm 
                isProcessing={isProcessing}
                setIsProcessing={setIsProcessing}
              />
            </div>

            {/* Order Summary */}
            <div>
              <OrderSummary items={items} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
