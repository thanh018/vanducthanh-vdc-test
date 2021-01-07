// /**
//  *
//  * @param {object} props actions, props
//  * {
//  *  onFieldChange
//  * }
//  */

// import React, { memo, useEffect } from 'react';
// import { compose } from 'redux';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import cloneDeep from 'lodash/cloneDeep';
// import DynamicForm from 'components/DynamicComponents/DynamicForm';
// import { initState, save, changeFields } from './actions';

// function ReduxDynamicForm(props) {
//   const { fields, ...others } = props;
//   useEffect(() => {
//     props.initState({
//       formId: props.formId,
//       data: props.initialState,
//     });
//   }, []);

//   // Execute funtional properties
//   const formFields = fields.map(f => {
//     const field = cloneDeep(f);
//     Object.keys(f).forEach(key => {
//       if (typeof f[key] === 'function') {
//         field[key] = f[key](props.dynamicForms);
//       }
//     });
//     return field;
//   });

//   const handleFormChange = changedFields => {
//     const fieldKey = Object.keys(changedFields)[0];
//     const changedField = changedFields[fieldKey];
//     if (changedField) {
//       const state = {
//         formId: props.formId,
//         data: {
//           [changedField.name]: changedField.value,
//         },
//       };

//       props.changeFields(state);
//     }
//   };

//   return (
//     <DynamicForm
//       handleFormChange={handleFormChange}
//       fields={formFields}
//       {...others}
//     />
//   );
// }

// ReduxDynamicForm.propTypes = {
//   children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
//   formId: PropTypes.string.isRequired,
//   initialState: PropTypes.object.isRequired,
//   isReadOnly: PropTypes.bool,
// };

// const mapStateToProps = state => ({
//   dynamicForms: state.dynamicForms,
// });
// const withConnect = connect(
//   mapStateToProps,
//   {
//     initState,
//     save,
//     changeFields,
//   },
// );

// export default compose(
//   withConnect,
//   memo,
// )(ReduxDynamicForm);
