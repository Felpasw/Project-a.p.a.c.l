import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Img = styled.img`
  width: 60vh;
  margin: 2%;
`;

export const Div = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-size: '400% 400%';
  max-width: 100%;
`;

export const Button = styled.button`
  margin-top: 15px;
  align-self: center;
  border-radius: 100px;
  color: #ffa722;
  font-size: 12px;
  cursor: pointer;
  width: 115px;
  height: 35px;
  background: transparent;
  border: 3px solid #ffa722;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffa722;
    color: #ffff;
  }
`;

export const Label = styled.label`
  font-family: 'Jost', sans-serif;
`;
