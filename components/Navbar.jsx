'use client'
import Link from 'next/link';
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/collections/new", text: "Nueva Colección", highlight: false },
  { href: "/collections/hombre", text: "Hombre", highlight: false },
  { href: "/collections/accesorios", text: "Accesorios", highlight: false },
  { href: "/collections/sale", text: "Sale", highlight: true },
];

export default function Navbar({ variant = 'transparent' }) {
  const isSolidVariant = variant === 'solid';
  const [isScrolled, setIsScrolled] = useState(isSolidVariant);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    // Si la variante es sólida, no necesitamos el listener de scroll.
    if (isSolidVariant) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);
  
  return (
    <>
<header 
  className={`fixed top-[38px] -mt-px left-0 right-0 z-50 transition-all duration-500 ${
    isScrolled || isSolidVariant
      ? 'bg-white/95 backdrop-blur-md shadow-md' 
      : 'bg-transparent'
  }`}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-20 py-3 flex items-center justify-between">
            
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link key={link.text} href={link.href} className={`font-belleza text-lg tracking-wider transition-colors duration-300 relative group ${isScrolled || isSolidVariant ? 'text-black hover:text-[#2a2a2a]' : 'text-white hover:text-gray-200'}`}>
                  {link.text}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isScrolled || isSolidVariant ? 'bg-[#2a2a2a]' : 'bg-white'}`}></span>
                </Link>
              ))}
            </nav>

            {/* Logo - Center */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <img 
                  src="/logo-desteny.png"
                  alt="Juan Becerra" 
                  className={`h-20 lg:h-30 w-auto transition-all duration-500 ${
                    isScrolled || isSolidVariant ? 'brightness-100' : 'brightness-0 invert'
                  }`}
                />
              </Link>
            </div>
            
            {/* Right Navigation & Actions */}
            <div className="flex items-center space-x-8">
              <nav className="hidden lg:flex items-center space-x-8">
                {navLinks.slice(2).map((link) => (
                  <Link key={link.text} href={link.href} className={`font-belleza text-lg tracking-wider transition-colors duration-300 relative group ${isScrolled || isSolidVariant ? 'text-black hover:text-[#2a2a2a]' : 'text-white hover:text-gray-200'} ${link.highlight ? 'font-semibold' : 'font-medium'}`}>
                    {link.text}
                    <span className={`absolute bottom-0 left-0 h-0.5 transition-all duration-300 group-hover:w-full ${link.highlight ? 'w-full' : 'w-0'} ${isScrolled || isSolidVariant ? 'bg-[#2a2a2a]' : 'bg-white'}`}></span>
                  </Link>
                ))}
              </nav>
              
              <div className="flex items-center space-x-3">
                <button className={`hidden lg:block p-2 rounded-full transition-colors ${isScrolled || isSolidVariant ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
                  <Search className={`h-5 w-5 ${isScrolled || isSolidVariant ? 'text-black' : 'text-white'}`} />
                </button>
                <button className={`p-2 rounded-full transition-colors ${isScrolled || isSolidVariant ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
                  <User className={`h-5 w-5 ${isScrolled || isSolidVariant ? 'text-black' : 'text-white'}`} />
                </button>
                <button className={`relative p-2 rounded-full transition-colors ${isScrolled || isSolidVariant ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}>
                  <ShoppingBag className={`h-5 w-5 ${isScrolled || isSolidVariant ? 'text-black' : 'text-white'}`} />
                  <span className={`absolute -top-1 -right-1 text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold ${isScrolled || isSolidVariant ? 'bg-black text-white' : 'bg-white text-black'}`}>
                    2
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-full transition-colors ${isScrolled || isSolidVariant ? 'hover:bg-gray-100' : 'hover:bg-white/20'}`}
            >
              <Menu className={`h-6 w-6 ${isScrolled || isSolidVariant ? 'text-black' : 'text-white'}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[70] transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b">
          <img 
            src="/logo-desteny.png"
            alt="Juan Becerra" 
            className="h-16 w-auto"
          />
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        <nav className="flex flex-col p-6 space-y-6">
          {navLinks.map((link) => (
            <Link 
              key={link.text}
              href={link.href} 
              className={`font-belleza text-xl tracking-wider hover:text-[#2a2a2a] transition-colors ${link.highlight ? 'font-semibold text-[#2a2a2a]' : 'font-medium text-gray-900'}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.text}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t space-y-4">
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors">
            <Search className="h-5 w-5 text-gray-900" />
            <span className="text-gray-900">Buscar</span>
          </button>
          <button className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 rounded-lg transition-colors">
            <User className="h-5 w-5 text-gray-900" />
            <span className="text-gray-900">Mi Cuenta</span>
          </button>
          <button className="w-full flex items-center justify-between p-3 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#4a0909] transition-colors">
            <div className="flex items-center gap-3">
              <ShoppingBag className="h-5 w-5" />
              <span>Carrito</span>
            </div>
            <span className="bg-white text-[#2a2a2a] px-2 py-1 rounded-full text-sm font-semibold">
              2
            </span>
          </button>
        </div>
      </div>
    </>
  );
}