const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzlkMmVhMzEzMDU1ZDM2NzQ0ZTgxZGZiMTA3MDIwNSIsIm5iZiI6MTY2OTc0ODE3MC41MTgwMDAxLCJzdWIiOiI2Mzg2NTVjYWZiODM0NjAwODQ0MWRhY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.48jU2cMOFeBS5uPo443RNVqS-YFq-LmlXD8cmjU4wWw',
  },
};

export const fetchFaforiteMovies = () => {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzlkMmVhMzEzMDU1ZDM2NzQ0ZTgxZGZiMTA3MDIwNSIsIm5iZiI6MTY2OTc0ODE3MC41MTgwMDAxLCJzdWIiOiI2Mzg2NTVjYWZiODM0NjAwODQ0MWRhY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.48jU2cMOFeBS5uPo443RNVqS-YFq-LmlXD8cmjU4wWw',
  //   },
  // };

  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  ).then(res => res.json());
};

export const getMovieById = movieId => {
  // const options = {
  //   method: 'GET',
  //   headers: {
  //     accept: 'application/json',
  //     Authorization:
  //       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzlkMmVhMzEzMDU1ZDM2NzQ0ZTgxZGZiMTA3MDIwNSIsIm5iZiI6MTY2OTc0ODE3MC41MTgwMDAxLCJzdWIiOiI2Mzg2NTVjYWZiODM0NjAwODQ0MWRhY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.48jU2cMOFeBS5uPo443RNVqS-YFq-LmlXD8cmjU4wWw',
  //   },
  // };

  return (
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      options
    )
      // fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
      .then(res => res.json())
  );
  // .then(res => console.log(res))
  // .catch(err => console.error(err));
};
