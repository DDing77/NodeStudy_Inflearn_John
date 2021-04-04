import { combineReducers } from 'redux';
import user from './user_reducers';
//import comments from './comments_reducer';

const rootReducer = combineReducers({
    user
})

export default rootReducer;