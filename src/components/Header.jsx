import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Ticket, Menu, Globe, Sun, Waves, Droplets, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
  const { t, language, setLanguage } = useLanguage();
  const { cart } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="header-container">
      <div className="header-inner">
        <Link to="/" className="logo-section">
          <div className="logo-icon"><Droplets size={32} /></div>
          <div className="logo-text">
            <span className="logo-title">Europa-Park Istanbul</span>
            <span className="logo-subtitle">Resort & Water Fun</span>
          </div>
        </Link>
        
        <nav className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-item" onClick={closeMenu}>{t('nav_park')}</Link>
          <Link to="/events" className="nav-item" onClick={closeMenu}>{t('nav_events')}</Link>
          <Link to="/contest" className="nav-item" onClick={closeMenu} style={{ color: '#F6C845', fontWeight: 'bold' }}>{t('nav_contest')}</Link>
          <Link to="/tickets" state={{ resetCart: true }} className="nav-item" onClick={closeMenu}>{t('nav_tickets')}</Link>
          <a href="#footer" className="nav-item" onClick={closeMenu}>{t('nav_infos')}</a>
        </nav>
        
        <div className="header-actions">
          <Link to="/weather" className="weather-widget" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginRight: '16px', fontSize: '0.9rem', color: 'white', textDecoration: 'none', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '20px', transition: 'background 0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} title={t('weather_air')}>
              <Sun size={18} color="#F6C845" />
              <span style={{ fontWeight: '500' }}>28°C</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }} title={t('weather_water')}>
              <Waves size={18} color="#64B5F6" />
              <span style={{ fontWeight: '500' }}>24°C</span>
            </div>
          </Link>

          <div className="lang-switcher" style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '20px' }}>
            <Globe size={18} />
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value)}
              className="lang-select"
              style={{ cursor: 'pointer', outline: 'none', border: 'none', background: 'transparent', color: 'inherit', fontWeight: '600' }}
            >
              <option value="de" style={{ color: '#333' }}>DE</option>
              <option value="en" style={{ color: '#333' }}>EN</option>
              <option value="tr" style={{ color: '#333' }}>TR</option>
            </select>
          </div>
          
          <Link to="/tickets" state={{ openCart: true }} className="cart-icon-container">
            <ShoppingCart size={24} />
            {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </Link>
          
          <Link to="/tickets" state={{ resetCart: true }} className="btn-primary" style={{ whiteSpace: 'nowrap' }}>
            <Ticket size={20} />
            <span>{t('btn_book')}</span>
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
