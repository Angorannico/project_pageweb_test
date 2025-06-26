import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../ui/Button'
import { ArrowRight, Shield, Truck, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-secondary-800 leading-tight">
                Cerámicas de
                <span className="text-primary-500 block">
                  Construcción
                </span>
                Profesional
              </h1>
              <p className="text-xl text-secondary-600 leading-relaxed">
                Más de 15 años especializados en cerámicas de alta calidad para 
                constructores y remodeladores profesionales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/tienda">
                  Ver Catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/contacto">
                  Cotizar Proyecto
                </Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-primary-500" />
                <div>
                  <div className="font-semibold text-secondary-800">Garantía</div>
                  <div className="text-sm text-secondary-600">5 años</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Truck className="h-8 w-8 text-primary-500" />
                <div>
                  <div className="font-semibold text-secondary-800">Envío</div>
                  <div className="text-sm text-secondary-600">Gratis mayor a $200k</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-primary-500" />
                <div>
                  <div className="font-semibold text-secondary-800">Calidad</div>
                  <div className="text-sm text-secondary-600">Certificada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/hero-ceramics.jpg"
                alt="Cerámicas de construcción profesional"
                width={600}
                height={500}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-100 rounded-full opacity-20 -z-10" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-accent-100 rounded-full opacity-20 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
