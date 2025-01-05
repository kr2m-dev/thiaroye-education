import { motion } from 'framer-motion';

const AnimatedCard = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      {children}
    </motion.div>
  );
};

export default AnimatedCard;
