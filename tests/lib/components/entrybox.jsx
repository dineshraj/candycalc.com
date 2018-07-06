import assert from 'assert';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import React from 'react';
import EntryBox from '../../../src/components/EntryBox';
import Label from '../../../src/components/Label';

describe('<EntryBox />', () => {

  it('renders the EntryBox correctly', () => {
    const entryBox = shallow(<EntryBox />);
    assert.equal(entryBox.prop('className'), 'entry-box');
  });

  it('renders the Label correctly with the correct props', () => {
    const entryBox = shallow(<EntryBox id="some-id" label="some-label" />);
    assert.equal(entryBox.find(Label).length, 1);
  });

  it('renders the input correctly', () => {
    const entryBox = shallow(<EntryBox id="some-id" label="some-label" />);

    assert.equal(entryBox.find('.entry-box__input').prop('id'), 'some-id');
    assert.equal(entryBox.find('.entry-box__input').prop('name'), 'some-id');
    assert.equal(entryBox.find('.entry-box__input').prop('maxLength'), '3');
    assert.equal(entryBox.find('.entry-box__input').prop('autoComplete'), 'off');
    assert.equal(entryBox.find('.entry-box__input').prop('type'), 'number');
  });

  it('assigns onChange callback', () => {
    const onChangeStub = sinon.stub();
    const entryBox = shallow(<EntryBox changeCallback={onChangeStub} />);
    assert.equal(typeof entryBox.find('.entry-box__input').prop('onChange'), 'function');
  });

});
