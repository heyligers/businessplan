import HeroSection from '../components/HeroSection';
import AttractionCard from '../components/AttractionCard';
import { Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();

  const attractions = [
    {
      id: 1,
      title: t('attr_1_title'),
      description: t('attr_1_desc'),
      image: "/images/wibit.png",
      price: `${t('from')} 13,00 €`
    },
    {
      id: 2,
      title: t('attr_2_title'),
      description: t('attr_2_desc'),
      image: "/images/jetski.png",
      price: "70,00 €"
    },
    {
      id: 3,
      title: t('attr_3_title'),
      description: t('attr_3_desc'),
      image: "/images/sup.png",
      price: "8,00 €"
    },
    {
      id: 4,
      title: t('attr_4_title'),
      description: t('attr_4_desc'),
      image: "/images/pedalboat.png",
      price: "12,00 €"
    }
  ];

  return (
    <div className="home-page">
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
              price={attr.price}
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
