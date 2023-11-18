import { Button, Rating } from "@mui/material";
import styled from "styled-components";
import Favourites from '@mui/icons-material/Favorite';
import { randomRaiting } from "../../service/random-rating";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { unMarkItem } from "#features/bookmark/bookmark.slice";

type PropsCard = {
  title: string;
  subtitle: string;
  isbn13: number;
  price: string;
  image: string;
  url: string;
}

export const FavouriteCard: React.FC<PropsCard> = (props: PropsCard) => {
  const dispatch = useAppDispatch();

  return (
    <CardWrapper>
      <CardImageDiv>
        <CardImg src={props.image} />
      </CardImageDiv>
      <InfoLineDiv>
        <Link to={`/preview-book/${props.isbn13}`} >
          <CardTitle>
            {props.title}
          </CardTitle>
        </Link>
        <CardSubtitle>
          {'by '}{'author'}, {' '} {'year'}
        </CardSubtitle>
        <PriceRaitingDiv>
          <PriceSpan>{props.price}</PriceSpan>
          <Rating name="read-only" value={randomRaiting()} precision={0.5} readOnly />
        </PriceRaitingDiv>
      </InfoLineDiv>
      <FavIconDiv>
        <Button variant="text" onClick={() => dispatch(unMarkItem(props))}>
          <Favourites />
        </Button>
      </FavIconDiv>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const CardImageDiv = styled.div`
  width: 300px;
  height: 300px;
  margin-right: 30px;
  background-color: var(--green-color);
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const CardTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
`;

const CardSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary-second-color);
`;

const InfoLineDiv = styled.div`
  margin-right: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 600px;
`;

const PriceRaitingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PriceSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 100px;
`;

const FavIconDiv = styled.div`

`;
