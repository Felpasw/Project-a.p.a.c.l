import styled from 'styled-components';
import APACL from '../../assets/APACL.png'
import EditPetsForm from '../../components/EditPetsForm';
import EditEventsForm from '../../components/EditEventsForm';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 60px -16px ;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;


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
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
   margin: 5%;
  margin-right: 10px;
  width: 60vh;
  margin-left: 40px;
  background-color: #ffff;
  align-items: center;
  border-radius: 10px;
  padding: 70px;
  
`

const ElementsList = [<EditPetsForm />, <EditEventsForm />]


export default function Restricted() {

  return (
    <Content>
      <Img src={APACL} alt="" />
      <Title>Bem vindo(a) ao gerenciamento de conteúdo do site da APACL!</Title>
      <Subtitle>Qual conteúdo deseja alterar?</Subtitle>
      <MainContent>
        {ElementsList.map((Element) =>
          <>
            {Element}
          </>
        )}
      </MainContent>
    </Content>
  )
}