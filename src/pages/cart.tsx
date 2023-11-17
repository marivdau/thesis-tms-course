import styled from "styled-components";
import { PageTitle } from "#ui/page-title/page-title";
import { CartItem } from "#ui/cart-item/cart-item";
import { Button } from "@mui/material";
import AttachMoney from '@mui/icons-material/AttachMoney';
import { clearCart } from "#features/order/order.slice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { removeDollarSignConvertToNumber } from "../service/remove-dollar-sign";
import { BackLink } from "#features/back-link/back-link";

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { basket } = useAppSelector(({ order }) => order);

  const bookSumAmount: any = basket.reduce(
    (sum: number, basketItem) => (
      sum + removeDollarSignConvertToNumber(basketItem.item.price) * basketItem.quantity
    ), 0).toFixed(2);
  const vatAmount: any = (bookSumAmount * 0.23).toFixed(2);
  const totalSum: any = (+bookSumAmount + +vatAmount).toFixed(2);

  return (
    <CartWrapper>
      <PageTitle children='Your cart' />
      <BackLink />
      {basket?.map(({ item, quantity }, index: number) =>
        <CartItem
          key={index}
          quantity={quantity}
          image={item.image}
          url={item.url}
          title={item.title}
          authors={item.authors}
          year={item.year}
          price={item.price}
          isbn13={item.isbn13}
          subtitle={item.subtitle}
        />
      )}
      <OrderDiv>
        <OrderDetailesDiv>
          <SumTotalDiv>
            <SpanOrder>
              Sum total
            </SpanOrder>
            <SpanOrder>
              <AttachMoney />
              {bookSumAmount}
            </SpanOrder>
          </SumTotalDiv>
          <VatDiv>
            <SpanOrder>
              VAT
            </SpanOrder>
            <SpanOrder>
              <AttachMoney />
              {vatAmount}
            </SpanOrder>
          </VatDiv>
          <TotalDiv>
            <TotalSpan>
              Total:
            </TotalSpan>
            <TotalSpan>
              <AttachMoney fontSize="large" />
              {totalSum}
            </TotalSpan>
          </TotalDiv>
        </OrderDetailesDiv>
        <ButtonsDiv>
          <ButtonDiv>
            <Button variant="contained" fullWidth={true}>
              Check out
            </Button>
          </ButtonDiv>
          <ButtonDiv>
            <Button variant="outlined" fullWidth={true} onClick={() => dispatch(clearCart())}>
              Empty cart
            </Button>
          </ButtonDiv>
        </ButtonsDiv>
      </OrderDiv>
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const OrderDiv = styled.div`   
  width: 300px;
  margin-left: 60%;
  padding: 30px;
`;

const OrderDetailesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: stretch;`;

const SumTotalDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const SpanOrder = styled.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: var(--text-primary-color);
`;

const VatDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;  
`;

const TotalDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const TotalSpan = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: 400;
  line-height: 60px;
  color: var(--text-primary-color);
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonDiv = styled.div`
  margin-bottom: 20px;
`;
