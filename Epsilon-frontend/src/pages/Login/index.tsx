import * as Styled from '../../styles/authPages';
import { Link, useNavigate } from 'react-router-dom';

import { Toast } from '../../components/Toast';
import { Epsilon } from '../../components/Epsilon';
import { ToggleTheme } from '../../components/ToggleTheme';
import { Input } from '../../components/Input'
import img from '../../assets/images/machines.png'
import  Social from '../../components/Social'

import { useState } from 'react';
import Toggle from '../../components/Toggle';



export const Login = () => {
  const history = useNavigate();
  const [enabled, setEnabled] = useState(false);


  return (
    <Styled.Container>


      <Styled.Left as="aside">
        <img src={img} width="250"/>
        <strong>Hi, Welcome back!</strong>
        <p>Let's start tracking your workout</p>
      </Styled.Left>
      <Styled.Right as="main">
        <Styled.Content>
          <Toggle />
          {/* <ToggleTheme /> */}
        <Epsilon width="117" height="75"/>
        <Social />
          <Styled.Separator>Sign in</Styled.Separator>
         <Input />
         {/* quitar  BR*/}
         <br />
         <Input />
         
          <Styled.LinkRoom>Sign in <Link to="/dashboard">to Epsilon!</Link></Styled.LinkRoom>
        </Styled.Content>
      </Styled.Right>


    </Styled.Container>
  )
}