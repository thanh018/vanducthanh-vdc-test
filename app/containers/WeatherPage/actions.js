import { createAction } from 'redux-actions';

import * as actionsType from './constants';

export const fetchSearchData = createAction(actionsType.FETCH_SEARCH_DATA);
export const fetchSearchDataSuccess = createAction(
  actionsType.FETCH_SEARCH_DATA_SUCCESS,
);
export const fetchSearchDataFailure = createAction(
  actionsType.FETCH_SEARCH_DATA_FAILURE,
);

export const getWeatherDetail = createAction(actionsType.GET_WEATHER_DETAIL);
export const getWeatherDetailSuccess = createAction(
  actionsType.GET_WEATHER_DETAIL_SUCCESS,
);
export const getWeatherDetailFailure = createAction(
  actionsType.GET_WEATHER_DETAIL_FAILURE,
);

export const updateLastAction = createAction(actionsType.UPDATE_LAST_ACTION);
export const resetWeatherDetail = createAction(
  actionsType.RESET_WEATHER_DETAIL,
);
