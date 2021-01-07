import { createSelector } from 'reselect';

import { initialState } from './reducer';

const selectWeatherState = state => state.weather || initialState;

const selectLocationList = createSelector(
  selectWeatherState,
  weatherState => weatherState.locationList || [],
);

const selectWeatherDetail = createSelector(
  selectWeatherState,
  weatherState => weatherState.weatherDetail || [],
);

const selectTitle = createSelector(
  selectWeatherState,
  weatherState => weatherState.title || '',
);

const selectIsLoading = createSelector(
  selectWeatherState,
  weatherState => weatherState.isLoading || false,
);

export {
  selectLocationList,
  selectWeatherDetail,
  selectTitle,
  selectIsLoading,
};
