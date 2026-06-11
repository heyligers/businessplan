import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Tickets from './pages/Tickets';
import AttractionDetail from './pages/AttractionDetail';
import Legal from './pages/Legal';
import ParkMap from './pages/ParkMap';
import FAQ from './pages/FAQ';
import Weather from './pages/Weather';
import Events from './pages/Events';
import Contest from './pages/Contest';
import ScrollToTop from './components/ScrollToTop';
import PasswordProtect from './components/PasswordProtect';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <PasswordProtect>
      <LanguageProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="app-container">
            <Header />
            <main className="main-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/events" element={<Events />} />
                <Route path="/contest" element={<Contest />} />
                <Route path="/attraction/:id" element={<AttractionDetail />} />
                <Route path="/legal/:page" element={<Legal />} />
                <Route path="/map" element={<ParkMap />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/weather" element={<Weather />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </CartProvider>
    </LanguageProvider>
    </PasswordProtect>
  );
}

export default App;
