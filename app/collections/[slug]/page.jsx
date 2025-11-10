import AnnouncementBar from "@/components/AnnouncementBar";
import CategoryPage from "@/components/CategoryPage";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getProductsByCategory } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const categoryName = params.slug.replace(/-/g, ' ');
  return {
    title: `Collection ${categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} | Desteny`,
  };
}

export default function CollectionPage({ params }) {
  const products = getProductsByCategory(params.slug);

  // Aunque no haya productos, mostramos la página de categoría vacía.
  // Podrías usar notFound() si prefieres mostrar un 404 para categorías sin productos.

  return (
    <main>
      <AnnouncementBar />
      <Navbar variant="solid" />
      <CategoryPage categoryName={params.slug} products={products} />
      <Footer />
    </main>
  );
}

