import styled from 'styled-components';
import logo from '../../images/boosktore-logo.png';
import TextField from '@mui/material/TextField';
import Favourites from '@mui/icons-material/Favorite';
import Cart from '@mui/icons-material/ShoppingCart';
import Person from '@mui/icons-material/Person';

export const Header = () => {
  return (
    <HeaderWrapper>
      <LogoDiv>
        <LogoImg src={logo} alt="logo" />
      </LogoDiv>
      <SearchDiv>
        <TextField id="outlined-basic" label="Search" variant="outlined" />
      </SearchDiv>
      <HeaderMenuDiv>
        <IconsDiv>
          <Favourites />
        </IconsDiv>
        <IconsDiv>
          <Cart />
        </IconsDiv>
        <IconsDiv>
          <Person />
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

const SearchDiv = styled.div``;

const HeaderMenuDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const IconsDiv = styled.div`
  margin-right: 30px;
`;
