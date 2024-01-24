import { styled, keyframes } from 'styled-components';
interface CardProps {
  color: string;
}
const rotate = keyframes`
    0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(-360deg);
        }
`;
export const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #6e07f3;
  padding: 10px;
  gap: 10px;
  /* margin: 10px; */
  border-radius: 5px;
  width: 150px;
  transition: 0.3s;
  &:hover {
    transform: scale(1.1);
  }
  &::before {
    content: '';
    background-image: conic-gradient(${(props) => props.color} 20deg, transparent 120deg);
    width: 150%;
    height: 150%;
    position: absolute;
    animation: ${rotate} 4s linear infinite;
  }

  &::after {
    content: '';
    width: 94%;
    height: 94%;
    background: #6e07f3;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: larger;
    letter-spacing: 5px;
  }
  @media (max-width: 768px) {
    width: 130px;
  }
`;

export const Title = styled.h3`
  z-index: 999;
  font-size: 1rem;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
export const Icon = styled.div`
  color: #fff;
  z-index: 999;
`;
