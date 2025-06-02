import { Link, useLocation } from 'react-router-dom';
import css from './AdditionalInfo.module.css';

export const AdditionalInfo = () => {
  const location = useLocation();
  return (
    <div className={css.boxInfo}>
      <p>Additional information</p>
      <ul className={css.infoList}>
        <li className={css.itemLi}>
          <Link to="cast" state={{ from: location }}>
            Cast
          </Link>
        </li>
        <li className={css.itemLi}>
          <Link to="reviews" state={{ from: location }}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
};
