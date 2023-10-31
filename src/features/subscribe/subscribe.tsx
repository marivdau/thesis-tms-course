import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components";
import Send from "@mui/icons-material/Send"

export const Subscribe = () => {
  return (
    <SubscribeWrapper>
      <SubscribeTextDiv>
        <Typography variant="h4" sx={{ textTransform: 'uppercase' }}>Subscribe to Newsletter</Typography>
        <Typography variant="subtitle2">
          Be the first to know about new IT books, upcoming releases, exclusive offers and more.
        </Typography>
      </SubscribeTextDiv>
      <SubscribeInputDiv>
        <TextField id="outlined-basic" label="Your email" variant="outlined" fullWidth />
        <Button variant="contained" color="secondary" endIcon={<Send />}>
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
