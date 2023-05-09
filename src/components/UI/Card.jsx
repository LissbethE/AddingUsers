import React from 'react';

const Card = ({ classes, children }) => (
  <div className={`card ${classes}`}>{children}</div>
);

export default Card;
