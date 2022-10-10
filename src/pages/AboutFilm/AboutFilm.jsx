import { getMovieDetails, getMovieReviews } from 'services/filmsAPI';
import { Box } from 'components/Box';
import { Image, Title, Subtitle, AdditionalLink } from './AboutFilm.styled';

import { useState, useEffect } from 'react';

import { useParams, NavLink, useLocation, Outlet } from 'react-router-dom';

const AboutFilm = () => {
  const { movieId } = useParams();
  const location = useLocation();

  const [pathBack] = useState(location.state?.from ?? '/');
  const [movieInfo, setMovieInfo] = useState(null);
  const [, setMovieReviews] = useState('');

  useEffect(() => {
    getMovieDetails(movieId).then(
      ({ overview, popularity, title, genres, poster_path }) =>
        setMovieInfo({ overview, popularity, title, genres, poster_path })
    );
    getMovieReviews(movieId).then(({ results }) => setMovieReviews(results));
  }, [movieId]);

  if (!movieInfo) {
    return;
  }

  const { title, poster_path, popularity, overview, genres } = movieInfo;
  const url = `https://image.tmdb.org/t/p/w500`;
  const genresName = genres.map(({ name }) => {
    return name;
  });

  return (
    <Box as="main" mt="24px">
      <NavLink to={pathBack}>Back to movies</NavLink>
      <Box display="flex" mt="12px">
        <Image src={url + poster_path} alt={movieInfo.title} />
        <Box ml="24px">
          <Title>{title}</Title>
          <p>User score: {popularity}</p>
          <Subtitle>Overview</Subtitle>
          <p>{overview}</p>
          <Subtitle>Genres</Subtitle>
          <p>{genresName.join(', ')}</p>
        </Box>
      </Box>
      <Box mt="12px">
        <AdditionalLink to="cast">Casts</AdditionalLink>
        <AdditionalLink to="reviews">Reviews</AdditionalLink>
      </Box>
      <Outlet />
    </Box>
  );
};

export default AboutFilm;
