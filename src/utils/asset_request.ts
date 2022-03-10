import axios from "axios"

const jio_asset = axios.create({
    baseURL: 'http://182.92.160.94:16666',
    method: 'GET',
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' },
})

export default jio_asset
