import styled, {keyframes} from "styled-components";


const FadeIn = keyframes`
  from {
    right: -3em; 
    opacity: 0;
  }
  to {
    right: 0; 
    opacity: 1;
  }
`;

const FadeOut = keyframes`
  from {
    right: 0; 
    opacity: 1;
  }
  to {
    right: -3em; 
    opacity: 0;
  }
`;

export const Container = styled.div`
  font-weight:400;
  font-size:14px;
  font-family:'Public sans', sans-serif;
  color:${({ theme }) => theme.colors.white.light};
  min-width: 250px; 
  color: #fff; 
  text-align: center; 
  border-radius: 7px;
  padding: 16px; 
  position: fixed; 
  z-index: 3; 
  right: 20px; 
  top: 80px; 
  &.animation{
    animation: ${FadeIn} ease-in-out 0.2s, ${FadeOut} ease-in-out .2s 1s;
    animation-fill-mode: none, forwards;
  }
  
  &.info{
    background-color: ${({ theme }) => theme.colors.purple.light};
  }
  &.warning{
    background-color: #FFA000;
  }
  &.error{
    background-color: ${({ theme}) => theme.colors.danger};
  }
  
  
  p{
    display:flex;
    align-items: center;
    gap:10px;
    opacity:0.9;
  }
`;