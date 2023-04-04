import { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

import { GiHollowCat } from "react-icons/gi";
import { TbDog } from 'react-icons/tb';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';



const Pets = styled.div`
  display: flex;
  align-items: row;
  justify-content: space-around;
  @media(max-width: 999px){
    align-items: column;
  }

`
const Card = styled.div`
  border: 3px, #4444; 
  border-style: solid;
  border-radius:20px;
  cursor: pointer;
 
`
const Title = styled.h1`
  display: flex;
  align-self: center;
  padding-top: 100px;
  max-width: 100%;
  margin: auto;
  padding: auto;
  font-size: 5ch;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  right: auto;
  color:  #23232e;
`

const Petlist = [
  {
    type: "Gato",
    icon: <GiHollowCat />,
    castrated: "Yes",
    Age: "Unknown",
    Vacines: ["Panleucopenia", "Rinotraqueíte", "Calicivirose"]
  },
  {
    type: "Cachorro",
    icon: <TbDog />,
    castrated: "Yes",
    Age: "4 months",
    Vacines: ["Raiva canina", "Gripe canina", "V8 ou V10"]
  }
]





export default function Adoption() {
  const parent = {
    variantA: { scale: 1, opacity: 1 },
    variantB: { scale: 1.10, opacity: 0.5, border: "3px, #4444" }

  }

  return (
    <Fragment>
      <Navbar />
      <div style={{ "display": "flex" }}>
        <Title>Animais para adoção</Title>
      </div>

      <Pets>
        {
          Petlist.map((element) =>
            <motion.div style={{
              "border": "3px, #4444",
              "borderStyle": "solid",
              "cursor": "pointer",
              "borderRadius": "20px",
            }}
              variants={parent}
              initial="variantA"
              whileHover="variantB">

              <h1>{element.type}{element.icon}</h1>

            </motion.div>
          )
        }
      </Pets>
      <Footer />
    </Fragment>
  )
}