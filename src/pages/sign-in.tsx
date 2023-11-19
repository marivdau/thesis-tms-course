import { SignInForm } from "#features/sign-in-form/sign-in-form";
import { ButtonGroupSignInUp } from "#ui/button-group-sign/button-group-sign";
import styled from "styled-components"

export const SignInPage: React.FC = () => {
  return (
    <SignInWrapper>
      <ButtonGroupSignInUp />
      <SignInForm />
    </SignInWrapper>
  )
}

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 500px;
  margin: auto;

  @media screen and (max-width: 900px) {
    padding: 0;
    width: 100%;
    margin: 50px 0;
  }
`;
