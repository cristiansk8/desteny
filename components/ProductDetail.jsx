'use client';

import { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import { ChevronUp, ChevronDown, Minus, Plus, ShoppingBag, ChevronRight } from 'lucide-react';
import FeaturedProducts from './FeaturedProducts';

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className="border-b border-gray-200 py-6">
    <h3>
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between text-left text-gray-900"
      >
        <span className="text-base font-medium">{title}</span>
        <span className="ml-6 flex items-center">
          {isOpen ? (
            <ChevronUp className="h-5 w-5" aria-hidden="true" />
          ) : (
            <ChevronDown className="h-5 w-5" aria-hidden="true" />
          )}
        </span>
      </button>
    </h3>
    {isOpen && (
      <div className="pt-6">
        <p className="text-gray-600 font-light leading-relaxed">{content}</p>
      </div>
    )}
  </div>
);

export default function ProductDetail({ product, relatedProducts }) {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState(0);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1.current);
    setNav2(sliderRef2.current);
  }, []);

  const mainSliderSettings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: nav2,
  };

  const thumbSliderSettings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: nav1,
    dots: false,
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true,
  };

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="bg-white">
      <div className="pt-24 pb-16 sm:pt-32 sm:pb-24 lg:max-w-7xl lg:mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        {/* Galería de Imágenes */}
        <div className="lg:col-span-7 lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="hidden lg:block lg:col-span-2">
            <Slider
              {...thumbSliderSettings}
              ref={sliderRef2}
              className="product-thumb-slider"
            >
              {product.images.map((image) => (
                <div key={image.id} className="p-1 cursor-pointer">
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="lg:col-span-10">
            <Slider {...mainSliderSettings} ref={sliderRef1}>
              {product.images.map((image) => (
                <div key={image.id} className="aspect-w-1 aspect-h-1">
                  <img src={image.src} alt={image.alt} className="w-full h-[70vh] object-cover" />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Información del Producto */}
        <div className="mt-12 px-4 sm:px-6 lg:mt-0 lg:col-span-5 lg:px-0">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol role="list" className="flex items-center space-x-2 text-sm font-light text-gray-500">
              <li><a href="/" className="hover:text-gray-700">Home</a></li>
              <li><ChevronRight className="h-4 w-4" /></li>
              <li><a href="/collections/accesorios" className="hover:text-gray-700">Accessories</a></li>
            </ol>
          </nav>

          <h1 className="font-belleza text-3xl sm:text-4xl text-gray-900">{product.name}</h1>

          <div className="mt-4">
            <p className="text-3xl text-gray-900">{product.price}</p>
          </div>

          <div className="mt-6">
            <p className="text-base text-gray-600 font-light leading-relaxed">{product.description}</p>
          </div>

          <div className="mt-8">
            {/* Quantity selector */}
            <div className="flex items-center gap-4 mb-8">
              <p className="text-sm font-medium text-gray-900">Quantity:</p>
              <div className="flex items-center border border-gray-300">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-3 py-2 text-gray-500 hover:bg-gray-100 transition-colors">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-center w-12">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-gray-500 hover:bg-gray-100 transition-colors">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-3 bg-[#10867D] text-white px-8 py-4 text-sm tracking-[0.15em] uppercase font-medium hover:bg-[#2a2a2a] transition-all duration-300"
            >
              <ShoppingBag className="h-5 w-5" />
              Add to Cart
            </button>
          </div>

          {/* Acordeón de Detalles */}
          <div className="mt-10">
            {product.details.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openAccordion === index}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Productos Relacionados */}
      <div className="bg-[#f8f7f4] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-belleza text-2xl sm:text-3xl lg:text-4xl font-light tracking-wide mb-12 leading-tight text-gray-900">
              You may also like
            </h2>
        </div>        <FeaturedProducts products={relatedProducts} />
      </div>

      <style jsx global>{`
        .product-thumb-slider .slick-slide {
          opacity: 0.5;
          transition: opacity 0.3s ease;
          border: 2px solid transparent;
        }
        .product-thumb-slider .slick-current {
          opacity: 1;
          border-color: #620c0b;
        }
      `}</style>
    </div>
  );
}