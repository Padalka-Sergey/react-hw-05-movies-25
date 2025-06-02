import { Link } from 'react-router-dom';
import css from './LinkMovie.module.css';

export const LinkMovie = ({ movie, stateFromLoc }) => {
  return (
    <li className={css.li}>
      <Link to={`movies/${movie.id}`} state={stateFromLoc}>
        {movie.original_title}
      </Link>
    </li>
  );
};
