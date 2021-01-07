/*
 * Dynamic Form Reducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import { handleActions } from 'redux-actions';
import { initState, save, changeFields } from './actions';

const initialState = {};
const reducer = handleActions(
  {
    [initState]: (state, action) => {
      const { formId, data } = action.payload;
      const updatedState = {
        [formId]: data,
      };
      return { ...state, ...updatedState };
    },
    [save]: (state, action) => ({ ...state, ...action.payload }),
    [changeFields]: (state, action) => {
      const { formId, data } = action.payload;
      const updatedState = {
        [formId]: {
          ...state[formId],
          ...data,
        },
      };
      return { ...state, ...updatedState };
    },
  },
  initialState,
);

export default reducer;
