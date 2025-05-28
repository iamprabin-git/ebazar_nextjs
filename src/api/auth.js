import axios from 'axios';
import config from '@/config';
import api from './api';

export async function login({ email, password }) {
  return await api.post(`${config.apiUrl}/api/auth/login`, { email, password, });
}

export async function registerUser(data) {
  return await api.post(`${config.apiUrl}/api/auth/register`, data);
}
