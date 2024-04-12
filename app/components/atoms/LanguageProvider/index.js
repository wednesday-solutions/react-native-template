/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { IntlProvider } from 'react-intl';

import { makeSelectLocale } from './selectors';
/**
 * Provides internationalization (i18n) support by wrapping components with an IntlProvider.
 * @param {object} props - The props object containing component properties.
 * @param {string} props.locale - The locale/language code for internationalization.
 * @param {object} props.messages - An object containing locale-specific message translations.
 * @param {React.ReactNode} props.children - The child elements/components to be wrapped and rendered.
 * @returns {React.ReactNode} A JSX element wrapping the provided child components with IntlProvider.
 */
export function LanguageProvider(props) {
  return (
    <IntlProvider
      locale={props.locale}
      key={props.locale}
      messages={props.messages[props.locale]}
    >
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}

LanguageProvider.propTypes = {
  locale: PropTypes.string,
  messages: PropTypes.object,
  children: PropTypes.element.isRequired
};

const mapStateToProps = createSelector(makeSelectLocale(), locale => ({
  locale
}));
/**
 * Generates and returns an object containing action dispatch functions.
 * @param {function} dispatch - The Redux store's dispatch function.
 * @returns {object} An object containing action dispatch functions wrapped for use in components.
 */
function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LanguageProvider);
