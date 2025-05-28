import { useParams, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieMainInfo } from 'components/MovieMainInfo/MovieMainInfo';
import { getMovieById } from 'services/fetch-api';

const SomeMovie = () => {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  useEffect(() => {
    getMovieById(id)
      .then(res => {
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
        <MovieMainInfo dataMovie={dataMovie} />
        <AdditionalInfo />
        <Outlet />
      </main>
    );
  }
};

export default SomeMovie;
