/**
 *
 * T
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import { useTranslation } from 'react-i18next';

const T = ({ intl, id, values, style, text, ...otherProps }) => {
  const { t } = useTranslation();
  return (
    <Text testID="t" style={style} {...otherProps}>
      {id ? t(id, { ...values }) : text}
    </Text>
  );
};

T.propTypes = {
  id: PropTypes.string,
  intl: PropTypes.object,
  values: PropTypes.object,
  style: PropTypes.arrayOf(PropTypes.object),
  text: PropTypes.string
};
T.defaultProps = {
  text: ''
};

export default T;
