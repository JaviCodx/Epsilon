import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const TIMEOUT = 400;


export const GlobalStyle = createGlobalStyle`

html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1,h2,h3,h4,h5,h6  {
    font-family: ${themeGet('fontFamily.1', 'sans-serif')};
    margin: 0;
  }

  p,a,span,button,li,div  {
    font-family: ${themeGet('fontFamily.0', 'sans-serif')};
    margin: 0;
  }

  ul{
    margin: 0;
    padding: 0;
  }

  li{
    list-style: none;
  }
  
  a{
    text-decoration: none;
  }
`;