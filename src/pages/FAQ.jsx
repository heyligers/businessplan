import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function FAQ() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState(1);

  const faqs = [
    { id: 1, q: t('faq_1_q'), a: t('faq_1_a') },
    { id: 2, q: t('faq_2_q'), a: t('faq_2_a') },
    { id: 3, q: t('faq_3_q'), a: t('faq_3_a') },
    { id: 4, q: t('faq_4_q'), a: t('faq_4_a') },
  ];

  return (
    <div className="legal-page fade-in" style={{ paddingTop: '100px', minHeight: 'calc(100vh - 200px)', paddingBottom: '60px', maxWidth: '800px', margin: '0 auto' }}>
      <div className="glass-panel" style={{ padding: '40px', background: 'white', borderRadius: 'var(--radius-md)', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
        <h1 style={{ color: 'var(--primary-blue)', marginBottom: '16px', fontSize: '2.5rem' }}>{t('faq_title')}</h1>
        <p style={{ color: '#666', marginBottom: '40px', fontSize: '1.1rem' }}>{t('faq_desc')}</p>
        
        <div className="faq-list">
          {faqs.map(faq => (
            <div 
              key={faq.id} 
              className="faq-item" 
              style={{ marginBottom: '16px', border: '1px solid rgba(0,0,0,0.1)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}
            >
              <div 
                className="faq-header" 
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: openId === faq.id ? 'rgba(36, 67, 105, 0.05)' : 'white' }}
              >
                <h3 style={{ margin: 0, fontSize: '1.1rem', color: 'var(--primary-blue)' }}>{faq.q}</h3>
                {openId === faq.id ? <ChevronUp size={20} color="var(--primary-blue)" /> : <ChevronDown size={20} color="#666" />}
              </div>
              {openId === faq.id && (
                <div className="faq-body" style={{ padding: '20px', background: 'rgba(0,0,0,0.02)', borderTop: '1px solid rgba(0,0,0,0.05)', color: '#555', lineHeight: '1.6' }}>
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
