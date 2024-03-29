import * as S from './style';
import img from '../../../assets/dev.avif';
// import me from '../../assets/eu.png';
import me from '../../../assets/eu.avif';
import imageAnimated from '../../../assets/triangle.avif';
import cv from '../../../assets/cv/Currículo-Tiago.pdf';

import { TypeAnimation } from 'react-type-animation';

export default function HomeContainer() {
  return (
    <>
      <S.Container id="home">
        <S.ImageAnimated src={imageAnimated} alt="image" />
        <S.Left>
          <S.Me src={me} alt="my-Avatar" width="170" height="auto" />

          <S.Text>
            bem-vindo ao meu site portfolio! Sou Programador
            <S.TextDynamic>
              <TypeAnimation
                sequence={['front-end', 1000, 'back-end', 2000, 'freelancer', 1000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </S.TextDynamic>
          </S.Text>
          <S.AreaButtons>
            <S.CvButton href={cv} target="_blank">
              Meu CV
            </S.CvButton>
            <S.TalkButton href="whatsapp://send?text=Olá!&phone=+5586981918464" target="_blank">
              Vamos Conversar
            </S.TalkButton>
          </S.AreaButtons>
        </S.Left>
        <S.Right>
          <S.HomeImage width="90%" height="auto" src={img} alt="image" />
        </S.Right>
      </S.Container>
    </>
  );
}
