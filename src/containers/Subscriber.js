import React, { PropTypes } from 'react';
import fusion from './fusion'
import Subscriber$ from '../streams/Subscriber$';

const Subscriber = ({
  example
}) => (
  <div>
    <h3>This container is maped to state stream: Hello {example}</h3>
  </div>
)

Subscriber.propTypes = {
  example: PropTypes.string.isRequired,
}
export default fusion(Subscriber$)(Subscriber)
