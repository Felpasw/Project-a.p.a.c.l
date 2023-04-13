import styled from 'styled-components';
import ScaredCat from '../../assets/ScaredCat.png';
import WeirdCat from '../../assets/WeirdCat.png';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Fragment } from 'react';

const CatImage = styled.img`
  width: 300px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  padding: auto;
`;

export default function ErrorPage() {
  return (

    <>
      <Navbar />
      <Content>
        <CatImage src={WeirdCat} alt="" />
        <h2>Parece que não encontramos a página que você procura!</h2>
      </Content>
      <Footer />
    </>

  )
} 