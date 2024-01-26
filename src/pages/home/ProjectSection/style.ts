import styled from 'styled-components';

export const Container = styled.section`
  padding: 20px;
  background: linear-gradient(to bottom, #00ae96 60%, #fff 40%);
  color: #ffff;

  @media (min-width: 2000px) {
    background: linear-gradient(to bottom, #00ae96 70%, #fff 30%);
    padding: 20px 500px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  padding: 10px;
  font-size: 1.7rem;
  color: #ffff;
  @media (max-width: 768px) {
    padding: 5px;
    font-size: 1.5rem;
  }
`;

export const SubTitle = styled.h2`
  text-align: justify;
  padding: 10px 20px;
  font-weight: 500;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 5px;
  }
`;
