import * as S from './style';
import image from '../../../assets/programmer.png';
import Input from '../../../components/input';

export default function FormSection() {
  return (
    <>
      <S.Container>
        <S.Form>
          <S.Title>Entre em contato</S.Title>
          <Input type="text" placeholder="Nome" isInput={true} />
          <Input type="text" placeholder="Email" isInput={true} />
          <Input type="text" placeholder="Mensagem" isInput={false} />
          <S.Submitbutton>Enviar</S.Submitbutton>
        </S.Form>

        <S.Img src={image} alt="img" />
      </S.Container>
    </>
  );
}
