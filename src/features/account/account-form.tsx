import { Button, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { setConfirmedPassword, setEmail, setName, setPassword } from "#features/sign-up-form/sign-up-form.slice";
import { register } from "#features/auth/registration.slice";

export const AccountForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewConfPassword, setShowNewConfPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
  const handleClickShowNewConfPassword = () => setShowNewConfPassword((show) => !show);

  const name = useAppSelector((state) => state.signUpForm.name);
  const email = useAppSelector((state) => state.signUpForm.email);
  const password = useAppSelector((state) => state.signUpForm.password);
  const [oldPassword, setOldPassword] = useState('');

  return (
    <AccountFormWrapper>
      <TypographySectionSpan >
        Profile
      </TypographySectionSpan>
      <UserInfo>
        <NameInfo>
          <TypographySpan>
            Name
          </TypographySpan>
          <OutlinedInput
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
          />
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
            onChange={({ currentTarget }) => dispatch(setPassword(currentTarget.value))}
          />
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
            onChange={({ currentTarget }) => dispatch(setConfirmedPassword(currentTarget.value))}
          />
        </PasswordInfo>
      </PasswordNewDiv>
      <ButtonsDiv>
        <ButtonSaveDiv>
          <Button
            variant="contained"
            fullWidth={true}
            onClick={() =>
              dispatch(
                register({
                  username: name,
                  password,
                  email,
                })
              )
            }
          >
            Save changes
          </Button>
        </ButtonSaveDiv>
      </ButtonsDiv>
    </AccountFormWrapper>
  )
}

const AccountFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary-color);

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
