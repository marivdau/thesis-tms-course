import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SearchBooksDropDown } from "./search-books-drop-down";
import styled from "styled-components";
import Cancel from '@mui/icons-material/Cancel';
import Search from '@mui/icons-material/Search';
import { InputAdornment, TextField } from "@mui/material";
import { resetBooks, searchBooks } from "./search.slice";

type Props = {};

export const SearchComponent: React.FC<Props> = () => {
  const [searchedText, setSearchedText] = useState<string>('');

  const dispatch = useAppDispatch();
  const { searchedBooks } = useAppSelector(({ search }) => search);
  const page = useAppSelector(state => state.search.searchedBooksPage);

  return (
    <RelativeContainer>
      <TextField
        variant="outlined"
        placeholder="Search"
        fullWidth
        color="primary"
        value={searchedText}
        onChange={(event) => {
          setSearchedText(event.currentTarget.value);
          if (event.currentTarget.value === '') {
            return dispatch(resetBooks(''));
          }
          dispatch(searchBooks({ search: event.currentTarget.value, page: page }));
        }}
        InputProps={
          {
            endAdornment: <InputAdornment position="end">
              <Cancel
                titleAccess="Clear"
                sx={{ display: searchedText ? 'block' : 'none' }}
                onClick={() => {
                  setSearchedText('');
                  dispatch(resetBooks(''));
                }}
              />
              <Search
                titleAccess="Search"
                sx={{ display: !searchedText ? 'block' : 'none' }}
              />
            </InputAdornment>
          }
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

  @media screen and (max-width: 900px) {
    width: 90%;
    margin: auto;
  }
`;
