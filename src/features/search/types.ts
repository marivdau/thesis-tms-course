export type SearchResponce = {
  error: string;
  total: number;
  page: number;
  books: SearchedBooks[];
};

export type SearchedBooks = {
  title: string;
  subtitle: string;
  isbn13: number;
  price: string;
  image: string;
  url: string;
}
