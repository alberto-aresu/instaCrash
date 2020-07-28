import { call, put, takeEvery } from 'redux-saga/effects';
import sagaActions from "./sagaActions";
import {users} from "../reducerSaga";


//worker
function* fetchData() {
  let response = yield fetch("http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2");
  const data = yield response.json();
  yield put(users.actions.DATA_FETCH(data));
}


//wathcer
function* watchFetchData() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchData)
}

export default watchFetchData 