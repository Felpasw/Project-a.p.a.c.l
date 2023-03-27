import { Fragment, ReactNode, useState } from 'react';
import styled, { StyledComponent } from 'styled-components';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

import apaclInfo from '../../assets/APACLinfo.png';
import apaclLogoImage from '../../assets/APACL.png';

import { IoIosPaper } from 'react-icons/io';
import { TbVaccine } from 'react-icons/tb';
import { RiSurveyFill, RiWhatsappFill } from 'react-icons/ri'
import { FaBriefcaseMedical } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillPhone } from 'react-icons/ai';

import * as textContent from '../../text-content/index';

const AboutUsText = styled.div`
  font-family: system-ui, 
  -apple-system, 
  BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
  sans-serif;
  text-align: center;
`


const Img = styled.img`
  margin-left: 40px;
  width: 300px;
`;
const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`
const Info = styled.h1`
  transition: 0.3s;
  cursor: pointer;
  font-family: system-ui, 
  -apple-system, 
  BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
  sans-serif;
  &:hover {
    opacity: 0.7;
  }
  padding-top: 10px;
`;

const Infos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  

`;
const Service = styled.div`
  border-radius: 20px;
  border-style: solid;
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
    subtext: <Service> {textContent.Services}</Service>
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
    <div style={{ "overflow": "scroll;" }}>
      <Navbar />
      <Div>
        <Img src={apaclLogoImage} alt="" />
      </Div>
      <Infos>
        <AboutUsText>
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
      <Img src={apaclInfo} />
    </div>
  )
}