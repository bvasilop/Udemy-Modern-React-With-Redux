/* eslint-disable class-methods-use-this */
import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

export default class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 61d77b773ab1ee4df8113774c965eef2286fd4987145f4b6182a27da3d798474',
      },
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
