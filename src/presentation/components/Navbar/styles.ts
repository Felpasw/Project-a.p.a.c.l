import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: #23232e;
  width: 100%;
  position: fixed;
  z-index: 1;
`;

export const Navlist = styled(motion.ul)`
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
    background-color: #23232e;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    float: right;
  }
`;

export const NavItems = styled(motion.li)`
  letter-spacing: 3px;
  margin-left: 32px;
`;

export const Img = styled.img`
  height: 90px;
  width: auto;

  @media (max-width: 999px) {
    margin-left: 10%;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #ffff;
  padding-right: 6ch;
  position: relative;
  right: auto;
`;

export const MobileMenu = styled.div`
  cursor: pointer;
  display: none;
  color: #fff;

  @media (max-width: 999px) {
    display: block;
    opacity: 100;
  }
`;

export const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  font-size: 2.7vh;
  &:hover {
    opacity: 0.7;
  }
`;
