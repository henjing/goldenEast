import { combineReducers } from 'redux';

// Reducers
import adminReducer from './admin-reducer';
import appInteractionReducer from './app-interaction-reducer';
import chuanShangReducer from './chuanShang-reducer';

const reducers = combineReducers({
    adminState : adminReducer,
    appInteractionState : appInteractionReducer,
    chuanShangState : chuanShangReducer
});

export default reducers;