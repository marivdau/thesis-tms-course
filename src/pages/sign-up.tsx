import { SignUpForm } from "#features/sign-up-form/sign-up-form"
import { ButtonGroupSignInUp } from "#ui/button-group-sign/button-group-sign"
import styled from "styled-components"

export const SignUpPage: React.FC = () => {
  return (
    <SignInWrapper>
      <ButtonGroupSignInUp />
      <SignUpForm />
    </SignInWrapper>
  )
}

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0 100px;
  width: 500px;
  margin: auto;
  background-color: var(--background-primary-color);

  @media screen and (max-width: 900px) {
    padding: 10px 0 100px 0;
    width: 100%;
  }
`;
