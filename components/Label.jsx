import React from 'react';

export default ({ id, label, additionalClass = '' }) => {
  const labelClass = `label ${additionalClass}`;

  return (
    <label className={labelClass} htmlFor={id}>
      <span className="label__text">{label}</span>
    </label>
  );
};
