import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import styled from "styled-components"
import { useAppDispatch } from "../../hooks";
import { forgotPassword } from "#features/auth/reset-password.slice";
import { Link } from "react-router-dom";

export const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sentEmail, setSentEmail] = useState(false);
  const dispatch = useAppDispatch();

  return (
    <ResetPasswordFormWrapper>
      <TypographyDiv>
        <Typography
          variant="h5"
          sx={{ textTransform: 'uppercase' }}
        >
          reset password
        </Typography>
      </TypographyDiv>
      {sentEmail
        ?
        <ResetPasswordWrapper>
          <EmailTextDiv>
            <Typography>You will receive an email on the address <Typography variant="overline">{email}</Typography>  with a link to reset your password!</Typography>
          </EmailTextDiv>
          <ButtonDiv>
            <Button
              variant="contained"
              component={Link}
              to={'/'}
              fullWidth={true}
            >
              Go home
            </Button>
          </ButtonDiv>
        </ResetPasswordWrapper>
        :
        <>
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
              onClick={() => {
                dispatch(forgotPassword({ email }));
                setSentEmail(true)
              }}
            >
              Reset
            </Button>
          </ButtonDiv>
        </>}
    </ResetPasswordFormWrapper>
  )
}

const ResetPasswordFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
`;

const ResetPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
`;

const EmailTextDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;
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
