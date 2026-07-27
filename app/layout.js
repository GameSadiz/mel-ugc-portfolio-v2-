import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import RevealObserver from '../components/RevealObserver';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
});

const DESCRIPTION =
  'Portafolio de Mel, creadora de contenido UGC: beauty, lifestyle y GRWM para marcas que buscan conexión real.';

export const metadata = {
  title: 'Mel | UGC Content Creator',
  description: DESCRIPTION,
  icons: {
    icon: '/assets/favicon.svg',
  },
  openGraph: {
    title: 'Mel | UGC Content Creator',
    description: DESCRIPTION,
    locale: 'es_CO',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
