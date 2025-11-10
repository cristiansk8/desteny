'use client'

export default function BrandPhilosophy() {
  return (
    <div className="bg-white">

      {/* Split Editorial Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Imagen Izquierda */}
        <div className="relative h-[500px] lg:h-[700px]">
          <img
            src="/about.webp"
            alt="Craftsmanship"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Contenido Derecha */}
        <div className="bg-[#f8f7f4] flex items-center justify-center p-8 sm:p-12 lg:p-16 xl:p-24">
          <div className="max-w-lg space-y-6">
            <p className="text-[#620c0b] text-xs tracking-[0.3em] uppercase font-medium">
              Our Philosophy
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-gray-900 leading-tight">
              Craftsmanship that transcends
            </h3>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              At Desteny, we believe true elegance does not shout, it whispers. Each piece is carefully selected for those who understand that style is not a trend — it's a way of life.
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-light">
              Since 2017, we have dedicated our passion to offering premium accessories that define character and distinction in every detail.
            </p>
          </div>
        </div>
      </div>

      {/* Quote Section - Full Width */}
      <div className="bg-white py-20 sm:py-28 lg:py-36">
        <div className="max-w-4xl mx-auto px-8 sm:px-12 text-center">
          <div className="space-y-8">
            <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-[#620c0b]/20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
            </svg>
            <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-900 leading-relaxed italic">
              Fashion passes, style remains
            </blockquote>
            <p className="text-gray-500 text-sm tracking-[0.2em] uppercase font-medium">
              — Nathaly Desteny, Founder
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Editorial Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Contenido Izquierda */}
        <div className="bg-[#f8f7f4] flex items-center justify-center p-8 sm:p-12 lg:p-16 xl:p-24 order-2 lg:order-1">
          <div className="max-w-lg space-y-6">
            <p className="text-white/70 text-xs tracking-[0.3em] uppercase font-medium">
              Premium Quality
            </p>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
              Exceptional Materials
            </h3>
            <p className="text-base sm:text-lg leading-relaxed font-light">
              We work only with the finest materials: genuine leather, premium textiles, and high-quality hardware that ensure durability and timeless style.
            </p>
            <div className="pt-4">
              <a href="#productos" className="inline-block text-white text-sm tracking-[0.2em] uppercase font-medium border-b-2 border-white/50 hover:border-white transition-colors pb-1">
                Explore Collection
              </a>
            </div>
          </div>
        </div>

        {/* Imagen Derecha */}
        <div className="relative h-[500px] lg:h-[700px] order-1 lg:order-2">
          <img
            src="/about-2.webp"
            alt="Premium Materials"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}