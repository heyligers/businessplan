import { useState } from 'react';
import { Calendar, Users, ChevronRight, Activity } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import './HeroSection.css';

export default function HeroSection() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { bookingDate, setBookingDate } = useCart();
  const [capacity] = useState(68);

  return (
    <section className="hero-section">
      <div className="hero-bg">
        <img src="/images/hero.png" alt="Aqua Park Panorama" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text fade-in">
          <h1>{t('hero_title')}</h1>
          <p>{t('hero_subtitle')}</p>
        </div>
        
        <div className="hero-widgets fade-in" style={{ animationDelay: '0.2s' }}>
          
          <div className="glass-panel quick-book">
            <h2>{t('quick_book_title')}</h2>
            <div className="book-controls">
              <div className="input-group">
                <Calendar size={20} />
                <input 
                  type="date" 
                  className="book-input" 
                  value={bookingDate} 
                  onChange={e => setBookingDate(e.target.value)} 
                />
              </div>
              <div className="input-group">
                <Users size={20} />
                <select className="book-input">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4+</option>
                </select>
              </div>
              <button className="btn-primary" onClick={() => navigate('/tickets')}>
                {t('btn_book_now')} <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="glass-panel capacity-widget">
            <div className="capacity-header">
              <Activity size={24} color="#F6C845" />
              <h3>{t('capacity_title')}</h3>
            </div>
            <div className="capacity-bar-container">
              <div 
                className={`capacity-bar ${capacity < 50 ? 'low' : capacity < 80 ? 'medium' : 'high'}`} 
                style={{ width: `${capacity}%` }}
              ></div>
            </div>
            <p className="capacity-text">
              {capacity}% - {capacity < 50 ? t('capacity_low') : capacity < 80 ? t('capacity_med') : t('capacity_high')}
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
