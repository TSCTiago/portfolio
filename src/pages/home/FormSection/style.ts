import styled from 'styled-components';
// import background from '../../../assets/back2.png';
export const Container = styled.section`
  padding: 20px;

  background: linear-gradient(to bottom, #00ae96 60%, #fff 40%);
  color: #ffff;

  @media (min-width: 2000px) {
    background: linear-gradient(to bottom, #00ae96 70%, #fff 30%);
    padding: 20px 500px;
  }
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  color: #ffff;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 5px;
  }
`;
