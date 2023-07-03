import styled from 'styled-components';

export const FooterContent = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgb(35, 35, 46);
  color: #fff;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  padding: auto;
  margin-top: 50px;
`;
export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;
export const InfoContent = styled.h2`
  padding: auto;
  margin: 10px;
`;
export const Img = styled.img`
  width: 40ch;
  margin: auto;
  padding: auto;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Subtitles = styled.h3`
  font-size: 10px;
  margin: auto;
  padding: auto;
  margin: 10px;
`;

export const Button = styled.button`
  margin: 5%;
  margin-top: 15px;
  align-self: center;
  border-radius: 100px;
  color: #ffff;
  font-size: 12px;
  cursor: pointer;
  width: 115px;
  height: 35px;
  background: transparent;
  border: 3px solid #ffff;
  outline: none;
  transition: 0.15s ease-in-out;
  &:hover {
    transition: 0.15s ease-in-out;
    background: #ffff;
    color: black;
  }
`;
