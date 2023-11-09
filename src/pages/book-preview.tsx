import { getBookPreview } from "#features/book-preview/book-preview.slice";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PageTitle } from "#ui/page-title/page-title";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Button, Rating } from "@mui/material";
import { useParams } from "react-router-dom";
import { Subscribe } from "#features/subscribe/subscribe";
import { Socials } from "#ui/socials/socials";
import { SimilarBooks } from "#ui/similar-books/similar-books";

export const BookPreviewPage: React.FC = () => {
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

  return (
    <BooksPreviewWrapper>
      <PageTitle>{bookPreview.title}</PageTitle>
      <BookInfoDiv>
        <BookInfoDivFirstLine>
          <BookImageDiv>
            <BookImage src={bookPreview.image} />
          </BookImageDiv>
          <BookDetailsDiv>
            <PriceRatingDiv>
              {bookPreview.price}
              <Rating name="read-only" value={Number(bookPreview.rating)} precision={0.5} readOnly />
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
                <Button variant="contained" fullWidth={true} color="primary" >Add to cart</Button>
              </AddToCardButtonDiv>
              <PreviewBookButtonDiv>
                <Button fullWidth={true}>Preview Book</Button>
              </PreviewBookButtonDiv>
            </ButtonsDiv>
          </BookDetailsDiv>
        </BookInfoDivFirstLine>
        <BookInfoDivSecondLine>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList onChange={handleChange} centered>
                <Tab label="Desription" value="1" />
                <Tab label="Author" value="2" />
                <Tab label="Subtitle" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">{bookPreview.desc}</TabPanel>
            <TabPanel value="2">{bookPreview.authors}</TabPanel>
            <TabPanel value="3">{bookPreview.subtitle}</TabPanel>
          </TabContext>
        </BookInfoDivSecondLine>
      </BookInfoDiv>
      <Socials />
      <Subscribe />
      <SimilarBooks />
    </BooksPreviewWrapper>
  )
}

const BooksPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BookInfoDivFirstLine = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 50px;
`;

const BookImageDiv = styled.div`
  background-color: var(--orange-color);
  width: 500px;
  height: 400px;
  margin-right: 100px;
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

const BookInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
`;

const AddToCardButtonDiv = styled.div`
  margin-bottom: 30px;
  width: 400px;
`;

const PreviewBookButtonDiv = styled.div`
  margin-bottom: 20px;
  width: 400px;
`;

const BookInfoDivSecondLine = styled.div``;
