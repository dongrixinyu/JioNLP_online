import axios from 'axios';

const config = require('@/global_config');

const backend_ip = config.backend_ip;
const backend_port = config.backend_port;

export const jio_instance = axios.create({
  baseURL: 'http://' + backend_ip + ':' + backend_port,
  method: 'POST',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export const jio_instance_with_jiojio = axios.create({
  baseURL: 'http://' + backend_ip + ':' + backend_port,
  method: 'POST',
  timeout: 7000,
  headers: { 'Content-Type': 'application/json' },
});

export const stat_instance = axios.create({
  baseURL: 'http://' + backend_ip + ':' + backend_port,
  method: 'POST',
  timeout: 7000,
  headers: { 'Content-Type': 'application/json' },
});
