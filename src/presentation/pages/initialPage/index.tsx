import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar';
import styled from 'styled-components';
import PetImage from "../../assets/DogPetImage.png"
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUs';





const Title = styled.h1`
  max-width: 100%;
  font-size: 5ch;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  padding-right: 6ch;
  position: relative;
  right: auto;
  margin-right: 10%;
  padding-right: 10%;
  align-self: center;
  color:  #23232e;
`
const Div = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
`
const Img = styled.img` 
  padding: auto;
  margin: auto;
  max-width: 100%;
  background-color:rgb(0,255,171);
  border-radius: 150%;
`
const Subtitle = styled.h2`
  font-size: 10px;
  max-width: 100%;
`
const Titles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;

`
const Button = styled.button`
  cursor: pointer;
`




export default function InitialPage() {
  return (
    <div style={{ "backgroundColor": "rgb(254,247,237)" }}>
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
            <Title> Associação Protetora de Animais de Campo Largo</Title>

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
          <motion.div style={{ "marginLeft": "40px" }}
            initial={{ height: 0, scale: 0 }}
            animate={{ height: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 4,
            }}
          >
            <Button> Doar! </Button>
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
    </div>
  );
}


