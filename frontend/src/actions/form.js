import sendForm from '../api';
import { handleError, clearErrors } from './errors';
import { loading, successForm } from './status';

export const CHANGE_FORM_VALUE = 'CHANGE_FORM_VALUE';
export const CLEAR_FORM = 'CLEAR_FORM';

export const changeValue = (id, value) => ({
    type: CHANGE_FORM_VALUE,
    input: id,
    value,
});

export const clearForm = () => ({
    type: CLEAR_FORM,
});

export const submitForm = () => async (dispatch, getState) => {
    dispatch(loading(true));
    try {
        const { form } = getState();
        const res = await sendForm(form);
        if (res.status === 200) {
            dispatch(clearErrors());
            dispatch(clearForm());
            dispatch(successForm(res.data.details));
            dispatch(loading(false));
            setTimeout(() => dispatch(successForm(null)), 3000);
        }
    } catch (e) {
        dispatch(clearErrors());
        if (e.response.status === 400) {
            e.response.data.errorsArray.forEach((error) => {
                const [errorType, errorMessage] = error;
                dispatch(handleError(errorType, errorMessage));
            });
        } else {
            dispatch(handleError('unknown_error', 'Unknown error.'));
        }
        dispatch(loading(false));
    }
};
