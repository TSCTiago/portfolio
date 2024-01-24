import * as S from './style';
import { CodeSlash, ArrowForward } from '@styled-icons/ionicons-solid';

interface CardProps {
  title: string;
  description: string;
  img: string;
  techs: string[];
}
export default function ProjectCard({ title, description, img, techs }: CardProps) {
  return (
    <S.Card>
      <S.Img src={img} alt="portfolio" />

      <S.DivInfos>
        <S.DivTitle>
          <S.Icon>
            <CodeSlash size={30} />
          </S.Icon>
          <S.Title>{title}</S.Title>
        </S.DivTitle>
        <S.SubTitle>{description}</S.SubTitle>

        <S.TechText>Techs:</S.TechText>

        <S.DivLogos>
          {techs.map((tech, i) => (
            <S.Logo key={i} src={tech} alt="tech" />
          ))}
        </S.DivLogos>
        <S.DivLink>
          <S.Link href="#">
            Ver respositório{' '}
            <span>
              <ArrowForward size={30} />
            </span>
          </S.Link>
        </S.DivLink>
      </S.DivInfos>
      <S.Tag />
    </S.Card>
  );
}
