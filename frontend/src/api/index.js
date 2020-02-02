import axios from 'axios';
import apiUrl from '../consts';

const sendForm = async (form) => axios({
    method: 'post',
    url: `${apiUrl}/form`,
    data: form,
    responseType: 'json',
});

export default sendForm;
