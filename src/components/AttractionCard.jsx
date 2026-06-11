import { Link } from 'react-router-dom';
import './AttractionCard.css';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function AttractionCard({ id, title, description, image, price }) {
  const { t } = useLanguage();

  return (
    <div className="attraction-card">
      <div className="card-image-wrapper">
        <img src={image} alt={title} className="card-image" />
        <div className="card-price">{price}</div>
      </div>
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={`/attraction/${id}`} className="btn-link">
          {t('card_more')} <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
