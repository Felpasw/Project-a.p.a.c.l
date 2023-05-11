import styled from 'styled-components';
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
import CatLookingUp from '../../assets/CatLookingUp.png'

import { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';


const Subtitle = styled.h1`
  align-self: center;
  max-width: 100%;
  font-size: 7vh;
  align-self: center;
  font-family: 'Jost', sans-serif;
  color:  #ffa722;
  text-transform: uppercase; 
  padding-top: 150px;
  margin: 2%;
`;

const Title = styled.h1`
  align-self: center;
  max-width: 100%;
  font-size: 7ch;
  align-self: center;
  margin-bottom: -10%;
  margin: 3%;
  font-family: 'Jost', sans-serif;
  color:  #ffff;
  text-transform: uppercase; 
`;

const Img = styled.img`
 align-self: center; 
 max-width: 100%;
 margin-right: 5%;
   @media (max-width: 999px) {
    margin-bottom: -10%;
  }
`;

const ContributeWaysSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding: auto;
  flex-wrap: wrap;
  margin-top: -7%;
  background-color: #ffff;
  border-radius: 100px;
`;

const ContributeWayTitle = styled.h1`
  font-family: 'Jost', sans-serif;
  color:  #ffa722;
  align-self: center;
  font-size: 5vh;
  margin: 7%;
  padding: 10%;
  max-width: 100%;
  width: 300px;
`;

const ContributeWay = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 5%;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

const ContributeWayImage = styled.img`
  border-radius: 5%;
  max-width: 100%;
  margin: 5%;
  width: 40vh;
  align-self: center;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
  padding: 3%;
`;

const TitleContent = styled.div`
  padding-top: 100px;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const CatImage = styled.img`
  max-width: 100%;
  padding: 5%;
  margin: 0.6%;
  z-index: 0;
  -webkit-filter: drop-shadow(0px 0px 5px rgba(0 0 0 / 90%)); 
        filter: drop-shadow(0px 0px 5px rgba(0 0 0 / 90%));
`;

const Icons = styled.button`
  padding: 2%;
  margin-left: 1%;
  margin-right: 1%;
  display: flex;
  align-self:center;
  border-radius: 20px;
  color: #ffa722;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  width: 100px;
  height: 60px;
  background: transparent;
  border: 3px solid #ffa722;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffa722;
    color: #ffff;
}
@media (max-width:999px) {
  width: 5vh;
  
}


`;

const ParnershipsTitle = styled.h1`
  font-size: 5vh;
  align-self: center;
  max-width: 100%;
  font-family: 'Jost', sans-serif;
  color:  #ffa722;
  text-transform: uppercase; 
`;

const IconText = styled.h1`
  align-self: center;
  margin: 4%;
  @media (max-width: 999px) {
    width: 2vh;
    font-size: 15px;
  }
`

const contributeWaysList =
  [
    {
      Name: <>Conceda uma ajuda financeira<RiMoneyDollarCircleFill /></>,
      textContent: textContent.Queries
    },
    {
      Name: <>Fatura de energia elétrica <RiBillFill /></>,
      textContent: textContent.Queries
    },
    {
      Name: <>Doe ração ou outros recursos <FaBone /></>,
      textContent: textContent.Queries
    },
    {
      Name: <>Doe notas fiscais <GiTwoCoins /></>,
      textContent: textContent.AboutReceiptDonation

    },
    {
      Name: <>Torne-se voluntário (a) <MdPeopleAlt /></>,
      textContent: textContent.Queries
    },
    {
      Name: <>Doe tampinhas ou lacres <GiBottleCap /></>,
      //Image:
      textContent: textContent.AboutBottleCapDonation
    }

  ]

const Arr =
  contributeWaysList.map((element) =>
    <ContributeWay>
      <div style={{ "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "width": "100%" }}>
        <ContributeWayTitle> {element.Name} </ContributeWayTitle>
        <ContributeWayImage />
      </div>
      <div style={{ "display": "flex", "flexDirection": "column" }}>
        <h2 style={{ "color": "#ffa722" }}>Como funciona? <HiOutlineInformationCircle /></h2>
        <p style={{ "margin": "3%" }}>{element.textContent} </p>
      </div>
      <hr />
    </ContributeWay>
  )






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
    }
    else if (Verify < 0) {
      setPosition(Arr.length - 1);
      console.log(Element);
      return;
    }
    else {
      setPosition(Verify);
      console.log(Element);
      return;
    }
  }

  return (
    <>
      <Navbar />
      <TitleContent>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.3 }}
          style={{
            "display": "flex",
            "flexDirection": "row",
            "justifyContent": "center",
            "flexWrap": "wrap",
            "margin": "auto",
            "paddingTop": "100px"

          }}
        >
          <Title> Nos ajude a ajudar!   </Title>
          <Img src={CatsAndDogs} />
        </motion.div>
      </TitleContent>

      <ContributeWaysSubtitle>
        <Subtitle>Formas de contribuição: </Subtitle>
      </ContributeWaysSubtitle>

      <Content>
        <Icons onClick={() => changeElement(-1, false)}><IconText><AiOutlineArrowLeft /></IconText></Icons>

        {isRightClicked &&
          <motion.div
            key={Position}
            style={{
              "display": "flex",
              "flexDirection": "row",
              "flexWrap": "wrap",
              "margin": "5%"
            }}

            initial={{ x: -300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1

            }}
            transition={{ duration: 0.75 }}
          >
            {Arr[Position]}

          </motion.div>

        }

        {!isRightClicked &&
          <motion.div
            key={Position}
            style={{
              "display": "flex",
              "flexDirection": "row",
              "flexWrap": "wrap",
              "margin": "5%"
            }}

            initial={{ x: 300, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1

            }}
            transition={{ duration: 0.75 }}
          >

            {Arr[Position]}

          </motion.div>
        }

        <Icons onClick={() => changeElement(+1, true)}><IconText><AiOutlineArrowRight /></IconText></Icons>
      </Content>

      <div style={{ "display": "flex", "flexDirection": "row", "flexWrap": "wrap" }}>
        <motion.div style={{ "margin": "0.6%", "padding": "5%" }}
          whileInView={{ opacity: 1 }}
          initial="hidden">
          <ParnershipsTitle>Conheça também nossas lojas parceiras!</ParnershipsTitle>
          <hr />
          <CatImage src={CatLookingUp} alt="" />
        </motion.div>
        <div style={{ "margin": "5%", "padding": "5%" }}>
        </div>
      </div>
      <Footer />
    </>
  )
}
