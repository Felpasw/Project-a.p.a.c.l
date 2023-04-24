import { Fragment, useState } from 'react';
import styled from 'styled-components';

import { RiWhatsappFill } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import { MdOutlinePets } from 'react-icons/md';
import { TfiMenu } from 'react-icons/tfi'
import apaclLogoImage from '../../assets/APACL.png';
import { AnimatePresence, motion } from 'framer-motion';


const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: system-ui, 
  -apple-system, 
  BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
  Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
  sans-serif;
  background-color: #23232e;
  width: 100%;
  position:fixed;
  z-index: 1;

`;



const Img = styled.img`
  height: 90px;
  width: auto;
  
  @media (max-width: 999px) {
    margin-left: 10%;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ffff;
  padding-right: 6ch;
  position: relative;
  right: auto;
`;

const MobileMenu = styled.div`
  
  cursor: pointer;
  display: none;
  color: #fff;
  
  @media (max-width: 999px) {
    display: block;
    opacity: 100;
  }
`;

const NavItems = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    opacity: 0.7;
  }

`;


const Navlist = styled.ul`
    list-style: none;
    display: flex;
    @media (max-width: 999px) {
      display: flex;
      list-style: none;
      position: absolute;
      top: 10.5vh;
      right: 0px;
      width: auto;
      height: 92vh;
      background-color: #23232e ;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      float: right;
  }
      
`
const SeeIfIsMobileOrNot = () => {
  if (window.screen.width > 999) {
    return true
  }
  else {
    return false
  }
}


export default function Navbar() {
  const [isVisible, setIsVisible] = useState(() => SeeIfIsMobileOrNot());



  const changeMobileMenuVisibility = (): void => {
    setIsVisible(!isVisible);
    console.log(isVisible);
  }

  return (
    <Nav>
      <a href="/"><Img src={apaclLogoImage} /> </a>
      <Logo> A.P.A.C.L<MdOutlinePets /></Logo>
      <AnimatePresence>
        {isVisible && (
          <><motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, }}
            exit={{ opacity: 0 }} >
            <Navlist>
              <motion.li style={{ "letterSpacing": "3px", "marginLeft": "32px" }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <NavItems href="/Adoption"> Animais para adoção </NavItems>
              </motion.li>
              <motion.li style={{ "letterSpacing": "3px", "marginLeft": "32px" }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <NavItems href="/Events">Eventos</NavItems>
              </motion.li>
              <motion.li style={{ "letterSpacing": "3px", "marginLeft": "32px" }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ delay: 2, duration: 0.5 }}
              >
                <NavItems href="/Donation">Doações</NavItems>
              </motion.li>
              <motion.li style={{ "letterSpacing": "3px", "marginLeft": "32px" }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <NavItems href="/"><RiWhatsappFill /></NavItems>
              </motion.li>
              <motion.li style={{ "letterSpacing": "3px", "marginLeft": "32px" }}
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 300, opacity: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <NavItems href="facebook.com/SPAdeCampoLargoPR" target={'_blank'}><BsFacebook /></NavItems>
              </motion.li>
            </Navlist>
          </motion.div>
          </>

        )}
      </AnimatePresence>
      <MobileMenu onClick={() => { changeMobileMenuVisibility() }}> <TfiMenu /> </MobileMenu>
    </Nav>
  )
}