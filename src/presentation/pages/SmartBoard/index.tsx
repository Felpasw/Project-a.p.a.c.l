import styled from 'styled-components';
import { motion } from 'framer-motion';
import APACL from '../../assets/APACL.png';

import { Input } from '../../components/InputComponent';
import { useState } from 'react';
import { AxiosResponse } from 'axios';

import { Axios } from '../../config/axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Img = styled.img`
  width: 60vh;
  margin: 2%;
`;

const Div = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size : "400% 400%";
  max-width: 100%;
  
`;

const Button = styled.button`  
  margin-top: 15px;
  align-self:center;
  border-radius: 100px;
  color: #ffa722;
  font-size: 12px;
  cursor: pointer;
  width: 115px;
  height: 35px;
  background: transparent;
  border: 3px solid #ffa722;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffa722;
    color: #ffff;
}`;


const Label = styled.label`
  font-family: 'Jost', sans-serif;
`

let zeroState = {
  Name: '',
  Password: ''
}

export default function SmartBoard() {
  const [formValues, setFormValues] = useState(zeroState);
  const navigate = useNavigate();

  const handleChange = (e: { target: { name: string; value: string; }; }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value })
  }


  const handleSubimmit = async (e: React.FormEvent) => {

    if (!formValues.Password || !formValues.Name) {

      toast.error("Preencha todos os campos corretamente!");
      return;

    }

    const login = {
      Name: formValues.Name,
      Password: formValues.Password
    }

    try {

      console.log(login);
      const Response: AxiosResponse = await Axios.post('/auth/user', login);
      console.log(Response);
      sessionStorage.setItem("token", Response.data.token);

      if (Response.status !== 200) {

        toast.error(`${Response.data.msg}`);

      }
      else {

        toast.success(`${Response.data.msg}`);
        navigate("/Restricted");

      }


    } catch (error) {

      toast.error("Erro ao realizar login!");
      console.log(error);

    }

  }


  return (
    <>
      <Div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
        <a href="/"><Img src={APACL} /></a>
        <h1 style={{ fontFamily: 'Jost' }}>Login</h1>
        <Label htmlFor="Name" >Usuário </Label>
        <Input id="Name" type='text' onChange={handleChange} value={formValues.Name} name='Name' />

        <Label htmlFor="Password"> Senha </Label>
        <Input id="Password" type='password' onChange={handleChange} value={formValues.Password} name='Password' />

        <div style={{ display: "flex", flexDirection: "row" }}>
          <a href="/" style={{ textDecoration: "none", color: "inherit" }}> <Button> Voltar </Button> </a>
          <Button onClick={handleSubimmit} > Entrar </Button>
        </div>
        <ToastContainer />
      </Div>
    </>
  )
} 