import { LOADING, SUCCESS_FORM } from '../actions/status';

const initialState = {
    loading: false,
    successMessage: '',
};

export default function status(state = initialState, action) {
    if (action.type === LOADING) {
        return {
            ...state,
            loading: action.isLoading,
        };
    } if (action.type === SUCCESS_FORM) {
        return {
            ...state,
            successMessage: action.success,
        };
    }
    return state;
}
