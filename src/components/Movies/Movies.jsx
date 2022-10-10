import { Search } from 'components/Search/Search';
import { searchMovie } from 'services/filmsAPI';
import { Box } from 'components/Box';
import { useState, useEffect } from 'react';
import { FilmsList } from 'components/FilmsList/FilmsList';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }
    searchMovie(query).then(setMovies);
  }, [query]);

  const changeQuery = query => {
    setSearchParams({ query });
  };

  return (
    <Box>
      <Search changeQuery={changeQuery} />
      {movies && movies.length > 0 && <FilmsList movies={movies} />}
    </Box>
  );
};
