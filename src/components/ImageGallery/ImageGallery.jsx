import React from 'react';
import css from './ImageGallery.module.css';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ dates }) {
  return (
    <ul className={css.gallery}>
      {dates.map(date => (
        <li key={date.id} className={css.item}>
          <ImageGalleryItem date={date}></ImageGalleryItem>
        </li>
      ))}
    </ul>
  );
}
