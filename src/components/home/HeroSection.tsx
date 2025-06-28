import Image from 'next/image'
import { ArrowRight, Shield, Truck, Award } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-display font-bold text-text-primary leading-tight">
                Cerámicas de
                <span className="text-ceramic-blue block animate-fade-in">
                  Construcción
                </span>
                <span className="text-soft-terracotta">Profesional</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed font-medium">
                Más de 15 años especializados en cerámicas de alta calidad para 
                constructores y remodeladores profesionales.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Botón Ver Catálogo - Azul con hover azul más oscuro */}
              <a
                href="/tienda"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-ceramic-blue hover:bg-hover-blue text-pure-white rounded-lg transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:shadow-hover-glow group border border-ceramic-blue hover:border-hover-blue"
              >
                Ver Catálogo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              
              {/* Botón Cotizar Proyecto - Terracota con texto blanco */}
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-soft-terracotta hover:bg-accent-600 text-pure-white rounded-lg transition-all duration-300 ease-out hover:transform hover:-translate-y-1 hover:shadow-terracotta-lg border border-soft-terracotta hover:border-accent-600"
              >
                Cotizar Proyecto
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border-light">
              <div className="flex items-center space-x-3 group">
              <div className="p-3 bg-ceramicBlue bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                  <Shield className="h-8 w-8 text-ceramic-blue" />
                </div>
                <div>
                  <div className="font-bold text-text-primary">Garantía</div>
                  <div className="text-sm text-text-muted">5 años</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
              <div className="p-3 bg-softTerracotta bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                  <Truck className="h-8 w-8 text-soft-terracotta" />
                </div>
                <div>
                  <div className="font-bold text-text-primary">Envío</div>
                  <div className="text-sm text-text-muted">Gratis apartir de los $200k</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 group">
              <div className="p-3 bg-logoBrown bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                  <Award className="h-8 w-8 text-logo-brown" />
                </div>
                <div>
                  <div className="font-bold text-text-primary">Calidad</div>
                  <div className="text-sm text-text-muted">Certificada</div>
                </div>
              </div>
            </div>
          </div>

          {/* ACTUALIZADO: Hero Image con imagen real */}
          <div className="relative">
            <div className="relative z-10">
              {/* CAMBIADO: Reemplazado el placeholder por la imagen real */}
              <div className="aspect-[4/3] rounded-2xl shadow-ceramic-lg overflow-hidden border border-border-light group hover:shadow-ceramic-lg transition-all duration-300">
                <Image
                  src="/imagen_hero.png"
                  alt="Cerámicas de construcción profesional - 3C Centro Cerámico Capital"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  priority
                  quality={90}
                />
                {/* AGREGADO: Overlay sutil para mejorar legibilidad si hay texto sobre la imagen */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
            
            {/* Decorative elements - Mantenidos para el efecto visual */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-ceramic-blue bg-opacity-5 rounded-full animate-float" />
            <div className="absolute -bottom-8 -left-8 w-96 h-96 bg-soft-terracotta bg-opacity-5 rounded-full" />
            
            {/* AGREGADO: Elemento decorativo adicional que complementa la imagen */}
            <div className="absolute top-1/2 -left-4 w-8 h-8 bg-soft-terracotta rounded-full opacity-20 animate-bounce-subtle" />
            <div className="absolute bottom-1/4 -right-2 w-6 h-6 bg-ceramic-blue rounded-full opacity-30" />
          </div>
        </div>
      </div>
    </section>
  )
}
