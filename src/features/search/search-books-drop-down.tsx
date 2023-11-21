import styled from 'styled-components';
import { Books } from './types';
import { ListItem, ListItemButton, Typography } from '@mui/material';
import { Link, Link as RouteLink } from 'react-router-dom';
import { useState } from 'react';

type DropDownProps = {
  books: Books;
  open: boolean;
};

export const SearchBooksDropDown: React.FC<DropDownProps> = ({
  books,
  open,
}) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <DropDownWrapper style={{ display: open ? 'block' : 'none' }}>
      {!!books &&
        books?.map((element, index) => (
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

      {books?.length > 0 &&
        <ListItem
          component={Link}
          to={'/search-result'}
          onClick={() => setDropdown(!dropdown)}
        >
          View all results
        </ListItem>}

      {!books?.length && <ListItem>Sorry, there is no books match your request</ListItem>}
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
