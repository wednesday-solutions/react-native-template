import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

/**
 * Provides internationalization (i18n) support by ensuring that the necessary
 * translations and locale information are available throughout the app.
 *
 * @param {object} props - The props object containing component properties.
 * @param {React.ReactNode} props.children - The child elements/components to be rendered.
 * @returns {React.ReactNode} A JSX element wrapping the provided child components.
 */
export function LanguageProvider({ children }) {
  useTranslation(); // This initializes the i18next context for this component tree

  return <>{React.Children.only(children)}</>;
}

LanguageProvider.propTypes = {
  children: PropTypes.element.isRequired
};

export default LanguageProvider;
