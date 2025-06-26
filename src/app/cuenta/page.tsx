'use client'

import { useState } from 'react'
import { AccountTabs } from '../../components/account/AccountTabs'
import { AccountInfo } from '../../components/account/AccountInfo'
import { OrderHistory } from '../../components/account/OrderHistory'
import { AddressBook } from '../../components/account/AddressBook'
import { Breadcrumb } from '../../components/ui/Breadcrumb'

export default function CuentaPage() {
  const [activeTab, setActiveTab] = useState('info')

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Mi Cuenta', href: '/cuenta' }
          ]} 
        />

        <div className="mt-8">
          <h1 className="text-3xl font-display font-bold text-secondary-800 mb-8">
            Mi Cuenta
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Account Navigation */}
            <div className="lg:col-span-1">
              <AccountTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Account Content */}
            <div className="lg:col-span-3">
              {activeTab === 'info' && <AccountInfo />}
              {activeTab === 'orders' && <OrderHistory />}
              {activeTab === 'addresses' && <AddressBook />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
