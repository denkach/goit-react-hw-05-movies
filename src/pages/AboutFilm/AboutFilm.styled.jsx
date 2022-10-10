import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Image = styled.img`
  display: block;
  width: 400px;
  max-height: 600px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.h3`
  font-weight: 700;
`;

export const AdditionalLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 500;
  color: #2a363b;
  font-size: 18px;

  &:not(:last-child) {
    margin-right: 12px;
  }

  &:hover {
    color: #2196f3;
  }
`;
