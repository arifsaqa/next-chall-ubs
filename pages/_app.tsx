import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { TogglerProvider } from '../components/Context/TogglerContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TogglerProvider>
      <Component {...pageProps} />
    </TogglerProvider>
  );
}
export default MyApp
