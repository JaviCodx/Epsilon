import React from 'react'
import styled from 'styled-components'
import faker from 'faker';
import Title from './title'
import { Chart as ChartJS,Title as title,LineElement,CategoryScale,LinearScale,PointElement, ArcElement, Tooltip, Legend } from 'chart.js';

import { Doughnut, Line } from 'react-chartjs-2';

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
  height:300px;
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
  span{
    font-size: 15px;
    font-weight:700;
    color:${({ theme }:any) => theme.isLight ? theme.colors.gray.dark : theme.colors.gray.light};
  }
`
const BoxWeight = styled.div`
  height:100%;
  border-radius:10px;
  box-shadow: rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;
  width: 49%;
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
ChartJS.register(CategoryScale,LineElement,title,PointElement,ArcElement,LinearScale, Tooltip, Legend);

export const data = {
  labels: ['Weight', 'Gym', 'Running'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


export const options = {
  responsive: true,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: 'Strenght & Resistance',
    },
  },
  scales: {
    y: {
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};
const labels2 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data2 = {
  labels2,
  datasets: [
    {
      label: 'Strenght',
      data: labels2.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      yAxisID: 'y',
    },
    {
      label: 'Resistance',
      data: labels2.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y1',
    },
  ],
};

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
                  Workout type
                </h2>
                <Doughnut data={data} width={300} height={240} options={{maintainAspectRatio: false,responsive:false}} />
            </BoxWeight>
            <BoxWeight>
                <h2>
                Progression 
                </h2>
                <Line options={options} data={data2} />
            </BoxWeight>
        </ContentBoxWeight>
        <LatestWorkouts>
          <h2>Latest workouts</h2>
          <span>Monday 10:24 AM </span>
        </LatestWorkouts>
    </Wrapper>
  )
}

export default Content