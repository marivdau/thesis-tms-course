import styled from 'styled-components';
import { PageTitle } from '#ui/page-title/page-title';
import { BackLink } from '#features/back-link/back-link';
import { Order } from '#features/order/order';

export const CartPage: React.FC = () => {
  return (
    <CartWrapper>
      <PageTitle children="Your cart" />
      <BackLink />
      <Order />
    </CartWrapper>
  );
};

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--background-primary-color);
`;
