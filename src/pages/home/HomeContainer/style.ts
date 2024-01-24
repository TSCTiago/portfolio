import styled from 'styled-components';
import backLeft from '../../../assets/back1.png';
import backRigth from '../../../assets/back.png';

export const Container = styled.section`
  padding: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background:
    url(${backLeft}) bottom left,
    url(${backRigth}) top right;
  background-size: 500px;
  background-repeat: no-repeat;
  background-color: #f3f3fd;
  @media (min-width: 2000px) {
    padding: 500px;
    height: 80vh;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-size: 300px;
  }
`;

export const Me = styled.img`
  width: 170px;
  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 20px;
    width: 140px;
  }
`;
export const HomeImage = styled.img`
  width: 100%;
  @media (min-width: 2000px) {
    width: 90%;
  }
`;

export const Text = styled.h1`
  text-align: left;
  height: 200px;
  font-size: 2.4rem;
  @media (min-width: 2000px) {
    height: 150px;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
    height: 150px;
  }
`;

export const TextDynamic = styled.span`
  margin-left: 20px;
  color: #00ae96;
`;

export const Left = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: end;
  }
`;

export const Right = styled(Left)`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const AreaButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 0 0 4rem 0;
  width: 100%;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;

export const CvButton = styled.a`
  text-align: center;
  text-decoration: none;
  border: 3px #6e07f3 solid;
  color: #6e07f3;
  font-weight: 500;
  padding: 5px;
  width: 50%;
  font-size: 1.4rem;
  border-radius: 50px;
  transition: 0.4s;
  &:hover {
    color: #ffff;
    background: #6e07f3;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const TalkButton = styled(CvButton)`
  color: #ffff;
  background: #6e07f3;
  transition: 0.4s;
  &:hover {
    color: #6e07f3;
    background: #ffff;
  }
`;
