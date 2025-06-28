interface WooCommerceConfig {
  baseURL: string;
  consumerKey: string;
  consumerSecret: string;
}

class WooCommerceAPI {
  private config: WooCommerceConfig;

  constructor() {
    const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_URL;
    const consumerKey = process.env.WOOCOMMERCE_CONSUMER_KEY;
    const consumerSecret = process.env.WOOCOMMERCE_CONSUMER_SECRET;

    if (!baseURL || !consumerKey || !consumerSecret) {
      throw new Error('Variables de entorno de WooCommerce no configuradas');
    }

    this.config = { baseURL, consumerKey, consumerSecret };
  }

  private getAuthString(): string {
    const credentials = `${this.config.consumerKey}:${this.config.consumerSecret}`;
    return Buffer.from(credentials).toString('base64');
  }

  private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${this.config.baseURL}/wp-json/wc/v3${endpoint}`;
    
    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Authorization': `Basic ${this.getAuthString()}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...options.headers,
        },
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await response.text();
        throw new Error(`Respuesta no es JSON. Content-Type: ${contentType}. Respuesta: ${text.substring(0, 200)}`);
      }

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error ${response.status}: ${errorText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error en WooCommerce API:', error);
      throw error;
    }
  }

  async getProducts(params?: Record<string, string>) {
    const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
    return this.makeRequest(`/products${queryString}`);
  }

  async getProduct(id: number) {
    return this.makeRequest(`/products/${id}`);
  }

  async getCategories() {
    return this.makeRequest('/products/categories');
  }

  // AGREGADO: Método para obtener etiquetas de productos
  async getProductTags() {
    return this.makeRequest('/products/tags');
  }
}

export const wooCommerce = new WooCommerceAPI();
