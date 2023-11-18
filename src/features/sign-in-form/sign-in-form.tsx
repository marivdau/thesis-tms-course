import { Button, TextField } from "@mui/material"
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authorization } from "#features/auth/authorization.slice";

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  const token = useAppSelector(
    (state) => state.authorization.token
  );
  if (token) {
    return <Navigate to={'/all'} />;
  }
  
  return (
    <SignInFormWrapper>
      <EmailInputDiv>
        <TextField 
          label='Your email *' 
          variant="outlined" 
          fullWidth={true} 
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)} 
        />
      </EmailInputDiv>
      <PasswordInputDiv>
        <TextField 
          label='Your password *' 
          variant="outlined" 
          fullWidth={true}
          value={password}
          onChange={({ currentTarget }) => setPassword(currentTarget.value)} 
        />
        <Link to={'/reset-password'}>Forgot password?</Link>
      </PasswordInputDiv>

      <ButtonDiv>
        <Button 
          variant="contained" 
          fullWidth={true}
          onClick={() => dispatch(authorization({ email, password }))}
        >
          Sign In
        </Button>
      </ButtonDiv>
    </SignInFormWrapper>
  )
}

const SignInFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
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
