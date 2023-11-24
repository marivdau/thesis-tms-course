import { Card } from "#ui/card/card"
import { PageTitle } from "#ui/page-title/page-title"
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getNewBooks } from "#features/new-books/new-books.slice";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { Subscribe } from "#features/subscribe/subscribe";

export const MainNewBooksPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { newBooks } = useAppSelector(({ newBooks }) => newBooks)
  useEffect(() => {
    dispatch(getNewBooks());
  }, [dispatch]);

  return (
    <MainNewBooksWrapper>
      <PageTitle children="new releases books" />
      <CardsDiv>
        {newBooks.books?.map(item =>
          <Card
            key={item.isbn13}
            image={item.image}
            url={item.url}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            isbn13={item.isbn13}
          />)}
      </CardsDiv>
      <PaginationDiv>
        <Pagination />
      </PaginationDiv>
      <Subscribe />
    </MainNewBooksWrapper>
  )
}

const MainNewBooksWrapper = styled.div`
  display: flex;
  background-color: var(--background-primary-color);
  flex-direction: column;
`;

const CardsDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  align-content: center;
`;

const PaginationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
