import { Fragment, ReactNode, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import { motion } from 'framer-motion';

import apaclInfo from '../../assets/APACLinfo.png';

import { IoIosPaper } from 'react-icons/io';
import { TbVaccine } from 'react-icons/tb';
import { RiSurveyFill } from 'react-icons/ri'
import { FaBriefcaseMedical } from 'react-icons/fa';
import { RiContactsFill } from 'react-icons/ri';


import * as textContent from '../../text-content/index';

const Img = styled.img`


`;

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


const informationList = [
  {
    id: "0",
    text: "Vacinas",
    icon: <TbVaccine />,
    subtext: "Vacinas"
  },
  {
    id: "1",
    text: "Consultas",
    icon: <IoIosPaper />,
    subtext: "Vacinas"
  },
  {
    id: "2",
    text: "Procedimentos Cirúrgicos",
    icon: <RiSurveyFill />,
    subtext: "Vacinas"
  },
  {
    id: "3",
    text: "Atendimento",
    icon: <FaBriefcaseMedical />,
    subtext: "Vacinas"
  },
  {
    id: "4",
    text: "Contato",
    icon: <RiContactsFill />,
    subtext: "Vacinas"
  },

]


const AboutUsText = styled.div`
  font-family: system-ui, 
  -apple-system, 
  BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
  sans-serif;
  text-align: center;
`

function AccordionItem({ text, subtext, icon }: { text: string, subtext: string, icon: ReactNode }) {
  const [isOpened, setValue] = useState(false);
  const toggle = () => setValue((state) => !state);

  return (
    <div>
      <Info onClick={toggle}>{text} {icon}</Info>
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
    </Fragment >
  )
}