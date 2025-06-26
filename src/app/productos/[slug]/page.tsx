import { notFound } from 'next/navigation'
import { Suspense } from 'react'
import { wooCommerce } from '../../../lib/api/woocommerce'
import { ProductGallery } from '../../../components/product/ProductGallery'
import { ProductInfo } from '../../../components/product/ProductInfo'
import { ProductTabs } from '../../../components/product/ProductTabs'
import { RelatedProducts } from '../../../components/product/RelatedProducts'
import { Breadcrumb } from '../../../components/ui/Breadcrumb'
import { Product } from '../../../lib/types'

interface ProductPageProps {
  params: { slug: string }
}

async function getProduct(slug: string): Promise<Product | null> {
  try {
    const products = await wooCommerce.getProducts({ slug }) as Product[]
    return products[0] || null
  } catch (error) {
    console.error('Error fetching product:', error)
    return null
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb 
          items={[
            { label: 'Inicio', href: '/' },
            { label: 'Tienda', href: '/tienda' },
            { label: product.name, href: `/productos/${product.slug}` }
          ]} 
        />

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Gallery */}
          <div>
            <ProductGallery images={product.images} name={product.name} />
          </div>

          {/* Product Info */}
          <div>
            <ProductInfo product={product} />
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <ProductTabs product={product} />
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <Suspense fallback={<div className="h-96 animate-pulse bg-gray-100 rounded-lg" />}>
            <RelatedProducts productId={product.id} categories={product.categories} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = await getProduct(params.slug)
  
  if (!product) {
    return {
      title: 'Producto no encontrado',
    }
  }

  return {
    title: `${product.name} | 3C Centro Cerámico Capital`,
    description: product.short_description || product.description,
    openGraph: {
      title: product.name,
      description: product.short_description || product.description,
      images: product.images.map(img => ({
        url: img.src,
        alt: img.alt || product.name,
      })),
    },
  }
}
