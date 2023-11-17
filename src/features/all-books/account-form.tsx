import { Button, TextField, Typography } from "@mui/material"
import styled from "styled-components"

export const AccountForm: React.FC = () => {
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
          <TextField fullWidth={true} />
        </NameInfo>
        <EmailInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            Email
          </Typography>
          <TextField fullWidth={true} />
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
          <TextField fullWidth={true} />
        </PasswordInfo>
      </PasswordDiv>
      <PasswordNewDiv>
        <PasswordInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            New password
          </Typography>
          <TextField fullWidth={true} />
        </PasswordInfo>
        <PasswordInfo>
          <Typography variant="subtitle1" sx={{ textTransform: 'uppercase' }}>
            Confirm new password
          </Typography>
          <TextField fullWidth={true} />
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
  margin-bottom: 20px;
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
