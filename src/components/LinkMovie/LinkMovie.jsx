import { Link } from 'react-router-dom';
export const LinkMovie = ({ favoriteMovie }) => {
  return (
    <li>
      <Link to={`movies/${favoriteMovie.id}`}>
        {favoriteMovie.original_title}
      </Link>
    </li>
  );
};
