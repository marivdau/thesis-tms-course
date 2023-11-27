import { AccountForm } from "#features/account/account-form";
import { BackLink } from "#features/back-link/back-link";
import { PageTitle } from "#ui/page-title/page-title";
import styled from "styled-components"
import { useAppSelector } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const AccountPage: React.FC = () => {
  const token = useAppSelector(state => state.authorization.token);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }
  }, [token, navigate])

  return (
    <AccountPageWrapper>
      <PageTitle children="Account" />
      <BackLink />
      <AccountDiv>
        <AccountForm />
      </AccountDiv>
    </AccountPageWrapper>
  )
}

const AccountPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary-color); 
  margin: auto;

  @media screen and (max-width: 1000px) {
    padding: 0 0 40px; 
  }
`;

const AccountDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    padding: 0;
    align-items: center;
    width: 100%;
  }
`;
