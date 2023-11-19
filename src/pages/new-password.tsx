import { setConfirmedPassword, setPassword } from "#features/sign-up-form/sign-up-form.slice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, InputAdornment, OutlinedInput, Typography } from "@mui/material"
import { useState } from "react";
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../hooks";
import { Link } from "react-router-dom";
import { register } from "#features/auth/registration.slice";

export const NewPassword: React.FC = () => {
  const dispatch = useAppDispatch();

  const [resetPassword, setResetPassword] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfPassword, setShowNewConfPassword] = useState(false);

  const password = useAppSelector((state) => state.signUpForm.password);
  const name = useAppSelector((state) => state.signUpForm.name);
  const email = useAppSelector((state) => state.signUpForm.email);

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowNewConfPassword = () => setShowNewConfPassword((show) => !show);

  return (
    <NewPasswordWrapper>
      <TypographyDiv>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>new password</Typography>
      </TypographyDiv>
      {resetPassword
        ?
        <>
          <ResetPasswordWrapper>
            <EmailTextDiv>
              <Typography>Your password was successfully reset!</Typography>
            </EmailTextDiv>
            <ButtonDiv>
              <Button
                variant="contained"
                component={Link}
                to={'/sign-in'}
                fullWidth={true}
              >
                Go to sign in
              </Button>
            </ButtonDiv>
          </ResetPasswordWrapper>
        </>
        :
        <>
          <PasswordInputDiv>
            <OutlinedInput
              fullWidth={true}
              type={showNewPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewPassword}
                    edge="end"
                  >
                    {showNewPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={({ currentTarget }) => dispatch(setPassword(currentTarget.value))}
            />
          </PasswordInputDiv>
          <PasswordInputDiv>
            <OutlinedInput
              fullWidth={true}
              type={showNewConfPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowNewConfPassword}
                    edge="end"
                  >
                    {showNewConfPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              onChange={({ currentTarget }) => dispatch(setConfirmedPassword(currentTarget.value))}
            />
          </PasswordInputDiv>

          <ButtonDiv>
            <Button
              variant="contained"
              fullWidth={true}
              onClick={() => {
                setResetPassword(true);
                dispatch(
                  register({
                    username: name,
                    password,
                    email,
                  })
                )
              }}>Set new Password</Button>
          </ButtonDiv>
        </>
      }

    </NewPasswordWrapper>
  )
}

const NewPasswordWrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 500px;
  margin: auto;

  @media screen and (max-width: 900px) {
    width: 100%;
    padding: 0;
  }
`;

const TypographyDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const PasswordInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const ButtonDiv = styled.div`
  margin: auto;
  width: 300px;
  padding: 20px 0;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const ResetPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const EmailTextDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
