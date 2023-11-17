import { Card } from "#ui/card/card"
import { PageTitle } from "#ui/page-title/page-title"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { Subscribe } from "#features/subscribe/subscribe";
import { getAllBooks } from "#features/all-books/all-books.slice";
import { useParams } from "react-router-dom";

export const AllBooksPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { pagePagination } = useParams();

  const { allBooks } = useAppSelector(({ allBooks }) => allBooks)
  useEffect(() => {
    if (pagePagination === undefined) {
      dispatch(getAllBooks(1));
    } else {
      dispatch(getAllBooks(+pagePagination));
    }
  }, [dispatch, pagePagination]);

  return (
    <MainNewBooksWrapper>
      <PageTitle children="all books" />
      <CardsDiv>
        {allBooks.books?.map(item =>
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
        <Pagination
          size="large"
          color="secondary"
          variant="outlined"
          page={page}
          onChange={(event, value) => setPage(value)}
          count={+allBooks.total}
        />
      </PaginationDiv>
      <Subscribe />
    </MainNewBooksWrapper>
  )
}

const MainNewBooksWrapper = styled.div`
  display: flex;
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
