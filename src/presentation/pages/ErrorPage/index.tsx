import styled from 'styled-components';
import FunnyDog from '../../assets/FunnyDog.png';



const CatImage = styled.img`
 
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
`;
const Title = styled.h1`
  color: red;
  font-size: 300px;
`;
const Div = styled.div`
  display: flex;
  flex-direction: row;
`;
const Button = styled.button`
  padding: auto;
  margin-top: 15px ;
  align-self:center;
  border-radius: 100px;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  height: 60px;
  background: transparent;
  border: 1px solid #ff0000;
  outline: none;
  transition: 1s ease-in-out;
  color: #ff0000;
  &:hover {
    transition: 1s ease-in-out;
    color: #ffff;
    background: #ff0000;
}
`;

const Img = styled.img`
  border-radius: 100%;
  background-color: red;
  max-width: 100%;
  width: 500px;
  margin: auto;
`;



export default function ErrorPage() {
  return (
    <Content>
      <Div>
        <Img style={{ "padding": "9%" }} src={FunnyDog} />
        <div style={{ "display": "flex", "flexDirection": "column" }}>
          <Title> 404</Title>
          <h2>Parece que não encontramos a página que você procura!</h2>
          <Button>Voltar para a página inicial</Button>
        </div>
      </Div>

    </Content>
  )
} 