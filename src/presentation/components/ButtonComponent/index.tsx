import styled from 'styled-components';
import { ForwardedRef, ButtonHTMLAttributes, forwardRef } from 'react';

type Props = {} & ButtonHTMLAttributes<HTMLButtonElement>;


const StyledButton = styled.button`
  padding: auto;
  margin-top: 15px ;
  align-self:center;
  border-radius: 100px;
  color: #ffa722;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  width: 100px;
  height: 60px;
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



function ButtonComponent(props: Props, ref: ForwardedRef<HTMLButtonElement>) {
  return <StyledButton ref={ref}> {props.children} </StyledButton>;
}


export const Button = forwardRef(ButtonComponent);


