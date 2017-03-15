import React from 'react'
import { render } from 'react-dom'
import { setObservableConfig } from 'recompose';
import rxjsconfig from 'recompose/rxjsObservableConfig'
import 'antd/lib/style'
import 'antd/lib/input/style/'
import 'antd/lib/button/style'
import App from './containers/App';

setObservableConfig(rxjsconfig);

render(
  (<App />),
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line
    render(<NextApp />, document.getElementById('app'))
  });
}
