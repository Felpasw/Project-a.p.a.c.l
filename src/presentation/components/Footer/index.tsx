import styled from 'styled-components';
import { BsPersonVcardFill } from 'react-icons/bs';
import * as textContent from '../../text-content';
import { AiOutlineWhatsApp, AiOutlinePhone } from 'react-icons/ai';
import FooterDogImage from '../../assets/FooterDogImage.png'

const FooterContent = styled.footer`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: rgb(35, 35, 46);
    color: #fff;
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    padding: auto;
    margin-top: 50px;
    
`
const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 999px) {
    flex-direction: column;
      
  }
`
const InfoContent = styled.h2`
  padding: auto;
  margin: 10px;

`
const Img = styled.img`
  width: 40ch;
  margin: auto;
  padding: auto;
`
const Div = styled.div`
  display: flex;
  flex-direction: column;
`
const Subtitles = styled.h3`
  font-size: 10px;
  margin: auto;
  padding: auto;
  margin: 10px;
`;


export default function Footer() {
  return (
    <FooterContent>
      <h1 style={{ "alignSelf": "center", "fontSize": "30px" }}> Contato </h1>
      <Infos>
        <Div>
          <InfoContent>Endereço</InfoContent>
          <Subtitles>{textContent.Address}</Subtitles>
        </Div>
        <Div>
          <InfoContent>Email</InfoContent>
          <Subtitles>{textContent.Email}</Subtitles>
        </Div>
        <Div>
          <InfoContent>Telefone</InfoContent>
          <Subtitles> <AiOutlinePhone /> {textContent.ContactNum1}</Subtitles>
          <Subtitles><AiOutlineWhatsApp /> {textContent.ContactNum2}</Subtitles>
        </Div>
        <Div>
          <InfoContent>Área de serviço</InfoContent>
          <Subtitles>Campo Largo e Região metropolitana</Subtitles>
        </Div>
      </Infos>
      <Img src={FooterDogImage} />
    </FooterContent>
  )
}