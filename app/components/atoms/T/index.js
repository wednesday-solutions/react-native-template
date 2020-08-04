/**
 *
 * T
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { injectIntl } from 'react-intl';
import { Text } from 'react-native';

const T = ({ intl, id, values, style, text, ...otherProps }) => (
  <Text testID="t" style={style} {...otherProps}>
    {id ? intl.formatMessage({ id }, { ...values }) : text}
  </Text>
);

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

export default compose(injectIntl)(T);
