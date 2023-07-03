import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 60px -16px;
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ffa722),
      to(#ffd801)
    )
    no-repeat;
`;

export const Title = styled.h1`
  font-family: 'Jost', sans-serif;
  align-self: center;
  margin: 2%;
`;

export const Subtitle = styled.h2`
  font-family: 'Jost', sans-serif;
`;

export const Img = styled.img`
  width: 30vh;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
  width: 100%;

  @media (max-width: 999px) {
    flex-direction: column;
  }
`;

export const Forms = styled.div`
  margin: 5%;
  width: 50vh;
  background-color: #ffff;
  align-items: center;
  border-radius: 10px;
  padding: 10vh;
`;
