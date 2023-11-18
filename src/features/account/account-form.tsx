import { Button, IconButton, InputAdornment, OutlinedInput, TextField, Typography } from "@mui/material"
import styled from "styled-components"
import { useAppSelector } from "../../hooks"
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const AccountForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const name = useAppSelector((state) => state.registration.info.username);
  const email = useAppSelector((state) => state.registration.info.email);

  return (
    <AccountFormWrapper>
      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
        Profile
      </Typography>
      <UserInfo>
        <NameInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            Name
          </Typography>
          <TextField fullWidth={true} value={name || ''} />
        </NameInfo>
        <EmailInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            Email
          </Typography>
          <TextField fullWidth={true} value={email} />
        </EmailInfo>
      </UserInfo>

      <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
        Password
      </Typography>
      <PasswordDiv>
        <PasswordInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            Password
          </Typography>
          <OutlinedInput
            fullWidth={true}
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
        </PasswordInfo>
      </PasswordDiv>
      <PasswordNewDiv>
        <PasswordInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            New password
          </Typography>
          <OutlinedInput
            fullWidth={true}
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
        </PasswordInfo>
        <PasswordInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            Confirm new password
          </Typography>
          <OutlinedInput
            fullWidth={true}
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
        </PasswordInfo>
      </PasswordNewDiv>
      <ButtonsDiv>
        <ButtonSaveDiv>
          <Button variant="contained" fullWidth={true}>
            Save changes
          </Button>
        </ButtonSaveDiv>
        <ButtonCancelDiv>
          <Button variant="outlined" fullWidth={true}>
            Cancel
          </Button>
        </ButtonCancelDiv>
      </ButtonsDiv>
    </AccountFormWrapper>
  )
}

const AccountFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const NameInfo = styled.div`
  margin-right: 30px;
  width: 400px;
`;

const EmailInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 400px;
`;

const PasswordDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
`;

const PasswordInfo = styled.div`
  width: 400px;
`;

const PasswordNewDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonSaveDiv = styled.div`
  margin-right: 50px;
  width: 180px;
`;

const ButtonCancelDiv = styled.div`
  width: 180px;
`;
