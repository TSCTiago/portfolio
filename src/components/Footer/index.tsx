import * as S from './style';
import logo from '../../assets/logo_branca.gif';
import { Whatsapp, Instagram, Linkedin, Github, Gmail } from '@styled-icons/boxicons-logos/';
export default function Footer() {
  return (
    <>
      <S.Container>
        <S.Img src={logo} alt="logo" width="50px" height="auto" />
        <S.Phrase>Vivendo, aprendendo e subindo de nível um dia de cada vez.</S.Phrase>

        <S.AreaButtons>
          <S.Link href="whatsapp://send?text=Olá!&phone=+5586981918464" aria-label="whatsapp" target="_blank">
            <Whatsapp size={30} />
          </S.Link>
          <S.Link href="https://www.instagram.com/tiago_s010/" aria-label="instagram" target="_blank">
            <Instagram size={30} />
          </S.Link>
          <S.Link href="https://www.linkedin.com/in/tiago-silva-carvalho-2b6244223/" aria-label="linkedin" target="_blank">
            <Linkedin size={30} />
          </S.Link>
          <S.Link href="https://github.com/TSCTiago" aria-label="github" target="_blank">
            <Github size={30} />
          </S.Link>
          <S.Link href="mailto:tiagosilvacarvalho07@gmail.com" aria-label="email">
            <Gmail size={30} />
          </S.Link>
        </S.AreaButtons>
        <div>
          <div>Feito por @TSCTiago</div>
        </div>
        <div>@TSCTiago all rights reserved</div>
      </S.Container>
    </>
  );
}
