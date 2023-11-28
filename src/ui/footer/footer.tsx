import styled from 'styled-components';
import Copyright from '@mui/icons-material/Copyright';

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <DateNameSpan>
        <Copyright />
        {new Date().getFullYear()} Bookstore
      </DateNameSpan>
      <RightsSpan>All right reserved</RightsSpan>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--text-secondary-color);
  background-color: var(--background-primary-color);

  @media screen and (max-width: 700px) {
    flex-direction: column;
    line-height: 30px;
  }
`;

const DateNameSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 40px;
  color: var(--text-secondary-color);
`;

const RightsSpan = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  line-height: 40px;
  color: var(--text-secondary-color);

  @media screen and (max-width: 700px) {
    margin-bottom: 10px;
  }
`;
