import { delay } from 'redux-saga/effects';
import { takeLatest, put, call} from 'redux-saga/effects';
import  {  apiSearch } from '../api';


function* apiAsync(action) {
    // debounce 1 sec
    yield delay(1000);
    yield console.log("saga inputvalue: " + action.value)

    try {
        const projectData = yield call(apiSearch, action.value)
        yield put({ type: 'SEARCH_ASYNC', project: projectData})
    } catch (e) {
        console.log(e)
    }
    
}

export function* watchApiCall() {
    yield takeLatest('SEARCH', apiAsync)
}
