import * as Styled from './styles';

import {useTheme} from '../../hooks/useTheme';
import { FaToggleOn } from 'react-icons/fa'
import { Toast } from '../Toast';
import { useState } from 'react';

export const ToggleTheme = () => {
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
    <Styled.Container>
      {theme==="switch" && <Toast type="info">Tema cambiado: {isLight? "Claro":"Oscuro"}!</Toast>}
      <Styled.Button title="Switch Theme" onClick={handleClick} >
        <FaToggleOn/>
      </Styled.Button>
    </Styled.Container>
  )
}