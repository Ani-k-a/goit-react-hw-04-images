import React, { Component } from 'react';
import css from './SearchbarFoarm.module.css';
import { FaSearch } from 'react-icons/fa';
import { toast } from 'react-hot-toast';

export class SearchFoarm extends Component {
  state = {
    search: '',
  };
  handleChange = event => {
    this.setState({ search: event.target.value.trim() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.search.trim() === '') {
      toast('please enter search query');
      return;
    }
    this.props.formSubmit(this.state.search);
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
          <FaSearch />
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
