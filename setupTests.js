import React from 'react'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { IntlProvider } from 'react-intl'
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock'

Enzyme.configure({ adapter: new Adapter() })

// Create IntlProvider to retrieve React Intl context
const intlProvider = new IntlProvider(
  {
    locale: 'en',
    messages: {
      message1: 'Hello world'
    }
  },
  {}
)
const { intl } = intlProvider.getChildContext()

// `intl` prop is required when using injectIntl HOC
const nodeWithIntlProp = node => React.cloneElement(node, { intl })

// shallow() with React Intl context
global.shallowWithIntl = (node, { context, ...options } = {}) =>
  shallow(nodeWithIntlProp(node), {
    ...options,
    context: {
      ...context,
      intl
    }
  })

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage)
