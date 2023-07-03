import styled from 'styled-components';
import { BsPersonVcardFill } from 'react-icons/bs';
import * as textContent from '../../text-content';
import { AiOutlineWhatsApp, AiOutlinePhone } from 'react-icons/ai';
import FooterDogImage from '../../assets/FooterDogImage.png';
import * as S from './styles';

export default function Footer() {
  return (
    <S.FooterContent>
      <h1 style={{ alignSelf: 'center', fontSize: '30px' }}> Contato </h1>
      <S.Infos>
        <S.Div>
          <S.InfoContent>Endereço</S.InfoContent>
          <S.Subtitles>{textContent.Address}</S.Subtitles>
        </S.Div>
        <S.Div>
          <S.InfoContent>Email</S.InfoContent>
          <S.Subtitles>{textContent.Email}</S.Subtitles>
        </S.Div>
        <S.Div>
          <S.InfoContent>Telefone</S.InfoContent>
          <S.Subtitles>
            {' '}
            <AiOutlinePhone /> {textContent.ContactNum1}
          </S.Subtitles>
          <S.Subtitles>
            <AiOutlineWhatsApp /> {textContent.ContactNum2}
          </S.Subtitles>
        </S.Div>
        <S.Div>
          <S.InfoContent>Área de serviço</S.InfoContent>
          <S.Subtitles>Campo Largo e Região metropolitana</S.Subtitles>
        </S.Div>
      </S.Infos>
      <a href="/SmartBoard">
        <S.Button> Acessar sistema </S.Button>
      </a>
      <S.Img src={FooterDogImage} />
    </S.FooterContent>
  );
}
