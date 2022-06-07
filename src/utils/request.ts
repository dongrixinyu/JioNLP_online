import axios from "axios"

export const jio_instance = axios.create({
    baseURL: 'http://182.92.160.94:17777',
    method: 'POST',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },

});

export const jio_instance_with_jiojio = axios.create({
    baseURL: 'http://81.69.241.87:17777',
    method: 'POST',
    timeout: 7000,
    headers: { 'Content-Type': 'application/json' },

});
