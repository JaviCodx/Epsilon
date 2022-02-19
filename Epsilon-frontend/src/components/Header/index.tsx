import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {Epsilon} from '../Epsilon'
import Actions from '../../components/Header/Actions'

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width:100%;
  margin: 0 auto;
  box-shadow: inset 0px -1px 0px #e2e2ea;
`
const LogoWrapper = styled.div`
  margin-left: 35px;
  margin-top:7px;
  a {
    text-decoration: none;
  }
`
const ActionsWrapper = styled.div`
  margin-right: 25px;
`



const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Link to='/'>
          <Epsilon width="80" height="60"/>
        </Link>
      </LogoWrapper>
      <ActionsWrapper>
        <Actions />
      </ActionsWrapper>
    </Wrapper>
  )
}

export default Header