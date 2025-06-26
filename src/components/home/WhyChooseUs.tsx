import { Shield, Truck, Award, Users, Clock, ThumbsUp } from 'lucide-react'

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: 'Garantía de Calidad',
      description: '5 años de garantía en todos nuestros productos cerámicos'
    },
    {
      icon: Truck,
      title: 'Envío Gratis',
      description: 'Envío gratuito en compras superiores a $200.000'
    },
    {
      icon: Award,
      title: 'Productos Certificados',
      description: 'Cerámicas con certificación de calidad internacional'
    },
    {
      icon: Users,
      title: 'Asesoría Profesional',
      description: 'Equipo de expertos para ayudarte en tu proyecto'
    },
    {
      icon: Clock,
      title: 'Entrega Rápida',
      description: 'Entrega en 24-48 horas en Bogotá y alrededores'
    },
    {
      icon: ThumbsUp,
      title: '15+ Años de Experiencia',
      description: 'Más de una década sirviendo a profesionales'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-secondary-800 mb-4">
            ¿Por Qué Elegir 3C?
          </h2>
          <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
            Somos el socio confiable para tus proyectos de construcción
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors group"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
