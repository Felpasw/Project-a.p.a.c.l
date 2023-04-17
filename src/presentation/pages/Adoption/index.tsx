import { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';

import { GiHollowCat } from "react-icons/gi";
import { TbDog } from 'react-icons/tb';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';


import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
//images
import DogF from '../../assets/AdoptionContent/DogF.png';
import DogF2 from '../../assets/AdoptionContent/DogF2.png';
import DogM from '../../assets/AdoptionContent/DogM.png';
import DogM1 from '../../assets/AdoptionContent/DogM1.png';
import DogM2 from '../../assets/AdoptionContent/DogM2.png';
import DogM3 from '../../assets/AdoptionContent/DogM3.png';
import DogM4 from '../../assets/AdoptionContent/DogM4.png';
import DogM5 from '../../assets/AdoptionContent/DogM5.png';

import CatAndDogAdoption from '../../assets/AdoptionContent/CatAndDogAdoption.png'
import { MdOutlinePets } from 'react-icons/md';

const Pets = styled.div`
  display: flex;
  align-items: row;
  flex-direction: row;
  flex-wrap: wrap; 
  color: #FD841F;
  justify-content: space-around;
  @media(max-width: 999px){
    align-items: column;
  }

`;

const Title = styled.h1`
  display: flex;
  align-self: center;
  max-width: 100%;
  margin: auto;
  padding: auto;
  font-size: 5ch;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  right: auto;
  color:  #ffff;
`
const Img = styled.img`
  max-width: 100%;
  border-radius: 100%;
  margin:auto;
  padding: auto;

`;
const PresentationContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 100px;
  background-color: #FD841F;
`;
const DogAndCat = styled.img`
  max-width: 100%;
  background-color: #FD841F;
`;

const BackGroundDogTrack = styled.h1`
  color: #FFFF;
  font-size: 700px;
`;

const Petlist = [
  {
    Type: "Cachorro(a)",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Feminino",
    Image: DogF
  },
  {
    Type: "Cachorro(a)",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Feminino",
    Image: DogF2
  },
  {
    Type: "Cachorro(a)",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Image: DogM
  },
  {
    Type: "Cachorro(a)",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Image: DogM1
  },
  {
    Type: "Cachorro(a)",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Image: DogM2
  },
  {
    Type: "Cachorro(a)",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Image: DogM3

  },
  {
    Type: "Cachorro(a)",
    Icon: <TbDog />,
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Image: DogM4
  },
  {
    Type: "Cachorro(a)",
    Icon: <TbDog />,
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Image: DogM5
  }
]





export default function Adoption() {
  const parent = {
    variantA: { scale: 1, opacity: 1 },
    variantB: { scale: 1.10, opacity: 0.5 }

  }

  return (
    <Fragment>
      <Navbar />
      <PresentationContent>
        <Title>Não compre, adote!   </Title>
        <DogAndCat src={CatAndDogAdoption} />
      </PresentationContent>

      <div style={{ "display": "flex" }}>
        <h1>Animais para adoção</h1>
      </div>

      <Pets>
        {
          Petlist.map((element) =>

            <motion.div style={{
              "border": "3px, #4444",
              "borderStyle": "solid",
              "cursor": "pointer",
              "borderRadius": "20px",
              "width": "30ch"
            }}
              variants={parent}
              initial="variantA"
              whileHover="variantB">
              <Img src={element.Image} alt="" />

              {element.Type === "Gato" ?
                <h1>{element.Type}<GiHollowCat /></h1> :
                <h1>{element.Type}<TbDog /></h1>
              }
              {element.Gender === "Masculino" ?
                <h2>Sexo: {element.Gender} <BsGenderMale /></h2> :
                <h2>Sexo: {element.Gender} <BsGenderFemale /></h2>
              }

            </motion.div>
          )
        }
      </Pets>
      <Footer />
    </Fragment>
  )
}