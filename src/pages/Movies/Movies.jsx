import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { LinkSearchMovie } from 'components/LinkSearchMovie/LinkSearchMovie';
import { getSearhMovies } from 'services/fetch-api';
import css from './Movies.module.css';

const Movies = () => {
  const [searchMovie, setSearchMovie] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    if (!query) {
      return;
    }

    getSearhMovies(query)
      .then(res => {
        setSearchMovie(res.results);
      })
      .catch(err => console.error(err));
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    setSearchParams({ query: form.elements.input.value });
    form.reset();
  };

  return (
    <main>
      <form className={css.form} onSubmit={handleSubmit}>
        <input type="text" name="input" size={30} />
        <button type="submit">Search</button>
      </form>
      {!searchMovie && query === '' && (
        <p className={css.errorText}>Enter a valid request!</p>
      )}
      {searchMovie?.length === 0 && (
        <p className={css.errorText}>Movies with this name not found!</p>
      )}
      {!searchMovie && query && <Loader />}
      {searchMovie && (
        <ul className={css.moviesList}>
          {searchMovie.map(movie => (
            <LinkSearchMovie
              key={movie.id}
              movie={movie}
              stateFromLoc={{ from: location }}
            />
          ))}
        </ul>
      )}
    </main>
  );
};

export default Movies;
