import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { 
  FileText, 
  Building, 
  Users, 
  Package, 
  UserCheck, 
  ShoppingCart,
  CreditCard,
  Truck,
  RotateCcw,
  Shield,
  AlertTriangle,
  Copyright,
  Edit,
  Gavel,
  Lock,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react'

export default function TerminosPage() {
  const sections = [
    {
      id: 'identificacion',
      title: '1. Identificación del Propietario',
      icon: Building,
      content: (
        <div className="space-y-4">
          <div className="bg-secondary-50 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-text-muted mb-1">Nombre legal</p>
                <p className="font-semibold text-text-primary">3C - Centro Cerámico Capital S.A.S.</p>
              </div>
              <div>
                <p className="text-sm text-text-muted mb-1">Nombre comercial</p>
                <p className="font-semibold text-text-primary">3C - Centro Cerámico Capital</p>
              </div>
              <div className="md:col-span-2">
                <p className="text-sm text-text-muted mb-2">Información de contacto</p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-ceramic-blue" />
                    <span className="text-text-primary">Calle 55 #00A-00, Barrio, Bogotá, Colombia</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-ceramic-blue" />
                    <a href="mailto:info@angoran.com" className="text-ceramic-blue hover:underline">info@angoran.com</a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-ceramic-blue" />
                    <a href="tel:+5715552355" className="text-ceramic-blue hover:underline">(1) 555 2355</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'definiciones',
      title: '2. Definiciones de las Partes',
      icon: Users,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Usuario
              </h4>
              <p className="text-blue-700 text-sm">Visitante o comprador del sitio web</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <UserCheck className="h-4 w-4 mr-2" />
                Cliente
              </h4>
              <p className="text-green-700 text-sm">Persona que realiza una compra</p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                <Building className="h-4 w-4 mr-2" />
                Empresa
              </h4>
              <p className="text-orange-700 text-sm">3C - Centro Cerámico Capital S.A.S.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'servicios',
      title: '3. Descripción de Bienes y Servicios',
      icon: Package,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary">
            Ofrecemos la venta de cerámicas, porcelanatos, revestimientos y productos complementarios 
            para pisos y paredes, en diferentes formatos, colores y acabados.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="h-5 w-5 text-yellow-600 mt-1" />
              <div>
                <h4 className="font-semibold text-yellow-800">Importante</h4>
                <p className="text-yellow-700 text-sm">
                  La disponibilidad está sujeta a inventario y confirmación de pago.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {[
              { name: 'Cerámicas', icon: '🏺' },
              { name: 'Porcelanatos', icon: '⬜' },
              { name: 'Revestimientos', icon: '🧱' },
              { name: 'Complementarios', icon: '🔧' }
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-secondary-50 rounded-lg">
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm font-semibold text-text-primary">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'usuarios',
      title: '4. Perfil de Usuarios y Requisitos',
      icon: UserCheck,
      content: (
        <div className="space-y-4 ">
          <div className="space-y-4 ">
            <div className="flex items-start space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-1" />
              <div>
                <h4 className="font-semibold text-blue-800">Edad mínima</h4>
                <p className="text-blue-700 text-sm">El sitio está dirigido a personas mayores de 18 años</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
              <div>
                <h4 className="font-semibold text-green-800">Ubicación</h4>
                <p className="text-green-700 text-sm">Residentes en Colombia</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-orange-50 border border-orange-200 rounded-lg">
              <CheckCircle className="h-5 w-5 text-orange-600 mt-1" />
              <div>
                <h4 className="font-semibold text-orange-800">Registro</h4>
                <p className="text-orange-700 text-sm">Para comprar, es necesario registrarse con datos verídicos</p>
              </div>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-red-500" />
              <p className="font-semibold text-red-800">
                El usuario es responsable de la veracidad de la información suministrada.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'compra',
      title: '5. Proceso de Compra y Contratación',
      icon: ShoppingCart,
      content: (
        <div className="space-y-4">
          <p className="text-text-secondary mb-6">
            Proceso paso a paso para realizar una compra:
          </p>
          <div className="space-y-4">
            {[
              { step: '1', title: 'Selección', desc: 'El usuario selecciona productos' },
              { step: '2', title: 'Carrito', desc: 'Los añade al carrito de compras' },
              { step: '3', title: 'Datos', desc: 'Ingresa datos de entrega y pago' },
              { step: '4', title: 'Confirmación', desc: 'Confirma la orden de compra' },
              { step: '5', title: 'Notificación', desc: 'Recibe un correo de confirmación' }
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                <div className="w-8 h-8 bg-ceramic-blue text-pure-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-text-primary">{item.title}</h4>
                  <p className="text-text-muted text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>Nota:</strong> Los errores pueden corregirse antes del pago final.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'precios',
      title: '6. Precios y Pagos',
      icon: CreditCard,
      content: (
        <div className="space-y-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h4 className="font-semibold text-green-800 mb-2">Moneda y Impuestos</h4>
            <p className="text-green-700 text-sm">
              Todos los precios están expresados en pesos colombianos (COP) e incluyen IVA.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-text-primary mb-3">Métodos de pago aceptados:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                { method: 'Tarjetas de crédito/débito', icon: '💳' },
                { method: 'PSE', icon: '🏦' },
                { method: 'Pago contra entrega', icon: '📦' },
                { method: 'Transferencias bancarias', icon: '💸' }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 border border-border-light rounded-lg">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-text-secondary">{item.method}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-yellow-800 text-sm">
              <strong>Importante:</strong> El pago debe ser confirmado para procesar el pedido.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'envios',
      title: '7. Envíos y Entregas',
      icon: Truck,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Cobertura
              </h4>
              <p className="text-blue-700 text-sm">Bogotá y municipios cercanos</p>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Tiempo de entrega
              </h4>
              <p className="text-green-700 text-sm">2 a 5 días hábiles</p>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3 p-4 bg-secondary-50 rounded-lg">
              <Truck className="h-5 w-5 text-ceramic-blue mt-1" />
              <div>
                <h4 className="font-semibold text-text-primary">Costo de envío</h4>
                <p className="text-text-muted text-sm">Se calcula según el peso y la zona de entrega</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 p-4 bg-secondary-50 rounded-lg">
              <Package className="h-5 w-5 text-ceramic-blue mt-1" />
              <div>
                <h4 className="font-semibold text-text-primary">Recogida en bodega</h4>
                <p className="text-text-muted text-sm">El cliente puede optar por recoger su pedido en la bodega principal</p>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'devoluciones',
      title: '8. Política de Devoluciones y Reembolsos',
      icon: RotateCcw,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h4 className="font-semibold text-orange-800 mb-2 flex items-center">
                <RotateCcw className="h-4 w-4 mr-2" />
                Plazo para devoluciones
              </h4>
              <p className="text-orange-700 text-sm">Hasta 7 días después de la entrega</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                <CreditCard className="h-4 w-4 mr-2" />
                Plazo para reembolsos
              </h4>
              <p className="text-blue-700 text-sm">5 días hábiles tras verificación</p>
            </div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <h4 className="font-semibold text-red-800 mb-2">Condiciones para devolución</h4>
            <ul className="text-red-700 text-sm space-y-1">
              <li>• El producto debe estar sin uso</li>
              <li>• Debe conservar su empaque original</li>
              <li>• Se requiere verificación del estado del producto</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'garantias',
      title: '9. Garantías y Derechos del Consumidor',
      icon: Shield,
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <Shield className="h-12 w-12 text-green-600 mx-auto mb-3" />
              <h4 className="font-semibold text-green-800 mb-2">Garantía Legal</h4>
              <p className="text-2xl font-bold text-green-600 mb-1">1 año</p>
              <p className="text-green-700 text-sm">Por defectos de fabricación</p>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <Scale className="h-12 w-12 text-blue-600 mx-auto mb-3" />
              <h4 className="font-semibold text-blue-800 mb-2">Derecho de Retracto</h4>
              <p className="text-blue-700 text-sm">Conforme a la ley colombiana</p>
            </div>
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
            { label: 'Términos y Condiciones', href: '/terminos' }
          ]} 
        />

        {/* Header */}
        <div className="text-center mt-8 mb-12">
          <div className="flex items-center justify-center mb-6">
            <FileText className="h-16 w-16 text-ceramic-blue" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4">
            Términos y Condiciones
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
              <div className="p-3 bg-red-100 rounded-xl">
                <AlertTriangle className="h-6 w-6 text-red-500" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                10. Uso Aceptable del Sitio
              </h2>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-6">
              <h4 className="font-semibold text-red-800 mb-3">Está prohibido:</h4>
              <ul className="text-red-700 space-y-2">
                <li>• El uso fraudulento del sitio web</li>
                <li>• Ataques informáticos o intentos de vulnerar la seguridad</li>
                <li>• Scraping o extracción automatizada de datos</li>
                <li>• Uso indebido de la información y contenidos del sitio</li>
              </ul>
            </div>
          </div>

          <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <Copyright className="h-6 w-6 text-purple-500" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                11. Propiedad Intelectual
              </h2>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <p className="text-purple-800">
                Todos los contenidos, marcas, logos, imágenes y textos son propiedad de 3C o de sus proveedores 
                y están protegidos por la ley de propiedad intelectual.
              </p>
            </div>
          </div>

          <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-yellow-100 rounded-xl">
                <Shield className="h-6 w-6 text-yellow-600" />
              </div>
              <h2 className="text-2xl font-display font-bold text-text-primary">
                12. Limitación de Responsabilidad
              </h2>
            </div>
            <div className="space-y-3">
              <p className="text-text-secondary">
                La empresa no se hace responsable por:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Fallos técnicos del sitio web',
                  'Errores de inventario',
                  'Demoras atribuibles a terceros',
                  'Situaciones de fuerza mayor'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 bg-yellow-50 rounded-lg">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <span className="text-yellow-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modificaciones y Ley Aplicable */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Edit className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-xl font-display font-bold text-text-primary">
                  13. Modificaciones
                </h2>
              </div>
              <p className="text-text-secondary text-sm">
                3C puede modificar estos términos en cualquier momento. 
                Los cambios serán comunicados en el sitio web.
              </p>
            </div>

            <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <Gavel className="h-6 w-6 text-green-500" />
                </div>
                <h2 className="text-xl font-display font-bold text-text-primary">
                  14. Ley Aplicable
                </h2>
              </div>
              <div className="space-y-2 text-sm">
                <p className="text-text-secondary">
                  Este contrato se rige por la ley colombiana.
                </p>
                <p className="text-text-secondary">
                  Disputas se resolverán ante los tribunales de Bogotá.
                </p>
              </div>
            </div>
          </div>

          {/* Política de Privacidad */}
          <div className="bg-gradient-to-r from-ceramic-blue to-primary-600 rounded-xl p-8 text-center">
            <Lock className="h-12 w-12 text-pure-white mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-pure-white mb-4">
              Política de Privacidad
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Para conocer cómo tratamos tus datos personales, consulta nuestra Política de Privacidad.
            </p>
            <a
              href="/privacidad"
              className="inline-flex items-center justify-center px-6 py-3 bg-pure-white text-ceramic-blue rounded-lg font-semibold hover:bg-secondary-50 transition-colors"
            >
              <Lock className="h-4 w-4 mr-2" />
              Ver Política de Privacidad
            </a>
          </div>

          {/* Contacto */}
          <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8 text-center">
            <Mail className="h-12 w-12 text-ceramic-blue mx-auto mb-4" />
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              ¿Tienes preguntas sobre estos términos?
            </h3>
            <p className="text-text-secondary mb-6">
              Contáctanos para resolver cualquier duda sobre nuestros términos y condiciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@angoran.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-ceramic-blue text-pure-white rounded-lg font-semibold hover:bg-hover-blue transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                info@angoran.com
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-6 py-3 border border-ceramic-blue text-ceramic-blue rounded-lg font-semibold hover:bg-ceramic-blue hover:text-pure-white transition-colors"
              >
                Página de Contacto
              </a>
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

// Componentes adicionales que pueden faltar
function Clock({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function Scale({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  )
}
