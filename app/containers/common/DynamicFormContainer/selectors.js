/**
 * DynamicForms selectors
 */

import { createSelector } from 'reselect';

const selectDynamicForms = state => state.dynamicForms || {};

const makeSelectDynamicForm = name =>
  createSelector(
    selectDynamicForms,
    dynamicFormsState => dynamicFormsState[name],
  );

const makeSelectAllDynamicForms = () =>
  createSelector(
    selectDynamicForms,
    dynamicFormsState => {
      const fields = {};
      Object.keys(dynamicFormsState).forEach(key => {
        Object.assign(fields, dynamicFormsState[key]);
      });
      return fields;
    },
  );

export { selectDynamicForms, makeSelectAllDynamicForms, makeSelectDynamicForm };
