import { createStore , combineReducers} from 'redux';
import languageReducer from './languageReducer';



const rootReducer = combineReducers({
  language: languageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
const store = createStore(rootReducer);
export default store;