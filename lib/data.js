// Este archivo simula una base de datos de productos.

export const allProducts = [
  {
    id: 1,
  name: 'Blue Sweatshirt',
    slug: 'billetera-de-cuero-clasica',
    price: '$75.00',
  category: 'Cardholders',
    categorySlug: 'sport',
    imageSrc: '/desteny-products/desteny-pants.jpeg',
    images: [
      { id: 1, src: '/desteny-products/desteny-pants.jpeg', alt: 'Front view of the wallet' },
      { id: 2, src: '/desteny-products/desteny-pants.jpeg', alt: 'Interior view of the wallet' },
    ],
    description: 'Elegance and functionality in a timeless design. Made with premium leather, this wallet is the perfect companion for everyday use.',
    details: [
      { title: 'Product Details', content: 'Multiple card slots, bill compartment, and a compact design.' },
      { title: 'Materials', content: '100% Genuine Leather. Durable fabric lining.' },
      { title: 'Shipping & Returns', content: 'Free shipping on all orders. Returns accepted within 30 days of purchase.' },
    ]
  },
  {
    id: 2,
  name: 'Black Sweatshirt',
    slug: 'cinturon-de-piel-genuina',
    price: '$120.00',
  category: 'Belts',
    categorySlug: 'sport',
    imageSrc: '/desteny-products/desteny-shirt.jpeg',
    images: [
      { id: 1, src: '/desteny-products/desteny-shirt.jpeg', alt: 'Front view of the belt' },
      { id: 2, src: '/desteny-products/desteny-shirt.jpeg', alt: 'Buckle detail' },
      { id: 3, src: '/desteny-products/desteny-shirt.jpeg', alt: 'Leather texture' },
      { id: 4, src: '/desteny-products/desteny-shirt.jpeg', alt: 'Belt in context' },
    ],
    description: 'An essential accessory that blends traditional craftsmanship with contemporary design. Handcrafted from high-quality genuine leather, this belt is durable and ages beautifully.',
    details: [
      { title: 'Product Details', content: 'Polished metal buckle, 3.5cm width, finely stitched edges for increased durability.' },
      { title: 'Materials', content: '100% Genuine Leather from sustainable sources. Zinc alloy hardware with a silver finish.' },
      { title: 'Shipping & Returns', content: 'Free shipping on all orders. Returns accepted within 30 days of purchase.' },
    ]
  },
  {
    id: 3,
  name: 'Pink Sneakers',
    slug: 'gorra-de-diseno-exclusivo',
    price: '$60.00',
  category: 'Hats',
    categorySlug: 'tenis',
    imageSrc: '/desteny-products/falda-dest.jpeg',
    images: [
      { id: 1, src: '/desteny-products/falda-dest.jpeg', alt: 'Front view of the cap' },
    ],
    description: 'An exclusive design that combines comfort and urban style. Perfect for any occasion.',
    details: [
      { title: 'Product Details', content: 'Adjustable closure, high-definition embroidered logo.' },
      { title: 'Materials', content: '100% High-density Cotton.' },
      { title: 'Shipping & Returns', content: 'Free shipping on all orders. Returns accepted within 30 days of purchase.' },
    ]
  },
  // ... Agrega el resto de tus productos aquí con la misma estructura
];

export function getProductBySlug(slug) {
  return allProducts.find((p) => p.slug === slug);
}

export function getFeaturedProducts() {
  // Por ahora, devolvemos los primeros 6 como destacados.
  return allProducts;
}

export function getRelatedProducts(currentSlug) {
    // Lógica simple para obtener productos relacionados (todos menos el actual)
    return allProducts.filter(p => p.slug !== currentSlug);
}

export function getProductsByCategory(categorySlug) {
    return allProducts.filter(p => p.categorySlug === categorySlug);
}