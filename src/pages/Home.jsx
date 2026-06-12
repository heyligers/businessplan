import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import AttractionCard from '../components/AttractionCard';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

export default function Home() {
  const { t, formatPrice } = useLanguage();

  const attractions = [
    {
      id: 1,
      title: t('attr_1_title'),
      description: t('attr_1_desc'),
      image: "/images/wibit.png",
      priceNum: 13,
      isFrom: true
    },
    {
      id: 2,
      title: t('attr_2_title'),
      description: t('attr_2_desc'),
      image: "/images/jetski.png",
      priceNum: 70
    },
    {
      id: 3,
      title: t('attr_3_title'),
      description: t('attr_3_desc'),
      image: "/images/sup.png",
      priceNum: 8
    },
    {
      id: 4,
      title: t('attr_4_title'),
      description: t('attr_4_desc'),
      image: "/images/pedalboat.png",
      priceNum: 12
    }
  ];

  return (
    <div className="home-page">
      <div style={{ position: 'absolute', top: '74px', left: 0, width: '100%', background: 'linear-gradient(90deg, var(--accent-gold), #e6b830)', padding: '12px 24px', textAlign: 'center', color: '#1a1a1a', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', zIndex: 100 }}>
        <h3 style={{ margin: '0 0 4px 0', fontSize: '1.2rem', fontWeight: '800' }}>🎉 {t('contest_title')}</h3>
        <p style={{ margin: 0, fontSize: '1rem', fontWeight: '500' }}>
          {t('contest_subtitle')}
          <Link to="/contest" style={{ marginLeft: '12px', color: '#1a1a1a', textDecoration: 'underline', fontWeight: 'bold' }}>
            {t('btn_learn_more')} &rarr;
          </Link>
        </p>
      </div>

      <HeroSection />
      
      <section className="attractions-section">
        <div className="section-header">
          <h2>{t('home_attractions_title')}</h2>
          <p>{t('home_attractions_sub')}</p>
        </div>
        
        <div className="attractions-grid">
          {attractions.map(attr => (
            <AttractionCard 
              key={attr.id}
              id={attr.id}
              title={attr.title}
              description={attr.description}
              image={attr.image}
              price={attr.isFrom ? `${t('from')} ${formatPrice(attr.priceNum)}` : formatPrice(attr.priceNum)}
            />
          ))}
        </div>
      </section>

      <section className="testimonials-section" style={{ padding: '60px 24px', background: 'rgba(36, 67, 105, 0.03)', textAlign: 'center' }}>
        <div className="section-header">
          <h2>{t('testimonials_title')}</h2>
        </div>
        <div className="testimonials-grid" style={{ display: 'flex', gap: '24px', maxWidth: '1200px', margin: '0 auto', flexWrap: 'wrap', justifyContent: 'center' }}>
          
          <div className="testimonial-card glass-panel" style={{ flex: '1', minWidth: '300px', padding: '30px', textAlign: 'left' }}>
            <div className="stars" style={{ color: '#F6C845', marginBottom: '16px', display: 'flex', gap: '4px' }}>
              <Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" />
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#444' }}>"{t('testi_1_text')}"</p>
            <h5 style={{ color: 'var(--primary-blue)', margin: 0 }}>{t('testi_1_author')}</h5>
          </div>

          <div className="testimonial-card glass-panel" style={{ flex: '1', minWidth: '300px', padding: '30px', textAlign: 'left' }}>
            <div className="stars" style={{ color: '#F6C845', marginBottom: '16px', display: 'flex', gap: '4px' }}>
              <Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" />
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#444' }}>"{t('testi_2_text')}"</p>
            <h5 style={{ color: 'var(--primary-blue)', margin: 0 }}>{t('testi_2_author')}</h5>
          </div>

          <div className="testimonial-card glass-panel" style={{ flex: '1', minWidth: '300px', padding: '30px', textAlign: 'left' }}>
            <div className="stars" style={{ color: '#F6C845', marginBottom: '16px', display: 'flex', gap: '4px' }}>
              <Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" /><Star size={20} fill="#F6C845" />
            </div>
            <p style={{ fontStyle: 'italic', marginBottom: '20px', color: '#444' }}>"{t('testi_3_text')}"</p>
            <h5 style={{ color: 'var(--primary-blue)', margin: 0 }}>{t('testi_3_author')}</h5>
          </div>

        </div>
      </section>
    </div>
  );
}
