import { useState, useEffect } from 'react';
import { Input } from '../InputComponent';
import styled from 'styled-components';
import { Axios } from '../../config/axios';
import Pet from '../../../@types/Pets'
import { motion } from 'framer-motion';
import { GiHollowCat } from 'react-icons/gi';
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import { TbDog } from 'react-icons/tb';
import APACL from '../../assets/APACL.png'

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

const RadioInput = styled.input`
  max-width: 100%;
`;

const RadioInputs = styled.div`
  justify-content: space-between;
  padding: 5%;
  max-width: 100%;
`;

const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  margin: 2%;
  color: #23232e;
`;

const Img = styled.img`
  max-width: 100%;
  width: 240px;
  margin: 5%;
  border-radius: 20px;
  box-shadow: 1px 5px 5px gray;
`;

const zeroState = {
  Name: "",
  History: "",
  Gender: "Masculino",
  InHouseSince: ""
}

export default function EditPetsForm() {
  const [formValues, setFormValues] = useState(zeroState);
  const [Pets, setPets] = useState([] as Pet[]);


  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value })
  }


  useEffect(() => {
    getPets();

  })



  const getPets = async () => {
    const pets = Axios.get('/Pets').then((response: { data: React.SetStateAction<Pet[]>; }) => setPets(response.data));
    return pets;
  }

  const handleSubimit = () => {
    console.log("handleSubimmit");
  }

  return (
    <Div>
      <Title>Editar informações dos animais </Title>

      <InputAndLabel >
        <label htmlFor="Name" >Nome: </label>
        <Input type="text" onChange={handleChange} name='Name' id='Name' style={{ margin: "3%" }} />
      </InputAndLabel>

      <RadioInputs>
        Gênero <br />
        <RadioInput type="radio" onChange={handleChange} name='Gender' id='F' value={"Feminino"} />
        <label htmlFor="F" >Feminino </label>
        <br />
        <RadioInput type="radio" onChange={handleChange} name='Gender' id='M' value={"Masculino"} />
        <label htmlFor="M" >Masculino </label>
      </RadioInputs>

      <RadioInputs>
        Tipo do animal <br />
        <RadioInput type="radio" onChange={handleChange} name='Gender' id='Cachorro' value={"Cachorro"} />
        <label htmlFor="F" >Cachorro </label>
        <br />
        <RadioInput type="radio" onChange={handleChange} name='Gender' id='Gato' value={"Gato"} />
        <label htmlFor="M" >Gato </label>
      </RadioInputs>

      <InputAndLabel>
        <label htmlFor="InHouseSince" >Na casa desde: </label>
        <Input style={{ margin: "3%" }} type='date' id='InHouseSince' onChange={handleChange} />
      </InputAndLabel>

      <label htmlFor="History">História do animal: </label>
      <TextArea onChange={handleChange} name='History' id='History' />
      <Button onClick={handleSubimit}> Adicionar </Button>


      <Title>Lista de animais já cadastrados</Title>
      {
        Pets.map((element) =>
          <>
            <Container>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -30 }}
                style={{
                  width: "30ch",
                  margin: "1.5%",
                  cursor: "pointer"
                }}
              >
                <Img src={APACL} alt="" />
                {element.Type === "Gato" ?
                  <h1 style={{ "margin": "5%" }}>Conheça {element.Name}!<GiHollowCat /></h1> :
                  <h1 style={{ "margin": "5%" }}>Conheça {element.Name}! <TbDog /></h1>
                }
                {element.Gender === "Masculino" ?
                  <h3 style={{ "margin": "5%" }}>Sexo: {element.Gender} <BsGenderMale style={{ "color": "blue" }} /></h3> :
                  <h3 style={{ "margin": "5%" }}>Sexo: {element.Gender} <BsGenderFemale style={{ "color": "hotpink" }} /></h3>
                }
                <h3 style={{ "margin": "5%", "fontFamily": "Jost" }}>Na casa desde: {element.InHouseSince}</h3>
                <Button>Editar</Button>
                <Button>Remover</Button>
              </motion.div>
            </Container>
          </>

        )}


    </Div >
  )


}