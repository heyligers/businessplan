import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Ticket } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Events() {
  const { t } = useLanguage();

  const eventsList = [
    {
      id: 1,
      title: t('ev_1_title'),
      date: t('ev_1_date'),
      location: "Shallow Water Arena",
      icon: <Users size={32} color="var(--primary-blue)" />,
      description: t('ev_1_desc'),
      image: "/images/event_volleyball.png"
    },
    {
      id: 2,
      title: t('ev_2_title'),
      date: t('ev_2_date'),
      location: "Deep Water Arena",
      icon: <MapPin size={32} color="var(--accent-red)" />,
      description: t('ev_2_desc'),
      image: "/images/event_waterpolo.png"
    },
    {
      id: 3,
      title: t('ev_3_title'),
      date: t('ev_3_date'),
      location: "Wibit Action Park",
      icon: <Calendar size={32} color="var(--accent-gold)" />,
      description: t('ev_3_desc'),
      image: "/images/event_captureflag.png"
    }
  ];

  return (
    <div className="page-container" style={{ padding: '40px 24px', maxWidth: '1000px', margin: '0 auto', paddingTop: '100px' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: 'var(--primary-blue)', fontSize: '2.5rem', marginBottom: '16px' }}>{t('events_title')}</h1>
        <p style={{ color: '#666', fontSize: '1.2rem' }}>{t('events_sub')}</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        {eventsList.map(event => (
          <div key={event.id} className="glass-panel" style={{ display: 'flex', gap: '24px', padding: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
            <div style={{ flex: '1', minWidth: '250px', borderRadius: 'var(--radius-md)', overflow: 'hidden', height: '200px' }}>
              <img src={event.image} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ flex: '2', minWidth: '300px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                {event.icon}
                <h2 style={{ color: 'var(--primary-blue)', margin: 0 }}>{event.title}</h2>
              </div>
              
              <div style={{ display: 'flex', gap: '24px', marginBottom: '16px', color: '#555', fontSize: '0.9rem', fontWeight: '500' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> {event.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={16} /> {event.location}</span>
              </div>
              
              <p style={{ color: '#444', lineHeight: '1.6', marginBottom: '24px' }}>
                {event.description}
              </p>
              
              <Link to="/tickets" state={{ resetCart: true }} className="btn-primary" style={{ display: 'inline-flex', padding: '10px 24px' }}>
                <Ticket size={18} /> {t('btn_join_event')}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
