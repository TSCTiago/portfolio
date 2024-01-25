import * as S from './style';
import logo from '../../assets/logo_branca.gif';
import { Whatsapp, Instagram, Linkedin, Github, Gmail } from '@styled-icons/boxicons-logos/';
export default function Footer() {
  return (
    <>
      <S.Container>
        <S.Img src={logo} alt="logo" width={50} />
        <S.Phrase>Vivendo, aprendendo e subindo de nível um dia de cada vez.</S.Phrase>

        <S.AreaButtons>
          <S.Link href="whatsapp://send?text=Olá!&phone=+5586981918464" target="_blank">
            <Whatsapp size={30} />
          </S.Link>
          <S.Link href="https://www.instagram.com/tiago_s010/" target="_blank">
            <Instagram size={30} />
          </S.Link>
          <S.Link href="https://www.linkedin.com/in/tiago-silva-carvalho-2b6244223/" target="_blank">
            <Linkedin size={30} />
          </S.Link>
          <S.Link href="https://github.com/TSCTiago" target="_blank">
            <Github size={30} />
          </S.Link>
          <S.Link href="mailto:tiagosilvacarvalho07@gmail.com">
            <Gmail size={30} />
          </S.Link>
        </S.AreaButtons>
        <div>
          <h4>Feito à mão por @TSCTiago</h4>
        </div>
        <div>@TSCTiago all rights reserved</div>
      </S.Container>
    </>
  );
}
