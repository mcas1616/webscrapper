import { put, takeLatest, all } from 'redux-saga/effects';
import {call} from "redux-saga/effects";

function* fetchPageResult(param) {
    const pageResult = yield fetch(`/api/getpageresult?url=${param.url}`)
        .then(response => {
            return response.json()
        } );

    console.log('json', pageResult.data);
    if(!pageResult.data){
        return yield put({ type: "RESULT_MESSAGE", Result: '해당 브랜드는 세팅 전 상태입니다.'});
    }

    yield put({ type: "GET_PAGERESULT_SUCCESS", pageResult: pageResult.data, Error:null });
}

function* actionWatcher() {
    yield takeLatest('GET_PAGERESULT', fetchPageResult)
}
export default function* rootSaga() {
    yield all([
        actionWatcher(),
    ]);
}