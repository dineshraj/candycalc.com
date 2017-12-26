import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import TickBox from '../../components/TickBox';
import Label from '../../components/Label';

describe('<TickBox />', () => {

  it('renders the TickBox correctly', () => {
    const tickBox = shallow(<TickBox />);
    assert.equal(tickBox.prop('className'), 'tick-box');
  });

  it('renders the Label correctly with the correct props', () => {
    const tickBox = shallow(<TickBox id="some-id" label="some-label" />);
    assert.equal(tickBox.find(Label).length, 1);
  });

  it('renders the input correctly', () => {
    const tickBox = shallow(<TickBox id="some-id" label="some-label" />);

    assert.equal(tickBox.find('.tick-box__input').prop('id'), 'some-id');
    assert.equal(tickBox.find('.tick-box__input').prop('name'), 'some-id');
    assert.equal(tickBox.find('.tick-box__input').prop('type'), 'checkbox');
    assert.equal(tickBox.find('.tick-box__input').prop('value'), 'some-id');
  });

  it('updates state when checked is true', () => {
    const tickBox = shallow(<TickBox />);
    tickBox.find('input').simulate('click');
    assert.equal(tickBox.state('checked'), true);
  });

  it('sends checked class to Label when checked is true', () => {
    const tickBox = shallow(<TickBox />);
    assert.equal(tickBox.find(Label).prop('additionalClass'), '');
    tickBox.setState({ checked: true });
    assert.equal(tickBox.find(Label).prop('additionalClass'), ' checked');
  });

  it('adds checked attribute to input when checked', () => {
    const tickBox = shallow(<TickBox />);
    assert.equal(tickBox.find('.tick-box__input').prop('checked'), '');
    tickBox.setState({ checked: true });
    assert.equal(tickBox.find('.tick-box__input').prop('checked'), 'checked');
  });

});
