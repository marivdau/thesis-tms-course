import styled from "styled-components";
import Copyright from '@mui/icons-material/Copyright'

export const Footer = () => {
  return (
    <FooterWrapper>
      <DateNameSpan>
        <Copyright />
        Bookstore
      </DateNameSpan>
      <RightsSpan>All right reserved</RightsSpan>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--text-secondary-color);;
  font-size: 16px;
  line-height: 50px;
`;

const DateNameSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary-color);
`;

const RightsSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: var(--text-secondary-color);
`;
