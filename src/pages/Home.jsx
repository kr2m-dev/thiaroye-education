import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Users, Award, Newspaper, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedCard from '../components/AnimatedCard';

const Home = () => {
  const news = [
    {
      title: "Cérémonie de remise des diplômes 2024",
      date: "15 Mars 2024",
      description: "La cérémonie annuelle de remise des diplômes aura lieu le 15 juillet 2024. Tous les diplômés et leurs familles sont conviés à cet événement prestigieux.",
      category: "Événement"
    },
    {
      title: "Nouveau partenariat universitaire",
      date: "20 Mars 2024",
      description: "Nous sommes ravis d'annoncer un nouveau partenariat avec l'Université Cheikh Anta Diop de Dakar, offrant des opportunités exclusives à nos étudiants.",
      category: "Partenariat"
    },
    {
      title: "Succès aux olympiades nationales",
      date: "10 Mars 2024",
      description: "Nos élèves ont brillamment représenté le lycée en remportant 3 médailles aux olympiades nationales de mathématiques. Une fierté pour notre établissement!",
      category: "Réussite"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section avec animation améliorée */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://referenceactu.com/wp-content/uploads/2021/11/LYCEE-DE-THIAROYE.jpeg"
            alt="Lycée de Thiaroye"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </motion.div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Bienvenue à Thiaroye Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-xl md:text-2xl mb-8"
          >
            Votre porte vers l'excellence académique et le développement personnel
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex gap-4 justify-center"
          >
            <Link
              to="/universites"
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
            >
              Découvrir nos programmes
            </Link>
            <Link
              to="/contact"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Quick Links Section avec design amélioré */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            Accès Rapide
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedCard delay={0.2}>
              <div className="p-6 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                <Award className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Concours</h3>
                <p className="text-gray-600 mb-4">Découvrez les opportunités de concours pour nos élèves et préparez votre avenir.</p>
                <Link to="/concours" className="text-indigo-600 hover:text-indigo-700 flex items-center">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.4}>
              <div className="p-6 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                <BookOpen className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Universités</h3>
                <p className="text-gray-600 mb-4">Explorez les options universitaires et les programmes disponibles pour votre futur parcours.</p>
                <Link to="/universites" className="text-indigo-600 hover:text-indigo-700 flex items-center">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.6}>
              <div className="p-6 hover:bg-white hover:shadow-xl transition-all duration-300 rounded-xl h-full">
                <Users className="h-12 w-12 text-indigo-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Alumni</h3>
                <p className="text-gray-600 mb-4">Connectez-vous avec nos anciens élèves et partagez vos expériences enrichissantes.</p>
                <Link to="/alumni" className="text-indigo-600 hover:text-indigo-700 flex items-center">
                  En savoir plus <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* News Section avec design amélioré */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Actualités du Lycée</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restez informé des dernières nouvelles et événements importants de notre établissement
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <AnimatedCard key={index} delay={0.2 * index}>
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                        {item.category}
                      </span>
                      <p className="text-sm text-gray-500">{item.date}</p>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <Link 
                      to="/actualites" 
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium group"
                    >
                      Lire la suite 
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-12"
          >
            <Link
              to="/actualites"
              className="inline-flex items-center px-6 py-3 border border-indigo-600 text-indigo-600 hover:bg-indigo-600 hover:text-white rounded-lg font-medium transition-colors duration-300"
            >
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
