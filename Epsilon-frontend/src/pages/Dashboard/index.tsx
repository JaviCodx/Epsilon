import * as Styled from '../../styles/authPages';
import { Link, useNavigate } from 'react-router-dom';

import { Toast } from '../../components/Toast';
import { Epsilon } from '../../components/Epsilon';
import { ToggleTheme } from '../../components/ToggleTheme';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
export const Dashboard = () => {
  const history = useNavigate();
  

  //const { user, signInWithGoogle } = useAuth();



  return (
 <>
        <Header />
        <Sidebar />
 
 </>

  )
}