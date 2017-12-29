import React from 'react';
import Label from './Label';

function _toggleCheckedValue(e) {
  this.props.clickCallback(e.target.checked);
}

export default ({ id, label, checked }) => {
  const isChecked = checked ? 'checked': '';

  return (
    <div className="tick-box">
      <Label id={id} label={label} additionalClass={isChecked} />
      <input className="tick-box__input" id={id} name={id} type="checkbox" value={id} onChange={(e) => _toggleCheckedValue(e)} defaultChecked={isChecked} />
    </div>
  );
};
