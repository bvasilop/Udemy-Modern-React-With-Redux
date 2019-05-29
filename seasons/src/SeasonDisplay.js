import React from 'react';
import PropTypes from 'prop-types';

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  }
  return lat > 0 ? 'winter' : 'summer';
};

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());
  const text =
    season === 'winter' ? 'Burr it is chilly' : `Let's hit the beach`;
  const icon = season === 'winter' ? 'snowflake' : 'sun';

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

SeasonDisplay.propTypes = {
  lat: PropTypes.number,
};

export default SeasonDisplay;
