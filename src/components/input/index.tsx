import { useEffect, useState } from 'react';
import * as S from './style';

interface InputProps {
  type: string;
  placeholder: string;
  Isinput: boolean;
  value: string;
  onInputChange: (value: string) => void;
}
export default function Input({ type = 'text', placeholder, value, Isinput, onInputChange }: InputProps) {
  const [filled, setFilled] = useState(true);

  useEffect(() => {
    const isEmpty = value === '';
    isEmpty ? setFilled(true) : setFilled(false);
  }, [value]);

  return (
    <S.InputContainer>
      {!Isinput ? (
        <S.TextArea
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          onFocus={() => setFilled(false)}
          onBlur={() => (value == '' ? setFilled(true) : setFilled(false))}
        />
      ) : (
        <S.InputElement
          // inputis={inputis}
          type={type}
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          onFocus={() => setFilled(false)}
          onBlur={() => (value == '' ? setFilled(true) : setFilled(false))}
        />
      )}
      <S.InputLabel filled={filled.toString()}>{placeholder}</S.InputLabel>
    </S.InputContainer>
  );
}
