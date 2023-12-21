// root component for styles, univeral components, etc.
import '../styles.css'; 
import 'tailwindcss/tailwind.css'


export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
