import { HANDLE_ERROR, CLEAR_ERRORS } from '../actions/errors';

const initialState = {
    email: '',
    first_name: '',
    last_name: '',
    event_date: '',
};

export default function errors(state = initialState, action) {
    if (action.type === HANDLE_ERROR) {
        return {
            ...state,
            [action.errorType]: action.errorMessage,
        };
    } if (action.type === CLEAR_ERRORS) {
        return {
            state: initialState,
        };
    }
    return state;
}
