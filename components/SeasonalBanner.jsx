'use client';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    id: 1,
    image: '/banner-fancy.webp',
    tag: 'Nueva Temporada',
    title: 'Colección Otoño/Invierno 2025',
    subtitle: 'Descubre las piezas que definirán tu estilo esta temporada.',
    buttonText: 'Ver la Colección',
    href: '/collections/fall-winter-2025',
  },
  {
    id: 2,
    image: '/banner-fancy-2.webp',
    tag: 'Accesorios Premium',
    title: 'Accesorios que Dejan Huella',
    subtitle: 'Eleva tu look con nuestros cinturones y billeteras de cuero genuino.',
    buttonText: 'Explorar Accesorios',
    href: '/collections/accesorios',
  },
];

export default function SeasonalBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    cssEase: 'ease-in-out',
    arrows: false,
    dotsClass: "slick-dots seasonal-dots",
  };

  return (
    <div id='seasonal' className="w-full bg-white py-2 -mt-px ">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="relative">
            <div className="h-[65vh] sm:h-[75vh] lg:h-[85vh] w-full relative">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay más oscuro para mejor legibilidad */}
              <div className="absolute inset-0 bg-black/60"></div>
              
              {/* Contenido - Centrado */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white max-w-3xl px-6 sm:px-12 text-center">
                  {/* Tag pequeño */}
                  <div className="mb-6">
                    <span className="inline-block text-xs tracking-[0.3em] uppercase font-medium border border-white/70 px-4 py-2">
                      {slide.tag}
                    </span>
                  </div>
                  
                  {/* Título */}
            <h2 className="font-belleza text-2xl sm:text-3xl lg:text-5xl font-light tracking-wide mb-6 sm:mb-8 leading-tight text-white text-center lg:text-left">
                    {slide.title}
                  </h2>
                  
                  {/* Subtítulo */}
                  <p className="font-moderat text-lg sm:text-xl lg:text-2xl mb-8 font-normal leading-relaxed">
                    {slide.subtitle}
                  </p>
                  
                  {/* Botón elegante pero legible */}
                  <a
                    href={slide.href}
                    className="group inline-flex items-center gap-3 font-moderat bg-white text-black px-8 py-4 text-sm sm:text-base tracking-[0.15em] uppercase font-semibold hover:bg-gray-100 transition-all duration-300"
                  >
                    {slide.buttonText}
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <style jsx global>{`
        .seasonal-dots {
          display: flex !important;
          justify-content: flex-start;
          gap: 0.75rem;
          position: absolute;
          bottom: 3rem;
          left: 1.5rem;
          list-style: none;
          padding: 0;
        }

        @media (min-width: 640px) {
          .seasonal-dots {
            bottom: 4rem;
            left: 3rem;
          }
        }

        @media (min-width: 1024px) {
          .seasonal-dots {
            bottom: 5rem;
            left: 4rem;
          }
        }

        .seasonal-dots li {
          margin: 0;
        }

        .seasonal-dots li button {
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

        .seasonal-dots li button:hover {
          background-color: rgba(255, 255, 255, 0.7);
        }

        .seasonal-dots li.slick-active button {
          width: 48px;
          background-color: rgba(255, 255, 255, 1);
        }

        .seasonal-dots li button:before {
          display: none;
        }
      `}</style>
    </div>
  );
}