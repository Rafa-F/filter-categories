import React from 'react';

const SearchInput = ({ onChange }) => (
  <header>
    <input type="text" onChange={(e) => onChange(e.target.value)} placeholder="Search by App"/>
  </header>
);

export default SearchInput;
