import { Observable } from 'rxjs';
import { createEventHandler } from 'recompose';
import { createAction } from 'redux-actions';
import firebase from '../firebase';


export default (state$, dispatch) => (props$) => {

  // "Action" handlers
  const { handler: updateCount, stream: update$ } = createEventHandler()
  const { handler: broadcast, stream: broadcast$ } = createEventHandler()
  const { handler: stopTimer, stream: stopTimer$ } = createEventHandler()
  const { handler: requestData, stream: request$ } = createEventHandler()

  // subscribe to the updates and persist
  update$.subscribe(value => firebase.database().ref('/count').set(value))

  const doIt = createAction('SAY_IT');
  broadcast$.debounceTime(300)
    .map((val) => 'word')
    .subscribe((val) => dispatch(doIt(val)))

  // get a stream from our observable count
  const count$ = Observable.create(observer =>
    firebase.database().ref('/count').on('value', data => observer.next(data ? data.val() : 0))
  )

  const hello$ = request$
    .switchMap((v) => {
      dispatch({ type: 'LOADING_DATA' })
      return Observable.fromPromise(global.fetch('/example'))
    })
    .flatMap(res => Observable.fromPromise(res.json()))
    .startWith('Loading...')


  // .subscribe(v => {
  //   console.log('what is my value?', v);
  //   //console.log('response from server!', v.json());
  // })

  // some other example streams - subscribed to state!
  // const hello$ = state$.pluck('hello')
  const tick$ = Observable.interval(1000).takeUntil(stopTimer$)

  // "Selector"
  return props$.combineLatest(hello$, count$, tick$, (props, hello, count, tick) => ({
    ...props,
    broadcast,
    count,
    tick,
    hello: hello.response,
    updateCount,
    requestData,
    stopTimer
  }))
}
