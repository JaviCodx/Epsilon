import * as Styled from './styles';
import { useNavigate } from 'react-router-dom';
import { Toast } from '../../components/Toast';
import { ToggleTheme } from '../../components/ToggleTheme';
import { useEffect } from 'react';


export const NotFound = () => {  
  const navigate =useNavigate();

  useEffect(() => {
    setTimeout(() =>{
      navigate('/');
    },3000);
  });


  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.Title>
          <h1>No se encontró la página...</h1>
        </Styled.Title>
      </Styled.Main>
      <Toast type="error" className="noAnimation">Vas a ser redireccionado a la home!</Toast>
    </Styled.Container>
  );
};