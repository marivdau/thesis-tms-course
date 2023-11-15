export type BookPreviewResponse = {
  quantity?: number;
  vat?: number;
  total?: number | null;

  error: string;  
  title: string;
  subtitle: string;
  authors: string;
  publisher: string;
  isbn10: string;
  isbn13: number;
  pages: string;
  year: string;
  rating: number | null;
  desc: string;
  price: string;
  image: string;
  url: string;
  pdf: {
    [key: string]: string;
  }
};
