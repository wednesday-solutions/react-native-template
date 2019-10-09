/**
 *
 * T
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { injectIntl } from 'react-intl'
import { Text } from 'react-native'

const T = ({ intl, id, values }) => (
  <Text>{intl.formatMessage({ id }, { ...values })}</Text>
)

T.propTypes = {
  id: PropTypes.string.isRequired,
  intl: PropTypes.object,
  values: PropTypes.object
}

export default compose(injectIntl)(T)
