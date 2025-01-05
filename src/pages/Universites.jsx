import { motion } from 'framer-motion';
import { MapPin, Users, BookOpen } from 'lucide-react';

const Universites = () => {
  const universities = [
    {
      name: "Université Cheikh Anta Diop",
      location: "Dakar",
      students: "80,000+",
      programs: "150+",
      description: "La plus grande université du Sénégal, offrant une large gamme de programmes.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
      name: "Université Gaston Berger",
      location: "Saint-Louis",
      students: "15,000+",
      programs: "50+",
      description: "Une université reconnue pour son excellence académique et sa recherche.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    },
    {
      name: "Université de Thiès",
      location: "Thiès",
      students: "10,000+",
      programs: "30+",
      description: "Spécialisée dans les sciences appliquées et l'ingénierie.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Nos Universités Partenaires</h1>
          <p className="text-xl text-gray-600">
            Découvrez les meilleures universités du Sénégal et leurs programmes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {universities.map((university, index) => (
            <motion.div
              key={university.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card overflow-hidden"
            >
              <img
                src={university.image}
                alt={university.name}
                className="w-full h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold mb-2">{university.name}</h3>
              
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="w-4 h-4 mr-2" />
                {university.location}
              </div>
              
              <div className="flex items-center text-gray-600 mb-2">
                <Users className="w-4 h-4 mr-2" />
                {university.students} étudiants
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <BookOpen className="w-4 h-4 mr-2" />
                {university.programs} programmes
              </div>
              
              <p className="text-gray-600 mb-4">{university.description}</p>
              
              <button className="btn btn-primary w-full">
                En savoir plus
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Universites;
