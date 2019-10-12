import { takeLatest } from 'redux-saga/effects';

import { TYPE } from './constants';

import { fetchPersons } from './actions';

function* saga() {
  yield takeLatest(TYPE.REQUEST, fetchPersons);
}

export default saga;
