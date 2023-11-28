import { bookPreviewRequest } from '../../api/api';
import { baseUrl } from '../../api/constants';
import { BookPreviewResponse } from './types';

export const api = {
  getBookPreview: (payload: number): Promise<BookPreviewResponse> => {
    return bookPreviewRequest(baseUrl + `books/${payload}`, {
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
