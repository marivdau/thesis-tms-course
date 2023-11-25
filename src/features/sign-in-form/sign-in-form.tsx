import { Button, IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authorization, authorizationFailure } from "#features/auth/authorization.slice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const SignInForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const dispatch = useAppDispatch();

  const emailOnSignUp = useAppSelector(state => state.signUpForm.email);
  const passwordOnSignUp = useAppSelector(state => state.signUpForm.password);

  const token = useAppSelector(
    (state) => state.authorization.token
  );

  const validate = (enteredEmail: string, enteredPassword: string) => {
    emailOnSignUp === enteredEmail && passwordOnSignUp === enteredPassword
      ? dispatch(authorization({ email, password }))
      : dispatch(authorizationFailure())
  };

  if (token) {
    return <Navigate to={'/'} />;
  }

  return (
    <SignInFormWrapper onSubmit={(event) => { event.preventDefault(); validate(email, password) }}>
      <EmailInputDiv>
        <OutlinedInput
          required
          type='email'
          placeholder="Your email *"
          sx={{ color: 'var(--text-primary-color)' }}
          fullWidth={true}
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        />
      </EmailInputDiv>
      <PasswordInputDiv>
        <OutlinedInput
          required
          sx={{ color: 'var(--text-primary-color)' }}
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
                sx={{ color: 'var(--icon-main-color)' }}
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
          type="submit"
          variant="contained"
          fullWidth={true}
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
  background-color: var(--background-primary-color);
  margin: auto;

  @media screen and (max-width: 900px) {
    margin: auto;
    width: 80%;
    align-items: center;
  }
`;

const EmailInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
  }
`;

const PasswordInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
  }
`;

const ButtonDiv = styled.div`
  margin: auto;
  width: 300px;
  padding: 20px 0;

  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
    padding: 0;
    width: 100%;
  }
`;
