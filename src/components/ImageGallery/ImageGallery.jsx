import React, { Component } from 'react';
import css from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  componentDidUpdate(prevProps, prevState) {
    // if(prevProps.search)
  }
  render() {
    return <ul className={css.gallery}></ul>;
  }
}
