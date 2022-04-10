import { takeEvery, put, select } from 'redux-saga/effects';
import { getHotelsApi } from '../../api/apiRequests';
import { setHotels } from '../actions/actionCreator';
import { GET_HOTELS } from '../constants';

export function* hotelsRequest() {
  const request = yield select((state) => state.hotels.dataForRequest);
  const res = yield getHotelsApi(request);
  if (res.name === 'Error') {
    yield console.log(res);
    yield put(setHotels([]));
  } else {
    yield put(setHotels(res.data));
  }
}

export function* watchRequsetSaga() {
  yield takeEvery(GET_HOTELS, hotelsRequest);
}

export default function* rootSaga() {
  yield watchRequsetSaga();
}
