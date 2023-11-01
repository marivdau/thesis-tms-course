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

type Anchor = 'right';

export default function TemporaryDrawer() {
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
      <ListDiv>
        <List>
          {['favourites', 'Cart',].map((text) => (
            <ListItem key={text}>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={text} sx={{ textTransform: 'uppercase' }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </ListDiv>
      <ButtonDiv>
        <Button variant="contained" color="primary" fullWidth={true}>Sign-In</Button>
      </ButtonDiv>
    </Box>
  );

  return (
    <div>
      {(['right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <Person />
          </Button>
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

const ListDiv = styled.div`
  margin: 100px 0;
`;

const ButtonDiv = styled.div`
  display: block;
  width: 330px;
  margin: auto;
`;
