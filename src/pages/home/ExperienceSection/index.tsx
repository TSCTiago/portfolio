// import { useEffect, useState } from 'react';
import * as S from './style';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Byte, Html5, Css3, Javascript, Php, Tailwindcss, Codemagic } from '@styled-icons/simple-icons';
import { LogoLaravel } from '@styled-icons/ionicons-solid/LogoLaravel';
import { LocationPin, TextDocument } from '@styled-icons/entypo/';
export default function ExperienceSection() {
  return (
    <>
      <S.Container>
        <S.Title>Minhas experiências profissionais!</S.Title>
        <VerticalTimeline lineColor="#F14613" layout="2-columns">
          <VerticalTimelineElement
            contentStyle={S.contentStyle}
            contentArrowStyle={S.contentArrowStyle}
            dateClassName="black"
            date="Agosto 2021 - Setembro 2021"
            iconStyle={S.iconStyles}
            icon={<Codemagic size={50} />}
          >
            <S.CardTitle>
              <Byte size={20} />
              Desenvolvimento Site Exata Engenharia Solar
            </S.CardTitle>
            <S.CardLocation>
              <LocationPin size={21} />
              Parnaíba, PI
            </S.CardLocation>
            <S.CardDescription>
              <TextDocument size={40} />
              Site institucional da empresa, onde são divulgados os serviços e seus portfolio de projetos instalados.
            </S.CardDescription>
            <S.CardDescription>Techs:</S.CardDescription>
            <S.Techs>
              <Html5 size={35} />
              <Css3 size={35} />
              <Javascript size={35} />
              <Tailwindcss size={35} />
              <Php size={35} />
            </S.Techs>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={S.contentStyle}
            contentArrowStyle={S.contentArrowStyle}
            dateClassName="black"
            date="Abril 2021 - Outubro 2021"
            iconStyle={S.iconStyles}
            icon={<Codemagic size={50} />}
          >
            <S.CardTitle>
              <Byte size={20} />
              Desenvolvimento sistema gestor solar
            </S.CardTitle>
            <S.CardLocation>
              <LocationPin size={21} />
              Parnaíba, PI
            </S.CardLocation>
            <S.CardDescription>
              <TextDocument size={40} />
              Sistema que a empresa ultiliza para monitorar e gerenciar seus projetos de sistema de energia solar instalados nas
              residências dos clientes.
            </S.CardDescription>
            <S.CardDescription>Techs:</S.CardDescription>
            <S.Techs>
              <Html5 size={35} />
              <Css3 size={35} />
              <Javascript size={35} />
              <Tailwindcss size={35} />
              <Php size={35} />
              <LogoLaravel size={35} />
            </S.Techs>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </S.Container>
    </>
  );
}
