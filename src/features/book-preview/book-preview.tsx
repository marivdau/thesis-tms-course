import { getBookPreview } from '#features/book-preview/book-preview.slice';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Rating } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { addItem, deleteItem } from '#features/order/order.slice';
import Bookmark from '@mui/icons-material/Bookmark';
import { markItem, unMarkItem } from '#features/bookmark/bookmark.slice';
import { useAppDispatch, useAppSelector } from '../../hooks';

export const BookPreview: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isMarked, setIsMarked] = useState(false);

  const { bookIsbn } = useParams();
  const dispatch = useAppDispatch();
  const { bookPreview } = useAppSelector(({ bookPreview }) => bookPreview);
  useEffect(() => {
    if (bookIsbn) {
      dispatch(getBookPreview(+bookIsbn));
    }
  }, [dispatch, bookIsbn]);

  const [value, setValue] = useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const token = useAppSelector((state) => state.authorization.token);
  const navigate = useNavigate();
  const navigateToLogIn = () => {
    navigate('/sign-in');
  };

  return (
    <>
      <BookInfoDivFirstLine>
        <BookImageDiv>
          <BookmarkDiv>
            <Button
              variant={isMarked ? 'contained' : 'text'}
              onClick={() => {
                if (token) {
                  setIsMarked(!isMarked);
                  if (!isMarked) {
                    dispatch(markItem(bookPreview));
                  } else {
                    dispatch(unMarkItem(bookPreview));
                  }
                } else {
                  navigateToLogIn();
                }
              }}
            >
              <Bookmark />
            </Button>
          </BookmarkDiv>
          <BookImage src={bookPreview.image} />
        </BookImageDiv>
        <BookDetailsDiv>
          <PriceRatingDiv>
            {bookPreview.price}
            <Rating
              name="read-only"
              value={Number(bookPreview.rating)}
              precision={0.5}
              readOnly
            />
          </PriceRatingDiv>
          <BookInfoSpanDiv>
            <BookInfoSpans>
              <BookInfoSpansLabel>Author</BookInfoSpansLabel>
              <BookInfoSpansText>{bookPreview.authors}</BookInfoSpansText>
            </BookInfoSpans>
            <BookInfoSpans>
              <BookInfoSpansLabel>Publisher</BookInfoSpansLabel>
              <BookInfoSpansText>{bookPreview.publisher}</BookInfoSpansText>
            </BookInfoSpans>
            <BookInfoSpans>
              <BookInfoSpansLabel>ISBN10</BookInfoSpansLabel>
              <BookInfoSpansText>{bookPreview.isbn10}</BookInfoSpansText>
            </BookInfoSpans>
            <BookInfoSpans>
              <BookInfoSpansLabel>ISBN13</BookInfoSpansLabel>
              <BookInfoSpansText>{bookPreview.isbn13}</BookInfoSpansText>
            </BookInfoSpans>
            <BookInfoSpans>
              <BookInfoSpansLabel>Pages</BookInfoSpansLabel>
              <BookInfoSpansText>{bookPreview.pages}</BookInfoSpansText>
            </BookInfoSpans>
            <BookInfoSpans>
              <BookInfoSpansLabel>Year</BookInfoSpansLabel>
              <BookInfoSpansText>{bookPreview.year}</BookInfoSpansText>
            </BookInfoSpans>
          </BookInfoSpanDiv>
          <ButtonsDiv>
            <AddToCardButtonDiv>
              <Button
                variant="contained"
                fullWidth={true}
                color="primary"
                onClick={() => {
                  setIsClicked(!isClicked);
                  if (!isClicked) {
                    dispatch(addItem(bookPreview));
                  } else {
                    dispatch(deleteItem(bookPreview));
                  }
                }}
              >
                {isClicked ? 'Added to cart' : 'Add to cart'}
              </Button>
            </AddToCardButtonDiv>
          </ButtonsDiv>
        </BookDetailsDiv>
      </BookInfoDivFirstLine>
      <BookInfoDivSecondLine>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={handleChange} centered>
              <Tab
                label="Desription"
                value="1"
                sx={{ color: 'var(--text-primary-color)' }}
              />
              <Tab
                label="Author"
                value="2"
                sx={{ color: 'var(--text-primary-color)' }}
              />
              <Tab
                label="Subtitle"
                value="3"
                sx={{ color: 'var(--text-primary-color)' }}
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ color: 'var(--text-primary-color)' }}>
            {bookPreview.desc}
          </TabPanel>
          <TabPanel value="2" sx={{ color: 'var(--text-primary-color)' }}>
            {bookPreview.authors}
          </TabPanel>
          <TabPanel value="3" sx={{ color: 'var(--text-primary-color)' }}>
            {bookPreview.subtitle}
          </TabPanel>
        </TabContext>
      </BookInfoDivSecondLine>
    </>
  );
};

const BookInfoDivFirstLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 50px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }
`;

const BookImageDiv = styled.div`
  position: relative;
  background-color: var(--orange-color);
  max-width: 500px;
  height: 400px;
  margin-right: 100px;

  @media screen and (max-width: 900px) {
    width: 90%;
    height: 90%;
    margin-right: 0;
  }
`;

const BookmarkDiv = styled.div`
  position: absolute;
  right: 0;
`;

const BookImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const BookDetailsDiv = styled.div`
  border-top: 1px solid var(--text-secondary-color);
  width: 400px;
  display: block;

  @media screen and (max-width: 900px) {
    width: 80%;
    margin-right: 0;
  }
`;

const PriceRatingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  color: var(--text-primary-color);
`;

const BookInfoSpanDiv = styled.div`
  margin-bottom: 30px;
`;

const BookInfoSpans = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  color: var(--text-primary-color);
`;

const BookInfoSpansLabel = styled.span`
  color: var(--text-secondary-color);
  margin-right: 50px;
`;

const BookInfoSpansText = styled.p`
  all: unset;
  text-align: end;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;

  @media screen and (max-width: 900px) {
    width: 80%;
    margin: auto;
  }
`;

const AddToCardButtonDiv = styled.div`
  margin-bottom: 30px;
  width: 400px;

  @media screen and (max-width: 900px) {
    width: 80%;
  }
`;

const BookInfoDivSecondLine = styled.div``;
