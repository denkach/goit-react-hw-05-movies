import { Link } from './Navigation.styled';
import { Box } from '../Box';

export const Navigation = () => {
  console.log(Navigation);
  return (
    <Box as="nav" borderBottom="1px solid #2a363b" padding="20px">
      <Link to={'/'}>Home</Link>
      <Link to={'movies'}>Movies</Link>
    </Box>
  );
};
