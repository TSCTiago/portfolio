import * as S from './style';
import ProjectCard from '../../../components/ProjectCard';
import { dataCard } from '../../../data/projectCard';

export default function ProjectSection() {
  return (
    <>
      <S.Container>
        <S.Title>Meus projetos de inicialização</S.Title>
        <S.SubTitle>
          Tenho um interesse significativo por soluções digitais. Ao longo dos anos, explorei inúmeros aplicativos web em
          diferentes setores. Recentemente, decidi que seria um desafio envolvente tentar desenvolver meus próprios projetos nesse
          campo.
        </S.SubTitle>
        {dataCard.map((data, i) => (
          <ProjectCard key={i} title={data.title} description={data.description} img={data.img} techs={data.techs} />
        ))}
      </S.Container>
    </>
  );
}
