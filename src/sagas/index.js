import { takeLatest, put, all } from "redux-saga/effects";

function* setFilterMask(action) {
  try {
    yield put({ type: "SET_FILTER_MASK_SUCCESS", mask: action.mask });
  } catch (e) {
    yield put({ type: "SET_FILTER_MASK_FAILURE", message: e.message });
  }
}

export default function* sagas() {
  yield all([takeLatest("SET_FILTER_MASK", setFilterMask)]);
}
