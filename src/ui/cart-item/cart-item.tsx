import { Button, Divider, Typography } from "@mui/material";
import styled from "styled-components";
import Clear from '@mui/icons-material/Clear';
import Add from '@mui/icons-material/Add';
import Remove from '@mui/icons-material/Remove';
import { useState } from "react";
import { Link } from "react-router-dom";
import { removeDollarSignConvertToNumber } from "../../service/remove-dollar-sign";
import AttachMoney from '@mui/icons-material/AttachMoney';


type PropsCart = {
  title: string;
  subtitle: string;
  isbn13: number;
  price: string;
  image: string;
  url: string;
//   error: string;  
//   title: string;
//   subtitle: string;
//   authors: string;
//   publisher: string;
//   isbn10: string;
//   isbn13: number;
//   pages: string;
//   year: string;
//   rating: number | null;
//   desc: string;
//   price: string;
//   image: string;
//   url: string;
//   pdf: {
//     [key: string]: string;
//   }
}

export const CartItem: React.FC<PropsCart> = (props: PropsCart) => {  
  const [bookQuantity, setBookQuantity] = useState(1);
  return (
    <>
      <CartWrapper>        
        <CartImageDiv>
          <CartImg src={props.image} />
        </CartImageDiv>

        <InfoLineDiv>
          <Link to={`/preview-book/${props.isbn13}`}>
            <CartTitle>
              {props.title}
            </CartTitle>  
          </Link>
       
          <CartSubtitle>
            {'by '}{'author'}, {' '} {'year'}
          </CartSubtitle>
          <CartItemQuantity>
            <Button 
              variant="text" 
              onClick={() => {
                  if(bookQuantity === 1) {
                  setBookQuantity(bookQuantity);
                } else {
                  setBookQuantity(bookQuantity - 1);
                }
              }                
            }>
              <Remove />
            </Button>
            <Typography variant="h6">
              {bookQuantity}
            </Typography>
            <Button 
              variant="text"
              onClick={() => setBookQuantity(bookQuantity + 1)         
            }>
              <Add />
            </Button>
          </CartItemQuantity>            
        </InfoLineDiv>

        <PriceRaitingDiv>
          <PriceSpan>
            <AttachMoney fontSize="large" />
            {removeDollarSignConvertToNumber(props.price)}
          </PriceSpan>
        </PriceRaitingDiv>    
        <FavIconDiv>
          <Button variant="text">
            <Clear />
          </Button>        
        </FavIconDiv>
      </CartWrapper>
      <Divider />
    </>
  )
}

const CartWrapper = styled.div`
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
