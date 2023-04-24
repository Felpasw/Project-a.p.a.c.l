import { Fragment } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';


import { GiHollowCat } from "react-icons/gi";
import { TbDog } from 'react-icons/tb';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import * as textContent from '../../text-content';

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



const Pets = styled.div`
  display: flex;
  align-items: row;
  flex-direction: row;
  flex-wrap: wrap; 
  color: #ffd801;
  margin: 3%;
  justify-content: space-around;

`;

const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  max-width: 100%;
  margin: auto;
  padding: auto;
  font-size: 6ch;
  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  right: auto;
  color:  #ffff;
`
const Img = styled.img`
  max-width: 100%;
  border-radius: 100%;
  margin:auto;
  padding:auto;

`;
const PresentationContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 100px;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
`;
const DogAndCat = styled.img`
  max-width: 100%;
`;

const DivContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const Subtitles = styled.h1`
  color: #ffd801;
 
`;
const AboutDonation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5%;
  margin: 5%;
  margin-top: -115px;
  background-color: #ffff;
  border-radius: 40px;
  z-index: 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  
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
];


export default function Adoption() {
  const parent = {
    variantA: { scale: 1, opacity: 1 },
    variantB: { scale: 1.10, opacity: 0.5 }

  }

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 1.3 }}
      >
        <PresentationContent>
          <Title>Não compre, <h1 style={{ "maxWidth": "100%", "fontFamily": "Jost" }}>adote!</h1></Title>
          <DogAndCat src={CatAndDogAdoption} />
        </PresentationContent>

      </motion.div>
      <DivContent>
        <AboutDonation>
          <Subtitles>Sobre <HiOutlineInformationCircle /></Subtitles>
          <p>{textContent.AboutDonation}</p>
        </AboutDonation>
        <Div>
          <Subtitles style={{ "alignSelf": "center" }}> Atuais moradores da casa </Subtitles>
        </Div>
        <Pets>
          {
            Petlist.map((element) =>

              <motion.div style={{
                "border": "3px, #4444",
                "borderStyle": "solid",
                "cursor": "pointer",
                "borderRadius": "20px",
                "width": "30ch",
                "margin": "1.5%"
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
      </DivContent>
      <Footer />
    </>
  )
}