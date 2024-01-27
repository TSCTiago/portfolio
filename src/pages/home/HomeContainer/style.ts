import styled, { keyframes } from 'styled-components';

import backLeft from '../../../assets/back1.png';
import backRigth from '../../../assets/back.png';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const translate = keyframes`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(15px, 15px); }
`;

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
  @media (max-width: 2000px) {
    padding: 30px 100px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    background-size: 300px;
  }
  @media (max-width: 2000px) {
    padding: 30px 20px;
  }
`;

export const Me = styled.img`
  width: 170px;
  margin-top: 100px;

  @media (max-width: 1090px) {
    margin-top: 40px;
    width: 120px;
  }

  @media (max-width: 768px) {
    margin-top: 100px;
    margin-bottom: 20px;
    width: 140px;
  }
`;

export const HomeImage = styled.img`
  width: 100%;
  animation: ${translate} 5s linear infinite;

  @media (min-width: 2000px) {
    width: 90%;
  }
`;

export const Text = styled.div`
  font-weight: 700;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 2.4rem;

  @media (min-width: 1400px) {
    display: block;
  }
  @media (max-width: 1090px) {
    font-size: 1.8rem;
  }
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const TextDynamic = styled.span`
  color: #00ae96;

  @media (min-width: 1400px) {
    margin-left: 10px;
  }
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
  margin: 1rem 0;
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
  font-weight: 500;
  border-radius: 50px;
  transition: 0.4s;
  border: 3px #6e07f3 solid;
  color: #6e07f3;
  padding: 5px;
  width: 35%;
  font-size: 1.3rem;

  &:hover {
    color: #ffff;
    background: #6e07f3;
  }

  @media (max-width: 1180px) {
    width: 50%;
  }
  @media (max-width: 920px) {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const TalkButton = styled(CvButton)`
  color: #ffff;
  background: #6e07f3;

  &:hover {
    color: #6e07f3;
    background: #ffff;
  }
`;

export const ImageAnimated = styled.img`
  width: 150px;
  position: absolute;
  top: 130px;
  left: 200px;
  animation: ${rotate} 5s linear infinite;

  @media (max-width: 1600px) {
    top: 100px;
    left: 300px;
    width: 130px;
    opacity: 0.4;
  }

  @media (max-width: 800px) {
    top: 100px;
    left: 250px;
    width: 120px;
    opacity: 0.4;
  }

  @media (max-width: 768px) {
    top: 100px;
    left: 20px;
    width: 100px;
  }

  @media (max-width: 500px) {
    width: 70px;
    opacity: 0.8;
  }
`;
