import { Geist, Geist_Mono, Merriweather, Lato } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-merriweather",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
});

export const metadata = {
  title: "Seguro de Salud Obamacare - American Solutions Center",
  description: "Seguro de salud Obamacare asequible para ti y tu familia. Obtén cobertura en minutos con beneficios de salud esenciales y subsidios disponibles.",
  icons: {
    icon: [
      { url: "/logok.png", type: "image/png" },
    ],
    shortcut: "/logok.png",
    apple: "/logok.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} ${lato.variable} antialiased`}
        style={{ fontFamily: 'var(--font-lato), "Helvetica Neue", Arial, sans-serif' }}
      >
        {children}
      </body>
    </html>
  );
}
