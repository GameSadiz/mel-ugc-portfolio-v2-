import { Archivo_Black, DM_Sans } from 'next/font/google';
import './globals.css';
import RevealObserver from '../components/RevealObserver';

const archivoBlack = Archivo_Black({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-archivo-black',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-dm-sans',
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
    <html lang="es" className={`${archivoBlack.variable} ${dmSans.variable}`}>
      <body>
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
