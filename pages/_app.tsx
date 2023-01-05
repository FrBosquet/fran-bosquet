import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const poppins = Poppins({
  weight: ['100', '300', '700'],
  variable: '--font-poppins',
  subsets: ["latin"]
});

export default function App({ Component, pageProps }: AppProps) {
  return <main className={`${poppins.variable} font-sans`}>
    <Component {...pageProps} />
  </main>
}
