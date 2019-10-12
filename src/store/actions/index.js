import { call, put } from 'redux-saga/effects';
import { api } from '../api';
import { TYPE } from '../constants';

export const fetchPersonsRequest = () => ({ type: TYPE.REQUEST });

export function* fetchPersons() {
  try {
    const persons = yield call(api, 'https://swapi.co/api/people/');
    yield put({ type: TYPE.RESPONSE, data: persons.results });
  } catch (error) {
    console.error('error: ', error);
  }
}
