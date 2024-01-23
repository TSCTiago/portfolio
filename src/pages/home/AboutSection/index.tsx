import React from 'react';

import * as S from './style';
import aboutImage from '../../../assets/about_me.gif';
import Card from '../../../components/card';
import { Html5, Css3, Javascript, ReactLogo, TailwindCss, Figma, Nodejs, Git, Bootstrap } from '@styled-icons/boxicons-logos';
import { Nextdotjs, Php, Mysql, Styledcomponents } from '@styled-icons/simple-icons';

import { LogoLaravel } from '@styled-icons/ionicons-solid/LogoLaravel';
export default function AboutSection() {
  const cardInfos = [
    {
      title: 'html',
      icon: <Html5 size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'css',
      icon: <Css3 size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'javascript',
      icon: <Javascript size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'react',
      icon: <ReactLogo size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'next js',
      icon: <Nextdotjs size={55} />,
      tagColor: '#F14613',
    },
    {
      title: 'tailwind css',
      icon: <TailwindCss size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'bootstrap',
      icon: <Bootstrap size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'figma',
      icon: <Figma size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'git',
      icon: <Git size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'styled components',
      icon: <Styledcomponents size={60} />,
      tagColor: '#F14613',
    },
    {
      title: 'node js',
      icon: <Nodejs size={60} />,
      tagColor: '#2199BF',
    },
    {
      title: 'php',
      icon: <Php size={60} />,
      tagColor: '#2199BF',
    },
    {
      title: 'laravel',
      icon: <LogoLaravel size={60} />,
      tagColor: '#2199BF',
    },
    {
      title: 'mysql',
      icon: <Mysql size={60} />,
      tagColor: '#2199BF',
    },
  ];
  return (
    <>
      <S.Container>
        <S.Title>Olá. Meu nome é Tiago!</S.Title>
        <S.Div>
          <S.AboutText>
            Desde que comecei minha jornada como designer freelancer, há mais de 11 anos, fiz trabalho remoto para agências,
            prestei consultoria para startups e colaborei com pessoas talentosas para criar produtos digitais para uso comercial e
            de consumo. Estou silenciosamente confiante, naturalmente curioso e trabalhando continuamente para melhorar minhas
            habilidades, um problema de design de cada vez.
          </S.AboutText>
          <S.Image src={aboutImage} alt="me" />
        </S.Div>
        <S.SubTitle>Minhas Skills</S.SubTitle>

        <S.CardArea>
          {cardInfos.map((info) => (
            <Card title={info.title} icon={info.icon} tagColor={info.tagColor} />
          ))}
        </S.CardArea>

        <S.TalkToMe>
          <S.TalkTitle>Interessado em colaborar comigo?</S.TalkTitle>
          <S.TalkSubTitle>
            Estou sempre aberto para discutir trabalhos de design de produtos ou oportunidades de parceria.
          </S.TalkSubTitle>
          <S.Talkbutton>Vamos conversar</S.Talkbutton>
        </S.TalkToMe>
      </S.Container>
    </>
  );
}
