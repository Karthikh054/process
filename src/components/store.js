import { createStore, combineReducers } from 'redux';
import { formDataReducer } from './reducers';

const rootReducer = combineReducers({
  formData: formDataReducer,
});

const store = createStore(rootReducer);

export default store;
