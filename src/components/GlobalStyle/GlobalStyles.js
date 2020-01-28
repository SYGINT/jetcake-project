import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  body {
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    height: 100vh;
    margin: 1rem;

    @media (min-width: 640px) {
      margin: 3rem;
    }
  }

  h1 {
    margin-top: 0;
  }
`;
