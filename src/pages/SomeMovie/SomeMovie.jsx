import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { getMovieById } from 'services/fetch-api';
import './SomeMovie.css';

const SomeMovie = () => {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  useEffect(() => {
    getMovieById(id)
      .then(res => {
        // console.log(res);
        setDataMovie(res);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (!dataMovie) {
    return <Loader />;
  }

  if (dataMovie) {
    return (
      <main>
        <div className="box-movie">
          <img
            className="img"
            src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
            alt={dataMovie.title}
          />
          <div className="box-about">
            <h1 className="title-movie">{dataMovie.title}</h1>
            {dataMovie.vote_average ? (
              <p>User Score: {Math.round(dataMovie.vote_average * 10)}%</p>
            ) : (
              <p>User Score: N/A</p>
            )}
            <h2 className="subtitle-movie">Overview</h2>
            <p>{dataMovie.overview}</p>
            <h3 className="subtitle-h3">Genres</h3>
            <p>
              {dataMovie.genres
                .map(genre => {
                  return genre.name;
                })
                .join(' ')}
            </p>
          </div>
        </div>
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
        <Outlet />
      </main>
    );
  }
};

export default SomeMovie;
