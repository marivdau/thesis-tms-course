import styled from 'styled-components';
import DefaultLogo from '../../images/boosktore-logo.png';
import GrayLogo from '../../images/bookstore-logo-gray.png';
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
  const theme = useAppSelector((state) => state.themeMode.isDarkThemeActive);

  const favouritesAmount: number = favourites.length;
  const cartAmount: number = basket.length;

  return (
    <HeaderWrapper>
      <LogoDiv>
        <Link to={'/'}>
          {theme ? (
            <LogoImg src={GrayLogo} alt="logo-gray" />
          ) : (
            <LogoImg src={DefaultLogo} alt="logo-default" />
          )}
        </Link>
      </LogoDiv>
      <SearchDiv>
        <SearchComponent />
      </SearchDiv>
      <HeaderMenuDiv>
        <IconsDiv>
          <Tooltip title="All books">
            <Button component={Link} to="/all">
              <MenuBookIcon
                sx={{ color: 'var(--header-menu-button-icon-color)' }}
                fontSize="large"
              />
            </Button>
          </Tooltip>
        </IconsDiv>
        <IconsDiv>
          <Tooltip title="Favourites">
            <Button component={Link} to="/favourites">
              <Badge badgeContent={favouritesAmount} color="primary">
                <Favourites
                  sx={{ color: 'var(--header-menu-button-icon-color)' }}
                  fontSize="large"
                />
              </Badge>
            </Button>
          </Tooltip>
        </IconsDiv>
        <IconsDiv>
          <Tooltip title="Cart">
            <Button component={Link} to="/cart">
              <Badge badgeContent={cartAmount} color="primary">
                <Cart
                  sx={{ color: 'var(--header-menu-button-icon-color)' }}
                  fontSize="large"
                />
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
  );
};

const HeaderWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid var(--text-secondary-color);
  background-color: var(--background-primary-color);

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 200px;
  }
`;

const LogoDiv = styled.div`
  width: 200px;
  height: 70px;
  margin: 0 50px;

  @media screen and (max-width: 1200px) {
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

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 20px;
  }
`;

const HeaderMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;

  @media screen and (max-width: 1200px) {
    margin: 20px 0;
  }
`;

const IconsDiv = styled.div`
  margin: 0 50px;

  @media screen and (max-width: 1200px) {
    margin: 0 5px;
  }
`;
