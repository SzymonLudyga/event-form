import { combineReducers } from 'redux';
import form from './form';
import errors from './errors';
import status from './status';

export default function createRootReducer() {
    return combineReducers({
        form,
        errors,
        status,
    });
}
