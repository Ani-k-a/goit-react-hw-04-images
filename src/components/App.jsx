import React, { Component } from 'react';
import css from './App.module.css';
import { Searchbar } from './Searchbar/Searchbar';
import { Toaster } from 'react-hot-toast';
import { LoginFoarm } from './LoginFoarm/LoginFoarm';
import { ImageGallery } from './ImageGallery/ImageGallery';
import * as API from 'services/api';
import { Loader } from './Loader/Loader';
import { ImageErrorViev } from './ImageErrorViev/ImageErrorViev';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    search: '',
    page: 1,
    gallery: [],
    status: 'idle',
  };
  handleFoarmSubmit = search => {
    this.setState({ ...search, page: 1 });
  };
  onLoadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearch = prevState.search;
    const nextSeach = this.state.search;
    const prevPage = prevState.page;
    const nextPage = this.state.page;
    const page = this.state.page;

    if (prevSearch !== nextSeach || prevPage !== nextPage) {
      this.setState({ status: 'pending' });
      API.fetchImages(nextSeach, page)
        .then(gallery => {
          if (gallery.length !== 0) {
            this.setState({ gallery, status: 'resolved' });
          } else this.setState({ status: 'rejected' });
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  render() {
    const { gallery, page, status } = this.state;

    return (
      <>
        <Searchbar>
          <LoginFoarm submitForm={this.handleFoarmSubmit} />
        </Searchbar>
        {status === 'idle' && (
          <div className={css.notify}>Please, enter your query</div>
        )}
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (
          <ImageErrorViev message="There are no results for your search" />
        )}
        {status === 'resolved' && (
          <>
            <ImageGallery dates={gallery} page={page}></ImageGallery>
            {gallery.length === 12 && (
              <Button onLoadMoreClick={this.onLoadMoreClick} />
            )}
          </>
        )}
        <Toaster />
      </>
    );
  }
}
