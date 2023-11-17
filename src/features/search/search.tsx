import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { reset, search } from './search.slice';
import { DropDown } from "./drop-down";
import styled from "styled-components";
import Cancel from '@mui/icons-material/Cancel';
import Search from '@mui/icons-material/Search';
import { InputAdornment, TextField, Tooltip } from "@mui/material";

type Props = {};

export const SearchComponent: React.FC<Props> = () => {
  const [searchedText, setSearchedText] = useState<string>('');

  const dispatch = useAppDispatch();
  const { searchedBooks } = useAppSelector(({ search }) => search);

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
            return dispatch(reset());
          }
          dispatch(search(event.currentTarget.value));
        }}
        InputProps={
          {
            endAdornment: <InputAdornment position="end">
              <Tooltip title='Clear'>
                <Cancel
                  onClick={() => {
                    setSearchedText('');
                    dispatch(reset());
                  }}
                />
              </Tooltip>
            </InputAdornment>
          }
        }
      />
      {
        <DropDown
          search={searchedBooks.books}
          searchedString={searchedText}
        ></DropDown>
      }
    </RelativeContainer>
  );
};

const RelativeContainer = styled.div`
  position: relative;
  width: 90%;
`;
