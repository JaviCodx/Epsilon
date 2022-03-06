
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import { Toast } from '../../components/Toast';
import { Epsilon } from '../../components/Epsilon';
import { ToggleTheme } from '../../components/ToggleTheme';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import Content from '../../components/Main/Content'

export const Activity = () => {

  const history = useNavigate();
  




  const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-width: 250px;
  padding: 0 20px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`

return (
  <>
    <Header />
    <Wrapper>      
        <Sidebar />
    </Wrapper>
  </>
 

  )
}