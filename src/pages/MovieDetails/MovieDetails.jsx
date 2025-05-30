import { useEffect, useState, Suspense } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { Loader } from 'components/Loader/Loader';
import { AdditionalInfo } from 'components/AdditionalInfo/AdditionalInfo';
import { MovieMainInfo } from 'components/MovieMainInfo/MovieMainInfo';
import { getMovieById } from 'services/fetch-api';

const MovieDetails = () => {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState(null);
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

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
        <BackLink to={backLinkHref}>Go back</BackLink>
        <MovieMainInfo dataMovie={dataMovie} />
        <AdditionalInfo />
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </main>
    );
  }
};

export default MovieDetails;
