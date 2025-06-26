'use client'

import { createContext, useContext, useReducer, ReactNode } from 'react'
import { Product, CartItem } from '../lib/types' // Removido Cart import

interface CartState {
  items: CartItem[]
  total: number
  subtotal: number
  tax: number
  shipping: number
  itemCount: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: { product: Product; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } }
  | { type: 'CLEAR_CART' }

interface CartContextType extends CartState {
  addItem: (product: Product, quantity: number) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { product, quantity } = action.payload
      const existingItem = state.items.find(item => item.id === product.id)
      
      let newItems: CartItem[]
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        newItems = [...state.items, { id: product.id, quantity, product }]
      }
      
      return calculateTotals({ ...state, items: newItems })
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload.id)
      return calculateTotals({ ...state, items: newItems })
    }
    
    case 'UPDATE_QUANTITY': {
      const { id, quantity } = action.payload
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id } })
      }
      
      const newItems = state.items.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
      return calculateTotals({ ...state, items: newItems })
    }
    
    case 'CLEAR_CART': {
      return {
        items: [],
        total: 0,
        subtotal: 0,
        tax: 0,
        shipping: 0,
        itemCount: 0,
      }
    }
    
    default:
      return state
  }
}

function calculateTotals(state: CartState): CartState {
  const subtotal = state.items.reduce((sum, item) => {
    const price = parseFloat(item.product.price) || 0
    return sum + (price * item.quantity)
  }, 0)
  
  const tax = subtotal * 0.19 // IVA 19%
  const shipping = subtotal > 200000 ? 0 : 15000 // Envío gratis > $200k
  const total = subtotal + tax + shipping
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0)
  
  return {
    ...state,
    subtotal,
    tax,
    shipping,
    total,
    itemCount,
  }
}

const initialState: CartState = {
  items: [],
  total: 0,
  subtotal: 0,
  tax: 0,
  shipping: 0,
  itemCount: 0,
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)
  
  const addItem = (product: Product, quantity: number) => {
    dispatch({ type: 'ADD_ITEM', payload: { product, quantity } })
  }
  
  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id } })
  }
  
  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
  }
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }
  
  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
