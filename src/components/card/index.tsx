import * as S from './style';

interface CardProps {
  title: string;
  icon: JSX.Element;
  tagColor: string;
}
export default function Card({ title, icon, tagColor }: CardProps) {
  return (
    <S.Card color={tagColor}>
      {/* <S.Tag ></S.Tag> */}
      <S.Icon>{icon}</S.Icon>
      <S.Title>{title}</S.Title>
    </S.Card>
  );
}
