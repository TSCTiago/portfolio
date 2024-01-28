// import { Store } from 'react-notifications-component';

import { iNotification } from 'react-notifications-component';

export const alertSuccess: iNotification = {
  title: 'Sucesso!',
  message: 'Email Enviado com sucesso!!',
  type: 'success',
  insert: 'bottom',
  container: 'bottom-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

export const alertWarning: iNotification = {
  title: 'Alerta!',
  message: 'Preencha todos os campos do formulário',
  type: 'warning',
  insert: 'bottom',
  container: 'bottom-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

export const alertDanger: iNotification = {
  title: 'Erro!',
  message: 'Desculpe! Algo deu errado',
  type: 'danger',
  insert: 'bottom',
  container: 'bottom-right',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};
