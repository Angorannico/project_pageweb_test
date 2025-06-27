import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'success' | 'warning'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => {
    // Clases base con transiciones suaves
    const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed border hover:transform hover:-translate-y-0.5 hover:shadow-lg'
    
    // Variantes con hover azul específico #0B5ED7
    const variants = {
      // ACTUALIZADO: Azul principal con hover específico #0B5ED7
      primary: 'bg-ceramic-blue hover:bg-[#0B5ED7] text-pure-white border-ceramic-blue hover:border-[#0B5ED7] focus:ring-ceramic-blue shadow-md hover:shadow-ceramic-lg',
      
      // ACTUALIZADO: Gris secundario con hover azul
      secondary: 'bg-secondary-100 hover:bg-[#0B5ED7] text-text-primary hover:text-pure-white border-border-light hover:border-[#0B5ED7] focus:ring-secondary-300 shadow-sm hover:shadow-lg',
      
      // ACTUALIZADO: Outline con hover azul específico
      outline: 'bg-transparent hover:bg-[#0B5ED7] text-ceramic-blue hover:text-pure-white border-ceramic-blue hover:border-[#0B5ED7] focus:ring-ceramic-blue shadow-sm hover:shadow-lg',
      
      // Verde éxito mantiene su color
      success: 'bg-green-600 hover:bg-green-700 text-pure-white border-green-600 hover:border-green-700 focus:ring-green-600 shadow-sm hover:shadow-lg',
      
      // ACTUALIZADO: Warning con hover azul
      warning: 'bg-soft-terracotta hover:bg-[#0B5ED7] text-pure-white border-soft-terracotta hover:border-[#0B5ED7] focus:ring-soft-terracotta shadow-sm hover:shadow-lg',
    }
    
    const sizes = {
      sm: 'px-3 py-1.5 text-sm rounded-md',
      md: 'px-4 py-2 text-base rounded-lg',
      lg: 'px-6 py-3 text-lg rounded-lg',
    }

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        )}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
