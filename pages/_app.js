import '@/styles/globals.css'
import '@/styles/styles.css'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    Aos.init();
  }, []);

  return <Component {...pageProps} />
}
