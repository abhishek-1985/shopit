import { combineReducers } from 'redux';
import { all, fork } from 'redux-saga/effects';

import item, {sagas as itemSaga} from './item';

const allSagas = [...itemSaga];

export function* rootSaga() {
    yield all(allSagas.map(saga => fork(saga)));
}

export default combineReducers({item});