import { Button, OutlinedInput } from "@mui/material";
import styled from "styled-components";
import Send from "@mui/icons-material/Send"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { subscribeToNewsLetters } from "./subscribe.slice";
import { useState } from "react";

export const Subscribe = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const isCompletedSubscribtion = useAppSelector((state) => state.subscribtion.isComplete)

  return (
    <SubscribeWrapper>
      <SubscribeTextDiv>
        <SubscribeText>
          {!isCompletedSubscribtion
            ?
            'Subscribe to Newsletter'
            :
            'Congrats! You are subscribed now!'}
        </SubscribeText>
        <SubscribeSubtitle>
          {!isCompletedSubscribtion
            ?
            'Be the first to know about new IT books, upcoming releases, exclusive offers and more.'
            :
            'Check your email for the futher information'}
        </SubscribeSubtitle>
      </SubscribeTextDiv>
      <SubscribeInputDiv>
        <InputDiv>
          <OutlinedInput
            id="outlined-basic"
            placeholder="Your email"
            color="secondary"
            type="email"
            fullWidth
            sx={{
              display: !isCompletedSubscribtion ? 'block' : 'none',
              color: 'var(--text-primary-color)'
            }}
            onChange={({ currentTarget }) => setEmail(currentTarget.value)} />
        </InputDiv>

        <Button
          variant="contained"
          color="secondary"
          endIcon={<Send />}
          sx={{
            display: !isCompletedSubscribtion ? 'flex' : 'none',
          }}
          onClick={() => {
            dispatch(subscribeToNewsLetters({ email }));
          }}
        >
          Subscribe
        </Button>
      </SubscribeInputDiv>
    </SubscribeWrapper>
  )
}

const SubscribeWrapper = styled.div`
  all: unset;
  padding: 30px 50px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--purple-color);
`;

const SubscribeTextDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const SubscribeText = styled.p`
  all: unset;
  text-transform: uppercase;
  font-size: 30px;
  font-weight: 400;
  color: var(--text-primary-second-color);
  line-height: 45px;
  
  @media screen and (max-width: 700px) {
    font-size: 25px;
    font-weight: 400;
    line-height: 30px;
    text-align: center;
    margin-bottom: 20px;
  }
`;

const SubscribeSubtitle = styled.p`
  all: unset;
  font-size: 20px;
  font-weight: 200;
  color: var(--text-primary-second-color);
  line-height: 25px;
  
  @media screen and (max-width: 700px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

const SubscribeInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const InputDiv = styled.div`
  width: 100%;

  @media screen and (max-width: 700px) {
    margin-bottom: 20px;
  }
`;
