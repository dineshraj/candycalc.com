import React from 'react';
import Label from './Label';

function _updateValue(e, callback) {
  callback(parseInt(e.target.value, 10));
}

export default ({ id, label, changeCallback }) => {
  return (
    <div className="entry-box">
      <Label id={id} label={label} />
      <input className="entry-box__input" id={id} name={id} maxLength="3" min="0" autoComplete="off" type="number" onChange={(e) => _updateValue(e, changeCallback)} />
    </div>
  );
};
