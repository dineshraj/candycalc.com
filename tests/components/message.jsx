import assert from 'assert';
import { shallow } from 'enzyme';

import React from 'react';
import Message from '../../components/Message';

describe('<Message />', () => {

  it('renders the Message correctly', () => {
    const message = shallow(<Message />);
    assert.equal(message.prop('className'), 'message');
  });

  it('takes in a message prop and displays it correctly', () => {
    const messageText = "This is a messsage";
    const message = shallow(<Message message={messageText} />);
    assert.equal(message.text(), messageText);
  });

});