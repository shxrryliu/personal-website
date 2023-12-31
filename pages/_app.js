// root component for styles, univeral components, etc.
import '../styles.css'; 
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout';
import { AnimatePresence , motion } from 'framer-motion';
import { fadeInVariants } from '../animationVariants';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence mode='wait'>
        <motion.div
          key={router.route}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={fadeInVariants}
          transition={{ duration: 0.5 }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}