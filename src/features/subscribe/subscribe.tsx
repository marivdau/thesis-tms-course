import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import Send from "@mui/icons-material/Send"
import { useAppDispatch } from "../../hooks";
import { subscribeToNewsLetters } from "./subscribe.slice";
import { useState } from "react";

export const Subscribe = () => {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('');
  const [visible, setVisible] = useState(true);

  return (
    <SubscribeWrapper>
      <SubscribeTextDiv>
        <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>
          Subscribe to Newsletter
         </Typography>
        <Typography variant="subtitle2">
          Be the first to know about new IT books, upcoming releases, exclusive offers and more.
        </Typography>
      </SubscribeTextDiv>
      <SubscribeInputDiv>
        <TextField 
          id="outlined-basic" 
          label="Your email" 
          variant="outlined" 
          fullWidth 
          sx={{
            display: visible ? 'block' : 'none',
          }}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)} />
        <Button 
          variant="contained" 
          color="secondary" 
          endIcon={<Send />} 
          onClick={() => {
            dispatch(subscribeToNewsLetters({ email })); 
            setVisible(!visible)}
          }>
          { visible ? 'Subscribe' : 'You subscribed!' }
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
