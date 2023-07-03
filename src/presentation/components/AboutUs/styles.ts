import styled from 'styled-components';

export const AboutUsText = styled.div`
  text-align: center;
  max-width: 100%;
  margin: auto;
  padding: auto;
`;

export const Img = styled.img`
  margin: auto;
  max-width: 100%;
  float: center;
  padding: auto;
  width: 500px;
`;

export const CatImage2 = styled.img`
  margin: auto;
  width: 300px;
  max-width: 100%;
  float: center;
  background-color: #29bdc1;
  border-radius: 100%;
`;

export const DogCatImage = styled.img`
  margin: auto;
  width: 300px;
  height: 300px;
  max-width: 100%;
  float: center;
  background-color: #d84242;
  border-radius: 100%;
`;

export const CatImage = styled.img`
  margin: auto;
  width: 300px;
  max-width: 100%;
  float: center;
  background-color: #913f92;
  border-radius: 100%;
`;

export const HorseImage = styled.img`
  margin: auto;
  width: 330px;
  max-width: 100%;
  float: center;
  background-color: #eaff7b;
  border-radius: 100%;
`;

export const Div = styled.div`
  display: flex;
  max-width: 100%;
  align-items: center;
  flex-direction: column;
  padding: auto;
  margin: auto;
  background-color: aliceblue;
  @media (max-width: 999px) {
    flex-direction: column;
    overflow: scroll;
  }
`;

export const Info = styled.h1`
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  margin: 10px;
  padding: auto;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-direction: center;
  justify-content: center;
  width: 304px;
`;

export const Service = styled.div`
  text-align: center;
  align-items: center;
  margin: auto;
  padding: auto;
`;

export const AboutUsDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 120px;
  padding: auto;
  align-items: center;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;
