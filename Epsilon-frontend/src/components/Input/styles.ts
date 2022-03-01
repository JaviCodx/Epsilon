import styled from "styled-components";

export const Input = styled.input`
  height:50px;
  margin-top: 20px;
  border-radius: 5px;
  padding:0 ${({ theme }: any) => theme.spacings.md};
  background-color:${({ theme }: any) =>  theme.colors.bg.input };
  color:${({ theme }: any) => theme.colors.textColor.input};
  border: ${({ theme }: any) =>theme.isLight ? theme.colors.gray.medium +" .1em solid" : "none"};
  width:100%;
  box-shadow: 0 1px 8px  ${({ theme }: any) => theme.isLight? "rgb(0,0,0,0)" :"rgba(24,24,24,20%)" } ;
  &:focus{
    outline:none;
    border:.1rem solid ${({ theme }: any) => theme.isLight ? theme.colors.purple.light : theme.colors.white.light};
  }
`;