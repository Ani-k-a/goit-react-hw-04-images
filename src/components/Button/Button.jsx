import React from 'react';
import css from './Button.module.css';

export function Button({ onLoadMoreClick }) {
  return (
    <button onClick={onLoadMoreClick} className={css.button}>
      Load more
    </button>
  );
}
