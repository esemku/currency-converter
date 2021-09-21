import axios from 'axios';

export const API_XE_CONVERTER = axios.create({
  baseURL: process.env.REACT_APP_XE_CONVERTER_API,
  responseType: 'json',
});
