import '@/styles/globals.css'
import '@/styles/styles.css'
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from 'aos';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <ToastContainer />
      <Component {...pageProps} />
    </>
  );
}
