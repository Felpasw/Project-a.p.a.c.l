import { Fragment, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import apaclInfo from '../../assets/APACLinfo.png';
import { IoIosPaper } from 'react-icons/io';
import { TbVaccine } from 'react-icons/tb';
import { RiSurveyFill } from 'react-icons/ri'
import { FaBriefcaseMedical } from 'react-icons/fa';
import { MdOutlinePermContactCalendar } from 'react-icons/md';
import { RiContactsFill } from 'react-icons/ri';
import { AnimatePresence, motion } from 'framer-motion';


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
const Atendimento = styled.div`
  display: flex;
`;
export default function AboutUs() {
  const [isVisible, setIsVisable] = useState([false, false, false, false, false]);

  const changeVisibility = (BA: boolean, i: number): void => {
    if (isVisible[i]) {
    }

  }
}

return (
  <Fragment>
    <Navbar />
    <Infos>
      <Info onClick={changeVisibility(isVisible[0], 0)}>Consultas <IoIosPaper /></Info>
      <br />
      <Info onClick={changeVisibility(isVisible[1], 1)}>Vacinas <TbVaccine /></Info>
      <br />
      <Info onClick={changeVisibility(isVisible[2], 2)}>Procedimentos Cirúrgicos <RiSurveyFill /></Info>
      <br />
      <Info onClick={changeVisibility(isVisible[3], 3)}>Atendimento <FaBriefcaseMedical /></Info>
      <Info onClick={changeVisibility(isVisible[4], 4)}>Contato <RiContactsFill /> </Info>
    </Infos>
    <Img src={apaclInfo} />
  </Fragment>
)
}