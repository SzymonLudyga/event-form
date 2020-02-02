import sendForm from '../api';
import { handleError, clearErrors } from './errors';
import { loading, successForm } from './status';

export const CHANGE_FORM_VALUE = 'CHANGE_FORM_VALUE';

export const changeValue = (id, value) => ({
    type: CHANGE_FORM_VALUE,
    input: id,
    value,
});

export const submitForm = () => async (dispatch, getState) => {
    dispatch(clearErrors());
    dispatch(loading(true));
    try {
        const { form } = getState();
        const res = await sendForm(form);
        if (res.status === 200) {
            dispatch(successForm(res.data.details));
            dispatch(loading(false));
        }
    } catch (e) {
        e.response.data.errorsArray.forEach((error) => {
            const [errorType, errorMessage] = error;
            dispatch(handleError(errorType, errorMessage));
        });
        dispatch(loading(false));
    }
};
