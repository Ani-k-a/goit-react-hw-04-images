import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
    console.log(this.state);
  };
  closeModal = ev => {
    if (ev.currentTarget === ev.target) {
      this.setState({ isModalOpen: false });
    }
  };
  handleKeydown = ev => {
    if (ev.code === 'Escape') {
      this.setState({ isModalOpen: false });
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  render() {
    const { date } = this.props;
    const { webformatURL, user, largeImageURL } = date;
    const { isModalOpen } = this.state;
    return (
      <>
        <img
          onClick={this.openModal}
          className={css.image}
          src={webformatURL}
          alt={user}
        />
        {isModalOpen && (
          <Modal
            largeImageURL={largeImageURL}
            user={user}
            onClick={this.closeModal}
          ></Modal>
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  user: PropTypes.string,
  largeImageURL: PropTypes.string,
};
