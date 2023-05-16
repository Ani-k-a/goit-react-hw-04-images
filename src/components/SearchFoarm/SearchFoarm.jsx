import React, { Component } from 'react';
import css from './SearchbarFoarm.module.css';

export class SearchFoarm extends Component {
  state = {
    search: '',
  };
  handleChange = event => {
    this.setState({ search: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.reset();
  };
  reset = () => {
    this.setState({ search: '' });
  };

  render() {
    return (
      <form className={css.form}>
        <button
          type="submit"
          className={css.button}
          onClick={this.handleSubmit}
        >
          <span className={css.label}>Search</span>
        </button>

        <input
          onChange={this.handleChange}
          className={css.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.search}
        />
      </form>
    );
  }
}
