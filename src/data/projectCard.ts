import html from '../assets/logos/html.png';
import css from '../assets/logos/css.png';
import javascript from '../assets/logos/javascript.png';
import typescript from '../assets/logos/typescript.png';
import react from '../assets/logos/react.png';
import tailwind from '../assets/logos/tailwindcss.png';
import bootstrap from '../assets/logos/bootstrap.png';
import node from '../assets/logos/node.png';

// import figma from '../assets/logos/figma.png'
// import git from '../assets/logos/git.png'
// import mysql from '../assets/logos/mysql.png'
// import nextJs from '../assets/logos/nextJs.png'
// import php from '../assets/logos/php.png';

import elections from '../assets/projects/elections.png';
import soudbeat from '../assets/projects/sound-beat.png';
import disney from '../assets/projects/disney-plus.png';
import apod from '../assets/projects/apod.png';
import smartWatch from '../assets/projects/smartwacth.png';
import masterFinance from '../assets/projects/master-finance.png';
import vestibruxando from '../assets/projects/vestibruxando.png';

export const dataCard = [
  {
    title: 'Eleições 2022',
    img: elections,
    description:
      'O projeto Eleições 2022, desenvolvido com React, HTML, CSS, JavaScript, Node.js e TypeScript, proporciona acesso aos resultados das eleições gerais no estado do Piauí. Com uma arquitetura front-end e back-end integrada, o React oferece uma interface dinâmica, enquanto o Node.js e TypeScript gerenciam a API que conecta o front end ao banco de dados SQLite, permitindo uma experiência eficaz na visualização e análise dos dados eleitorais.',
    techs: [html, css, javascript, typescript, node, react],
    link: 'https://github.com/TSCTiago/elections-2022',
    demo: '#',
  },
  {
    title: 'Sound Beat',
    img: soudbeat,
    description:
      'A interface front-end de projeto é uma experiência dinâmica e envolvente, construída com uma combinação de HTML, CSS, JavaScript e Bootstrap. Essa sinergia de tecnologias resulta em uma plataforma visualmente atraente e de fácil utilização.',
    techs: [html, css, javascript, bootstrap],
    link: 'https://github.com/TSCTiago/sound-beat',
    demo: 'https://tsctiago.github.io/sound-beat/',
  },
  {
    title: 'Clone Disney+',
    img: disney,
    description:
      'O projeto de front-end com HTML, CSS, JavaScript e Tailwind é um clone visual do Disney Plus, recriando a interface do popular serviço de streaming. Com uma abordagem responsiva e estilizada, busca proporcionar aos usuários uma experiência semelhante ao explorar o conteúdo da plataforma.',
    techs: [html, css, javascript, tailwind],
    link: 'https://github.com/TSCTiago/clone-disney-plus',
    demo: 'https://tsctiago.github.io/clone-disney-plus/',
  },
  {
    title: 'astronomy picture of the day - APOD',
    img: apod,
    description:
      'Este projeto web, desenvolvido com HTML, CSS e JavaScript, utiliza a API da NASA para buscar e exibir a "Astronomy Picture of the Day". A interface intuitiva permite aos usuários explorar imagens astronômicas e seus dados de forma fácil. Com um design responsivo, o projeto oferece uma experiência visual cativante e educativa sobre o universo.',
    techs: [html, css, javascript],
    link: 'https://github.com/TSCTiago/Astronomy-Picture-APOD',
    demo: 'https://tsctiago.github.io/Astronomy-Picture-APOD/',
  },
  {
    title: 'SmartWatch',
    img: smartWatch,
    description:
      'Este projeto front-end, criado com HTML, CSS e JavaScript, destaca uma seleção de smartwatches com seus respectivos preços. A interface intuitiva permite aos usuários explorar facilmente as opções disponíveis, proporcionando uma experiência de navegação simplificada para quem busca informações sobre relógios inteligentes.',
    techs: [html, css, javascript],
    link: 'https://github.com/TSCTiago/SmartWatch',
    demo: 'https://tsctiago.github.io/SmartWatch/',
  },
  {
    title: 'Master Finance',
    img: masterFinance,
    description:
      'O Master Finance, um projeto de front-end em HTML, CSS e JavaScript, oferece uma interface simples para registrar e acompanhar gastos e ganhos financeiros. Calculando e exibindo o saldo, o site facilita a gestão financeira pessoal de forma eficiente e acessível.',
    techs: [html, css, javascript],
    link: 'https://github.com/TSCTiago/MasterFinance',
    demo: 'https://tsctiago.github.io/MasterFinance/',
  },
  {
    title: 'Vestibruxando',
    img: vestibruxando,
    description:
      'O Vestibruxando, meu projeto inaugural de front-end utilizando HTML e CSS, tem como propósito disponibilizar provas anteriores do ENEM para estudantes. Embora sua estrutura seja simples, o desenvolvimento foi marcado por uma dedicação significativa. A plataforma visa oferecer aos alunos uma ferramenta amigável e acessível, permitindo uma preparação eficaz por meio da prática com materiais autênticos.',
    techs: [html, css],
    link: 'https://github.com/TSCTiago/vestibruxandosite',
    demo: 'https://tsctiago.github.io/vestibruxandosite/',
  },
];
