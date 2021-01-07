import React from 'react';
import { connect } from 'react-redux';
import { changeLocale } from 'containers/common/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/common/LanguageProvider/selectors';
import { createStructuredSelector } from 'reselect';
// eslint-disable-next-line import/no-unresolved
import LanguageSelector from 'components/LayoutComponents/TopBar/LanguageSelector';

function LanguageSelectorContainer(props) {
  const onChangeLang = value => {
    props.changeLocale(value.key);
  };

  return <LanguageSelector locale={props.locale} onChangeLang={onChangeLang} />;
}

const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
});

const mapDisPatchToProps = {
  changeLocale,
};

export default connect(
  mapStateToProps,
  mapDisPatchToProps,
)(LanguageSelectorContainer);
