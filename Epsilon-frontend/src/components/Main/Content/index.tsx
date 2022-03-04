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
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  height:100%;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  padding 15px;
  border-radius:10px;
  width: 30%;
  border: 1px solid gray; 
  h2{
    font-size: 16px;
    color:${({ theme }:any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
  span{
    font-size: 25px;
    font-weight:700;
    color:${({ theme }:any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
`
const ContentBoxWeight = styled.div`
  height:200px;
  margin-top:30px;
  border-radius:10px;
  display:flex;
  flex-direction:row;
  justify-content:space-between;
`
const LatestWorkouts = styled.div`
  border-radius:10px;
  margin-top:30px;
  height: 400px;
  padding:15px;
  border: 1px solid gray; 
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  h2{
    font-size: 18px;
    color:${({ theme }:any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
`
const BoxWeight = styled.div`
  height:100%;
  border-radius:10px;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  width: 47%;
  padding:15px;
  border: 1px solid gray; 
  h2{
    font-size: 18px;
    color:${({ theme }:any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
  span{
    font-size: 25px;
    font-weight:700;
    color:${({ theme }:any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
`
const Content = () => {
  return (
    <Wrapper>
        <Welcome>
          <Title />
        </Welcome>
        <ContentBoxes>
            <Box>
                <h2>
                  Total Weight lifted Today
                </h2>
                <span>18,000 kgs</span>
            </Box>
            <Box>
            <h2>
                  Total Weight lifted this week
                </h2>
                <span>216,000 kgs</span>
            </Box>
            <Box>
                <h2>
                  Total Weight lifted this month
                </h2>
                <span>929,000 kgs</span>
            </Box>
        </ContentBoxes>
        <ContentBoxWeight>
            <BoxWeight>
                <h2>
                  Progression
                </h2>
            </BoxWeight>
            <BoxWeight>
                <h2>
                  Workout type
                </h2>
            </BoxWeight>
        </ContentBoxWeight>
        <LatestWorkouts>
          <h2>Latest workouts</h2>
        </LatestWorkouts>
    </Wrapper>
  )
}

export default Content