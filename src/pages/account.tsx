import { AccountForm } from "#features/account/account-form";
import { BackLink } from "#features/back-link/back-link";
import { PageTitle } from "#ui/page-title/page-title";
import styled from "styled-components"

export const Account: React.FC = () => {
  return (
    <AccountPage>
      <PageTitle children="Account" />
      <BackLink />
      <AccountWrapper>
        <AccountForm />
      </AccountWrapper>
    </AccountPage>
  )
}

const AccountPage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary-color); 
  padding: 100px;

  @media screen and (max-width: 1000px) {
    padding: 0 0 40px; 
  }
`;

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    padding: 0;
    align-items: center;
    width: 100%;
  }
`;
