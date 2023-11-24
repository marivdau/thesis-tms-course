import { Button, OutlinedInput, TextField, Typography } from "@mui/material";
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
        <TypographySpan>
          reset password
        </TypographySpan>
      </TypographyDiv>
      {sentEmail
        ?
        <ResetPasswordWrapper>
          <EmailTextDiv>
            <EmailTextPharagraph>You will receive an email on the address <EmailSpan>{email}</EmailSpan>  with a link to reset your password!</EmailTextPharagraph>
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
            <OutlinedInput
              type="email"
              placeholder="Your email"
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
  background-color: var(--background-primary-color);
  margin: auto;

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
`;

const EmailSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
  line-height: 20px;
  text-transform: uppercase;
  color: var(--text-primary-color);
`;

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

const EmailInputDiv = styled.div`
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
