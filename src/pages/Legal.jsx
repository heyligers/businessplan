import { useParams } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Legal.css';

export default function Legal() {
  const { page } = useParams();
  const { t } = useLanguage();

  const getContent = () => {
    switch (page) {
      case 'impressum':
        return (
          <>
            <h1>{t('legal_impressum_title')}</h1>
            <div className="legal-block">
              <h2>{t('legal_impressum_tmg')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('legal_impressum_address') }}></p>
              
              <h2>{t('legal_impressum_represented')}</h2>
              <p>{t('legal_impressum_management')}</p>

              <h2>{t('legal_impressum_contact')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('legal_impressum_contact_info') }}></p>

              <h2>{t('legal_impressum_register')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('legal_impressum_register_info') }}></p>

              <h2>{t('legal_impressum_vat')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('legal_impressum_vat_info') }}></p>

              <h2>{t('legal_impressum_responsible')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('legal_impressum_responsible_info') }}></p>
            </div>
          </>
        );
      case 'datenschutz':
        return (
          <>
            <h1>{t('legal_privacy_title')}</h1>
            <div className="legal-block">
              <h2>{t('legal_privacy_overview')}</h2>
              <h3>{t('legal_privacy_general')}</h3>
              <p>{t('legal_privacy_general_text')}</p>

              <h2>{t('legal_privacy_data_collection')}</h2>
              <h3>{t('legal_privacy_cookies')}</h3>
              <p>{t('legal_privacy_cookies_text')}</p>

              <h3>{t('legal_privacy_server_log')}</h3>
              <p>{t('legal_privacy_server_log_text')}</p>

              <h2>{t('legal_privacy_payment')}</h2>
              <p>{t('legal_privacy_payment_text')}</p>
            </div>
          </>
        );
      case 'agb':
        return (
          <>
            <h1>{t('legal_agb_title')}</h1>
            <div className="legal-block">
              <h2>{t('legal_agb_scope')}</h2>
              <p>{t('legal_agb_scope_text')}</p>

              <h2>{t('legal_agb_contract')}</h2>
              <p>{t('legal_agb_contract_text')}</p>

              <h2>{t('legal_agb_safety')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('legal_agb_safety_text') }}></p>

              <h2>{t('legal_agb_liability')}</h2>
              <p>{t('legal_agb_liability_text')}</p>
              
              <h2>{t('legal_agb_cancellation')}</h2>
              <p>{t('legal_agb_cancellation_text')}</p>
            </div>
          </>
        );
      default:
        return <h1>{t('legal_not_found')}</h1>;
    }
  };

  return (
    <div className="legal-page fade-in">
      <div className="legal-container glass-panel">
        {getContent()}
      </div>
    </div>
  );
}
