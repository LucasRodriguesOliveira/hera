import axios, { AxiosRequestConfig } from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3000' });

export function request<T>(options: AxiosRequestConfig) {
  return client<T>(options)
}
