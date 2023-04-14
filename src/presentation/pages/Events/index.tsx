import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styled from 'styled-components';
import { Fragment, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import CatEating from '../../assets/CatEating.png'

const Title = styled.h1`
   display: flex;
  align-self: center;
  padding-top: 100px;
  max-width: 100%;
  margin: auto;
  padding: auto;
  font-size: 5ch;
  font-family: 'Work Sans', sans-serif;
  text-transform: uppercase;
  right: auto;
  color:  #23232e;
  margin-bottom: -100px;
  padding-bottom: 0px;
`;


const EventList = [{
  Date: new Date().toLocaleDateString(),
  Title: "Evento de Doação",
  Local:
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.3722214845466!2d-49.31453518904501!3d-25.42581643263249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3d8762c9e71%3A0x5628b5d28d45bd5b!2sParque%20Barigui!5e0!3m2!1spt-BR!2sbr!4v1681229269424!5m2!1spt-BR!2sbr"
      style={{ "width": "600", "height": "450" }}
    ></iframe>,
  About: 'Evento que acontecerá no parque Barigui para doação de cães e gatos da casa, o evento acontecerá das 13h até as 16h30.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
}]

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
`;

const EventContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

`;
const EventContentText = styled.div`
  margin: auto;
  padding: auto;
  width: 300px;
`;
const EventSubtitle = styled.h2`

`;

const Img = styled.img`
  width: 400px;
  align-self: center;
`

const TitleContent = styled.div`
  display: flex;
  flex-direction: column;
`


function AnimatedSVG() {
  return (
    <motion.div> <IoIosArrowDown style={{ "maxWidth": "100%" }} /></motion.div>
  )
}


function AccordionItem({ About, Local, title, Date }: { About: string, Local: JSX.Element, title: string, Date: string }) {
  const [isOpened, setValue] = useState(false);
  const toggle = () => setValue((state: any) => !state);
  const parent = {
    variantA: { scale: 1 },
    variantB: { scale: 1.05, opacity: 0.5 }

  }



  return (
    <div>
      <motion.div
        style={{ "cursor": "pointer" }}
        variants={parent}
        initial="variantA"
        whileHover="variantB">
        <div style={{ "display": "flex", "flexDirection": "row" }}>
          <EventTitle onClick={toggle}> {title} </EventTitle>
          <AnimatedSVG />
        </div>
        <hr />
      </motion.div>
      {isOpened &&
        <AnimatePresence>
          <motion.div
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1.3 }}
          >
            <EventContent>

              <EventContentText>
                <EventSubtitle> Sobre: </EventSubtitle>
                {About}
                <EventSubtitle> Data: </EventSubtitle>
                {Date}
              </EventContentText>
              <EventContentText>
                <EventSubtitle>Local do evento: </EventSubtitle>
                {Local}
              </EventContentText>
            </EventContent>
          </motion.div>
        </AnimatePresence>
      }
    </div>
  );
}


export default function Events() {



  return (
    <Fragment>
      <Navbar />
      <TitleContent style={{ "display": "flex" }}>
        <Title>Eventos</Title>
        <Img src={CatEating} />
      </TitleContent>
      <EventsDiv>
        {
          EventList.map((event) =>
            <AccordionItem Local={event.Local} About={event.About} title={event.Title} Date={event.Date} />
          )}
      </EventsDiv>
      <Footer />
    </Fragment>
  )
}