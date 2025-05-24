// import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { fetchFaforiteMovies } from 'services/fetch-api';
import { LinkMovie } from 'components/LinkMovie/LinkMovie';
import './Home.css';

const Home = () => {
  const [favoriteMovies, setFavoriteMovies] = useState(null);
  useEffect(() => {
    fetchFaforiteMovies()
      .then(res => {
        setFavoriteMovies(res.results);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <main className="main-box">
      <h1 className="title">Trending today</h1>
      {!favoriteMovies && <Loader />}
      {favoriteMovies && (
        <ul>
          {favoriteMovies.map(favoriteMovie => (
            <LinkMovie key={favoriteMovie.id} favoriteMovie={favoriteMovie} />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Home;
