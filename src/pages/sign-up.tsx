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
  padding: 100px;
  width: 500px;
  margin: auto;
`;
