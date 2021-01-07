import { call, put, takeLatest } from 'redux-saga/effects';

import get from 'lodash/get';
import * as weatherApis from 'apis/weatherApi';

import * as actionFires from './actions';

function* getLocationList({ payload }) {
  try {
    const response = yield call(weatherApis.fetchSearchData, payload);
    if (response) {
      yield put(actionFires.fetchSearchDataSuccess(response));
    }
  } catch (err) {
    yield put(actionFires.fetchSearchDataFailure(err));
  }
}

function* getWeatherDetail({ payload }) {
  try {
    const response = yield call(weatherApis.getWeatherDetail, payload);
    const weatherDetail = get(response, 'consolidated_weather', []);
    const title = get(response, 'title', []);
    if (weatherDetail) {
      yield put(actionFires.getWeatherDetailSuccess({ weatherDetail, title }));
    }
  } catch (err) {
    yield put(actionFires.getWeatherDetailFailure(err));
  }
}

export default function* weatherSagaWatchers() {
  yield takeLatest(actionFires.fetchSearchData, getLocationList);
  yield takeLatest(actionFires.getWeatherDetail, getWeatherDetail);
}
