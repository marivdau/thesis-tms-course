import { allBooksRequest } from '../../api/api';
import { baseUrl } from '../../api/constants';
import { AllBooksResponse } from './types';

export const api = {
  getAllBooks: (payload: number): Promise<AllBooksResponse> => {
    return allBooksRequest(baseUrl + `search/the/?page=${payload}`, {
      method: 'GET',
      headers: {},
    }).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER_ERROR');
      }
      return response.json();
    });
  },
};
