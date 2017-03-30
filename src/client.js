import React from 'react'
import { render } from 'react-dom'
import { setObservableConfig } from 'recompose'
import { Provider } from 'react-redux'
import rxjsconfig from 'recompose/rxjsObservableConfig'
import store from './state/store';
import 'antd/lib/style'
import 'antd/lib/input/style/'
import 'antd/lib/button/style'
import App from './containers/App';

require('es6-promise').polyfill()
require('isomorphic-fetch')

setObservableConfig(rxjsconfig);

render(
  (<Provider store={store}>
    <App />
   </Provider>
  ),
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default; // eslint-disable-line
    render(<NextApp />, document.getElementById('app'))
  });
}
