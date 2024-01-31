import styled from 'styled-components';
import background from '../../../assets/back2.png';
export const Container = styled.section`
  padding: 20px;
  background: linear-gradient(to bottom, #00ae96 55%, #fff 45%);
  color: #ffff;

  @media (min-width: 2000px) {
    background: linear-gradient(to bottom, #00ae96 50%, #fff 30%);
    padding: 20px 300px;
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
export const Div = styled.div`
  margin: 0 200px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 20px;
  @media (max-width: 1500px) {
    margin: 0px 50px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
  }
`;

export const AboutText = styled.h2`
  margin: 20px 40px;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: justify;
  letter-spacing: normal;
  @media (max-width: 768px) {
    text-align: justify;
    font-size: 1.1rem;
    margin: 10px 20px;
  }
`;

export const Bar = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 5px;
  border-radius: 10px;
  height: 100%;
  background: linear-gradient(to bottom, #f14613 50%, #6e07f3 50%);

  @media (max-width: 768px) {
    height: 70%;
  }
`;

export const Image = styled.img`
  margin-top: -100px;

  @media (min-width: 2000px) {
    width: 20%;
    margin-top: -40px;
  }
  @media (max-width: 1200px) {
    width: 35%;
    margin-top: -50px;
  }
  @media (max-width: 768px) {
    width: 70%;
    margin-top: -50px;
  }
`;

export const SubTitle = styled.h2`
  text-align: center;
  padding: 20px;
`;

export const CardArea = styled.div`
  margin: 0 200px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  justify-content: center;

  flex-wrap: wrap;

  @media (max-width: 768px) {
    margin: 0 10px;
  }
`;

export const TalkToMe = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  text-align: center;
  background: url(${background}) bottom right;
  background-size: 500px;
  background-repeat: no-repeat;
  @media (max-width: 768px) {
    background: none;
  }
`;
export const TalkTitle = styled(Title)`
  color: #00ae96;
  font-size: 2.3rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;
export const TalkSubTitle = styled(SubTitle)`
  color: #000000;
  padding: 0 30px;
  font-weight: 500;
  font-size: 1.3rem;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    text-align: justify;
    font-size: 1.1rem;
    padding: 0 5px;
  }
`;

export const Talkbutton = styled.a`
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
    font-size: 1.3rem;
  }
`;
