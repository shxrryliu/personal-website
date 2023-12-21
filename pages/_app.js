// root component for styles, univeral components, etc.

import '../styles.css'; 


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
