import styled from 'styled-components';

interface labelProps {
  filled: string;
}

export const InputContainer = styled.div`
  width: 70%;

  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const InputLabel = styled.label<labelProps>`
  position: absolute;
  pointer-events: none;
  transform: ${(props) => (props.filled === 'false' ? 'translate(0, 12px) scale(0.8)' : 'translate(0, 23px) scale(1)')};
  transform-origin: top left;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  /* color: #ffffff; */
  color: black;
  font-weight: 700;
  font-size: 16px;
  line-height: 1;
  left: 16px;
`;

const baseInputStyles = `
  height: 64px;
  transform-origin: top left;
  border-radius: 4px;
  border: 2px solid #2199bf;
  padding: 24px 16px 4px 16px;
  font-size: 16px;
  line-height: 1;
  outline: none;
  box-shadow: none;
  transition: 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  // background: #10607A;
  color: #000;

  &:focus {
    box-shadow: 0 0 0 2px #2199bf;
  }
`;

export const InputElement = styled.input`
  ${baseInputStyles}
  height: 64px;
`;

export const TextArea = styled.textarea`
  max-width: 100%;
  ${baseInputStyles}
  height: 128px;
  padding: 34px 16px 4px 16px;
`;
