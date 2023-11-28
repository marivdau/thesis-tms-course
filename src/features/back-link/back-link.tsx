import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { IconButton, Tooltip } from '@mui/material';

export const BackLink: React.FC = () => {
  const navigate = useNavigate();

  return (
    <BackLinkWrapper>
      <IconButton onClick={() => navigate(-1)}>
        <Tooltip title="Go to the previous page">
          <ArrowBack sx={{ color: 'var(--text-primary-color)' }} />
        </Tooltip>
      </IconButton>
    </BackLinkWrapper>
  )
};

const BackLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  padding-left: 10px;
`;
