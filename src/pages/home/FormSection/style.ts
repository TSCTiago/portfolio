import styled from 'styled-components';
// import background from '../../../assets/back2.png';
export const Container = styled.section`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background: #f3f3fd;
  /* background: linear-gradient(to bottom, #00ae96 60%, #fff 40%); */
  color: #ffff;

  @media (min-width: 2000px) {
    /* background: linear-gradient(to bottom, #00ae96 70%, #fff 30%); */
    padding: 20px 500px;
  }
  @media (max-width: 768px) {
    padding-bottom: 50px;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 20px;
  font-size: 2rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 5px;
  }
`;

export const Img = styled.img`
  width: 40%;
  height: auto;
  @media (max-width: 768px) {
    margin-top: 30px;
    width: 100%;
  }
`;
export const Submitbutton = styled.button`
  width: 250px;
  text-align: center;
  text-decoration: none;
  border: 3px #00ae96 solid;
  color: #00ae96;
  font-weight: 500;
  padding: 5px 20px;
  font-size: 1.4rem;
  border-radius: 50px;
  transition: 0.4s;
  cursor: pointer;
  &:hover {
    color: #ffff;
    background: #00ae96;
  }
  @media (max-width: 768px) {
    width: 200px;
    font-size: 1.2rem;
  }
`;
