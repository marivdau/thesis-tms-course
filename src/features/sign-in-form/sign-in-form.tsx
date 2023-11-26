import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, InputAdornment, OutlinedInput } from "@mui/material"
import { Fragment, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { authorization, authorizationFailure } from "#features/auth/authorization.slice";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const SignInForm: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const dispatch = useAppDispatch();

  const emailOnSignUp = useAppSelector(state => state.signUpForm.email);
  const passwordOnSignUp = useAppSelector(state => state.signUpForm.password);

  const token = useAppSelector(
    (state) => state.authorization.token
  );

  const validate = (enteredEmail: string, enteredPassword: string) => {
    emailOnSignUp === enteredEmail && passwordOnSignUp === enteredPassword
      ? dispatch(authorization({ email, password }))
      : dispatch(authorizationFailure())
  };

  if (token) {
    return <Navigate to={'/'} />;
  }

  return (
    <SignInFormWrapper onSubmit={(event) => { event.preventDefault(); validate(email, password) }}>
      <EmailInputDiv>
        <OutlinedInput
          required
          type='email'
          placeholder="Your email *"
          sx={{ color: 'var(--text-primary-color)' }}
          fullWidth={true}
          value={email}
          onChange={({ currentTarget }) => setEmail(currentTarget.value)}
        />
      </EmailInputDiv>
      <PasswordInputDiv>
        <OutlinedInput
          required
          sx={{ color: 'var(--text-primary-color)' }}
          placeholder="Your password *"
          fullWidth={true}
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={({ currentTarget }) => setPassword(currentTarget.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                sx={{ color: 'var(--icon-main-color)' }}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <Link to={'/reset-password'}>Forgot password?</Link>
      </PasswordInputDiv>

      <ButtonDiv>
        <Button
          type="submit"
          variant="contained"
          fullWidth={true}
          onClick={!token ? handleClickOpen : handleClose}
        >
          Sign In
        </Button>
      </ButtonDiv>

      <Fragment>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Login fail"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Please check you credentials or proceed to sign up
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
            <Button onClick={handleClose} component={Link} to={'/sign-up'} autoFocus>
              Proceed to sign up
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    </SignInFormWrapper>
  )
}

const SignInFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  background-color: var(--background-primary-color);
  margin: auto;

  @media screen and (max-width: 900px) {
    margin: auto;
    width: 80%;
    align-items: center;
  }
`;

const EmailInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
  }
`;

const PasswordInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;

  @media screen and (max-width: 900px) {
    margin-bottom: 10px;
    padding: 0;
    width: 100%;
  }
`;

const ButtonDiv = styled.div`
  margin: auto;
  width: 300px;
  padding: 20px 0;

  @media screen and (max-width: 900px) {
    margin-bottom: 50px;
    padding: 0;
    width: 100%;
  }
`;
