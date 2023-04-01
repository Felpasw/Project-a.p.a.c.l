import styled from 'styled-components'
import { BsPersonVcardFill } from 'react-icons/bs'
import * as textContent from '../../text-content'


const FooterContent = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgb(35, 35, 46);
    color: #fff;
    max-width: 100%;
    max-height: 100%;
`
const Infos = styled.div`
  display: flex;
  flex-direction: row;
`
const InfoContent = styled.h2`
  padding: 30px;
  margin: 10px;
`



export default function Footer() {
  return (
    <FooterContent>
      <h1 style={{ "alignSelf": "center" }}> Contato </h1>
      <Infos>
        <InfoContent>Endereço</InfoContent>
        <InfoContent>Email</InfoContent>
        <InfoContent>Telefone</InfoContent>
        <InfoContent>Área de serviço</InfoContent>
      </Infos>

    </FooterContent>
  )
}