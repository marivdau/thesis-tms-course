import { AccountForm } from "#features/account/account-form";
import { BackLink } from "#features/back-link/back-link";
import { PageTitle } from "#ui/page-title/page-title";
import styled from "styled-components"

export const Account: React.FC = () => {
  return (
    <>
      <PageTitle>
        Account
      </PageTitle>
      <BackLink />
      <AccountWrapper>
        <AccountForm />
      </AccountWrapper>
    </>
  )
}

const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;
