import React from 'react';

const StatsBox = ({ primaryText, secondaryText }) => (
  <>
    <p className="font-medium">{primaryText}</p>
    <p className="font-medium">{secondaryText}</p>
  </>
);

export default StatsBox;
