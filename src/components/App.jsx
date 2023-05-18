import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { SearchFoarm } from './SearchFoarm/SearchFoarm';
import { Toaster } from 'react-hot-toast';
import ImageGallery from './ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    search: '',
  };
  handleFoarmSubmit = search => {
    console.log(search);
    this.setState({ search });
    console.log(this.state);
  };
  render() {
    return (
      <>
        <Searchbar>
          <SearchFoarm formSubmit={this.handleFoarmSubmit} />
        </Searchbar>
        <ImageGallery serchQuery={this.state.search}></ImageGallery>
        <Toaster />
      </>
    );
  }
}
