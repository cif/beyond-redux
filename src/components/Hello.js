import React from 'react'

const Hello = ({ name }) => (<div>hello {name}</div>)

Hello.propTypes = {
  name: React.PropTypes.string.isRequired
}

export default Hello
