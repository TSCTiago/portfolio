import React from 'react';

import * as S from './style';
import ProjectCard from '../../../components/ProjectCard';

export default function ProjectSection() {
  return (
    <>
      <S.Container>
        <S.Title>Meus projetos de inicialização</S.Title>
        <S.SubTitle>
          Sou um pouco viciado em produtos digitais. Ao longo dos anos, usei centenas de aplicativos web e móveis em diferentes
          setores e verticais. Eventualmente, decidi que seria um desafio divertido tentar projetar e construir o meu próprio.
        </S.SubTitle>
        <ProjectCard
          title="Porjeto 1"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </S.Container>
    </>
  );
}
