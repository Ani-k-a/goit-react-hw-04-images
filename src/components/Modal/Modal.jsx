import React from 'react';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

export function Modal({ user, largeImageURL, onClick }) {
  return (
    <div className={css.overlay} onClick={onClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt={user} />
      </div>
    </div>
  );
}

Modal.propTypes = {
  user: PropTypes.string,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
