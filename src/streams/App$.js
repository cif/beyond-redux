import { Observable } from 'rxjs';
import { createEventHandler } from 'recompose';
import firebase from '../firebase';
import { store } from '../state/store';

export default ($props) => {
  // "Action" handlers
  const { handler: updateCount, stream: update$ } = createEventHandler()
  const { handler: broadcast, stream: broadcast$ } = createEventHandler()

  // subscribe to the updates and persist
  update$.subscribe(value => firebase.database().ref('/count').set(value))

  broadcast$.subscribe(() => {
    store.dispatch({ type: 'SAY_IT', payload: { hello: 'world... domination!' } });
  });

  // get a stream from our observable count
  const count$ = Observable.create(observer =>
    firebase.database().ref('/count').on('value', data => observer.next(data ? data.val() : 0))
  )

  // some other example streams
  const hello$ = Observable.of('world')
  const tick$ = Observable.interval(1000)

  // "Selector"
  return $props.combineLatest(hello$, count$, tick$, (props, hello, count, tick) => ({
    ...props,
    broadcast,
    count,
    tick,
    hello,
    updateCount
  }))
}
