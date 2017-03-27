import { createStore } from 'redux'
import { Observable } from 'rxjs'

const reducer = (state = { hello: 'world' }, action) => {
  return { ...state, ...action.payload }
}

export const store = createStore(
  reducer,
  // eslint-disable-next-line
  global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
)

export const state$ = Observable.from(store)
