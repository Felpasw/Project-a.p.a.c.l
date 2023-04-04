import { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

import { GiHollowCat } from "react-icons/gi";
import { TbDog } from 'react-icons/tb';
import Footer from '../../components/Footer';



const Pets = styled.div`
  display: flex;
  align-items: row;

`
const Card = styled.div`
  border: 3px, solid, #4444;
  border-radius: 2px;
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
    type: "Cat",
    icon: <GiHollowCat />,
    castrated: "Yes",
    Age: "Unknown",
    Vacines: ["Panleucopenia", "Rinotraqueíte", "Calicivirose"]
  },
  {
    type: "Dog",
    icon: <TbDog />,
    castrated: "Yes",
    Age: "4 months",
    Vacines: ["Raiva canina", "Gripe canina", "V8 ou V10"]
  }
]





export default function Adoption() {
  return (
    <Fragment>
      <Navbar />
      <div style={{ "display": "flex" }}>
        <Title>Animais para adoção</Title>
      </div>

      <Pets>
        {
          Petlist.map((element) =>
            <Card>
              <h1>{element.type}</h1>{element.icon}
            </Card>
          )
        }
      </Pets>
      <Footer />
    </Fragment>
  )
}