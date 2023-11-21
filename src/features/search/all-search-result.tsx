import { Card } from "#ui/card/card"
import { PageTitle } from "#ui/page-title/page-title"
import { useEffect, useState } from "react";
import styled from "styled-components";
import { Pagination } from "@mui/material";
import { Subscribe } from "#features/subscribe/subscribe";
import { BackLink } from "#features/back-link/back-link";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getSearchedBooks } from "./search.slice";

export const SearchResultPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const { searchedBooks } = useAppSelector(({ search }) => search)
  useEffect(() => {
    dispatch(getSearchedBooks(page));
  }, [dispatch, page]);

  // const searchPhrase = useAppSelector((state) => state.search.searchedPhrase);

  return (
    <MainNewBooksWrapper>
      <PageTitle children={`search Result`} />
      <BackLink />
      <CardsDiv>
        {searchedBooks.books?.map(item =>
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
          onChange={(event, value) => {
            setPage(value);
            window.scroll(0, 0);
          }}
          count={+searchedBooks.total || 1}
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
