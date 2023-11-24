import { Button, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setConfirmedPassword, setEmail, setName, setPassword } from "./sign-up-form.slice";
import { register } from "#features/auth/registration.slice";
import { Link } from "react-router-dom";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const SignUpForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfPassword, setShowConfPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfPassword = () => setShowConfPassword((show) => !show);

  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.signUpForm.name);
  const email = useAppSelector((state) => state.signUpForm.email);
  const password = useAppSelector((state) => state.signUpForm.password);
  const confirmedPassword = useAppSelector(
    (state) => state.signUpForm.confirmedPassword
  );
  const isCompleted = useAppSelector(
    (state) => state.registration.isCompleted
  );

  return (
    <>
      {isCompleted
        ?
        <>
          <SignInSuccess>
            <SuccessSpan>Congratulations {name}!</SuccessSpan>
            <SuccessSpan>You are registered</SuccessSpan>
          </SignInSuccess>
          <Button component={Link} to={'/sign-in'}>Click here to proceed to sign in page</Button>
        </>
        :
        <SignInFormWrapper onSubmit={(event) => {
          event?.preventDefault();
          dispatch(
            register({
              username: name,
              password,
              email,
            })
          )
        }
        }>
          <NameInputDiv>
            <TextField
              type="text"
              placeholder="Your name *"
              variant="outlined"
              fullWidth={true}
              value={name}
              onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
            />
          </NameInputDiv>
          <EmailInputDiv>
            <OutlinedInput
              placeholder="Your email *"
              type='email'
              fullWidth={true}
              value={email}
              onChange={({ currentTarget }) =>
                dispatch(setEmail(currentTarget.value))
              }
            />
          </EmailInputDiv>
          <PasswordInputDiv>
            <OutlinedInput
              placeholder="Your password *"
              fullWidth={true}
              value={password}
              onChange={({ currentTarget }) =>
                dispatch(setPassword(currentTarget.value))
              }
              type={showPassword ? 'text' : 'password'}
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
          </PasswordInputDiv>
          <PasswordInputDiv>
            <OutlinedInput
              placeholder="Confirm password *"
              fullWidth={true}
              value={confirmedPassword}
              onChange={({ currentTarget }) =>
                dispatch(setConfirmedPassword(currentTarget.value))
              }
              type={showConfPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfPassword}
                    edge="end"
                  >
                    {showConfPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </PasswordInputDiv>

          <ButtonDiv>
            <Button
              type="submit"
              variant="contained"
              fullWidth={true}
            >
              Sign Up
            </Button>
          </ButtonDiv>
        </SignInFormWrapper>
      }
    </>

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

const NameInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
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
    margin: 20px 0;
    padding: 0;
    width: 100%;
  }
`;

const SignInSuccess = styled.div`
  padding: 30px 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const SuccessSpan = styled.span`
  font-size: 26px;
  line-height: 30px;
  font-weight: 600;
  text-align: center;
  color: var(--text-primary-second-color);
`;
