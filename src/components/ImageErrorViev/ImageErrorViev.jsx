import React from 'react';
import css from './ImageErrorViev.module.css';

export function ImageErrorViev({ message }) {
  return <div className={css.title}>{message}</div>;
}
