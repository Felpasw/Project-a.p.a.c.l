import styled from 'styled-components';

export const Title = styled.h1`
  max-width: 100%;
  font-size: 5ch;
  font-family: 'Jost', sans-serif;
  text-transform: uppercase;
  padding-right: 3ch;
  position: relative;
  right: auto;
  margin-right: 5%;
  padding-right: 5%;
  align-self: center;
  color: #23232e;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 100%;
  @media (max-width: 999px) {
    flex-direction: column-reverse;
  }
`;

export const Img = styled.img`
  max-width: 100%;
  background: -webkit-gradient(
      linear,
      left top,
      right top,
      from(#ffa722),
      to(#ffd801)
    )
    no-repeat;
  border-radius: 150%;
  margin: auto;
  padding: auto;
  @media (max-width: 999px) {
    padding-top: 105px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 20px;
  max-width: 100%;
  margin: auto;
  padding: auto;
`;

export const Titles = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;
