import React, { PropTypes } from 'react';
import { mapPropsStream } from 'recompose';
import App$ from '../streams/App$';
import Hello from '../components/Hello';
const App = ({
  hello,
  count,
  tick,
  updateCount
}) => (
  <div>
    <h1>Observables rule!</h1>
    <Hello name={hello} /> not woring?
    <p>The count is {count}</p>
    <button onClick={() => updateCount(count + 1)}>+</button>
    <button onClick={() => updateCount(count - 1)}>-</button>
    <p>{tick} tock</p>
  </div>
)

App.propTypes = {
  hello: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  updateCount: PropTypes.func.isRequired
}

App.defaultProps = {
  hello: 'world',
}

export default mapPropsStream(App$)(App)
