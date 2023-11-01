import { ButtonGroupSignInUp } from "#ui/button-group-sign/button-group-sign";
import { Button, TextField } from "@mui/material"
import { Link } from "react-router-dom";
import styled from "styled-components"

export const SignInPage: React.FC = () => {
  return (
    <SignInWrapper>
      <ButtonGroupSignInUp />

      <EmailInputDiv>
        <TextField label='Your email *' variant="outlined" fullWidth={true} />
      </EmailInputDiv>
      <PasswordInputDiv>
        <TextField label='Your password *' variant="outlined" fullWidth={true} />
        <Link to={'/reset-password'}>Forgot password?</Link>
      </PasswordInputDiv>

      <ButtonDiv>
        <Button variant="contained" fullWidth={true}>Sign In</Button>
      </ButtonDiv>
    </SignInWrapper>
  )
}

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 500px;
  margin: auto;
`;

const EmailInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;
`;

const PasswordInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;
`;

const ButtonDiv = styled.div`
  margin: auto;
  width: 300px;
  padding: 20px 0;
`;