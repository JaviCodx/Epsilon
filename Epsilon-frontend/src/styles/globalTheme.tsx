import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
  html{
    font-size:62.5%;
    font-family: 'Public Sans', sans-serif;
    scroll-behavior:smooth;
    background:${({ theme }: any) => theme.colors.bg.body}
  }
  body, input, button, textarea{
    font:400 ${({ theme }: any) => theme.font.sizes.md} ${({ theme }:any) => theme.font.secondary};
  }
`;