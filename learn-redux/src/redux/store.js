import { createStore, combineReducers } from 'redux'
import appReducer from './App/appReducer';
import exempleReducer from './Exemple/exempleReducer';

const rootReducer = combineReducers({
    appReducer,
    exempleReducer
})

export default createStore(rootReducer)