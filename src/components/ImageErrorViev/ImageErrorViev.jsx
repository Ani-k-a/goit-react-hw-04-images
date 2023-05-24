import React from 'react';
import css from './ImageErrorViev.module.css';
import PropTypes from 'prop-types';

export function ImageErrorViev({ message }) {
  return <div className={css.title}>{message}</div>;
}

ImageErrorViev.propTypes = {
  message: PropTypes.string.isRequired,
};
