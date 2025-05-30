import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchFaforiteMovies } from 'services/fetch-api';
import { LinkMovie } from 'components/LinkMovie/LinkMovie';
import './Home.css';

const Home = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    fetchFaforiteMovies()
      .then(res => {
        setFavoriteMovies(res.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="main-box">
      {favoriteMovies && (
        <>
          <h1 className="title">Trending today</h1>
          <ul>
            {favoriteMovies.map(movie => (
              <LinkMovie
                key={movie.id}
                movie={movie}
                stateFromLoc={{ from: location }}
              />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Home;
