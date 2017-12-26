import React from 'react';

import Label from './Label';

export default ({ id, label, changeCallback }) => {
  return (
    <div className="entry-box">
      <Label id={id} label={label} />
      <input className="entry-box__input" id={id} name={id} maxLength="3" autoComplete="off" type="number" onChange={changeCallback} />
    </div>
  );
};
