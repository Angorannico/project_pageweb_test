'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, User, Menu, X, Phone, Mail, Search } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { SearchInput } from '../ui/SearchInput' // NUEVO IMPORT

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { itemCount } = useCart()

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Tienda', href: '/tienda' },
    { name: 'Contacto', href: '/contacto' },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-[#373735] primary-900 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-pure-white">
                <Phone className="h-4 w-4 text-pure-white" />
                <span>+57 304 223-1342</span>
              </div>
              <div className="flex items-center space-x-2 text-pure-white">
                <Mail className="h-4 w-4" />
                <span>info@angoran.com</span>
              </div>
            </div>
            <div className="hidden md:block text-pure-white">
              <span>Envío gratis en compras superiores a $200.000</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo - sin cambios */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="relative transition-transform duration-300 ease-out group-hover:scale-105">
                <Image
                  src="/Logo.png"
                  alt="3C Centro Cerámico Capital"
                  width={480}
                  height={360}
                  className="h-28 w-auto"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - sin cambios */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-dark-gray hover:text-soft-terracotta font-medium transition-all duration-300 ease-out group hover:transform hover:-translate-y-0.5 hover:drop-shadow-md"
              >
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-soft-terracotta transition-all duration-300 ease-out group-hover:w-full"></span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search Bar - Desktop ACTUALIZADO */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <SearchInput placeholder="Buscar cerámicas, azulejos, porcelanatos..." />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Toggle ACTUALIZADO */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="md:hidden p-2 text-dark-gray hover:text-soft-terracotta transition-all duration-300 ease-out hover:transform hover:-translate-y-0.5 hover:drop-shadow-md rounded-lg"
            >
              {isSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </button>

            {/* User Account - sin cambios */}
            <Link
              href="/cuenta"
              className="p-2 text-dark-gray hover:text-soft-terracotta transition-all duration-300 ease-out hover:transform hover:-translate-y-0.5 hover:drop-shadow-md rounded-lg"
            >
              <User className="h-6 w-6" />
            </Link>

            {/* Cart - sin cambios */}
            <Link
              href="/carrito"
              className="relative p-2 text-dark-gray hover:text-soft-terracotta transition-all duration-300 ease-out hover:transform hover:-translate-y-0.5 hover:drop-shadow-md rounded-lg"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-soft-terracotta text-pure-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium animate-pulse">
                  {itemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle - sin cambios */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-dark-gray hover:text-soft-terracotta transition-all duration-300 ease-out hover:transform hover:-translate-y-0.5 hover:drop-shadow-md rounded-lg"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar ACTUALIZADO */}
        {isSearchOpen && (
          <div className="md:hidden pb-4 animate-slide-up">
            <SearchInput placeholder="Buscar productos..." />
          </div>
        )}
      </div>

      {/* Mobile Menu - sin cambios */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-light-gray bg-pure-white animate-slide-up">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-dark-gray hover:text-soft-terracotta hover:bg-gray-50 rounded-md transition-all duration-300 ease-out hover:transform hover:translate-x-1"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}