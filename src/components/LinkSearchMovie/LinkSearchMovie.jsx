import { Link } from 'react-router-dom';
import css from './LinkSearchMovie.module.css';

export const LinkSearchMovie = ({ movie, stateFromLoc }) => {
  return (
    <li className={css.li}>
      <Link to={`${movie.id}`} state={stateFromLoc}>
        {movie.original_title}
      </Link>
    </li>
  );
};
