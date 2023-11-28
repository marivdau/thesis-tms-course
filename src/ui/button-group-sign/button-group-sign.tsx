import { Button, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonGroupSignInUp: React.FC = () => {
  return (
    <ButtonsGroupDiv>
      <ButtonGroup fullWidth={true}>
        <Button
          component={Link}
          to="/sign-in"
          variant={
            window.location.pathname === '/sign-in' ? 'contained' : 'outlined'
          }
        >
          Sign-In
        </Button>
        <Button
          component={Link}
          to="/sign-up"
          variant={
            window.location.pathname === '/sign-up' ? 'contained' : 'outlined'
          }
        >
          Sign-Up
        </Button>
      </ButtonGroup>
    </ButtonsGroupDiv>
  );
};

const ButtonsGroupDiv = styled.div`
  width: 300px;
  margin: auto;
  padding: 10px;

  @media screen and (max-width: 900px) {
    padding: 0 0 20px 0;
    width: 90%;
    margin: auto;
  }
`;
