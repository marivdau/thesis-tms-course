import { Button, TextField } from "@mui/material"
import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setConfirmedPassword, setEmail, setName, setPassword } from "./sign-up-form.slice";
import { register } from "#features/auth/registration.slice";

export const SignUpForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector((state) => state.signUpForm.name);
  const email = useAppSelector((state) => state.signUpForm.email);
  const password = useAppSelector((state) => state.signUpForm.password);
  const confirmedPassword = useAppSelector(
    (state) => state.signUpForm.confirmedPassword
  );
  return (
    <SignInFormWrapper>
      <NameInputDiv>
        <TextField
          label='Your name *'
          variant="outlined"
          fullWidth={true}
          value={name}
          onChange={({ currentTarget }) => dispatch(setName(currentTarget.value))}
        />
      </NameInputDiv>
      <EmailInputDiv>
        <TextField
          label='Your email *'
          variant="outlined"
          fullWidth={true}
          value={email}
          onChange={({ currentTarget }) =>
            dispatch(setEmail(currentTarget.value))
          }
        />
      </EmailInputDiv>
      <PasswordInputDiv>
        <TextField
          label='Your password *'
          variant="outlined"
          fullWidth={true}
          value={password}
          onChange={({ currentTarget }) =>
            dispatch(setPassword(currentTarget.value))
          }
        />
      </PasswordInputDiv>
      <PasswordInputDiv>
        <TextField
          label='Confirm password *'
          variant="outlined"
          fullWidth={true}
          value={confirmedPassword}
          onChange={({ currentTarget }) =>
            dispatch(setConfirmedPassword(currentTarget.value))
          }
        />
      </PasswordInputDiv>

      <ButtonDiv>
        <Button
          variant="contained"
          fullWidth={true}
          onClick={() =>
            dispatch(
              register({
                username: name,
                password,
                email,
              })
            )
          }
        >
          Sign Up
        </Button>
      </ButtonDiv>
    </SignInFormWrapper>
  )
}

const SignInFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
`;

const NameInputDiv = styled.div`
  margin: auto;
  padding: 20px 0;
  width: 300px;
`;

const EmailInputDiv = styled.div`
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
