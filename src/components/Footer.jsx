import { Mail, Phone, Facebook, Twitter, Linkedin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <a href="mailto:contact@thiaroye-education.sn" className="flex items-center hover:text-indigo-400 transition-colors">
                <Mail className="h-5 w-5 mr-2" />
                contact@thiaroye-education.sn
              </a>
              <p className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                +221 33 123 45 67
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200 flex items-center">
              <Heart className="h-5 w-5 mr-2" />
              Faire un don
            </button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 pt-8 border-t border-gray-800 text-center text-sm"
        >
          <p>&copy; {new Date().getFullYear()} Thiaroye Education. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
