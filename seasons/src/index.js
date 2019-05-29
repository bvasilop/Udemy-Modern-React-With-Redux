import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  state = { lat: null, long: null, errorMessage: '' };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position =>
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const { lat, long, errorMessage } = this.state;

    if (errorMessage && !lat && !long) {
      return <div>Error: {errorMessage}</div>;
    }

    if (!errorMessage && lat && long) {
      return (
        <div>
          <h4>
            <SeasonDisplay lat={lat} />
          </h4>
        </div>
      );
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
