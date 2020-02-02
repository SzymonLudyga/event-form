import { CHANGE_FORM_VALUE } from '../actions/form';

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
    }
    return state;
}
