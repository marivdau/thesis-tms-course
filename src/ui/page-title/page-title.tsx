import styled from 'styled-components';

type Props = {
  children: string;
};

export const PageTitle: React.FC<Props> = ({ children }) => {
  return <PageTitleWrapper>{children}</PageTitleWrapper>;
};

const PageTitleWrapper = styled.h1`
  all: unset;
  font-size: 56px;
  line-height: 64px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-primary-color);
  padding: 20px 10px 50px;
  background-color: var(--background-primary-color);

  @media screen and (max-width: 1000px) {
    font-size: 38px;
    line-height: 54px;
    padding-left: 10px;
  }
`;
