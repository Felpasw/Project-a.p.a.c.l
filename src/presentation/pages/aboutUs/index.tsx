import { Fragment } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/Navbar'
import apaclInfo from '../../assets/APACLinfo.png'

const Img = styled.img`


`;

const Info = styled.h1`
  font-family: system-ui, 
  -apple-system, 
  BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
  sans-serif;
`;


const Infos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

`;
const Atendimento = styled.div`
  display: flex;
`;
export default function AboutUs() {
  return (
    <Fragment>
      <Navbar />
      <Infos>
        <Info>Consultas</Info>
        <br />
        <Info>Vacinas</Info>
        <br />
        <Info>Procedimentos Cirúrgicos</Info>
        <br />
        <Info>Atendimento</Info>
      </Infos>
      <Img src={apaclInfo} />
    </Fragment>
  )
}