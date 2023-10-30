export type NewBooksResponse = {
  error: string;
  total: string;
  books: Array<{
    title: string;
    subtitle: string;
    isbn13: string;
    price: string;
    image: string;
    url: string;
  }>;
};
