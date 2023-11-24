import styled from 'styled-components';
import logo from '../../images/boosktore-logo.png';
import Favourites from '@mui/icons-material/Favorite';
import Cart from '@mui/icons-material/ShoppingCart';
import { Badge, Button, Tooltip } from '@mui/material';
import TemporaryDrawer from '#ui/menu-drawer/menu-drawer';
import { Link } from 'react-router-dom';
import { SearchComponent } from '#features/search/search';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useAppSelector } from '../../hooks';
import { ThemeModeSwitcher } from '#features/theme-mode-switcher/theme-mode-switcher';

export const Header = () => {
  const { favourites } = useAppSelector(({ favourites }) => favourites);
  const { basket } = useAppSelector(({ order }) => order);

  const favouritesAmount: number = favourites.length;
  const cartAmount: number = basket.length;

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
          <Tooltip title='All books'>
            <Button component={Link} to="/all">
              <MenuBookIcon />
            </Button>
          </Tooltip>
        </IconsDiv>
        <IconsDiv>
          <Tooltip title='Favourites'>
            <Button component={Link} to="/favourites">
              <Badge badgeContent={favouritesAmount} color="primary">
                <Favourites />
              </Badge>
            </Button>
          </Tooltip>
        </IconsDiv>
        <IconsDiv>
          <Tooltip title='Cart'>
            <Button component={Link} to="/cart">
              <Badge badgeContent={cartAmount} color="primary">
                <Cart />
              </Badge>
            </Button>
          </Tooltip>
        </IconsDiv>
        <IconsDiv>
          <TemporaryDrawer />
        </IconsDiv>
        <ThemeModeSwitcher />
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
  border-bottom: 1px solid var(--text-secondary-color);
  background-color: var(--background-primary-color);

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
  }

`;

const LogoDiv = styled.div`
  width: 200px;
  height: 70px;
  margin-right: 50px;

  @media screen and (max-width: 800px) {
    margin: 10px 0;
  }
`;

const LogoImg = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const SearchDiv = styled.div`
  width: 600px;

  @media screen and (max-width: 800px) {
    width: 100%;
    margin: 0 20px;
  }
`;

const HeaderMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 800px) {
    margin: 20px 0;
  }
`;

const IconsDiv = styled.div`
  margin-right: 30px;

  @media screen and (max-width: 800px) {
    margin: 0 5px;
  }
`;
