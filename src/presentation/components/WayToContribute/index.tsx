import { useState } from 'react';
import styled from 'styled-components';




const ContributeWay = styled.button`
  padding: auto;
  margin-top: 15px;
  align-self:center;
  border-radius: 90px;
  color: #ffa722;
  font-size: 18px;
  font-weight: 100;
  cursor: pointer;
  max-width: 100%;
  height: 60px;
  width: 300px;
  background: transparent;
  border: 1px solid #ffa722;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffa722;
    color: #ffff;
}
`;
const Div = styled.div`
  width: 100vh;
  height: 100vh;
  background-color: #ffff;
  z-index: 0;
`;

function AboutContribute(Props: { Name: String }) {
  return (<Div>{Props.Name}</Div>)
}

export default function WayToContribute(Props: { Name: string, Icon: JSX.Element }) {
  const [isShown, setIsShown] = useState(false);
  const toggle = () => setIsShown(!isShown);

  return (
    <>
      <ContributeWay onClick={toggle}>
        {Props.Icon}<br />
        {Props.Name}
      </ContributeWay>

      {isShown ?
        <AboutContribute Name={Props.Name} /> :
        <></>
      }
    </>

  )
}