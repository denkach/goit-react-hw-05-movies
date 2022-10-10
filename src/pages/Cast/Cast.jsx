import { getMovieCredits } from 'services/filmsAPI';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CastInfo } from 'components/CastInfo/CastInfo';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCredits(movieId).then(({ cast }) => setCast(cast));
  }, [movieId]);

  return <CastInfo cast={cast} />;
};

export default Cast;
