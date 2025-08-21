import '../styles.css';
import 'tailwindcss/tailwind.css';

import Layout from '../components/layout';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { variants } from '../components/animationVariants';

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <MotionConfig reducedMotion="user">
        <AnimatePresence mode="wait">
          <motion.div
            key={router.asPath}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={variants.container}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen"
          >
            <motion.div variants={variants.item}>
              <Component {...pageProps} />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </MotionConfig>
    </Layout>
  );
}
