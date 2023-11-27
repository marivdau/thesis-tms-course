import styled from "styled-components";
import { useAppSelector } from "../hooks";
import { PageTitle } from "#ui/page-title/page-title";
import { SimilarBooks } from "#ui/similar-books/similar-books";
import { Typography } from "@mui/material";
import { FavouriteCard } from "#ui/favourite-card/favourite-card";
import { BackLink } from "#features/back-link/back-link";
import { Link } from "react-router-dom";

export const FavouritesPage: React.FC = () => {
  const { favourites } = useAppSelector(({ favourites }) => favourites)

  return (
    <FavouritesWrapper>
      <PageTitle children='Favourites' />
      <BackLink />
      <FavoritesDiv>
        {favourites.length > 0 ?
          favourites?.map((item, index) =>
            <FavouriteCard
              key={index}
              image={item.item.image}
              url={item.item.url}
              title={item.item.title}
              subtitle={item.item.subtitle}
              price={item.item.price}
              isbn13={item.item.isbn13}
              author={item.item.authors}
              year={item.item.year}
            />) :
          <NoFavouritesDiv>
            <Typography variant="h4">There is no favourites.{' '}
              <Link to={'/all'}>Let's add it!</Link>
            </Typography>
          </NoFavouritesDiv>
        }
      </FavoritesDiv>

      <PopularBooksSpan>Popular books</PopularBooksSpan>
      <SimilarBooks />
    </FavouritesWrapper>
  )
}

const FavouritesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary-color);
`;

const FavoritesDiv = styled.div`
  margin-bottom: 30px;
`;

const NoFavouritesDiv = styled.div`
  margin: 30px;
  color: var(--text-primary-second-color);
`;

const PopularBooksSpan = styled.span`
  text-transform: uppercase;
  color: var(--text-primary-color);
  margin-left: 10px;
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`;
