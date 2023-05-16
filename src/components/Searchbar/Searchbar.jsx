import React from 'react';
import css from './Searchbar.module.css';

export function Searchbar({ children }) {
  return <header className={css.searchbar}>{children}</header>;
}
