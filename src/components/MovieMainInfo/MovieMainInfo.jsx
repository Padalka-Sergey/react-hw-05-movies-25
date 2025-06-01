import './MovieMainInfo.css';

export const MovieMainInfo = ({ dataMovie }) => {
  return (
    <div className="box-movie">
      <img
        style={{ width: '200px', height: '300px' }}
        className="img"
        src={`https://image.tmdb.org/t/p/w500${dataMovie.poster_path}`}
        alt={dataMovie.title}
      />

      <div>
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
  );
};
