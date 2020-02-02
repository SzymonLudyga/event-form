export const CHANGE_FORM_VALUE = 'CHANGE_FORM_VALUE';

export const changeValue = (id, value) => {
    return {
        type: CHANGE_FORM_VALUE,
        input: id,
        value
    }
}