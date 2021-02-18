import { takeLatest, call, put } from "redux-saga/effects";
import { Action } from "./reducer";
import Api from "./../api/index";

function* saga() {
  yield takeLatest(Action.Types.GET_PHOTOS, function* ({ payload }) {
    try {
      const result = yield call(Api.getPhotos, payload);
      console.log("@@[saga] getPhotos", result);
      if (result.data) {
        yield put(Action.Creator.setPhotos(result.data));
      }
    } catch (e) {
      console.log("@@ e", e);
    }
  });
  yield takeLatest(Action.Types.SEARCH_PHOTOS, function* ({ payload }) {
    try {
      const result = yield call(Api.searchPhotos, payload);
      console.log("@@[saga] searchPhotos", result);
      if (result.data) {
        yield put(Action.Creator.setSearchResults(result.data));
      }
    } catch (e) {
      console.log("@@ e", e);
    }
  });
}
export default saga;
