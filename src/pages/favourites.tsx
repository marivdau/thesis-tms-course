import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { PageTitle } from "#ui/page-title/page-title";
import { SimilarBooks } from "#ui/similar-books/similar-books";
import { Typography } from "@mui/material";
import { FavouriteCard } from "#ui/favourite-card/favourite-card";

export const FavouritesPage: React.FC = () => {
  const { favourites } = useAppSelector(({ favourites }) => favourites)

  return (
    <FavouritesWrapper>
      <PageTitle children='Favourites' />
      <FavoritesDiv>
        {favourites?.map((item, index) => 
          <FavouriteCard 
            key={index} 
            image={item.item.image} 
            url={item.item.url} 
            title={item.item.title} 
            subtitle={item.item.subtitle} 
            price={item.item.price} 
            isbn13={item.item.isbn13}             
          />)}
      </FavoritesDiv>

      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>Popular books</Typography>
      <SimilarBooks />
    </FavouritesWrapper>
  )
}

const FavouritesWrapper = styled.div``;

const FavoritesDiv = styled.div``;
