/* eslint-disable react/no-unused-prop-types */
// @flow
import React from 'react';
import PropTypes from 'prop-types';
import './Clock.css';

class Clock extends React.Component {
  state = { time: new Date().toLocaleTimeString() };

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  render() {
    const { time } = this.state;
    return <div className="clock-display"> The time is: {time}</div>;
  }
}

Clock.propTypes = {
  time: PropTypes.number,
};

export default Clock;
