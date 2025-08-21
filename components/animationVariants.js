import { motion } from 'framer-motion';


export const variants = {
  container: {
    hidden: { opacity: 0, y: 12, filter: 'blur(2px)' }, // slightly more offset for a softer feel
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.08,    // slower cascade
        delayChildren: 0.05,
        duration: 0.6,            // slower fade for the container
        ease: [0.25, 1, 0.5, 1],  // smooth, natural ease-out
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] }, // softer exit
    },
  },
  item: {
    hidden: { opacity: 0, y: 12, filter: 'blur(6px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.55,          // slower reveal
        ease: [0.25, 1, 0.5, 1], // gentle easing curve
      },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  },
};

// waterfall
export const Section = ({ className = '', children, ...props }) => (
  <motion.section variants={variants.item} className={className} {...props}>
    {children}
  </motion.section>
);

// parent wrapper
export const ListStagger = ({ className = '', children }) => (
  <motion.div
    className={className}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
    }}
  >
    {children}
  </motion.div>
);

export const Item = ({ as: Tag = 'div', className = '', children }) => (
  <motion.div variants={variants.item} className={className} as={Tag}>
    {children}
  </motion.div>
);
