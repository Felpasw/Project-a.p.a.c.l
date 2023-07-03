import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextArea = styled.textarea`
  width: 52vh;
  height: 300px;
  resize: none;
  border-radius: 10px;
`;

export const Title = styled.h4`
  align-self: center;
  margin: 5%;
  padding: 5%;
  max-width: 100%;
  color: #ffa722;
`;

export const DivButton = styled(motion.div)``;

export const Button = styled.button`
  padding: auto;
  margin-top: 15px;
  align-self: start;
  border-radius: 100px;
  color: #ffa722;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  width: 50vh;
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

export const InputAndLabel = styled.div`
  display: flex;
  flex-direction: column;
`;
