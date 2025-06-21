import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false, // ให้ animation ทำงานทุกครั้งที่เลื่อน
      mirror: true, // ให้ fade out เมื่อเลื่อนผ่าน
      offset: 120,
      anchorPlacement: 'top-bottom',
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;