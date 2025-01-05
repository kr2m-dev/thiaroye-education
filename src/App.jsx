import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Universites from './pages/Universites';
import Concours from './pages/Concours';
import Echange from './pages/Echange';
import Alumni from './pages/Alumni';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/universites" element={<Universites />} />
            <Route path="/concours" element={<Concours />} />
            <Route path="/echange" element={<Echange />} />
            <Route path="/alumni" element={<Alumni />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
