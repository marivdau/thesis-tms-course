import styled from 'styled-components';
import logo from '../../images/boosktore-logo.png';
import Favourites from '@mui/icons-material/Favorite';
import Cart from '@mui/icons-material/ShoppingCart';
import { Button, Tooltip } from '@mui/material';
import TemporaryDrawer from '#ui/menu-drawer/menu-drawer';
import { Link } from 'react-router-dom';
import { SearchComponent } from '#features/search/search';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoDiv>
        <Link to={'/'}>
          <LogoImg src={logo} alt="logo" />
        </Link>
      </LogoDiv>
      <SearchDiv>
        <SearchComponent />        
      </SearchDiv>
      <HeaderMenuDiv>
        <IconsDiv>
          <Tooltip title='Favourites'>
            <Button component={Link} to="/favourites">
              <Favourites />
            </Button>
          </Tooltip>          
        </IconsDiv>
        <IconsDiv>
          <Tooltip title='Cart'>
            <Button component={Link} to="/cart">
              <Cart />        
            </Button>
          </Tooltip>
        </IconsDiv>
        <IconsDiv>  
          <TemporaryDrawer/>      
        </IconsDiv>
      </HeaderMenuDiv>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid var(--text-secondary-color);;
`;

const LogoDiv = styled.div`
  width: 200px;
  height: 70px;
`;

const LogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const SearchDiv = styled.div`
  width: 600px;
`;

const HeaderMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const IconsDiv = styled.div`
  margin-right: 20px;
`;
