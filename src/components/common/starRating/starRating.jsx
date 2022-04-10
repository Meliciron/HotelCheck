import React from 'react';
import Rating from '@mui/material/Rating/Rating';

import './starRating.css';

function StarRating({ value, ...rest }) {
  return (
    <div className="star-rating__wrapper">
      <Rating defaultValue={value} {...rest} />
    </div>
  );
}

export default StarRating;
