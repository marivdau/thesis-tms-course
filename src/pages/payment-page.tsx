import styled from "styled-components";
import { PageTitle } from "#ui/page-title/page-title";
import { Button, Stack, Typography } from "@mui/material";
import Confetti from 'react-confetti';
import { Link } from "react-router-dom";
import { useState } from "react";
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Tooltip } from '@mui/material';
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearCart } from "#features/order/order.slice";

export const Payment: React.FC = () => {
  const [showMeConfetti, setShowMeConfetti] = useState(false);
  const dispatch = useAppDispatch();
  const totalSumToPay: string = useAppSelector((state) => state.order.totalSum);

  return (
    <CartWrapper>
      <Confetti
        style={{ display: showMeConfetti ? 'flex' : 'none' }}
        width={1200}
        height={900}
        numberOfPieces={200}
      />
      <PageTitle children='Payment page' />
      <Link to={'/cart'}>
        <Tooltip title='Back to cart'>
          <ArrowBack />
        </Tooltip>
      </Link>
      <PaymentDiv>
        <Stack spacing={2}>
          {!showMeConfetti
            ?
            <>
              <Typography variant="h5">The total sum to pay is ${totalSumToPay}</Typography>
              <Typography variant="h6">Click the button below to pay your order</Typography>
            </>
            :
            <Typography variant="h5">Success!</Typography>
          }
          <Button
            variant="contained"
            onClick={() => {
              setShowMeConfetti(!showMeConfetti);
              dispatch(clearCart());   
            }}
          >
            {!showMeConfetti ? 'Pay your order' : 'Confetti stop'}
          </Button>
        </Stack>
      </PaymentDiv>
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const PaymentDiv = styled.div`
  width: 300px;
  margin: auto;
  padding: 30px;
  text-align: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: auto;
    padding: 0;
  }
`;
