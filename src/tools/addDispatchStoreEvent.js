import { emitter, dispatchEvent } from ".";

export default (store) => {
  emitter.addListener(dispatchEvent, ({ type, payload }) => {
    store.dispatch({ type, payload });
  });
};
