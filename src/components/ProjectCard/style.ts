import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border-radius: 5px;
  background: #6e07f3;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 20px;
  gap: 20px;
  margin: 20px 10%;
  box-shadow: 10px 10px lightblue;
  @media (min-width: 2000px) {
    padding: 30px 20px;
  }
  @media (max-width: 1100px) {
    flex-direction: column;
    margin: 20px 2%;
  }
`;
export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
  padding: 10px;
  @media (max-width: 768px) {
    align-items: center;
  }
`;
export const DivTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h3`
  font-size: 1.3rem;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const SubTitle = styled.h3`
  font-size: 0.9rem;
  text-align: justify;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const TechText = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const DivLogos = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Logo = styled.img`
  width: 45px;
  @media (max-width: 768px) {
    width: 40px;
  }
`;

export const DivLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
    gap: 5px;
    align-items: center;
    justify-content: center;
  }
`;

export const Link = styled.a`
  font-size: 1.05rem;
  text-decoration: none;
  color: #fff;
  transition: 0.3s;
  &:hover {
    font-weight: bold;
    color: #00ae96;
  }
`;

export const Icon = styled.div`
  margin: 0;
`;

export const DivImg = styled.div`
  @media (min-width: 2000px) {
    width: 40%;
  }

  &:hover {
    transform: scale(1.01);
    filter: brightness(75%);
  }
`;

export const Img = styled.img`
  width: 550px;
  border-radius: 5px;

  @media (min-width: 2000px) {
    width: 500px;
  }
  @media (max-width: 1450px) {
    width: 450px;
  }

  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export const Tag = styled.span`
  position: absolute;
  background: #00d9ff;
  height: 5px;
  width: 100%;
  bottom: 0;
  left: 0;
  border-radius: 0 0 5px 5px;
`;
