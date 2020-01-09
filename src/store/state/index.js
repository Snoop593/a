import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';


export const settingsReducer = (state = {}) => state;

export default history => combineReducers({
    router: connectRouter(history),
    settings: settingsReducer,
});
