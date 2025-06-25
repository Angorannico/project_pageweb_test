interface WooCommerceConfig {
    baseURL: string;
    consumerKey: string;
    consumerSecret: string;
  }
  
  class WooCommerceAPI {
    private config: WooCommerceConfig;
  
    constructor() {
      this.config = {
        baseURL: process.env.NEXT_PUBLIC_WORDPRESS_URL!,
        consumerKey: process.env.WOOCOMMERCE_CONSUMER_KEY!,
        consumerSecret: process.env.WOOCOMMERCE_CONSUMER_SECRET!,
      };
    }
  
    private getAuthString(): string {
      const credentials = `${this.config.consumerKey}:${this.config.consumerSecret}`;
      return Buffer.from(credentials).toString('base64');
    }
  
    private async makeRequest<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
      const url = `${this.config.baseURL}/wp-json/wc/v3${endpoint}`;
      
      const response = await fetch(url, {
        ...options,
        headers: {
          'Authorization': `Basic ${this.getAuthString()}`,
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });
  
      if (!response.ok) {
        throw new Error(`WooCommerce API Error: ${response.status} ${response.statusText}`);
      }
  
      return response.json();
    }
  
    // Métodos de productos
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
  }
  
  export const wooCommerce = new WooCommerceAPI();
  