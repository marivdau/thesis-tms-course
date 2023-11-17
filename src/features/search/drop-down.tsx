import styled from 'styled-components';
import { SearchedBooks } from './types';
import { Divider, Typography } from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { useState } from 'react';

type DropDownProps = {
  search: SearchedBooks[];
  searchedString: string;
};

export const DropDown: React.FC<DropDownProps> = ({
  search,
  searchedString,
}) => {
  const [dropdown, setDropdown] = useState(true);

  return (
    <DropDownWrapper style={{ display: dropdown ? 'block' : 'none' }}>
      {!!search.length &&
        search.map((element) => (
          <div key={element.isbn13}>
            <DropDownElement>
              <SearchedImage>
                <img src={element.image} alt="#" />
              </SearchedImage>
              <RouteLink
                to={`/preview-book/${element.isbn13}`}
                onClick={() => setDropdown(!dropdown)}
              >
                <Typography>{element.title}</Typography>
              </RouteLink>
            </DropDownElement>
            <Divider />
          </div>
        ))}
      {!search.length && searchedString && <Typography>Sorry, there is no books match your request</Typography>}
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

const DropDownElement = styled.li`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 10px;
  height: 60px;
`;

const SearchedImage = styled.div`
  width: 50px;
  height: 50px;
  background-color: var(--green-color);
  margin: 20px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;
