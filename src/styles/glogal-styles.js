import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  ${({ theme }) => css`
    background: ${theme.colors.white};
  `}
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}

p {
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
  `}
}

ul, ol {
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    padding: ${theme.spacings.medium};
  `}
}

`;
