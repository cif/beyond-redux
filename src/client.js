import React from 'react'
import { render } from 'react-dom'
import { Observable } from 'rxjs';
import { setObservableConfig } from 'recompose';
import App from './containers/App';

setObservableConfig({
  // Converts a plain ES observable to an RxJS 5 observable
  fromESObservable: Observable.from
})

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
