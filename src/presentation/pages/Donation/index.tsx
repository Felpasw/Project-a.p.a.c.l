import styled from 'styled-components';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CatsAndDogs from '../../assets/CatsAndDogs.png';
import { FaBone } from 'react-icons/fa';
import { RiBillFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiTwoCoins } from 'react-icons/gi';
import { MdPeopleAlt } from 'react-icons/md';
import { motion } from 'framer-motion';





const Subtitle = styled.h1`
  align-self: center;
  max-width: 100%;
  font-size: 4ch;
  align-self: center;
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

const DonationWays = styled.div`
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
const DonationWay = styled.button`
  padding: auto;
  margin-top: 15px;
  align-self:center;
  border-radius: 90px;
  color: #ffa722;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  height: 60px;
  width: 300px;
  background: transparent;
  border: 1px solid #ffa722;
  outline: none;
  transition: 0.5s ease-in-out;
  &:hover {
    transition: 0.5s ease-in-out;
    background: #ffa722;
    color: #ffff
}
`;

const TitleContent = styled.div`
  padding-top: 100px;
  background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
`;

const DonationWaysList =
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


export default function Donation() {
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
      <DonationWays>
        <Subtitle>Formas de contribuição: </Subtitle>
        {
          DonationWaysList.map((element) =>
            <DonationWay>
              <a href={`/:${element.Link}`} style={{ "textDecoration": "none", "color": "inherit" }}>
                {element.Icon} <br />
                {element.Name}
              </a>
            </DonationWay>
          )}
      </DonationWays>
      <Footer />
    </>
  )
}