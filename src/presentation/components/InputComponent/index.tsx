import { ForwardedRef, InputHTMLAttributes, forwardRef } from 'react';
import styled from 'styled-components';

type Props = {} & InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input`
  border-radius: 30px;
  width: 50vh;
  background: transparent;
  transition: padding 0.3s 0.2s ease;
  &:focus{
    border-bottom: #ffa722 solid 5px;
  }
`;


function InputComponent(props: Props, ref: ForwardedRef<HTMLInputElement>) {
  return <StyledInput ref={ref} {...props} />;
}


export const Input = forwardRef(InputComponent); 