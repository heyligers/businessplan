import { useLanguage } from '../context/LanguageContext';

export default function ParkMap() {
  const { t } = useLanguage();

  return (
    <div className="legal-page fade-in" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 200px)', paddingBottom: '60px', maxWidth: '1000px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '40px', background: 'white', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'center' }}>
        <h1 style={{ color: 'var(--primary-blue)', marginBottom: '16px', fontSize: '2.5rem' }}>{t('map_title')}</h1>
        <p style={{ color: '#666', marginBottom: '40px', fontSize: '1.1rem' }}>{t('map_desc')}</p>
        
        <div className="map-container" style={{ borderRadius: 'var(--radius-sm)', overflow: 'hidden', border: '1px solid rgba(0,0,0,0.1)' }}>
          <img src="/images/park_map_florya_v2.png" alt="Europa-Park Istanbul Map" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}
