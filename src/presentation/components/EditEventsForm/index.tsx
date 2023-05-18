import styled from 'styled-components';
import { Input } from '../InputComponent';
import { useEffect, useState } from 'react';
import Events from '../../../@types/Events';
import { Axios } from '../../config/axios';
import { toast } from 'react-toastify';

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

const zeroState = {
  _id: "",
  title: "",
  about: "",
  date: "",
  location: ""
}

function ShowSaveButton(props: { element: Events }) {
  const [isChanged, setIsChanged] = useState(false);
  return (
    <div style={{ margin: "5%" }}>
      <h2>Título: </h2>
      <Input type="text" value={props.element.title} onChange={() => setIsChanged(true)} />
      <h2>Sobre: </h2>
      <Input type="text" value={props.element.about} />
      <h2>Data: </h2>
      <Input type="text" value={props.element.date} />
      <h2>Localização: </h2>
      <Input type="text" value={props.element.location} />
      {
        isChanged && <Button>Salvar alterações</Button>
      }
    </div>
  )


}

export default function EditEventsForm() {
  const [formValues, setFormValues] = useState(zeroState);
  const [Events, setEvents] = useState([] as Events[]);

  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value })
  }

  useEffect(() => {
    getEvents();
  })

  const getEvents = async () => {
    const Events = await Axios.get('/Events').then((response: { data: React.SetStateAction<Events[]>; }) => setEvents(response.data));
    return Events;
  }

  const handleSubimit = () => {
    console.log(Events)
  }

  const handleRemove = async (_id: string, title: string) => {
    if (window.confirm(`Deseja realmente remover evento ${title}?`)) {
      try {

        await Axios.delete(`/Event/${_id}`);
        toast.success(`Sucesso ao remover o evento ${title}!`);

      } catch (error) {

        toast.error("Erro ao apagar evento!");
        console.log(error);

      }

    }
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


      <Title>Lista de eventos já cadastrados</Title>
      {
        Events.map((element) =>
          <ShowSaveButton element={element} />
        )}





    </Div >
  )
}