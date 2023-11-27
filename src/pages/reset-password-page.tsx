import { ResetPasswordForm } from "#features/reset-password-form/reset-password-form";
import styled from "styled-components"

export const ResetPasswordPage: React.FC = () => {
  return (
    <ResetPasswrodWrapper>
      <ResetPasswordForm />
    </ResetPasswrodWrapper>
  )
}

const ResetPasswrodWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 500px;
  background-color: var(--background-primary-color);
  margin: auto;

  @media screen and (max-width: 900px) {
    padding: 0;
    width: 100%;
  }
`;
