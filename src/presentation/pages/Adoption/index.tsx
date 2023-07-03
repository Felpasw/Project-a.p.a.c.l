import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';

import { GiHollowCat } from 'react-icons/gi';
import { TbDog } from 'react-icons/tb';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import * as textContent from '../../text-content';
import * as S from './styles';

//images
import DogF from '../../assets/AdoptionContent/DogF.png';
import DogF2 from '../../assets/AdoptionContent/DogF2.png';
import DogM from '../../assets/AdoptionContent/DogM.png';
import DogM1 from '../../assets/AdoptionContent/DogM1.png';
import DogM2 from '../../assets/AdoptionContent/DogM2.png';
import DogM3 from '../../assets/AdoptionContent/DogM3.png';
import DogM4 from '../../assets/AdoptionContent/DogM4.png';
import DogM5 from '../../assets/AdoptionContent/DogM5.png';
import CatAndDogAdoption from '../../assets/AdoptionContent/CatAndDogAdoption.png';

const Petlist = [
  {
    Type: 'Cachorro(a)',
    Name: 'Carina',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Feminino',
    Date: new Date().toLocaleDateString(),
    Image: DogF,
  },
  {
    Type: 'Cachorro(a)',
    Name: 'Beringela',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Feminino',
    Date: new Date().toLocaleDateString(),
    Image: DogF2,
  },
  {
    Type: 'Cachorro(a)',
    Name: 'Cheedar',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Masculino',
    Date: new Date().toLocaleDateString(),
    Image: DogM,
  },
  {
    Type: 'Cachorro(a)',
    Name: 'Chico',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Masculino',
    Date: new Date().toLocaleDateString(),
    Image: DogM1,
  },
  {
    Type: 'Cachorro(a)',
    Name: 'Rodolfo',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Masculino',
    Date: new Date().toLocaleDateString(),
    Image: DogM2,
  },
  {
    Type: 'Cachorro(a)',
    Name: 'Alvin',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Masculino',
    Date: new Date().toLocaleDateString(),
    Image: DogM3,
  },
  {
    Type: 'Cachorro(a)',
    Name: 'Carlos',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Masculino',
    Date: new Date().toLocaleDateString(),
    Image: DogM4,
  },
  {
    Type: 'Cachorro(a)',
    Name: 'Ronaldo',
    Castrated: 'Não',
    Vacines: 'Nenhuma',
    Gender: 'Masculino',
    Date: new Date().toLocaleDateString(),
    Image: DogM5,
  },
];

export default function Adoption() {
  return (
    <>
      <Navbar />
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -50, opacity: 0 }}
        transition={{ delay: 0.2, duration: 1.3 }}
      >
        <S.PresentationContent>
          <S.Title>
            Não compre,
            <h1 style={{ maxWidth: '100%', fontFamily: 'Jost' }}>adote!</h1>
          </S.Title>
          <S.DogAndCat src={CatAndDogAdoption} />
        </S.PresentationContent>
      </motion.div>
      <S.DivContent>
        <S.AboutDonation>
          <S.Subtitles>
            Sobre <HiOutlineInformationCircle />
          </S.Subtitles>
          <p>{textContent.AboutDonation}</p>
        </S.AboutDonation>
        <S.Div>
          <S.Subtitles style={{ alignSelf: 'center' }}>
            Atuais moradores da casa{' '}
          </S.Subtitles>
        </S.Div>
        <S.Pets>
          {Petlist.map((element) => (
            <S.Container>
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ y: -30 }}
                style={{
                  width: '30ch',
                  margin: '1.5%',
                  cursor: 'pointer',
                }}
              >
                <S.Img src={element.Image} alt="" />
                {element.Type === 'Gato' ? (
                  <h1 style={{ margin: '5%' }}>
                    Conheça {element.Name}!<GiHollowCat />
                  </h1>
                ) : (
                  <h1 style={{ margin: '5%' }}>
                    Conheça {element.Name}! <TbDog />
                  </h1>
                )}
                {element.Gender === 'Masculino' ? (
                  <h3 style={{ margin: '5%' }}>
                    Sexo: {element.Gender}{' '}
                    <BsGenderMale style={{ color: 'blue' }} />
                  </h3>
                ) : (
                  <h3 style={{ margin: '5%' }}>
                    Sexo: {element.Gender}{' '}
                    <BsGenderFemale style={{ color: 'hotpink' }} />
                  </h3>
                )}
                <h3 style={{ margin: '5%', fontFamily: 'Jost' }}>
                  Na casa desde: {element.Date}
                </h3>
                <S.Button>
                  <b>Conheça minha história!</b>
                </S.Button>
              </motion.div>
            </S.Container>
          ))}
        </S.Pets>
      </S.DivContent>
      <Footer />
    </>
  );
}
