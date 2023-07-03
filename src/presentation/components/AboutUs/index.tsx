import { ReactNode, useState } from 'react';
import * as S from './styles';
import { AnimatePresence, motion } from 'framer-motion';

import apaclLogoImage from '../../assets/APACL.png';
import InfoCatImage from '../../assets/InfoCatImage.png';
import InfoHorseImage from '../../assets/InfoHorseImage.png';
import InfoCatImage2 from '../../assets/InfoCatImage2.png';
import InfoDogCatImage from '../../assets/InfoDogCatImage.png';

import { IoIosPaper } from 'react-icons/io';
import { TbVaccine } from 'react-icons/tb';
import { RiSurveyFill } from 'react-icons/ri';
import { FaBriefcaseMedical } from 'react-icons/fa';

import * as textContent from '../../text-content/index';

const informationList = [
  {
    text: 'Vacinas',
    icon: <TbVaccine />,
    subtext: <S.Service> {textContent.Vaccines}</S.Service>,
    Image: <S.CatImage src={InfoCatImage} alt="" />,
  },
  {
    text: 'Consultas',
    icon: <IoIosPaper />,
    subtext: <S.Service> {textContent.Queries}</S.Service>,
    Image: <S.HorseImage src={InfoHorseImage} alt="" />,
  },
  {
    text: 'Cirurgias',
    icon: <RiSurveyFill />,
    subtext: <S.Service> {textContent.Surgeries}</S.Service>,
    Image: <S.CatImage2 src={InfoCatImage2} alt="" />,
  },
  {
    text: 'Atendimento',
    icon: <FaBriefcaseMedical />,
    subtext: <S.Service> {textContent.Services}</S.Service>,
    Image: <S.DogCatImage src={InfoDogCatImage} alt="" />,
  },
];

function AccordionItem({
  text,
  subtext,
  icon,
  Image,
}: {
  text: string;
  subtext: JSX.Element;
  icon: ReactNode;
  Image: JSX.Element;
}) {
  const [isOpened, setValue] = useState(false);
  const toggle = () => setValue((state) => !state);

  return (
    <S.Service>
      <S.Info onClick={toggle} style={{ marginRight: '3px' }}>
        {Image} <br />
        {text} {icon}
      </S.Info>
      {isOpened && (
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
      )}
    </S.Service>
  );
}

export default function AboutUs() {
  const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.05 },
  };

  return (
    <S.Div>
      <S.AboutUsDiv>
        <S.Img src={apaclLogoImage} alt="" />
        <S.AboutUsText>
          <h1>Sobre nós </h1>
          {textContent.AboutUsText}
        </S.AboutUsText>
      </S.AboutUsDiv>
      <S.Infos>
        {informationList.map((information) => (
          <motion.div
            variants={parent}
            initial="variantA"
            whileHover="variantB"
          >
            <AccordionItem
              text={information.text}
              subtext={information.subtext}
              icon={information.icon}
              Image={information.Image}
            />
          </motion.div>
        ))}
      </S.Infos>
    </S.Div>
  );
}
