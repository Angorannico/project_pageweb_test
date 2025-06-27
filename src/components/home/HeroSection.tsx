import { ArrowRight, Shield, Truck, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
          <div className="space-y-4">
  <h1 className="text-4xl lg:text-6xl font-display font-bold text-text-primary leading-tight">
    {/* CAMBIADO: text-dark-gray por text-text-primary */}
    Cerámicas de
    <span className="text-ceramic-blue block animate-fade-in">
      Construcción
    </span>
    <span className="text-soft-terracotta">Profesional</span>
  </h1>
  <p className="text-xl text-text-secondary leading-relaxed font-medium">
    {/* CAMBIADO: text-secondary-600 por text-text-secondary */}
    Más de 15 años especializados en cerámicas de alta calidad para 
    constructores y remodeladores profesionales.
  </p>
</div>


            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/tienda"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary-500 hover:bg-primary-600  hover:text-accent-500 focus:ring-primary-500 rounded-lg"
              >
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 border-2 border-primary-500 text-primary-500 hover:text-soft-terracotta hover:border-soft-terracotta hover:-translate-y-1 hover:shadow-lg focus:ring-primary-500 rounded-lg"
              >
                Cotizar Proyecto
              </a>
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
                  <div className="text-sm text-secondary-600">Gratis &gt;$200k</div>
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
              <div className="aspect-[4/3] bg-gray-200 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏗️</div>
                  <p className="text-gray-600">Imagen Hero</p>
                  <p className="text-sm text-gray-500">600x500px</p>
                </div>
              </div>
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

