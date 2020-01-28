import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: 'Bebas Neue', cursive;
  font-size: 24px;
`;

export const Title = styled.span`
  color: brown;
  flex-grow: 1;
`;

export const Link = styled.a`
  margin-left: 10px;
  text-decoration: none;
  color: darkslategray;

  &:first-child {
    margin-left: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;
