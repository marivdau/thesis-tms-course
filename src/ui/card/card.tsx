import { Link, Rating } from "@mui/material";
import styled from "styled-components";

type PropsCard = {
  title: string;
  subtitle: string;
  isbn13: string;
  price: string;
  image: string;
  url: string;
}

export const Card: React.FC<PropsCard> = (props: PropsCard) => {
  return (
    <CardWrapper>
      <CardTitle href={props.url}>
        <CardImage>
          <CardImg src={props.image} />
        </CardImage>
        {props.title}
      </CardTitle>
      <CardSubtitle>
        {props.subtitle}
      </CardSubtitle>
      <InfoLine>
        <PriceSpan>{props.price}</PriceSpan>
        <Rating />
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
`;

const CardImage = styled.div`
  width: 300px;
  height: 300px;
  margin-bottom: 30px;
  background-color: var(--green-color);
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const CardTitle = styled(Link)`
  max-width: 300px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardSubtitle = styled.p`
  max-width: 300px;
  text-align: center;
`;

const InfoLine = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PriceSpan = styled.span`
  font-size: 16px;
  font-weight: 700;
  margin-right: 100px;
`;
