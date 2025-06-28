'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
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
  const searchParams = useSearchParams()
  
  const [searchValue, setSearchValue] = useState(searchParams.get('buscar') || '')

  const debouncedSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams)
    
    if (term) {
      params.set('buscar', term)
      params.delete('pagina')
    } else {
      params.delete('buscar')
    }
    
    router.push(`/tienda?${params.toString()}`)
  }, 300)

  const handleSearch = (term: string) => {
    setSearchValue(term)
    debouncedSearch(term)
  }

  const clearSearch = () => {
    setSearchValue('')
    const params = new URLSearchParams(searchParams)
    params.delete('buscar')
    router.push(`/tienda?${params.toString()}`)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      debouncedSearch(searchValue)
    }
  }

  // Actualizar searchValue cuando cambie la URL
  useEffect(() => {
    const urlSearchValue = searchParams.get('buscar') || ''
    if (urlSearchValue !== searchValue) {
      setSearchValue(urlSearchValue)
    }
  }, [searchParams])

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-text-muted" />
        
        <input
          type="text"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-border-light rounded-md focus:ring-2 focus:ring-ceramic-blue focus:border-ceramic-blue transition-all duration-200 ease-out text-text-primary placeholder-text-muted bg-pure-white hover:border-border-medium"
        />
        
        {searchValue && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-muted hover:text-text-primary transition-colors duration-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      
      {searchValue && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-pure-white border border-border-light rounded-md shadow-lg p-3 z-50 animate-fade-in-up">
          <p className="text-sm text-text-muted">
            Buscando: <span className="font-semibold text-ceramic-blue">&quot;{searchValue}&quot;</span>
          </p>
        </div>
      )}
    </div>
  )
}
