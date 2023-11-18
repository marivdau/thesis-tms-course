import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { styled } from 'styled-components';
import Person from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import { Avatar, Tooltip, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { authorizationLogout } from '#features/auth/authorization.slice';
import avatarDefault from '#images/avatar-default.png';

type Anchor = 'right';

export default function TemporaryDrawer() {
  const dispatch = useAppDispatch();

  const token = useAppSelector(
    (state) => state.authorization.token
  );

  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 400 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {token
        ?
        <UserDiv>
          <AvatarDiv>
            <Avatar alt="avatar" src={avatarDefault} sx={{ width: 60, height: 60 }} />
          </AvatarDiv>
          <NameDiv>
            <Typography variant='h5'>Hi, {'Anonomys'}!</Typography>
          </NameDiv>
        </UserDiv>
        :
        <></>
      }
      <ListDiv>
        <List>
          <ListItem key='favourites'>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/favourites">
              <ListItemText primary='favourites' sx={{ textTransform: 'uppercase' }} />
            </ListItemButton>
          </ListItem>
          <ListItem key='cart'>
            <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/cart">
              <ListItemText primary='Cart' sx={{ textTransform: 'uppercase' }} />
            </ListItemButton>
          </ListItem>
          {token
            ?
            <ListItem key='account'>
              <ListItemButton sx={{ textAlign: 'center' }} component={Link} to="/account">
                <ListItemText primary='account' sx={{ textTransform: 'uppercase' }} />
              </ListItemButton>
            </ListItem>
            :
            <></>
          }
        </List>
        <Divider />
      </ListDiv>
      {token
        ?
        <ButtonDiv>
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            component={Link}
            to='/sign-in'
            onClick={() => dispatch(authorizationLogout())}
          >
            Log out
          </Button>
        </ButtonDiv>
        :
        <ButtonDiv>
          <Button
            variant="contained"
            color="primary"
            fullWidth={true}
            component={Link}
            to='/sign-in'>
            Sign In
          </Button>
        </ButtonDiv>
      }
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Tooltip title='Account'>
            <Button onClick={toggleDrawer(anchor, true)}>
              <Person />
            </Button>
          </Tooltip>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px 0;
`;

const AvatarDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const NameDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const ListDiv = styled.div`
  margin: 30px 0;
`;

const ButtonDiv = styled.div`
  display: block;
  width: 330px;
  margin: auto;
`;
