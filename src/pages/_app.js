import Loading from '@/components/common/Loading';
import '@/styles/globals.css';
import { Suspense, useEffect } from 'react';

export default function App({ Component, pageProps }) {
  function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <Component {...pageProps} />
      </Suspense>
    </>
  );
}
