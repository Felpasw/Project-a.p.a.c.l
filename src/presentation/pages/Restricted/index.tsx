import styled from 'styled-components';
import { Input } from '../../components/InputComponent';
import APACL from '../../assets/APACL.png'
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { SiDatadog } from 'react-icons/si';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Title = styled.h1`
  font-family: 'Jost', sans-serif;
  align-self: center;
  margin: 2%;
`;

const Subtitle = styled.h2`
  font-family: 'Jost', sans-serif;
`;

const Img = styled.img`
  width: 30vh;
`;

const TextArea = styled.textarea`
  resize: none;
  height: 50vh;
`

const Accordion = styled(motion.div)`
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  margin: 5%;
  padding: 5%;
  flex-direction: column;
  border: 4px solid black;
  border-radius: 60px;
  max-width: 100%;
  width: 100vh;
  height: 20vh;
  justify-content: center;
`;

const DIV = styled.div`
  display: flex;
  flex-direction: row;
`;


const ElementsList =
  [
    {
      Name: <h3>Alterar conteúdo de pets <SiDatadog /> </h3>,
      Content: () => {
        const zeroState = {
          Name: "",
          History: "",
          Gender: "Masculino",
          InHouseSince: ""
        }
        const [formValues, setFormValues] = useState(zeroState);
        const handleChange = (e: { target: { name: string; value: string; }; }): void => {
          let name = e.target.name;
          let value = e.target.value;
          setFormValues({ ...formValues, [name]: value })
        }
        const handleSubimit = () => {

        }

        return (
          <Div>
            <DIV>
              <label htmlFor="Name">Nome: </label>
              <Input type="text" onChange={handleChange} onSubmit={handleSubimit} name='Name' id='Name' />
              <label htmlFor="Gender">Gênero: </label>
              <Input type="text" onChange={handleChange} onSubmit={handleSubimit} name='Gender' id='Gender' />
            </DIV>
            <label htmlFor="Name">História do animal: </label>
            <TextArea onChange={handleChange} onSubmit={handleSubimit} name='History' id='History' />
          </Div>
        )

      }

    },
    {
      Name: <h3>Alterar conteúdo dos eventos <SiDatadog /> </h3>,
      Content: () => {
        return (
          <>
          </>
        )
      }
    }
  ]




function AccordionItem({ Name, Content }: { Name: JSX.Element, Content: () => JSX.Element }) {
  const [isOpened, setValue] = useState(false);
  const toggle = () => setValue((state) => !state);

  return (
    <>
      <div onClick={toggle} style={{ cursor: "pointer" }}>{Name}</div>
      <AnimatePresence>

        {isOpened &&
          <Accordion
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ delay: 0.2, duration: 1.3 }}
          >
            <Content />
          </Accordion>
        }
      </AnimatePresence>
    </>

  );
}





export default function Restricted() {
  console.log(sessionStorage.getItem("token"));
  return (
    <Content>
      <Img src={APACL} alt="" />
      <Title>Bem vindo(a) ao gerenciamento de conteúdo do site da APACL!</Title>
      <Subtitle>Qual conteúdo deseja alterar?</Subtitle>
      {ElementsList.map((Element) =>

        <AccordionItem Name={Element.Name} Content={Element.Content} />
      )}


    </Content>
  )
}