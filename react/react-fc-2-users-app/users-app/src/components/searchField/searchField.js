import React from 'react';

import './searchField.css';

export const SearchField = ({
  placeholder,
  onChangeHandler
}) => (
  <input
    type='search'
    className='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
