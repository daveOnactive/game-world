import axios, { AxiosInstance } from 'axios';

export const Api: AxiosInstance = axios.create({
  baseURL: 'https://www.freetogame.com/api',
})