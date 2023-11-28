import { Button, OutlinedInput, Typography } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { forgotPassword } from '#features/auth/reset-password.slice';
import { Link } from 'react-router-dom';

export const ResetPasswordForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [sentEmail, setSentEmail] = useState(false);
  const [errorInput, setErrorInput] = useState(false);

  const registeredEmail = useAppSelector((state) => state.signUpForm.email);
  const dispatch = useAppDispatch();

  const errorEmailCheck = () => {
    if (email !== registeredEmail) {
      setErrorInput(true);
    } else {
      setErrorInput(false);
    }
  };

  return (
    <ResetPasswordFormWrapper
      onSubmit={(event) => {
        event?.preventDefault();
        if (email === registeredEmail) {
          dispatch(forgotPassword({ email }));
          setSentEmail(true);
        }
      }}
    >
      <TypographyDiv>
        <TypographySpan>reset password</TypographySpan>
      </TypographyDiv>
      {sentEmail ? (
        <ResetPasswordWrapper>
          <EmailTextDiv>
            <EmailTextPharagraph>
              You will receive an email on the address{' '}
              <EmailSpan>{email}</EmailSpan> with a link to reset your password!
            </EmailTextPharagraph>
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
      ) : (
        <>
          <EmailInputDiv>
            <OutlinedInput
              required
              type="email"
              placeholder="Your email"
              sx={{ color: 'var(--text-primary-color)' }}
              fullWidth={true}
              value={email}
              onChange={({ currentTarget }) => setEmail(currentTarget.value)}
              error={errorInput}
            />
            {errorInput ? (
              <>
                <ErrorTextSpan>Not valid email</ErrorTextSpan>
                <Typography>
                  Check your email or proceed to{' '}
                  <Link to={'/sign-up'}>Sign up</Link>
                </Typography>
              </>
            ) : (
              <></>
            )}
          </EmailInputDiv>
          <ButtonDiv>
            <Button
              variant="contained"
              fullWidth={true}
              type="submit"
              onClick={errorEmailCheck}
            >
              Reset
            </Button>
          </ButtonDiv>
        </>
      )}
    </ResetPasswordFormWrapper>
  );
};

const ResetPasswordFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: var(--background-primary-color);
  margin: auto;

  @media screen and (max-width: 900px) {
    width: 90%;
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

const ErrorTextSpan = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 400;
  color: var(--contextual-red-color);
`;
