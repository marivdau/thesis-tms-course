import { Button, TextField, Typography } from "@mui/material";
import styled from "styled-components"

export const ResetPasswordMainPage: React.FC = () => {
  return (
    <ResetPasswrodWrapper>
      <TypographyDiv>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>reset password</Typography>
      </TypographyDiv>
      <EmailInputDiv>
        <TextField label='Your email' variant="outlined" fullWidth={true} />
      </EmailInputDiv>
      <ButtonDiv>
        <Button variant="contained" fullWidth={true} href="/reset-password-email-sent">Reset</Button>
      </ButtonDiv>
    </ResetPasswrodWrapper>
  )
}

const ResetPasswrodWrapper = styled.div`
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

const EmailInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;
`;

const ButtonDiv = styled.div`
  margin: auto;
  width: 300px;
  padding: 20px 0;
`;
