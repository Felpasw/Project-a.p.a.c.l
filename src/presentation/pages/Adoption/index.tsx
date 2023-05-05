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
  width: 240px;
  margin: 5%;
  border-radius: 20px;
  box-shadow: 1px 5px 5px gray;
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
  color: #ffa722;
 
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

const Button = styled.button`
  margin: 5%;
  padding: auto;
  margin-top: 15px ;
  align-self:center;
  border-radius: 100px;
  color: #ffa722;
  font-size: 18px;
  cursor: pointer;
  max-width: 100%;
  width: 200px;
  height: 60px;
  background: transparent;
  border: 3px solid #ffa722;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffa722;
    color: #ffff;
}`;


const Container = styled.div`
  margin: 2%;
  color: #23232e;
`;

const Petlist = [
  {
    Type: "Cachorro(a)",
    Name: "Carina",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Feminino",
    Date: new Date().toLocaleDateString(),
    Image: DogF,

  },
  {
    Type: "Cachorro(a)",
    Name: "Beringela",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Feminino",
    Date: new Date().toLocaleDateString(),
    Image: DogF2
  },
  {
    Type: "Cachorro(a)",
    Name: "Cheedar",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Date: new Date().toLocaleDateString(),
    Image: DogM
  },
  {
    Type: "Cachorro(a)",
    Name: "Chico",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Date: new Date().toLocaleDateString(),
    Image: DogM1
  },
  {
    Type: "Cachorro(a)",
    Name: "Rodolfo",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Date: new Date().toLocaleDateString(),
    Image: DogM2
  },
  {
    Type: "Cachorro(a)",
    Name: "Alvin",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Date: new Date().toLocaleDateString(),
    Image: DogM3

  },
  {
    Type: "Cachorro(a)",
    Name: "Carlos",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Date: new Date().toLocaleDateString(),
    Image: DogM4
  },
  {
    Type: "Cachorro(a)",
    Name: "Ronaldo",
    Castrated: "Não",
    Vacines: "Nenhuma",
    Gender: "Masculino",
    Date: new Date().toLocaleDateString(),
    Image: DogM5
  }
];


export default function Adoption() {

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
              <Container>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  whileHover={{ y: -30 }}
                  style={{
                    width: "30ch",
                    margin: "1.5%",
                    cursor: "pointer"
                  }}
                >
                  <Img src={element.Image} alt="" />
                  {element.Type === "Gato" ?
                    <h1 style={{ "margin": "5%" }}>Conheça {element.Name}!<GiHollowCat /></h1> :
                    <h1 style={{ "margin": "5%" }}>Conheça {element.Name}! <TbDog /></h1>
                  }
                  {element.Gender === "Masculino" ?
                    <h3 style={{ "margin": "5%" }}>Sexo: {element.Gender} <BsGenderMale style={{ "color": "blue" }} /></h3> :
                    <h3 style={{ "margin": "5%" }}>Sexo: {element.Gender} <BsGenderFemale style={{ "color": "hotpink" }} /></h3>
                  }
                  <h3 style={{ "margin": "5%", "fontFamily": "Jost" }}>Na casa desde: {element.Date}</h3>
                  <Button> <b>Conheça minha história!</b></Button>
                </motion.div>
              </Container>
            )
          }
        </Pets>
      </DivContent>
      <Footer />
    </>
  )
}