import assert from 'assert';
import { shallow, mount } from 'enzyme';
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

  it('sends checked class to Label when checked prop is true', () => {
    const tickBox = shallow(<TickBox isChecked={true} />);
    assert.equal(tickBox.find(Label).prop('additionalClass'), 'checked');
  });

  it('does not checked class to Label when checked prop is false', () => {
    const tickBox = shallow(<TickBox isChecked={false} />);
    assert.equal(tickBox.find(Label).prop('additionalClass'), '');
  });

  it('sets defaultChecked attribute to input when checked prop is true', () => {
    const tickBox = shallow(<TickBox isChecked={true} />);
    assert.equal(tickBox.find('.tick-box__input').prop('defaultChecked'), 'checked');
  });

  it('sets defaultChecked attribute to input when checked prop is false', () => {
    const tickBox = shallow(<TickBox isChecked={false} />);
    assert.equal(tickBox.find('.tick-box__input').prop('defaultChecked'), false);
  });

  it('calls onChange callback on change event', () => {
    const onClickStub = sinon.stub();
    const tickBox = mount(<TickBox changeCallback={onClickStub} />);

    tickBox.find('input').simulate('change');
    sinon.assert.calledOnce(onClickStub);
  });

});
