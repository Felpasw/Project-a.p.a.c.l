import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import PetImage from "../../assets/DogPetImage.png"
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUs';
import { Button } from '../../components/ButtonComponent';




const Title = styled.h1`
  max-width: 100%;
  font-size: 5ch;
  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  padding-right: 3ch;
  position: relative;
  right: auto;
  margin-right: 5%;
  padding-right: 5%;
  align-self: center;
  color:  #23232e;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  @media (max-width: 999px) {
    flex-direction: column-reverse;
  }
  
`;

const Img = styled.img` 
  max-width: 100%;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
  border-radius: 150%;
  margin: auto;
  padding: auto;
  @media (max-width:999px) {
    padding-top: 105px;    
  }
  
`;

const Subtitle = styled.h2`
  font-size: 20px;
  max-width: 100%;
  margin: auto;
  padding: auto;
`;

const Titles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

`;


export default function InitialPage() {
  return (
    <>
      <Navbar />
      <Div>
        <Titles style={{ "margin": "auto" }}>
          <motion.div style={{ "alignSelf": "center", "marginLeft": "40px" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 2,
              ease: [0, 0.2, 0.2, 1.01]
            }}
          >
            <Title> Associação Protetora dos Animais de Campo Largo</Title>

          </motion.div>
          <motion.div style={{ "marginLeft": "40px" }}
            initial={{ height: 0, scale: 0 }}
            animate={{ height: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 3,
            }}
          >
            <Subtitle>Nos ajude a crescer! </Subtitle >
          </motion.div>
          <motion.div style={{ "marginTop": "20px", "marginLeft": "40px", "maxWidth": "100%" }}
            initial={{ height: 0, scale: 0 }}
            animate={{ height: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 4,
            }}
          >
            <Button ><a href='/Contribute' style={{ "textDecoration": "none", "color": "inherit" }}><b>Saiba mais</b></a></Button>
          </motion.div>
        </Titles>
        <motion.div style={{ "alignSelf": "end" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.2, 0.2, 1.01]
          }}
        >
          <Img src={PetImage} style={{ "alignSelf": "end", "margin": "auto" }} />
        </motion.div>
      </Div>
      <AboutUs />
      <Footer />
    </>
  );
}


