import styled from 'styled-components';

export const Pets = styled.div`
  display: flex;
  align-items: row;
  flex-direction: row;
  flex-wrap: wrap;
  color: #ffd801;
  margin: 3%;
  justify-content: space-around;
`;

export const Title = styled.h1`
  display: flex;
  flex-wrap: wrap;
  align-self: center;
  max-width: 100%;
  margin: auto;
  padding: auto;
  font-size: 6ch;
  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  right: auto;
  color: #ffff;
`;
export const Img = styled.img`
  max-width: 100%;
  width: 240px;
  margin: 5%;
  border-radius: 20px;
  box-shadow: 1px 5px 5px gray;
`;
export const PresentationContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 100px;
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ffa722),
      to(#ffd801)
    )
    no-repeat;
`;
export const DogAndCat = styled.img`
  max-width: 100%;
`;

export const DivContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subtitles = styled.h1`
  color: #ffa722;
`;
export const AboutDonation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 5%;
  margin: 5%;
  margin-top: -115px;
  background-color: #ffff;
  border-radius: 40px;
  z-index: 0;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  margin: 5%;
  padding: auto;
  margin-top: 15px;
  align-self: center;
  border-radius: 100px;
  color: #ffa722;
  font-size: 18px;
  cursor: pointer;
  max-width: 100%;
  width: 200px;
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

export const Container = styled.div`
  margin: 2%;
  color: #23232e;
`;
