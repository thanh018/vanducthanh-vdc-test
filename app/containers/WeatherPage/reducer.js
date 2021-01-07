import { handleActions } from 'redux-actions';

import * as actionFires from './actions';

export const initialState = {
  locationList: [],
  isLoading: false,
  lastAction: null,
  error: null,
  weatherDetail: [],
};

const weatherReducer = handleActions(
  {
    [actionFires.fetchSearchData]: state => ({
      ...state,
      isLoading: true,
    }),
    [actionFires.fetchSearchDataSuccess]: (state, action) => ({
      ...state,
      locationList: action.payload,
      isLoading: false,
    }),
    [actionFires.getWeatherDetail]: state => ({
      ...state,
      isLoading: true,
    }),
    [actionFires.getWeatherDetailSuccess]: (state, action) => ({
      ...state,
      weatherDetail: action.payload.weatherDetail,
      title: action.payload.title,
    }),
    [actionFires.updateLastAction]: (state, action) => ({
      ...state,
      lastAction: action.payload,
    }),
    [actionFires.resetWeatherDetail]: state => ({
      ...state,
      weatherDetail: [],
    }),
  },
  initialState,
);

export default weatherReducer;
