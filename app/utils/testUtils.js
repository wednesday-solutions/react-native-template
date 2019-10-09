import React from 'react'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import ConnectedLanguageProvider from 'app/containers/LanguageProvider'
import { translationMessages } from '../i18n'
import createStore from '../rootReducer'
export const apiResponseGenerator = (ok, data) => ({
  ok,
  data
})

export const renderProvider = children => {
  const { store } = createStore()
  return render(
    <Provider store={store}>
      <ConnectedLanguageProvider messages={translationMessages}>
        {children}
      </ConnectedLanguageProvider>
    </Provider>
  )
}
