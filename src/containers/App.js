import React, { PropTypes } from 'react';
import { Button } from 'antd';
import App$ from '../streams/App$'
import Subscriber from './Subscriber'
import Hello from '../components/Hello';
import NodeTextInput from '../components/NodeTextInput';
import fusion from './fusion';

class App extends React.Component {

  componentDidMount() {
    this.props.requestData(123)
  }

  render() {
    const {
      broadcast,
      count,
      hello,
      tick,
      updateCount,
      stopTimer,
      data
    } = this.props

    return (
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
          <Button onClick={stopTimer}>STOP TIMER</Button>
        </div>
        <NodeTextInput firebaseRef="/test" />
        <Subscriber />
        <p>{tick} tock</p>
      </div>
    )
  }
}

// const App = ({
//   broadcast,
//   count,
//   hello,
//   tick,
//   updateCount,
//   stopTimer
// }) => (
//   <div>
//     <h1>Observables rule!!!!</h1>
//     <Hello name={hello} />
//     <p>The count is {count}</p>
//     <div>
//       <Button onClick={() => updateCount(count + 1)} icon="plus" type="primary" size="small">
//         Increment
//       </Button>
//       <Button onClick={() => updateCount(count - 1)} icon="minus">
//         Decrement
//       </Button>
//       <Button onClick={broadcast}>Broadcast Hello</Button>
//       <Button onClick={stopTimer}>STOP TIMER</Button>
//     </div>
//     <NodeTextInput firebaseRef="/test" />
//     <Subscriber />
//     <p>{tick} tock</p>
//   </div>
// )

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

export default fusion(App$, App);
