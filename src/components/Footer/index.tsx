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
          <S.Link href="#">
            <Whatsapp size={30} />
          </S.Link>
          <S.Link href="#">
            <Instagram size={30} />
          </S.Link>
          <S.Link href="#">
            <Linkedin size={30} />
          </S.Link>
          <S.Link href="#">
            <Github size={30} />
          </S.Link>
          <S.Link href="#">
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
