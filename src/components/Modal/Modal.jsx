import React from 'react';
import css from './Modal.module.css';

export function Modal({ user, largeImageURL, onClick }) {
  return (
    <div className={css.overlay} onClick={onClick}>
      <div classNmae={css.modal}>
        <img src={largeImageURL} alt={user} />
      </div>
    </div>
  );
}
