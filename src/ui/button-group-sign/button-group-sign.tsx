import { Button, ButtonGroup } from "@mui/material"
import styled from "styled-components";

export const ButtonGroupSignInUp = () => {
  return (
    <ButtonsGroupDiv>
      <ButtonGroup fullWidth={true}>
        <Button href="/sign-in" variant={window.location.pathname ==='/sign-in' ? 'contained' : 'outlined'} >Sign-In</Button>
        <Button href="/sign-up" variant={window.location.pathname ==='/sign-up' ? 'contained' : 'outlined'} >Sign-Up</Button>
      </ButtonGroup>
    </ButtonsGroupDiv>
  )
}

const ButtonsGroupDiv = styled.div`
  width: 300px;
  margin: auto;
  padding: 10px;
`;
