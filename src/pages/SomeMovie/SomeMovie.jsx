import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/fetch-api';
import './SomeMovie.css';

const SomeMovie = () => {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  useEffect(() => {
    getMovieById(id)
      .then(res => {
        console.log(res);
        setDataMovie(res);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (dataMovie) {
    return (
      <>
        <h1>{dataMovie.title}</h1>
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
          alt={dataMovie.title}
        />
      </>
    );
  }
};

export default SomeMovie;
