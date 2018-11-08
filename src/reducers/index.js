import { combineReducers } from 'redux';
import ProfileReducer from './reducer_profile'

const rootReducer = combineReducers({
   profiles: ProfileReducer
})

export default rootReducer;