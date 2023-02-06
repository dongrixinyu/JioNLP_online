import axios from 'axios';

const config = require('@/global_config');

const frontend_ip = config.frontend_ip;
const frontend_port = config.frontend_port;

const jio_asset = axios.create({
  baseURL: 'http://' + frontend_ip + ':' + frontend_port,
  method: 'GET',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default jio_asset;
