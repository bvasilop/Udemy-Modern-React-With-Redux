import React from 'react';
import PropTypes from 'prop-types';

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
    <div>
      <i className={`${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`${iconName} icon`} />
    </div>
  );
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number,
};

export default SeasonDisplay;
