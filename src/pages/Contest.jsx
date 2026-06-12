import { useLanguage } from '../context/LanguageContext';
import { Camera, Smartphone, Video, Heart, Sparkles, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import './Contest.css';

export default function Contest() {
  const { t } = useLanguage();

  return (
    <div className="page-container contest-page" style={{ paddingTop: '100px', minHeight: '100vh', background: 'linear-gradient(to bottom, #f0f8ff, #fff)' }}>
      <div className="contest-hero">
        <div className="contest-text-content">
          <h1 className="contest-title">
            <Sparkles className="sparkle-icon" size={40} />
            {t('contest_title')}
          </h1>
          <p className="contest-subtitle">{t('contest_subtitle')}</p>
          <p className="contest-desc">{t('contest_desc')}</p>
        </div>
        <div className="contest-image-container">
          <div className="insta-frame">
            <div className="insta-header">
              <div className="insta-user-info">
                <div className="insta-avatar">
                  <img src="/images/roxen_ref.png" alt="Avatar" />
                </div>
                <span className="insta-username">Aquarena Istanbul</span>
              </div>
              <MoreHorizontal size={20} className="insta-more" />
            </div>
            <div className="insta-photo-wrapper">
              <img src="/images/contest_photo.png" alt="Contest Header" className="insta-photo" />
            </div>
            <div className="insta-actions">
              <div className="insta-action-left">
                <Heart size={24} className="action-icon liked" fill="#ed4956" color="#ed4956" />
                <MessageCircle size={24} className="action-icon" />
                <Send size={24} className="action-icon" />
              </div>
              <Bookmark size={24} className="action-icon" />
            </div>
            <div className="insta-likes">Gefällt 15.420 Mal</div>
            <div className="insta-caption">
              <span className="insta-username">Aquarena Istanbul</span> Macht mit beim großen Gewinnspiel! 🌊🎢
            </div>
          </div>
        </div>
      </div>

      <div className="contest-rules-section">
        <h2 className="rules-title">{t('contest_rules_title')}</h2>
        <div className="rules-grid">
          <div className="rule-card">
            <div className="rule-icon"><Camera size={32} /></div>
            <p>{t('contest_rule_1')}</p>
          </div>
          <div className="rule-card">
            <div className="rule-icon"><Video size={32} /></div>
            <p>{t('contest_rule_2')}</p>
          </div>
          <div className="rule-card">
            <div className="rule-icon"><Smartphone size={32} /></div>
            <p>{t('contest_rule_3')}</p>
          </div>
          <div className="rule-card">
            <div className="rule-icon"><Heart size={32} /></div>
            <p>{t('contest_rule_4')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
