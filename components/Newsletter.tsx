'use client';

import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: string } | null>(null);

  const handleSubmit = () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setToast({ message: '¡Gracias por suscribirte!', type: 'success' });
      setEmail('');
      setTimeout(() => setToast(null), 3000);
    }, 1200);
  };

  return (
    <div className="bg-white py-16 sm:py-24">
      {toast && (
        <div
          className={`fixed top-5 right-5 rounded-lg px-6 py-4 shadow-lg text-white transition-all duration-300 z-50 ${
            toast.type === 'success' ? 'bg-green-600' : 'bg-red-600'
          }`}
        >
          {toast.message}
        </div>
      )}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#620c0b]/10 mb-6">
          <Mail className="h-8 w-8 text-[#620c0b]" />
        </div>

        <h2 className="font-belleza text-2xl sm:text-3xl lg:text-5xl font-light tracking-wide mb-6 leading-tight text-gray-900">
          Suscríbete a nuestro Newsletter
        </h2>
        
        <p className="font-moderat text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
          Recibe las últimas noticias, colecciones y ofertas especiales directamente en tu bandeja de entrada.
        </p>

        <div className="mt-10 mx-auto max-w-xl">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              id="email-address"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
              className="font-moderat flex-auto border border-gray-300 bg-white px-5 py-3.5 text-gray-900 placeholder:text-gray-400 focus:border-[#620c0b] focus:ring-2 focus:ring-[#620c0b] focus:outline-none transition-all duration-300 text-base"
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="font-moderat flex-none bg-[#10867D] px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-medium text-white hover:bg-[#2a2a2a] focus:outline-none focus:ring-2 focus:ring-[#620c0b] focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300"
            >
              {isSubmitting ? 'Enviando...' : 'Suscribirse'}
            </button>
          </div>
          
          <p className="font-moderat text-xs text-gray-500 mt-4 leading-relaxed">
            Al suscribirte, aceptas recibir correos de Juan Becerra. Puedes cancelar en cualquier momento.
          </p>
        </div>
      </div>
    </div>
  );
}