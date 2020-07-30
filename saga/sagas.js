import { call, put, takeEvery } from 'redux-saga/effects';
import usersData from "./reducerSaga";
import sagaActions from "./sagaActions";


//worker
function* fetchData() {
  let response = yield call(fetch,"http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2") ;
  const data = yield response.json();
  yield put(usersData.actions.DATA_FETCH(data));
}


//wathcer
function* watchFetchData() {
  yield takeEvery(sagaActions.FETCH_DATA_SAGA, fetchData)
}

export default watchFetchData