import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../hooks";
import { PageTitle } from "#ui/page-title/page-title";
import { getNewBooks } from "#features/new-books/new-books.slice";
import { CartItem } from "#ui/cart-item/cart-item";
import { Order } from "#features/order/order";

export const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { newBooks } = useAppSelector(({ newBooks }) => newBooks)
  useEffect(() => {
    dispatch(getNewBooks());
  }, [dispatch]);

  return (
    <CartWrapper>
      <PageTitle children='Your cart' />      
        {newBooks.books?.map(item => 
          <CartItem 
            key={item.isbn13} 
            image={item.image} 
            url={item.url} 
            title={item.title} 
            subtitle={item.subtitle} 
            price={item.price} 
            isbn13={item.isbn13}             
          />
        )}
      <Order />
    </CartWrapper>
  )
}

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
