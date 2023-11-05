import { searchRequest } from '../../api/api';
import { baseUrl } from '../../api/constants';
import { SearchResponce } from './types';

export const searchsApi = {
  search: (search: string): Promise<SearchResponce> => {
    return searchRequest(
      baseUrl +
        `search/${search}/?page=42`,
      {
        method: 'GET',
        headers: {},
      }
    ).then((response) => {
      if (!response.ok) {
        throw new Error('SERVER ERROR');
      }
      return response.json();
    });
  },
};
