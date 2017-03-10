import React from 'react';

const Hello = ({ name }) => (<div>hello for real? {name}</div>);
Hello.propTypes = {
  name: React.PropTypes.string.isRequired
}
export default Hello;
