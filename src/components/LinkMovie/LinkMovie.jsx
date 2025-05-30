import { Link } from 'react-router-dom';
export const LinkMovie = ({ movie, stateFromLoc }) => {
  return (
    <li>
      <Link to={`movies/${movie.id}`} state={stateFromLoc}>
        {movie.original_title}
      </Link>
    </li>
  );
};
