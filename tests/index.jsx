import sinon from 'sinon';
import ReactDOM from 'react-dom';

describe('Index', () => {

  it('renders the main application without errors', () => {
    const renderSpy = sinon.spy(ReactDOM, 'render');
    require('../index');

    sinon.assert.calledOnce(renderSpy);
  });

});
