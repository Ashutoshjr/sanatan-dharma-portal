import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Deities from './pages/Deities';
import Aarti from './pages/Aarti';
import Calendar from './pages/Calendar';
import Scriptures from './pages/Scriptures';
import Temples from './pages/Temples';
import Yoga from './pages/Yoga';
import Community from './pages/Community';

export default function App() {
  return (
    <div className="min-h-screen bg-dharma-bg text-ivory">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/deities" element={<Deities />} />
          <Route path="/deities/:id" element={<Deities />} />
          <Route path="/aarti" element={<Aarti />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/scriptures" element={<Scriptures />} />
          <Route path="/temples" element={<Temples />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
