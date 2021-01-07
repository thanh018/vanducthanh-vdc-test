/*
 * Dynamic Form Actions
 *
 * 1) changeFields: Update fields on reducer's state
 * 2) save: send form values to other reducers
 *
 */

import { createAction } from 'redux-actions';
import { INIT_STATE, SAVE, CHANGE_FIELDS } from './constants';

export const initState = createAction(INIT_STATE);
export const save = createAction(SAVE);
export const changeFields = createAction(CHANGE_FIELDS);
