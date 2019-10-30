import { combineReducers } from 'redux';
import configureStore from 'app/utils/createStore';
import rootSaga from 'app/rootSaga';
import { exampleContainerReducer as example } from 'app/containers/ExampleScreen/reducer';

export default () => {
  const rootReducer = combineReducers({
    example
  });

  return configureStore(rootReducer, rootSaga);
};
