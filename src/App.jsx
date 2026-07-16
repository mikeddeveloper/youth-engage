import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Events from './pages/Events';
import Join from './pages/Join';
import './App.css';

function ScrollReset() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: 'ease-out-quart',
      once: true,
      offset: 80,
    });
  }, []);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <AOSInit />
      <ScrollReset />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
