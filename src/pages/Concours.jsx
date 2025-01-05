import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Concours = () => {
  const competitions = [
    {
      title: "Concours d'entrée à l'École Polytechnique",
      date: "15 Avril 2024",
      time: "08:00",
      location: "Dakar",
      description: "Concours national pour l'admission à l'École Polytechnique de Thiès.",
      deadline: "1 Avril 2024",
      requirements: ["Bac scientifique", "Moins de 23 ans", "Dossier complet"]
    },
    {
      title: "Concours EAMAC",
      date: "20 Mai 2024",
      time: "09:00",
      location: "Multiple centres",
      description: "Concours d'entrée à l'École Africaine de la Météorologie et de l'Aviation Civile.",
      deadline: "5 Mai 2024",
      requirements: ["Bac scientifique", "Moins de 21 ans", "Aptitude médicale"]
    },
    {
      title: "Concours ESP",
      date: "10 Juin 2024",
      time: "08:30",
      location: "Dakar",
      description: "Concours d'entrée à l'École Supérieure Polytechnique de Dakar.",
      deadline: "25 Mai 2024",
      requirements: ["Bac scientifique", "Dossier académique", "Frais d'inscription"]
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
          <h1 className="text-4xl font-bold mb-4">Concours et Examens</h1>
          <p className="text-xl text-gray-600">
            Retrouvez tous les concours à venir et leurs modalités
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card"
            >
              <h3 className="text-xl font-semibold mb-4">{competition.title}</h3>
              
              <div className="flex items-center text-gray-600 mb-2">
                <Calendar className="w-4 h-4 mr-2" />
                {competition.date}
              </div>
              
              <div className="flex items-center text-gray-600 mb-2">
                <Clock className="w-4 h-4 mr-2" />
                {competition.time}
              </div>
              
              <div className="flex items-center text-gray-600 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                {competition.location}
              </div>
              
              <p className="text-gray-600 mb-4">{competition.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Conditions requises :</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {competition.requirements.map((req, i) => (
                    <li key={i}>{req}</li>
                  ))}
                </ul>
              </div>
              
              <div className="text-sm text-red-600 mb-4">
                Date limite d'inscription : {competition.deadline}
              </div>
              
              <button className="btn btn-primary w-full">
                S'inscrire
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Concours;
