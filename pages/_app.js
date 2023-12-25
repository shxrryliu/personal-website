// root component for styles, univeral components, etc.
import '../styles.css'; 
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
)}
