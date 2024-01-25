import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  overflow: hidden;
  font-size: 20px;
  padding: 20px;
  gap: 20px;
  background: #f3f3fd;
  z-index: 0;
  color: #ffff;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 0 0;
    background-color: #6e07f3;

    z-index: -1;
    opacity: 0.7;
    @media (max-width: 768px) {
      border-radius: 5% 5% 0 0;
    }
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 0 0;
    background-color: #6e07f3;

    z-index: -1;
    opacity: 0.7;
    @media (max-width: 768px) {
      border-radius: 5% 5% 0 0;
    }
  }

  /* @media (min-width: 2000px) {
    background: linear-gradient(to bottom, #00ae96 70%, #fff 30%);
    padding: 20px 500px;
  } */
  @media (max-width: 768px) {
    padding-bottom: 50px;
  }
`;

export const Img = styled.img`
  margin-top: 30px;
`;

export const Phrase = styled.h3`
  width: 350px;
  font-size: 1rem;
  text-align: left;
  font-weight: 400;
  color: #f3f3fd;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const AreaButtons = styled.div`
  gap: 20px;
  color: #ffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative; /* Adicionado */
  @media (max-width: 768px) {
    /* padding-bottom: 50px; */
  }
`;

export const Link = styled.a`
  text-align: center;
  color: #ffff;
  border: 1.5px solid #fff;
  border-radius: 50px;
  padding: 5px;
  transition: 0.3s;

  &:hover {
    border-color: #00ae96;
    color: #ffff;
    transform: scale(1.1);
    background: #00ae96;
  }
`;
