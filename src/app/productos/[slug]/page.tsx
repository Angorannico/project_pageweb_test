import { notFound } from 'next/navigation'
import { wooCommerce } from '../../../lib/api/woocommerce'
import { Product } from '../../../lib/types'
import { ProductDetail } from '../../../components/product/ProductDetail'
import { RelatedProducts } from '../../../components/product/RelatedProducts'
import { Breadcrumb } from '../../../components/ui/Breadcrumb'

// Función requerida para export estático en Next.js 14
export async function generateStaticParams() {
  try {
    const products = await wooCommerce.getProducts({ 
      per_page: '50',
      status: 'publish'
    }) as Product[]

    return products.map((product) => ({
      slug: product.slug,
    }))
  } catch {
    return [
      { slug: 'azulejo-ceramico-blanco' },
      { slug: 'piso-porcelanato-gris' },
      { slug: 'revestimiento-piedra' }
    ]
  }
}

interface ProductPageProps {
  params: { slug: string }  // En Next.js 14 NO es Promise
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params

  try {
    const products = await wooCommerce.getProducts({ 
      slug: slug,
      per_page: '1'
    }) as Product[]

    if (!products || products.length === 0) {
      notFound()
    }

    const product = products[0]

    if (!product) {
      notFound()
    }

    return (
      <div className="min-h-screen bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb 
            items={[
              { label: 'Inicio', href: '/' },
              { label: 'Tienda', href: '/tienda' },
              { label: product.name, href: `/productos/${product.slug}` }
            ]} 
          />

          <div className="mt-8 space-y-12">
            <ProductDetail product={product} />
            
            <RelatedProducts 
              productId={product.id} 
              categories={product.categories} 
            />
          </div>
        </div>
      </div>
    )
  } catch {
    notFound()
  }
}

// Metadata para SEO en Next.js 14
export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = params

  try {
    const products = await wooCommerce.getProducts({ 
      slug: slug,
      per_page: '1'
    }) as Product[]

    if (!products || products.length === 0) {
      return {
        title: 'Producto no encontrado | 3C Centro Cerámico Capital',
        description: 'El producto que buscas no está disponible.'
      }
    }

    const product = products[0]

    if (!product) {
      return {
        title: 'Producto no encontrado | 3C Centro Cerámico Capital',
        description: 'El producto que buscas no está disponible.'
      }
    }

    return {
      title: `${product.name} | 3C Centro Cerámico Capital`,
      description: product.short_description || product.description?.replace(/<[^>]*>/g, '').substring(0, 160),
      openGraph: {
        title: product.name,
        description: product.short_description,
        images: product.images?.map(img => ({
          url: img.src,
          alt: img.alt || product.name
        })) || []
      }
    }
  } catch {
    return {
      title: 'Error | 3C Centro Cerámico Capital',
      description: 'Error al cargar el producto.'
    }
  }
}
