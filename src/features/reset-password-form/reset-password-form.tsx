import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components"
import { useAppDispatch } from "../../hooks";
import { forgotPassword } from "#features/auth/forgot-password.slice";

export const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const dispatch = useAppDispatch();

  return (
    <ResetPasswrodFormWrapper>
      <TypographyDiv>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>reset password</Typography>
      </TypographyDiv>
      <EmailInputDiv>
        <TextField
          label='Your email'
          variant="outlined"
          fullWidth={true}
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        />
      </EmailInputDiv>
      <ButtonDiv>
        <Button
          variant="contained"
          fullWidth={true}
          href="/reset-password-email-sent"
          onClick={() => dispatch(forgotPassword({ email }))}
        >
          Reset
        </Button>
      </ButtonDiv>
    </ResetPasswrodFormWrapper>
  )
}

const ResetPasswrodFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
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
