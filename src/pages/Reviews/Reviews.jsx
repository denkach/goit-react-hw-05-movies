import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/filmsAPI';
import { useParams } from 'react-router-dom';
import { ReviewsList } from 'components/ReviewsList/ReviewsList';
import { Box } from 'components/Box';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <Box mt="16px" pb="16px">
          Sorry we don't have any information about this
        </Box>
      )}
    </>
  );
};

export default Reviews;
