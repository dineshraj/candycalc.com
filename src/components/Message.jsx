import React from 'react';

export default ({ message, overrideClass = '' }) => {
  const messageClass = `message ${overrideClass}`;

  return (
    <p className={messageClass}>{message}</p>
  );
};
