import { NewPasswordForm } from "#features/new-password-form/new-password-form";
import styled from "styled-components"

export const NewPasswordPage: React.FC = () => {
  return (
    <NewPasswordWrapper>
      <NewPasswordForm />
    </NewPasswordWrapper>
  )
}

const NewPasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  width: 500px;
  background-color: var(--background-primary-color);
  margin: auto;

  @media screen and (max-width: 900px) {
    width: 90%;
    padding: 0 0 70px 0;
  }
`;
