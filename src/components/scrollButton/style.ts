import styled from 'styled-components';

export const ScrollTopButton = styled.div`
  z-index: 9999;
  display: flex;
  box-shadow: 1px 1px 1px black;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: #6e07f3;
  color: #fff;
  /* margin: ; */
  border-radius: 10px;
  width: 50px;
  height: 50px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 2rem;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.1);
  }
`;
