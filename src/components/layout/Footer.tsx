import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#373735] primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="px-3 py-2 rounded-lg font-display font-bold text-xl">
                <Image
                    src="/icono.png"
                    alt="3C Centro Cerámico Capital"
                    width={380}
                    height={380}
                    className="h-20 w-25"
                    priority
                  />
              </div>
              <div className="ml-3">
                <div className="font-display font-bold text-lg text-pure-white ">
                  Centro Cerámico Capital
                </div>
              </div>
            </div>
            <p className="text-secondary-300 text-sm leading-relaxed">
              Especialistas en cerámicas de construcción con más de 15 años de experiencia. 
              Calidad profesional para constructores y remodeladores.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:accent-900 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:accent-900 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:accent-900 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-pure-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: 'Inicio', href: '/' },
                { name: 'Tienda', href: '/tienda' },
                { name: 'Sobre Nosotros', href: '/nosotros' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-secondary-300 hover:accent-800 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-pure-white">Categorías</h3>
            <ul className="space-y-2">
              {[
                'Pisos Cerámicos',
                'Azulejos de Pared',
                'Porcelanatos',
                'Revestimientos',
                'Accesorios',
              ].map((category) => (
                <li key={category}>
                  <Link
                    href={`/categoria/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-pure-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div className="text-secondary-300 text-sm">
                  <p>Calle 123 #45-67</p>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">+57 304 223-342</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-secondary-300 text-sm">info@angoran.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Centro Cerámico Capital. Todos los derechos reservados de ARANGROUP. By angoran
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacidad" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link href="/terminos" className="text-secondary-400 hover:text-white text-sm transition-colors">
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
