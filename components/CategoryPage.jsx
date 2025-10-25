import Link from 'next/link';

const ProductCard = ({ product }) => (
  <Link href={`/products/${product.slug}`} className="group relative block">
    <div className="relative h-[400px] w-full overflow-hidden bg-gray-200">
      <img
        src={product.imageSrc}
        alt={product.name}
        className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </div>
    <div className="mt-4 text-center">
      <h3 className="font-belleza text-lg text-gray-800 group-hover:text-[#620c0b] transition-colors">
        {product.name}
      </h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
    </div>
  </Link>
);

export default function CategoryPage({ categoryName, products }) {
  const capitalizedCategory = categoryName.charAt(0).toUpperCase() + categoryName.slice(1);

  return (
    <div className="bg-white">
      {/* Banner de la categoría */}
      <div className="bg-[#f8f7f4] py-25 sm:py-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500 mb-2">Colección</p>
          <h1 className="font-belleza text-4xl sm:text-5xl lg:text-6xl text-gray-900">
            {capitalizedCategory}
          </h1>
        </div>
      </div>

      {/* Cuadrícula de productos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center">
              <p className="text-gray-500">No hay productos en esta categoría por el momento.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}