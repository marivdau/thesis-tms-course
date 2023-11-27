import { SignInForm } from '#features/sign-in-form/sign-in-form';
import { ButtonGroupSignInUp } from '#ui/button-group-sign/button-group-sign';
import styled from 'styled-components';

export const SignInPage: React.FC = () => {
  return (
    <SignInWrapper>
      <ButtonGroupSignInUp />
      <SignInForm />
    </SignInWrapper>
  );
};

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
  background-color: var(--background-primary-color);

  @media screen and (max-width: 900px) {
    padding: 10px 0 100px 0;
    width: 100%;
  }
`;
