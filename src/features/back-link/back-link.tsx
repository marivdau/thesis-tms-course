import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBack from "@mui/icons-material/ArrowBack";
import { Tooltip } from '@mui/material';

export const BackLink: React.FC = () => (
  <BackLinkWrapper>
    <Link to="/">
      <Tooltip title='Back to main page'>
        <ArrowBack />
      </Tooltip>
    </Link>
  </BackLinkWrapper>
);

const BackLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
`;
