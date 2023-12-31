export type SearchResponce = {
  error: string;
  total: number;
  page: number;
  books: Array<{
    title: string;
    subtitle: string;
    isbn13: number;
    price: string;
    image: string;
    url: string;
  }>;
};

export interface Book {
  title: string;
  subtitle: string;
  isbn13: number;
  price: string;
  image: string;
  url: string;
}

export type Books = Book[];
