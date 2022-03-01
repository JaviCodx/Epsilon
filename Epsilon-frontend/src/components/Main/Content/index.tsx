import React from 'react'
import styled from 'styled-components'
import Title from './title'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 250px;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`

const Content = () => {
  return (
    <Wrapper>
        <Title />
        <p>HOla</p>
    </Wrapper>
  )
}

export default Content