import React from 'react'
import styled from 'styled-components'

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  height: 38px;

`
const Username = styled.span`
  font-size: 24px;
  text-align: center;
  letter-spacing: 0.1px;
  color: white;
  @media (max-width: 450px) {
    display: none;
  }
`
const WelcomeText = styled.span`
  font-size: 18px;
  letter-spacing: 0.1px;
  color: #92929d;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
`

const Title = () => {
  return (
    <HeaderContent>
      <div>
        <Username>Hi Javi,</Username>
        <WelcomeText>Here’s your currently workouts</WelcomeText>
      </div>
    </HeaderContent>
  )
}

export default Title