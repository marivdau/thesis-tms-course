import { Button, IconButton, InputAdornment, OutlinedInput, TextField } from "@mui/material"
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authorization } from "#features/auth/authorization.slice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const dispatch = useAppDispatch();

  const token = useAppSelector(
    (state) => state.authorization.token
  );
  if (token) {
    return <Navigate to={'/'} />;
  }

  return (
    <SignInFormWrapper>
      <EmailInputDiv>
        <OutlinedInput
          type='email'
          placeholder="Your email *"
          fullWidth={true}
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        />
      </EmailInputDiv>
      <PasswordInputDiv>
        <OutlinedInput
          placeholder="Your password *"
          fullWidth={true}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={({ currentTarget }) => setPassword(currentTarget.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
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
