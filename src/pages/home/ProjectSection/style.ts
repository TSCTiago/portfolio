import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px;
  height: 100vh;
  background: linear-gradient(to bottom, #00ae96 60%, #fff 40%);
  color: #ffff;

  @media (min-width: 2000px) {
    background: linear-gradient(to bottom, #00ae96 70%, #fff 30%);
    padding: 20px 500px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  color: #ffff;
`;

export const SubTitle = styled.h2`
  text-align: center;
  padding: 20px;
`;
