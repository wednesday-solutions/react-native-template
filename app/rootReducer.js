import { combineReducers } from 'redux'
import configureStore from 'app/utils/createStore'
import rootSaga from 'app/rootSaga'
import { exampleContainerReducer } from 'app/containers/ExampleScreen/reducer'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    example: exampleContainerReducer
  })

  return configureStore(rootReducer, rootSaga)
}
