import React, { Component, PropTypes } from 'react'
import { mapPropsStream } from 'recompose'
import { Input } from 'antd'
import NodeValue$ from '../streams/NodeValue$'

const TextInput = ({
  onChange,
  value
}) => (
  <Input.Group>
    <Input
      onChange={(e) => {
        e.persist()
        onChange(e.target.value)
      }}
      value={value}
      size="large"
      autosize
    />
  </Input.Group>
);

TextInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

TextInput.defaultProps = {
  value: ''
}

class NodeTextInput extends Component {
  shouldComponentUpdate() {
    return false
  }

  render() {
    const Comp = mapPropsStream(NodeValue$(this.props.firebaseRef))(TextInput)
    return <Comp />
  }
}

NodeTextInput.propTypes = {
  firebaseRef: PropTypes.string.isRequired
}

export default NodeTextInput;
