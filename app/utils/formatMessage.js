import isPlainObject from 'lodash/isPlainObject';
import isString from 'lodash/isString';

const formatParamsMessage = (params, intl) => {
  if (!isPlainObject(params)) return {};
  const cloneParams = { ...params };
  Object.keys(cloneParams).forEach(key => {
    cloneParams[key] = intl.formatMessage({ id: cloneParams[key] });
  });
  return cloneParams;
};

export const formatMessage = (message, intl) => {
  let formatMsg = '';
  // Translate an array of message keys
  if (Array.isArray(message)) {
    formatMsg = message.map(msgId => `${intl.formatMessage({ id: msgId })}\n`);
  }
  // Translate an message object with its param
  else if (isPlainObject(message) && isString(message.id)) {
    return intl.formatMessage(
      { id: message.id },
      formatParamsMessage(message.params, intl),
    );
  }
  // Translate a normal message key
  else if (isString(message)) {
    formatMsg = intl.formatMessage({
      id: message,
      defaultMessage: 'Message Not found',
    });
  }
  return formatMsg;
};
