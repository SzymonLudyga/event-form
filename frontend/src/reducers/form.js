import { CHANGE_FORM_VALUE, CLEAR_FORM } from '../actions/form';

const initialState = {
    email: '',
    firstName: '',
    lastName: '',
    eventDate: '',
};

export default function form(state = initialState, action) {
    if (action.type === CHANGE_FORM_VALUE) {
        return {
            ...state,
            [action.input]: action.value,
        };
    } if (action.type === CLEAR_FORM) {
        return {
            ...state,
            email: '',
            firstName: '',
            lastName: '',
            eventDate: '',
        };
    }
    return state;
}
