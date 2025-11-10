import AnnouncementBar from "@/components/AnnouncementBar";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductDetail from "@/components/ProductDetail";
import { getProductBySlug, getRelatedProducts } from "@/lib/data";
import { notFound } from "next/navigation";

// Esta función es para generar metadatos dinámicos si lo necesitas en el futuro.
export async function generateMetadata({ params }) {
  // Aquí podrías obtener los datos del producto usando params.slug
  // y retornar un título y descripción dinámicos.
  const productName = params.slug.replace(/-/g, ' ');
  return {
    title: `${productName.charAt(0).toUpperCase() + productName.slice(1)} | Desteny`,
    description: `Product details for ${productName}.`,
  };
}

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  
  // Si el producto no se encuentra, muestra la página 404.
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(params.slug);

  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Navbar variant="solid" />
      <ProductDetail product={product} relatedProducts={relatedProducts} />
      <Footer />
    </main>
  );
}
