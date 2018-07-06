import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Ad from '../../../src/components/Ad';

describe('<Ad />', () => {

  it('renders an advert correctly', () => {
    const ad = shallow(<Ad />);

    assert.equal(ad.prop('className'), 'ad');
    assert.equal(ad.find('ins').length, 1);
    assert.equal(ad.find('ins').prop('className'), 'adsbygoogle');
    assert.deepEqual(ad.find('ins').prop('style'), { display: 'block' });
    assert.equal(ad.find('ins').prop('data-ad-format'), 'auto');
    assert.equal(ad.find('script').length, 2);
  });


  it('takes props for client and slot', () => {
    const ad = shallow(<Ad client='some-client' slot='some-slot' />);

    assert.equal(ad.find('ins').prop('data-ad-client'), 'some-client');
    assert.equal(ad.find('ins').prop('data-ad-slot'), 'some-slot');
  });
});
