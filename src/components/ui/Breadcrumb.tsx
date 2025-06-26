import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-2">
        {/* Home icon para el primer elemento si es "Inicio" */}
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center">
            {index > 0 && (
              <ChevronRight className="h-4 w-4 text-gray-400 mx-2 flex-shrink-0" />
            )}
            
            {index === items.length - 1 ? (
              // Último elemento (página actual) - no es clickeable
              <span className="text-secondary-500 text-sm font-medium flex items-center">
                {index === 0 && item.label === 'Inicio' && (
                  <Home className="h-4 w-4 mr-1" />
                )}
                {item.label}
              </span>
            ) : (
              // Elementos anteriores - son clickeables
              <Link
                href={item.href}
                className="text-secondary-600 hover:text-primary-500 text-sm font-medium transition-colors flex items-center group"
              >
                {index === 0 && item.label === 'Inicio' && (
                  <Home className="h-4 w-4 mr-1 group-hover:text-primary-500" />
                )}
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// Componente alternativo más simple si prefieres
export function SimpleBreadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="text-sm text-secondary-600 mb-4">
      {items.map((item, index) => (
        <span key={item.href}>
          {index > 0 && ' / '}
          {index === items.length - 1 ? (
            <span className="text-secondary-800 font-medium">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary-500 transition-colors">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  )
}
