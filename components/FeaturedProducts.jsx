'use client';

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Componente de flecha personalizada
const CustomArrow = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${direction === 'left' ? 'left-2 sm:left-4' : 'right-2 sm:right-4'} top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 sm:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 z-30 hover:scale-110`}
    aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
  >
    {direction === 'left' ? (
      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-900" />
    ) : (
      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-gray-900" />
    )}
  </button>
);

export default function FeaturedProducts({ products, title = "Productos Destacados" }) {
  const sliderRef = useRef(null);

  if (!products || products.length === 0) {
    return null;
  }

  // Duplicar productos para efecto infinito
  const extendedProducts = [...products, ...products];

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    dotsClass: "slick-dots products-dots",
  };

  return (
    <div className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Slider - Izquierda */}
          <div className="lg:col-span-9 order-2 lg:order-1">
            <div className="relative">
              {/* React Slick Slider */}
              <Slider ref={sliderRef} {...settings}>
                {extendedProducts.map((product, index) => (
                  <div key={`${product.slug}-${index}`} className="px-3">
                    <a href={`/products/${product.slug}`} className="group relative block">
                      <div className="relative h-[400px] sm:h-[450px] lg:h-[500px] w-full overflow-hidden bg-gray-200">
                        {/* Marco minimalista */}

                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                        />

                        {/* Overlay con sombra más pronunciada abajo */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/90 transition-all duration-300"></div>

                        {/* Contenido de texto */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-10">
                          <h3 className="text-1xl sm:text-2xl font-semibold text-white tracking-wider transform group-hover:scale-105 transition-transform duration-300">
                            {product.name}
                          </h3>
                          <p className="text-white text-xl sm:text-2xl font-bold mt-2">
                            {product.price}
                          </p>
                          <p className="text-white text-sm sm:text-base mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            Ver Detalles →
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>

              {/* Botones de navegación personalizados */}
              <CustomArrow direction="left" onClick={() => sliderRef.current?.slickPrev()} />
              <CustomArrow direction="right" onClick={() => sliderRef.current?.slickNext()} />
            </div>
          </div>

          {/* Caption - Derecha */}
          <div className="lg:col-span-3 space-y-6 order-1 lg:order-2">
            <h2 className="font-belleza text-2xl sm:text-3xl lg:text-5xl font-light tracking-wide mb-6 sm:mb-8 leading-tight text-white text-center lg:text-left">
              {title}
            </h2>
            <p className="font-moderat text-base md:text-lg leading-relaxed text-white/90 text-center lg:text-left">
              Descubre nuestros artículos más populares y exclusivos. Cada pieza ha sido cuidadosamente seleccionada para ofrecerte la mejor calidad y estilo.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a 
                href="#productos" 
                className="inline-flex items-center gap-3 font-moderat text-white text-sm sm:text-base tracking-[0.15em] uppercase font-light border border-white/50 px-8 py-3 hover:bg-white hover:text-black transition-all duration-300"
              >
                Ver Todos
              </a>
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .products-dots {
          display: flex !important;
          justify-content: center;
          gap: 0.75rem;
          margin-top: 2rem;
          list-style: none;
          padding: 0;
        }

        .products-dots li {
          margin: 0;
        }

        .products-dots li button {
          width: 32px;
          height: 2px;
          padding: 0;
          background-color: rgba(255, 255, 255, 0.4);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0;
          line-height: 0;
        }

        .products-dots li button:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }

        .products-dots li.slick-active button {
          width: 48px;
          background-color: rgba(255, 255, 255, 1);
        }

        .products-dots li button:before {
          display: none;
        }
      `}</style>
    </div>
  );
}