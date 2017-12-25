import assert from 'assert'
import { shallow } from 'enzyme';

import sinon from 'sinon';
import React from 'react';
import ReactDOM from 'react-dom';

describe('Index', () => {

  it('renders the main application without errors', () => {
    const renderSpy = sinon.spy(ReactDOM, 'render');
    const index = require('../index');

    sinon.assert.calledOnce(renderSpy);
  });

});
