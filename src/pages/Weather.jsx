import { Sun, CloudRain, Cloud, Wind, Waves, Thermometer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Weather() {
  const { t } = useLanguage();

  const todayForecast = [
    { time: '10:00', temp: '24°C', icon: <Sun size={24} color="#F6C845" /> },
    { time: '13:00', temp: '28°C', icon: <Sun size={24} color="#F6C845" /> },
    { time: '16:00', temp: '27°C', icon: <Sun size={24} color="#F6C845" /> },
    { time: '19:00', temp: '25°C', icon: <Cloud size={24} color="#90A4AE" /> },
  ];

  const weekForecast = [
    { day: 'Morgen', tempDay: '29°C', tempNight: '22°C', icon: <Sun size={24} color="#F6C845" /> },
    { day: 'Übermorgen', tempDay: '30°C', tempNight: '23°C', icon: <Sun size={24} color="#F6C845" /> },
    { day: 'In 3 Tagen', tempDay: '26°C', tempNight: '20°C', icon: <CloudRain size={24} color="#64B5F6" /> },
    { day: 'In 4 Tagen', tempDay: '27°C', tempNight: '21°C', icon: <Sun size={24} color="#F6C845" /> },
    { day: 'In 5 Tagen', tempDay: '28°C', tempNight: '22°C', icon: <Sun size={24} color="#F6C845" /> },
  ];

  return (
    <div className="legal-page fade-in" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 200px)', paddingBottom: '60px', maxWidth: '900px', margin: '0 auto' }}>
      
      <div className="glass-panel" style={{ padding: '40px', background: 'white', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', marginBottom: '16px' }}>Wetter & Vorhersage</h1>
          <p style={{ color: '#666', fontSize: '1.1rem' }}>Plane deinen perfekten Strandtag am Florya Güneş Plajı</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginBottom: '40px' }}>
          
          <div style={{ background: 'rgba(36, 67, 105, 0.05)', padding: '30px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px' }}>Aktuell</h3>
            <Sun size={64} color="#F6C845" style={{ marginBottom: '16px' }} />
            <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>28°C</div>
            <p style={{ color: '#666', marginTop: '8px' }}>Leichter Wind, sonnig</p>
          </div>

          <div style={{ background: 'var(--primary-blue)', color: 'white', padding: '30px', borderRadius: 'var(--radius-sm)', display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem' }}>
              <Waves size={32} color="#64B5F6" />
              <div>
                <strong style={{ display: 'block' }}>Wassertemperatur</strong>
                <span>24°C</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '1.2rem' }}>
              <Wind size={32} color="#64B5F6" />
              <div>
                <strong style={{ display: 'block' }}>Windgeschwindigkeit</strong>
                <span>12 km/h (Ideal für SUP)</span>
              </div>
            </div>
          </div>

        </div>

        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '12px' }}>Heute im Verlauf</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px', overflowX: 'auto', gap: '16px', paddingBottom: '12px' }}>
          {todayForecast.map((item, idx) => (
            <div key={idx} style={{ flex: '1', minWidth: '100px', background: 'rgba(0,0,0,0.02)', padding: '20px', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
              <div style={{ fontWeight: 'bold', marginBottom: '12px', color: '#555' }}>{item.time}</div>
              <div style={{ marginBottom: '12px' }}>{item.icon}</div>
              <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>{item.temp}</div>
            </div>
          ))}
        </div>

        <h3 style={{ color: 'var(--primary-blue)', marginBottom: '20px', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '12px' }}>Die nächsten Tage</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {weekForecast.map((day, idx) => (
            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: 'rgba(0,0,0,0.02)', borderRadius: 'var(--radius-sm)' }}>
              <div style={{ flex: '2', fontWeight: 'bold', color: '#444' }}>{day.day}</div>
              <div style={{ flex: '1', display: 'flex', justifyContent: 'center' }}>{day.icon}</div>
              <div style={{ flex: '2', display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
                <span style={{ fontWeight: 'bold', color: 'var(--primary-blue)' }}>{day.tempDay}</span>
                <span style={{ color: '#888' }}>{day.tempNight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
