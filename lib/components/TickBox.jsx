import React from 'react';
import Label from './Label';

function _toggleCheckedValue(e, callback) {
  callback(e.target.checked);
}

export default ({ id, label, isChecked, clickCallback }) => {
  const checkedClass = isChecked ? 'checked': '';

  return (
    <div className="tick-box">
      <Label id={id} label={label} additionalClass={checkedClass} />
      <input className="tick-box__input" id={id} name={id} type="checkbox" value={id} onChange={(e) => _toggleCheckedValue(e, clickCallback)} defaultChecked={checkedClass} />
    </div>
  );
};
