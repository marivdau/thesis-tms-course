import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { getNewBooks } from "#features/new-books/new-books.slice";
import { Card } from "#ui/card/card";
import { ScrollingCarousel } from '@trendyol-js/react-carousel';

export const SimilarBooks = () => {
  const dispatch = useAppDispatch();
  const { newBooks } = useAppSelector(({ newBooks }) => newBooks)
  useEffect(() => {
    dispatch(getNewBooks());
  }, [dispatch]);
  return (
    <SimilarBooksWrapper>
      <ScrollingCarousel>
        {newBooks.books?.map(item => 
          <Card 
            key={item.isbn13} 
            image={item.image} 
            url={item.url} 
            title={item.title} 
            subtitle={item.subtitle} 
            price={item.price} 
            isbn13={item.isbn13}             
          />)}
	    </ScrollingCarousel>      
    </SimilarBooksWrapper>
  )
}

const SimilarBooksWrapper = styled.div``;
