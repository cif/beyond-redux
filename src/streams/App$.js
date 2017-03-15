import { Observable } from 'rxjs';
import { createEventHandler } from 'recompose';
import firebase from '../firebase';

export default ($props) => {
  // "Action" handlers
  const { handler: updateCount, stream: update$ } = createEventHandler()

  // subscribe to the updates and persist
  update$.subscribe(value => firebase.database().ref('/count').set(value))

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
    count,
    tick,
    hello,
    updateCount
  }))
}
