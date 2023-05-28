import { useState, useEffect } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export function ImageGalleryItem({ date }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { webformatURL, user, largeImageURL } = date;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = ev => {
    if (ev.currentTarget === ev.target) {
      setIsModalOpen(false);
    }
  };

  const handleKeydown = ev => {
    if (ev.code === 'Escape') {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    isModalOpen
      ? window.addEventListener('keydown', handleKeydown)
      : window.removeEventListener('keydown', handleKeydown);
  }, [isModalOpen]);

  return (
    <>
      <img
        onClick={openModal}
        className={css.image}
        src={webformatURL}
        alt={user}
      />
      {isModalOpen && (
        <Modal
          largeImageURL={largeImageURL}
          user={user}
          onClick={closeModal}
        ></Modal>
      )}
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  user: PropTypes.string,
  largeImageURL: PropTypes.string,
};
