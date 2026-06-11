import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight, ShieldCheck, Wrench, Sparkles, ArrowLeft } from 'lucide-react';
import './AttractionDetail.css';

export default function AttractionDetail() {
  const { id } = useParams();
  const { t } = useLanguage();

  const getAttractionData = () => {
    switch(id) {
      case '1':
        return {
          title: t('attr_1_title'),
          image: '/images/wibit.png',
          exp: t('attr_1_exp'),
          equip: t('attr_1_equip'),
          safe: t('attr_1_safe'),
        };
      case '2':
        return {
          title: t('attr_2_title'),
          image: '/images/jetski.png',
          exp: t('attr_2_exp'),
          equip: t('attr_2_equip'),
          safe: t('attr_2_safe'),
        };
      case '3':
        return {
          title: t('attr_3_title'),
          image: '/images/sup.png',
          exp: t('attr_3_exp'),
          equip: t('attr_3_equip'),
          safe: t('attr_3_safe'),
        };
      case '4':
        return {
          title: t('attr_4_title'),
          image: '/images/pedalboat.png',
          exp: t('attr_4_exp'),
          equip: t('attr_4_equip'),
          safe: t('attr_4_safe'),
        };
      default:
        return null;
    }
  };

  const data = getAttractionData();

  if (!data) return <div className="detail-page-container">Attraction not found</div>;

  return (
    <div className="detail-page-container fade-in">
      
      <div className="detail-hero" style={{ backgroundImage: `url(${data.image})` }}>
        <div className="detail-overlay"></div>
        <div className="detail-hero-content">
          <Link to="/" className="back-link"><ArrowLeft size={16} /> Zurück zum Park</Link>
          <h1>{data.title}</h1>
        </div>
      </div>

      <div className="detail-content-wrapper">
        <div className="detail-card glass-panel">
          
          <div className="detail-section">
            <h2 className="section-title"><Sparkles size={24} color="#F6C845" /> {t('detail_experience')}</h2>
            <p>{data.exp}</p>
          </div>

          <div className="detail-section">
            <h2 className="section-title"><Wrench size={24} color="#244369" /> {t('detail_equipment')}</h2>
            <p>{data.equip}</p>
          </div>

          <div className="detail-section">
            <h2 className="section-title"><ShieldCheck size={24} color="#4caf50" /> {t('detail_safety')}</h2>
            <p>{data.safe}</p>
          </div>

          <div className="detail-action">
            <Link to="/tickets" className="btn-primary large-btn">
              {t('btn_book_attraction')} <ChevronRight size={20} />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}
