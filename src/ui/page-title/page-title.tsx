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
  height: 40px;
  text-transform: uppercase;
  color: var(--text-primary-color);;
`;
