import { useState } from 'react';
import styled from 'styled-components';

import { MdOutlinePets, MdOutlineFacebook, MdOutlineWhatsapp } from 'react-icons/md';
import { TfiMenu } from 'react-icons/tfi';
import apaclLogoImage from '../../assets/APACL.png';
import { AnimatePresence, Variants, motion } from 'framer-motion';

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

const Navlist = styled(motion.ul)`
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
      overflow: hidden;
      background-color: #23232e ;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      float: right;
  }
`;

const NavItems = styled(motion.li)`
  letter-spacing: 3px; 
  margin-left: 32px;
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

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  font-size: 2.7vh;
  &:hover {
    opacity: 0.7;
  }

`;

const SeeIfIsMobileOrNot = () => {
  if (window.screen.width > 999) {
    return true
  }
  else {
    return false
  }
}

const NavItemsList =
  [
    {
      Content: "Animais para adoção",
      Link: "/Adoption",
      Target: "",
      Delay: 0.7
    },
    {
      Content: "Eventos",
      Link: "/Events",
      Target: "",
      Delay: 0.9
    },
    {
      Content: "Contribua",
      Link: "/Contribute",
      Target: "",
      Delay: 1.1
    },
    {
      Content: <MdOutlineWhatsapp />,
      Link: "https://wa.me/",
      Target: "_blank",
      Delay: 1.3
    },
    {
      Content: <MdOutlineFacebook />,
      Link: "https://facebook.com/SPAdeCampoLargoPR",
      Target: "_blank",
      Delay: 1.5
    }
  ]

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(() => SeeIfIsMobileOrNot());

  const changeMobileMenuVisibility = (): void => {
    setIsVisible(!isVisible);
  }
  return (
    <Nav>
      <a href="/"><Img src={apaclLogoImage} /> </a>
      <Logo> A.P.A.C.L<MdOutlinePets /></Logo>
      <AnimatePresence>
        {isVisible && (

          <Navlist

            initial={{
              maxHeight: 0,
            }}
            animate={{
              maxHeight: "100vh",

            }}
            transition={{
              duration: 0.5,
            }}
            exit={{
              maxHeight: 0,
              transition: { delay: 1.6 }

            }}
            key="modal"

          >
            {
              NavItemsList.map((element, index) =>
                <NavItems
                  initial={{
                    scale: 0,
                    opacity: 0
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1
                  }}
                  transition={{
                    delay: element.Delay
                  }}
                  key={index}
                  exit={{
                    scale: 0,
                    opacity: 0
                  }}
                >
                  <NavItem href={element.Link} target={element.Target}> {element.Content} </NavItem>
                </NavItems>
              )}
          </Navlist>


        )}
      </AnimatePresence>

      <motion.div
        whileTap={{ scale: 2 }}
      >
        <MobileMenu onClick={() => { changeMobileMenuVisibility() }}> <TfiMenu /> </MobileMenu>
      </motion.div>
    </Nav >
  )
}

