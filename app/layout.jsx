import "./globals.css";
import { belleza, moderat } from "../components/fonts";
export const metadata = {
  title: "Desteny",
  description: "Limitless elegance. Premium fashion that defines your style.",
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
