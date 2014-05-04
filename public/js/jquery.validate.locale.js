'use strict';

$.validate = {
  messages: {
    en: {
      name: {
        required: 'Please, enter your name'
      },
      email: {
        required: 'Please, enter your email',
        email: 'Please, enter a valid email'
      },
      message: {
        required: 'Please, type a message'
      }
    },
    ptBr: {
      name: {
        required: 'Por favor, informe seu nome'
      },
      email: {
        required: 'Por favor, informe seu email',
        email: 'Por favor, informe um email válido'
      },
      message: {
        required: 'Por favor, digite uma mensagem'
      }
    }
  }
};
