import styled from 'styled-components';
import { CartItem } from '#ui/cart-item/cart-item';
import { Button, Typography } from '@mui/material';
import AttachMoney from '@mui/icons-material/AttachMoney';
import { clearCart, getTotalSum } from '#features/order/order.slice';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { removeDollarSignConvertToNumber } from '../../service/remove-dollar-sign';

export const Order: React.FC = () => {
  const dispatch = useAppDispatch();
  const { basket } = useAppSelector(({ order }) => order);

  const bookSumAmount: any = basket
    .reduce(
      (sum: number, basketItem) =>
        sum +
        removeDollarSignConvertToNumber(basketItem.item.price) *
          basketItem.quantity,
      0
    )
    .toFixed(2);
  const vatAmount: any = (bookSumAmount * 0.23).toFixed(2);
  const totalSum: any = (+bookSumAmount + +vatAmount).toFixed(2);

  const token = useAppSelector((state) => state.authorization.token);

  const navigate = useNavigate();
  const navigateToLogIn = () => {
    navigate('/sign-in');
  };
  const navigateToPaymentPage = () => {
    navigate('/payment');
  };

  return (
    <>
      {basket.length > 0 ? (
        basket?.map(({ item, quantity }, index: number) => (
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
        ))
      ) : (
        <NothingInTheCartDiv>
          <Typography variant="h4">
            There is nothing in your cart.{' '}
            <Link to={'/all'}>Let's buy something!</Link>
          </Typography>
        </NothingInTheCartDiv>
      )}
      <OrderDiv>
        <OrderDetailesDiv>
          <SumTotalDiv>
            <SpanOrder>Sum total</SpanOrder>
            <SpanOrder>
              <AttachMoney />
              {bookSumAmount}
            </SpanOrder>
          </SumTotalDiv>
          <VatDiv>
            <SpanOrder>VAT</SpanOrder>
            <SpanOrder>
              <AttachMoney />
              {vatAmount}
            </SpanOrder>
          </VatDiv>
          <TotalDiv>
            <TotalSpan>Total:</TotalSpan>
            <TotalSpan>
              <AttachMoney fontSize="large" />
              {totalSum}
            </TotalSpan>
          </TotalDiv>
        </OrderDetailesDiv>
        <ButtonsDiv>
          <ButtonDiv>
            <Button
              variant="contained"
              fullWidth={true}
              onClick={() => {
                if (token) {
                  navigateToPaymentPage();
                  dispatch(getTotalSum(totalSum));
                } else {
                  navigateToLogIn();
                }
              }}
            >
              Check out
            </Button>
          </ButtonDiv>
          <ButtonDiv>
            <Button
              variant="outlined"
              fullWidth={true}
              onClick={() => {
                dispatch(clearCart());
              }}
            >
              Empty cart
            </Button>
          </ButtonDiv>
        </ButtonsDiv>
      </OrderDiv>
    </>
  );
};

const OrderDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin-left: 60%;
  padding: 30px;

  @media screen and (max-width: 900px) {
    width: 90%;
    margin: auto;
    padding: 0;
  }
`;

const OrderDetailesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
`;

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
  color: var(--text-primary-second-color);
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonDiv = styled.div`
  margin-bottom: 20px;
`;

const NothingInTheCartDiv = styled.div`
  margin: 30px;
  color: var(--text-primary-second-color);
`;
