/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

export default class SearchBar extends React.Component {
  state = { term: '' };

  render() {
    const { term } = this.state;
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="image-search" id="image-search">
              Image Search
            </label>
            <input
              id="image-search"
              type="text"
              placeholder="Search..."
              value={term}
              onChange={e =>
                this.setState({ term: e.target.value.toUpperCase() })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
