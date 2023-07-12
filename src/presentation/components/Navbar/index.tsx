import { useState } from 'react';
import * as S from './styles';

import {
  MdOutlinePets,
  MdOutlineFacebook,
  MdOutlineWhatsapp,
} from 'react-icons/md';
import { TfiMenu } from 'react-icons/tfi';
import apaclLogoImage from '../../assets/APACL.png';
import { AnimatePresence, Variants, motion } from 'framer-motion';

const SeeIfIsMobileOrNot = () => {
  if (window.screen.width > 999) {
    return true;
  } else {
    return false;
  }
};

const NavItemsList = [
  {
    Content: 'Animais para adoção',
    Link: '/Adoption',
    Target: '',
    Delay: 0.7,
  },
  {
    Content: 'Eventos',
    Link: '/Events',
    Target: '',
    Delay: 0.9,
  },
  {
    Content: 'Contribua',
    Link: '/Contribute',
    Target: '',
    Delay: 1.1,
  },
  {
    Content: <MdOutlineWhatsapp />,
    Link: 'https://wa.me/',
    Target: '_blank',
    Delay: 1.3,
  },
  {
    Content: <MdOutlineFacebook />,
    Link: 'https://facebook.com/SPAdeCampoLargoPR',
    Target: '_blank',
    Delay: 1.5,
  },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(() => SeeIfIsMobileOrNot());

  const changeMobileMenuVisibility = (): void => {
    setIsVisible(!isVisible);
  };
  return (
    <S.Nav>
      <a href="/">
        <S.Img src={apaclLogoImage} />
      </a>
      <S.Logo>
        A.P.A.C.L
        <MdOutlinePets />
      </S.Logo>
      <AnimatePresence>
        {isVisible && (
          <S.Navlist
            initial={{
              maxHeight: 0,
            }}
            animate={{
              maxHeight: '100vh',
            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              maxHeight: 0,
              transition: { delay: 1.6 },
            }}
            key="modal"
          >
            {NavItemsList.map((element, index) => (
              <S.NavItems
                initial={{
                  scale: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  opacity: 1,
                }}
                transition={{
                  delay: element.Delay,
                }}
                key={index}
                exit={{
                  scale: 0,
                  opacity: 0,
                }}
              >
                <S.NavItem href={element.Link} target={element.Target}>
                  {element.Content}
                </S.NavItem>
              </S.NavItems>
            ))}
          </S.Navlist>
        )}
      </AnimatePresence>

      <motion.div whileTap={{ scale: 2 }}>
        <S.MobileMenu
          onClick={() => {
            changeMobileMenuVisibility();
          }}
        >
          <TfiMenu />
        </S.MobileMenu>
      </motion.div>
    </S.Nav>
  );
}
