import sinon from 'sinon';
import ReactDOM from 'react-dom';

describe('Index', () => {

  it('renders the main application without errors', () => {
    const renderSpy = sinon.spy(ReactDOM, 'hydrate');
    require('../index');

    sinon.assert.calledOnce(renderSpy);
  });

});
