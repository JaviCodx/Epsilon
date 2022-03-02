import React from 'react'
import styled from 'styled-components'
import Title from './title'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-family:'Public Sans', sans-serif;
  width: 100%;
  min-width: 250px;
  padding: 40px;
  @media (max-width: 450px) {
    padding: 10px;
  }
`
const Welcome = styled.div`
  height:160px;
  border-radius:10px;
  padding:10px;
  background-color:#5299ff;
`
const ContentBoxes = styled.div`
  height:150px;
  margin-top:30px;
  border-radius:10px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
const Box = styled.div`
  height:100%;
  border-radius:10px;
  width: 30%;
  border: 1px solid gray; 
`
const ContentBoxWeight = styled.div`
  height:200px;
  margin-top:30px;
  border-radius:10px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
const BoxWeight = styled.div`
  height:100%;
  border-radius:10px;
  width: 47%;
  border: 1px solid gray; 
`
const Content = () => {
  return (
    <Wrapper>
        <Welcome>
          <Title />
        </Welcome>
        <ContentBoxes>
            <Box>

            </Box>
            <Box>

            </Box>
            <Box>

            </Box>
        </ContentBoxes>
        <ContentBoxWeight>
            <BoxWeight>

            </BoxWeight>
            <BoxWeight>
              
            </BoxWeight>
        </ContentBoxWeight>
    </Wrapper>
  )
}

export default Content