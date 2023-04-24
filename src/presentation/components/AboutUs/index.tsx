import { Fragment, ReactNode, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';

import apaclLogoImage from '../../assets/APACL.png';
import InfoCatImage from '../../assets/InfoCatImage.png';
import InfoHorseImage from '../../assets/InfoHorseImage.png';
import InfoCatImage2 from '../../assets/InfoCatImage2.png';
import InfoDogCatImage from '../../assets/InfoDogCatImage.png'

import { IoIosPaper } from 'react-icons/io';
import { TbVaccine } from 'react-icons/tb';
import { RiSurveyFill } from 'react-icons/ri'
import { FaBriefcaseMedical } from 'react-icons/fa';



import * as textContent from '../../text-content/index';

const AboutUsText = styled.div`
  text-align: center;
  max-width: 100%;
  margin: auto;
  padding: auto;
`;

const Img = styled.img`
  margin:auto;
  max-width: 100%;
  float: center;
  padding: auto;
`;

const CatImage2 = styled.img`
  margin:auto;
  width: 300px;
  max-width: 100%;
  float: center;
  background-color: #29bdc1;
  border-radius: 100%;
`;

const DogCatImage = styled.img`
  margin:auto;
  width: 300px;
  height: 300px;
  max-width: 100%;
  float: center;
  background-color: #d84242;
  border-radius: 100%;
`;

const CatImage = styled.img`
  margin:auto;
  width: 300px;
  max-width: 100%;
  float: center;
  background-color: #913F92;
  border-radius: 100%;
`;

const HorseImage = styled.img`
  margin:auto;
  width: 330px;
  max-width: 100%;
  float: center;
  background-color: #eaff7b;
  border-radius: 100%;
`;

const Div = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  padding: auto;
  margin: auto;
  background-color: aliceblue;
  @media (max-width: 999px) {
    flex-direction: column;
      overflow: scroll;
  }
`;

const Info = styled.h1`
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  padding: auto;
`;

const Infos = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex-direction: center;
  margin: auto;
  padding: auto;
  justify-content: center;
`;

const Service = styled.div`
  text-align: center; 
  align-items: center;
  margin: auto;
  padding: auto;
`;

const AboutUsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 120px;
  padding: auto;
  align-items: center;
  @media (max-width: 999px) {
    flex-direction: column;
    
  }

`;

const informationList = [
  {
    text: "Vacinas",
    icon: <TbVaccine />,
    subtext: <Service> {textContent.Vaccines}</Service>,
    Image: <CatImage src={InfoCatImage} alt="" />
  },
  {
    text: "Consultas",
    icon: <IoIosPaper />,
    subtext: <Service> {textContent.Queries}</Service>,
    Image: <HorseImage src={InfoHorseImage} alt="" />
  },
  {
    text: "Cirurgias",
    icon: <RiSurveyFill />,
    subtext: <Service> {textContent.Surgeries}</Service>,
    Image: <CatImage2 src={InfoCatImage2} alt="" />
  },
  {
    text: "Atendimento",
    icon: <FaBriefcaseMedical />,
    subtext: <Service> {textContent.Services}</Service>,
    Image: <DogCatImage src={InfoDogCatImage} alt="" />
  }
];




function AccordionItem({ text, subtext, icon, Image }: { text: string, subtext: JSX.Element, icon: ReactNode, Image: JSX.Element }) {
  const [isOpened, setValue] = useState(false);
  const toggle = () => setValue((state) => !state);

  return (
    <Service>
      <Info onClick={toggle} style={{ "marginRight": "3px" }}> {Image} <br />{text} {icon}</Info>
      {isOpened &&
        <AnimatePresence>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1.3 }}
          >
            <p>{subtext}</p>
          </motion.div>
        </AnimatePresence>
      }
    </Service>
  );
}


export default function AboutUs() {
  const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.05 }

  }

  return (
    <Div>
      <AboutUsDiv>
        <Img src={apaclLogoImage} alt="" />
        <AboutUsText>
          <h1>Sobre nós </h1>
          {textContent.AboutUsText}
        </AboutUsText>
      </ AboutUsDiv>
      <Infos>
        {informationList.map((information) =>
          <motion.div
            variants={parent}
            initial="variantA"
            whileHover="variantB">
            <AccordionItem text={information.text} subtext={information.subtext} icon={information.icon} Image={information.Image} />
          </motion.div>
        )}
      </Infos>
    </Div>
  )
}