import styled from "styled-components";
import { PageTitle } from "#ui/page-title/page-title";
import { Button, Stack } from "@mui/material";
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
    <PaymentWrapper>
      <Confetti
        style={{ display: showMeConfetti ? 'flex' : 'none' }}
        width={window.innerWidth || 300}
        height={window.innerHeight || 200}
        numberOfPieces={200}
      />
      <PageTitle children='Payment page' />
      <Link to={'/cart'}>
        <Tooltip title='Back to cart'>
          <ArrowBack />
        </Tooltip>
      </Link>
      <PaymentDiv>
        <Stack spacing={6}>
          {!showMeConfetti
            ?
            <>
              <PaymentTextSpan>The total sum to pay is ${totalSumToPay}</PaymentTextSpan>
              <PaymentTextSpan>Click the button below to pay your order</PaymentTextSpan>
            </>
            :
            <PaymentTextSpan>Success!</PaymentTextSpan>
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
    </PaymentWrapper>
  )
}

const PaymentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary-color);
`;

const PaymentDiv = styled.div`
  width: 500px;
  margin: auto;
  padding: 30px;
  text-align: center;

  @media screen and (max-width: 900px) {
    width: 100%;
    margin: auto;
    padding: 0;
  }
`;

const PaymentTextSpan = styled.span`
  color: var(--text-primary-second-color);
  font-size: 24px;
  font-weight: 600;
  line-height: 32px;
`;
