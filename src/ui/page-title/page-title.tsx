import styled from "styled-components";

type Props = {
  children: string;
};

export const PageTitle: React.FC<Props> = ({ children }) => {
  return (
    <PageTitleWrapper>
      {children}
    </PageTitleWrapper>
  )
}

const PageTitleWrapper = styled.h1`
  all: unset;
  font-size: 56px;
  line-height: 64px;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--text-primary-color);
  padding: 20px 0 50px;
`;
