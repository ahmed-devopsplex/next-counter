import { takeEvery, call, put, select } from "redux-saga/effects";
import { INCREASE_CLICKED, DECREASE_CLICKED } from "../actions/types";
import { increase, decrease, warning } from "../actions/counterActions";

//WATCHER
export function* watchForIncrease() {
  yield takeEvery(INCREASE_CLICKED, increaseCounter);
}

export function* watchForDecrease() {
  yield takeEvery(DECREASE_CLICKED, decreaseCounter);
}

//WORKERS
function* increaseCounter() {
  const state = yield select();
  const {
    counter: { counter },
  } = state;
  yield put(increase(counter + 1));
}

function* decreaseCounter() {
  const state = yield select();
  const {
    counter: { counter },
  } = state;
  if (counter === 0) {
    yield put(warning());
  } else {
    yield put(decrease(counter - 1));
  }
}
