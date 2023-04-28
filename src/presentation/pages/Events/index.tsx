import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styled from 'styled-components';

import { Fragment } from 'react';
import { motion } from 'framer-motion';

import DogSit from '../../assets/DogSit.png';
import CatEating from '../../assets/CatEating.png';

import { MdDateRange, MdOutlineShareLocation } from 'react-icons/md';
import { HiInformationCircle } from 'react-icons/hi';


const EventList = [{
  Date: new Date().toLocaleDateString(),
  Title: "Evento de Doação",
  Local:
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3722214845466!2d-49.31453518904501!3d-25.42581643263249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3d8762c9e71%3A0x5628b5d28d45bd5b!2sParque%20Barigui!5e0!3m2!1spt-BR!2sbr!4v1681229269424!5m2!1spt-BR!2sbr"
      style={{ "width": "600", "height": "450" }}
    ></iframe>,
  About: 'Evento que acontecerá no parque Barigui para doação de cães e gatos da casa, o evento acontecerá das 13h até as 16h30.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
}]


const Title = styled.h1`
   display: flex;
  align-self: center;
  max-width: 100%;
  margin: 5%;
  padding: auto;
  font-size: 6ch;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  right: auto;
  color:#ffa722;

`;

const MainTitle = styled.h1`
  display: flex;
  align-self: center;
  max-width: 100%;
  padding: auto;
  font-size: 7ch;
  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  color:#ffff;
  align-self: center;
  margin: 5%;
  padding-top: 100px;
  
`;

const EventsDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap; 
  border-radius: 100%;
  justify-content: space-around;
`;

const EventTitle = styled.h1`
  white-space: nowrap;
  text-overflow: ellipsis;
  color:  #ffa722;
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const EventContentText = styled.div`
  margin: auto;
  padding: 100px;
  width: 300px;
  padding-top: 25px;
  padding-left: 25px;

`;
const EventSubtitle = styled.h2`
  color: #ffa722;
`;

const Img = styled.img`
  padding-top: 100px;
  max-width: 100%;
  width: 350px;
  margin: 5%;
  align-self: center;
  margin-top: -10%;
  @media (max-width: 999px) {
    margin-bottom: -0.2%;
  }
  `;
const Subtitle = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 12%;
  margin-top: -10.2%;
  background-color: #ffff;
  z-index: 0;
`
const CatImage = styled.img`
  border-radius: 100%;
  background-color:  #ffa722;
  align-self: center;
  max-width: 100%;
  padding: auto;
  margin: auto; 
`;
const MainContent = styled.div`
    background: -webkit-gradient(linear, left top, right top, from(#ffa722), to(#ffd801)) no-repeat;
`;


function Itens({ About, Local, title, Date }: { About: string, Local: JSX.Element, title: string, Date: string }) {

  return (
    <div>
      <div style={{ "display": "flex", "flexDirection": "row" }}>
        <EventTitle> {title} </EventTitle>
      </div>
      <hr style={{ "color": " #ffa722" }} />
      <EventContent>
        <EventContentText>
          <EventSubtitle> Sobre <HiInformationCircle /></EventSubtitle>
          {About}
          <EventSubtitle style={{ "paddingTop": "25px" }}> Data <MdDateRange /> </EventSubtitle>
          {Date}
        </EventContentText>
        <EventContentText>
          <EventSubtitle> Local <MdOutlineShareLocation /> </EventSubtitle>
          {Local}
        </EventContentText>
      </EventContent>
    </div>
  );
}


export default function Events() {

  return (
    <>
      <Navbar />
      <MainContent>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ delay: 0.2, duration: 1.3 }}
          style={{ "display": "flex", "flexDirection": "column" }}
        >
          <MainTitle>Saiba mais sobre nossos eventos!</MainTitle >
          <Img src={DogSit} />
        </motion.div>

      </MainContent>
      <Subtitle>
        <Title>Próximos eventos: </Title>
      </Subtitle>
      <EventsDiv>
        {
          EventList.map((event) =>
            <Itens Local={event.Local} About={event.About} title={event.Title} Date={event.Date} />
          )}
      </EventsDiv>
      <div style={{ "display": "flex", "margin": "auto", "padding": "auto" }}>
        <CatImage src={CatEating} />
      </div>
      <Footer />
    </>
  )
}