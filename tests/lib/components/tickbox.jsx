import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import React from 'react';
import TickBox from '../../../lib/components/TickBox';
import Label from '../../../lib/components/Label';

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
    const onClickStub = sinon.stub();
    const tickBox = shallow(<TickBox clickCallback={onClickStub} />);
    tickBox.find('input').simulate('click');
    assert.equal(tickBox.state('checked'), true);
  });

  it('sends checked class to Label when checked state is true', () => {
    const tickBox = shallow(<TickBox />);
    assert.equal(tickBox.find(Label).prop('additionalClass'), '');
    tickBox.setState({ checked: true });
    assert.equal(tickBox.find(Label).prop('additionalClass'), ' checked');
  });

  it('does not checked class to Label when checked prop is false', () => {
    const tickBox = shallow(<TickBox checked={false} />);
    assert.equal(tickBox.find(Label).prop('additionalClass'), '');
  });

  it('sends checked class to Label when checked prop is true', () => {
    const tickBox = shallow(<TickBox checked={true} />);
    assert.equal(tickBox.find(Label).prop('additionalClass'), ' checked');
  });

  it('adds checked attribute to input when checked', () => {
    const tickBox = shallow(<TickBox />);
    assert.equal(tickBox.find('.tick-box__input').prop('checked'), '');
    tickBox.setState({ checked: true });
    assert.equal(tickBox.find('.tick-box__input').prop('checked'), 'checked');
  });

  it('calls onClick callback when clicked', () => {
    const onClickStub = sinon.stub();
    const tickBox = shallow(<TickBox clickCallback={onClickStub} />);

    tickBox.find('input').simulate('click');
    sinon.assert.calledOnce(onClickStub);
  });

});
