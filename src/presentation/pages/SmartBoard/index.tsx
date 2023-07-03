import * as S from './styles';

import APACL from '../../assets/APACL.png';

import { Input } from '../../components/InputComponent';
import { useState } from 'react';
import { AxiosResponse } from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Axios } from '../../config/axios';

let zeroState = {
  name: '',
  password: '',
};

export default function SmartBoard() {
  const [formValues, setFormValues]: any = useState(zeroState);
  const navigate = useNavigate();

  const handleChange = (e: {
    target: { name: string; value: string };
  }): void => {
    let name = e.target.name;
    let value = e.target.value;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubimmit = async (e: React.FormEvent) => {
    if (!formValues.password || !formValues.name) {
      toast.error('Preencha todos os campos corretamente!');
      return;
    }

    try {
      const Response: AxiosResponse = await Axios.post(
        `/auth/user`,
        formValues
      );
      sessionStorage.setItem('token', Response.data.token);
      toast.success(`${Response.data.msg}`);

      setTimeout(() => {
        navigate('/Restricted');
      }, 2000);
    } catch (error) {
      toast.error('Erro ao realizar login!');
      console.log(error);
    }
  };

  return (
    <>
      <S.Div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <a href="/">
          <S.Img src={APACL} />
        </a>
        <h1 style={{ fontFamily: 'Jost' }}>Login</h1>
        <S.Label htmlFor="name">Usuário </S.Label>
        <Input
          id="name"
          type="text"
          onChange={handleChange}
          value={formValues.name}
          name="name"
        />

        <S.Label htmlFor="password"> Senha </S.Label>
        <Input
          id="password"
          type="password"
          onChange={handleChange}
          value={formValues.password}
          name="password"
        />

        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <S.Button> Voltar </S.Button>
          </a>
          <S.Button onClick={handleSubimmit}> Entrar </S.Button>
        </div>
        <ToastContainer />
      </S.Div>
    </>
  );
}
