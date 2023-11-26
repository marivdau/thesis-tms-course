import { Alert, Button, IconButton, InputAdornment, OutlinedInput, Snackbar } from "@mui/material"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { SyntheticEvent, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { setConfirmedPassword, setEmail, setName, setPassword } from "#features/sign-up-form/sign-up-form.slice";
import { register } from "#features/auth/registration.slice";
import React from "react";

export const AccountForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [open, setOpen] = React.useState(false);

  const [errorInputNewPass, setErrorInputNewPass] = useState(false);
  const [errorInputOldPassword, setErrorInputOldPassword] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfPassword, setShowNewConfPassword] = useState(false);

  const [enteredNewPassword, setEnteredNewPassword] = useState<string>('');
  const [enteredConfirmNewPassword, setEnteredConfirmNewPassword] = useState<string>('')

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowNewConfPassword = () => setShowNewConfPassword((show) => !show);

  const name = useAppSelector((state) => state.signUpForm.name);
  const email = useAppSelector((state) => state.signUpForm.email);
  const password = useAppSelector((state) => state.signUpForm.password);
  const passwordAuth = useAppSelector((state) => state.authorization.auth.password);
  const [oldPassword, setOldPassword] = useState('');

  const errorNewPasswordCheck = () => {
    if (enteredNewPassword !== enteredConfirmNewPassword || enteredNewPassword === '' || enteredConfirmNewPassword === '') {
      setErrorInputNewPass(true);
      console.log('error')
    } else {
      setErrorInputNewPass(false);
    }
  }

  const errorOldPasswordValidCheck = () => {
    if (passwordAuth !== oldPassword) {
      setErrorInputOldPassword(true);
    } else {
      setErrorInputOldPassword(false);
    }
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <AccountFormWrapper onSubmit={(event) => {
      event?.preventDefault();
      if (!errorInputNewPass && !errorInputOldPassword) {
        dispatch(
          register({
            username: name,
            password,
            email,
          })
        );
        handleClick();
      }
    }
    }>
      <TypographySectionSpan>
        Profile
      </TypographySectionSpan>
      <UserInfo>
        <NameInfo>
          <TypographySpan>
            Name
          </TypographySpan>
          <OutlinedInput
            required
            type="text"
            fullWidth={true}
            value={name || ''}
            sx={{ color: 'var(--text-primary-color)' }}
            onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
          />
        </NameInfo>
        <EmailInfo>
          <TypographySpan>
            Email
          </TypographySpan>
          <OutlinedInput
            required
            fullWidth={true}
            type="email"
            sx={{ color: 'var(--text-primary-color)' }}
            value={email}
            onChange={({ currentTarget }) =>
              dispatch(setEmail(currentTarget.value))
            }
          />
        </EmailInfo>
      </UserInfo>

      <TypographySectionSpan>
        Password
      </TypographySectionSpan>
      <PasswordDiv>
        <PasswordInfo>
          <TypographySpan>
            Password
          </TypographySpan>
          <OutlinedInput
            fullWidth={true}
            sx={{ color: 'var(--text-primary-color)' }}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                  sx={{ color: 'var(--icon-main-color)' }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            value={oldPassword}
            onChange={({ currentTarget }) => setOldPassword(currentTarget.value)}
            error={errorInputOldPassword}
          />
          {errorInputOldPassword
            ?
            <ErrorTextSpan>Password is not correct</ErrorTextSpan>
            :
            <></>
          }
        </PasswordInfo>
      </PasswordDiv>
      <PasswordNewDiv>
        <PasswordInfo>
          <TypographySpan>
            New password
          </TypographySpan>
          <OutlinedInput
            fullWidth={true}
            type={showNewPassword ? 'text' : 'password'}
            sx={{ color: 'var(--text-primary-color)' }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewPassword}
                  edge="end"
                  sx={{ color: 'var(--icon-main-color)' }}
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={({ currentTarget }) => {
              setEnteredNewPassword(currentTarget.value);
              dispatch(setPassword(currentTarget.value))
            }}
            error={errorInputNewPass}
          />
          {errorInputNewPass
            ?
            <ErrorTextSpan>New password doesn't match</ErrorTextSpan>
            :
            <></>
          }
        </PasswordInfo>
        <PasswordInfo>
          <TypographySpan>
            Confirm new password
          </TypographySpan>
          <OutlinedInput
            fullWidth={true}
            sx={{ color: 'var(--text-primary-color)' }}
            type={showNewConfPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowNewConfPassword}
                  edge="end"
                  sx={{ color: 'var(--icon-main-color)' }}
                >
                  {showNewConfPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={({ currentTarget }) => {
              setEnteredConfirmNewPassword(currentTarget.value);
              dispatch(setConfirmedPassword(currentTarget.value))
            }}
            error={errorInputNewPass}
          />
          {errorInputNewPass
            ?
            <ErrorTextSpan>New password doesn't match</ErrorTextSpan>
            :
            <></>
          }
        </PasswordInfo>
      </PasswordNewDiv>
      <ButtonsDiv>
        <ButtonSaveDiv>
          <Button
            type="submit"
            variant="contained"
            fullWidth={true}
            onClick={() => { errorNewPasswordCheck(); errorOldPasswordValidCheck(); }}
          >
            Save changes
          </Button>
        </ButtonSaveDiv>
      </ButtonsDiv>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Changes successfully saved!
        </Alert>
      </Snackbar>
    </AccountFormWrapper>
  )
}

const AccountFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary-color);
  padding: 0 20px 30px;

  @media screen and (max-width: 1000px) {
    width: 90%;
    align-items: center;
    margin: auto;
  }
`;

const TypographySectionSpan = styled.span`
  text-transform: uppercase;
  color: var(--text-primary-color);
  font-size: 28px;
  font-weight: 500;
  line-height: 30px;
`;

const TypographySpan = styled.span`
  text-transform: uppercase;
  color: var(--text-primary-color);
  font-size: 18px;
  font-weight: 500;
  line-height: 40px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
  
  @media screen and (max-width: 1000px) {
    margin: auto;
    flex-direction: column;
    width: 100%;
  }
`;

const NameInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  width: 400px;

  @media screen and (max-width: 1000px) {
    margin: auto;
    flex-direction: column;
    width: 100%;
  }
`;

const EmailInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 400px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    margin-bottom: 30px;
  }
`;

const PasswordDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const PasswordInfo = styled.div`
  width: 400px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const PasswordNewDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

const ButtonSaveDiv = styled.div`
  margin-right: 50px;
  width: 180px;

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin: 20px 0;
  }
`;

const ErrorTextSpan = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: var(--contextual-red-color);
`;
