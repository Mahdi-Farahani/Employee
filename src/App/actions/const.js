import { create } from 'axios';

//FOR PRODUCTS API
export const BASE_URL = 'http://dummy.restapiexample.com/api/v1/employees';

export const API = create({
  baseURL: BASE_URL,
});
