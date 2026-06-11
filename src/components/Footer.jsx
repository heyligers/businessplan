import './Footer.css';
import { Link } from 'react-router-dom';
import { Droplets, Globe, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="footer" className="footer-container">
      <div className="footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <Droplets size={32} color="#F6C845" />
            <h2>Europa-Park Istanbul</h2>
          </div>
          <p>{t('footer_desc')}</p>
          <div className="social-links">
            <a href="#"><Globe /></a>
            <a href="#"><Mail /></a>
            <a href="#"><Phone /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>{t('footer_discover')}</h3>
          <Link to="/">{t('nav_park')}</Link>
          <Link to="/events">{t('nav_events')}</Link>
          <Link to="/tickets">{t('nav_tickets')}</Link>
          <Link to="/map">{t('nav_map')}</Link>
        </div>
        
        <div className="footer-links">
          <h3>{t('footer_info')}</h3>
          <div id="öffnungszeiten" style={{ marginBottom: '12px', color: 'var(--text-light)' }}>
            <strong>{t('opening_hours_label')}</strong><br/>
            {t('opening_hours_time')}
          </div>
          <Link to="/tickets">Preise & Tickets</Link>
          <a href="https://maps.google.com/?q=Florya+Güneş+Plajı+Istanbul" target="_blank" rel="noopener noreferrer">Anfahrt & Parken</a>
          <Link to="/map">{t('nav_map')}</Link>
          <Link to="/faq">{t('nav_faq')}</Link>
        </div>
        
        <div className="footer-links">
          <h3>{t('footer_legal')}</h3>
          <Link to="/legal/impressum">Impressum</Link>
          <Link to="/legal/datenschutz">Datenschutz</Link>
          <Link to="/legal/agb">AGB</Link>
          <a href="mailto:info@europapark-istanbul.com">Kontakt</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Europa-Park Istanbul. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  );
}
