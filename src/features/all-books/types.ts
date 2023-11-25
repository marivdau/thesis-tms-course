export type AllBooksResponse = {
  error: string;
  total: string;
  page: string;
  books: Array<{
    title: string;
    subtitle: string;
    isbn13: number;
    price: string;
    image: string;
    url: string;
  }>;
};
