import { Link } from 'react-router-dom';
export const LinkSearchMovie = ({ movie, stateFromLoc }) => {
  return (
    <li>
      <Link to={`${movie.id}`} state={stateFromLoc}>
        {movie.original_title}
      </Link>
    </li>
  );
};
