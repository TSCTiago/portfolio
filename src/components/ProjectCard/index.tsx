import * as S from './style';
import { CodeSlash, ArrowForward, Eye } from '@styled-icons/ionicons-solid';

interface CardProps {
  title: string;
  description: string;
  img: string;
  techs: string[];
  link: string;
  demo: string;
}
export default function ProjectCard({ title, description, img, techs, link, demo }: CardProps) {
  return (
    <S.Card>
      <S.DivImg>
        <S.Img src={img} alt="portfolio" width="550px" height="auto" />
      </S.DivImg>

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
            <S.Logo key={i} src={tech} alt="tech" width="40px" height="auto" />
          ))}
        </S.DivLogos>
        <S.DivLink>
          <S.Link href={demo} target="_blank" style={{ pointerEvents: demo == '#' ? 'none' : 'all' }}>
            Ver demo{' '}
            <span>
              <Eye size={30} />
            </span>
          </S.Link>
          <S.Link href={link} target="_blank">
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
