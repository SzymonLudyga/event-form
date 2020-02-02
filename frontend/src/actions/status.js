export const LOADING = 'LOADING';
export const SUCCESS_FORM = 'SUCCESS_FORM';

export const loading = (isLoading) => ({
    type: LOADING,
    isLoading,
});

export const successForm = (success) => ({
    type: SUCCESS_FORM,
    success,
});
