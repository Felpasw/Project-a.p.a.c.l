import * as S from './styles';
import APACL from '../../assets/APACL.png';
import EditPetsForm from '../../components/EditPetsForm';
import EditEventsForm from '../../components/EditEventsForm';
import { ToastContainer } from 'react-toastify';

const ElementsList = [<EditPetsForm />, <EditEventsForm />];

export default function Restricted() {
  return (
    <S.Content>
      <S.Img src={APACL} alt="" />
      <ToastContainer />
      <S.Title>
        Bem vindo(a) ao gerenciamento de conteúdo do site da APACL!
      </S.Title>
      <S.Subtitle>Qual conteúdo deseja alterar?</S.Subtitle>
      <S.MainContent>
        {ElementsList.map((Element) => (
          <S.Forms>{Element}</S.Forms>
        ))}
      </S.MainContent>
    </S.Content>
  );
}
