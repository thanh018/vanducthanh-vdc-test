import { SEARCH_API_URL, WEATHER_DETAIL_URL } from 'constants/apiUrl';
import apiClient from './apiClient';

export const fetchSearchData = city =>
  apiClient
    .get(`${SEARCH_API_URL}/?query=${city}`)
    .then(response => response.data)
    .catch(err => {
      console.error('Error fetch locations:', err);
      throw err;
    });

export const getWeatherDetail = id =>
  apiClient
    .get(`${WEATHER_DETAIL_URL}/${id}`)
    .then(response => response.data)
    .catch(err => {
      console.error('Error get detail weather:', err);
      throw err;
    });
