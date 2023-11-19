import { Rating } from "@mui/material";
import styled from "styled-components";
import { Link as RouteLink } from 'react-router-dom';
import { randomRaiting } from "../../service/random-rating";

type PropsCard = {
  title: string;
  subtitle: string;
  isbn13: number;
  price: string;
  image: string;
  url: string;
}

export const Card: React.FC<PropsCard> = (props: PropsCard) => {
  return (
    <CardWrapper>
      <RouteLink to={`/preview-book/${props.isbn13}`} key={props.isbn13} onClick={() => window.scroll(0, 0)}>
        <CardTitleDiv>
          <CardImage>
            <CardImg src={props.image} />
          </CardImage>
          <CardTitleSpan>
            {props.title}
          </CardTitleSpan>
        </CardTitleDiv>
      </RouteLink>
      <CardSubtitleDiv>
        <CardSubtitle>
          {props.subtitle}
        </CardSubtitle>
      </CardSubtitleDiv>

      <InfoLine>
        <PriceSpan>{props.price}</PriceSpan>
        <Rating name="read-only" value={randomRaiting()} precision={0.5} readOnly />
      </InfoLine>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  max-width: 400px;
  padding: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 100%;
    border-bottom: 1px solid var(--green-color);
  }
`;

const CardImage = styled.div`
  width: 300px;
  height: 100%;
  margin-bottom: 30px;
  background-color: var(--green-color);

  @media screen and (max-width: 900px) {
    width: 100%;
    height: 100%;
    margin-bottom: 20px;
  }
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitleSpan = styled.span`
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    font-size: 32px;
    line-height: 38px;
  }
`;

const CardTitleDiv = styled.div`
  max-width: 300px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const CardSubtitleDiv = styled.div`
  max-width: 300px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const CardSubtitle = styled.p`
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;

  @media screen and (max-width: 900px) {
    font-size: 24px;
    line-height: 28px;
  }
`;

const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const PriceSpan = styled.span`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  margin-right: 100px;

  @media screen and (max-width: 900px) {
    font-size: 32px;
    line-height: 38px;
  }
`;
