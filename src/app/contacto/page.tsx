'use client'

import { useState } from 'react'
import { Breadcrumb } from '../../components/ui/Breadcrumb'
import { Button } from '../../components/ui/Button'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Send,
  CheckCircle,
  HelpCircle
} from 'lucide-react'

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
    telefono: '',
  })

  const [formErrors, setFormErrors] = useState<{[key: string]: string}>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    
    // Limpiar error cuando el usuario empiece a escribir
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' })
    }
  }

  const validate = () => {
    const errors: {[key: string]: string} = {}
    
    if (!formData.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio.'
    }
    
    if (!formData.email.trim()) {
      errors.email = 'El correo electrónico es obligatorio.'
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      errors.email = 'El correo electrónico no es válido.'
    }
    
    if (!formData.asunto.trim()) {
      errors.asunto = 'El asunto es obligatorio.'
    }
    
    if (!formData.mensaje.trim()) {
      errors.mensaje = 'El mensaje es obligatorio.'
    } else if (formData.mensaje.trim().length < 10) {
      errors.mensaje = 'El mensaje debe tener al menos 10 caracteres.'
    }
    
    return errors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validate()
    setFormErrors(errors)
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)
      
      try {
        // Simular envío del formulario
        await new Promise(resolve => setTimeout(resolve, 2000))
        
        // Aquí integrarías con tu backend o servicio de email
        console.log('Formulario enviado:', formData)
        
        setSubmitted(true)
        setFormData({
          nombre: '',
          email: '',
          asunto: '',
          mensaje: '',
          telefono: '',
        })
      } catch (error) {
        console.error('Error enviando formulario:', error)
      } finally {
        setIsSubmitting(false)
      }
    }
  }

  const faqs = [
    '¿Cómo calculo cuántas cajas necesito?',
    '¿Hacen envíos a toda Bogotá?',
    '¿Puedo recoger mi pedido en la bodega?',
    '¿Aceptan pagos contra entrega?',
    '¿Qué garantía tienen los productos?',
    '¿Cómo solicito una devolución?'
  ]

  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Contacto', href: '/contacto' }
          ]} 
        />

        {/* Header Section */}
        <div className="text-center mt-8 mb-12">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            Contáctanos
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            ¿Tienes dudas o necesitas una cotización? Completa el formulario y te contactaremos en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Formulario de Contacto */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8 text-center">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-text-primary mb-4">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-text-secondary mb-6">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                >
                  Enviar otro mensaje
                </Button>
              </div>
            ) : (
              <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
                <div className="mb-8">
                  <h2 className="text-2xl font-display font-bold text-text-primary mb-2">
                    Formulario de Contacto
                  </h2>
                  <p className="text-text-muted">
                    Por favor, completa los siguientes campos obligatorios:
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Nombre */}
                    <div>
                      <label htmlFor="nombre" className="block text-sm font-semibold text-text-primary mb-2">
                        Nombre <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ceramic-blue focus:border-transparent transition-all duration-300 ${
                          formErrors.nombre ? 'border-red-500 bg-red-50' : 'border-border-light hover:border-border-medium'
                        }`}
                        placeholder="Tu nombre completo"
                      />
                      {formErrors.nombre && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {formErrors.nombre}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-text-primary mb-2">
                        Correo electrónico <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ceramic-blue focus:border-transparent transition-all duration-300 ${
                          formErrors.email ? 'border-red-500 bg-red-50' : 'border-border-light hover:border-border-medium'
                        }`}
                        placeholder="tu@email.com"
                      />
                      {formErrors.email && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <span className="mr-1">⚠️</span>
                          {formErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Asunto */}
                  <div>
                    <label htmlFor="asunto" className="block text-sm font-semibold text-text-primary mb-2">
                      Asunto <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="asunto"
                      name="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ceramic-blue focus:border-transparent transition-all duration-300 ${
                        formErrors.asunto ? 'border-red-500 bg-red-50' : 'border-border-light hover:border-border-medium'
                      }`}
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="cotizacion">Solicitar cotización</option>
                      <option value="informacion">Información de productos</option>
                      <option value="soporte">Soporte técnico</option>
                      <option value="envios">Consulta sobre envíos</option>
                      <option value="garantia">Garantía y devoluciones</option>
                      <option value="otro">Otro</option>
                    </select>
                    {formErrors.asunto && (
                      <p className="text-red-500 text-sm mt-1 flex items-center">
                        <span className="mr-1">⚠️</span>
                        {formErrors.asunto}
                      </p>
                    )}
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold text-text-primary mb-2">
                      Mensaje <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ceramic-blue focus:border-transparent transition-all duration-300 resize-none ${
                        formErrors.mensaje ? 'border-red-500 bg-red-50' : 'border-border-light hover:border-border-medium'
                      }`}
                      placeholder="Describe tu consulta o solicitud..."
                    />
                    <div className="flex justify-between items-center mt-1">
                      {formErrors.mensaje ? (
                        <p className="text-red-500 text-sm flex items-center">
                          <span className="mr-1">⚠️</span>
                          {formErrors.mensaje}
                        </p>
                      ) : (
                        <p className="text-text-muted text-sm">
                          Mínimo 10 caracteres
                        </p>
                      )}
                      <p className="text-text-muted text-sm">
                        {formData.mensaje.length}/500
                      </p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-semibold text-text-primary mb-2">
                      Teléfono <span className="text-text-muted">(opcional, solo si deseas ser contactado por este medio)</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full border border-border-light rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ceramic-blue focus:border-transparent hover:border-border-medium transition-all duration-300"
                      placeholder="+57 300 123 4567"
                    />
                  </div>

                  {/* Botón de envío */}
                  <Button
                    type="submit"
                    loading={isSubmitting}
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                  </Button>
                </form>
              </div>
            )}
          </div>

          {/* Información de Contacto */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Otros Medios de Contacto */}
            <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-6">
              <h3 className="text-xl font-display font-bold text-text-primary mb-6">
                Otros Medios de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-ceramic-blue bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    <Mail className="h-5 w-5 text-ceramic-blue" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Correo electrónico</p>
                    <a href="mailto:info@angoran.com" className="font-semibold text-text-primary hover:text-ceramic-blue transition-colors">
                      info@angoran.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-soft-terracotta bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    <Phone className="h-5 w-5 text-soft-terracotta" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Teléfono fijo</p>
                    <a href="tel:+5715552355" className="font-semibold text-text-primary hover:text-soft-terracotta transition-colors">
                      (1) 555 2355
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-green-500 bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                    <MessageCircle className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">WhatsApp</p>
                    <a href="https://wa.me/573042231342" className="font-semibold text-text-primary hover:text-green-500 transition-colors">
                      +57 304 223 1342
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Dirección Física */}
            <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-6">
              <h3 className="text-xl font-display font-bold text-text-primary mb-4">
                Dirección Física
              </h3>
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-logo-brown bg-opacity-10 rounded-lg">
                  <MapPin className="h-5 w-5 text-logo-brown" />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">Bodega principal</p>
                  <p className="text-text-secondary">
                    Calle 55 #00A-00, Barrio<br />
                    Bogotá, Colombia
                  </p>
                </div>
              </div>
            </div>

            {/* Horario de Atención */}
            <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-6">
              <h3 className="text-xl font-display font-bold text-text-primary mb-4 flex items-center">
                <Clock className="h-5 w-5 mr-2 text-ceramic-blue" />
                Horario de Atención
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-secondary">Lunes a viernes:</span>
                  <span className="font-semibold text-text-primary">8:00 a.m. – 6:00 p.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Sábados:</span>
                  <span className="font-semibold text-text-primary">8:00 a.m. – 2:00 p.m.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-secondary">Domingos y festivos:</span>
                  <span className="font-semibold text-red-500">Cerrado</span>
                </div>
              </div>
            </div>

            {/* Redes Sociales */}
            <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-6">
              <h3 className="text-xl font-display font-bold text-text-primary mb-4">
                Redes Sociales
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-blue-500 bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <Facebook className="h-6 w-6 text-blue-500 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center w-12 h-12 bg-pink-500 bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <Instagram className="h-6 w-6 text-pink-500 group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://wa.me/573042231342"
                  className="flex items-center justify-center w-12 h-12 bg-green-500 bg-opacity-10 rounded-lg hover:bg-opacity-20 transition-all duration-300 group"
                >
                  <MessageCircle className="h-6 w-6 text-green-500 group-hover:scale-110 transition-transform" />
                </a>
              </div>
              <p className="text-sm text-text-muted mt-3">
                Síguenos para estar al día con nuestras novedades
              </p>
            </div>
          </div>
        </div>

        {/* Preguntas Frecuentes */}
        <div className="mt-16">
          <div className="bg-pure-white rounded-xl shadow-sm border border-border-light p-8">
            <div className="text-center mb-8">
              <HelpCircle className="h-12 w-12 text-ceramic-blue mx-auto mb-4" />
              <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
                Preguntas Frecuentes (FAQ)
              </h2>
              <p className="text-text-secondary">
                Encuentra respuestas rápidas a las consultas más comunes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-secondary-50 transition-colors duration-300 group cursor-pointer"
                >
                  <div className="p-1 bg-ceramic-blue bg-opacity-10 rounded-full group-hover:bg-opacity-20 transition-all duration-300">
                    <span className="text-ceramic-blue text-sm font-bold">?</span>
                  </div>
                  <p className="text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                    {faq}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Aviso Legal y Llamada a la Acción */}
        <div className="mt-16 text-center space-y-8">
          <div className="text-text-muted text-sm">
            <p>
              La información suministrada será tratada conforme a nuestra{' '}
              <a href="/privacidad" className="text-ceramic-blue hover:underline font-semibold">
                Política de Privacidad
              </a>.
            </p>
          </div>

          <div className="bg-gradient-to-r from-ceramic-blue to-primary-600 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-display font-bold text-pure-white mb-4">
              ¿Listo para comenzar tu proyecto?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              ¿Tienes dudas o necesitas una cotización? Completa el formulario y te contactaremos en menos de 24 horas.
            </p>
            <Button
              onClick={() => {
                document.getElementById('nombre')?.focus()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              variant="secondary"
              size="lg"
              className="bg-pure-white text-ceramic-blue hover:bg-secondary-50"
            >
              Completar Formulario
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
