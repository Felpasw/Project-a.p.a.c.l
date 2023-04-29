import styled from 'styled-components';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CatsAndDogs from '../../assets/CatsAndDogs.png';
import { FaBone } from 'react-icons/fa';
import { RiBillFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiTwoCoins } from 'react-icons/gi';
import { MdPeopleAlt } from 'react-icons/md';
import { motion } from 'framer-motion';
import AboutContribute from '../../components/WayToContribute';





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

const ContributeWays = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding: auto;
  flex-wrap: wrap;
  margin-top: -7%;
  background-color: #ffff;
  border-radius: 100px;
`;


const TitleContent = styled.div`
  padding-top: 100px;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
`;

const ContributeWaysList =
  [
    {
      Name: "Ajuda monetária",
      Icon: <RiMoneyDollarCircleFill />,
      Link: "Dinheiro"
    },
    {
      Name: "Ajude por meio da conta de luz",
      Icon: <RiBillFill />,
      Link: "Conta"
    },
    {
      Name: "Doe ração ou outros recursos",
      Icon: <FaBone />,
      Link: "Racao"
    },
    {
      Name: "Doe suas notas fiscais",
      Icon: <GiTwoCoins />,
      Link: "Notas"
    },
    {
      Name: "Seja um voluntário",
      Icon: <MdPeopleAlt />,
      Link: "Voluntario"
    }

  ]


export default function Contribute() {
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
      <ContributeWays>
        <Subtitle>Formas de contribuição: </Subtitle>
        {
          ContributeWaysList.map((element) =>
            <AboutContribute Icon={element.Icon} Name={element.Name} />

          )}
      </ContributeWays>
      <Footer />
    </>
  )
}