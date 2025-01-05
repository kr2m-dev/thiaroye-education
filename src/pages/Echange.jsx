import { motion } from 'framer-motion';
import { MessageCircle, ThumbsUp, Share2, Users, BookOpen, Group, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import AnimatedCard from '../components/AnimatedCard';

const Echange = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: "Fatou Diop",
      avatar: "https://i.pravatar.cc/150?img=1",
      content: "Quelqu'un a-t-il des documents pour préparer le concours de l'ESP ?",
      date: "Il y a 2 heures",
      likes: 12,
      comments: 5,
      shares: 3,
      category: "Concours"
    },
    {
      id: 2,
      author: "Amadou Sow",
      avatar: "https://i.pravatar.cc/150?img=2",
      content: "Je cherche un groupe d'étude pour la préparation du concours EAMAC. Qui est intéressé ?",
      date: "Il y a 5 heures",
      likes: 8,
      comments: 7,
      shares: 2,
      category: "Groupe d'étude"
    },
    {
      id: 3,
      author: "Marie Ndiaye",
      avatar: "https://i.pravatar.cc/150?img=3",
      content: "Je viens de terminer ma première année à l'UCAD. Si vous avez des questions, je peux vous aider !",
      date: "Il y a 1 jour",
      likes: 25,
      comments: 15,
      shares: 8,
      category: "Témoignage"
    }
  ]);

  const exchangeCards = [
    {
      title: "Forum des Étudiants",
      description: "Discutez avec vos camarades de classe et partagez vos expériences.",
      icon: MessageSquare,
      link: "#forum"
    },
    {
      title: "Tutorat en Ligne",
      description: "Obtenez de l'aide pour vos devoirs auprès d'étudiants plus âgés.",
      icon: Users,
      link: "#tutorat"
    },
    {
      title: "Ressources Partagées",
      description: "Accédez à une bibliothèque de ressources partagées.",
      icon: BookOpen,
      link: "#ressources"
    },
    {
      title: "Groupes d'Étude",
      description: "Rejoignez ou créez des groupes d'étude pour réviser ensemble.",
      icon: Group,
      link: "#groupes"
    }
  ];

  const [newPost, setNewPost] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Général');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: posts.length + 1,
      author: "Utilisateur",
      avatar: "https://i.pravatar.cc/150?img=4",
      content: newPost,
      date: "À l'instant",
      likes: 0,
      comments: 0,
      shares: 0,
      category: selectedCategory
    };

    setPosts([post, ...posts]);
    setNewPost('');
  };

  return (
    <div className="min-h-screen py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Espace d'Échange</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partagez vos expériences, posez vos questions et connectez-vous avec la communauté du Lycée de Thiaroye
          </p>
        </motion.div>

        {/* Quick Access Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {exchangeCards.map((card, index) => (
            <AnimatedCard key={index} delay={0.1 * index}>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-indigo-100 rounded-lg mb-4">
                  <card.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{card.title}</h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <a
                  href={card.link}
                  className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center"
                >
                  Accéder
                  <MessageCircle className="ml-2 h-4 w-4" />
                </a>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Create Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-6 mb-8"
        >
          <h2 className="text-2xl font-semibold mb-6">Créer une publication</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-3 border border-gray-200 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="Général">Général</option>
                <option value="Question">Question</option>
                <option value="Concours">Concours</option>
                <option value="Groupe d'étude">Groupe d'étude</option>
                <option value="Témoignage">Témoignage</option>
              </select>
            </div>
            <textarea
              value={newPost}
              onChange={(e) => setNewPost(e.target.value)}
              className="w-full p-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Que voulez-vous partager ?"
              rows="3"
            />
            <button 
              type="submit" 
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
            >
              Publier
            </button>
          </form>
        </motion.div>

        {/* Posts */}
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <img
                    src={post.avatar}
                    alt={post.author}
                    className="w-10 h-10 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{post.author}</div>
                    <div className="text-sm text-gray-500">{post.date}</div>
                  </div>
                </div>
                <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
                  {post.category}
                </span>
              </div>

              <p className="text-gray-700 mb-4">{post.content}</p>

              <div className="flex items-center space-x-6 text-gray-500">
                <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors duration-300">
                  <ThumbsUp className="w-5 h-5" />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5" />
                  <span>{post.comments}</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-indigo-600 transition-colors duration-300">
                  <Share2 className="w-5 h-5" />
                  <span>{post.shares}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Echange;
