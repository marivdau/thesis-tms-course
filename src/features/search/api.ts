import { searchRequest } from '../../api/api';
import { baseUrl } from '../../api/constants';
import { SearchResponce } from './types';

export const searchApi = {
  search: (payload: { search: string, page: number }): Promise<SearchResponce> => {
    return searchRequest(
      baseUrl + `search/${payload.search}/${payload.page}`,
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
