import * as S from './styles';
import { Input } from '../InputComponent';
import { useEffect, useState } from 'react';
import Events from '../../../@types/Events';
import { Axios } from '../../config/axios';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';

function ShowEventsAlreadyCreated(props: { element: Events }) {
  const zeroState = {
    _id: props.element._id,
    title: props.element.title,
    about: props.element.about,
    date: props.element.date,
    location: props.element.location,
  };

  const [isChanged, setIsChanged] = useState(false);
  const [formValues, setFormValues] = useState(zeroState);

  const handleRemove = async (_id: string, title: string) => {
    if (window.confirm(`Deseja realmente remover evento ${title}?`)) {
      try {
        await Axios.delete(`/Event/${_id}`);
        toast.success(`Sucesso ao remover o evento ${title}!`);
      } catch (error) {
        toast.error('Erro ao remover evento!');
        console.log(error);
      }
    }
  };

  const handleChange = (e: {
    target: { name: string; value: string };
  }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
    if (props.element === formValues) {
      setIsChanged(false);
    } else {
      setIsChanged(true);
    }
    console.log(isChanged);
  };

  const handlePut = () => {};

  return (
    <>
      <S.Title>Lista de eventos já cadastrados</S.Title>

      <div style={{ margin: '5%' }}>
        <h2>Título: </h2>
        <Input
          type="text"
          value={formValues.title}
          onChange={handleChange}
          name="title"
          id="title"
          placeholder="ex: Doação de animais, Evento de arrecadação"
        />
        <h2>Sobre: </h2>
        <S.TextArea
          value={formValues.about}
          onChange={handleChange}
          name="about"
          id="about"
        />
        <h2>Data: </h2>
        <Input
          type="date"
          value={formValues.date}
          onChange={handleChange}
          name="date"
          id="date"
        />
        <h2>Localização: </h2>
        <Input
          type="text"
          value={formValues.location}
          onChange={handleChange}
          name="location"
          id="location"
        />
        <S.Button
          onClick={() => handleRemove(props.element._id, props.element.title)}
        >
          {' '}
          Remover{' '}
        </S.Button>
        <AnimatePresence>
          {isChanged && (
            <S.DivButton>
              <S.Button onClick={() => handlePut}>Salvar alterações</S.Button>
            </S.DivButton>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default function EditEventsForm() {
  const zeroState = {
    _id: '',
    title: '',
    about: '',
    date: '',
    location: '',
  };
  const [Events, setEvents] = useState([] as Events[]);
  const [formValues, setFormValues] = useState(zeroState);

  useEffect(() => {
    getEvents();
  });

  const getEvents = async () => {
    const Events = await Axios.get('/Events').then(
      (response: { data: React.SetStateAction<Events[]> }) =>
        setEvents(response.data)
    );
    return Events;
  };

  const handleChange = (e: {
    target: { name: string; value: string };
  }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubimit = async () => {
    try {
      if (!formValues.title) {
        toast.error('Título não pode ficar em branco');
        return;
      }
      if (!formValues.date) {
        toast.error('Data não pode ficar em branco');
        return;
      }
      if (!formValues.location) {
        toast.error('Localização não pode ficar em branco');
        return;
      }
      if (Date.parse(formValues.date) < Date.now()) {
        toast.error('Data inválida!');
        return;
      }
      if (!formValues.about) {
        toast.error('Sobre o evento não pode ficar em branco');
        return;
      }

      await Axios.post('/Events', {
        title: formValues.title,
        date: formValues.date,
        location: formValues.location,
        about: formValues.about,
      });
      toast.success('Evento criado com sucesso!');
    } catch (error) {
      toast.error(`Erro ao criar evento!`);
      console.log(error);
    }
  };

  return (
    <S.Div>
      <S.Title>Editar informações dos eventos </S.Title>

      <S.InputAndLabel>
        <label htmlFor="name">Título do evento: </label>
        <Input
          type="text"
          onChange={handleChange}
          name="title"
          id="title"
          style={{ margin: '3%' }}
          placeholder="ex: Doação de animais, Evento de arrecadação"
        />
      </S.InputAndLabel>

      <S.InputAndLabel>
        <label htmlFor="date">Data do evento: </label>
        <Input
          style={{ margin: '3%' }}
          type="date"
          name="date"
          id="date"
          onChange={handleChange}
        />
      </S.InputAndLabel>

      <S.InputAndLabel>
        <label htmlFor="location">Localização: </label>
        <Input
          style={{ margin: '3%' }}
          type="localização"
          id="location"
          name="location"
          onChange={handleChange}
          placeholder="ex: Parque Barigui, Parque Tanguá "
        />
      </S.InputAndLabel>

      <label htmlFor="about">Sobre o evento: </label>
      <S.TextArea
        onChange={handleChange}
        name="about"
        id="about"
        placeholder="Digite aqui informações essenciais para o evento, curiosidades e adiversidades"
      />
      <S.Button onClick={handleSubimit}> Adicionar </S.Button>

      {Events.map((element: Events) => (
        <ShowEventsAlreadyCreated element={element} />
      ))}
    </S.Div>
  );
}
