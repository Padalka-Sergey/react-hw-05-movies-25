import { Link, useLocation } from 'react-router-dom';
import './AdditionalInfo.css';

export const AdditionalInfo = () => {
  const location = useLocation();
  return (
    <div className="box-info">
      <p>Additional information</p>
      <ul className="info-list">
        <li>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
