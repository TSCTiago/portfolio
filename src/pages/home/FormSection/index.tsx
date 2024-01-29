import * as S from './style';
import image from '../../../assets/programmer.png';
import Input from '../../../components/input';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'react-notifications-component/dist/theme.css';
import { Store } from 'react-notifications-component';
import { alertSuccess, alertWarning, alertDanger } from '../alerts.ts';

export default function FormSection() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  function sendEmail(e: any) {
    e.preventDefault();
    console.log('onsubmit', { nome, email, mensagem });

    if (nome === '' || email === '' || mensagem === '') {
      Store.addNotification(alertWarning);

      return;
    }

    const templateParams = {
      from_name: nome,
      message: mensagem,
      email: email,
    };
    emailjs.send('service_dc5m1lr', 'template_09ltwvl', templateParams, 'x-wAqTWkfaPms68Ij').then(
      (response) => {
        Store.addNotification(alertSuccess);
        console.log('EMAIL ENVIADO', response.status, response.text);
        setNome('');
        setEmail('');
        setMensagem('');
      },
      (error) => {
        console.log('ERRO', error);
        Store.addNotification(alertDanger);
      }
    );
  }
  return (
    <>
      <S.Container id="contact">
        <S.Form onSubmit={sendEmail}>
          <S.Title>Entre em contato</S.Title>
          <Input type="text" placeholder="Nome" value={nome} Isinput={true} onInputChange={setNome} />
          <Input type="text" placeholder="Email" value={email} Isinput={true} onInputChange={setEmail} />
          <Input type="text" placeholder="Mensagem" value={mensagem} Isinput={false} onInputChange={setMensagem} />
          <S.Submitbutton type="submit">Enviar</S.Submitbutton>
        </S.Form>

        <S.Img src={image} alt="img" />
      </S.Container>
    </>
  );
}
