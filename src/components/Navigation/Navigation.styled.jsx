import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  .active,
  &:hover {
    color: #2196f3;
  }

  &:not(:last-child) {
    margin-right: 12px;
  }
`;
