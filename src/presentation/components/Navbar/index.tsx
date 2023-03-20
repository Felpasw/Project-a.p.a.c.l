import { Fragment } from 'react';
import styled from 'styled-components';
import { RiWhatsappFill } from 'react-icons/ri';
import { BsFacebook } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';

import apaclLogoImage from '../../assets/APACL.png';



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
  height: 100px;
`;

const Li = styled.li`
    letter-spacing: 3px;
    margin-left: 32px;
  
`;

const Img = styled.img`
  height: 90px;
  width: auto;
`;

const Logo = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ffff;
  padding-right: 6ch;
  position: relative;
  right: 50px;

`;

const MobileMenu = styled.div`
  cursor: pointer;
  opacity: 0;
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
  @media (max-width: 999px) {
    margin left: 0;
  }
`;

const MobileItems = styled.div`
  width: 32px;
  height: 2px;
  background: #fff;
  margin: 8px;
`;

const Navlist = styled.ul`
  list-style: none;
  display: flex;
  @media (max-width: 999px) {
      position: absolute;
      top: 8vh;
      right: 0;
      width: 50vw;
      height: 92vh;
      background-color: #23232e ;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      transform: translate(100%);
    }
`;

export default function Navbar() {
  return (
    <Fragment>
      <header>
        <Nav>
          <Img src={apaclLogoImage} />
          <Logo>A.P.A.C.L</Logo>
          <MobileMenu>
            <MobileItems></MobileItems>
            <MobileItems></MobileItems>
            <MobileItems></MobileItems>
            <MobileItems></MobileItems>
            <MobileItems></MobileItems>
            <MobileItems></MobileItems>
          </MobileMenu>
          <Navlist>
            <Li><NavItems href="/">Inicio</NavItems></Li>
            <Li><NavItems href="/AboutUs">Sobre nós</NavItems></Li>
            <Li><NavItems href="/">Animais para adoção</NavItems></Li>
            <Li><NavItems href="/"><RiWhatsappFill /></NavItems></Li>
            <Li><NavItems href="facebook.com/SPAdeCampoLargoPR" target={'_blank'}><BsFacebook /></NavItems></Li>
            <Li><NavItems href="/"><GrInstagram /></NavItems></Li>

          </Navlist>
        </Nav>
      </header>
      <main></main>
    </Fragment>
  )
}