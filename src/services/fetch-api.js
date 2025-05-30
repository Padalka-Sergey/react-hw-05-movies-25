const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzlkMmVhMzEzMDU1ZDM2NzQ0ZTgxZGZiMTA3MDIwNSIsIm5iZiI6MTY2OTc0ODE3MC41MTgwMDAxLCJzdWIiOiI2Mzg2NTVjYWZiODM0NjAwODQ0MWRhY2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.48jU2cMOFeBS5uPo443RNVqS-YFq-LmlXD8cmjU4wWw',
  },
};

export const fetchFaforiteMovies = () => {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  ).then(res => res.json());
};

export const getMovieById = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  ).then(res => res.json());
};

export const getMovieCast = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  ).then(res => res.json());
};

export const getMovieReviews = movieId => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  ).then(res => res.json());
};

export const getSearhMovies = searchMovie => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`,
    options
  ).then(res => res.json());
};
