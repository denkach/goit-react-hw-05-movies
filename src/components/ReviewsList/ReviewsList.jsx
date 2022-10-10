import { List, Item } from './ReviewsList.styled';

export const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ author, id, content }) => {
        return (
          <Item key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </Item>
        );
      })}
    </List>
  );
};
