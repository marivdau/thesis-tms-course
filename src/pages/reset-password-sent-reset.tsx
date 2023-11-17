import { Button, Typography } from "@mui/material";
import styled from "styled-components"

export const ResetPasswordSentEmailPage: React.FC = () => {
  return (
    <ResetPasswrodWrapper>
      <TypographyDiv>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>reset password</Typography>
      </TypographyDiv>
      <EmailTextDiv>
        <Typography>You will receive an email example@gmail.com with a link to reset your password!</Typography>
      </EmailTextDiv>
      <ButtonDiv>
        <Button variant="contained" href="/" fullWidth={true}>Go home</Button>
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

const EmailTextDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;
`;

const ButtonDiv = styled.div`
  margin: auto;
  width: 300px;
  padding: 20px 0;
`;
