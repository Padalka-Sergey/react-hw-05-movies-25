import { Link } from 'react-router-dom';
import './AdditionalInfo.css';

export const AdditionalInfo = () => {
  return (
    <div className="box-info">
      <p>Additional information</p>
      <ul className="info-list">
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
    </div>
  );
};
