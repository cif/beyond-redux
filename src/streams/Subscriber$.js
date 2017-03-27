import { state$ } from '../state/store';

export default ($props) => {
  // example global state streams
  return $props.combineLatest(state$, (props, state) => ({
    ...props,
    example: state.hello
  }))
}
