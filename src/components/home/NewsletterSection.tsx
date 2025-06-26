'use client'

import { useState } from 'react'
import { Button } from '../ui/Button'
import { Mail, CheckCircle } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Aquí integrarías con tu servicio de email marketing
      // Por ejemplo: Mailchimp, ConvertKit, etc.
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulación
      
      setIsSubscribed(true)
      setEmail('')
    } catch (error) {
      console.error('Error subscribing:', error)
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubscribed) {
    return (
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-display font-bold text-secondary-800 mb-2">
              ¡Suscripción Exitosa!
            </h2>
            <p className="text-secondary-600">
              Te mantendremos informado sobre nuestras mejores ofertas y productos nuevos.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 lg:p-12 text-center shadow-lg">
          <Mail className="h-16 w-16 text-primary-500 mx-auto mb-6" />
          
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary-800 mb-4">
            Mantente Informado
          </h2>
          
          <p className="text-lg text-secondary-600 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe ofertas exclusivas, 
            nuevos productos y consejos profesionales directamente en tu email.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu email profesional"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Button
                type="submit"
                loading={isLoading}
                disabled={isLoading}
                className="px-6"
              >
                Suscribirse
              </Button>
            </div>
          </form>

          <p className="text-sm text-secondary-500 mt-4">
            No spam. Puedes cancelar en cualquier momento.
          </p>
        </div>
      </div>
    </section>
  )
}
