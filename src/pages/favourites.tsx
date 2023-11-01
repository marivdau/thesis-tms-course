import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PageTitle } from "#ui/page-title/page-title";
import { SimilarBooks } from "#ui/similar-books/similar-books";
import { Typography } from "@mui/material";
import { getNewBooks } from "#features/new-books/new-books.slice";
import { FavouriteCard } from "#ui/favourite-card/favourite-card";

export const FavouritesPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { newBooks } = useAppSelector(({ newBooks }) => newBooks)
  useEffect(() => {
    dispatch(getNewBooks());
  }, [dispatch]);

  return (
    <FavouritesWrapper>
      <PageTitle children='Favourites' />
      <div>
        {newBooks.books?.map(item => 
          <FavouriteCard 
            key={item.isbn13} 
            image={item.image} 
            url={item.url} 
            title={item.title} 
            subtitle={item.subtitle} 
            price={item.price} 
            isbn13={item.isbn13}             
          />)}
      </div>

      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Popular books</Typography>
      <SimilarBooks />
    </FavouritesWrapper>
  )
}

const FavouritesWrapper = styled.div``;
