import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  border-radius: 10px;
  background: #6e07f3;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  margin: 0 10%;
`;
export const DivInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 8px;
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
`;
export const SubTitle = styled.h3`
  font-size: 1rem;
  text-align: justify;
  font-weight: 500;
`;

export const TechText = styled.h3`
  font-size: 1.3rem;
  font-weight: 500;
`;
export const DivLogos = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
`;
export const DivLink = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 5px;
  /* align-items: center; */
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
  /* align-items: center; */
`;

export const Icon = styled.div`
  margin: 0;
`;

export const Img = styled.img`
  width: 50%;
`;

export const Tag = styled.span`
  position: absolute;
  background: #00d9ff;
  height: 5px;
  width: 100%;
  bottom: 0;
  left: 0;
  border-radius: 0 0 10px 10px;
`;
