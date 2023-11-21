import styled from 'styled-components';
import { SearchResponce } from './types';
import { ListItem, ListItemButton, Typography } from '@mui/material';
import { Link, Link as RouteLink } from 'react-router-dom';
import { useState } from 'react';

type DropDownProps = {
  search: SearchResponce;
  searchedString: string;
};

export const DropDown: React.FC<DropDownProps> = ({
  search,
  searchedString,
}) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <DropDownWrapper style={{ display: dropdown ? 'block' : 'none' }}>
      {!!search &&
        search.books?.map((element, index) => (
          <ListItem component="div" disablePadding key={index}>
            <ListItemButton>
              <SearchedImage>
                <img src={element.image} alt="#" />
              </SearchedImage>
              <RouteLink
                to={`/preview-book/${element.isbn13}`}
                onClick={() => setDropdown(!dropdown)}
              >
                <Typography>{element.title}</Typography>
              </RouteLink>
            </ListItemButton>
          </ListItem>
        ))
      }

      {searchedString &&
        <ListItem
          component={Link}
          to={'/search-result'}
          onClick={() => setDropdown(!dropdown)}
        >
          View all results
        </ListItem>}

      {!search && searchedString && <ListItem>Sorry, there is no books match your request</ListItem>}
    </DropDownWrapper>
  );
};

const DropDownWrapper = styled.ul`
  position: absolute;
  width: 100%;
  padding: 0;
  margin: 0;
  top: 60px;
  left: 0;
  z-index: 40;
  background-color: var(--purple-color);
  border-radius: 5px;
`;

const SearchedImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--green-color);
  margin-right: 20px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
