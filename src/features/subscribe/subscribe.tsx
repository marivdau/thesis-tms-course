import { Button, TextField, Typography } from "@mui/material";
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
        <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
          {!isCompletedSubscribtion
            ?
            'Subscribe to Newsletter'
            :
            'Congrats! You are subscribed now!'}
        </Typography>
        <Typography variant="subtitle2">
          {!isCompletedSubscribtion
            ?
            'Be the first to know about new IT books, upcoming releases, exclusive offers and more.'
            :
            'Check your email for the futher information'}
        </Typography>
      </SubscribeTextDiv>
      <SubscribeInputDiv>
        <TextField
          id="outlined-basic"
          label="Your email"
          variant="outlined"
          fullWidth
          sx={{
            display: !isCompletedSubscribtion ? 'block' : 'none',
          }}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)} />
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
`;

const SubscribeInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%
`;
