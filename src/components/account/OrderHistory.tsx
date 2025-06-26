import { formatPrice, formatDate } from '../../lib/utils'
import { Package, Eye } from 'lucide-react'
import { Button } from '../ui/Button'

// Datos de ejemplo - en producción vendrían de tu API
const mockOrders = [
  {
    id: 1,
    orderNumber: 'ORD-2024-001',
    date: '2024-01-15',
    status: 'Entregado',
    total: 450000,
    items: 3
  },
  {
    id: 2,
    orderNumber: 'ORD-2024-002',
    date: '2024-01-20',
    status: 'En tránsito',
    total: 280000,
    items: 2
  },
  {
    id: 3,
    orderNumber: 'ORD-2024-003',
    date: '2024-01-25',
    status: 'Procesando',
    total: 650000,
    items: 5
  }
]

export function OrderHistory() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Entregado':
        return 'bg-green-100 text-green-800'
      case 'En tránsito':
        return 'bg-blue-100 text-blue-800'
      case 'Procesando':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  if (mockOrders.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-secondary-800 mb-2">
          No tienes pedidos aún
        </h3>
        <p className="text-secondary-600 mb-6">
          Cuando realices tu primera compra, aparecerá aquí.
        </p>
        <Button asChild>
          <a href="/tienda">Explorar Productos</a>
        </Button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-display font-bold text-secondary-800">
          Historial de Pedidos
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {mockOrders.map((order) => (
          <div key={order.id} className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-secondary-800">
                  Pedido {order.orderNumber}
                </h3>
                <p className="text-sm text-secondary-600">
                  {formatDate(order.date)} • {order.items} productos
                </p>
              </div>
              <div className="text-right">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-bold text-secondary-800">
                  {formatPrice(order.total)}
                </p>
              </div>
              <Button variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                Ver Detalles
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
