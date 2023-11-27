import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { SearchBooksDropDown } from './search-books-drop-down';
import styled from 'styled-components';
import Cancel from '@mui/icons-material/Cancel';
import Search from '@mui/icons-material/Search';
import { InputAdornment, OutlinedInput } from '@mui/material';
import { resetBooks, searchBooks } from './search.slice';

type Props = {};

export const SearchComponent: React.FC<Props> = () => {
  const [searchedText, setSearchedText] = useState<string>('');

  const dispatch = useAppDispatch();
  const { searchedBooks } = useAppSelector(({ search }) => search);
  const page = useAppSelector((state) => state.search.searchedBooksPage);

  return (
    <RelativeContainer>
      <OutlinedInput
        placeholder="Search"
        fullWidth
        sx={{ color: 'var(--text-primary-color)' }}
        color="primary"
        value={searchedText}
        onChange={(event) => {
          setSearchedText(event.currentTarget.value);
          if (event.currentTarget.value === '') {
            return dispatch(resetBooks(''));
          }
          dispatch(
            searchBooks({ search: event.currentTarget.value, page: page })
          );
        }}
        endAdornment={
          <InputAdornment position="end">
            <Cancel
              titleAccess="Clear"
              sx={{
                display: searchedText ? 'block' : 'none',
                color: 'var(--text-primary-color)',
              }}
              onClick={() => {
                setSearchedText('');
                dispatch(resetBooks(''));
              }}
            />
            <Search
              titleAccess="Search"
              sx={{
                display: !searchedText ? 'block' : 'none',
                color: 'var(--text-primary-color)',
              }}
            />
          </InputAdornment>
        }
      />
      {
        <SearchBooksDropDown
          books={searchedBooks.books}
          keyword={searchedText}
        />
      }
    </RelativeContainer>
  );
};

const RelativeContainer = styled.div`
  position: relative;
  width: 90%;
  color: var(--text-primary-color);

  @media screen and (max-width: 1200px) {
    width: 90%;
    margin: auto;
  }
`;
