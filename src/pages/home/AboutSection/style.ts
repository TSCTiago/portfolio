import styled from 'styled-components';
import background from '../../../assets/back2.png';
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
  padding: 20px;
  font-size: 2rem;
  color: #ffff;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutText = styled.h3`
  margin: 20px 40px;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: justify;
`;
export const Image = styled.img`
  width: 30%;
  margin-top: -100px;
  @media (max-width: 768px) {
    width: 50%;
    margin-top: 0px;
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
  text-align: center;
  background: url(${background}) bottom right;
  background-size: 500px;
  background-repeat: no-repeat;
`;
export const TalkTitle = styled(Title)`
  color: #00ae96;
  font-size: 2.5rem;
`;
export const TalkSubTitle = styled(SubTitle)`
  color: #000000;
  padding: 0 30px;
  font-weight: 550;
  margin-bottom: 30px;
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
