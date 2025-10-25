import "./globals.css";
import { belleza, moderat } from "../components/fonts";
export const metadata = {
  title: "Juan Becerra",
  description: "Elegancia sin límites. Moda premium que define tu estilo.",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="es">
      <body className={`${belleza.variable} ${moderat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
