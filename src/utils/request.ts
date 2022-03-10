import axios from "axios"

const jio_instance = axios.create({
    baseURL: 'http://182.92.160.94:17777',
    method: 'POST',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },

});

export default jio_instance
