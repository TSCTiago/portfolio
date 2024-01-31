import { useEffect, useState } from 'react';
import * as S from './style';

interface InputProps {
  type: string;
  placeholder: string;
  Isinput: boolean;
  value: string;
  id: string;
  onInputChange: (value: string) => void;
}
export default function Input({ type = 'text', placeholder, value, Isinput, onInputChange, id }: InputProps) {
  const [filled, setFilled] = useState(true);

  useEffect(() => {
    const isEmpty = value === '';
    isEmpty ? setFilled(true) : setFilled(false);
  }, [value]);

  return (
    <S.InputContainer>
      {!Isinput ? (
        <S.TextArea
          id={id}
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          onFocus={() => setFilled(false)}
          onBlur={() => (value == '' ? setFilled(true) : setFilled(false))}
        />
      ) : (
        <S.InputElement
          id={id}
          type={type}
          value={value}
          onChange={(e) => onInputChange(e.target.value)}
          onFocus={() => setFilled(false)}
          onBlur={() => (value == '' ? setFilled(true) : setFilled(false))}
        />
      )}
      <S.InputLabel htmlFor={id} filled={filled.toString()}>
        {placeholder}
      </S.InputLabel>
    </S.InputContainer>
  );
}
