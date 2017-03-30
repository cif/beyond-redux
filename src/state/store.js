import { createStore } from 'redux'
import { Observable } from 'rxjs'

const reducer = (state = { hello: 'this is the balls' }, action) => {
  return { hello: action.payload }
}

export const store = createStore(
  reducer,
  // eslint-disable-next-line
  global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()
)

export const { dispatch } = store
export default store //state$ = Observable.from(store)
