const KEY = '407c6c5ac7b97eafb7da884568d7dfc2';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getTrendingFilms = () => {
  return fetch(`${BASE_URL}trending/movie/day?api_key=${KEY}`)
    .then(res => res.json())
    .then(({ results }) => results);
};

export const searchMovie = query => {
  return fetch(
    `${BASE_URL}search/movie?api_key=${KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  )
    .then(res => res.json())
    .then(({ results }) => results);
};

export const getMovieDetails = id => {
  return fetch(`${BASE_URL}movie/${id}?api_key=${KEY}&language=en-US`).then(
    res => res.json()
  );
};

export const getMovieCredits = id => {
  return fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${KEY}&language=en-US`
  ).then(res => res.json());
};

export const getMovieReviews = id => {
  return fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
  ).then(res => res.json());
};
