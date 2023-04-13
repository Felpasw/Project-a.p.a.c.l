import styled from 'styled-components';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CatsDogsImage from '../../assets/CatsDogsImage.png';

const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const Title = styled.h1`
  align-self: center;
  padding-top: 100px;
  margin: auto;
  max-width: 100%;
  font-size: 5ch;
  font-family: 'Work Sans', sans-serif;
  align-self: center;
  color:  #23232e;
  
`
const Img = styled.img`
 align-self: flex-end;
 padding-top: 100px;
 max-width: 100%;
 width: 900px;
 background-color: #ad78fc;
 border-radius: 100%;
`

export default function Donation() {
  return (
    <>
      <Navbar />
      <MainContent>
        <Title>Ajude nossa instituição a ajudar você!</Title>
        <Img src={CatsDogsImage} />
      </MainContent>
      <Footer />
    </>
  )
}