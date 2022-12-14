import { getTrendingFilms } from 'services/filmsAPI';
import { useState, useEffect } from 'react';
import { FilmsList } from 'components/FilmsList/FilmsList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingFilms().then(setMovies);
  }, []);

  return movies.length > 0 && <FilmsList movies={movies} />;
};
