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

const T = ({ intl, id, values }) => (
  <Text testID="t">{intl.formatMessage({ id }, { ...values })}</Text>
);

T.propTypes = {
  id: PropTypes.string,
  intl: PropTypes.object,
  values: PropTypes.object
};
T.defaultProps = {
  id: 'some_text'
};

export default compose(injectIntl)(T);
