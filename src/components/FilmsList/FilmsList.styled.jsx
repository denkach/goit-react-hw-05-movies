import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 24px;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  list-style: none;
`;

export const Link = styled(NavLink)`
  font-size: 18px;
  color: #2a363b;
  text-decoration: none;

  &:hover,
  &:focus {
    color: #2196f3;
  }
`;
