import { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

import { GiHollowCat } from "react-icons/gi";
import { TbDog } from 'react-icons/tb';



const Pets = styled.div`
  display: flex;
  align-items: row;

`
const Card = styled.div`
  border: 3px, solid, #4444;
  border-radius: 2px;

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
      <Pets>
        {
          Petlist.map((element) =>
            <Card>
              <h1>{element.type}</h1>{element.icon}
            </Card>
          )
        }
      </Pets>
    </Fragment>
  )
}