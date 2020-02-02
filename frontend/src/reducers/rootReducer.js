import { combineReducers } from 'redux';
import form from './form';

export default function createRootReducer() {
    return combineReducers({
        form
    });
}
