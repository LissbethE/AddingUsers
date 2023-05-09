import React from 'react';

const Button = function ({ type, onClick, children, classes }) {
  return (
    <button
      className={`btn ${classes}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
