import Navbar from '../../components/Navbar';
import PetImage from '../../assets/DogPetImage.png';
import { motion } from 'framer-motion';
import * as S from './styles';
import Footer from '../../components/Footer';
import AboutUs from '../../components/AboutUs';
import { Button } from '../../components/ButtonComponent';
import { ToastContainer } from 'react-toastify';

export default function InitialPage() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <S.Div>
        <S.Titles style={{ margin: 'auto' }}>
          <motion.div
            style={{ alignSelf: 'center', marginLeft: '40px' }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 3,
              delay: 2,
              ease: [0, 0.2, 0.2, 1.01],
            }}
          >
            <S.Title> Associação Protetora dos Animais de Campo Largo</S.Title>
          </motion.div>
          <motion.div
            style={{ marginLeft: '40px' }}
            initial={{ height: 0, scale: 0 }}
            animate={{ height: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 3,
            }}
          >
            <S.Subtitle>Nos ajude a crescer! </S.Subtitle>
          </motion.div>
          <motion.div
            style={{ marginTop: '20px', marginLeft: '40px', maxWidth: '100%' }}
            initial={{ height: 0, scale: 0 }}
            animate={{ height: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 4,
            }}
          >
            <Button>
              <a
                href="/Contribute"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <b>Saiba mais</b>
              </a>
            </Button>
          </motion.div>
        </S.Titles>
        <motion.div
          style={{ alignSelf: 'end' }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: [0, 0.2, 0.2, 1.01],
          }}
        >
          <S.Img src={PetImage} style={{ alignSelf: 'end', margin: 'auto' }} />
        </motion.div>
      </S.Div>
      <AboutUs />
      <Footer />
    </>
  );
}
