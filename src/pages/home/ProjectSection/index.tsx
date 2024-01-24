import * as S from './style';
import ProjectCard from '../../../components/ProjectCard';
import { dataCard } from '../../../data/projectCard';

export default function ProjectSection() {
  return (
    <>
      <S.Container>
        <S.Title>Meus projetos de inicialização</S.Title>
        <S.SubTitle>
          Sou um pouco viciado em produtos digitais. Ao longo dos anos, usei centenas de aplicativos web e móveis em diferentes
          setores e verticais. Eventualmente, decidi que seria um desafio divertido tentar projetar e construir o meu próprio.
        </S.SubTitle>
        {dataCard.map((data, i) => (
          <ProjectCard key={i} title={data.title} description={data.description} img={data.img} techs={data.techs} />
        ))}
      </S.Container>
    </>
  );
}
