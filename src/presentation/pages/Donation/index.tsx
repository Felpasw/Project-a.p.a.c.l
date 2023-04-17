import styled from 'styled-components';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import CloseDog from '../../assets/CloseDog.png';
import { FaBone } from 'react-icons/fa';
import { RiBillFill, RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiTwoCoins } from 'react-icons/gi';
import { MdPeopleAlt } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

{/* <Title>Ajude nossa instituição a ajudar você!</Title> */ }
const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  align-self: center;

`
const Title = styled.h1`
  align-self: center;
  max-width: 100%;
  font-size: 4ch;
  align-self: center;
  color:  #ad78fc;
  text-transform: uppercase; 
  margin: auto;
  padding: auto;
`;
const Img = styled.img`
 align-self: center; 
 max-width: 100%;
 width: 500px;
 padding-top: 100px;
 margin: auto;
 margin-right: 5%;
`;

const DonationWays = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding: auto;
`;
const DonationWay = styled.button`
  padding: auto;
  margin-top: 15px;
  align-self:center;
  border-radius: 90px;
  color: #ad78fc;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  height: 60px;
  width: 300px;
  background: transparent;
  border: 1px solid #ad78fc;
  outline: none;
  transition: 0.5s ease-in-out;
  &:hover {
    transition: 0.5s ease-in-out;
    background: #ad78fc;
    color: #ffff
}
`;

const DonationWaysList =
  [
    {
      Name: "Ajuda monetária",
      Icon: <RiMoneyDollarCircleFill />,
    },
    {
      Name: "Ajude por meio da conta de luz",
      Icon: <RiBillFill />
    },
    {
      Name: "Doe ração ou outros recursos",
      Icon: <FaBone />
    },
    {
      Name: "Doe suas notas fiscais",
      Icon: <GiTwoCoins />
    },
    {
      Name: "Seja um voluntário",
      Icon: <MdPeopleAlt />
    }

  ]


export default function Donation() {
  return (
    <>
      <Navbar />
      <MainContent>
        <Img src={CloseDog} />
        <AnimatePresence>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1.3 }}
            style={{
              "display": "flex",
              "flexDirection": "column",
              "justifyContent": "center",
              "flexWrap": "wrap",
              "margin": "auto",
              "padding": "auto"
            }}
          >
            <DonationWays>
              <Title>Formas de contribuição: </Title>
              {
                DonationWaysList.map((element) =>
                  <DonationWay>
                    {element.Icon} <br />
                    {element.Name}
                  </DonationWay>
                )}
            </DonationWays>
          </motion.div>
        </AnimatePresence>
      </MainContent>
      <Footer />
    </>
  )
}