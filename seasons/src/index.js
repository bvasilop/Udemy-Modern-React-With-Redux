import React from 'react';
import ReactDOM from 'react-dom';
// import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat: null, long: null };
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude,
        });
      },
      err => console.log(err)
    );
  }

  render() {
    const { lat, long } = this.state;

    return (
      <div>
        <h4>Latitude: {lat}</h4>
        <h4>Longitude: {long}</h4>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
