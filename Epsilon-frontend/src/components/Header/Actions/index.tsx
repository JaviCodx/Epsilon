import React from 'react'
import styled from 'styled-components'
import Avatar from '../../Avatar'
import ActionsShape from '../Actions/Shape'
import ActionsButton from '../Actions/Button'
import img from '../../../assets/images/noprofile.jpg';

const Wrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  align-items: center;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  @media (max-width: 450px) {
    grid-template-columns: 1fr 1fr;
    justify-items: end;
  }
`
const userProps = {
  size: 30,
  name: 'KA',
  color: 'blue',
  avatar: img
}




const Actions = () => {
  console.log(userProps);
  return (
    <Wrapper>
      <ActionsButton />
      <ActionsShape />
      <Avatar {...userProps} />

    </Wrapper>
  )
}

export default Actions