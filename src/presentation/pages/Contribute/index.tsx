import styled from 'styled-components';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { HiOutlineInformationCircle } from 'react-icons/hi';
import { FaBone } from 'react-icons/fa';
import { RiBillFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiBottleCap, GiTwoCoins } from 'react-icons/gi';
import { MdPeopleAlt } from 'react-icons/md';
import { motion, useInView } from 'framer-motion';

import * as textContent from '../../text-content';

import DogEating from '../../assets/DogEating.png';
import MoneyCat from '../../assets/MoneyCat.png';
import CatsAndDogs from '../../assets/CatsAndDogs.png';
import DogAndCat from '../../assets/DogAndCat.png';
import Puppy from '../../assets/Puppy.png'
import { useState } from 'react';
import { BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs';


const Subtitle = styled.h1`
  align-self: center;
  max-width: 100%;
  font-size: 4ch;
  align-self: center;
  font-family: 'Jost', sans-serif;
  color:  #ffa722;
  text-transform: uppercase; 
  padding-top: 150px;
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
  font-size: 4vh;
  margin: 5%;
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

const ContributeWayContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 5%;
`;

const Carousel = styled.div`
  width: 35rem;
  height: 22rem;
  position: relative;
  display: flex;
  margin: 5%;
  overflow: auto;
  scroll-snap-type: x mandatory;
`;

const CarouselImages = styled.img`
  width: 100%;
  height: 100%;
  position: sticky;
  left: 0;
  flex-shrink: 0;
  object-fit: cover;
  scroll-snap-align: start;
`;

const ContributeWayImage = styled.img`
  border-radius: 5%;
  max-width: 100%;
  margin: 5%;
  width: 40vh;
  align-self: center;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
  padding: 3%;
`

const TitleContent = styled.div`
  padding-top: 100px;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Icons = styled.h1`
  color: #ffa722;
  align-self: center;
  margin: 5%;
  font-size: 50px;
  cursor: pointer;
`

const ContributeWaysList =
  [
    {
      Name: "Ajuda monetária",
      Icon: <RiMoneyDollarCircleFill />,
      Image: MoneyCat,
      textContent: ""
    },
    {
      Name: "Ajude por meio da conta de luz",
      Icon: <RiBillFill />,
      Image: DogAndCat,
      textContent: ""
    },
    {
      Name: "Doe ração ou outros recursos",
      Icon: <FaBone />,
      Image: DogEating,
      textContent: ""
    },
    {
      Name: "Doe suas notas fiscais",
      Icon: <GiTwoCoins />,
      Image: Puppy,
      textContent: ""

    },
    {
      Name: "Seja um voluntário",
      Icon: <MdPeopleAlt />,
      // Image: [IMG1, IMG2]
      textContent: ""
    },
    {
      Name: "Doe tampinhas de garrafa",
      Icon: <GiBottleCap />,
      //Image:
      textContent: ""
    }

  ]

const Arr =
  ContributeWaysList.map((element) =>
    <ContributeWay>
      <div style={{ "display": "flex", "flexDirection": "row", "flexWrap": "wrap", "width": "100%" }}>
        <ContributeWayTitle> {element.Name} {element.Icon} </ContributeWayTitle>
        <ContributeWayImage src={element.Image} />
      </div>

      <ContributeWayContent>
        <div style={{ "display": "flex", "flexDirection": "column" }}>
          <h2 style={{ "color": "#ffa722" }}>Como funciona? <HiOutlineInformationCircle /></h2>
          <p style={{ "margin": "5%" }}>{textContent.Queries} </p>
        </div>
      </ContributeWayContent>
      <hr />
    </ContributeWay>
  )







export default function Contribute() {
  const [Element, setElement] = useState(0);
  const changeElement = (num: number) => {
    let Verify = Element + num

    if (Verify > Arr.length - 1) {
      setElement(0);
      console.log(Element);
      return;
    }
    else if (Verify < 0) {
      setElement(Arr.length - 1);
      console.log(Element);
      return;
    }
    else {
      setElement(Verify);
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
        <Icons><BsFillArrowLeftSquareFill onClick={() => changeElement(-1)} /></Icons>
        {Arr[Element]}
        <Icons><BsFillArrowRightSquareFill onClick={() => changeElement(+1)} /></Icons>
      </Content>
      <Footer />
    </>
  )
}
function useRef(arg0: null) {
  throw new Error('Function not implemented.');
}

