'use client'

import { useState } from 'react'
import { Button } from '../ui/Button'
import { Plus, Edit2, Trash2, MapPin } from 'lucide-react'

interface Address {
  id: number
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  isDefault: boolean
}

// Datos de ejemplo
const mockAddresses: Address[] = [
  {
    id: 1,
    name: 'Casa',
    address: 'Calle 123 #45-67',
    city: 'Bogotá',
    state: 'Cundinamarca',
    zipCode: '110111',
    isDefault: true
  },
  {
    id: 2,
    name: 'Oficina',
    address: 'Carrera 15 #85-20',
    city: 'Bogotá',
    state: 'Cundinamarca',
    zipCode: '110221',
    isDefault: false
  }
]

export function AddressBook() {
  const [addresses, setAddresses] = useState<Address[]>(mockAddresses)
  const [showForm, setShowForm] = useState(false)

  if (addresses.length === 0 && !showForm) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <MapPin className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-secondary-800 mb-2">
          No tienes direcciones guardadas
        </h3>
        <p className="text-secondary-600 mb-6">
          Agrega una dirección para acelerar tus compras futuras.
        </p>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Agregar Dirección
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="p-6 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-display font-bold text-secondary-800">
            Mis Direcciones
          </h2>
          <Button
            onClick={() => setShowForm(true)}
            size="sm"
          >
            <Plus className="h-4 w-4 mr-2" />
            Nueva Dirección
          </Button>
        </div>

        <div className="divide-y divide-gray-200">
          {addresses.map((address) => (
            <div key={address.id} className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-secondary-800">
                      {address.name}
                    </h3>
                    {address.isDefault && (
                      <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs font-medium">
                        Por defecto
                      </span>
                    )}
                  </div>
                  <p className="text-secondary-600">
                    {address.address}
                  </p>
                  <p className="text-secondary-600">
                    {address.city}, {address.state} {address.zipCode}
                  </p>
                </div>

                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Formulario para nueva dirección */}
      {showForm && (
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-secondary-800 mb-4">
            Nueva Dirección
          </h3>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Nombre de la dirección
              </label>
              <input
                type="text"
                placeholder="Casa, Oficina, etc."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                Dirección completa
              </label>
              <input
                type="text"
                placeholder="Calle 123 #45-67"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Ciudad
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Departamento
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  Código Postal
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="default"
                className="text-primary-500 focus:ring-primary-500"
              />
              <label htmlFor="default" className="ml-2 text-sm text-secondary-700">
                Establecer como dirección por defecto
              </label>
            </div>

            <div className="flex space-x-3">
              <Button type="submit">
                Guardar Dirección
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
              >
                Cancelar
              </Button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}
