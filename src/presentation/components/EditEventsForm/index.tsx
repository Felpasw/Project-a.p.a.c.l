import styled from 'styled-components';
import { Input } from '../InputComponent';
import { useEffect, useState } from 'react';
import Events from '../../../@types/Events';
import { Axios } from '../../config/axios';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';

const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  width: 52vh;
  height: 300px;
  resize: none;
  border-radius: 10px ;
`;

const Title = styled.h4`
  align-self: center;
  margin: 5%;
  padding: 5%;
  max-width: 100%;
 color: #ffa722;
`;

const DivButton = styled(motion.div)`
  
`


const Button = styled.button`
  padding: auto;
  margin-top: 15px ;
  align-self: start;
  border-radius: 100px;
  color: #ffa722;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  width: 50vh;
  background: transparent;
  border: 3px solid #ffa722;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffa722;
    color: #ffff;
}
`;

const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
`;



function ShowEventsAlreadyCreated(props: { element: Events }) {
  const zeroState = {
    _id: props.element._id,
    title: props.element.title,
    about: props.element.about,
    date: props.element.date,
    location: props.element.location
  }

  const [isChanged, setIsChanged] = useState(false);
  const [formValues, setFormValues] = useState(zeroState);


  const handleRemove = async (_id: string, title: string) => {
    if (window.confirm(`Deseja realmente remover evento ${title}?`)) {
      try {

        await Axios.delete(`/Event/${_id}`);
        toast.success(`Sucesso ao remover o evento ${title}!`);

      } catch (error) {

        toast.error("Erro ao remover evento!");
        console.log(error);

      }

    }
  }

  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value })
    if (props.element === formValues) {
      setIsChanged(false)
    }
    else {
      setIsChanged(true)
    }
    console.log(isChanged)
  }

  const handlePut = () => {

  }


  return (
    <>
      <Title>Lista de eventos já cadastrados</Title>

      <div style={{ margin: "5%" }}>
        <h2>Título: </h2>
        <Input type="text" value={formValues.title} onChange={handleChange} name='title' id='title' />
        <h2>Sobre: </h2>
        <TextArea value={formValues.about} onChange={handleChange} name='about' id='about' />
        <h2>Data: </h2>
        <Input type="date" value={formValues.date} onChange={handleChange} name='date' id='date' />
        <h2>Localização: </h2>
        <Input type="text" value={formValues.location} onChange={handleChange} name='location' id='location' />
        <Button onClick={() => handleRemove(props.element._id, props.element.title)}> Remover </Button>
        <AnimatePresence>
          {
            isChanged &&
            <DivButton
            >
              <Button onClick={() => handlePut}>Salvar alterações</Button>
            </DivButton>
          }
        </AnimatePresence>

      </div>

    </>
  )

}




export default function EditEventsForm() {

  const zeroState = {
    _id: "",
    title: "",
    about: "",
    date: "",
    location: ""
  }
  const [Events, setEvents] = useState([] as Events[]);
  const [formValues, setFormValues] = useState(zeroState);

  useEffect(() => {
    getEvents();
  }, [Events])

  const getEvents = async () => {
    const Events = await Axios.get('/Events').then((response: { data: React.SetStateAction<Events[]>; }) => setEvents(response.data));
    return Events;
  }




  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubimit = () => {
  }



  return (
    <Div>
      <Title>Editar informações dos eventos </Title>

      <InputAndLabel >
        <label htmlFor="name" >Título do evento: </label>
        <Input type="text" onChange={handleChange} name='title' id='title' style={{ margin: "3%" }} />
      </InputAndLabel>

      <InputAndLabel>
        <label htmlFor="date" >Data do evento: </label>
        <Input style={{ margin: "3%" }} type='date' name="date" id='date' onChange={handleChange} />
      </InputAndLabel>

      <InputAndLabel>
        <label htmlFor="location" >Localização: </label>
        <Input style={{ margin: "3%" }} type='localização' id='location' name='location' onChange={handleChange} />
      </InputAndLabel>

      <label htmlFor="History">Sobre o evento: </label>
      <TextArea onChange={handleChange} name='History' id='History' />
      <Button onClick={handleSubimit}> Adicionar </Button>


      {
        Events.map((element: Events) =>
          <ShowEventsAlreadyCreated element={element} />
        )}


    </Div >
  )
}