'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Search, X } from 'lucide-react'
import { useDebouncedCallback } from 'use-debounce'

interface SearchInputProps {
  placeholder?: string
  className?: string
}

export function SearchInput({ 
  placeholder = "Buscar productos...", 
  className = "" 
}: SearchInputProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  
  // Obtener el valor actual de búsqueda desde la URL
  const [searchValue, setSearchValue] = useState(searchParams.get('buscar') || '')

  // Función debounced para evitar muchas peticiones
  const debouncedSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (term) {
      params.set('buscar', term)
      // Resetear página al buscar
      params.delete('pagina')
    } else {
      params.delete('buscar')
    }
    
    // Redirigir a la página de tienda con los parámetros de búsqueda
    router.push(`/tienda?${params.toString()}`)
  }, 300) // 300ms de delay

  // Manejar cambios en el input
  const handleSearch = (term: string) => {
    setSearchValue(term)
    debouncedSearch(term)
  }

  // Limpiar búsqueda
  const clearSearch = () => {
    setSearchValue('')
    const params = new URLSearchParams(searchParams)
    params.delete('buscar')
    router.push(`/tienda?${params.toString()}`)
  }

  // Manejar Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      debouncedSearch(searchValue)
    }
  }

  // Sincronizar con URL cuando cambian los searchParams
  useEffect(() => {
    const urlSearchValue = searchParams.get('buscar') || ''
    if (urlSearchValue !== searchValue) {
      setSearchValue(urlSearchValue)
    }
  }, [searchParams])

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        {/* Icono de búsqueda */}
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
        
        {/* Input de búsqueda */}
        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-light-gray rounded-lg focus:ring-2 focus:ring-ceramic-blue focus:border-transparent transition-all duration-300 text-dark-gray placeholder-gray-500"
        />
        
        {/* Botón para limpiar */}
        {searchValue && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-dark-gray transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      
      {/* Indicador de búsqueda activa */}
      {searchValue && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-light-gray rounded-lg shadow-lg p-2 z-50">
          <p className="text-sm text-gray-600">
            Buscando: <span className="font-semibold text-ceramic-blue">"{searchValue}"</span>
          </p>
        </div>
      )}
    </div>
  )
}
