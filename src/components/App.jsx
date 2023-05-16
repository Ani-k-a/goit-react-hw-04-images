import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { SearchFoarm } from './SearchFoarm/SearchFoarm';

export class App extends Component {
  state = {
    search: '',
  };
  render() {
    return (
      <>
        <Searchbar>
          <SearchFoarm></SearchFoarm>
        </Searchbar>
      </>
    );
  }
}
