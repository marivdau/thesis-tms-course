import { Button, TextField, Typography } from "@mui/material"
import styled from "styled-components"

export const NewPassword: React.FC = () => {
  return (
    <NewPasswordWrapper>
      <TypographyDiv>  
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>new password</Typography>
      </TypographyDiv>

      <PasswordInputDiv>
        <TextField label='Your password' variant="outlined" fullWidth={true} />
      </PasswordInputDiv>
      <PasswordInputDiv>
        <TextField label='Confirm your password' variant="outlined" fullWidth={true} />
      </PasswordInputDiv>

      <ButtonDiv>
        <Button variant="contained" fullWidth={true} href="/sign-in">Set Password</Button>
      </ButtonDiv>
    </NewPasswordWrapper>
  )
}

const NewPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 500px;
  margin: auto;
`;

const TypographyDiv = styled.div`
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
