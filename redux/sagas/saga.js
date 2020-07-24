import { call, put, takeEvery } from "redux-saga/effects";

function* getData(data) {
    yield data = call("http://www.json-generator.com/api/json/get/cekPGWUzFK?indent=2")
    yield put({ type: "DATA_FETCH_ASYNC", value: data })
    console.log(data)
}

 function* useData() {
    yield takeEvery("FETCH_ASYNC", getData)
}

export default useData