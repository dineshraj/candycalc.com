import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Label from '../../components/Label';

describe('<Label />', () => {

  it('renders the Label correctly', () => {
    const label = shallow(<Label />);
    assert.equal(label.prop('className'), 'label ');
  });

  it('takes in a id an label props and displays them correctly', () => {
    const id = 'some-id';
    const labelText = 'some-label';
    const label = shallow(<Label id={id} label={labelText} />);

    assert.equal(label.find('.label').prop('htmlFor'), id);
    assert.equal(label.find('.label__text').text(), labelText);
  });

  it('takes class prop if provided', () => {
    const label = shallow(<Label additionalClass='checked' />);
    assert.equal(label.prop('className'), 'label checked');
  });

});
