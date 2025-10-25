// /components/CatCompanion.jsx
'use client';

import Image from 'next/image';

const CatCompanion = () => {
  return (
    <div className="fixed bottom-0 right-4 z-50 pointer-events-none">
      {/* Usamos next/image para optimizar el GIF */}
      <Image
        src="/cat.gif" // Asegúrate de que tu GIF se llame 'cat.gif' y esté en la carpeta 'public'
        alt="Un gato animado asomándose"
        width={150} // Ajusta el tamaño según tu GIF
        height={150} // Ajusta el tamaño según tu GIF
        unoptimized={true} // Importante para que los GIFs se animen
      />
    </div>
  );
};

export default CatCompanion;