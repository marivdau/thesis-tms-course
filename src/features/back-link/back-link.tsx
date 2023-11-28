import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { IconButton, Tooltip } from '@mui/material';

export const BackLink: React.FC = () => (
  <BackLinkWrapper>
    <IconButton component={Link} to="/">
      <Tooltip title="Back to main page">
        <ArrowBack sx={{ color: 'var(--text-primary-color)' }} />
      </Tooltip>
    </IconButton>
  </BackLinkWrapper>
);

const BackLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 10px;
`;
