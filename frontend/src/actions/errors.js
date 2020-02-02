export const HANDLE_ERROR = 'HANDLE_ERROR';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const handleError = (errorType, errorMessage) => ({
    type: HANDLE_ERROR,
    errorType,
    errorMessage,
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});
