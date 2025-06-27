import { ArrowRight, Shield, Truck, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-secondary-50 via-pureWhite to-secondary-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-textPrimary leading-tight">
                Cerámicas de
                <span className="text-soft-terracotta block animate-fade-in">
                  Construcción
                </span>
                <span className="text-softTerracotta">Profesional</span>
              </h1>
              <p className="text-xl text-textSecondary leading-relaxed font-medium">
                Más de 15 años especializados en cerámicas de alta calidad para 
                constructores y remodeladores profesionales.
              </p>
            </div>

            {/* CORREGIDO: Botones con colores específicos */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/tienda"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold hover:bg-hoverBlue text-pureWhite rounded-lg transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:shadow-lg group hover:border-hoverBlue"
              >
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-softTerracotta hover:bg-soft-terracotta text-pureWhite rounded-lg transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:shadow-lg border border-softTerracotta hover:border-accent-600 hover:text-pure-white"
              >
                Cotizar Proyecto
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-borderLight">
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-ceramicBlue bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                  <Shield className="h-8 w-8 text-ceramicBlue" />
                </div>
                <div>
                  <div className="font-bold text-textPrimary">Garantía</div>
                  <div className="text-sm text-textMuted">5 años</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-softTerracotta bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                  <Truck className="h-8 w-8 text-softTerracotta" />
                </div>
                <div>
                  <div className="font-bold text-textPrimary">Envío</div>
                  <div className="text-sm text-textMuted">Gratis mas de $200k</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
                <div className="p-3 bg-logoBrown bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                  <Award className="h-8 w-8 text-logoBrown" />
                </div>
                <div>
                  <div className="font-bold text-textPrimary">Calidad</div>
                  <div className="text-sm text-textMuted">Certificada</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-[4/3] bg-gradient-to-br from-lightGray to-secondary-100 rounded-2xl shadow-lg flex items-center justify-center border border-borderLight">
                <div className="text-center">
                  <div className="text-6xl mb-4 animate-bounce-subtle">🏗️</div>
                  <p className="text-textPrimary font-semibold text-lg">Imagen Hero</p>
                  <p className="text-sm text-textMuted">Cerámicas Profesionales</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-ceramicBlue bg-opacity-5 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-softTerracotta bg-opacity-5 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
