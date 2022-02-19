import React from 'react'
import styled from 'styled-components'
//import IconGoogle from 'components/Common/Icons/SocialMedia/Google'
//import IconFacebook from 'components/Common/Icons/SocialMedia/Facebook'
import { BsGoogle} from "react-icons/bs"
import { GrFacebook} from "react-icons/gr"



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 45px;
  border: none;
  background: #fc5a5a;
  border-radius: 6px;
  cursor: not-allowed;
  :focus {
    outline: none;
  }
  span {
    margin-left: 10px;
    color: white;
    font-size: 12px;
  }
`
const ButtonFacebook = styled(ButtonGoogle)`
  background: #0064E6;
  margin-top: 10px;
`

const Social = () => {
  return (
    <Wrapper>

      <ButtonGoogle>
        {/* <IconGoogle /> */}
        <BsGoogle size={"2.2rem"} color={"white"}/>
        <span>Continue with Google</span>
      </ButtonGoogle>
      <ButtonFacebook>
        {/* <IconFacebook /> */}
        <GrFacebook size={"2.2rem"} color={"white"}/>
        <span>Continue with Facebook</span>
      </ButtonFacebook>
    </Wrapper>
  )
}

export default Social