import { Box } from 'components/Box';
import { Item, List } from './CastInfo.styled';

export const CastInfo = ({ cast }) => {
  const url = `https://image.tmdb.org/t/p/w200`;
  return (
    <List>
      {cast.map(({ character, name, profile_path }) => {
        return (
          <Item key={name}>
            <img src={url + profile_path} alt={name} />
            <p>{name}</p>
            <p>Character: {character}</p>
          </Item>
        );
      })}
    </List>
  );
};
