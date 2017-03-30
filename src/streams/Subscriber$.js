import { state$ } from '../state/store';

export default state$ => ($props) => {
  // example global state streams

  const hello$ = state$.pluck('hello');
  return $props.combineLatest(hello$, (props, hello) => ({
    ...props,
    example: hello
  }))
}
