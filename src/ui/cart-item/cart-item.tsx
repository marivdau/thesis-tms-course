import { Button, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import Clear from '@mui/icons-material/Clear';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";
import AttachMoney from '@mui/icons-material/AttachMoney';
import { useAppDispatch } from "../../hooks";
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from "#features/order/order.slice";
import { removeDollarSignConvertToNumber } from "../../service/remove-dollar-sign";


export type PropsCart = {
  quantity: number;
  title: string;
  subtitle: string;
  authors: string;
  isbn13: number;
  year: string;
  price: string;
  image: string;
  url: string;
}

export const CartItem: React.FC<PropsCart> = (props: PropsCart) => {
  const dispatch = useAppDispatch();

  return (
    <CartWrapper key={props.isbn13}>
      <Cart>
        <CartImageDiv>
          <CartImg src={props.image} />
        </CartImageDiv>

        <InfoLineDiv>
          <Link to={`/preview-book/${props.isbn13}`} >
            <CartTitle>
              {props.title}
            </CartTitle>
          </Link>

          <CartSubtitle>
            {'by '}{props.authors}, {' '} {props.year}
          </CartSubtitle>
          <CartItemQuantity>
            <Button
              variant="text"
              onClick={() => dispatch(decreaseItemQuantity(props.isbn13))}>
              <Remove />
            </Button>
            <Typography variant="h6">
              {props.quantity}
            </Typography>
            <Button
              variant="text"
              onClick={() => dispatch(increaseItemQuantity(props.isbn13))}>
              <Add />
            </Button>
          </CartItemQuantity>
        </InfoLineDiv>

        <PriceRaitingDiv>
          <PriceSpan>
            <AttachMoney fontSize="large" />
            {(props.quantity * removeDollarSignConvertToNumber(props.price)).toFixed(2)}
          </PriceSpan>
        </PriceRaitingDiv>
        <FavIconDiv>
          <Button variant="text" onClick={() => dispatch(deleteItem(props.isbn13))}>
            <Clear />
          </Button>
        </FavIconDiv>
      </Cart>
      <Divider />
    </CartWrapper>
  )
}

const CartWrapper = styled.div``;

const Cart = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

const CartImageDiv = styled.div`
  width: 300px;
  height: 300px;
  margin-right: 30px;
  background-color: var(--green-color);
`;

const CartImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: scale-down;
`;

const CartTitle = styled.span`
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary-color);
`;

const CartSubtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--text-primary-second-color);
`;

const CartItemQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  margin-right: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const FavIconDiv = styled.div``;
