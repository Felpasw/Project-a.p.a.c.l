import { motion } from 'framer-motion';
import { useState } from 'react';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';
import * as textContent from '../../text-content';

const ContributeWay = styled.button`
  padding: auto;
  margin-top: 15px;
  align-self:center;
  border-radius: 90px;
  color: #ffa722;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  height: 60px;
  width: 300px;
  background: transparent;
  border: 1px solid #ffa722;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffa722;
    color: #ffff;
}
`;
const Div = styled.div`
  overflow: scroll;
  display: flex;
  flex-direction: column;
  width: 150vh;
  max-width: 100%;
  height: 90vh;
  top: 10vh;
  left: 40vh;
  right: 40vh;
  left: 30vh;
  align-self: center;
  margin-right: 180%;
  background-color: #23232e;
  position: fixed;
  z-index: 0;
  align-self: center;
  border-radius: 8px;
  @media (max-width: 999px) {
    width: 70vh;
    height: 75vh;
    top: 16vh;
    margin: 0.01vh;
    margin-bottom: 180ch;
    align-self: center;
    margin-right: 180%;  
    left: 20vh;
    }
`;

const Title = styled.h1`
  align-self: center;
  font-family: 'Jost', sans-serif;
  margin: 5%;
  color: #ffa722;
  font-size: 12vh;
  max-width: 100%;
  @media (max-width: 999px) {
    font-size: 40px ;
    }
`;

const Subtitle = styled.h2`
  align-self: center;
  margin: 5%;
  color: aliceblue;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const CloseIcon = styled.h1`
  align-self: flex-end;
  color:#ffa722;
  margin: 2%;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const Carousel = styled.div`
  
`;


export default function WayToContribute(Props: { Name: string, Icon: JSX.Element }) {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown(!isShown);

  return (
    <>
      {isShown ?
        <motion.div style={{ "display": "flex" }}>
          <Div>
            <CloseIcon onClick={toggle} style={{ "cursor": "pointer" }}><FaWindowClose /></CloseIcon>
            <Title>{Props.Name}</Title>
            <Container>
              <AboutContent>
                <Subtitle>Como funciona?</Subtitle>
                <h4 style={{ "margin": "5%" }}>{textContent.AboutDonation}</h4>
              </AboutContent>
              <Carousel></Carousel>
            </Container>
          </Div>
        </motion.div> :
        <></>
      }
      <ContributeWay onClick={toggle} >
        {Props.Icon}<br />
        {Props.Name}
      </ContributeWay>
      {/* // <ContributeWay style={{ "cursor": "not-allowed" }} >
        //   {Props.Icon}<br />
        //   {Props.Name}
        // </ContributeWay> */}


    </>

  )
}