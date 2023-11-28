import { getBookPreview } from '#features/book-preview/book-preview.slice';
import { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { PageTitle } from '#ui/page-title/page-title';
import { useParams } from 'react-router-dom';
import { Subscribe } from '#features/subscribe/subscribe';
import { Socials } from '#ui/socials/socials';
import { SimilarBooks } from '#ui/similar-books/similar-books';
import { BackLink } from '#features/back-link/back-link';
import { BookPreview } from '#features/book-preview/book-preview';

export const BookPreviewPage: React.FC = () => {
  const { bookIsbn } = useParams();
  const dispatch = useAppDispatch();
  const { bookPreview } = useAppSelector(({ bookPreview }) => bookPreview);
  useEffect(() => {
    if (bookIsbn) {
      dispatch(getBookPreview(+bookIsbn));
    }
  }, [dispatch, bookIsbn]);

  return (
    <BooksPreviewWrapper>
      <PageTitle>{bookPreview.title}</PageTitle>
      <BackLink />
      <BookInfoDiv>
        <BookPreview />
      </BookInfoDiv>
      <Socials />
      <Subscribe />
      <SimilarBooks />
    </BooksPreviewWrapper>
  );
};

const BooksPreviewWrapper = styled.div`
  display: flex;
  background-color: var(--background-primary-color);
  flex-direction: column;
`;

const BookInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
