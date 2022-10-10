import { useState, useEffect } from 'react';
import { Box } from '../Box';

export const Search = ({ changeQuery }) => {
  const onSubmit = e => {
    e.preventDefault();
    changeQuery(e.currentTarget.elements[0].value);
  };

  return (
    <Box mt="24px">
      <form onSubmit={onSubmit}>
        <input type="text" />
        <button type="submit">Search</button>
      </form>
    </Box>
  );
};
