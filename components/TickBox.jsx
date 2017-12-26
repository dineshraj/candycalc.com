import React from 'react';
import Label from './Label';

class TickBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };
  }

  _toggleCheckedValue() {
    this.setState({
      checked: !this.state.checked
    });
  }

  render() {
    const labelClass = this.state.checked ? ' checked' : '';
    const isChecked = this.state.checked ? 'checked' : '';
    const id = this.props.id;

    return (
      <div className="tick-box">
        <Label id={id} label={this.props.label} additionalClass={labelClass} />
        <input className="tick-box__input" id={id} name={id} type="checkbox" value={id} onClick={this._toggleCheckedValue.bind(this)} checked={isChecked} />
      </div>
    );
  }
}

module.exports = TickBox;
