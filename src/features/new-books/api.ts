import { newBooksRequest } from '../../api/api';
import { baseUrl } from '../../api/constants';
import { NewBooksResponse } from './types';

export const api = {
  getNewBooks: (): Promise<NewBooksResponse> => {
    return newBooksRequest(baseUrl + 'new', {
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
