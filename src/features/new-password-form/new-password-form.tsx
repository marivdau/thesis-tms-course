import { setConfirmedPassword, setPassword } from "#features/sign-up-form/sign-up-form.slice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Button, IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { register } from "#features/auth/registration.slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export const NewPasswordForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [resetPassword, setResetPassword] = useState(false);

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfPassword, setShowNewConfPassword] = useState(false);

  const [errorInputNewPass, setErrorInputNewPass] = useState(false);
  const [enteredNewPassword, setEnteredNewPassword] = useState<string>('');
  const [enteredConfirmNewPassword, setEnteredConfirmNewPassword] = useState<string>('')

  const password = useAppSelector((state) => state.signUpForm.password);
  const name = useAppSelector((state) => state.signUpForm.name);
  const email = useAppSelector((state) => state.signUpForm.email);

  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowNewConfPassword = () => setShowNewConfPassword((show) => !show);

  const errorNewPasswordCheck = () => {
    if (enteredNewPassword !== enteredConfirmNewPassword || enteredNewPassword === '' || enteredConfirmNewPassword === '') {
      setErrorInputNewPass(true);
      console.log('error')
    } else {
      setErrorInputNewPass(false);
    }
  }

  return (
    <NewPassForm onSubmit={(event) => {
      event?.preventDefault();
      if (!errorInputNewPass) {
        setResetPassword(true);
        dispatch(
          register({
            username: name,
            password,
            email,
          })
        )
      }
    }}>
      <TypographyDiv>
        <TypographySpan>new password</TypographySpan>
      </TypographyDiv>
      {resetPassword
        ?
        <>
          <ResetPasswordWrapper>
            <EmailTextDiv>
              <EmailTextPharagraph>Your password was successfully reset!</EmailTextPharagraph>
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
              sx={{ color: 'var(--text-primary-color)' }}
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
          </PasswordInputDiv>
          <PasswordInputDiv>
            <OutlinedInput
              fullWidth={true}
              type={showNewConfPassword ? 'text' : 'password'}
              sx={{ color: 'var(--text-primary-color)' }}
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
          </PasswordInputDiv>

          <ButtonDiv>
            <Button
              variant="contained"
              fullWidth={true}
              type="submit"
              onClick={errorNewPasswordCheck}
            >
              Set new Password</Button>
          </ButtonDiv>
        </>
      }
    </NewPassForm>
  )
}

const NewPassForm = styled.form``;

const TypographyDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;

const TypographySpan = styled.span`
  font-size: 28px;
  font-weight: 500;
  line-height: 30px;
  text-transform: uppercase;
  color: var(--text-primary-color);
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

const EmailTextPharagraph = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: var(--text-primary-second-color);
  text-align: center;
`;

const ErrorTextSpan = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: var(--contextual-red-color);
`;
