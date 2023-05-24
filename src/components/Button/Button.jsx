import React from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

export function Button({ onLoadMoreClick }) {
  return (
    <button onClick={onLoadMoreClick} className={css.button}>
      Load more
    </button>
  );
}

Button.propTypes = {
  onLoadMoreClick: PropTypes.func.isRequired,
};
