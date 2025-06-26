'use client'

import { User, Package, MapPin, Settings } from 'lucide-react'

interface AccountTabsProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

export function AccountTabs({ activeTab, setActiveTab }: AccountTabsProps) {
  const tabs = [
    { id: 'info', label: 'Mi Información', icon: User },
    { id: 'orders', label: 'Mis Pedidos', icon: Package },
    { id: 'addresses', label: 'Direcciones', icon: MapPin },
    { id: 'settings', label: 'Configuración', icon: Settings },
  ]

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4">
      <nav className="space-y-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
              activeTab === tab.id
                ? 'bg-primary-50 text-primary-700 border border-primary-200'
                : 'text-secondary-600 hover:bg-gray-50 hover:text-secondary-800'
            }`}
          >
            <tab.icon className="h-5 w-5" />
            <span className="font-medium">{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
