import { useState, useEffect, useCallback } from 'react';
import { Input } from '../InputComponent';
import * as S from './styles';
import { Axios } from '../../config/axios';
import Pet from '../../../@types/Pets';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { toast } from 'react-toastify';
import Pets from '../../../@types/Pets';
import { motion } from 'framer-motion';
import { TbDog } from 'react-icons/tb';
import { GiHollowCat } from 'react-icons/gi';

function ShowPetsAlreadyCreated(props: { element: Pets }) {
  const zeroState = {
    name: props.element.name,
    history: props.element.history,
    gender: props.element.gender,
    inHouseSince: props.element.inHouseSince,
    type: props.element.type,
  };
  const [isChanged, setIsChanged] = useState(false);
  const [formValues, setFormValues] = useState(zeroState);
  const [selectedFile, setSelectedFile] = useState('');

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
  };
  const handleRemove = async (_id: string, name: string) => {
    try {
      if (window.confirm(`Deseja mesmo remover pet ${name}?`)) {
        await Axios.delete(`/Pets/${_id}`);
        toast.success(`Pet de nome ${name} deletado com sucesso!`);
      } else {
        return;
      }
    } catch (error) {
      toast.error('Erro ao deletar pet!');
      console.log(error);
    }
  };

  const handlePut = async (element: Pets) => {};
  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  const changeGender = () => {
    console.log(formValues.gender);
    if (formValues.gender === 'Feminino') {
      setFormValues({ ...formValues, gender: 'Masculino' });
      return;
    }
    setFormValues({ ...formValues, gender: 'Feminino' });
    return;
  };

  const changeType = () => {
    console.log(formValues.type);
    if (formValues.type === 'Gato') {
      setFormValues({ ...formValues, type: 'Cachorro' });
      return;
    }
    setFormValues({ ...formValues, type: 'Gato' });
    return;
  };

  return (
    <S.Container>
      <S.Img src={props.element.urlImage} alt="" />
      <Input type="file" onChange={handleFileChange} />
      <S.InputAndLabel>
        Na casa desde:
        <Input
          type="date"
          onChange={handleChange}
          name="inHouseSince"
          value={formValues.inHouseSince}
        />
      </S.InputAndLabel>
      <div>
        {formValues.type === 'Gato' ? (
          <h3 style={{ margin: '5%' }}>
            {formValues.type}
            <GiHollowCat />
          </h3>
        ) : (
          <h3 style={{ margin: '5%' }}>
            {formValues.type}
            <TbDog />
          </h3>
        )}
        <S.Button style={{ width: '10vh' }} onClick={changeType}>
          Trocar
        </S.Button>
      </div>
      {formValues.gender === 'Masculino' ? (
        <h3 style={{ margin: '5%' }}>
          Sexo: {formValues.gender} <BsGenderMale style={{ color: 'blue' }} />
        </h3>
      ) : (
        <h3 style={{ margin: '5%' }}>
          Sexo: {formValues.gender}
          <BsGenderFemale style={{ color: 'hotpink' }} />
        </h3>
      )}
      <S.Button style={{ width: '10vh' }} onClick={changeGender}>
        Trocar
      </S.Button>

      <S.Button
        onClick={() => handleRemove(props.element._id, props.element.name)}
      >
        Remover
      </S.Button>
      {isChanged && (
        <motion.div>
          <S.Button onClick={() => handlePut}> Salvar alterações </S.Button>
        </motion.div>
      )}
    </S.Container>
  );
}

const zeroState = {
  name: '',
  history: '',
  gender: '',
  inHouseSince: '',
  type: '',
};

export default function EditPetsForm() {
  const [formValues, setFormValues] = useState(zeroState);
  const [Pets, setPets] = useState([] as Pet[]);
  const [selectedFile, setSelectedFile] = useState('');

  const handleChange = (e: {
    target: { name: string; value: string };
  }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    getPets();
  });

  const getPets = async () => {
    const pets = Axios.get('/Pets').then(
      (response: { data: React.SetStateAction<Pet[]> }) =>
        setPets(response.data)
    );
    return pets;
  };

  const handleSubimit = async () => {
    const { name, history, gender, type, inHouseSince } = formValues;

    if (!name) {
      toast.error('Pet precisa ter um nome!');
      return;
    }
    if (!history) {
      toast.error('Pet precisa ter uma história!');
      return;
    }
    if (!gender) {
      toast.error('Pet precisa ter um gênero!');
      return;
    }
    if (!type) {
      toast.error('Pet precisa ter um tipo especificado!');
      return;
    }
    if (!selectedFile) {
      toast.error('Pet precisa ter uma imagem!');
      return;
    }
    if (!inHouseSince) {
      toast.error('Pet precisa de uma data em que entrou!');
      return;
    }

    try {
      await Axios.post(
        '/Pets',
        { name, history, gender, type, image: selectedFile },
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );
      toast.success('Pet cadastrado com sucesso!');
    } catch (error) {
      toast.error('Erro ao cadastrar pet!');
      console.log(error);
    }
  };

  const handleFileChange = (e: any) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <S.Div>
      <S.Title>Editar informações dos animais </S.Title>

      <S.InputAndLabel>
        <label htmlFor="name">Nome: </label>
        <Input
          type="text"
          onChange={handleChange}
          name="name"
          id="name"
          style={{ margin: '3%' }}
          placeholder="ex: Beringela, Belinha"
        />
      </S.InputAndLabel>

      <S.RadioInputs>
        Gênero <br />
        <S.RadioInput
          type="radio"
          onChange={handleChange}
          name="gender"
          id="F"
          value={'Feminino'}
        />
        <label htmlFor="F">Feminino </label>
        <br />
        <S.RadioInput
          type="radio"
          onChange={handleChange}
          name="gender"
          id="M"
          value={'Masculino'}
        />
        <label htmlFor="M">Masculino </label>
      </S.RadioInputs>

      <S.RadioInputs>
        Tipo do animal <br />
        <S.RadioInput
          type="radio"
          onChange={handleChange}
          name="type"
          id="Cachorro"
          value={'Cachorro'}
        />
        <label htmlFor="Cachorro">Cachorro </label>
        <br />
        <S.RadioInput
          type="radio"
          onChange={handleChange}
          name="type"
          id="Gato"
          value={'Gato'}
        />
        <label htmlFor="Gato">Gato </label>
      </S.RadioInputs>

      <S.InputAndLabel>
        <label htmlFor="inHouseSince">Na casa desde: </label>
        <Input
          style={{ margin: '3%' }}
          type="date"
          id="inHouseSince"
          onChange={handleChange}
          name="inHouseSince"
        />
      </S.InputAndLabel>

      <S.InputAndLabel>
        <label htmlFor="inHouseSince">Foto do animal: </label>
        <Input
          style={{ margin: '3%' }}
          type="file"
          id="image"
          onChange={handleFileChange}
          name="image"
        />
      </S.InputAndLabel>

      <label htmlFor="History">História do animal: </label>
      <S.TextArea
        onChange={handleChange}
        name="history"
        id="history"
        placeholder="Coloque aqui informações de onde o animal foi encontrado, em que situação se encontrava, etc."
      />
      <S.Button onClick={handleSubimit}> Adicionar </S.Button>

      <S.Title>Lista de animais já cadastrados</S.Title>
      {Pets.map((element) => (
        <ShowPetsAlreadyCreated element={element} />
      ))}
    </S.Div>
  );
}
