import * as S from './styles';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaBone } from 'react-icons/fa';
import { RiBillFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiBottleCap, GiTwoCoins } from 'react-icons/gi';
import { MdPeopleAlt } from 'react-icons/md';
import { motion } from 'framer-motion';

import * as textContent from '../../text-content';

import CatsAndDogs from '../../assets/CatsAndDogs.png';
import CatLookingUp from '../../assets/CatLookingUp.png';

import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const contributeWaysList = [
  {
    Name: (
      <>
        Conceda uma ajuda financeira
        <RiMoneyDollarCircleFill />
      </>
    ),
    textContent: textContent.Queries,
  },
  {
    Name: (
      <>
        Fatura de energia elétrica <RiBillFill />
      </>
    ),
    textContent: textContent.Queries,
  },
  {
    Name: (
      <>
        Doe ração ou outros recursos <FaBone />
      </>
    ),
    textContent: textContent.Queries,
  },
  {
    Name: (
      <>
        Doe notas fiscais <GiTwoCoins />
      </>
    ),
    textContent: textContent.AboutReceiptDonation,
  },
  {
    Name: (
      <>
        Torne-se voluntário (a) <MdPeopleAlt />
      </>
    ),
    textContent: textContent.Queries,
  },
  {
    Name: (
      <>
        Doe tampinhas ou lacres <GiBottleCap />
      </>
    ),
    //Image:
    textContent: textContent.AboutBottleCapDonation,
  },
];

const Arr = contributeWaysList.map((element) => (
  <S.ContributeWay>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
      }}
    >
      <S.ContributeWayTitle> {element.Name} </S.ContributeWayTitle>
      <S.ContributeWayImage />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h2 style={{ color: '#ffa722' }}>
        Como funciona? <HiOutlineInformationCircle />
      </h2>
      <p style={{ margin: '3%' }}>{element.textContent} </p>
    </div>
    <hr />
  </S.ContributeWay>
));

export default function Contribute() {
  const [Position, setPosition] = useState(0);
  const [isRightClicked, setisRightClicked] = useState(false);

  const changeElement = (num: number, isRightdirection: boolean) => {
    let Verify = Position + num;
    setisRightClicked(!isRightdirection);

    if (Verify > Arr.length - 1) {
      setPosition(0);
      console.log(Element);
      return;
    } else if (Verify < 0) {
      setPosition(Arr.length - 1);
      console.log(Element);
      return;
    } else {
      setPosition(Verify);
      console.log(Element);
      return;
    }
  };

  return (
    <>
      <Navbar />
      <S.TitleContent>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.3 }}
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: 'auto',
            paddingTop: '100px',
          }}
        >
          <S.Title> Nos ajude a ajudar! </S.Title>
          <S.Img src={CatsAndDogs} />
        </motion.div>
      </S.TitleContent>

      <S.ContributeWaysSubtitle>
        <S.Subtitle>Formas de contribuição: </S.Subtitle>
      </S.ContributeWaysSubtitle>

      <S.MobileContent>
        {Arr.map((element) => [<>{element}</>])}
      </S.MobileContent>

      <S.Content>
        <S.Icons onClick={() => changeElement(-1, false)}>
          <S.IconText>
            <AiOutlineArrowLeft />
          </S.IconText>
        </S.Icons>

        {isRightClicked && (
          <motion.div
            key={Position}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: '5%',
            }}
            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.75 }}
          >
            {Arr[Position]}
          </motion.div>
        )}

        {!isRightClicked && (
          <motion.div
            key={Position}
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              margin: '5%',
            }}
            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            transition={{ duration: 0.75 }}
          >
            {Arr[Position]}
          </motion.div>
        )}

        <S.Icons onClick={() => changeElement(+1, true)}>
          <S.IconText>
            <AiOutlineArrowRight />
          </S.IconText>
        </S.Icons>
      </S.Content>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <motion.div
          style={{ margin: '0.6%', padding: '5%' }}
          whileInView={{ opacity: 1 }}
          initial="hidden"
        >
          <S.ParnershipsTitle>
            Conheça também nossas lojas parceiras!
          </S.ParnershipsTitle>
          <hr />
          <S.CatImage src={CatLookingUp} alt="" />
        </motion.div>
        <div style={{ margin: '5%', padding: '5%' }}></div>
      </div>
      <Footer />
    </>
  );
}
