import styled from "styled-components";

export const Header = styled.h1`
  margin: 2rem 0 1rem;
  font-size: 1.75rem;
`;

export const InfoContainer = styled.div`
  p {
    margin-top: 0;
  }

  @media (min-width: 640px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }
`;