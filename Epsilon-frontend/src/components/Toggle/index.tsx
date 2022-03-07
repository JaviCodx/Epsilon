import React, { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import styled from 'styled-components'
import { Toast } from "../Toast";

const CheckBoxWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  background:transparent;
  margin:0;
  border:none;
position:absolute;
top:40px;
right:45px;

`;
const CheckBoxLabel = styled.label`

  width: 42px;
  height: 24px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  display:flex;
  align-items:center;
  justify-content:center;
  background:transparent;
  margin:0;
  border:none;
  color:${({ theme }:any) => theme.isLight ? theme.colors.purple.light : theme.colors.white.light};
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;
  &:checked + ${CheckBoxLabel} {
   
    background: #0A62EA;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 21px;
      transition: 0.2s;
    }
  }
`;
const Toggle = () => {
    const { toggleTheme, isLight} = useTheme();
    const [theme, setTheme] = useState('hidden');
  
    const handleClick = ()=> {
      setTheme('switch');
      toggleTheme();
      setTimeout(() => {
        setTheme('hidden');
      }, 2000);
    }
    return (
        <div>
      <CheckBoxWrapper>
        {theme==="switch" && <Toast type="info">Tema cambiado: {isLight? "Claro":"Oscuro"}!</Toast>}
        <CheckBox id="checkbox" type="checkbox" title="Switch Theme" onClick={handleClick}/>
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </div>
    );
};

export default Toggle;