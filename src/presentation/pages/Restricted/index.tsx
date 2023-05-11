import styled from 'styled-components';
import { Input } from '../../components/InputComponent';
import APACL from '../../assets/APACL.png'

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Title = styled.h1`
  font-family: 'Jost', sans-serif;
  align-self: center;
  margin: 2%;
`;

const Subtitle = styled.h2`
  font-family: 'Jost', sans-serif;
`;

const Img = styled.img`
  width: 30vh;
`

export default function Restricted() {
  return (
    <Content>
      <Img src={APACL} alt="" />
      <Title>Bem vindo(a) ao gerenciamento de conteúdo do site da APACL!</Title>
      <Subtitle>Qual conteúdo deseja alterar?</Subtitle>
    </Content>
  )
}