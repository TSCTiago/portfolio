import { ChangeEvent, useState } from 'react';
import * as S from './style';

interface InputProps {
  type: string;
  placeholder: string;
  isInput: boolean;
}
export default function Input({ type = 'text', placeholder, isInput }: InputProps) {
  const [value, setValue] = useState('');
  const [filled, setFilled] = useState(true);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <S.InputContainer>
      <S.InputElement
        isInput={isInput}
        type={type}
        value={value}
        onChange={handleChange}
        onFocus={() => setFilled(false)}
        onBlur={() => (value == '' ? setFilled(true) : setFilled(false))}
      />
      <S.InputLabel filled={filled}>{placeholder}</S.InputLabel>
    </S.InputContainer>
  );
}
