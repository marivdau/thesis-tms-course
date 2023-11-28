import { Link } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from 'styled-components';

export const Socials: React.FC = () => {
  return (
    <SocialsWrapper>
      <SocialLinkDiv>
        <Link href="https://www.facebook.com">
          <FacebookIcon />
        </Link>
      </SocialLinkDiv>
      <SocialLinkDiv>
        <Link href='https://twitter.com/i/flow/login?input_flow_data=%7B"requested_variant"%3A"eyJsYW5nIjoiZW4ifQ%3D%3D"%7D'>
          <TwitterIcon />
        </Link>
      </SocialLinkDiv>
      <SocialLinkDiv></SocialLinkDiv>
    </SocialsWrapper>
  );
};

const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding: 10px;
  margin-bottom: 10px;
`;

const SocialLinkDiv = styled.div`
  margin-right: 20px;
`;
