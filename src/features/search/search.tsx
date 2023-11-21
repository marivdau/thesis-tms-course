import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { SearchBooksDropDown } from "./search-books-drop-down";
import styled from "styled-components";
import Cancel from '@mui/icons-material/Cancel';
import Search from '@mui/icons-material/Search';
import { InputAdornment, TextField, Tooltip } from "@mui/material";
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
        label="Search"
        variant="outlined"
        fullWidth={true}
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
              <Tooltip title='Clear'>
                <Cancel
                  sx={{ display: searchedText ? 'block' : 'none' }}
                  onClick={() => {
                    setSearchedText('');
                    dispatch(resetBooks(''));
                  }}
                />
              </Tooltip>
              <Search sx={{ display: !searchedText ? 'block' : 'none' }} />
            </InputAdornment>
          }
        }
      />
      {
        <SearchBooksDropDown
          books={searchedBooks}
          open={!!searchedText}
        />
      }
    </RelativeContainer>
  );
};

const RelativeContainer = styled.div`
  position: relative;
  width: 90%;

  @media screen and (max-width: 900px) {
    width: 100%;
  }
`;
