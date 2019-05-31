import './SeasonDisplay.css';
import React from 'react';
import PropTypes from 'prop-types';
import Clock from './Clock';

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: 'sun',
  },
  winter: {
    text: `Burr it's chilly!`,
    iconName: 'snowflake',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]; // returns object {text, iconName }
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>

      <h1>
        <Clock />
      </h1>

      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number,
};

export default SeasonDisplay;
