import React from 'react';
import Label from './Label';

class TickBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: this.props.checked,
    };
  }

  _toggleCheckedValue() {
    this.setState({
      checked: !this.state.checked
    }, () => this.props.clickCallback(this.state.checked));
  }

  _isChecked() {

    return this.state.checked ? ' checked' : '';
  }

  render() {
    const labelClass = this._isChecked();
    const isChecked = this._isChecked();
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
