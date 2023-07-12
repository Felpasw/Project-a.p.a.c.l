import styled from 'styled-components';

export const Subtitle = styled.h1`
  align-self: center;
  max-width: 100%;
  font-size: 6vh;
  align-self: center;
  font-family: 'Jost', sans-serif;
  color: #ffa722;
  text-transform: uppercase;
  padding-top: 150px;
  margin: 2%;
`;

export const Title = styled.h1`
  align-self: center;
  max-width: 100%;
  font-size: 7ch;
  align-self: center;
  margin-bottom: -10%;
  margin: 3%;
  font-family: 'Jost', sans-serif;
  color: #ffff;
  text-transform: uppercase;
`;

export const Img = styled.img`
  align-self: center;
  max-width: 100%;
  margin-right: 5%;
  @media (max-width: 999px) {
    margin-bottom: -10%;
  }
`;

export const MobileContent = styled.div`
  display: none;
  @media (max-width: 999px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContributeWaysSubtitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding: auto;
  flex-wrap: wrap;
  margin-top: -7%;
  background-color: #ffff;
  border-radius: 100px;
`;

export const ContributeWayTitle = styled.h1`
  font-family: 'Jost', sans-serif;
  color: #ffa722;
  align-self: center;
  font-size: 5vh;
  margin: 7%;
  padding: 10%;
  max-width: 100%;
  width: 300px;
`;

export const ContributeWay = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin: 5%;
  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const ContributeWayImage = styled.img`
  border-radius: 5%;
  max-width: 100%;
  margin: 5%;
  width: 40vh;
  align-self: center;
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ffa722),
      to(#ffd801)
    )
    no-repeat;
  padding: 3%;
`;

export const TitleContent = styled.div`
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

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (max-width: 999px) {
    display: none;
  }
`;

export const CatImage = styled.img`
  max-width: 100%;
  padding: 5%;
  margin: 0.6%;
  z-index: 0;
  -webkit-filter: drop-shadow(0px 0px 5px rgba(0 0 0 / 90%));
  filter: drop-shadow(0px 0px 5px rgba(0 0 0 / 90%));
`;

export const Icons = styled.button`
  padding: 2%;
  margin-left: 1%;
  margin-right: 1%;
  display: flex;
  align-self: center;
  border-radius: 20px;
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
  @media (max-width: 999px) {
    width: 5vh;
  }
`;

export const ParnershipsTitle = styled.h1`
  font-size: 5vh;
  align-self: center;
  max-width: 100%;
  font-family: 'Jost', sans-serif;
  color: #ffa722;
  text-transform: uppercase;
`;

export const IconText = styled.h1`
  align-self: center;
  margin: 4%;
  @media (max-width: 999px) {
    width: 2vh;
    font-size: 15px;
  }
`;
