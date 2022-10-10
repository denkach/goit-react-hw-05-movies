import { useLocation } from 'react-router-dom';
import { List, Item, Link } from './FilmsList.styled';
import { Box } from '../Box';

export const FilmsList = ({ movies }) => {
  const location = useLocation();
  let url = location.pathname !== '/movies' ? '/movies/' : '';
  return (
    <Box mt="24px">
      <List>
        {movies.map(({ id, title }) => {
          return (
            <Item key={id}>
              <Link to={`${url}${id}`} state={{ from: location }}>
                {title}
              </Link>
            </Item>
          );
        })}
      </List>
    </Box>
  );
};
