import React, { PropTypes } from 'react';
import { mapPropsStream } from 'recompose';
import { Button } from 'antd';
import App$ from '../streams/App$'
import Subscriber from './Subscriber'
import Hello from '../components/Hello';
import NodeTextInput from '../components/NodeTextInput';

const App = ({
  broadcast,
  count,
  hello,
  tick,
  updateCount
}) => (
  <div>
    <h1>Observables rule!!!!</h1>
    <Hello name={hello} />
    <p>The count is {count}</p>
    <div>
      <Button onClick={() => updateCount(count + 1)} icon="plus" type="primary" size="small">
        Increment
      </Button>
      <Button onClick={() => updateCount(count - 1)} icon="minus">
        Decrement
      </Button>
      <Button onClick={broadcast}>Broadcast Hello</Button>
    </div>
    <NodeTextInput firebaseRef="/test" />
    <Subscriber />
    <p>{tick} tock</p>
  </div>
)

App.propTypes = {
  hello: PropTypes.string.isRequired,
  count: PropTypes.number,
  updateCount: PropTypes.func.isRequired,
  broadcast: PropTypes.func.isRequired,
  tick: PropTypes.number.isRequired
}

App.defaultProps = {
  hello: 'world',
  count: 0
}

export default mapPropsStream(App$)(App)
