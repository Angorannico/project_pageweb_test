import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { 
  Shield, 
  Lock, 
  Eye, 
  FileText, 
  Clock, 
  Globe, 
  Users, 
  Settings,
  AlertTriangle,
  CheckCircle,
  Mail,
  Phone
} from 'lucide-react'

export default function PrivacidadPage() {
  const sections = [
    {
      id: 'identificacion',
      title: '1. Identificación del Responsable',
      icon: FileText,
      content: (
        <div className="space-y-4">
          <div className="bg-secondary-50 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-muted mb-1">Razón social</p>
                <p className="font-semibold text-text-primary">3C - Centro Cerámico Capital S.A.S.</p>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">NIT</p>
                <p className="font-semibold text-text-primary">900.123.456-7</p>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Dirección</p>
                <p className="font-semibold text-text-primary">Calle 55 #00A-00, Barrio, Bogotá, Colombia</p>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Contacto</p>
                <p className="font-semibold text-text-primary">
                  <a href="mailto:info@angoran.com" className="text-ceramic-blue hover:underline">info@angoran.com</a><br />
                  <a href="tel:+5715552355" className="text-ceramic-blue hover:underline">(1) 555 2355</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'datos-recopilados',
      title: '2. Datos Personales que Recopilamos',
      icon: Users,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            Recopilamos los siguientes datos personales a través de formularios web, cookies y herramientas de análisis:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Nombre',
              'Correo electrónico',
              'Teléfono',
              'Dirección de entrega',
              'Dirección IP',
              'Datos de pago (procesados por pasarela segura)',
              'Historial de compras'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'finalidad',
      title: '3. Finalidad del Tratamiento',
      icon: Eye,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            Tratamos tus datos personales para las siguientes finalidades:
          </p>
          <div className="space-y-3">
            {[
              { title: 'Gestión de pedidos y entregas', desc: 'Procesamiento y seguimiento de tus compras' },
              { title: 'Atención al cliente', desc: 'Soporte técnico y resolución de consultas' },
              { title: 'Envío de comunicaciones comerciales', desc: 'Solo con tu consentimiento previo' },
              { title: 'Análisis interno y mejora del servicio', desc: 'Optimización de la experiencia de usuario' }
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-ceramic-blue pl-4">
                <h4 className="font-semibold text-text-primary">{item.title}</h4>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'base-legal',
      title: '4. Base Legal para el Tratamiento',
      icon: Scale,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            El tratamiento de tus datos se realiza con base en:
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Tu consentimiento</h4>
              <p className="text-blue-700 text-sm">Al aceptar la política y completar formularios</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Cumplimiento de obligaciones contractuales</h4>
              <p className="text-green-700 text-sm">Procesar pedidos y entregas</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2">Cumplimiento de obligaciones legales</h4>
              <p className="text-orange-700 text-sm">Facturación y garantías</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'destinatarios',
      title: '5. Destinatarios de los Datos',
      icon: Share2,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            Tus datos pueden ser compartidos con:
          </p>
          <div className="space-y-3">
            {[
              'Proveedores de servicios de pago (Wompi, MercadoPago)',
              'Empresas de mensajería para la entrega de productos',
              'Proveedores de hosting y análisis web'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="p-1 bg-ceramic-blue bg-opacity-10 rounded-full mt-1">
                  <div className="w-2 h-2 bg-ceramic-blue rounded-full"></div>
                </div>
                <span className="text-text-secondary">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <p className="font-semibold text-red-800">No vendemos tus datos a terceros.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'transferencias',
      title: '6. Transferencias Internacionales',
      icon: Globe,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            Algunos datos pueden ser procesados fuera de Colombia (por ejemplo, servidores de correo o herramientas de análisis), 
            siempre bajo estándares de seguridad adecuados.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <Shield className="h-5 w-5 text-yellow-600 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-800">Garantías de Seguridad</h4>
                <p className="text-yellow-700 text-sm">
                  Todas las transferencias se realizan bajo estándares internacionales de protección de datos.
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'conservacion',
      title: '7. Plazo de Conservación',
      icon: Clock,
      content: (
        <div className="space-y-4">
          <div className="bg-secondary-50 rounded-lg p-6 text-center">
            <Clock className="h-12 w-12 text-ceramic-blue mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-text-primary mb-2">5 años</h4>
            <p className="text-text-secondary">
              Conservamos tus datos durante la relación comercial y hasta 5 años después de la última transacción, 
              salvo obligación legal diferente.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'derechos',
      title: '8. Derechos de los Usuarios',
      icon: Settings,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            Puedes ejercer los siguientes derechos enviando una solicitud a{' '}
            <a href="mailto:info@angoran.com" className="text-ceramic-blue hover:underline font-semibold">
              info@angoran.com
            </a>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { right: 'Acceso', desc: 'Conocer qué datos tenemos sobre ti' },
              { right: 'Rectificación', desc: 'Corregir datos inexactos' },
              { right: 'Cancelación', desc: 'Eliminar tus datos personales' },
              { right: 'Oposición', desc: 'Oponerte al tratamiento' },
              { right: 'Portabilidad', desc: 'Obtener una copia de tus datos' },
              { right: 'Olvido', desc: 'Ser olvidado en nuestros sistemas' }
            ].map((item, index) => (
              <div key={index} className="border border-border-light rounded-lg p-4 hover:border-ceramic-blue transition-colors">
                <h4 className="font-semibold text-text-primary mb-1">{item.right}</h4>
                <p className="text-sm text-text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Política de Privacidad', href: '/privacidad' }
          ]} 
        />

        {/* Header */}
        <div className="text-center mt-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-16 w-16 text-ceramic-blue" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-text-secondary mb-4">
            3C - Centro Cerámico Capital
          </p>
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 rounded-full px-4 py-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-green-700 text-sm font-semibold">
              Vigente desde el 27 de junio de 2025
            </span>
          </div>
        </div>

        {/* Tabla de Contenidos */}
        <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-6 mb-8">
          <h2 className="text-xl font-display font-bold text-text-primary mb-4">
            Tabla de Contenidos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {sections.map((section, index) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary-50 transition-colors group"
              >
                <section.icon className="h-4 w-4 text-ceramic-blue group-hover:scale-110 transition-transform" />
                <span className="text-text-secondary group-hover:text-ceramic-blue transition-colors text-sm">
                  {section.title}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              id={section.id}
              className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-pure-white bg-opacity-10 rounded-xl">
                  <section.icon className="h-6 w-6 text-ceramic-blue" />
                </div>
                <h2 className="text-2xl font-display font-bold text-text-primary">
                  {section.title}
                </h2>
              </div>
              {section.content}
            </div>
          ))}

          {/* Secciones Adicionales */}
          <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-soft-terracotta bg-opacity-10 rounded-xl">
                <Lock className="h-6 w-6 text-soft-terracotta" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                9. Medidas de Seguridad
              </h2>
            </div>
            <div className="space-y-4">
              <p className="text-text-secondary">Implementamos las siguientes medidas de seguridad:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: 'Encriptación de datos sensibles', icon: '🔐' },
                  { title: 'Acceso restringido', icon: '🚪' },
                  { title: 'Monitoreo regular de la infraestructura', icon: '📊' },
                  { title: 'Uso de pasarelas de pago certificadas', icon: '💳' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-secondary-50 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-text-secondary">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Información sobre Menores */}
          <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-red-100 rounded-xl">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                12. Información sobre Menores
              </h2>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <p className="text-red-800 font-semibold mb-2">
                No recopilamos datos de menores de 18 años.
              </p>
              <p className="text-red-700">
                Si detectamos información de menores, la eliminaremos inmediatamente.
              </p>
            </div>
          </div>

          {/* Contacto y Reclamaciones */}
          <div className="bg-gradient-to-r from-ceramic-blue to-primary-600 rounded-xl p-8 text-center">
            <Mail className="h-12 w-12 text-pure-white mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-pure-white mb-4">
              ¿Tienes preguntas sobre tu privacidad?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Puedes presentar quejas o reclamaciones sobre el tratamiento de tus datos o contactarnos 
              para ejercer tus derechos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@angoran.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-pure-white text-ceramic-blue rounded-lg font-semibold hover:bg-secondary-50 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@angoran.com
              </a>
              <a
                href="tel:+5715552355"
                className="inline-flex items-center justify-center px-6 py-3 bg-pure-white text-ceramic-blue rounded-lg font-semibold hover:bg-secondary-50 transition-colors"
              >
                <Phone className="h-4 w-4 mr-2" />
                (1) 555 2355
              </a>
            </div>
            <p className="text-blue-100 text-sm mt-4">
              También puedes presentar quejas ante la Superintendencia de Industria y Comercio
            </p>
          </div>

          {/* Actualizaciones */}
          <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
            <div className="text-center">
              <div className="p-4 bg-yellow-100 rounded-full w-fit mx-auto mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary mb-4">
                14. Actualizaciones de la Política
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Esta política puede ser actualizada. Las modificaciones serán notificadas en el sitio web y, 
                si corresponde, por correo electrónico a los usuarios registrados.
              </p>
            </div>
          </div>
        </div>

        {/* Footer de la página */}
        <div className="mt-12 text-center text-text-muted">
          <p className="text-sm">
            Última actualización: 27 de junio de 2025 | 
            <a href="/contacto" className="text-ceramic-blue hover:underline ml-1">
              Contactar soporte
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

// Componente Scale que faltaba
function Scale({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  )
}

function Share2({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
    </svg>
  )
}
