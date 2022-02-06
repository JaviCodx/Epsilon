import * as Styled from '../../styles/authPages';
import { Link, useNavigate } from 'react-router-dom';

import { Toast } from '../../components/Toast';
import { Epsilon } from '../../components/Epsilon';
import { ToggleTheme } from '../../components/ToggleTheme';

export const Home = () => {
  const history = useNavigate();
  

  //const { user, signInWithGoogle } = useAuth();



  return (
    <Styled.Container>
      <Styled.Left as="aside">
        <strong>Epsilon</strong>
        <p>Registra tu entrenamiento</p>
      </Styled.Left>
      <Styled.Right as="main">
        <Styled.Content>
          <ToggleTheme />
        <Epsilon />
          
          <Styled.Separator>Entra dentro</Styled.Separator>
         
          <Styled.LinkRoom>Inicia sesion <Link to="/app">en Epsilon!</Link></Styled.LinkRoom>
        </Styled.Content>
      </Styled.Right>


    </Styled.Container>
  )
}