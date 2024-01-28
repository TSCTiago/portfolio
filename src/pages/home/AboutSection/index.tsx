import { useEffect, useState } from 'react';

import * as S from './style';
import aboutImage from '../../../assets/about_me.gif';
import Card from '../../../components/card';
import { Html5, Css3, Javascript, ReactLogo, TailwindCss, Figma, Nodejs, Git, Bootstrap } from '@styled-icons/boxicons-logos';
import { Nextdotjs, Php, Mysql, Styledcomponents, Typescript } from '@styled-icons/simple-icons';
import { LogoLaravel } from '@styled-icons/ionicons-solid/LogoLaravel';
export default function AboutSection() {
  const [size, setSize] = useState(55);

  const nowDate = new Date();
  const dateBirth = new Date('2002-07-02');

  const age = Math.floor((nowDate.getTime() - dateBirth.getTime()) / (365.25 * 24 * 60 * 60 * 1000));

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < 720 ? setSize(40) : setSize(55);
    };
    window.addEventListener('resize', handleResize);
  }, []);
  const cardInfos = [
    {
      title: 'html',
      icon: <Html5 size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'css',
      icon: <Css3 size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'javascript',
      icon: <Javascript size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'Typescript',
      icon: <Typescript size={size - 12} />,
      tagColor: '#F14613',
    },
    {
      title: 'react',
      icon: <ReactLogo size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'next js',
      icon: <Nextdotjs size={size - 4} />,
      tagColor: '#F14613',
    },
    {
      title: 'tailwind css',
      icon: <TailwindCss size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'bootstrap',
      icon: <Bootstrap size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'figma',
      icon: <Figma size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'git',
      icon: <Git size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'styled components',
      icon: <Styledcomponents size={size} />,
      tagColor: '#F14613',
    },
    {
      title: 'node js',
      icon: <Nodejs size={size} />,
      tagColor: '#2199BF',
    },
    {
      title: 'php',
      icon: <Php size={size} />,
      tagColor: '#2199BF',
    },
    {
      title: 'laravel',
      icon: <LogoLaravel size={size} />,
      tagColor: '#2199BF',
    },
    {
      title: 'mysql',
      icon: <Mysql size={size} />,
      tagColor: '#2199BF',
    },
  ];
  return (
    <>
      <S.Container>
        <S.Title>Olá. Meu nome é Tiago!</S.Title>
        <S.Div>
          <S.Bar />
          <S.AboutText>
            Tenho {age} anos. Atualmente, sou estudante de Ciência da Computação e tenho grande apreço pelo estudo, explorando as
            incríveis possibilidades que a tecnologia oferece. Desde o início da minha jornada na programação, acumulei
            experiência como estagiário e participei de projetos na faculdade. Atuo como desenvolvedor front-end e back-end. Estou
            naturalmente confiante e curioso, dedicando-me constantemente ao aprimoramento das minhas habilidades.
          </S.AboutText>
          <S.Image src={aboutImage} alt="me" />
        </S.Div>
        <S.SubTitle>Minhas Skills</S.SubTitle>

        <S.CardArea>
          {cardInfos.map((info, i) => (
            <Card key={i} title={info.title} icon={info.icon} tagColor={info.tagColor} />
          ))}
        </S.CardArea>

        <S.TalkToMe>
          <S.TalkTitle>Interessado em colaborar comigo?</S.TalkTitle>
          <S.TalkSubTitle>
            Estou sempre aberto a discutir projetos de desenvolvimento de software ou oportunidades de colaboração.
          </S.TalkSubTitle>
          <S.Talkbutton href="https://www.linkedin.com/in/tiago-silva-carvalho-2b6244223/" target="_blank">
            Vamos trabalhar juntos
          </S.Talkbutton>
        </S.TalkToMe>
      </S.Container>
    </>
  );
}
