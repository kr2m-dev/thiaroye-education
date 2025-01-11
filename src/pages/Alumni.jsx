import { motion } from 'framer-motion';
import { Briefcase, Award, Search } from 'lucide-react';
import { useState } from 'react';

const Alumni = () => {
  const alumni = [
    {
      name: "Aminata Diallo",
      promotion: "2020",
      image: "/alumni_photos/2020/aminata_diallo.jpg",
      role: "Ingénieure Logiciel",
      company: "Microsoft",
      specialite: "Informatique",
      achievements: ["Prix d'excellence académique", "Leader Tech Community"],
      quote: "Mon parcours à Thiaroye m'a donné les bases solides pour ma carrière internationale."
    },
    {
      name: "Omar Sy",
      promotion: "2019",
      image: "/alumni_photos/2019/omar_sy.jpg",
      role: "Architecte Solutions",
      company: "Orange Digital",
      specialite: "Mathématiques",
      achievements: ["Innovateur de l'année 2022", "Mentor Tech"],
      quote: "Les valeurs d'excellence et de persévérance acquises ici m'accompagnent chaque jour."
    },
    {
      name: "Beuytir Séne",
      promotion: "2018",
      image: "/alumni_photos/2018/sophie_sene.jpg",
      role: "Médecin",
      company: "Hôpital Principal de Dakar",
      specialite: "Médecine",
      achievements: ["Meilleur interne 2023", "Publication recherche médicale"],
      quote: "Thiaroye m'a appris à voir grand et à oser entreprendre."
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [filterPromo, setFilterPromo] = useState('');
  const [filterSpecialite, setFilterSpecialite] = useState('');

  const filteredAlumni = alumni.filter(person => {
    const matchName = person.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPromo = filterPromo === '' || person.promotion === filterPromo;
    const matchSpecialite = filterSpecialite === '' || person.specialite === filterSpecialite;
    return matchName && matchPromo && matchSpecialite;
  });

  const specialites = [...new Set(alumni.map(person => person.specialite))];
  const promotions = [...new Set(alumni.map(person => person.promotion))];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Nos Alumni</h1>
          <p className="text-xl text-gray-600">
            Découvrez les parcours inspirants de nos anciens étudiants
          </p>
        </motion.div>

        {/* Barre de recherche et filtres */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center bg-white rounded-lg shadow-sm border p-2">
            <Search className="h-5 w-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Rechercher un alumni..."
              className="flex-1 outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-4">
            <select
              value={filterPromo}
              onChange={(e) => setFilterPromo(e.target.value)}
              className="p-2 rounded-lg border outline-none"
            >
              <option value="">Toutes les promotions</option>
              {promotions.map(promo => (
                <option key={promo} value={promo}>Promo {promo}</option>
              ))}
            </select>
            <select
              value={filterSpecialite}
              onChange={(e) => setFilterSpecialite(e.target.value)}
              className="p-2 rounded-lg border outline-none"
            >
              <option value="">Toutes les spécialités</option>
              {specialites.map(spec => (
                <option key={spec} value={spec}>{spec}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAlumni.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <div className="relative mb-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-primary"
                />
                <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm">
                  Promo {person.promotion}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-center mb-2 text-gray-900">{person.name}</h3>
              
              <div className="flex items-center justify-center text-gray-600 mb-2">
                <Briefcase className="w-4 h-4 mr-2" />
                {person.role} - {person.company}
              </div>

              <div className="text-center text-gray-600 mb-2">
                Spécialité: {person.specialite}
              </div>

              <div className="border-t border-b border-gray-200 py-4 my-4">
                <h4 className="font-semibold mb-2 flex items-center justify-center">
                  <Award className="w-4 h-4 mr-2" />
                  Réalisations
                </h4>
                <ul className="list-disc list-inside text-gray-600">
                  {person.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="text-gray-600 italic">
                "{person.quote}"
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alumni;
