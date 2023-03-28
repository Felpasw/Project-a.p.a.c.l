import { Fragment, ReactNode, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

import CatImage from '../../assets/CatPetImage.png';
import apaclLogoImage from '../../assets/APACL.png';

import { IoIosPaper } from 'react-icons/io';
import { TbVaccine } from 'react-icons/tb';
import { RiSurveyFill, RiWhatsappFill } from 'react-icons/ri'
import { FaBriefcaseMedical } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillPhone } from 'react-icons/ai';

import * as textContent from '../../text-content/index';
import Footer from '../../components/Footer';

const AboutUsText = styled.div`
  text-align: center;
  max-width: 100%;
  margin: auto;
  padding: auto;
`
const Img = styled.img`
  margin:auto;
  width: 300px;
  max-width: 100%;
`;
const CatImageTag = styled.img`
  margin: auto;
  padding: auto;
  max-width: 100%;
  width: 250px;
  @media (max-width: 999px) {
    display: none;
  }
`
const Div = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: row;
  padding: auto;
  margin: auto;
  @media (max-width: 999px) {
    flex-direction: column;
      overflow: scroll;
  }

`
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
  align-items: center;
  flex-direction: column;
  margin: auto;
  padding: auto;
`;
const Service = styled.div`
  transition: 3s;
`
const informationList = [
  {
    text: "Vacinas",
    icon: <TbVaccine />,
    subtext: <Service> {textContent.Services}</Service>
  },
  {
    text: "Consultas",
    icon: <IoIosPaper />,
    subtext: <Service> {textContent.Services}</Service>
  },
  {
    text: "Cirurgias",
    icon: <RiSurveyFill />,
    subtext: <Div> {textContent.SurgeryInfo}</Div>
  },
  {
    text: "Atendimento",
    icon: <FaBriefcaseMedical />,
    subtext: <Service> {textContent.Services}</Service>
  },
  {
    text: "Contato",
    icon: <RiContactsFill />,
    subtext: <AboutUsText> <AiFillPhone /> {textContent.ContactNum1} <RiWhatsappFill /> {textContent.ContactNum2} </AboutUsText>
  },

]




function AccordionItem({ text, subtext, icon }: { text: string, subtext: JSX.Element, icon: ReactNode }) {
  const [isOpened, setValue] = useState(false);
  const toggle = () => setValue((state) => !state);

  return (
    <div>
      <Info onClick={toggle} style={{ "marginRight": "3px" }}>{text} {icon}</Info>
      {isOpened && <p>{subtext}</p>}
    </div>
  );
}



export default function AboutUs() {
  const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.10 }

  }



  return (
    <Fragment>
      <Navbar />
      <Div>
        <Img src={apaclLogoImage} alt="" />

        <Infos>
          <AboutUsText>
            <h1>Sobre nós: </h1>
            {textContent.AboutUsText}
          </AboutUsText>
          {informationList.map((information) =>
            <motion.div
              variants={parent}
              initial="variantA"
              whileHover="variantB">
              <AccordionItem text={information.text} subtext={information.subtext} icon={information.icon} />
            </motion.div>
          )}
        </Infos>
        <CatImageTag src={CatImage} />
      </Div>
      <Footer />
    </Fragment>
  )
}