import axios from 'axios';
import { apiUrl } from '../consts';

const sendForm = async (formBody) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${apiUrl}/form`,
            data: formBody,
            responseType: 'json'
          });
        if (res.status === 200) {
            console.log(res);
        }
    } catch (e) {
        console.log(e)
    }
};

export default sendForm;
